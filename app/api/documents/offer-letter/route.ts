import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createOfferLetterSchema } from "@/validations/offer-letter.validation";

const prisma = new PrismaClient();

/**
 * GET
 * Get all offer letters
 *
 * GET /api/documents/offer-letter
 */
export async function GET() {
    try {
        const offerLetters = await prisma.offerLetter.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(
            {
                success: true,
                data: offerLetters,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("GET OFFER LETTERS ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch offer letters",
            },
            {
                status: 500,
            }
        );
    }
}

/**
 * POST
 * Create offer letter
 *
 * POST /api/documents/offer-letter
 */
export async function POST(request: NextRequest) {
    try {
        /* =====================================================
           Parse Request Body
        ===================================================== */

        let body;

        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid JSON request body",
                },
                {
                    status: 400,
                }
            );
        }

        /* =====================================================
           Joi Validation
        ===================================================== */

        const { error, value } = createOfferLetterSchema.validate(body, {
            abortEarly: false,
            allowUnknown: false,
            stripUnknown: false,
            convert: true,
        });

        if (error) {
            const errors = error.details.map((detail) => ({
                field: detail.path.join("."),
                message: detail.message.replace(/"/g, ""),
            }));

            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors,
                },
                {
                    status: 400,
                }
            );
        }

        /* =====================================================
           Validated Data
        ===================================================== */

        const {
            referenceNo,
            letterDate,

            // Candidate
            candidateName,
            candidateEmail,
            candidatePhone,
            candidateAddress,

            // Internship
            position,
            internshipType,
            duration,
            joiningDate,
            workMode,

            // Compensation
            initialPeriod,
            initialStipend,
            paidPeriod,
            monthlyStipend,
            totalStipend,

            // PPO
            ppoEligible,
            ppoDescription,

            // Company
            companyId,

            // Acceptance
            acceptanceEnabled,
            acceptanceDate,

            // Document
            status,
            pdfUrl,
            generatedAt,

            // Application
            applicationId,
        } = value;

        /* =====================================================
           Check Duplicate Reference Number
        ===================================================== */

        const existingOffer = await prisma.offerLetter.findUnique({
            where: {
                referenceNo,
            },
        });

        if (existingOffer) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Offer letter with this reference number already exists",
                    errors: [
                        {
                            field: "referenceNo",
                            message: "Reference number must be unique",
                        },
                    ],
                },
                {
                    status: 409,
                }
            );
        }

        /* =====================================================
           Check Company
        ===================================================== */

        const company = await prisma.company.findUnique({
            where: {
                id: companyId,
            },
        });

        if (!company) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Company not found",
                    errors: [
                        {
                            field: "companyId",
                            message: "Invalid company ID",
                        },
                    ],
                },
                {
                    status: 404,
                }
            );
        }

        /* =====================================================
           Validate Dates
        ===================================================== */

        const parsedLetterDate = letterDate
            ? new Date(letterDate)
            : new Date();

        const parsedJoiningDate = new Date(joiningDate);

        if (isNaN(parsedLetterDate.getTime())) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid letter date",
                    errors: [
                        {
                            field: "letterDate",
                            message: "Please provide a valid date",
                        },
                    ],
                },
                {
                    status: 400,
                }
            );
        }

        if (isNaN(parsedJoiningDate.getTime())) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid joining date",
                    errors: [
                        {
                            field: "joiningDate",
                            message: "Please provide a valid date",
                        },
                    ],
                },
                {
                    status: 400,
                }
            );
        }

        /* =====================================================
           Create Offer Letter
        ===================================================== */

        const offerLetter = await prisma.offerLetter.create({
            data: {
                /* ---------------------------------------------
                   Reference
                --------------------------------------------- */

                referenceNo,

                letterDate: parsedLetterDate,

                /* ---------------------------------------------
                   Candidate
                --------------------------------------------- */

                candidateName,

                candidateEmail: candidateEmail || null,

                candidatePhone: candidatePhone || null,

                candidateAddress: candidateAddress || null,

                /* ---------------------------------------------
                   Internship
                --------------------------------------------- */

                position,

                internshipType: internshipType || null,

                duration,

                joiningDate: parsedJoiningDate,

                workMode,

                /* ---------------------------------------------
                   Compensation
                --------------------------------------------- */

                initialPeriod: initialPeriod || null,

                initialStipend: initialStipend || null,

                paidPeriod: paidPeriod || null,

                monthlyStipend:
                    monthlyStipend !== undefined &&
                        monthlyStipend !== null &&
                        monthlyStipend !== ""
                        ? Number(monthlyStipend)
                        : null,

                totalStipend:
                    totalStipend !== undefined &&
                        totalStipend !== null &&
                        totalStipend !== ""
                        ? Number(totalStipend)
                        : null,

                /* ---------------------------------------------
                   PPO
                --------------------------------------------- */

                ppoEligible:
                    ppoEligible !== undefined
                        ? Boolean(ppoEligible)
                        : false,

                ppoDescription: ppoDescription || null,

                /* ---------------------------------------------
                   Company Relation
                --------------------------------------------- */

                companyId,

                /* ---------------------------------------------
                   Acceptance
                --------------------------------------------- */

                acceptanceEnabled:
                    acceptanceEnabled !== undefined
                        ? Boolean(acceptanceEnabled)
                        : true,

                acceptanceDate: acceptanceDate
                    ? new Date(acceptanceDate)
                    : null,

                /* ---------------------------------------------
                   Document
                --------------------------------------------- */

                status: status || "draft",

                pdfUrl: pdfUrl || null,

                generatedAt: generatedAt
                    ? new Date(generatedAt)
                    : null,

                /* ---------------------------------------------
                   Application
                --------------------------------------------- */

                applicationId: applicationId || null,
            },

            /* ---------------------------------------------
               Return Company Information
            --------------------------------------------- */

            include: {
                company: true,
            },
        });

        /* =====================================================
           Success Response
        ===================================================== */

        return NextResponse.json(
            {
                success: true,
                message: "Offer letter created successfully",
                data: offerLetter,
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error("CREATE OFFER LETTER ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to create offer letter",
                error:
                    process.env.NODE_ENV === "development"
                        ? String(error)
                        : undefined,
            },
            {
                status: 500,
            }
        );
    }
}
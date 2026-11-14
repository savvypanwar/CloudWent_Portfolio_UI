import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * GET
 * Get offer letter by ID
 *
 * GET /api/documents/offer-letter/:id
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        /* =====================================================
           Get ID
        ===================================================== */

        const { id } = await params;

        /* =====================================================
           Validate ID
        ===================================================== */

        if (!id || typeof id !== "string") {
            return NextResponse.json(
                {
                    success: false,
                    message: "Offer letter ID is required",
                    errors: [
                        {
                            field: "id",
                            message: "Invalid offer letter ID",
                        },
                    ],
                },
                {
                    status: 400,
                }
            );
        }

        /* =====================================================
           Find Offer Letter
        ===================================================== */

        const offerLetter = await prisma.offerLetter.findUnique({
            where: {
                id,
            },
            include: {
                company: true,
            },
        });

        /* =====================================================
           Offer Letter Not Found
        ===================================================== */

        if (!offerLetter) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Offer letter not found",
                    errors: [
                        {
                            field: "id",
                            message: "No offer letter found with this ID",
                        },
                    ],
                },
                {
                    status: 404,
                }
            );
        }

        /* =====================================================
           Success Response
        ===================================================== */

        return NextResponse.json(
            {
                success: true,
                message: "Offer letter fetched successfully",
                data: offerLetter,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("GET OFFER LETTER BY ID ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch offer letter",
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
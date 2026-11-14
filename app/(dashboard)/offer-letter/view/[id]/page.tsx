import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma/prisma";
import fs from "fs/promises";
import path from "path";
import PrintButton from "@/components/ui/Button/PrintButton";

interface OfferLetterViewPageProps {
  params: Promise<{
    id: string;
  }>;
}

/**
 * Replace {{placeholder}} values inside HTML
 */
function replaceTemplateVariables(
  template: string,
  data: Record<string, string>
) {
  let html = template;

  Object.entries(data).forEach(([key, value]) => {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");

    html = html.replace(regex, value || "");
  });

  return html;
}

/**
 * Format date
 */
function formatDate(date: Date | null | undefined) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/**
 * Format currency
 */
function formatCurrency(value: number | null | undefined) {
  if (value === null || value === undefined) {
    return "";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default async function OfferLetterViewPage({
  params,
}: OfferLetterViewPageProps) {
  /**
   * =========================================================
   * Get ID
   * =========================================================
   */

  const { id } = await params;

  /**
   * =========================================================
   * Get Offer Letter
   * =========================================================
   */

  const offerLetter = await prisma.offerLetter.findUnique({
    where: {
      id,
    },
    include: {
      company: true,
    },
  });

  /**
   * =========================================================
   * If Offer Letter Not Found
   * =========================================================
   */

  if (!offerLetter) {
    notFound();
  }

  /**
   * =========================================================
   * Read HTML Template
   * =========================================================
   */

  const templatePath = path.join(
    process.cwd(),
    "templates",
    "internship.html"
  );

  let template: string;

  try {
    template = await fs.readFile(templatePath, "utf-8");
  } catch (error) {
    console.error("INTERNSHIP TEMPLATE ERROR:", error);

    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow">
          <h1 className="text-xl font-bold text-red-600">
            Template not found
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Could not find the internship HTML template.
          </p>

          <code className="mt-4 block rounded bg-gray-100 p-3 text-sm">
            templates/internship.html
          </code>
        </div>
      </div>
    );
  }

  /**
   * =========================================================
   * Template Data
   * =========================================================
   */

  const templateData: Record<string, string> = {
    /**
     * ---------------------------------------------------------
     * Company
     * ---------------------------------------------------------
     */

    companyName: offerLetter.company.name || "",

    companyAddress: offerLetter.company.address || "",

    companyEmail: offerLetter.company.email || "",

    companyWebsite: offerLetter.company.website || "",

    companyLogo: offerLetter.company.logoUrl || "",

    /**
     * ---------------------------------------------------------
     * HR
     * ---------------------------------------------------------
     */

    hrName: offerLetter.company.hrName || "",

    hrDesignation: offerLetter.company.hrDesignation || "",

    hrEmail: offerLetter.company.hrEmail || "",

    companySignature:
      offerLetter.company.signatureUrl || "",

    /**
     * ---------------------------------------------------------
     * Offer Letter
     * ---------------------------------------------------------
     */

    referenceNo: offerLetter.referenceNo || "",

    letterDate: formatDate(offerLetter.letterDate),

    /**
     * ---------------------------------------------------------
     * Candidate
     * ---------------------------------------------------------
     */

    candidateName: offerLetter.candidateName || "",

    candidateEmail: offerLetter.candidateEmail || "",

    candidatePhone: offerLetter.candidatePhone || "",

    candidateAddress: offerLetter.candidateAddress || "",

    /**
     * ---------------------------------------------------------
     * Internship
     * ---------------------------------------------------------
     */

    position: offerLetter.position || "",

    internshipType: offerLetter.internshipType || "",

    duration: offerLetter.duration || "",

    joiningDate: formatDate(offerLetter.joiningDate),

    workMode: offerLetter.workMode || "",

    /**
     * ---------------------------------------------------------
     * Compensation
     * ---------------------------------------------------------
     */

    initialPeriod: offerLetter.initialPeriod || "",

    initialStipend: offerLetter.initialStipend || "",

    paidPeriod: offerLetter.paidPeriod || "",

    monthlyStipend: formatCurrency(
      offerLetter.monthlyStipend
    ),

    totalStipend: formatCurrency(
      offerLetter.totalStipend
    ),

    /**
     * ---------------------------------------------------------
     * PPO
     * ---------------------------------------------------------
     */

    ppoEligible: offerLetter.ppoEligible
      ? "Yes"
      : "No",

    ppoDescription:
      offerLetter.ppoDescription || "",

    /**
     * ---------------------------------------------------------
     * Acceptance
     * ---------------------------------------------------------
     */

    acceptanceEnabled:
      offerLetter.acceptanceEnabled
        ? "Yes"
        : "No",

    acceptanceDate: formatDate(
      offerLetter.acceptanceDate
    ),

    /**
     * ---------------------------------------------------------
     * Document
     * ---------------------------------------------------------
     */

    status: offerLetter.status || "",

    pdfUrl: offerLetter.pdfUrl || "",
  };

  /**
   * =========================================================
   * Generate HTML
   * =========================================================
   */

  const generatedHtml = replaceTemplateVariables(
    template,
    templateData
  );

  /**
   * =========================================================
   * Render
   * =========================================================
   */

  return (
    <>
      {/* =====================================================
          Page
      ====================================================== */}

      <div className="min-h-screen bg-gray-100">

        {/* ===================================================
            Header
        ==================================================== */}

        <div
          className="
            sticky
            top-0
            z-50
            border-b
            bg-white
            shadow-sm
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              px-6
              py-4
            "
          >

            {/* -----------------------------------------------
                Title
            ------------------------------------------------ */}

            <div>
              <h1 className="text-lg font-semibold">
                Offer Letter
              </h1>

              <p className="text-sm text-gray-500">
                {offerLetter.referenceNo}
              </p>
            </div>

            {/* -----------------------------------------------
                Actions
            ------------------------------------------------ */}

            <div className="flex gap-2">

              {/* Back */}

              <a
                href="/offer-letter"
                className="
                  rounded-lg
                  border
                  px-4
                  py-2
                  text-sm
                  hover:bg-gray-50
                "
              >
                Back
              </a>

              {/* Print */}

              <PrintButton />

            </div>
          </div>
        </div>

        {/* ===================================================
            Document Preview
        ==================================================== */}

        <div className="flex justify-center py-8">

          <div
            className="
              bg-white
              shadow-xl
            "
            style={{
              width: "210mm",
              minHeight: "297mm",
            }}
          >

            <iframe
              title="Offer Letter"
              srcDoc={generatedHtml}
              className="w-full border-0"
              style={{
                width: "100%",
                minHeight: "297mm",
                height: "1000px",
              }}
            />

          </div>
        </div>
      </div>

      {/* =====================================================
          Print Styles
      ====================================================== */}

      <style>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
            background: white;
          }

          .sticky {
            display: none !important;
          }

          iframe {
            width: 210mm !important;
            min-height: 297mm !important;
            height: 297mm !important;
            border: none !important;
          }
        }
      `}</style>
    </>
  );
}
"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";

import {
  offerLetterService,
  CreateOfferLetterData,
} from "@/services/offer-latter.service";

interface Company {
  id: string;
  name: string;
}

export default function NewOfferLetterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [companiesLoading, setCompaniesLoading] = useState(true);
  const [companies, setCompanies] = useState<Company[]>([]);

  const [form, setForm] = useState<CreateOfferLetterData>({
    referenceNo: "",
    letterDate: new Date().toISOString().split("T")[0],

    candidateName: "",
    candidateEmail: "",
    candidatePhone: "",
    candidateAddress: "",

    position: "",
    internshipType: "Full Time",
    duration: "",
    joiningDate: "",
    workMode: "Remote",

    initialPeriod: "",
    initialStipend: "",
    paidPeriod: "",
    monthlyStipend: undefined,
    totalStipend: undefined,

    ppoEligible: false,
    ppoDescription: "",

    companyId: "",

    acceptanceEnabled: true,
    acceptanceDate: undefined,

    status: "draft",
  });

  /* =========================================================
     Load Companies
  ========================================================= */

  useEffect(() => {
    async function loadCompanies() {
      try {
        setCompaniesLoading(true);

        /*
         * Replace this with your company service.
         *
         * Example:
         *
         * const data = await companyService.getAll();
         * setCompanies(data);
         */

        // Temporary example.
        // Remove this when your company API is connected.
        setCompanies([]);
      } catch (error) {
        console.error("Failed to load companies:", error);
      } finally {
        setCompaniesLoading(false);
      }
    }

    loadCompanies();
  }, []);

  useEffect(() => {
    async function loadCompanies() {
      try {
        setCompaniesLoading(true);

        setCompanies([
          {
            id: "cloudwent",
            name: "CloudWent",
          },
        ]);
      } catch (error) {
        console.error("Failed to load companies:", error);
      } finally {
        setCompaniesLoading(false);
      }
    }

    loadCompanies();
  }, []);

  /* =========================================================
     Input Handler
  ========================================================= */

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  /* =========================================================
     Submit
  ========================================================= */

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.companyId) {
      alert("Please select a company.");
      return;
    }

    if (!form.candidateName) {
      alert("Please enter candidate name.");
      return;
    }

    if (!form.position) {
      alert("Please enter internship position.");
      return;
    }

    if (!form.duration) {
      alert("Please enter internship duration.");
      return;
    }

    if (!form.joiningDate) {
      alert("Please select joining date.");
      return;
    }

    try {
      setLoading(true);

      const payload: CreateOfferLetterData = {
        ...form,

        monthlyStipend:
          form.monthlyStipend === undefined ||
            form.monthlyStipend === null ||
            Number.isNaN(Number(form.monthlyStipend))
            ? undefined
            : Number(form.monthlyStipend),

        totalStipend:
          form.totalStipend === undefined ||
            form.totalStipend === null ||
            Number.isNaN(Number(form.totalStipend))
            ? undefined
            : Number(form.totalStipend),
      };

      const created = await offerLetterService.create(payload);

      console.log("Offer letter created:", created);

      router.push(`/offer-latter/view/${created.id}`);
    } catch (error) {
      console.error("CREATE OFFER LETTER ERROR:", error);

      alert(
        "Failed to create offer letter. Please check the form and backend API."
      );
    } finally {
      setLoading(false);
    }
  }

  /* =========================================================
     UI
  ========================================================= */

  return (
    <div className="min-h-screen bg-gray-50">

      {/* =====================================================
          Header
      ====================================================== */}

      <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">

          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Create Offer Letter
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Create a new internship offer letter
            </p>
          </div>

          <Link
            href="/offer-latter"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              bg-white
              px-4
              py-2
              text-sm
              font-medium
              text-gray-700
              hover:bg-gray-50
            "
          >
            <ArrowLeft size={16} />
            Back
          </Link>

        </div>
      </div>

      {/* =====================================================
          Form
      ====================================================== */}

      <div className="mx-auto max-w-6xl px-6 py-8">

        <form onSubmit={handleSubmit}>

          {/* =================================================
              Basic Information
          ================================================== */}

          <section className="rounded-xl border bg-white shadow-sm">

            <div className="border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Offer Letter Information
              </h2>

              <p className="text-sm text-gray-500">
                Basic information about the offer letter.
              </p>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">

              {/* Reference */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Reference Number *
                </label>

                <input
                  type="text"
                  name="referenceNo"
                  value={form.referenceNo}
                  onChange={handleChange}
                  placeholder="CW/INT/2026/001"
                  required
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              {/* Letter Date */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Letter Date *
                </label>

                <input
                  type="date"
                  name="letterDate"
                  value={form.letterDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              {/* Company */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Company *
                </label>
                <select
                  name="companyId"
                  value={form.companyId}
                  onChange={handleChange}
                  required
                  disabled={companiesLoading}
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                >
                  <option value="">
                    {companiesLoading ? "Loading companies..." : "Select company"}
                  </option>

                  {companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>

                {companies.length === 0 && !companiesLoading && (
                  <p className="mt-2 text-xs text-orange-600">
                    No companies loaded. Connect your company service/API.
                  </p>
                )}
              </div>

            </div>
          </section>

          {/* =================================================
              Candidate
          ================================================== */}

          <section className="mt-6 rounded-xl border bg-white shadow-sm">

            <div className="border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Candidate Information
              </h2>

              <p className="text-sm text-gray-500">
                Enter the candidate's personal information.
              </p>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">

              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Candidate Name *
                </label>

                <input
                  type="text"
                  name="candidateName"
                  value={form.candidateName}
                  onChange={handleChange}
                  placeholder="Uttam Turkar"
                  required
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Candidate Email
                </label>

                <input
                  type="email"
                  name="candidateEmail"
                  value={form.candidateEmail || ""}
                  onChange={handleChange}
                  placeholder="candidate@example.com"
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              {/* Phone */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="candidatePhone"
                  value={form.candidatePhone || ""}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              {/* Address */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Candidate Address
                </label>

                <textarea
                  name="candidateAddress"
                  value={form.candidateAddress || ""}
                  onChange={handleChange}
                  placeholder="Candidate address"
                  rows={3}
                  className="w-full resize-none rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

            </div>
          </section>

          {/* =================================================
              Internship
          ================================================== */}

          <section className="mt-6 rounded-xl border bg-white shadow-sm">

            <div className="border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Internship Details
              </h2>

              <p className="text-sm text-gray-500">
                Configure the internship details.
              </p>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">

              {/* Position */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Position *
                </label>

                <input
                  type="text"
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  placeholder="Backend Developer Intern"
                  required
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              {/* Internship Type */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Internship Type
                </label>

                <select
                  name="internshipType"
                  value={form.internshipType || ""}
                  onChange={handleChange}
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                >
                  <option value="Full Time">
                    Full Time
                  </option>

                  <option value="Part Time">
                    Part Time
                  </option>

                  <option value="Remote">
                    Remote
                  </option>

                  <option value="Hybrid">
                    Hybrid
                  </option>
                </select>
              </div>

              {/* Duration */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Duration *
                </label>

                <input
                  type="text"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  placeholder="6 Months"
                  required
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              {/* Joining Date */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Joining Date *
                </label>

                <input
                  type="date"
                  name="joiningDate"
                  value={form.joiningDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              {/* Work Mode */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Work Mode *
                </label>

                <select
                  name="workMode"
                  value={form.workMode}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                >
                  <option value="Remote">
                    Remote
                  </option>

                  <option value="Onsite">
                    Onsite
                  </option>

                  <option value="Hybrid">
                    Hybrid
                  </option>
                </select>
              </div>

            </div>
          </section>

          {/* =================================================
              Compensation
          ================================================== */}

          <section className="mt-6 rounded-xl border bg-white shadow-sm">

            <div className="border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Compensation
              </h2>

              <p className="text-sm text-gray-500">
                Configure internship stipend information.
              </p>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Initial Period
                </label>

                <input
                  type="text"
                  name="initialPeriod"
                  value={form.initialPeriod || ""}
                  onChange={handleChange}
                  placeholder="First 3 Months"
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Initial Stipend
                </label>

                <input
                  type="text"
                  name="initialStipend"
                  value={form.initialStipend || ""}
                  onChange={handleChange}
                  placeholder="Unpaid / ₹5,000"
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Paid Period
                </label>

                <input
                  type="text"
                  name="paidPeriod"
                  value={form.paidPeriod || ""}
                  onChange={handleChange}
                  placeholder="Last 3 Months"
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Monthly Stipend
                </label>

                <input
                  type="number"
                  name="monthlyStipend"
                  value={form.monthlyStipend ?? ""}
                  onChange={handleChange}
                  placeholder="10000"
                  min="0"
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Total Stipend
                </label>

                <input
                  type="number"
                  name="totalStipend"
                  value={form.totalStipend ?? ""}
                  onChange={handleChange}
                  placeholder="30000"
                  min="0"
                  className="w-full rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                />
              </div>

            </div>
          </section>

          {/* =================================================
              PPO
          ================================================== */}

          <section className="mt-6 rounded-xl border bg-white shadow-sm">

            <div className="border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">
                PPO / Full-Time Opportunity
              </h2>
            </div>

            <div className="p-6">

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  name="ppoEligible"
                  checked={form.ppoEligible}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300"
                />

                <span className="text-sm font-medium">
                  Candidate is eligible for PPO
                </span>
              </label>

              {form.ppoEligible && (
                <div className="mt-5">

                  <label className="mb-2 block text-sm font-medium">
                    PPO Description
                  </label>

                  <textarea
                    name="ppoDescription"
                    value={form.ppoDescription || ""}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the PPO eligibility and conditions..."
                    className="w-full resize-none rounded-lg border px-4 py-2.5 outline-none focus:border-indigo-500"
                  />

                </div>
              )}

            </div>
          </section>

          {/* =================================================
              Acceptance
          ================================================== */}

          <section className="mt-6 rounded-xl border bg-white shadow-sm">

            <div className="border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Acceptance
              </h2>
            </div>

            <div className="p-6">

              <label className="flex cursor-pointer items-center gap-3">

                <input
                  type="checkbox"
                  name="acceptanceEnabled"
                  checked={form.acceptanceEnabled}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300"
                />

                <span className="text-sm font-medium">
                  Enable candidate acceptance
                </span>

              </label>

            </div>
          </section>

          {/* =================================================
              Submit
          ================================================== */}

          <div className="mt-6 flex items-center justify-end gap-3">

            <Link
              href="/offer-latter"
              className="
                rounded-lg
                border
                bg-white
                px-5
                py-2.5
                text-sm
                font-medium
                hover:bg-gray-50
              "
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-indigo-600
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                hover:bg-indigo-700
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >

              {loading ? (
                <>
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />

                  Creating...
                </>
              ) : (
                <>
                  <Save size={17} />

                  Create Offer Letter
                </>
              )}

            </button>

          </div>

        </form>

      </div>
    </div>
  );
}
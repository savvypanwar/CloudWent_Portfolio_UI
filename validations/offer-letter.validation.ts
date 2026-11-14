import Joi from "joi";

export const createOfferLetterSchema = Joi.object({
  referenceNo: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .required()
    .messages({
      "string.empty": "Reference number is required",
      "any.required": "Reference number is required",
      "string.min": "Reference number must be at least 3 characters",
    }),

  letterDate: Joi.date()
    .iso()
    .optional()
    .messages({
      "date.base": "Invalid letter date",
      "date.format": "Letter date must be a valid ISO date",
    }),

  // Candidate
  candidateName: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      "string.empty": "Candidate name is required",
      "any.required": "Candidate name is required",
    }),

  candidateEmail: Joi.string()
    .trim()
    .email()
    .optional()
    .allow(null, "")
    .messages({
      "string.email": "Invalid candidate email",
    }),

  candidatePhone: Joi.string()
    .trim()
    .pattern(/^[0-9+\-\s()]{10,15}$/)
    .optional()
    .allow(null, "")
    .messages({
      "string.pattern.base": "Invalid candidate phone number",
    }),

  candidateAddress: Joi.string()
    .trim()
    .max(500)
    .optional()
    .allow(null, ""),

  // Internship
  position: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      "string.empty": "Position is required",
      "any.required": "Position is required",
    }),

  internshipType: Joi.string()
    .trim()
    .max(100)
    .optional()
    .allow(null, ""),

  duration: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Internship duration is required",
      "any.required": "Internship duration is required",
    }),

  joiningDate: Joi.date()
    .iso()
    .required()
    .messages({
      "date.base": "Invalid joining date",
      "any.required": "Joining date is required",
    }),

  workMode: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Work mode is required",
      "any.required": "Work mode is required",
    }),

  // Compensation
  initialPeriod: Joi.string()
    .trim()
    .optional()
    .allow(null, ""),

  initialStipend: Joi.string()
    .trim()
    .optional()
    .allow(null, ""),

  paidPeriod: Joi.string()
    .trim()
    .optional()
    .allow(null, ""),

  monthlyStipend: Joi.number()
    .integer()
    .min(0)
    .optional()
    .allow(null, "")
    .messages({
      "number.base": "Monthly stipend must be a number",
      "number.integer": "Monthly stipend must be an integer",
      "number.min": "Monthly stipend cannot be negative",
    }),

  totalStipend: Joi.number()
    .integer()
    .min(0)
    .optional()
    .allow(null, "")
    .messages({
      "number.base": "Total stipend must be a number",
      "number.integer": "Total stipend must be an integer",
      "number.min": "Total stipend cannot be negative",
    }),

  // PPO
  ppoEligible: Joi.boolean()
    .optional()
    .default(false),

  ppoDescription: Joi.string()
    .trim()
    .max(1000)
    .optional()
    .allow(null, ""),

  // Company
  companyId: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Company is required",
      "any.required": "Company is required",
    }),

  // Acceptance
  acceptanceEnabled: Joi.boolean()
    .optional()
    .default(true),

  acceptanceDate: Joi.date()
    .iso()
    .optional()
    .allow(null, ""),

  // Document
  status: Joi.string()
    .valid(
      "draft",
      "generated",
      "sent",
      "accepted",
      "rejected",
      "cancelled"
    )
    .optional()
    .default("draft"),

  pdfUrl: Joi.string()
    .trim()
    .uri()
    .optional()
    .allow(null, ""),

  generatedAt: Joi.date()
    .iso()
    .optional()
    .allow(null, ""),

  applicationId: Joi.string()
    .trim()
    .optional()
    .allow(null, ""),
})
  .custom((value, helpers) => {
    // PPO validation
    if (
      value.ppoEligible === true &&
      (!value.ppoDescription ||
        value.ppoDescription.trim() === "")
    ) {
      return helpers.error("any.custom", {
        message:
          "PPO description is required when PPO is enabled",
      });
    }

    // Stipend validation
    if (
      value.monthlyStipend != null &&
      value.totalStipend != null &&
      value.totalStipend < value.monthlyStipend
    ) {
      return helpers.error("any.custom", {
        message:
          "Total stipend cannot be less than monthly stipend",
      });
    }

    return value;
  })
  .messages({
    "any.custom": "{{#message}}",
  });
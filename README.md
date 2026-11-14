CloudWent HR Management System
Complete Architecture, Modules, Database, API and Implementation Plan
1. Purpose
The CloudWent Portfolio UI will be extended into a complete internal HR Management System.
The HR system will manage the complete employee lifecycle:
Recruitment
Job openings
Candidates
Applications
Interviews
Hiring
Employees
Employee profiles
Departments
Designations
Attendance
Leave management
Holidays
Payroll
Salary structures
Payslips
Documents
Offer letters
Joining
Performance
Assets
Employee communication
Notifications
HR reports
HR analytics
Email automation
Employee self-service
HR/admin permissions
Activity logs
The HR system will remain part of the existing CloudWent application rather than becoming a separate frontend.

2. Existing Application + HR System
The application will have three major areas:
CloudWent Platform
│
├── Public Website
│   ├── Home
│   ├── About
│   ├── Services
│   ├── Portfolio
│   ├── Blog
│   ├── Careers
│   ├── Team
│   ├── Contact
│   └── Privacy Policy
│
├── Business/Admin Dashboard
│   ├── Dashboard
│   ├── Users
│   ├── Leads
│   ├── Applications
│   ├── Blog
│   ├── Portfolio
│   ├── Team
│   ├── Testimonials
│   ├── Newsletter
│   ├── SEO
│   ├── Website Settings
│   └── Analytics
│
└── HR Management System
    ├── HR Dashboard
    ├── Recruitment
    ├── Candidates
    ├── Employees
    ├── Attendance
    ├── Leave
    ├── Payroll
    ├── Departments
    ├── Designations
    ├── Documents
    ├── Performance
    ├── Assets
    ├── Holidays
    ├── Reports
    ├── HR Settings
    └── Employee Self Service

3. Recommended HR Roles
The system should support role-based access.
SUPER_ADMIN
    │
    ├── Full platform access
    │
    └── HR_ADMIN
          │
          ├── Recruitment
          ├── Employees
          ├── Attendance
          ├── Leave
          ├── Payroll
          ├── Documents
          └── Reports

HR_MANAGER
    │
    ├── Recruitment
    ├── Employees
    ├── Attendance
    ├── Leave
    └── Reports

RECRUITER
    │
    ├── Jobs
    ├── Candidates
    ├── Applications
    ├── Interviews
    └── Recruitment communication

PAYROLL_ADMIN
    │
    ├── Salary
    ├── Payroll
    ├── Payslips
    └── Payroll reports

MANAGER
    │
    ├── Team
    ├── Attendance
    ├── Leave approvals
    └── Performance

EMPLOYEE
    │
    ├── My Profile
    ├── Attendance
    ├── Leave
    ├── Payslips
    ├── Documents
    ├── Holidays
    └── Notifications

CANDIDATE
    │
    ├── Application
    ├── Interview
    └── Recruitment communication
Permissions should be granular instead of relying only on roles.
Example:
employee.read
employee.create
employee.update
employee.delete

attendance.read
attendance.manage

leave.apply
leave.approve
leave.reject

payroll.read
payroll.create
payroll.process

candidate.read
candidate.create
candidate.update

recruitment.manage

4. New Folder Structure
The existing structure should be expanded rather than replaced.
CloudWent_Portfolio_UI/
│
├── app/
│   │
│   ├── (auth)/
│   │   └── login/
│   │
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   ├── careers/
│   │   ├── contact/
│   │   └── team/
│   │
│   ├── (dashboard)/
│   │   │
│   │   ├── dashboard/
│   │   ├── users/
│   │   ├── leads/
│   │   ├── applications/
│   │   ├── manage-blog/
│   │   ├── portfolio/
│   │   ├── myteam/
│   │   ├── newsletter/
│   │   ├── offer-letter/
│   │   ├── analytics/
│   │   ├── settings/
│   │   └── website-settings/
│   │
│   │   └── hr/
│   │       │
│   │       ├── dashboard/
│   │       │
│   │       ├── recruitment/
│   │       │   ├── jobs/
│   │       │   ├── candidates/
│   │       │   ├── applications/
│   │       │   ├── interviews/
│   │       │   ├── offers/
│   │       │   └── onboarding/
│   │       │
│   │       ├── employees/
│   │       │   ├── all/
│   │       │   ├── active/
│   │       │   ├── inactive/
│   │       │   ├── departments/
│   │       │   ├── designations/
│   │       │   └── employee-profile/
│   │       │
│   │       ├── attendance/
│   │       │   ├── daily/
│   │       │   ├── monthly/
│   │       │   ├── employee/
│   │       │   └── reports/
│   │       │
│   │       ├── leave/
│   │       │   ├── requests/
│   │       │   ├── balances/
│   │       │   ├── leave-types/
│   │       │   └── holidays/
│   │       │
│   │       ├── payroll/
│   │       │   ├── salary-structures/
│   │       │   ├── payroll-runs/
│   │       │   ├── payslips/
│   │       │   └── reports/
│   │       │
│   │       ├── performance/
│   │       │   ├── goals/
│   │       │   ├── reviews/
│   │       │   └── appraisals/
│   │       │
│   │       ├── assets/
│   │       │   ├── inventory/
│   │       │   ├── assigned/
│   │       │   └── returns/
│   │       │
│   │       ├── documents/
│   │       │   ├── employee/
│   │       │   ├── templates/
│   │       │   └── generated/
│   │       │
│   │       ├── reports/
│   │       │   ├── employee/
│   │       │   ├── attendance/
│   │       │   ├── leave/
│   │       │   ├── payroll/
│   │       │   └── recruitment/
│   │       │
│   │       └── settings/
│   │           ├── hr-settings/
│   │           ├── attendance-settings/
│   │           ├── leave-settings/
│   │           ├── payroll-settings/
│   │           └── notification-settings/
│   │
│   └── api/
│       │
│       ├── auth/
│       ├── users/
│       ├── applications/
│       ├── careers/
│       ├── documents/
│       └── upload/
│
│       └── hr/
│           ├── recruitment/
│           ├── candidates/
│           ├── interviews/
│           ├── employees/
│           ├── departments/
│           ├── designations/
│           ├── attendance/
│           ├── leave/
│           ├── holidays/
│           ├── payroll/
│           ├── salary/
│           ├── payslips/
│           ├── performance/
│           ├── assets/
│           ├── documents/
│           ├── reports/
│           ├── notifications/
│           └── settings/
│
├── actions/
│   ├── auth.ts
│   ├── submit-contact.ts
│   ├── submit-job.ts
│   └── hr/
│       ├── attendance.ts
│       ├── leave.ts
│       ├── payroll.ts
│       └── recruitment.ts
│
├── components/
│   ├── common/
│   ├── dashboard/
│   ├── forms/
│   ├── ui/
│   │
│   └── hr/
│       ├── EmployeeTable.tsx
│       ├── EmployeeProfile.tsx
│       ├── AttendanceTable.tsx
│       ├── LeaveTable.tsx
│       ├── PayrollTable.tsx
│       ├── CandidateTable.tsx
│       ├── InterviewCalendar.tsx
│       ├── PayslipViewer.tsx
│       ├── DocumentViewer.tsx
│       └── HRStats.tsx
│
├── features/
│   ├── home/
│   ├── about/
│   ├── blog/
│   ├── careers/
│   └── hr/
│       ├── recruitment/
│       ├── employees/
│       ├── attendance/
│       ├── leave/
│       ├── payroll/
│       ├── performance/
│       └── documents/
│
├── services/
│   ├── api.ts
│   ├── auth.service.ts
│   ├── career.service.ts
│   ├── contact.service.ts
│   │
│   └── hr/
│       ├── employee.service.ts
│       ├── recruitment.service.ts
│       ├── candidate.service.ts
│       ├── interview.service.ts
│       ├── attendance.service.ts
│       ├── leave.service.ts
│       ├── payroll.service.ts
│       ├── salary.service.ts
│       ├── payslip.service.ts
│       ├── holiday.service.ts
│       ├── performance.service.ts
│       ├── asset.service.ts
│       ├── document.service.ts
│       ├── notification.service.ts
│       └── report.service.ts
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── types/
│   ├── auth.types.ts
│   ├── user.types.ts
│   │
│   └── hr/
│       ├── employee.types.ts
│       ├── recruitment.types.ts
│       ├── candidate.types.ts
│       ├── attendance.types.ts
│       ├── leave.types.ts
│       ├── payroll.types.ts
│       ├── salary.types.ts
│       ├── payslip.types.ts
│       ├── holiday.types.ts
│       ├── performance.types.ts
│       ├── asset.types.ts
│       └── document.types.ts
│
└── templates/
    ├── internship.html
    ├── offer-letter.html
    ├── appointment-letter.html
    ├── relieving-letter.html
    ├── experience-letter.html
    ├── payslip.html
    └── salary-slip.html

5. HR Dashboard
The HR dashboard should show real operational information.
Dashboard cards
Total Employees
Active Employees
New Employees
Open Positions
Total Candidates
Interviews Today
Pending Leave Requests
Present Today
Absent Today
Late Employees
Payroll Pending
Payroll Processed
Dashboard sections
Employee Statistics
Attendance Overview
Leave Overview
Recruitment Funnel
Upcoming Interviews
Recent Employees
Pending Approvals
Payroll Status
Upcoming Birthdays
Upcoming Work Anniversaries
Recent HR Activities

6. Recruitment Management
The existing careers and applications functionality can be integrated with HR recruitment.
Recruitment workflow
Job Created
     ↓
Job Published
     ↓
Candidate Applies
     ↓
Application Received
     ↓
Resume Screening
     ↓
Shortlisted
     ↓
Interview
     ↓
Technical Round
     ↓
HR Round
     ↓
Selected / Rejected
     ↓
Offer Letter
     ↓
Offer Accepted
     ↓
Employee Created
     ↓
Onboarding
     ↓
Active Employee
Job Management
Each job should contain:
Job ID
Job Title
Department
Designation
Location
Employment Type
Experience Required
Salary Range
Skills
Description
Responsibilities
Requirements
Benefits
Number of Positions
Application Deadline
Status
Published At
Created By
Statuses:
DRAFT
PUBLISHED
PAUSED
CLOSED
ARCHIVED

7. Candidate Management
Candidate profile:
Candidate ID
Full Name
Email
Phone
Date of Birth
Location
Resume
Cover Letter
Skills
Experience
Education
Current Company
Current Salary
Expected Salary
Notice Period
Source
Application Status
Recruiter
Notes
Candidate statuses:
APPLIED
SCREENING
SHORTLISTED
INTERVIEW
SELECTED
REJECTED
OFFERED
OFFER_ACCEPTED
OFFER_DECLINED
HIRED

8. Interview Management
Interview system:
Candidate
Job
Interview Type
Round
Interviewer
Date
Start Time
End Time
Meeting URL
Location
Notes
Feedback
Score
Status
Interview types:
HR
TECHNICAL
MANAGERIAL
FINAL
OTHER
Interview statuses:
SCHEDULED
COMPLETED
CANCELLED
RESCHEDULED
NO_SHOW

9. Automatic Employee Creation
After an applicant accepts an offer:
Candidate
   ↓
Offer Accepted
   ↓
Onboarding Record
   ↓
Employee Account
   ↓
User Account
   ↓
Employee ID
   ↓
Department / Designation
   ↓
Joining Date
   ↓
Employee Profile
This prevents HR from manually entering the same person multiple times.

10. Employee Management
Employee master record:
Employee ID
User ID
Employee Code
First Name
Last Name
Email
Phone
Profile Photo

Department
Designation
Manager
Employment Type
Employment Status

Joining Date
Probation End Date
Confirmation Date
Resignation Date
Last Working Date

Work Location
Work Mode

Emergency Contact
Bank Information
Tax Information

Created At
Updated At
Employment statuses:
PROBATION
ACTIVE
ON_LEAVE
NOTICE_PERIOD
RESIGNED
TERMINATED
RETIRED
INACTIVE

11. Employee Profile
Employee profile should contain tabs:
Overview
Personal Information
Employment
Attendance
Leave
Payroll
Documents
Assets
Performance
Activity
Example:
Employee
│
├── Personal Information
├── Contact Information
├── Emergency Contact
├── Employment Information
├── Department
├── Designation
├── Reporting Manager
├── Attendance
├── Leave
├── Salary
├── Documents
├── Assets
└── Performance

12. Department Management
Department fields:
Department ID
Name
Code
Description
Head
Status
Created At
Updated At
Examples:
Engineering
Frontend Development
Backend Development
Mobile Development
QA
DevOps
UI/UX
HR
Finance
Sales
Marketing
Operations
Administration

13. Designation Management
Designation:
Designation ID
Name
Code
Department
Level
Description
Status
Example:
Intern
Junior Developer
Software Developer
Senior Developer
Tech Lead
Engineering Manager
HR Executive
HR Manager
Project Manager

14. Attendance Management
Attendance should support:
Employee
Date
Check In
Check Out
Working Hours
Break Hours
Overtime
Status
Source
Notes
Statuses:
PRESENT
ABSENT
HALF_DAY
LATE
WORK_FROM_HOME
ON_LEAVE
HOLIDAY
WEEKEND
Employee attendance flow
Employee Login
      ↓
Check In
      ↓
Working
      ↓
Break
      ↓
Resume
      ↓
Check Out
      ↓
Working Hours Calculated
HR should have:
Daily Attendance
Monthly Attendance
Employee Attendance
Late Report
Absence Report
Overtime Report
Attendance Correction
Attendance Export

15. Attendance Correction
Employees should be able to request corrections.
Example:
Employee:
I forgot to check out.

Request:
Date: 02/10/2026
Requested Check-out: 18:30
Reason: Forgot checkout

Status:
PENDING
Manager/HR:
Approve
Reject
Add Comment
All changes should be stored in activity logs.

16. Leave Management
Leave types:
Casual Leave
Sick Leave
Earned Leave
Paid Leave
Unpaid Leave
Maternity Leave
Paternity Leave
Compensatory Leave
Other
Leave request:
Employee
Leave Type
Start Date
End Date
Number of Days
Reason
Attachment
Status
Approved By
Approved At
HR Comment
Workflow:
Employee
   ↓
Leave Request
   ↓
Manager
   ↓
Approve / Reject
   ↓
HR
   ↓
Leave Balance Updated

17. Leave Balance
Each employee should have:
Employee
Leave Type
Opening Balance
Allocated
Used
Pending
Remaining
Year
Example:
Casual Leave
Allocated: 12
Used: 4
Pending: 1
Remaining: 7
The system should calculate the balance automatically.

18. Holiday Management
Holiday record:
Holiday Name
Date
Type
Description
Applicable Location
Applicable Department
Status
Examples:
Republic Day
Independence Day
Diwali
Holi
Company Holiday
Regional Holiday

19. Payroll Management
Payroll should be separated from employee records.
Salary structure
Employee
Basic Salary
HRA
Special Allowance
Conveyance
Medical
Bonus
Other Earnings

PF
ESI
Professional Tax
TDS
Other Deductions

Gross Salary
Total Deductions
Net Salary
Formula:
Gross Salary
=
Basic
+ HRA
+ Allowances
+ Bonus
+ Other Earnings

Net Salary
=
Gross Salary
- PF
- ESI
- Tax
- Other Deductions
The actual statutory calculation rules should be configurable according to the applicable jurisdiction and current requirements rather than hard-coded into the UI.

20. Payroll Run
Payroll process:
Select Month
      ↓
Load Employees
      ↓
Load Salary Structures
      ↓
Load Attendance
      ↓
Load Leave
      ↓
Calculate Earnings
      ↓
Calculate Deductions
      ↓
Review Payroll
      ↓
Approve
      ↓
Process
      ↓
Generate Payslips
      ↓
Send Email
Payroll statuses:
DRAFT
CALCULATING
UNDER_REVIEW
APPROVED
PROCESSED
CANCELLED

21. Payslip Management
Each payslip should contain:
Company Information
Employee Information
Employee ID
Department
Designation
Pay Period
Joining Date

Earnings
Basic
HRA
Allowances
Bonus
Other Earnings

Deductions
PF
ESI
Tax
Other Deductions

Gross Salary
Total Deductions
Net Salary

Attendance
Working Days
Present Days
Leave Days
LOP Days
Actions:
View
Download PDF
Email
Regenerate

22. Document Management
The HR system should support employee documents.
Document categories:
Identity
Education
Employment
Bank
Tax
Company Documents
Offer Letter
Appointment Letter
Experience Letter
Relieving Letter
Salary Documents
Other
Employee document:
Employee
Document Type
Document Name
File URL
Uploaded By
Uploaded At
Expiry Date
Status

23. Document Generation
The existing PDF/document functionality can be expanded.
Templates:
Offer Letter
Internship Letter
Appointment Letter
Joining Letter
Confirmation Letter
Promotion Letter
Salary Revision Letter
Experience Letter
Relieving Letter
Warning Letter
Payslip
Templates should support variables:
{{employee_name}}
{{employee_id}}
{{designation}}
{{department}}
{{joining_date}}
{{salary}}
{{manager_name}}
{{company_name}}
{{current_date}}
Example:
Dear {{employee_name}},

We are pleased to offer you the position of
{{designation}} at {{company_name}}.

Your joining date will be {{joining_date}}.

...

24. Email System
A complete HR email system should be included.
This means HR should not manually send every employee email.
Email categories
Recruitment
Application Received
Application Shortlisted
Interview Scheduled
Interview Rescheduled
Interview Cancelled
Selection Email
Rejection Email
Offer Letter
Offer Reminder
Employee
Welcome Email
Onboarding Email
Account Created
Password Reset
Document Request
Document Approved
Probation Reminder
Confirmation
Promotion
Salary Revision
Attendance
Missed Check-in
Missed Check-out
Late Attendance
Attendance Correction
Monthly Attendance Summary
Leave
Leave Submitted
Leave Approved
Leave Rejected
Leave Cancellation
Leave Balance Warning
Payroll
Payroll Processed
Payslip Generated
Payslip Available
Salary Revision
Exit
Resignation Received
Resignation Approved
Exit Checklist
Last Working Day Reminder
Experience Letter
Relieving Letter

25. Automatic Email Engine
Instead of writing email code repeatedly, create a centralized system.
EmailTemplate
EmailQueue
EmailLog
EmailEvent
EmailVariable
Flow:
HR Action
   ↓
System Event
   ↓
Email Template
   ↓
Variables Injected
   ↓
Email Queue
   ↓
Email Provider
   ↓
Employee Email
   ↓
Email Log
Example:
event = LEAVE_APPROVED

template = leave-approved

variables =
{
    employeeName,
    leaveType,
    startDate,
    endDate,
    approvedBy
}
The system generates and sends the email automatically.

26. Email Template Management
HR/Admin should be able to manage templates.
Template Name
Event
Subject
HTML Body
Plain Text Body
Variables
Status
Example:
Template:
Interview Scheduled

Subject:
Interview Scheduled – {{job_title}}

Variables:
{{candidate_name}}
{{job_title}}
{{interview_date}}
{{interview_time}}
{{interviewer_name}}
{{meeting_link}}

27. Email Provider Architecture
Do not hard-code the provider throughout the application.
Use:
EmailService
    ↓
EmailProvider
    ├── SMTP
    ├── Resend
    ├── SendGrid
    └── Other Provider
Environment configuration:
EMAIL_PROVIDER=
EMAIL_FROM=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
The exact provider can be selected later without rewriting HR modules.

28. Employee Self-Service Portal
Employees should have their own section.
My Dashboard
My Profile
My Attendance
My Leave
My Leave Balance
My Payslips
My Documents
My Assets
My Performance
My Holidays
My Notifications
Employee dashboard:
Today's Attendance
Check In
Check Out

Current Month:
Present
Absent
Leave
Working Hours

Leave Balance

Latest Payslip

Pending Requests

Upcoming Holidays

29. Performance Management
Performance module:
Goals
KPIs
Performance Reviews
Manager Feedback
Self Assessment
Appraisal
Promotion
Salary Revision
Goal:
Employee
Title
Description
Target
Measurement
Start Date
Due Date
Progress
Status
Manager
Review:
Review Period
Employee
Reviewer
Goals
Achievements
Strengths
Areas for Improvement
Rating
Comments
Status
Avoid hard-coding subjective scoring rules; allow the organization to configure its own performance framework.

30. Asset Management
Company assets:
Laptop
Desktop
Monitor
Keyboard
Mouse
Mobile
SIM
Headset
Access Card
Other Equipment
Asset:
Asset ID
Asset Name
Category
Serial Number
Purchase Date
Purchase Cost
Warranty
Status
Assignment:
Asset
Employee
Assigned Date
Condition
Assigned By
Returned Date
Return Condition
Asset lifecycle:
AVAILABLE
ASSIGNED
MAINTENANCE
LOST
DAMAGED
RETURNED
RETIRED

31. Onboarding
Onboarding checklist:
Offer Accepted
Employee Account
Email Account
Employee ID
Documents
Bank Details
Identity Verification
Laptop
Access Card
Software Access
Team Introduction
Policy Acknowledgement
Orientation
Manager Assignment
Progress:
0% → 100%
HR should see incomplete onboarding tasks.

32. Exit / Offboarding
Employee resignation:
Employee
   ↓
Resignation
   ↓
HR Review
   ↓
Manager Review
   ↓
Notice Period
   ↓
Asset Return
   ↓
Access Revocation
   ↓
Final Payroll
   ↓
Experience Letter
   ↓
Relieving Letter
   ↓
Exit Completed
Exit checklist:
Resignation
Notice Period
Knowledge Transfer
Asset Return
Document Collection
Access Removal
Final Payroll
Exit Interview
Experience Letter
Relieving Letter

33. HR Reports
Reports should include:
Employee
Employee Directory
Employee Growth
Department Distribution
Designation Distribution
New Joiners
Exits
Employee Status
Recruitment
Open Jobs
Applications
Candidates
Shortlisted Candidates
Interview Report
Hiring Funnel
Time to Hire
Source Report
Attendance
Daily Attendance
Monthly Attendance
Absence
Late Attendance
Overtime
Working Hours
Leave
Leave Utilization
Leave Balance
Pending Leave
Department Leave
Employee Leave
Payroll
Monthly Payroll
Department Payroll
Salary Cost
Earnings
Deductions
Payslip Report
Reports should support:
CSV
Excel
PDF
Print

34. HR Activity Logs
Every sensitive HR action should be logged.
User
Action
Module
Entity
Entity ID
Old Value
New Value
IP Address
User Agent
Timestamp
Examples:
Employee salary updated
Leave approved
Employee created
Payroll processed
Payslip generated
Document deleted
Candidate rejected
Offer generated
This is especially important for payroll and employee data.

35. Notifications
Create a centralized notification system.
Notification:
User
Title
Message
Type
Entity
Entity ID
Read
Created At
Channels:
In-App
Email
Possible future channel:
SMS
WhatsApp

36. Database Models
The Prisma schema should eventually contain models similar to:
User
Role
Permission
RolePermission

Employee
Department
Designation
EmploymentHistory

Job
Candidate
JobApplication
Interview
InterviewFeedback
RecruitmentActivity

Onboarding
OnboardingTask

Attendance
AttendanceCorrection

LeaveType
LeaveBalance
LeaveRequest
Holiday

SalaryStructure
SalaryComponent
Payroll
PayrollItem
Payslip

EmployeeDocument
DocumentTemplate
GeneratedDocument

PerformanceGoal
PerformanceReview
Appraisal

Asset
AssetAssignment

EmailTemplate
EmailQueue
EmailLog

Notification

HRSetting

ActivityLog

37. Important Relationships
Main relationship:
User
 │
 └── Employee
      │
      ├── Department
      ├── Designation
      ├── Manager
      ├── Attendance
      ├── Leave
      ├── LeaveBalance
      ├── SalaryStructure
      ├── Payroll
      ├── Payslip
      ├── Documents
      ├── Assets
      ├── Performance
      └── Notifications
Recruitment:
Job
 │
 └── JobApplication
       │
       ├── Candidate
       ├── Interviews
       └── Offer
              │
              └── Employee

38. API Structure
Recommended API structure:
/api/hr
Employees
GET    /api/hr/employees
GET    /api/hr/employees/:id
POST   /api/hr/employees
PATCH  /api/hr/employees/:id
DELETE /api/hr/employees/:id
Departments
GET    /api/hr/departments
POST   /api/hr/departments
PATCH  /api/hr/departments/:id
DELETE /api/hr/departments/:id
Designations
GET    /api/hr/designations
POST   /api/hr/designations
PATCH  /api/hr/designations/:id
DELETE /api/hr/designations/:id
Recruitment
GET    /api/hr/jobs
POST   /api/hr/jobs
PATCH  /api/hr/jobs/:id
DELETE /api/hr/jobs/:id

GET    /api/hr/candidates
POST   /api/hr/candidates
PATCH  /api/hr/candidates/:id

GET    /api/hr/applications
PATCH  /api/hr/applications/:id/status
Interviews
GET    /api/hr/interviews
POST   /api/hr/interviews
PATCH  /api/hr/interviews/:id
DELETE /api/hr/interviews/:id
Attendance
GET    /api/hr/attendance
POST   /api/hr/attendance/check-in
POST   /api/hr/attendance/check-out
POST   /api/hr/attendance/correction
PATCH  /api/hr/attendance/:id
Leave
GET    /api/hr/leave/requests
POST   /api/hr/leave/request
PATCH  /api/hr/leave/:id/approve
PATCH  /api/hr/leave/:id/reject
GET    /api/hr/leave/balances
Payroll
GET    /api/hr/payroll
POST   /api/hr/payroll/run
GET    /api/hr/payroll/:id
POST   /api/hr/payroll/:id/approve
POST   /api/hr/payroll/:id/process
Payslips
GET    /api/hr/payslips
GET    /api/hr/payslips/:id
GET    /api/hr/payslips/:id/pdf
POST   /api/hr/payslips/:id/email

39. Security
HR contains sensitive employee and salary information, so security should be built into the architecture.
Required:
Authentication
Authorization
Role-Based Access
Permission-Based Access
API Validation
Input Validation
Audit Logs
Secure File Upload
Private Document Storage
Session Management
Rate Limiting
CSRF Protection where applicable
Encryption for sensitive values where appropriate
Salary information should not be visible to ordinary employees unless explicitly permitted.
Example:
EMPLOYEE
  ↓
Can see own salary/payslip

MANAGER
  ↓
Can see team information
  ↓
Cannot automatically see full payroll information

HR
  ↓
Can manage employee HR information

PAYROLL_ADMIN
  ↓
Can manage payroll

SUPER_ADMIN
  ↓
Full authorized access

40. HR Sidebar
Recommended dashboard navigation:
HR MANAGEMENT

├── HR Dashboard
│
├── Recruitment
│   ├── Jobs
│   ├── Candidates
│   ├── Applications
│   ├── Interviews
│   ├── Offers
│   └── Onboarding
│
├── Employees
│   ├── All Employees
│   ├── Active
│   ├── Inactive
│   ├── Departments
│   └── Designations
│
├── Attendance
│   ├── Today
│   ├── Monthly
│   ├── Corrections
│   └── Reports
│
├── Leave
│   ├── Requests
│   ├── Balances
│   ├── Leave Types
│   └── Holidays
│
├── Payroll
│   ├── Salary Structures
│   ├── Payroll Runs
│   ├── Payslips
│   └── Reports
│
├── Performance
│   ├── Goals
│   ├── Reviews
│   └── Appraisals
│
├── Assets
│   ├── Inventory
│   ├── Assigned
│   └── Returns
│
├── Documents
│   ├── Employee Documents
│   ├── Templates
│   └── Generated Documents
│
├── Reports
│
├── Notifications
│
└── HR Settings

41. Existing Modules That Should Be Reused
Do not duplicate existing functionality.
Existing Users
Reuse:
users
authentication
roles
permissions
profile
activity logs
Existing Careers
Convert into:
Public Careers
      ↓
HR Recruitment
Existing Applications
Connect:
Public Job Application
        ↓
Candidate
        ↓
Job Application
        ↓
Recruitment
Existing Offer Letter
Expand it into:
Document Template
      ↓
Offer Letter
      ↓
Appointment Letter
      ↓
Experience Letter
      ↓
Relieving Letter
Existing Team
The public team page should use employee data where appropriate:
Employee
   ↓
Public Profile Enabled?
   ↓
Team Page
This avoids maintaining employee information twice.

42. Recommended Prisma Architecture
Keep business entities separate but related.
User
  │
  └── Employee
       │
       ├── Department
       ├── Designation
       ├── Attendance
       ├── LeaveRequest
       ├── LeaveBalance
       ├── SalaryStructure
       ├── PayrollItem
       ├── Payslip
       ├── EmployeeDocument
       ├── AssetAssignment
       └── PerformanceReview
Recruitment:
Candidate
   │
   └── JobApplication
          │
          ├── Job
          └── Interview

43. Development Phases
Do not implement everything at once.
Phase 1 – HR Foundation
1. HR roles
2. HR permissions
3. HR dashboard
4. Department
5. Designation
6. Employee management
7. Employee profile
Phase 2 – Recruitment
1. Jobs
2. Candidates
3. Applications
4. Interviews
5. Interview feedback
6. Offers
7. Onboarding
Phase 3 – Attendance
1. Check-in
2. Check-out
3. Attendance records
4. Corrections
5. Monthly attendance
6. Reports
Phase 4 – Leave
1. Leave types
2. Leave balances
3. Leave requests
4. Approval workflow
5. Holidays
6. Reports
Phase 5 – Payroll
1. Salary components
2. Salary structures
3. Payroll calculation
4. Payroll review
5. Payroll processing
6. Payslips
7. Payroll email
Phase 6 – Employee Self Service
1. My profile
2. My attendance
3. My leave
4. My payslips
5. My documents
6. My notifications
Phase 7 – Performance
1. Goals
2. KPIs
3. Reviews
4. Appraisal
5. Promotion
6. Salary revision
Phase 8 – Assets and Documents
1. Asset inventory
2. Assignment
3. Returns
4. Employee documents
5. Document templates
6. PDF generation
Phase 9 – Automation
1. Email templates
2. Email queue
3. Automated emails
4. Notifications
5. Scheduled reminders
6. HR reports

44. Complete HR Lifecycle
The final system should support this complete workflow:
                   CLOUDWENT HR
                         │
             ┌───────────┴───────────┐
             │                       │
        RECRUITMENT               EMPLOYEES
             │                       │
          Job Post                 Profile
             │                       │
         Candidate                Joining
             │                       │
        Application              Onboarding
             │                       │
         Interview                  │
             │                       │
          Selection                 │
             │                       │
        Offer Letter                │
             │                       │
       Offer Accepted               │
             └───────────┬───────────┘
                         │
                     EMPLOYEE
                         │
          ┌──────────────┼──────────────┐
          │              │              │
     Attendance        Leave         Payroll
          │              │              │
       Check-in       Request       Salary
       Check-out      Approval      Payroll Run
          │              │              │
          └──────────────┼──────────────┘
                         │
                    PERFORMANCE
                         │
                      Review
                         │
                    Appraisal
                         │
                  Promotion/Revision
                         │
                    OFFBOARDING
                         │
               Resignation / Exit
                         │
               Final Payroll
                         │
              Experience Letter
                         │
              Relieving Letter

45. Final Target Architecture
The CloudWent application becomes:
CLOUDWENT PLATFORM
│
├── WEBSITE
│   ├── Home
│   ├── About
│   ├── Services
│   ├── Portfolio
│   ├── Blog
│   ├── Careers
│   ├── Team
│   └── Contact
│
├── CMS / BUSINESS ADMIN
│   ├── Content
│   ├── Leads
│   ├── Applications
│   ├── Users
│   ├── Analytics
│   ├── SEO
│   └── Website Settings
│
└── HRMS
    │
    ├── Recruitment
    │   ├── Jobs
    │   ├── Candidates
    │   ├── Applications
    │   ├── Interviews
    │   ├── Offers
    │   └── Onboarding
    │
    ├── Employee Management
    │   ├── Employees
    │   ├── Departments
    │   ├── Designations
    │   └── Employee Profiles
    │
    ├── Attendance
    │   ├── Check In
    │   ├── Check Out
    │   ├── Corrections
    │   └── Reports
    │
    ├── Leave
    │   ├── Requests
    │   ├── Balances
    │   ├── Leave Types
    │   └── Holidays
    │
    ├── Payroll
    │   ├── Salary
    │   ├── Payroll
    │   ├── Payslips
    │   └── Reports
    │
    ├── Performance
    │   ├── Goals
    │   ├── Reviews
    │   └── Appraisals
    │
    ├── Assets
    │   ├── Inventory
    │   ├── Assignment
    │   └── Returns
    │
    ├── Documents
    │   ├── Templates
    │   ├── Employee Documents
    │   └── Generated Documents
    │
    ├── Communication
    │   ├── Email
    │   ├── Notifications
    │   └── Announcements
    │
    └── Reports
        ├── Recruitment
        ├── Employees
        ├── Attendance
        ├── Leave
        └── Payroll
46. Most Important Design Decision
The HR system should not create a second user system.
Use the existing:
User
Authentication
Role
Permission
Activity Log
and extend it with:
User
  ↓
Employee
Likewise, do not create a second recruitment system.
Connect the existing:
Public Careers
      ↓
Job
      ↓
Application
      ↓
Candidate
      ↓
Interview
      ↓
Offer
      ↓
Employee
This keeps the CloudWent application as one unified platform.
47. Final Objective
After implementation, CloudWent will have one application capable of handling:
PUBLIC WEBSITE
       +
CMS
       +
CRM / LEADS
       +
CAREERS
       +
RECRUITMENT
       +
HRMS
       +
EMPLOYEE MANAGEMENT
       +
ATTENDANCE
       +
LEAVE
       +
PAYROLL
       +
DOCUMENTS
       +
PERFORMANCE
       +
ASSET MANAGEMENT
       +
EMAIL AUTOMATION
       +
NOTIFICATIONS
       +
REPORTING
The result is a unified CloudWent Business + HR Management Platform, rather than just a portfolio website.
48. Implementation Order
The practical implementation order should be:
STEP 01
Database foundation

STEP 02
Roles + permissions

STEP 03
Department + designation

STEP 04
Employee module

STEP 05
Recruitment integration

STEP 06
Candidate + interview

STEP 07
Offer + onboarding

STEP 08
Attendance

STEP 09
Leave

STEP 10
Salary structure

STEP 11
Payroll

STEP 12
Payslips

STEP 13
Employee self-service

STEP 14
Documents

STEP 15
Performance

STEP 16
Assets

STEP 17
Email automation

STEP 18
Notifications

STEP 19
Reports

STEP 20
Security + audit

STEP 21
Testing

STEP 22
Production deployment
This order minimizes duplicate work and allows each HR module to build on the previous module.
49. Complete Employee Email Automation System
The CloudWent HRMS should include a centralized Employee Email Automation System.
The purpose is to ensure that HR does not need to manually send routine employee emails. Whenever an important HR event occurs, the system automatically creates and sends the appropriate email using a predefined template.
The email system should work across:
Recruitment
Candidates
Interviews
Offers
Onboarding
Employees
Attendance
Leave
Payroll
Payslips
Performance
Promotions
Salary revisions
Documents
Notifications
Resignation
Offboarding
Experience letters
Relieving letters

49.1 Email Automation Objective
The system should follow this principle:
HR performs an action
        ↓
System detects the event
        ↓
Email event is created
        ↓
Correct template is selected
        ↓
Employee/candidate data is inserted
        ↓
Email is added to queue
        ↓
Email worker processes it
        ↓
Email provider sends it
        ↓
Delivery is logged
HR should only need to perform the actual HR operation.
For example:
HR approves leave
        ↓
Leave status = APPROVED
        ↓
System automatically sends:
"Your leave request has been approved"
        ↓
Employee receives email
No separate manual email operation should be required.

49.2 Email System Architecture
The email system should be centralized rather than implementing email logic separately inside every HR module.
                   HRMS EVENT
                        │
                        ↓
                 Email Event Manager
                        │
                        ↓
                  Email Template
                        │
                        ↓
                 Variable Renderer
                        │
                        ↓
                    Email Queue
                        │
                        ↓
                  Email Worker
                        │
                        ↓
                 Email Provider
              ┌─────────┼─────────┐
              │         │         │
             SMTP      Resend   SendGrid
              │         │         │
              └─────────┼─────────┘
                        │
                        ↓
                  Employee Email
                        │
                        ↓
                    Email Log
This architecture makes the email system reusable throughout the entire CloudWent platform.

49.3 Email Modules
The HRMS should contain the following email modules:
Email System
│
├── Email Templates
├── Email Events
├── Email Queue
├── Email Worker
├── Email Provider
├── Email Logs
├── Email Delivery Tracking
├── Email Preferences
├── Email Attachments
├── Email Variables
├── Email Retry System
└── Email Reports

49.4 Email Folder Structure
The application should contain a dedicated email architecture:
CloudWent_Portfolio_UI/
│
├── app/
│   ├── (dashboard)/
│   │   └── hr/
│   │       └── email/
│   │           ├── templates/
│   │           ├── events/
│   │           ├── queue/
│   │           ├── logs/
│   │           ├── preferences/
│   │           └── settings/
│   │
│   └── api/
│       └── hr/
│           └── email/
│               ├── templates/
│               ├── events/
│               ├── queue/
│               ├── logs/
│               ├── send/
│               └── settings/
│
├── services/
│   └── hr/
│       ├── email.service.ts
│       ├── email-template.service.ts
│       ├── email-event.service.ts
│       ├── email-queue.service.ts
│       ├── email-worker.service.ts
│       ├── email-log.service.ts
│       ├── email-preference.service.ts
│       ├── email-renderer.service.ts
│       └── email-provider.service.ts
│
├── components/
│   └── hr/
│       ├── EmailTemplateEditor.tsx
│       ├── EmailTemplatePreview.tsx
│       ├── EmailQueueTable.tsx
│       ├── EmailLogTable.tsx
│       ├── EmailEventTable.tsx
│       ├── EmailStatusBadge.tsx
│       └── EmailSettings.tsx
│
├── types/
│   └── hr/
│       └── email.types.ts
│
└── validations/
    └── hr/
        └── email.validation.ts

49.5 Email Template Management
HR administrators should be able to manage email templates from the dashboard.
Each template should contain:
Template ID
Template Name
Event Type
Subject
HTML Body
Plain Text Body
Available Variables
Language
Status
Created By
Updated By
Created At
Updated At
Template statuses:
ACTIVE
INACTIVE
DRAFT
Example:
Template Name:
Leave Approved

Event:
LEAVE_APPROVED

Subject:
Leave Request Approved – {{leave_type}}

Body:
Dear {{employee_name}},

Your {{leave_type}} leave request has been approved.

Start Date:
{{start_date}}

End Date:
{{end_date}}

Approved By:
{{approved_by}}

Regards,
{{company_name}} HR Team

49.6 Email Variables
The system should provide reusable variables.
Employee variables
{{employee_name}}
{{employee_id}}
{{employee_email}}
{{employee_phone}}
{{designation}}
{{department}}
{{manager_name}}
{{joining_date}}
{{confirmation_date}}
{{work_location}}
{{employment_type}}
Company variables
{{company_name}}
{{company_email}}
{{company_phone}}
{{company_address}}
{{company_website}}
{{hr_email}}
{{login_url}}
{{support_email}}
Recruitment variables
{{candidate_name}}
{{candidate_email}}
{{job_title}}
{{application_id}}
{{application_date}}
{{interview_date}}
{{interview_time}}
{{interviewer_name}}
{{meeting_link}}
{{interview_location}}
Leave variables
{{leave_type}}
{{start_date}}
{{end_date}}
{{total_days}}
{{leave_reason}}
{{approved_by}}
{{rejection_reason}}
{{remaining_balance}}
Attendance variables
{{attendance_date}}
{{check_in}}
{{check_out}}
{{working_hours}}
{{late_minutes}}
{{attendance_status}}
{{correction_reason}}
Payroll variables
{{pay_period}}
{{basic_salary}}
{{gross_salary}}
{{total_deductions}}
{{net_salary}}
{{payroll_date}}
{{payslip_url}}
Performance variables
{{review_period}}
{{reviewer_name}}
{{goal_name}}
{{achievement}}
{{appraisal_date}}
{{promotion_date}}
{{new_designation}}
Exit variables
{{resignation_date}}
{{notice_period}}
{{last_working_date}}
{{exit_date}}
{{experience_letter_url}}
{{relieving_letter_url}}

49.7 Recruitment Email Automation
Recruitment emails should be completely automated.
Application Received
When a candidate submits an application:
Candidate submits application
        ↓
Application created
        ↓
APPLICATION_RECEIVED event
        ↓
Email sent automatically
Example:
Subject:
Application Received – {{job_title}}

Dear {{candidate_name}},

Thank you for applying for the {{job_title}} position at {{company_name}}.

Our recruitment team will review your application and contact you regarding the next steps.

Regards,
{{company_name}} Recruitment Team

Application Shortlisted
Application Status
        ↓
SHORTLISTED
        ↓
Automatic email
The candidate receives a notification that their application has moved to the next stage.

Interview Scheduled
Interview created
        ↓
INTERVIEW_SCHEDULED
        ↓
Email candidate
        ↓
Email interviewer
The email should contain:
Candidate
Job
Interview Round
Date
Time
Interviewer
Meeting URL
Location
Instructions

Interview Rescheduled
If the interview date or time changes:
Interview updated
        ↓
INTERVIEW_RESCHEDULED
        ↓
Candidate email
        ↓
Interviewer email

Interview Cancelled
If an interview is cancelled:
Interview cancelled
        ↓
INTERVIEW_CANCELLED
        ↓
Automatic notification

49.8 Selection Email
When a candidate is selected:
Candidate Selected
        ↓
SELECTION_EMAIL
        ↓
Candidate receives email
The email can include:
Job Title
Department
Joining Date
Next Steps
Required Documents
HR Contact

49.9 Rejection Email
When an application is rejected:
Application rejected
        ↓
REJECTION_EMAIL
        ↓
Candidate automatically notified
HR should not need to manually compose the email.

49.10 Offer Letter Email
When an offer is generated:
Offer Created
        ↓
Offer Letter PDF generated
        ↓
OFFER_CREATED event
        ↓
Email Queue
        ↓
Candidate receives email
        ↓
Offer Letter attached
The email can contain:
Candidate Name
Job Title
Department
Joining Date
Offer Expiry Date
Offer Letter PDF
Accept Offer Link

49.11 Automatic Employee Account Creation Email
After the candidate accepts the offer:
Offer Accepted
        ↓
Employee Created
        ↓
User Account Created
        ↓
Employee ID Generated
        ↓
Welcome Email
        ↓
Account Email
The employee automatically receives:
Welcome to CloudWent
Employee ID
Official Email
Login URL
Username
Account activation instructions
Password setup link
HR contact
Joining instructions
For security, the system should use a secure password setup/reset link rather than sending a permanent plaintext password by email.

49.12 Welcome Email
When an employee joins:
Employee Created
        ↓
EMPLOYEE_WELCOME
        ↓
Automatic email
Content:
Welcome {{employee_name}}

Employee ID:
{{employee_id}}

Department:
{{department}}

Designation:
{{designation}}

Joining Date:
{{joining_date}}

Manager:
{{manager_name}}

Login:
{{login_url}}

49.13 Onboarding Email Automation
The system should automatically send onboarding communication.
Events:
ONBOARDING_STARTED
ONBOARDING_TASK_ASSIGNED
DOCUMENT_REQUIRED
DOCUMENT_APPROVED
DOCUMENT_REJECTED
ONBOARDING_REMINDER
ONBOARDING_COMPLETED
Example:
Document Required

Dear {{employee_name}},

Please upload the following document:

{{document_name}}

Deadline:
{{document_deadline}}

Upload:
{{document_upload_url}}

Regards,
HR Team

49.14 Attendance Email Automation
Attendance emails should be triggered automatically.
Events:
MISSED_CHECK_IN
MISSED_CHECK_OUT
LATE_ATTENDANCE
ATTENDANCE_CORRECTION_SUBMITTED
ATTENDANCE_CORRECTION_APPROVED
ATTENDANCE_CORRECTION_REJECTED
MONTHLY_ATTENDANCE_SUMMARY
Example:
Subject:
Attendance Reminder – Missing Check-out

Dear {{employee_name}},

Our system indicates that your check-out was not recorded for:

{{attendance_date}}

Please submit an attendance correction if required.

Regards,
{{company_name}} HR

49.15 Daily Attendance Reminder
The system can run a scheduled job.
Example:
Every working day
        ↓
Check employees without check-in
        ↓
Identify applicable employees
        ↓
Send reminder
Another scheduled check:
End of working day
        ↓
Find employees without checkout
        ↓
Send reminder
These schedules should be configurable by HR.

49.16 Monthly Attendance Summary
At the configured end of each month:
Attendance Month Closed
        ↓
Generate employee summary
        ↓
Create email
        ↓
Send to employee
Summary:
Working Days
Present Days
Absent Days
Leave Days
WFH Days
Late Days
Total Working Hours
Overtime

49.17 Leave Email Automation
Every important leave action should trigger an email.
Events:
LEAVE_SUBMITTED
LEAVE_APPROVED
LEAVE_REJECTED
LEAVE_CANCELLED
LEAVE_BALANCE_WARNING

Leave Submitted
Employee submits leave
        ↓
Manager receives email
        ↓
Employee receives submission confirmation

Leave Approved
Manager approves leave
        ↓
Leave balance updated
        ↓
Employee receives email

Leave Rejected
Manager rejects leave
        ↓
Employee receives email
        ↓
Rejection reason included

49.18 Manager Approval Emails
Managers should automatically receive approval notifications.
Example:
Subject:
Leave Approval Required – {{employee_name}}

Employee:
{{employee_name}}

Leave:
{{leave_type}}

Dates:
{{start_date}} – {{end_date}}

Days:
{{total_days}}

Reason:
{{leave_reason}}

Review Request:
{{approval_url}}
The manager can open the HRMS and approve/reject the request.

49.19 Payroll Email Automation
Payroll should automatically generate employee communication.
Events:
PAYROLL_CREATED
PAYROLL_UNDER_REVIEW
PAYROLL_APPROVED
PAYROLL_PROCESSED
PAYSLIP_GENERATED
PAYSLIP_AVAILABLE

49.20 Payslip Email Automation
After payroll processing:
Payroll Processed
        ↓
Payslip Generated
        ↓
PDF Generated
        ↓
Email Queue
        ↓
Employee Email
        ↓
Payslip PDF Attachment
Example:
Subject:
Payslip – {{pay_period}}

Dear {{employee_name}},

Your payslip for {{pay_period}} is now available.

Net Salary:
{{net_salary}}

You can view your payslip here:

{{payslip_url}}

The payslip PDF is attached to this email.

Regards,
{{company_name}} HR
The PDF attachment should be generated securely and should not expose another employee's payroll information.

49.21 Salary Revision Email
When HR updates salary:
Salary Revision Approved
        ↓
SALARY_REVISION
        ↓
Employee email
The email may contain:
Effective Date
New Designation
New Salary Structure
Revision Information
Applicable Policy
Access to salary details must remain restricted according to the organization's permissions.

49.22 Promotion Email
When a promotion is approved:
Promotion Approved
        ↓
PROMOTION_APPROVED
        ↓
Employee receives email
Example information:
Employee Name
Previous Designation
New Designation
Effective Date
Department
Manager
Promotion Letter
The promotion letter can automatically be generated as a PDF and attached.

49.23 Probation Reminder Automation
The system should automatically monitor probation dates.
Example:
Probation End Date
        ↓
30 days before
        ↓
HR Reminder

15 days before
        ↓
Manager Reminder

7 days before
        ↓
HR + Manager Reminder
The exact reminder schedule should be configurable.

49.24 Employee Document Email Automation
Events:
DOCUMENT_REQUIRED
DOCUMENT_UPLOADED
DOCUMENT_APPROVED
DOCUMENT_REJECTED
DOCUMENT_EXPIRING
DOCUMENT_EXPIRED
Example:
Document Expiry Reminder

Dear {{employee_name}},

The following document is approaching its expiry date:

Document:
{{document_name}}

Expiry Date:
{{expiry_date}}

Please upload the updated document.

{{document_upload_url}}

49.25 Birthday and Work Anniversary
These can be optional automated communication events.
Birthday:
Employee Birthday
        ↓
BIRTHDAY_EMAIL
        ↓
Employee receives greeting
Work anniversary:
Joining Date Anniversary
        ↓
WORK_ANNIVERSARY
        ↓
Employee receives email
HR should be able to enable or disable these features.

49.26 Performance Email Automation
Performance events:
GOAL_ASSIGNED
GOAL_DEADLINE_REMINDER
SELF_REVIEW_OPENED
MANAGER_REVIEW_REQUIRED
REVIEW_SUBMITTED
APPRAISAL_COMPLETED
PROMOTION_APPROVED
SALARY_REVISION_APPROVED
Example:
Performance Review Required

Dear {{manager_name}},

A performance review is pending for:

Employee:
{{employee_name}}

Review Period:
{{review_period}}

Deadline:
{{review_deadline}}

Review Employee:
{{review_url}}

49.27 Asset Email Automation
Asset-related events:
ASSET_ASSIGNED
ASSET_RETURN_REQUESTED
ASSET_RETURNED
ASSET_DAMAGED
ASSET_OVERDUE
Example:
Asset Assigned

Asset:
{{asset_name}}

Asset ID:
{{asset_id}}

Serial Number:
{{serial_number}}

Assigned Date:
{{assigned_date}}

49.28 Exit and Resignation Email Automation
Exit communication should also be automated.
Events:
RESIGNATION_SUBMITTED
RESIGNATION_APPROVED
NOTICE_PERIOD_STARTED
NOTICE_PERIOD_REMINDER
EXIT_CHECKLIST_STARTED
ASSET_RETURN_REQUIRED
ACCESS_REVOCATION_REQUIRED
FINAL_PAYROLL
EXPERIENCE_LETTER
RELIEVING_LETTER
EXIT_COMPLETED

49.29 Experience Letter Automation
After the exit process is completed:
Exit Completed
        ↓
Experience Letter Generated
        ↓
PDF Created
        ↓
Email Employee
        ↓
Attach Experience Letter

49.30 Relieving Letter Automation
Similarly:
Final Clearance
        ↓
Relieving Letter Generated
        ↓
PDF Created
        ↓
Employee Email
The letter should only become available after the organization's configured approval/clearance conditions are satisfied.

49.31 Email Queue
Emails should not always be sent directly during an HR database transaction.
Instead:
HR Action
    ↓
Database Transaction
    ↓
Email Queue Record
    ↓
Transaction Completed
    ↓
Email Worker
    ↓
Provider
This prevents an email-provider failure from breaking important HR operations.
For example:
Leave Approved
        ↓
Database updated successfully
        ↓
Email provider temporarily unavailable
        ↓
Email remains QUEUED
        ↓
Worker retries later
The leave approval should not be lost merely because the email provider is temporarily unavailable.

49.32 Email Queue Status
Each queued email should have a status:
PENDING
PROCESSING
SENT
DELIVERED
FAILED
RETRYING
CANCELLED
Additional information:
Attempt Count
Last Attempt
Next Retry
Error Message
Provider Message ID
Created At
Sent At

49.33 Automatic Retry System
Failed emails should automatically retry.
Example:
Attempt 1
    ↓
Failed
    ↓
Retry

Attempt 2
    ↓
Failed
    ↓
Retry

Attempt 3
    ↓
Failed
    ↓
Retry

Maximum attempts reached
    ↓
FAILED
    ↓
HR/Admin notification
Retry timing should use configurable delays rather than continuously retrying.

49.34 Email Logs
Every email should create an audit record.
Example:
Email ID
Event
Recipient
Subject
Template
Status
Provider
Provider Message ID
Sent At
Delivered At
Failure Reason
Created At
HR administrators should be able to search:
Employee
Email
Event
Date
Status
Template

49.35 Email Dashboard
Add an Email section to the HR dashboard.
Cards:
Emails Sent Today
Emails Delivered
Emails Pending
Emails Failed
Emails Retrying
Templates Active
Charts:
Email Volume
Delivery Rate
Failure Rate
Email Events

49.36 Email Logs Page
The email log page should provide:
Search
Filter by employee
Filter by event
Filter by status
Filter by date
View email
View template
View error
Retry failed email
For privacy and security, access to email content should be permission-controlled.

49.37 Email Template Editor
HR/Admin should have a template editor.
Features:
Template Name
Event Selection
Subject Editor
HTML Editor
Plain Text Editor
Variable Selector
Preview
Test Email
Enable / Disable
Save
Variable selector:
Employee
Candidate
Leave
Attendance
Payroll
Interview
Document
Performance
Exit
Company
HR should be able to insert a supported variable without manually typing it.

49.38 Email Preview
Before activating a template:
Template
    ↓
Sample Employee
    ↓
Variables populated
    ↓
Preview
Example:
{{employee_name}}
becomes:
Rahul Sharma
The preview should show the final email as the employee will receive it.

49.39 Test Email
HR/Admin should be able to send a test email.
Example:
Template:
Payslip Available

Test Recipient:
admin@company.com

Test
The system should clearly mark the message as a test and should not accidentally trigger a real HR workflow.

49.40 Employee Email Preferences
Employees should be able to control non-essential communication.
Preferences:
HR Announcements
Birthday Emails
Work Anniversary
Performance Notifications
Training Notifications
Company Updates
Optional Reminders
Mandatory operational emails should not be disabled where they are required for the HR process.
Examples:
Payslip
Leave Decision
Account Security
Important HR Notice
Employment Documents

49.41 Email Provider Configuration
The application should use a provider abstraction.
EmailService
       ↓
EmailProvider
       │
       ├── SMTP
       ├── Resend
       ├── SendGrid
       └── Future Provider
Environment configuration:
EMAIL_PROVIDER=
EMAIL_FROM=
EMAIL_FROM_NAME=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=

RESEND_API_KEY=
SENDGRID_API_KEY=
Only the credentials for the selected provider need to be configured.
Provider credentials must remain server-side and must never be exposed to browser/client code.

49.42 Email Domain Configuration
For production, CloudWent should configure an official sending domain.
Recommended configuration includes:
SPF
DKIM
DMARC
The exact DNS records depend on the selected email provider.
The application should also use a dedicated sender identity, for example:
hr@company-domain
and optionally:
no-reply@company-domain
payroll@company-domain
recruitment@company-domain
The actual addresses should be configurable rather than hard-coded.

49.43 Email Attachments
The email system should support secure attachments.
Possible attachments:
Offer Letter PDF
Appointment Letter PDF
Promotion Letter PDF
Salary Revision Letter PDF
Payslip PDF
Experience Letter PDF
Relieving Letter PDF
Company Documents
The system should validate:
File Type
File Size
Access Permission
Employee Ownership
Document Status
Sensitive files should not be publicly accessible through predictable URLs.

49.44 Email Security
Email functionality must follow strong security practices.
Required:
Server-side provider credentials
Permission-controlled template management
Permission-controlled email logs
Private employee documents
Secure download URLs
Attachment validation
Input validation
HTML sanitization
Rate limiting
Audit logging
No plaintext passwords
No sensitive credentials in emails
Email templates should be sanitized to prevent malicious HTML or script injection.

49.45 Email Event Catalog
The final system can maintain a centralized event catalog:
RECRUITMENT
────────────────────────
APPLICATION_RECEIVED
APPLICATION_SHORTLISTED
APPLICATION_REJECTED
INTERVIEW_SCHEDULED
INTERVIEW_RESCHEDULED
INTERVIEW_CANCELLED
CANDIDATE_SELECTED
OFFER_CREATED
OFFER_REMINDER
OFFER_ACCEPTED
OFFER_DECLINED

EMPLOYEE
────────────────────────
EMPLOYEE_CREATED
ACCOUNT_CREATED
WELCOME_EMAIL
ONBOARDING_STARTED
ONBOARDING_REMINDER
ONBOARDING_COMPLETED
PROBATION_REMINDER
EMPLOYEE_CONFIRMED
PROMOTION_APPROVED
SALARY_REVISION_APPROVED

ATTENDANCE
────────────────────────
MISSED_CHECK_IN
MISSED_CHECK_OUT
LATE_ATTENDANCE
ATTENDANCE_CORRECTION_SUBMITTED
ATTENDANCE_CORRECTION_APPROVED
ATTENDANCE_CORRECTION_REJECTED
MONTHLY_ATTENDANCE_SUMMARY

LEAVE
────────────────────────
LEAVE_SUBMITTED
LEAVE_APPROVED
LEAVE_REJECTED
LEAVE_CANCELLED
LEAVE_BALANCE_WARNING

PAYROLL
────────────────────────
PAYROLL_CREATED
PAYROLL_APPROVED
PAYROLL_PROCESSED
PAYSLIP_GENERATED
PAYSLIP_AVAILABLE

DOCUMENTS
────────────────────────
DOCUMENT_REQUIRED
DOCUMENT_APPROVED
DOCUMENT_REJECTED
DOCUMENT_EXPIRING
DOCUMENT_EXPIRED

PERFORMANCE
────────────────────────
GOAL_ASSIGNED
REVIEW_OPENED
REVIEW_REMINDER
REVIEW_SUBMITTED
APPRAISAL_COMPLETED

ASSETS
────────────────────────
ASSET_ASSIGNED
ASSET_RETURN_REQUIRED
ASSET_RETURNED
ASSET_OVERDUE

EXIT
────────────────────────
RESIGNATION_SUBMITTED
RESIGNATION_APPROVED
NOTICE_PERIOD_REMINDER
EXIT_CHECKLIST
FINAL_PAYROLL
EXPERIENCE_LETTER
RELIEVING_LETTER
EXIT_COMPLETED

OPTIONAL
────────────────────────
BIRTHDAY
WORK_ANNIVERSARY
HR_ANNOUNCEMENT

49.46 Email Automation Rules
Each event should have configurable rules.
Example:
Event:
LEAVE_APPROVED

Enabled:
YES

Recipients:
Employee

CC:
Manager

Template:
leave-approved

Send:
Immediately
Another example:
Event:
PROBATION_REMINDER

Enabled:
YES

Trigger:
30 days before probation end

Recipients:
HR + Manager

Template:
probation-reminder

49.47 Recipient Rules
The system should support dynamic recipients.
Possible recipients:
Employee
Manager
HR
Recruiter
Payroll Admin
Department Head
Interviewer
Candidate
Super Admin
Custom Email
Example:
Leave Submitted
        ↓
Employee
        +
Manager
Payroll:
Payslip Generated
        ↓
Employee
Recruitment:
Interview Scheduled
        ↓
Candidate
        +
Interviewer

49.48 Email Scheduling
Some emails should be immediate while others should be scheduled.
Immediate
Leave Approved
Interview Scheduled
Offer Created
Payslip Generated
Document Rejected
Scheduled
Probation Reminder
Birthday
Work Anniversary
Document Expiry
Interview Reminder
Leave Approval Reminder
Payroll Reminder
The system should support:
Send Immediately
Send At Specific Time
Send Before Event
Send After Event
Recurring Schedule

49.49 Email Reminder Examples
Interview:
Interview Date
      ↓
24 hours before
      ↓
Candidate reminder
Probation:
Probation End
      ↓
30 days before
      ↓
HR reminder
Document:
Document Expiry
      ↓
30 days before
      ↓
Employee reminder
Payroll:
Payroll Deadline
      ↓
Reminder
      ↓
Payroll Admin

49.50 Email Database Models
The Prisma architecture should include:
EmailTemplate
EmailEvent
EmailQueue
EmailLog
EmailVariable
EmployeeEmailPreference
EmailProviderSetting
EmailTemplate
Stores:
Template
Name
Event
Subject
HTML
Plain Text
Variables
Status
EmailEvent
Stores:
Event Type
Entity Type
Entity ID
Triggered By
Payload
Created At
EmailQueue
Stores:
Recipient
CC
BCC
Subject
Body
Template
Attachments
Status
Attempts
Next Retry
Error
EmailLog
Stores:
Queue ID
Provider
Provider Message ID
Status
Sent At
Delivered At
Failure Reason
EmployeeEmailPreference
Stores:
Employee
Category
Enabled
Updated At

49.51 Email API Structure
Recommended API:
/api/hr/email
Templates
GET    /api/hr/email/templates
GET    /api/hr/email/templates/:id
POST   /api/hr/email/templates
PATCH  /api/hr/email/templates/:id
DELETE /api/hr/email/templates/:id
Events
GET    /api/hr/email/events
GET    /api/hr/email/events/:id
POST   /api/hr/email/events/test
Queue
GET    /api/hr/email/queue
GET    /api/hr/email/queue/:id
POST   /api/hr/email/queue/:id/retry
POST   /api/hr/email/queue/:id/cancel
Logs
GET    /api/hr/email/logs
GET    /api/hr/email/logs/:id
Send
POST   /api/hr/email/send
Manual sending should be permission-controlled because the main objective is automated communication.
Settings
GET    /api/hr/email/settings
PATCH  /api/hr/email/settings

49.52 Email Service Architecture
The internal service flow should be:
EmployeeService
      │
      ├── employee.created
      │
      └── EmailEventService
                ↓
          EmailTemplateService
                ↓
           EmailRenderer
                ↓
           EmailQueueService
                ↓
           EmailWorker
                ↓
           EmailProvider
                ↓
            EmailLog
The same architecture can be reused by:
RecruitmentService
AttendanceService
LeaveService
PayrollService
DocumentService
PerformanceService
AssetService
OffboardingService
This avoids duplicate email code throughout the application.

49.53 Example Automated Workflow
Employee Joining
Candidate accepts offer
        ↓
Offer status updated
        ↓
Employee automatically created
        ↓
User account created
        ↓
Employee ID generated
        ↓
Onboarding created
        ↓
Welcome email queued
        ↓
Account activation email queued
        ↓
HR onboarding notification
        ↓
Employee receives emails
HR does not need to manually send these messages.

49.54 Example Leave Workflow
Employee submits leave
        ↓
Leave created
        ↓
Employee confirmation email
        ↓
Manager approval email
        ↓
Manager approves
        ↓
Leave balance updated
        ↓
Employee approval email
        ↓
Calendar updated

49.55 Example Payroll Workflow
Payroll run created
        ↓
Payroll calculated
        ↓
HR reviews
        ↓
Payroll approved
        ↓
Payroll processed
        ↓
Payslip generated
        ↓
Payslip PDF created
        ↓
Email queued
        ↓
Employee receives payslip
        ↓
Email delivery logged

49.56 Email Automation and Notifications
Email should work together with in-app notifications.
Example:
Leave Approved
       │
       ├── Email
       │
       └── In-App Notification
Another:
Interview Scheduled
       │
       ├── Candidate Email
       ├── Interviewer Email
       └── Dashboard Notification
This creates a consistent communication system.

49.57 HR Email Administration
HR administrators should have a dedicated:
HR
 └── Email Management
      ├── Templates
      ├── Events
      ├── Queue
      ├── Logs
      ├── Preferences
      └── Settings
This allows HR to see whether the automated system is operating correctly without manually sending each email.

49.58 Email Reporting
Reports should include:
Total Emails
Sent
Delivered
Pending
Failed
Retrying
Filters:
Date
Employee
Event
Template
Status
Provider
The system should also expose operational metrics such as:
Delivery rate
Failure rate
Average processing time
Retry count
These are operational measurements, not employee performance scores.

49.59 Email Failure Handling
If the email provider fails:
HR Action
    ↓
HR transaction succeeds
    ↓
Email queued
    ↓
Provider failure
    ↓
Retry
    ↓
Retry succeeds
If repeated attempts fail:
Email
 ↓
FAILED
 ↓
HR/Admin notification
 ↓
Error visible in Email Logs
 ↓
Manual Retry
The HR action itself should not automatically be rolled back just because email delivery failed, unless a specific business rule explicitly requires email delivery as part of the transaction.

49.60 Final Automatic Email Coverage
After implementation, CloudWent HRMS will automatically handle:
RECRUITMENT
✓ Application confirmation
✓ Shortlisting
✓ Interview scheduling
✓ Interview changes
✓ Selection
✓ Rejection
✓ Offer letter
✓ Offer reminders

EMPLOYEE
✓ Account creation
✓ Welcome email
✓ Onboarding
✓ Document requests
✓ Confirmation
✓ Probation reminders
✓ Promotion
✓ Salary revision

ATTENDANCE
✓ Check-in reminders
✓ Check-out reminders
✓ Late notification
✓ Correction updates
✓ Monthly summary

LEAVE
✓ Request confirmation
✓ Manager approval request
✓ Approval
✓ Rejection
✓ Cancellation
✓ Balance warning

PAYROLL
✓ Payroll processing
✓ Payslip generation
✓ Payslip delivery
✓ Salary communication

DOCUMENTS
✓ Document request
✓ Approval
✓ Rejection
✓ Expiry reminder
✓ Generated documents

PERFORMANCE
✓ Goal assignment
✓ Review reminders
✓ Review completion
✓ Appraisal notification

ASSETS
✓ Asset assignment
✓ Return request
✓ Return confirmation
✓ Overdue notification

EXIT
✓ Resignation confirmation
✓ Approval
✓ Notice reminders
✓ Exit checklist
✓ Final payroll
✓ Experience letter
✓ Relieving letter
✓ Exit completion

OPTIONAL
✓ Birthday
✓ Work anniversary
✓ HR announcements

49.61 Final Email Architecture
The complete system becomes:
                        CLOUDWENT HRMS
                                │
                                ↓
                         HR BUSINESS EVENT
                                │
                                ↓
                        EMAIL EVENT SERVICE
                                │
                                ↓
                       EMAIL TEMPLATE SERVICE
                                │
                                ↓
                          DATA VARIABLES
                                │
                                ↓
                         EMAIL RENDERER
                                │
                                ↓
                         EMAIL QUEUE
                                │
                                ↓
                         EMAIL WORKER
                                │
                  ┌─────────────┼─────────────┐
                  │             │             │
                 SMTP         Resend       SendGrid
                  │             │             │
                  └─────────────┼─────────────┘
                                │
                                ↓
                         EMPLOYEE / CANDIDATE
                                │
                                ↓
                           EMAIL LOG
                                │
                  ┌─────────────┴─────────────┐
                  │                           │
              Delivered                    Failed
                                              │
                                              ↓
                                            Retry
                                              │
                                              ↓
                                       HR/Admin Alert
The key objective is that HR performs the business action once, and CloudWent automatically handles the required communication.
The email system therefore becomes a core part of the HRMS rather than a separate utility.

49.62 Final Result
With this email automation layer, the CloudWent platform will provide:
ONE EMPLOYEE
      ↓
ONE USER ACCOUNT
      ↓
ONE HR PROFILE
      ↓
AUTOMATIC HR WORKFLOWS
      ↓
AUTOMATIC DOCUMENT GENERATION
      ↓
AUTOMATIC EMAIL COMMUNICATION
      ↓
AUTOMATIC NOTIFICATIONS
      ↓
AUDIT LOGGING
This eliminates repetitive manual HR communication while keeping templates, permissions, logs, provider settings, and employee preferences under centralized administrative control.


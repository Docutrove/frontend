import BaseButton from "../../ui/button";
import Select from "../../ui/select";

export default function CustomiseSearch() {
  return (
    <div className="customise__search app-container">
      <div className="customise__search__content app-container__section">
        <div className="customise__search__header">
          <h2>Search for a document</h2>
          {/* <BaseButton variant="primary">Search document</BaseButton> */}
        </div>
        <div className="customise__search__selects">
          <div className="search-select">
            <Select
              label="What type of legal document would you like to create?"
              options={categories}
            />
          </div>
          <div className="search-select">
            <Select
              label="Select the specific template you need"
              options={templates}
            />
          </div>
        </div>
        <BaseButton variant="primary" className="search-button">
          Search document
        </BaseButton>
      </div>
    </div>
  );
}

const categories = [
  "All templates",
  "Business contracts & policies",
  "Confidentiality, privacy, & intellectual property",
  "Cooperation and partnership",
  "Corporate finance",
  "Corporate law and shareholders",
  "Customer contracts & sales contracts",
  "Employment and HR",
  "Starting a company",
  "Technology contracts",
];
const templates = [
  "Acceptable Use Policy",
  "Advance Subscription Agreement (ASA)",
  "Agency Agreement",
  "Anti-Bribery Policy",
  "Application Programming Interface (API) Licence Agreement",
  "Articles of Association",
  "Asset Purchase Agreement",
  "Assignment of Copyright (Deed)",
  "Assignment of Intellectual Property (Deed)",
  "Assignment of Patents (Deed)",
  "Assignment of Trade Marks (Deed)",
  "Board Minutes",
  "CCTV Policy",
  "Collaboration Agreement",
  "Consultancy Agreement",
  "Content Contributor Agreement",
  "Cookie Notice",
  "Copyright Licence",
  "Cross-option Agreement (Company Policyholder)",
  "Cross-option Agreement (Shareholder Policyholders)",
  "Data Breach Policy",
  "Data Processing Agreement",
  "Data Protection Policy",
  "Data Protection Request Letter",
  "Data Retention Policy",
  "Data Sharing Agreement",
  "Data Subject Request Policy",
  "Deed of Adherence (Company)",
  "Deed of Adherence (Individual)",
  "Deed of Variation of Agreement",
  "Director’s Service Agreement",
  "Disciplinary Letter (dismissal)",
  "Disciplinary Letter (invite)",
  "Disciplinary Letter (written warning)",
  "Disciplinary Policy",
  "Distribution Agreement",
  "Email Disclaimer",
  "Employee Privacy Notice",
  "Employee Travel Loan Agreement (Season Tickets)",
  "Employment Contract",
  "Employment Reference Letter",
  "End User Licence Agreement (EULA)",
  "Equal Opportunities Policy",
  "Ethical Sourcing Policy",
  "Exempt Employee Loan Agreement",
  "Financial Promotion Statement (Certified High Net Worth Investor)",
  "Financial Promotion Statement (Investment Professionals)",
  "Financial Promotion Statement (Self Certified Sophisticated Investors)",
  "Founder’s Service Agreement",
  "Franchise Agreement",
  "Freelance Contract",
  "General Contract Template",
  "Grievance Letter (invite)",
  "Grievance Letter (outcome)",
  "Grievance Policy",
  "Heads of Terms",
  "Health and Safety Policy",
  "Hire Contract",
  "Influencer Agreement",
  "Intellectual Property Licence",
  "Introducer Agreement",
  "Job Offer Letter",
  "Letter of Appointment for Non-Executive Director",
  "Letter of Consent to Act as an Officer",
  "Letter of Engagement",
  "Letter of Intent",
  "Loan Agreement",
  "Loan Note Certificate",
  "Loan Note Instrument",
  "Master Services Agreement (MSA)",
  "Mobile Application Development Agreement",
  "Non-Disclosure Agreement (NDA) - Mutual",
  "Non-Disclosure Agreement (NDA) - One-Way",
  "Notice of termination (deed)",
  "Officer Resignation Letter",
  "Online Terms for the Sale of Digital Content",
  "Online Terms for the Sale of Goods",
  "Online Terms for the Supply of Services",
  "Order Form",
  "Photo Consent Form",
  "Pre-emption Waiver Letter",
  "Privacy Notice (Job Applicants)",
  "Privacy Notice (Shareholders and Investors)",
  "Proposal",
  "Purchase Agreement",
  "Recruitment Services Terms and Conditions",
  "Redundancy Letter (at risk)",
  "Redundancy Letter (invite)",
  "Redundancy Letter (outcome)",
  "Reseller Agreement",
  "Sales Agreement",
  "Service Level Agreement (SLA)",
  "Services Agreement",
  "Settlement Agreement",
  "Settlement Agreement for Commercial Disputes",
  "Share Certificate",
  "Share Purchase Agreement",
  "Shareholders’ Agreement",
  "Software as a Service ('SaaS') Agreement",
  "Software Development Agreement",
  "Software Evaluation Licence Agreement",
  "Software Licence Agreement",
  "Software Reseller Agreement",
  "Statement of Work (SOW)",
  "Statutory Registers",
  "Sub-Contract",
  "Subscription Agreement",
  "Subscription Letter",
  "Supply of Goods Agreement",
  "Supply of Goods and Services Agreement",
  "Tenancy Agreement",
  "Termination Letter",
  "Trade Mark Licence",
  "Training Agreement",
  "Variation Agreement",
  "Website Development Agreement",
  "Website Legal Notices",
  "Website Privacy Notice",
  "Website Terms of Use",
  "Whistleblowing Policy",
  "Working Time Opt-Out",
  "Written Resolutions",
];

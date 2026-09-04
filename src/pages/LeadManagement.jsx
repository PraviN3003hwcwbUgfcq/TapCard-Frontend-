



// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const initialLeads = [
//   {
//     id: 1,
//     potentialClient: null,
//     companyName: "Metro Realty",
//     contactPerson: "Rahul Mehta",
//     designation: "Manager",
//     phone: "+91 98765 43210",
//     email: "rahul@metrorealty.com",
//     website: "https://metrorealty.com",
//     industry: "Real Estate Agency",
//     location: "Mumbai",
//     source: "Client Search",
//     productInterest: "CRM Software",
//     requirement: "Looking for a complete sales management solution.",
//     status: "New",
//     priority: "High",
//     assignedTo: "Sarah K.",
//     nextFollowUp: "2026-09-01",
//     remarks: "Potential high-value client.",
//   },
//   {
//     id: 2,
//     potentialClient: null,
//     companyName: "Sharma Dental Care",
//     contactPerson: "Dr. A. Sharma",
//     designation: "Doctor",
//     phone: "+91 98765 12345",
//     email: "info@sharmadental.com",
//     website: "https://sharmadental.com",
//     industry: "Dental Clinic",
//     location: "Delhi",
//     source: "Client Search",
//     productInterest: "Clinic Management",
//     requirement: "Needs appointment and patient management.",
//     status: "Contacted",
//     priority: "Medium",
//     assignedTo: "Rahul M.",
//     nextFollowUp: "2026-09-02",
//     remarks: "Initial discussion completed.",
//   },
//   {
//     id: 3,
//     potentialClient: null,
//     companyName: "The Urban Table",
//     contactPerson: "Amit Kapoor",
//     designation: "Owner",
//     phone: "+91 99887 66554",
//     email: "amit@urbantable.com",
//     website: "https://urbantable.com",
//     industry: "Restaurant",
//     location: "Pune",
//     source: "Client Search",
//     productInterest: "Restaurant Management",
//     requirement: "Interested in a digital restaurant management system.",
//     status: "Demo",
//     priority: "High",
//     assignedTo: "Sarah K.",
//     nextFollowUp: "2026-09-01",
//     remarks: "Demo scheduled.",
//   },
//   {
//     id: 4,
//     potentialClient: null,
//     companyName: "Prime Properties",
//     contactPerson: "Neha Shah",
//     designation: "Director",
//     phone: "+91 91234 56789",
//     email: "neha@primeproperties.com",
//     website: "https://primeproperties.com",
//     industry: "Real Estate Agency",
//     location: "Mumbai",
//     source: "Client Search",
//     productInterest: "Property CRM",
//     requirement: "Needs lead and property management.",
//     status: "Quotation",
//     priority: "High",
//     assignedTo: "Rahul M.",
//     nextFollowUp: "2026-09-03",
//     remarks: "Quotation shared with client.",
//   },
//   {
//     id: 5,
//     potentialClient: null,
//     companyName: "Wellness Dental Studio",
//     contactPerson: "Dr. Priya Singh",
//     designation: "Doctor",
//     phone: "+91 97654 32109",
//     email: "hello@wellnessdental.com",
//     website: "https://wellnessdental.com",
//     industry: "Dental Clinic",
//     location: "Delhi",
//     source: "Client Search",
//     productInterest: "Dental CRM",
//     requirement: "Interested in patient and appointment management.",
//     status: "Negotiation",
//     priority: "Medium",
//     assignedTo: "Sarah K.",
//     nextFollowUp: "2026-09-04",
//     remarks: "Pricing discussion in progress.",
//   },
//   {
//     id: 6,
//     potentialClient: null,
//     companyName: "Green Leaf Restaurant",
//     contactPerson: "Vikas Patil",
//     designation: "Owner",
//     phone: "+91 98989 78787",
//     email: "contact@greenleaf.com",
//     website: "https://greenleaf.com",
//     industry: "Restaurant",
//     location: "Pune",
//     source: "Client Search",
//     productInterest: "Restaurant Management",
//     requirement: "Restaurant operations management.",
//     status: "Converted",
//     priority: "Low",
//     assignedTo: "Rahul M.",
//     nextFollowUp: "",
//     remarks: "Successfully converted.",
//   },
// ];

// const statuses = [
//   "All",
//   "New",
//   "Contacted",
//   "Follow-up",
//   "Demo",
//   "Interested",
//   "Quotation",
//   "Negotiation",
//   "Order Confirmed",
//   "Converted",
//   "Lost",
// ];

// const industries = [
//   "Real Estate Agency",
//   "Dental Clinic",
//   "Restaurant",
//   "Hotel",
//   "Gym",
//   "Salon",
//   "Retail Store",
//   "Law Firm",
//   "Medical Clinic",
//   "Education",
//   "Other",
// ];

// const priorities = ["Low", "Medium", "High"];

// const sources = [
//   "Manual",
//   "Client Search",
//   "Website",
//   "Referral",
//   "Social Media",
//   "Advertisement",
//   "Other",
// ];

// const emptyLead = {
//   companyName: "",
//   contactPerson: "",
//   designation: "",
//   phone: "",
//   email: "",
//   website: "",
//   industry: "Real Estate Agency",
//   location: "",
//   source: "Manual",
//   productInterest: "",
//   requirement: "",
//   status: "New",
//   priority: "Medium",
//   assignedTo: "Sarah K.",
//   nextFollowUp: "",
//   remarks: "",
// };

// function SearchIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-5 w-5"
//     >
//       <circle cx="11" cy="11" r="6.5" />
//       <path d="m16 16 4 4" />
//     </svg>
//   );
// }

// function BellIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.7"
//       className="h-5 w-5"
//     >
//       <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
//       <path d="M10 21h4" />
//     </svg>
//   );
// }

// function MapPinIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
//       <circle cx="12" cy="10" r="2.5" />
//     </svg>
//   );
// }

// function PhoneIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M6.5 3.5h3l1.5 4-2 1.5c1 2.1 2.7 3.8 4.8 4.8l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 18.3 5.7 13.5 4.2 6.7c-.3-1.7.7-3.2 2.3-3.2Z" />
//     </svg>
//   );
// }

// function EyeIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
//       <circle cx="12" cy="12" r="2.5" />
//     </svg>
//   );
// }

// function PlusIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       className="h-4 w-4"
//     >
//       <path d="M12 5v14M5 12h14" />
//     </svg>
//   );
// }

// function XIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       className="h-5 w-5"
//     >
//       <path d="M6 6l12 12M18 6 6 18" />
//     </svg>
//   );
// }

// function ChevronDownIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       className="h-4 w-4"
//     >
//       <path d="m6 9 6 6 6-6" />
//     </svg>
//   );
// }

// function LeadManagement({ onNavigate }) {
//   const [leads, setLeads] = useState(initialLeads);
//   const [activeStatus, setActiveStatus] = useState("All");
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [editingLead, setEditingLead] = useState(null);
//   const [formData, setFormData] = useState(emptyLead);

//   const filteredLeads = leads.filter((lead) => {
//     const matchesStatus =
//       activeStatus === "All" || lead.status === activeStatus;

//     const searchValue = search.toLowerCase();

//     const matchesSearch =
//       (lead.companyName || "").toLowerCase().includes(searchValue) ||
//       (lead.contactPerson || "").toLowerCase().includes(searchValue) ||
//       (lead.industry || "").toLowerCase().includes(searchValue) ||
//       (lead.location || "").toLowerCase().includes(searchValue) ||
//       (lead.email || "").toLowerCase().includes(searchValue);

//     return matchesStatus && matchesSearch;
//   });

//   const openAddModal = () => {
//     setEditingLead(null);
//     setFormData(emptyLead);
//     setShowModal(true);
//   };

//   const openEditModal = (lead) => {
//     setEditingLead(lead);
//     setFormData({
//       companyName: lead.companyName || "",
//       contactPerson: lead.contactPerson || "",
//       designation: lead.designation || "",
//       phone: lead.phone || "",
//       email: lead.email || "",
//       website: lead.website || "",
//       industry: lead.industry || "Real Estate Agency",
//       location: lead.location || "",
//       source: lead.source || "Manual",
//       productInterest: lead.productInterest || "",
//       requirement: lead.requirement || "",
//       status: lead.status || "New",
//       priority: lead.priority || "Medium",
//       assignedTo: lead.assignedTo || "Sarah K.",
//       nextFollowUp: lead.nextFollowUp || "",
//       remarks: lead.remarks || "",
//     });
//     setShowModal(true);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.companyName.trim()) return;

//     if (editingLead) {
//       setLeads((current) =>
//         current.map((lead) =>
//           lead.id === editingLead.id
//             ? {
//                 ...lead,
//                 ...formData,
//               }
//             : lead
//         )
//       );
//     } else {
//       const newLead = {
//         id: Date.now(),
//         potentialClient: null,
//         ...formData,
//       };

//       setLeads((current) => [newLead, ...current]);
//     }

//     setShowModal(false);
//     setEditingLead(null);
//     setFormData(emptyLead);
//     setActiveStatus("All");
//   };

//   const deleteLead = (id) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this lead?"
//     );

//     if (!confirmed) return;

//     setLeads((current) => current.filter((lead) => lead.id !== id));
//   };

//   const updateStatus = (id, status) => {
//     setLeads((current) =>
//       current.map((lead) =>
//         lead.id === id
//           ? {
//               ...lead,
//               status,
//             }
//           : lead
//       )
//     );
//   };

//   const getStatusStyle = (status) => {
//     const styles = {
//       New: "bg-indigo-50 text-indigo-600",
//       Contacted: "bg-blue-50 text-blue-600",
//       "Follow-up": "bg-cyan-50 text-cyan-600",
//       Demo: "bg-purple-50 text-purple-600",
//       Interested: "bg-teal-50 text-teal-600",
//       Quotation: "bg-orange-50 text-orange-600",
//       Negotiation: "bg-yellow-50 text-yellow-700",
//       "Order Confirmed": "bg-emerald-50 text-emerald-600",
//       Converted: "bg-green-50 text-green-600",
//       Lost: "bg-red-50 text-red-600",
//     };

//     return styles[status] || "bg-gray-100 text-gray-600";
//   };

//   const getPriorityStyle = (priority) => {
//     if (priority === "High") return "text-red-600 bg-red-50";
//     if (priority === "Medium") return "text-orange-600 bg-orange-50";
//     return "text-green-600 bg-green-50";
//   };

//   const formatDate = (date) => {
//     if (!date) return "-";

//     const parsedDate = new Date(date);

//     if (Number.isNaN(parsedDate.getTime())) return date;

//     return parsedDate.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   const inputClass =
//     "mt-2 h-11 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10";

//   return (
//     <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
//       <div className="flex min-h-screen w-full">
//         <Sidebar onNavigate={onNavigate} />

//         <main className="min-w-0 flex-1">
//           <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">
//             <div className="relative w-full max-w-[520px]">
//               <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8797]">
//                 <SearchIcon />
//               </div>

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search leads..."
//                 className="h-10 w-full rounded-lg border border-[#e5e1ec] bg-[#fcfbff] pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-[#aaa5b2] focus:border-[#6554e8] focus:ring-2 focus:ring-[#6554e8]/10"
//               />
//             </div>

//             <div className="ml-6 flex items-center gap-5">
//               <button className="relative text-[#777384] transition hover:text-[#5141d8]">
//                 <BellIcon />
//                 <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
//               </button>

//               <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-sm font-semibold text-white shadow-sm">
//                 P
//               </button>
//             </div>
//           </header>

//           <div className="w-full p-6 sm:p-8 lg:p-10">
//             <div>
//               <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                 Lead Management
//               </h1>

//               <p className="mt-1 text-sm text-[#94909d]">
//                 Track and manage your sales leads throughout the pipeline.
//               </p>
//             </div>

//             <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
//               {statuses.slice(1).map((status) => {
//                 const count = leads.filter(
//                   (lead) => lead.status === status
//                 ).length;

//                 return (
//                   <button
//                     key={status}
//                     onClick={() => setActiveStatus(status)}
//                     className={`rounded-xl border bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 ${
//                       activeStatus === status
//                         ? "border-indigo-400 ring-2 ring-indigo-100"
//                         : "border-[#e5e1ed]"
//                     }`}
//                   >
//                     <p className="text-xs font-medium text-[#96929f]">
//                       {status}
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {count}
//                     </p>
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Sales Leads
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredLeads.length} leads currently displayed
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap items-center gap-3">
//                   <div className="relative">
//                     <select
//                       value={activeStatus}
//                       onChange={(e) => setActiveStatus(e.target.value)}
//                       className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500"
//                     >
//                       {statuses.map((status) => (
//                         <option key={status}>{status}</option>
//                       ))}
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       <ChevronDownIcon />
//                     </div>
//                   </div>

//                   <button
//                     onClick={openAddModal}
//                     className="flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//                   >
//                     <PlusIcon />
//                     Add Lead
//                   </button>
//                 </div>
//               </div>

//               {filteredLeads.length === 0 ? (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <SearchIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No leads found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search or status filter.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
//                   {filteredLeads.map((lead) => (
//                     <div
//                       key={lead.id}
//                       className="group rounded-xl border border-[#e7e3ef] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
//                     >
//                       <div className="flex items-start justify-between gap-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                             {(lead.companyName || "?").charAt(0).toUpperCase()}
//                           </div>

//                           <div className="min-w-0">
//                             <h3 className="truncate text-sm font-bold text-[#292732]">
//                               {lead.companyName}
//                             </h3>

//                             <p className="mt-1 text-xs text-[#96929f]">
//                               {lead.contactPerson || "-"}
//                             </p>
//                           </div>
//                         </div>

//                         <span
//                           className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusStyle(
//                             lead.status
//                           )}`}
//                         >
//                           {lead.status}
//                         </span>
//                       </div>

//                       <div className="mt-5 space-y-3">
//                         <div className="flex items-center justify-between gap-3">
//                           <span className="text-xs text-[#96929f]">
//                             Industry
//                           </span>

//                           <span className="text-right text-xs font-medium text-[#4e4a57]">
//                             {lead.industry || "-"}
//                           </span>
//                         </div>

//                         <div className="flex items-center justify-between gap-3">
//                           <span className="text-xs text-[#96929f]">
//                             Location
//                           </span>

//                           <span className="flex items-center gap-1 text-right text-xs font-medium text-[#4e4a57]">
//                             <MapPinIcon />
//                             {lead.location || "-"}
//                           </span>
//                         </div>

//                         <div className="flex items-center justify-between gap-3">
//                           <span className="text-xs text-[#96929f]">
//                             Phone
//                           </span>

//                           <span className="flex items-center gap-1 text-right text-xs font-medium text-[#4e4a57]">
//                             <PhoneIcon />
//                             {lead.phone || "-"}
//                           </span>
//                         </div>

//                         <div className="flex items-center justify-between gap-3">
//                           <span className="text-xs text-[#96929f]">
//                             Product Interest
//                           </span>

//                           <span className="max-w-[180px] truncate text-right text-xs font-medium text-[#4e4a57]">
//                             {lead.productInterest || "-"}
//                           </span>
//                         </div>
//                       </div>

//                       <div className="mt-5 flex items-center justify-between border-t border-[#f0edf5] pt-4">
//                         <div>
//                           <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                             Priority
//                           </p>

//                           <span
//                             className={`mt-1 inline-block rounded-full px-2 py-1 text-[10px] font-semibold ${getPriorityStyle(
//                               lead.priority
//                             )}`}
//                           >
//                             {lead.priority}
//                           </span>
//                         </div>

//                         <div className="text-right">
//                           <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                             Assigned
//                           </p>

//                           <p className="mt-1 text-xs font-semibold text-[#4e4a57]">
//                             {lead.assignedTo || "-"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="mt-5">
//                         <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                           Next Follow-up
//                         </p>

//                         <p className="mt-1 text-xs font-semibold text-[#4e4a57]">
//                           {formatDate(lead.nextFollowUp)}
//                         </p>
//                       </div>

//                       <div className="mt-5 flex gap-2">
//                         <button
//                           onClick={() =>
//                             onNavigate(`/lead-details/${lead.id}`)
//                           }
//                           className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                         >
//                           <EyeIcon />
//                           View Details
//                         </button>

//                         <button
//                           onClick={() => openEditModal(lead)}
//                           className="h-9 rounded-lg border border-indigo-200 bg-indigo-50 px-3 text-xs font-semibold text-indigo-600 hover:bg-indigo-100"
//                         >
//                           Edit
//                         </button>

//                         <button
//                           onClick={() => deleteLead(lead.id)}
//                           className="h-9 rounded-lg border border-red-100 bg-red-50 px-3 text-xs font-semibold text-red-600 hover:bg-red-100"
//                         >
//                           Delete
//                         </button>
//                       </div>

//                       <div className="mt-2">
//                         <select
//                           value={lead.status}
//                           onChange={(e) =>
//                             updateStatus(lead.id, e.target.value)
//                           }
//                           className="h-9 w-full rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white outline-none"
//                         >
//                           {statuses.slice(1).map((status) => (
//                             <option
//                               key={status}
//                               value={status}
//                               className="text-black"
//                             >
//                               {status}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
//               <div className="flex gap-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
//                   <ArrowLeftIcon />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-indigo-900">
//                     Manage your sales pipeline
//                   </h3>

//                   <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
//                     Move leads through New, Contacted, Follow-up, Demo,
//                     Interested, Quotation, Negotiation, Order Confirmed,
//                     Converted, and Lost stages as your sales process
//                     progresses.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {showModal && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
//           onClick={() => setShowModal(false)}
//         >
//           <div
//             className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-[#292732]">
//                   {editingLead ? "Edit Lead" : "Add New Lead"}
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   {editingLead
//                     ? "Update lead information and sales details."
//                     : "Add a new business opportunity to your sales pipeline."}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="p-6">
//               <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Company Name *
//                   </label>

//                   <input
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                     placeholder="Enter company name"
//                     className={inputClass}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Contact Person
//                   </label>

//                   <input
//                     name="contactPerson"
//                     value={formData.contactPerson}
//                     onChange={handleChange}
//                     placeholder="Enter contact person"
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Designation
//                   </label>

//                   <input
//                     name="designation"
//                     value={formData.designation}
//                     onChange={handleChange}
//                     placeholder="e.g. Manager, Owner, Director"
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Phone
//                   </label>

//                   <input
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+91 98765 43210"
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Email
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="company@example.com"
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Website
//                   </label>

//                   <input
//                     type="text"
//                     name="website"
//                     value={formData.website}
//                     onChange={handleChange}
//                     placeholder="https://example.com"
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Industry
//                   </label>

//                   <select
//                     name="industry"
//                     value={formData.industry}
//                     onChange={handleChange}
//                     className={inputClass}
//                   >
//                     {industries.map((industry) => (
//                       <option key={industry}>{industry}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Location
//                   </label>

//                   <input
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     placeholder="Enter city or location"
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Lead Source
//                   </label>

//                   <select
//                     name="source"
//                     value={formData.source}
//                     onChange={handleChange}
//                     className={inputClass}
//                   >
//                     {sources.map((source) => (
//                       <option key={source}>{source}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Product Interest
//                   </label>

//                   <input
//                     name="productInterest"
//                     value={formData.productInterest}
//                     onChange={handleChange}
//                     placeholder="Enter product/service"
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Status
//                   </label>

//                   <select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                     className={inputClass}
//                   >
//                     {statuses.slice(1).map((status) => (
//                       <option key={status}>{status}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Priority
//                   </label>

//                   <select
//                     name="priority"
//                     value={formData.priority}
//                     onChange={handleChange}
//                     className={inputClass}
//                   >
//                     {priorities.map((priority) => (
//                       <option key={priority}>{priority}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Assigned To
//                   </label>

//                   <select
//                     name="assignedTo"
//                     value={formData.assignedTo}
//                     onChange={handleChange}
//                     className={inputClass}
//                   >
//                     <option>Sarah K.</option>
//                     <option>Rahul M.</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Next Follow-up
//                   </label>

//                   <input
//                     type="date"
//                     name="nextFollowUp"
//                     value={formData.nextFollowUp}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Requirement
//                   </label>

//                   <textarea
//                     name="requirement"
//                     value={formData.requirement}
//                     onChange={handleChange}
//                     placeholder="Describe the client's requirement..."
//                     className="mt-2 min-h-[100px] w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Remarks
//                   </label>

//                   <textarea
//                     name="remarks"
//                     value={formData.remarks}
//                     onChange={handleChange}
//                     placeholder="Add any additional remarks..."
//                     className="mt-2 min-h-[90px] w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-end gap-3 border-t border-[#eeeaf4] pt-5">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="h-10 rounded-lg border border-[#e3dfeb] px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
//                 >
//                   {editingLead ? "Update Lead" : "Add Lead"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function ArrowLeftIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M19 12H5" />
//       <path d="m12 19-7-7 7-7" />
//     </svg>
//   );
// }

// export default LeadManagement;


























import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import api from "../api/axios";

const statuses = [
  "All",
  "New",
  "Contacted",
  "Follow-up",
  "Demo",
  "Interested",
  "Quotation",
  "Negotiation",
  "Order Confirmed",
  "Converted",
  "Lost",
];

const industries = [
  "Real Estate Agency",
  "Dental Clinic",
  "Restaurant",
  "Hotel",
  "Gym",
  "Salon",
  "Retail Store",
  "Law Firm",
  "Medical Clinic",
  "Education",
  "Other",
];

const priorities = ["Low", "Medium", "High"];

const sources = [
  "Manual",
  "Client Search",
  "Website",
  "Referral",
  "Social Media",
  "Advertisement",
  "Other",
];

const emptyLead = {
  companyName: "",
  contactPerson: "",
  designation: "",
  phone: "",
  email: "",
  website: "",
  industry: "Real Estate Agency",
  location: "",
  source: "Manual",
  productInterest: "",
  requirement: "",
  status: "New",
  priority: "Medium",
  assignedTo: "",
  nextFollowUp: "",
  remarks: "",
};

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M6.5 3.5h3l1.5 4-2 1.5c1 2.1 2.7 3.8 4.8 4.8l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 18.3 5.7 13.5 4.2 6.7c-.3-1.7.7-3.2 2.3-3.2Z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function LeadManagement({ onNavigate }) {
  const [leads, setLeads] = useState([]);
  const [activeStatus, setActiveStatus] = useState("All");
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  const [formData, setFormData] = useState(emptyLead);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  // ============================================
  // GET ALL LEADS
  // ============================================
  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/leads");

      const data =
        response.data?.leads ||
        response.data?.data ||
        response.data ||
        [];

      setLeads(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch leads error:", err);

      setError(
        err.response?.data?.message ||
          "Failed to load leads."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // ============================================
  // SEARCH + STATUS FILTER
  // ============================================
  const filteredLeads = leads.filter((lead) => {
    const matchesStatus =
      activeStatus === "All" ||
      lead.status === activeStatus;

    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      (lead.companyName || "")
        .toLowerCase()
        .includes(searchValue) ||
      (lead.contactPerson || "")
        .toLowerCase()
        .includes(searchValue) ||
      (lead.industry || "")
        .toLowerCase()
        .includes(searchValue) ||
      (lead.location || "")
        .toLowerCase()
        .includes(searchValue) ||
      (lead.email || "")
        .toLowerCase()
        .includes(searchValue);

    return matchesStatus && matchesSearch;
  });

  // ============================================
  // OPEN ADD
  // ============================================
  const openAddModal = () => {
    setEditingLead(null);
    setFormData({
      ...emptyLead,
    });
    setShowModal(true);
  };

  // ============================================
  // OPEN EDIT
  // ============================================
  const openEditModal = (lead) => {
    setEditingLead(lead);

    setFormData({
      companyName: lead.companyName || "",
      contactPerson: lead.contactPerson || "",
      designation: lead.designation || "",
      phone: lead.phone || "",
      email: lead.email || "",
      website: lead.website || "",
      industry: lead.industry || "Real Estate Agency",
      location: lead.location || "",
      source: lead.source || "Manual",
      productInterest: lead.productInterest || "",
      requirement: lead.requirement || "",
      status: lead.status || "New",
      priority: lead.priority || "Medium",
      // assignedTo: lead.assignedTo || "",
      assignedTo: lead.assignedTo?._id || lead.assignedTo || "",
      nextFollowUp: lead.nextFollowUp
        ? String(lead.nextFollowUp).slice(0, 10)
        : "",
      remarks: lead.remarks || "",
    });

    setShowModal(true);
  };

  // ============================================
  // FORM CHANGE
  // ============================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // ============================================
  // CREATE / UPDATE LEAD
  // ============================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.companyName.trim()) {
      return;
    }

    try {
      setSaving(true);
      setError("");

      if (editingLead) {
        const response = await api.put(
          `/leads/${editingLead._id || editingLead.id}`,
          formData
        );

        const updatedLead =
          response.data?.lead ||
          response.data?.data ||
          response.data;

        setLeads((current) =>
          current.map((lead) =>
            (lead._id || lead.id) ===
            (editingLead._id || editingLead.id)
              ? updatedLead
              : lead
          )
        );
      } else {
        const response = await api.post(
          "/leads",
          formData
        );

        const newLead =
          response.data?.lead ||
          response.data?.data ||
          response.data;

        setLeads((current) => [
          newLead,
          ...current,
        ]);
      }

      setShowModal(false);
      setEditingLead(null);
      setFormData({
        ...emptyLead,
      });

      setActiveStatus("All");
    } catch (err) {
      console.error("Save lead error:", err);

      setError(
        err.response?.data?.message ||
          "Failed to save lead."
      );
    } finally {
      setSaving(false);
    }
  };

  // ============================================
  // DELETE LEAD
  // ============================================
  const deleteLead = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmed) return;

    try {
      setError("");

      await api.delete(`/leads/${id}`);

      setLeads((current) =>
        current.filter(
          (lead) =>
            (lead._id || lead.id) !== id
        )
      );
    } catch (err) {
      console.error("Delete lead error:", err);

      setError(
        err.response?.data?.message ||
          "Failed to delete lead."
      );
    }
  };

  // ============================================
  // UPDATE STATUS
  // ============================================
  const updateStatus = async (id, status) => {
    try {
      setError("");

      const response = await api.put(
        `/leads/${id}`,
        {
          status,
        }
      );

      const updatedLead =
        response.data?.lead ||
        response.data?.data ||
        response.data;

      setLeads((current) =>
        current.map((lead) =>
          (lead._id || lead.id) === id
            ? {
                ...lead,
                ...updatedLead,
                status,
              }
            : lead
        )
      );
    } catch (err) {
      console.error("Update status error:", err);

      setError(
        err.response?.data?.message ||
          "Failed to update lead status."
      );
    }
  };

  // ============================================
  // STATUS STYLE
  // ============================================
  const getStatusStyle = (status) => {
    const styles = {
      New: "bg-indigo-50 text-indigo-600",
      Contacted: "bg-blue-50 text-blue-600",
      "Follow-up":
        "bg-cyan-50 text-cyan-600",
      Demo: "bg-purple-50 text-purple-600",
      Interested:
        "bg-teal-50 text-teal-600",
      Quotation:
        "bg-orange-50 text-orange-600",
      Negotiation:
        "bg-yellow-50 text-yellow-700",
      "Order Confirmed":
        "bg-emerald-50 text-emerald-600",
      Converted:
        "bg-green-50 text-green-600",
      Lost: "bg-red-50 text-red-600",
    };

    return (
      styles[status] ||
      "bg-gray-100 text-gray-600"
    );
  };

  // ============================================
  // PRIORITY STYLE
  // ============================================
  const getPriorityStyle = (priority) => {
    if (priority === "High") {
      return "text-red-600 bg-red-50";
    }

    if (priority === "Medium") {
      return "text-orange-600 bg-orange-50";
    }

    return "text-green-600 bg-green-50";
  };

  // ============================================
  // DATE
  // ============================================
  const formatDate = (date) => {
    if (!date) return "-";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const inputClass =
    "mt-2 h-11 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10";

  return (
    <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
      <div className="flex min-h-screen w-full">
        <Sidebar onNavigate={onNavigate} />

        <main className="min-w-0 flex-1">
          {/* HEADER */}
          <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">
            <div className="relative w-full max-w-[520px]">
              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8797]">
                <SearchIcon />
              </div>

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search leads..."
                className="h-10 w-full rounded-lg border border-[#e5e1ec] bg-[#fcfbff] pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-[#aaa5b2] focus:border-[#6554e8] focus:ring-2 focus:ring-[#6554e8]/10"
              />
            </div>

            <div className="ml-6 flex items-center gap-5">
              <button className="relative text-[#777384]">
                <BellIcon />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-sm font-semibold text-white shadow-sm">
                P
              </button>
            </div>
          </header>

          <div className="w-full p-6 sm:p-8 lg:p-10">
            {/* TITLE */}
            <div>
              <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                Lead Management
              </h1>

              <p className="mt-1 text-sm text-[#94909d]">
                Track and manage your sales leads throughout the pipeline.
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* STATUS CARDS */}
            <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
              {statuses.slice(1).map(
                (status) => {
                  const count = leads.filter(
                    (lead) =>
                      lead.status === status
                  ).length;

                  return (
                    <button
                      key={status}
                      onClick={() =>
                        setActiveStatus(status)
                      }
                      className={`rounded-xl border bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 ${
                        activeStatus === status
                          ? "border-indigo-400 ring-2 ring-indigo-100"
                          : "border-[#e5e1ed]"
                      }`}
                    >
                      <p className="text-xs font-medium text-[#96929f]">
                        {status}
                      </p>

                      <p className="mt-2 text-2xl font-bold text-[#272631]">
                        {count}
                      </p>
                    </button>
                  );
                }
              )}
            </div>

            {/* TABLE / CARDS */}
            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#272631]">
                    Sales Leads
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {filteredLeads.length} leads currently displayed
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <select
                      value={activeStatus}
                      onChange={(e) =>
                        setActiveStatus(
                          e.target.value
                        )
                      }
                      className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500"
                    >
                      {statuses.map(
                        (status) => (
                          <option
                            key={status}
                          >
                            {status}
                          </option>
                        )
                      )}
                    </select>

                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <ChevronDownIcon />
                    </div>
                  </div>

                  <button
                    onClick={openAddModal}
                    className="flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                  >
                    <PlusIcon />
                    Add Lead
                  </button>
                </div>
              </div>

              {loading ? (
                <div className="px-6 py-20 text-center">
                  <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />

                  <p className="mt-4 text-sm text-gray-500">
                    Loading leads...
                  </p>
                </div>
              ) : filteredLeads.length === 0 ? (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <SearchIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    No leads found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    Try changing your search or status filter.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
                  {filteredLeads.map(
                    (lead) => {
                      const leadId =
                        lead._id || lead.id;

                      return (
                        <div
                          key={leadId}
                          className="group rounded-xl border border-[#e7e3ef] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
                                {(lead.companyName ||
                                  "?")
                                  .charAt(0)
                                  .toUpperCase()}
                              </div>

                              <div className="min-w-0">
                                <h3 className="truncate text-sm font-bold text-[#292732]">
                                  {lead.companyName ||
                                    "-"}
                                </h3>

                                <p className="mt-1 text-xs text-[#96929f]">
                                  {lead.contactPerson ||
                                    "-"}
                                </p>
                              </div>
                            </div>

                            <span
                              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusStyle(
                                lead.status
                              )}`}
                            >
                              {lead.status ||
                                "New"}
                            </span>
                          </div>

                          <div className="mt-5 space-y-3">
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-xs text-[#96929f]">
                                Industry
                              </span>

                              <span className="text-right text-xs font-medium text-[#4e4a57]">
                                {lead.industry ||
                                  "-"}
                              </span>
                            </div>

                            <div className="flex items-center justify-between gap-3">
                              <span className="text-xs text-[#96929f]">
                                Location
                              </span>

                              <span className="flex items-center gap-1 text-right text-xs font-medium text-[#4e4a57]">
                                <MapPinIcon />
                                {lead.location ||
                                  "-"}
                              </span>
                            </div>

                            <div className="flex items-center justify-between gap-3">
                              <span className="text-xs text-[#96929f]">
                                Phone
                              </span>

                              <span className="flex items-center gap-1 text-right text-xs font-medium text-[#4e4a57]">
                                <PhoneIcon />
                                {lead.phone ||
                                  "-"}
                              </span>
                            </div>

                            <div className="flex items-center justify-between gap-3">
                              <span className="text-xs text-[#96929f]">
                                Product Interest
                              </span>

                              <span className="max-w-[180px] truncate text-right text-xs font-medium text-[#4e4a57]">
                                {lead.productInterest ||
                                  "-"}
                              </span>
                            </div>
                          </div>

                          <div className="mt-5 flex items-center justify-between border-t border-[#f0edf5] pt-4">
                            <div>
                              <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                                Priority
                              </p>

                              <span
                                className={`mt-1 inline-block rounded-full px-2 py-1 text-[10px] font-semibold ${getPriorityStyle(
                                  lead.priority
                                )}`}
                              >
                                {lead.priority ||
                                  "Medium"}
                              </span>
                            </div>

                            <div className="text-right">
                              <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                                Assigned
                              </p>

                              {/* <p className="mt-1 text-xs font-semibold text-[#4e4a57]">
                                {lead.assignedTo ||
                                  "-"}
                              </p> */}

                              <p className="mt-1 text-xs font-semibold text-[#4e4a57]">
  {lead.assignedTo?.name || "-"}
</p>


                            </div>
                          </div>

                          <div className="mt-5">
                            <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                              Next Follow-up
                            </p>

                            <p className="mt-1 text-xs font-semibold text-[#4e4a57]">
                              {formatDate(
                                lead.nextFollowUp
                              )}
                            </p>
                          </div>

                          <div className="mt-5 flex gap-2">
                            <button
                              onClick={() =>
                                onNavigate(
                                  `/lead-details/${leadId}`
                                )
                              }
                              className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                              <EyeIcon />
                              View Details
                            </button>

                            <button
                              onClick={() =>
                                openEditModal(
                                  lead
                                )
                              }
                              className="h-9 rounded-lg border border-indigo-200 bg-indigo-50 px-3 text-xs font-semibold text-indigo-600 hover:bg-indigo-100"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() =>
                                deleteLead(
                                  leadId
                                )
                              }
                              className="h-9 rounded-lg border border-red-100 bg-red-50 px-3 text-xs font-semibold text-red-600 hover:bg-red-100"
                            >
                              Delete
                            </button>
                          </div>

                          <div className="mt-2">
                            <select
                              value={
                                lead.status ||
                                "New"
                              }
                              onChange={(e) =>
                                updateStatus(
                                  leadId,
                                  e.target
                                    .value
                                )
                              }
                              className="h-9 w-full rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white outline-none"
                            >
                              {statuses
                                .slice(1)
                                .map(
                                  (
                                    status
                                  ) => (
                                    <option
                                      key={
                                        status
                                      }
                                      value={
                                        status
                                      }
                                      className="text-black"
                                    >
                                      {status}
                                    </option>
                                  )
                                )}
                            </select>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
            </div>

            {/* PIPELINE INFO */}
            <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <ArrowLeftIcon />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-indigo-900">
                    Manage your sales pipeline
                  </h3>

                  <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
                    Move leads through New, Contacted,
                    Follow-up, Demo, Interested,
                    Quotation, Negotiation,
                    Order Confirmed, Converted,
                    and Lost stages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ============================================
          ADD / EDIT MODAL
      ============================================ */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={() =>
            !saving && setShowModal(false)
          }
        >
          <div
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
              <div>
                <h2 className="text-lg font-bold text-[#292732]">
                  {editingLead
                    ? "Edit Lead"
                    : "Add New Lead"}
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  {editingLead
                    ? "Update lead information and sales details."
                    : "Add a new business opportunity to your sales pipeline."}
                </p>
              </div>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                disabled={saving}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              >
                <XIcon />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {[
                  [
                    "companyName",
                    "Company Name *",
                    "Enter company name",
                  ],
                  [
                    "contactPerson",
                    "Contact Person",
                    "Enter contact person",
                  ],
                  [
                    "designation",
                    "Designation",
                    "e.g. Manager, Owner, Director",
                  ],
                  [
                    "phone",
                    "Phone",
                    "+91 98765 43210",
                  ],
                  [
                    "email",
                    "Email",
                    "company@example.com",
                  ],
                  [
                    "website",
                    "Website",
                    "https://example.com",
                  ],
                  [
                    "location",
                    "Location",
                    "Enter city or location",
                  ],
                  [
                    "productInterest",
                    "Product Interest",
                    "Enter product/service",
                  ],
                ].map(
                  ([
                    name,
                    label,
                    placeholder,
                  ]) => (
                    <div key={name}>
                      <label className="text-xs font-semibold text-[#5f5b68]">
                        {label}
                      </label>

                      <input
                        type={
                          name ===
                          "email"
                            ? "email"
                            : "text"
                        }
                        name={name}
                        value={
                          formData[name]
                        }
                        onChange={
                          handleChange
                        }
                        placeholder={
                          placeholder
                        }
                        className={
                          inputClass
                        }
                        required={
                          name ===
                          "companyName"
                        }
                      />
                    </div>
                  )
                )}

                {/* INDUSTRY */}
                <div>
                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Industry
                  </label>

                  <select
                    name="industry"
                    value={
                      formData.industry
                    }
                    onChange={
                      handleChange
                    }
                    className={
                      inputClass
                    }
                  >
                    {industries.map(
                      (industry) => (
                        <option
                          key={industry}
                        >
                          {industry}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {/* SOURCE */}
                <div>
                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Lead Source
                  </label>

                  <select
                    name="source"
                    value={
                      formData.source
                    }
                    onChange={
                      handleChange
                    }
                    className={
                      inputClass
                    }
                  >
                    {sources.map(
                      (source) => (
                        <option
                          key={source}
                        >
                          {source}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {/* STATUS */}
                <div>
                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Status
                  </label>

                  <select
                    name="status"
                    value={
                      formData.status
                    }
                    onChange={
                      handleChange
                    }
                    className={
                      inputClass
                    }
                  >
                    {statuses
                      .slice(1)
                      .map(
                        (status) => (
                          <option
                            key={
                              status
                            }
                          >
                            {status}
                          </option>
                        )
                      )}
                  </select>
                </div>

                {/* PRIORITY */}
                <div>
                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Priority
                  </label>

                  <select
                    name="priority"
                    value={
                      formData.priority
                    }
                    onChange={
                      handleChange
                    }
                    className={
                      inputClass
                    }
                  >
                    {priorities.map(
                      (priority) => (
                        <option
                          key={
                            priority
                          }
                        >
                          {priority}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {/* ASSIGNED */}
                <div>
                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Assigned To
                  </label>

                  <input
                    name="assignedTo"
                    value={
                      formData.assignedTo
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter assigned user"
                    className={
                      inputClass
                    }
                  />
                </div>

                {/* FOLLOW UP */}
                <div>
                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Next Follow-up
                  </label>

                  <input
                    type="date"
                    name="nextFollowUp"
                    value={
                      formData.nextFollowUp
                    }
                    onChange={
                      handleChange
                    }
                    className={
                      inputClass
                    }
                  />
                </div>

                {/* REQUIREMENT */}
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Requirement
                  </label>

                  <textarea
                    name="requirement"
                    value={
                      formData.requirement
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Describe the client's requirement..."
                    className="mt-2 min-h-[100px] w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>

                {/* REMARKS */}
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Remarks
                  </label>

                  <textarea
                    name="remarks"
                    value={
                      formData.remarks
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Add any additional remarks..."
                    className="mt-2 min-h-[90px] w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3 border-t border-[#eeeaf4] pt-5">
                <button
                  type="button"
                  onClick={() =>
                    setShowModal(false)
                  }
                  disabled={saving}
                  className="h-10 rounded-lg border border-[#e3dfeb] px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingLead
                    ? "Update Lead"
                    : "Add Lead"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

export default LeadManagement;
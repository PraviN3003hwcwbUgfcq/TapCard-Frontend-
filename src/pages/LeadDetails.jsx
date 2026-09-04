





// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const leads = [
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

// function MailIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <rect x="3" y="5" width="18" height="14" rx="2" />
//       <path d="m3 7 9 6 9-6" />
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

// function CalendarIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <rect x="3" y="4" width="18" height="17" rx="2" />
//       <path d="M16 2v4M8 2v4M3 10h18" />
//     </svg>
//   );
// }

// function UserIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <circle cx="12" cy="8" r="3" />
//       <path d="M5 21c.7-4.1 3-6 7-6s6.3 1.9 7 6" />
//     </svg>
//   );
// }

// function GlobeIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <circle cx="12" cy="12" r="9" />
//       <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21M12 3c-2.5 2.5-3.5 5.5-3.5 9S9.5 18.5 12 21" />
//     </svg>
//   );
// }

// function LeadDetails({ onNavigate, leadId = 1 }) {
//   const [lead, setLead] = useState(
//     leads.find((item) => item.id === Number(leadId)) || leads[0]
//   );

//   const [note, setNote] = useState("");

//   const [activities, setActivities] = useState([
//     {
//       id: 1,
//       title: "Lead created",
//       description: "Business was converted from potential client.",
//       date: "Today, 10:30 AM",
//     },
//     {
//       id: 2,
//       title: "Initial qualification",
//       description: "Lead details reviewed by sales team.",
//       date: "Today, 11:15 AM",
//     },
//   ]);

//   const updateStatus = (status) => {
//     setLead((current) => ({
//       ...current,
//       status,
//     }));

//     setActivities((current) => [
//       {
//         id: Date.now(),
//         title: `Status changed to ${status}`,
//         description: "Lead status was updated by the sales team.",
//         date: "Just now",
//       },
//       ...current,
//     ]);
//   };

//   const addNote = () => {
//     if (!note.trim()) return;

//     setActivities((current) => [
//       {
//         id: Date.now(),
//         title: "Internal note added",
//         description: note,
//         date: "Just now",
//       },
//       ...current,
//     ]);

//     setNote("");
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

//   const statusStyles = {
//     New: "bg-indigo-50 text-indigo-600",
//     Contacted: "bg-blue-50 text-blue-600",
//     "Follow-up": "bg-cyan-50 text-cyan-600",
//     Demo: "bg-purple-50 text-purple-600",
//     Interested: "bg-teal-50 text-teal-600",
//     Quotation: "bg-orange-50 text-orange-600",
//     Negotiation: "bg-yellow-50 text-yellow-700",
//     "Order Confirmed": "bg-emerald-50 text-emerald-600",
//     Converted: "bg-green-50 text-green-600",
//     Lost: "bg-red-50 text-red-600",
//   };

//   const priorityStyles = {
//     High: "bg-red-50 text-red-600",
//     Medium: "bg-orange-50 text-orange-600",
//     Low: "bg-green-50 text-green-600",
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
//       <div className="flex min-h-screen w-full">
//         <Sidebar onNavigate={onNavigate} />

//         <main className="min-w-0 flex-1">
//           <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">
//             <button
//               onClick={() => onNavigate("/leads")}
//               className="flex items-center gap-2 text-sm font-semibold text-[#66626f] hover:text-indigo-600"
//             >
//               <ArrowLeftIcon />
//               Back to Leads
//             </button>

//             <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-sm font-semibold text-white shadow-sm">
//               P
//             </button>
//           </header>

//           <div className="w-full p-6 sm:p-8 lg:p-10">
//             <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">
//                   {(lead.companyName || "?").charAt(0).toUpperCase()}
//                 </div>

//                 <div>
//                   <div className="flex flex-wrap items-center gap-3">
//                     <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                       {lead.companyName}
//                     </h1>

//                     <span
//                       className={`rounded-full px-3 py-1 text-xs font-semibold ${
//                         statusStyles[lead.status]
//                       }`}
//                     >
//                       {lead.status}
//                     </span>
//                   </div>

//                   <p className="mt-1 text-sm text-[#94909d]">
//                     {lead.industry || "-"} · {lead.location || "-"}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 <select
//                   value={lead.status}
//                   onChange={(e) => updateStatus(e.target.value)}
//                   className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-4 text-sm font-semibold text-[#45424e] outline-none focus:border-indigo-500"
//                 >
//                   {statuses.map((status) => (
//                     <option key={status}>{status}</option>
//                   ))}
//                 </select>

//                 <button
//                   onClick={() => onNavigate("/leads")}
//                   className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white hover:bg-indigo-700"
//                 >
//                   <ArrowLeftIcon />
//                   Back
//                 </button>
//               </div>
//             </div>

//             <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-3">
//               <div className="space-y-6 xl:col-span-2">
//                 <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Lead Information
//                   </h2>

//                   <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
//                     <div>
//                       <p className="text-xs text-[#96929f]">Company Name</p>
//                       <p className="mt-1 text-sm font-semibold">
//                         {lead.companyName}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">
//                         Contact Person
//                       </p>
//                       <p className="mt-1 text-sm font-semibold">
//                         {lead.contactPerson || "-"}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">Designation</p>
//                       <p className="mt-1 text-sm font-semibold">
//                         {lead.designation || "-"}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">Industry</p>
//                       <p className="mt-1 text-sm font-semibold">
//                         {lead.industry || "-"}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">Phone</p>
//                       <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
//                         <PhoneIcon />
//                         {lead.phone || "-"}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">Email</p>
//                       <p className="mt-1 flex items-center gap-2 break-all text-sm font-semibold">
//                         <MailIcon />
//                         {lead.email || "-"}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">Website</p>
//                       <p className="mt-1 flex items-center gap-2 break-all text-sm font-semibold text-indigo-600">
//                         <GlobeIcon />
//                         {lead.website || "-"}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">Location</p>
//                       <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
//                         <MapPinIcon />
//                         {lead.location || "-"}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">Lead Source</p>
//                       <p className="mt-1 text-sm font-semibold">
//                         {lead.source || "-"}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">
//                         Product Interest
//                       </p>
//                       <p className="mt-1 text-sm font-semibold">
//                         {lead.productInterest || "-"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Requirement
//                   </h2>

//                   <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-[#66626f]">
//                     {lead.requirement || "No requirement added."}
//                   </p>
//                 </div>

//                 <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Remarks
//                   </h2>

//                   <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-[#66626f]">
//                     {lead.remarks || "No remarks added."}
//                   </p>
//                 </div>

//                 <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">
//                   <div>
//                     <h2 className="text-base font-semibold text-[#272631]">
//                       Activity Timeline
//                     </h2>

//                     <p className="mt-1 text-xs text-[#96929f]">
//                       Recent interactions and updates.
//                     </p>
//                   </div>

//                   <div className="mt-6 space-y-6">
//                     {activities.map((activity) => (
//                       <div key={activity.id} className="flex gap-4">
//                         <div className="relative">
//                           <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                             <CalendarIcon />
//                           </div>
//                         </div>

//                         <div className="flex-1 border-b border-[#f0edf5] pb-5">
//                           <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
//                             <h3 className="text-sm font-semibold">
//                               {activity.title}
//                             </h3>

//                             <span className="text-[10px] text-[#9995a1]">
//                               {activity.date}
//                             </span>
//                           </div>

//                           <p className="mt-1 text-xs leading-5 text-[#77737f]">
//                             {activity.description}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Add Internal Note
//                   </h2>

//                   <textarea
//                     value={note}
//                     onChange={(e) => setNote(e.target.value)}
//                     placeholder="Write an internal note about this lead..."
//                     className="mt-4 min-h-[110px] w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-4 text-sm outline-none placeholder:text-[#aaa5b2] focus:border-indigo-500"
//                   />

//                   <div className="mt-3 flex justify-end">
//                     <button
//                       onClick={addNote}
//                       className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
//                     >
//                       Add Note
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Sales Context
//                   </h2>

//                   <div className="mt-5 space-y-5">
//                     <div>
//                       <p className="text-xs text-[#96929f]">Priority</p>

//                       <span
//                         className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
//                           priorityStyles[lead.priority]
//                         }`}
//                       >
//                         {lead.priority}
//                       </span>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">
//                         Assigned To
//                       </p>

//                       <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
//                         <UserIcon />
//                         {lead.assignedTo || "-"}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">
//                         Current Stage
//                       </p>

//                       <span
//                         className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
//                           statusStyles[lead.status]
//                         }`}
//                       >
//                         {lead.status}
//                       </span>
//                     </div>

//                     <div>
//                       <p className="text-xs text-[#96929f]">
//                         Next Follow-up
//                       </p>

//                       <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
//                         <CalendarIcon />
//                         {formatDate(lead.nextFollowUp)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-6">
//                   <h2 className="text-sm font-semibold text-indigo-900">
//                     Next Follow-up
//                   </h2>

//                   <p className="mt-2 text-2xl font-bold text-indigo-700">
//                     {formatDate(lead.nextFollowUp)}
//                   </p>

//                   <p className="mt-1 text-xs text-indigo-700/70">
//                     Contact {lead.contactPerson || "the lead"} and continue
//                     the sales discussion.
//                   </p>

//                   <button className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 text-xs font-semibold text-white hover:bg-indigo-700">
//                     <PhoneIcon />
//                     Contact Lead
//                   </button>
//                 </div>

//                 <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Quick Actions
//                   </h2>

//                   <div className="mt-4 space-y-2">
//                     <button className="w-full rounded-lg border border-[#e3dfeb] px-4 py-3 text-left text-xs font-semibold text-[#66626f] hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
//                       Schedule Follow-up
//                     </button>

//                     <button className="w-full rounded-lg border border-[#e3dfeb] px-4 py-3 text-left text-xs font-semibold text-[#66626f] hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
//                       Send Email
//                     </button>

//                     <button
//                       onClick={() => updateStatus("Order Confirmed")}
//                       className="w-full rounded-lg bg-green-600 px-4 py-3 text-left text-xs font-semibold text-white hover:bg-green-700"
//                     >
//                       Mark Order Confirmed
//                     </button>

//                     <button
//                       onClick={() => updateStatus("Converted")}
//                       className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-left text-xs font-semibold text-white hover:bg-indigo-700"
//                     >
//                       Mark as Converted
//                     </button>

//                     <button
//                       onClick={() => updateStatus("Lost")}
//                       className="w-full rounded-lg bg-red-50 px-4 py-3 text-left text-xs font-semibold text-red-600 hover:bg-red-100"
//                     >
//                       Mark as Lost
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default LeadDetails;



































import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import api from "../api/axios";

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

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
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

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M5 21c.7-4.1 3-6 7-6s6.3 1.9 7 6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21M12 3c-2.5 2.5-3.5 5.5-3.5 9S9.5 18.5 12 21" />
    </svg>
  );
}

const statuses = [
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

function LeadDetails({ onNavigate, leadId }) {
  const actualLeadId =
    leadId ||
    window.location.pathname.split("/").filter(Boolean).pop();

  const [lead, setLead] = useState(null);
  // const [lead, setLead] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  const [note, setNote] = useState("");

  const [activities, setActivities] = useState([]);

  // ==========================================
  // GET SINGLE LEAD
  // ==========================================

  const fetchLead = async () => {
    try {
      setLoading(true);
      setError("");

      // GET /api/leads/:id
      // const response = await api.get(`/leads/${leadId}`);
      const response = await api.get(`/leads/${actualLeadId}`);

      const data =
        response.data?.lead ||
        response.data?.data ||
        response.data;

      setLead(data);

      // If backend returns activities
      if (Array.isArray(response.data?.activities)) {
        setActivities(response.data.activities);
      } else if (Array.isArray(data?.activities)) {
        setActivities(data.activities);
      }
    } catch (err) {
      console.error("Fetch lead details error:", err);

      setError(
        err.response?.data?.message ||
          "Failed to load lead details."
      );
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (leadId) {
  //     fetchLead();
  //   }
  // }, [leadId]);


useEffect(() => {
  if (actualLeadId) {
    fetchLead();
  }
}, [actualLeadId]);

  // ==========================================
  // UPDATE STATUS
  // ==========================================

  const updateStatus = async (status) => {
    if (!lead) return;

    try {
      setSaving(true);
      setError("");

      // PUT /api/leads/:id
      const response = await api.put(
        `/leads/${lead._id || lead.id}`,
        {
          status,
        }
      );

      const updatedLead =
        response.data?.lead ||
        response.data?.data ||
        response.data;

      setLead((current) => ({
        ...current,
        ...updatedLead,
        status,
      }));

      setActivities((current) => [
        {
          id: Date.now(),
          title: `Status changed to ${status}`,
          description:
            "Lead status was updated by the sales team.",
          date: "Just now",
        },
        ...current,
      ]);
    } catch (err) {
      console.error("Update status error:", err);

      setError(
        err.response?.data?.message ||
          "Failed to update lead status."
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // ADD INTERNAL NOTE
  // ==========================================

  const addNote = () => {
    if (!note.trim()) return;

    setActivities((current) => [
      {
        id: Date.now(),
        title: "Internal note added",
        description: note,
        date: "Just now",
      },
      ...current,
    ]);

    setNote("");
  };

  // ==========================================
  // DATE
  // ==========================================

  const formatDate = (date) => {
    if (!date) return "-";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // ==========================================
  // STYLES
  // ==========================================

  const statusStyles = {
    New: "bg-indigo-50 text-indigo-600",
    Contacted: "bg-blue-50 text-blue-600",
    "Follow-up": "bg-cyan-50 text-cyan-600",
    Demo: "bg-purple-50 text-purple-600",
    Interested: "bg-teal-50 text-teal-600",
    Quotation: "bg-orange-50 text-orange-600",
    Negotiation: "bg-yellow-50 text-yellow-700",
    "Order Confirmed": "bg-emerald-50 text-emerald-600",
    Converted: "bg-green-50 text-green-600",
    Lost: "bg-red-50 text-red-600",
  };

  const priorityStyles = {
    High: "bg-red-50 text-red-600",
    Medium: "bg-orange-50 text-orange-600",
    Low: "bg-green-50 text-green-600",
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#faf8ff]">

        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />

          <p className="mt-4 text-sm text-gray-500">
            Loading lead...
          </p>

        </div>

      </div>
    );
  }

  // ==========================================
  // ERROR
  // ==========================================

  if (!lead) {
    return (
      <div className="min-h-screen bg-[#faf8ff]">

        <div className="p-10">

          <div className="rounded-xl border border-red-200 bg-red-50 p-6">

            <h2 className="font-semibold text-red-700">
              Unable to load lead
            </h2>

            <p className="mt-2 text-sm text-red-600">
              {error || "Lead not found."}
            </p>

            <button
              onClick={() => onNavigate("/leads")}
              className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Back to Leads
            </button>

          </div>

        </div>

      </div>
    );
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">

      <div className="flex min-h-screen w-full">

        <Sidebar onNavigate={onNavigate} />

        <main className="min-w-0 flex-1">

          {/* HEADER */}

          <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">

            <button
              onClick={() => onNavigate("/leads")}
              className="flex items-center gap-2 text-sm font-semibold text-[#66626f] hover:text-indigo-600"
            >
              <ArrowLeftIcon />
              Back to Leads
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-sm font-semibold text-white shadow-sm">
              P
            </button>

          </header>

          <div className="w-full p-6 sm:p-8 lg:p-10">

            {/* ERROR */}

            {error && (
              <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* TOP */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">
                  {(lead.companyName || "?")
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                      {lead.companyName || "-"}
                    </h1>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[lead.status] ||
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {lead.status || "-"}
                    </span>

                  </div>

                  <p className="mt-1 text-sm text-[#94909d]">
                    {lead.industry || "-"} ·{" "}
                    {lead.location || "-"}
                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-3">

                <select
                  value={lead.status || "New"}
                  disabled={saving}
                  onChange={(e) =>
                    updateStatus(e.target.value)
                  }
                  className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-4 text-sm font-semibold text-[#45424e] outline-none focus:border-indigo-500"
                >

                  {statuses.map((status) => (
                    <option key={status}>
                      {status}
                    </option>
                  ))}

                </select>

                <button
                  onClick={() => onNavigate("/leads")}
                  className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <ArrowLeftIcon />
                  Back
                </button>

              </div>

            </div>

            {/* GRID */}

            <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-3">

              <div className="space-y-6 xl:col-span-2">

                {/* LEAD INFORMATION */}

                <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">

                  <h2 className="text-base font-semibold text-[#272631]">
                    Lead Information
                  </h2>

                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                    {[
                      ["Company Name", lead.companyName],
                      ["Contact Person", lead.contactPerson],
                      ["Designation", lead.designation],
                      ["Industry", lead.industry],
                    ].map(([label, value]) => (

                      <div key={label}>

                        <p className="text-xs text-[#96929f]">
                          {label}
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                          {value || "-"}
                        </p>

                      </div>

                    ))}

                    <div>

                      <p className="text-xs text-[#96929f]">
                        Phone
                      </p>

                      <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                        <PhoneIcon />
                        {lead.phone || "-"}
                      </p>

                    </div>

                    <div>

                      <p className="text-xs text-[#96929f]">
                        Email
                      </p>

                      <p className="mt-1 flex items-center gap-2 break-all text-sm font-semibold">
                        <MailIcon />
                        {lead.email || "-"}
                      </p>

                    </div>

                    <div>

                      <p className="text-xs text-[#96929f]">
                        Website
                      </p>

                      <p className="mt-1 flex items-center gap-2 break-all text-sm font-semibold text-indigo-600">
                        <GlobeIcon />
                        {lead.website || "-"}
                      </p>

                    </div>

                    <div>

                      <p className="text-xs text-[#96929f]">
                        Location
                      </p>

                      <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                        <MapPinIcon />
                        {lead.location || "-"}
                      </p>

                    </div>

                    <div>

                      <p className="text-xs text-[#96929f]">
                        Lead Source
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        {lead.source || "-"}
                      </p>

                    </div>

                    <div>

                      <p className="text-xs text-[#96929f]">
                        Product Interest
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        {lead.productInterest || "-"}
                      </p>

                    </div>

                  </div>

                </div>

                {/* REQUIREMENT */}

                <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">

                  <h2 className="text-base font-semibold text-[#272631]">
                    Requirement
                  </h2>

                  <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-[#66626f]">
                    {lead.requirement ||
                      "No requirement added."}
                  </p>

                </div>

                {/* REMARKS */}

                <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">

                  <h2 className="text-base font-semibold text-[#272631]">
                    Remarks
                  </h2>

                  <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-[#66626f]">
                    {lead.remarks ||
                      "No remarks added."}
                  </p>

                </div>

                {/* ACTIVITY */}

                <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">

                  <div>

                    <h2 className="text-base font-semibold text-[#272631]">
                      Activity Timeline
                    </h2>

                    <p className="mt-1 text-xs text-[#96929f]">
                      Recent interactions and updates.
                    </p>

                  </div>

                  {activities.length === 0 ? (

                    <div className="mt-6 rounded-lg bg-[#faf8ff] p-6 text-center">

                      <p className="text-sm text-[#96929f]">
                        No activities yet.
                      </p>

                    </div>

                  ) : (

                    <div className="mt-6 space-y-6">

                      {activities.map((activity) => (

                        <div
                          key={activity.id || activity._id}
                          className="flex gap-4"
                        >

                          <div>

                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                              <CalendarIcon />
                            </div>

                          </div>

                          <div className="flex-1 border-b border-[#f0edf5] pb-5">

                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

                              <h3 className="text-sm font-semibold">
                                {activity.title}
                              </h3>

                              <span className="text-[10px] text-[#9995a1]">
                                {activity.date}
                              </span>

                            </div>

                            <p className="mt-1 text-xs leading-5 text-[#77737f]">
                              {activity.description}
                            </p>

                          </div>

                        </div>

                      ))}

                    </div>

                  )}

                </div>

                {/* INTERNAL NOTE */}

                <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">

                  <h2 className="text-base font-semibold text-[#272631]">
                    Add Internal Note
                  </h2>

                  <textarea
                    value={note}
                    onChange={(e) =>
                      setNote(e.target.value)
                    }
                    placeholder="Write an internal note about this lead..."
                    className="mt-4 min-h-[110px] w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-4 text-sm outline-none placeholder:text-[#aaa5b2] focus:border-indigo-500"
                  />

                  <div className="mt-3 flex justify-end">

                    <button
                      onClick={addNote}
                      className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
                    >
                      Add Note
                    </button>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}

              <div className="space-y-6">

                {/* SALES CONTEXT */}

                <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">

                  <h2 className="text-base font-semibold text-[#272631]">
                    Sales Context
                  </h2>

                  <div className="mt-5 space-y-5">

                    <div>

                      <p className="text-xs text-[#96929f]">
                        Priority
                      </p>

                      <span
                        className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                          priorityStyles[lead.priority] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {lead.priority || "-"}
                      </span>

                    </div>

                    <div>

                      <p className="text-xs text-[#96929f]">
                        Assigned To
                      </p>

                      <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                        <UserIcon />
                        {lead.assignedTo?.name || "-"}
                      </p>

                    </div>

                    <div>

                      <p className="text-xs text-[#96929f]">
                        Current Stage
                      </p>

                      <span
                        className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                          statusStyles[lead.status] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {lead.status || "-"}
                      </span>

                    </div>

                    <div>

                      <p className="text-xs text-[#96929f]">
                        Next Follow-up
                      </p>

                      <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                        <CalendarIcon />
                        {formatDate(
                          lead.nextFollowUp
                        )}
                      </p>

                    </div>

                  </div>

                </div>

                {/* NEXT FOLLOW UP */}

                <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-6">

                  <h2 className="text-sm font-semibold text-indigo-900">
                    Next Follow-up
                  </h2>

                  <p className="mt-2 text-2xl font-bold text-indigo-700">
                    {formatDate(
                      lead.nextFollowUp
                    )}
                  </p>

                  <p className="mt-1 text-xs text-indigo-700/70">
                    Contact{" "}
                    {lead.contactPerson ||
                      "the lead"}{" "}
                    and continue the sales discussion.
                  </p>

                  <a
                    href={
                      lead.phone
                        ? `tel:${lead.phone}`
                        : undefined
                    }
                    className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 text-xs font-semibold text-white hover:bg-indigo-700"
                  >
                    <PhoneIcon />
                    Contact Lead
                  </a>

                </div>

                {/* QUICK ACTIONS */}

                <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">

                  <h2 className="text-base font-semibold text-[#272631]">
                    Quick Actions
                  </h2>

                  <div className="mt-4 space-y-2">

                    <button
                      onClick={() =>
                        updateStatus("Follow-up")
                      }
                      className="w-full rounded-lg border border-[#e3dfeb] px-4 py-3 text-left text-xs font-semibold text-[#66626f] hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      Schedule Follow-up
                    </button>

                    <a
                      href={
                        lead.email
                          ? `mailto:${lead.email}`
                          : undefined
                      }
                      className="block w-full rounded-lg border border-[#e3dfeb] px-4 py-3 text-left text-xs font-semibold text-[#66626f] hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      Send Email
                    </a>

                    <button
                      onClick={() =>
                        updateStatus(
                          "Order Confirmed"
                        )
                      }
                      className="w-full rounded-lg bg-green-600 px-4 py-3 text-left text-xs font-semibold text-white hover:bg-green-700"
                    >
                      Mark Order Confirmed
                    </button>

                    <button
                      onClick={() =>
                        updateStatus("Converted")
                      }
                      className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-left text-xs font-semibold text-white hover:bg-indigo-700"
                    >
                      Mark as Converted
                    </button>

                    <button
                      onClick={() =>
                        updateStatus("Lost")
                      }
                      className="w-full rounded-lg bg-red-50 px-4 py-3 text-left text-xs font-semibold text-red-600 hover:bg-red-100"
                    >
                      Mark as Lost
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default LeadDetails;
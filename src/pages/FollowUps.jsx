// import { useMemo, useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const initialLeads = [
//   {
//     id: 1,
//     companyName: "Metro Realty",
//     contactPerson: "Rahul Mehta",
//   },
//   {
//     id: 2,
//     companyName: "Sharma Dental Care",
//     contactPerson: "Dr. A. Sharma",
//   },
//   {
//     id: 3,
//     companyName: "The Urban Table",
//     contactPerson: "Amit Kapoor",
//   },
//   {
//     id: 4,
//     companyName: "Prime Properties",
//     contactPerson: "Neha Shah",
//   },
//   {
//     id: 5,
//     companyName: "Wellness Dental Studio",
//     contactPerson: "Dr. Priya Singh",
//   },
//   {
//     id: 6,
//     companyName: "Green Leaf Restaurant",
//     contactPerson: "Vikas Patil",
//   },
// ];

// const initialFollowUps = [
//   {
//     id: 1,
//     lead: 1,
//     type: "Call",
//     scheduledDate: "2026-08-31T11:00",
//     purpose: "Discuss CRM requirements",
//     notes: "Client wants to understand pricing and features.",
//     status: "Pending",
//     completedAt: null,
//   },
//   {
//     id: 2,
//     lead: 2,
//     type: "Meeting",
//     scheduledDate: "2026-08-31T15:00",
//     purpose: "Product discussion",
//     notes: "Demo and product discussion with the client.",
//     status: "Pending",
//     completedAt: null,
//   },
//   {
//     id: 3,
//     lead: 3,
//     type: "WhatsApp",
//     scheduledDate: "2026-09-01T10:30",
//     purpose: "Send quotation",
//     notes: "Send updated quotation over WhatsApp.",
//     status: "Pending",
//     completedAt: null,
//   },
//   {
//     id: 4,
//     lead: 4,
//     type: "Email",
//     scheduledDate: "2026-09-02T12:00",
//     purpose: "Follow up on quotation",
//     notes: "Check whether the client has reviewed the quotation.",
//     status: "Pending",
//     completedAt: null,
//   },
//   {
//     id: 5,
//     lead: 5,
//     type: "Call",
//     scheduledDate: "2026-08-29T14:00",
//     purpose: "Pricing discussion",
//     notes: "Pricing discussion completed successfully.",
//     status: "Completed",
//     completedAt: "2026-08-29T14:30",
//   },
// ];

// const types = ["Call", "Email", "WhatsApp", "Meeting", "Other"];

// const statuses = ["All", "Pending", "Completed", "Cancelled"];

// const emptyFollowUp = {
//   lead: "",
//   type: "Call",
//   scheduledDate: "",
//   purpose: "",
//   notes: "",
//   status: "Pending",
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

// function CalendarIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M8 2v4M16 2v4" />
//       <rect x="3" y="4" width="18" height="17" rx="2" />
//       <path d="M3 10h18" />
//     </svg>
//   );
// }

// function ClockIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <circle cx="12" cy="12" r="8.5" />
//       <path d="M12 7v5l3 2" />
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
//       <path d="m4 7 8 6 8-6" />
//     </svg>
//   );
// }

// function MessageIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-4-.9L4 20l1.5-3.5A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />
//     </svg>
//   );
// }

// function UsersIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <circle cx="9" cy="8" r="3" />
//       <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
//       <path d="M16 5.5a3 3 0 0 1 0 5.8M18 14c1.8.8 3 2.5 3 5" />
//     </svg>
//   );
// }

// function MoreIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       className="h-5 w-5"
//     >
//       <circle cx="5" cy="12" r="1" fill="currentColor" />
//       <circle cx="12" cy="12" r="1" fill="currentColor" />
//       <circle cx="19" cy="12" r="1" fill="currentColor" />
//     </svg>
//   );
// }

// function CheckIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       className="h-4 w-4"
//     >
//       <path d="m5 12 4 4L19 6" />
//     </svg>
//   );
// }

// function getTodayString() {
//   const today = new Date();

//   const year = today.getFullYear();
//   const month = String(today.getMonth() + 1).padStart(2, "0");
//   const day = String(today.getDate()).padStart(2, "0");

//   return `${year}-${month}-${day}`;
// }

// function FollowUpTypeIcon({ type }) {
//   if (type === "Call") return <PhoneIcon />;
//   if (type === "Email") return <MailIcon />;
//   if (type === "WhatsApp") return <MessageIcon />;
//   if (type === "Meeting") return <UsersIcon />;
//   return <MoreIcon />;
// }

// function FollowUps({ onNavigate }) {
//   const [followUps, setFollowUps] = useState(initialFollowUps);
//   const [leads] = useState(initialLeads);

//   const [activeStatus, setActiveStatus] = useState("All");
//   const [search, setSearch] = useState("");

//   const [showModal, setShowModal] = useState(false);
//   const [editingFollowUp, setEditingFollowUp] = useState(null);

//   const [formData, setFormData] = useState(emptyFollowUp);

//   const getLead = (leadId) => {
//     return leads.find((lead) => String(lead.id) === String(leadId));
//   };

//   const getLeadName = (leadId) => {
//     const lead = getLead(leadId);

//     if (!lead) return "Unknown Lead";

//     return lead.companyName || "Unknown Lead";
//   };

//   const getContactPerson = (leadId) => {
//     const lead = getLead(leadId);

//     if (!lead) return "-";

//     return lead.contactPerson || "-";
//   };

//   const isToday = (date) => {
//     if (!date) return false;

//     const followUpDate = new Date(date);

//     if (Number.isNaN(followUpDate.getTime())) return false;

//     const today = new Date();

//     return (
//       followUpDate.getFullYear() === today.getFullYear() &&
//       followUpDate.getMonth() === today.getMonth() &&
//       followUpDate.getDate() === today.getDate()
//     );
//   };

//   const todayFollowUps = useMemo(() => {
//     return followUps.filter(
//       (followUp) =>
//         isToday(followUp.scheduledDate) && followUp.status === "Pending"
//     );
//   }, [followUps]);

//   const pendingCount = followUps.filter(
//     (followUp) => followUp.status === "Pending"
//   ).length;

//   const completedCount = followUps.filter(
//     (followUp) => followUp.status === "Completed"
//   ).length;

//   const cancelledCount = followUps.filter(
//     (followUp) => followUp.status === "Cancelled"
//   ).length;

//   const filteredFollowUps = followUps.filter((followUp) => {
//     const lead = getLead(followUp.lead);

//     const searchValue = search.toLowerCase().trim();

//     const matchesStatus =
//       activeStatus === "All" || followUp.status === activeStatus;

//     const matchesSearch =
//       !searchValue ||
//       (lead?.companyName || "").toLowerCase().includes(searchValue) ||
//       (lead?.contactPerson || "").toLowerCase().includes(searchValue) ||
//       (followUp.type || "").toLowerCase().includes(searchValue) ||
//       (followUp.purpose || "").toLowerCase().includes(searchValue) ||
//       (followUp.notes || "").toLowerCase().includes(searchValue);

//     return matchesStatus && matchesSearch;
//   });

//   const openAddModal = () => {
//     setEditingFollowUp(null);

//     setFormData({
//       ...emptyFollowUp,
//       scheduledDate: `${getTodayString()}T10:00`,
//     });

//     setShowModal(true);
//   };

//   const openEditModal = (followUp) => {
//     setEditingFollowUp(followUp);

//     setFormData({
//       lead: followUp.lead || "",
//       type: followUp.type || "Call",
//       scheduledDate: followUp.scheduledDate || "",
//       purpose: followUp.purpose || "",
//       notes: followUp.notes || "",
//       status: followUp.status || "Pending",
//     });

//     setShowModal(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.lead) {
//       window.alert("Please select a lead.");
//       return;
//     }

//     if (!formData.scheduledDate) {
//       window.alert("Please select scheduled date and time.");
//       return;
//     }

//     if (editingFollowUp) {
//       setFollowUps((current) =>
//         current.map((followUp) =>
//           followUp.id === editingFollowUp.id
//             ? {
//                 ...followUp,
//                 ...formData,
//                 completedAt:
//                   formData.status === "Completed"
//                     ? followUp.completedAt || new Date().toISOString()
//                     : null,
//               }
//             : followUp
//         )
//       );
//     } else {
//       const newFollowUp = {
//         id: Date.now(),
//         ...formData,
//         completedAt:
//           formData.status === "Completed"
//             ? new Date().toISOString()
//             : null,
//       };

//       setFollowUps((current) => [newFollowUp, ...current]);
//     }

//     setShowModal(false);
//     setEditingFollowUp(null);
//     setFormData(emptyFollowUp);
//   };

//   const deleteFollowUp = (id) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this follow-up?"
//     );

//     if (!confirmed) return;

//     setFollowUps((current) =>
//       current.filter((followUp) => followUp.id !== id)
//     );
//   };

//   const markCompleted = (id) => {
//     setFollowUps((current) =>
//       current.map((followUp) =>
//         followUp.id === id
//           ? {
//               ...followUp,
//               status: "Completed",
//               completedAt: new Date().toISOString(),
//             }
//           : followUp
//       )
//     );
//   };

//   const cancelFollowUp = (id) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to cancel this follow-up?"
//     );

//     if (!confirmed) return;

//     setFollowUps((current) =>
//       current.map((followUp) =>
//         followUp.id === id
//           ? {
//               ...followUp,
//               status: "Cancelled",
//             }
//           : followUp
//       )
//     );
//   };

//   const getStatusStyle = (status) => {
//     const styles = {
//       Pending: "bg-orange-50 text-orange-600",
//       Completed: "bg-green-50 text-green-600",
//       Cancelled: "bg-red-50 text-red-600",
//     };

//     return styles[status] || "bg-gray-100 text-gray-600";
//   };

//   const getTypeStyle = (type) => {
//     const styles = {
//       Call: "bg-indigo-50 text-indigo-600",
//       Email: "bg-blue-50 text-blue-600",
//       WhatsApp: "bg-green-50 text-green-600",
//       Meeting: "bg-purple-50 text-purple-600",
//       Other: "bg-gray-100 text-gray-600",
//     };

//     return styles[type] || "bg-gray-100 text-gray-600";
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

//   const formatTime = (date) => {
//     if (!date) return "-";

//     const parsedDate = new Date(date);

//     if (Number.isNaN(parsedDate.getTime())) return "-";

//     return parsedDate.toLocaleTimeString("en-IN", {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   const inputClass =
//     "mt-2 h-11 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 text-sm text-[#45424e] outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10";

//   const selectClass =
//     "mt-2 h-11 w-full appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10";

//   return (
//     <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
//       <div className="flex min-h-screen w-full">
//         <Sidebar onNavigate={onNavigate} />

//         <main className="min-w-0 flex-1">
//           {/* Header */}
//           <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">
//             <div className="relative w-full max-w-[520px]">
//               <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8797]">
//                 <SearchIcon />
//               </div>

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search follow-ups..."
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
//             {/* Page Heading */}
//             <div>
//               <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                 Follow-ups
//               </h1>

//               <p className="mt-1 text-sm text-[#94909d]">
//                 Schedule, track and manage follow-ups with your sales leads.
//               </p>
//             </div>

//             {/* Summary Cards */}
//             <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
//               {/* Today's Follow-ups */}
//               <button
//                 type="button"
//                 onClick={() => {
//                   setActiveStatus("Pending");
//                   setSearch("");
//                 }}
//                 className="group rounded-xl border border-[#e5e1ed] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Today's Follow-ups
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {todayFollowUps.length}
//                     </p>
//                   </div>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-100">
//                     <CalendarIcon />
//                   </div>
//                 </div>

//                 <p className="mt-3 text-[11px] text-[#aaa5b2]">
//                   Pending follow-ups scheduled for today
//                 </p>
//               </button>

//               {/* Pending */}
//               <button
//                 type="button"
//                 onClick={() => {
//                   setActiveStatus("Pending");
//                   setSearch("");
//                 }}
//                 className="group rounded-xl border border-[#e5e1ed] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Pending
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {pendingCount}
//                     </p>
//                   </div>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-100">
//                     <ClockIcon />
//                   </div>
//                 </div>

//                 <p className="mt-3 text-[11px] text-[#aaa5b2]">
//                   Follow-ups waiting for action
//                 </p>
//               </button>

//               {/* Completed */}
//               <button
//                 type="button"
//                 onClick={() => {
//                   setActiveStatus("Completed");
//                   setSearch("");
//                 }}
//                 className="group rounded-xl border border-[#e5e1ed] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Completed
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {completedCount}
//                     </p>
//                   </div>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-100">
//                     <CheckIcon />
//                   </div>
//                 </div>

//                 <p className="mt-3 text-[11px] text-[#aaa5b2]">
//                   Successfully completed follow-ups
//                 </p>
//               </button>
//             </div>

//             {/* Follow-ups Section */}
//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Follow-up Activities
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredFollowUps.length} follow-ups currently displayed
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
//                         <option key={status} value={status}>
//                           {status}
//                         </option>
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
//                     Add Follow-up
//                   </button>
//                 </div>
//               </div>

//               {/* Empty State */}
//               {filteredFollowUps.length === 0 ? (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <CalendarIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No follow-ups found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search or status filter.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
//                   {filteredFollowUps.map((followUp) => (
//                     <div
//                       key={followUp.id}
//                       className="group rounded-xl border border-[#e7e3ef] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
//                     >
//                       {/* Top */}
//                       <div className="flex items-start justify-between gap-3">
//                         <div className="flex min-w-0 items-center gap-3">
//                           <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-100">
//                             {(getLeadName(followUp.lead) || "?")
//                               .charAt(0)
//                               .toUpperCase()}
//                           </div>

//                           <div className="min-w-0">
//                             <h3 className="truncate text-sm font-bold text-[#292732]">
//                               {getLeadName(followUp.lead)}
//                             </h3>

//                             <p className="mt-1 truncate text-xs text-[#96929f]">
//                               {getContactPerson(followUp.lead)}
//                             </p>
//                           </div>
//                         </div>

//                         <span
//                           className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusStyle(
//                             followUp.status
//                           )}`}
//                         >
//                           {followUp.status}
//                         </span>
//                       </div>

//                       {/* Type */}
//                       <div className="mt-5">
//                         <span
//                           className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-semibold ${getTypeStyle(
//                             followUp.type
//                           )}`}
//                         >
//                           <FollowUpTypeIcon type={followUp.type} />
//                           {followUp.type}
//                         </span>
//                       </div>

//                       {/* Information */}
//                       <div className="mt-5 space-y-3">
//                         <div className="flex items-center justify-between gap-3">
//                           <span className="text-xs text-[#96929f]">
//                             Scheduled Date
//                           </span>

//                           <span className="flex items-center gap-1 text-right text-xs font-medium text-[#4e4a57]">
//                             <CalendarIcon />
//                             {formatDate(followUp.scheduledDate)}
//                           </span>
//                         </div>

//                         <div className="flex items-center justify-between gap-3">
//                           <span className="text-xs text-[#96929f]">
//                             Scheduled Time
//                           </span>

//                           <span className="flex items-center gap-1 text-right text-xs font-medium text-[#4e4a57]">
//                             <ClockIcon />
//                             {formatTime(followUp.scheduledDate)}
//                           </span>
//                         </div>

//                         <div className="flex items-start justify-between gap-3">
//                           <span className="text-xs text-[#96929f]">
//                             Purpose
//                           </span>

//                           <span className="max-w-[180px] text-right text-xs font-medium text-[#4e4a57]">
//                             {followUp.purpose || "-"}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Notes */}
//                       <div className="mt-5 border-t border-[#f0edf5] pt-4">
//                         <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                           Notes
//                         </p>

//                         <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#5f5b68]">
//                           {followUp.notes || "No notes added."}
//                         </p>
//                       </div>

//                       {/* Actions */}
//                       <div className="mt-5 flex gap-2">
//                         {followUp.status === "Pending" && (
//                           <button
//                             onClick={() => markCompleted(followUp.id)}
//                             className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-green-200 bg-green-50 text-xs font-semibold text-green-600 transition hover:bg-green-100"
//                           >
//                             <CheckIcon />
//                             Complete
//                           </button>
//                         )}

//                         <button
//                           onClick={() => openEditModal(followUp)}
//                           className="h-9 rounded-lg border border-indigo-200 bg-indigo-50 px-3 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100"
//                         >
//                           Edit
//                         </button>

//                         <button
//                           onClick={() => deleteFollowUp(followUp.id)}
//                           className="h-9 rounded-lg border border-red-100 bg-red-50 px-3 text-xs font-semibold text-red-600 transition hover:bg-red-100"
//                         >
//                           Delete
//                         </button>
//                       </div>

//                       {/* Cancel */}
//                       {followUp.status === "Pending" && (
//                         <button
//                           onClick={() => cancelFollowUp(followUp.id)}
//                           className="mt-2 h-9 w-full rounded-lg border border-[#e3dfeb] bg-white text-xs font-semibold text-[#77727f] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
//                         >
//                           Cancel Follow-up
//                         </button>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Information Box */}
//             <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
//               <div className="flex gap-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
//                   <CalendarIcon />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-indigo-900">
//                     Stay on top of your follow-ups
//                   </h3>

//                   <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
//                     Schedule calls, emails, WhatsApp messages and meetings
//                     with your leads. Keep every follow-up activity organized
//                     and mark activities as completed once the interaction is
//                     finished.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
//           onClick={() => setShowModal(false)}
//         >
//           <div
//             className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-[#292732]">
//                   {editingFollowUp
//                     ? "Edit Follow-up"
//                     : "Add New Follow-up"}
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   {editingFollowUp
//                     ? "Update follow-up activity details."
//                     : "Schedule a new follow-up with your sales lead."}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="p-6">
//               <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//                 {/* Lead */}
//                 <div className="md:col-span-2">
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Lead *
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="lead"
//                       value={formData.lead}
//                       onChange={handleChange}
//                       className={selectClass}
//                       required
//                     >
//                       <option value="">Select a lead</option>

//                       {leads.map((lead) => (
//                         <option key={lead.id} value={lead.id}>
//                           {lead.companyName}{" "}
//                           {lead.contactPerson
//                             ? `— ${lead.contactPerson}`
//                             : ""}
//                         </option>
//                       ))}
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-[29px] text-gray-400">
//                       <ChevronDownIcon />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Type */}
//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Follow-up Type *
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="type"
//                       value={formData.type}
//                       onChange={handleChange}
//                       className={selectClass}
//                       required
//                     >
//                       {types.map((type) => (
//                         <option key={type} value={type}>
//                           {type}
//                         </option>
//                       ))}
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-[29px] text-gray-400">
//                       <ChevronDownIcon />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Status */}
//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Status
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="status"
//                       value={formData.status}
//                       onChange={handleChange}
//                       className={selectClass}
//                     >
//                       {statuses
//                         .filter((status) => status !== "All")
//                         .map((status) => (
//                           <option key={status} value={status}>
//                             {status}
//                           </option>
//                         ))}
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-[29px] text-gray-400">
//                       <ChevronDownIcon />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Date */}
//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Scheduled Date & Time *
//                   </label>

//                   <input
//                     type="datetime-local"
//                     name="scheduledDate"
//                     value={formData.scheduledDate}
//                     onChange={handleChange}
//                     className={inputClass}
//                     required
//                   />
//                 </div>

//                 {/* Purpose */}
//                 <div>
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Purpose
//                   </label>

//                   <input
//                     type="text"
//                     name="purpose"
//                     value={formData.purpose}
//                     onChange={handleChange}
//                     placeholder="e.g. Discuss pricing"
//                     className={inputClass}
//                   />
//                 </div>

//                 {/* Notes */}
//                 <div className="md:col-span-2">
//                   <label className="text-xs font-semibold text-[#5f5b68]">
//                     Notes
//                   </label>

//                   <textarea
//                     name="notes"
//                     value={formData.notes}
//                     onChange={handleChange}
//                     placeholder="Add notes about this follow-up..."
//                     className="mt-2 min-h-[120px] w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-4 text-sm text-[#45424e] outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>
//               </div>

//               {/* Footer */}
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
//                   {editingFollowUp
//                     ? "Update Follow-up"
//                     : "Add Follow-up"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FollowUps;




































// const [orders, setOrders] = useState([]);
import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import api from "../api/axios";

const types = ["Call", "Email", "WhatsApp", "Meeting", "Other"];

const statuses = ["All", "Pending", "Completed", "Cancelled"];

const emptyFollowUp = {
  lead: "",
  type: "Call",
  scheduledDate: "",
  purpose: "",
  notes: "",
  status: "Pending",
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

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M8 2v4M16 2v4" />
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" />
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
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-4-.9L4 20l1.5-3.5A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8M18 14c1.8.8 3 2.5 3 5" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <circle cx="5" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="19" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function FollowUpTypeIcon({ type }) {
  if (type === "Call") return <PhoneIcon />;
  if (type === "Email") return <MailIcon />;
  if (type === "WhatsApp") return <MessageIcon />;
  if (type === "Meeting") return <UsersIcon />;
  return <MoreIcon />;
}

function getTodayString() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function toDateTimeLocal(date) {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "";

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const day = String(parsedDate.getDate()).padStart(2, "0");
  const hours = String(parsedDate.getHours()).padStart(2, "0");
  const minutes = String(parsedDate.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function normalizeFollowUp(followUp) {
  return {
    ...followUp,

    id: followUp._id || followUp.id,

    lead:
      typeof followUp.lead === "object"
        ? followUp.lead?._id
        : followUp.lead,

    scheduledDate: followUp.scheduledDate || "",

    type: followUp.type || "Call",

    purpose: followUp.purpose || "",

    notes: followUp.notes || "",

    status: followUp.status || "Pending",

    completedAt: followUp.completedAt || null,
  };
}

function FollowUps({ onNavigate }) {
  const [followUps, setFollowUps] = useState([]);
  const [leads, setLeads] = useState([]);

  const [activeStatus, setActiveStatus] = useState("All");
  const [activeDateFilter, setActiveDateFilter] = useState("All");
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingFollowUp, setEditingFollowUp] = useState(null);

  const [formData, setFormData] = useState(emptyFollowUp);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // =========================
  // GET LEADS
  // =========================
  const fetchLeads = async () => {
    try {
      const response = await api.get("/leads");

      const leadsData = response.data?.leads || [];

      setLeads(
        leadsData.map((lead) => ({
          id: lead._id || lead.id,
          companyName: lead.companyName || "",
          contactPerson: lead.contactPerson || "",
        }))
      );
    } catch (error) {
      console.error("Error fetching leads:", error);

      window.alert(
        error.response?.data?.message || "Failed to load leads."
      );
    }
  };

  // =========================
  // GET FOLLOW-UPS
  // =========================
  const fetchFollowUps = async () => {
    try {
      setLoading(true);

      const response = await api.get("/follow-ups");

      const followUpsData = response.data?.followUps || [];

      setFollowUps(followUpsData.map(normalizeFollowUp));
    } catch (error) {
      console.error("Error fetching follow-ups:", error);

      window.alert(
        error.response?.data?.message ||
          "Failed to load follow-ups."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // INITIAL LOAD
  // =========================
  useEffect(() => {
    const loadData = async () => {
      await Promise.all([
        fetchLeads(),
        fetchFollowUps(),
      ]);
    };

    loadData();
  }, []);

  // =========================
  // LEAD HELPERS
  // =========================
  const getLead = (leadId) => {
    return leads.find(
      (lead) => String(lead.id) === String(leadId)
    );
  };

  const getLeadName = (leadId) => {
    const lead = getLead(leadId);

    if (!lead) return "Unknown Lead";

    return lead.companyName || "Unknown Lead";
  };

  const getContactPerson = (leadId) => {
    const lead = getLead(leadId);

    if (!lead) return "-";

    return lead.contactPerson || "-";
  };

  // =========================
  // DATE HELPERS
  // =========================
  const isToday = (date) => {
    if (!date) return false;

    const followUpDate = new Date(date);

    if (Number.isNaN(followUpDate.getTime())) {
      return false;
    }

    const today = new Date();

    return (
      followUpDate.getFullYear() === today.getFullYear() &&
      followUpDate.getMonth() === today.getMonth() &&
      followUpDate.getDate() === today.getDate()
    );
  };

  const todayFollowUps = useMemo(() => {
    return followUps.filter(
      (followUp) =>
        isToday(followUp.scheduledDate) &&
        followUp.status === "Pending"
    );
  }, [followUps]);

  const pendingCount = followUps.filter(
    (followUp) => followUp.status === "Pending"
  ).length;

  const completedCount = followUps.filter(
    (followUp) => followUp.status === "Completed"
  ).length;

  const cancelledCount = followUps.filter(
    (followUp) => followUp.status === "Cancelled"
  ).length;

  // =========================
  // SEARCH + FILTER
  // =========================
  const filteredFollowUps = followUps.filter((followUp) => {
    const searchValue = search.toLowerCase().trim();

    const matchesStatus =
      activeStatus === "All" ||
      followUp.status === activeStatus;

    const matchesSearch =
      !searchValue ||
      getLeadName(followUp.lead)
        .toLowerCase()
        .includes(searchValue) ||
      getContactPerson(followUp.lead)
        .toLowerCase()
        .includes(searchValue) ||
      (followUp.type || "")
        .toLowerCase()
        .includes(searchValue) ||
      (followUp.purpose || "")
        .toLowerCase()
        .includes(searchValue) ||
      (followUp.notes || "")
        .toLowerCase()
        .includes(searchValue);

    return matchesStatus && matchesSearch;
  });

  // =========================
  // ADD MODAL
  // =========================
  const openAddModal = () => {
    setEditingFollowUp(null);

    setFormData({
      ...emptyFollowUp,
      scheduledDate: `${getTodayString()}T10:00`,
    });

    setShowModal(true);
  };

  // =========================
  // EDIT MODAL
  // =========================
  const openEditModal = (followUp) => {
    setEditingFollowUp(followUp);

    setFormData({
      lead: followUp.lead || "",
      type: followUp.type || "Call",
      scheduledDate: toDateTimeLocal(
        followUp.scheduledDate
      ),
      purpose: followUp.purpose || "",
      notes: followUp.notes || "",
      status: followUp.status || "Pending",
    });

    setShowModal(true);
  };

  // =========================
  // FORM CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // =========================
  // CREATE / UPDATE
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.lead) {
      window.alert("Please select a lead.");
      return;
    }

    if (!formData.scheduledDate) {
      window.alert(
        "Please select scheduled date and time."
      );
      return;
    }

    try {
      setSaving(true);

      const payload = {
        lead: formData.lead,
        type: formData.type,
        scheduledDate: new Date(
          formData.scheduledDate
        ).toISOString(),
        purpose: formData.purpose,
        notes: formData.notes,
        status: formData.status,
      };

      // UPDATE
      if (editingFollowUp) {
        const response = await api.put(
          `/follow-ups/${editingFollowUp.id}`,
          payload
        );

        const updatedFollowUp =
          response.data?.followUp ||
          response.data?.data;

        if (updatedFollowUp) {
          setFollowUps((current) =>
            current.map((item) =>
              String(item.id) ===
              String(editingFollowUp.id)
                ? normalizeFollowUp(updatedFollowUp)
                : item
            )
          );
        } else {
          await fetchFollowUps();
        }

        window.alert(
          "Follow-up updated successfully."
        );
      }

      // CREATE
      else {
        const response = await api.post(
          "/follow-ups",
          payload
        );

        const newFollowUp =
          response.data?.followUp ||
          response.data?.data;

        if (newFollowUp) {
          setFollowUps((current) => [
            normalizeFollowUp(newFollowUp),
            ...current,
          ]);
        } else {
          await fetchFollowUps();
        }

        window.alert(
          "Follow-up created successfully."
        );
      }

      setShowModal(false);
      setEditingFollowUp(null);
      setFormData(emptyFollowUp);
    } catch (error) {
      console.error(
        "Error saving follow-up:",
        error
      );

      window.alert(
        error.response?.data?.message ||
          "Failed to save follow-up."
      );
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // DELETE
  // =========================
  const deleteFollowUp = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this follow-up?"
    );

    if (!confirmed) return;

    try {
      await api.delete(`/follow-ups/${id}`);

      setFollowUps((current) =>
        current.filter(
          (followUp) =>
            String(followUp.id) !== String(id)
        )
      );

      window.alert(
        "Follow-up deleted successfully."
      );
    } catch (error) {
      console.error(
        "Error deleting follow-up:",
        error
      );

      window.alert(
        error.response?.data?.message ||
          "Failed to delete follow-up."
      );
    }
  };

  // =========================
  // MARK COMPLETED
  // =========================
  const markCompleted = async (id) => {
    try {
      const response = await api.put(
        `/follow-ups/${id}`,
        {
          status: "Completed",
          completedAt: new Date().toISOString(),
        }
      );

      const updatedFollowUp =
        response.data?.followUp ||
        response.data?.data;

      if (updatedFollowUp) {
        setFollowUps((current) =>
          current.map((item) =>
            String(item.id) === String(id)
              ? normalizeFollowUp(updatedFollowUp)
              : item
          )
        );
      } else {
        setFollowUps((current) =>
          current.map((item) =>
            String(item.id) === String(id)
              ? {
                  ...item,
                  status: "Completed",
                  completedAt:
                    new Date().toISOString(),
                }
              : item
          )
        );
      }
    } catch (error) {
      console.error(
        "Error completing follow-up:",
        error
      );

      window.alert(
        error.response?.data?.message ||
          "Failed to complete follow-up."
      );
    }
  };

  // =========================
  // CANCEL
  // =========================
  const cancelFollowUp = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this follow-up?"
    );

    if (!confirmed) return;

    try {
      const response = await api.put(
        `/follow-ups/${id}`,
        {
          status: "Cancelled",
        }
      );

      const updatedFollowUp =
        response.data?.followUp ||
        response.data?.data;

      if (updatedFollowUp) {
        setFollowUps((current) =>
          current.map((item) =>
            String(item.id) === String(id)
              ? normalizeFollowUp(updatedFollowUp)
              : item
          )
        );
      } else {
        setFollowUps((current) =>
          current.map((item) =>
            String(item.id) === String(id)
              ? {
                  ...item,
                  status: "Cancelled",
                }
              : item
          )
        );
      }
    } catch (error) {
      console.error(
        "Error cancelling follow-up:",
        error
      );

      window.alert(
        error.response?.data?.message ||
          "Failed to cancel follow-up."
      );
    }
  };

  // =========================
  // STYLES
  // =========================
  const getStatusStyle = (status) => {
    const styles = {
      Pending: "bg-orange-50 text-orange-600",
      Completed: "bg-green-50 text-green-600",
      Cancelled: "bg-red-50 text-red-600",
    };

    return (
      styles[status] ||
      "bg-gray-100 text-gray-600"
    );
  };

  const getTypeStyle = (type) => {
    const styles = {
      Call: "bg-indigo-50 text-indigo-600",
      Email: "bg-blue-50 text-blue-600",
      WhatsApp: "bg-green-50 text-green-600",
      Meeting: "bg-purple-50 text-purple-600",
      Other: "bg-gray-100 text-gray-600",
    };

    return (
      styles[type] ||
      "bg-gray-100 text-gray-600"
    );
  };

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

  const formatTime = (date) => {
    if (!date) return "-";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "-";
    }

    return parsedDate.toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  };

  const inputClass =
    "mt-2 h-11 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 text-sm text-[#45424e] outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10";

  const selectClass =
    "mt-2 h-11 w-full appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10";

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
                placeholder="Search follow-ups..."
                className="h-10 w-full rounded-lg border border-[#e5e1ec] bg-[#fcfbff] pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-[#aaa5b2] focus:border-[#6554e8] focus:ring-2 focus:ring-[#6554e8]/10"
              />

            </div>

            <div className="ml-6 flex items-center gap-5">

              <button className="relative text-[#777384] transition hover:text-[#5141d8]">
                <BellIcon />

                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-sm font-semibold text-white shadow-sm">
                P
              </button>

            </div>
          </header>

          <div className="w-full p-6 sm:p-8 lg:p-10">

            {/* HEADING */}
            <div>

              <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                Follow-ups
              </h1>

              <p className="mt-1 text-sm text-[#94909d]">
                Schedule, track and manage follow-ups with your sales leads.
              </p>

            </div>

            {/* SUMMARY */}
            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">

              {/* TODAY */}
              <button
                type="button"
                onClick={() => {
                  setActiveStatus("All");
    setActiveDateFilter("Today");
                  setSearch("");
                }}
                className="group rounded-xl border border-[#e5e1ed] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
              >

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-xs font-medium text-[#96929f]">
                      Today's Follow-ups
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {todayFollowUps.length}
                    </p>

                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-100">
                    <CalendarIcon />
                  </div>

                </div>

                <p className="mt-3 text-[11px] text-[#aaa5b2]">
                  Pending follow-ups scheduled for today
                </p>

              </button>

              {/* PENDING */}
              <button
                type="button"
                onClick={() => {
                  setActiveStatus("Pending");
                  setSearch("");
                }}
                className="group rounded-xl border border-[#e5e1ed] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
              >

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-xs font-medium text-[#96929f]">
                      Pending
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {pendingCount}
                    </p>

                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-100">
                    <ClockIcon />
                  </div>

                </div>

                <p className="mt-3 text-[11px] text-[#aaa5b2]">
                  Follow-ups waiting for action
                </p>

              </button>

              {/* COMPLETED */}
              <button
                type="button"
                onClick={() => {
                  setActiveStatus("Completed");
                  setSearch("");
                }}
                className="group rounded-xl border border-[#e5e1ed] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
              >

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-xs font-medium text-[#96929f]">
                      Completed
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {completedCount}
                    </p>

                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-100">
                    <CheckIcon />
                  </div>

                </div>

                <p className="mt-3 text-[11px] text-[#aaa5b2]">
                  Successfully completed follow-ups
                </p>

              </button>

            </div>

            {/* FOLLOW-UP SECTION */}
            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">

              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h2 className="text-base font-semibold text-[#272631]">
                    Follow-up Activities
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {filteredFollowUps.length} follow-ups currently displayed
                  </p>

                </div>

                <div className="flex flex-wrap items-center gap-3">

                  <div className="relative">

                    <select
                      value={activeStatus}
                      onChange={(e) =>
                        setActiveStatus(e.target.value)
                      }
                      className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500"
                    >

                      {statuses.map((status) => (
                        <option
                          key={status}
                          value={status}
                        >
                          {status}
                        </option>
                      ))}

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
                    Add Follow-up
                  </button>

                </div>

              </div>

              {/* LOADING */}
              {loading ? (
                <div className="px-6 py-16 text-center">

                  <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />

                  <p className="mt-4 text-sm text-[#96929f]">
                    Loading follow-ups...
                  </p>

                </div>
              ) : filteredFollowUps.length === 0 ? (

                /* EMPTY */
                <div className="px-6 py-16 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <CalendarIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    No follow-ups found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    Try changing your search or status filter.
                  </p>

                </div>

              ) : (

                /* CARDS */
                <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">

                  {filteredFollowUps.map((followUp) => (

                    <div
                      key={followUp.id}
                      className="group rounded-xl border border-[#e7e3ef] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                    >

                      {/* TOP */}
                      <div className="flex items-start justify-between gap-3">

                        <div className="flex min-w-0 items-center gap-3">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-100">

                            {(getLeadName(followUp.lead) || "?")
                              .charAt(0)
                              .toUpperCase()}

                          </div>

                          <div className="min-w-0">

                            <h3 className="truncate text-sm font-bold text-[#292732]">
                              {getLeadName(
                                followUp.lead
                              )}
                            </h3>

                            <p className="mt-1 truncate text-xs text-[#96929f]">
                              {getContactPerson(
                                followUp.lead
                              )}
                            </p>

                          </div>

                        </div>

                        <span
                          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusStyle(
                            followUp.status
                          )}`}
                        >
                          {followUp.status}
                        </span>

                      </div>

                      {/* TYPE */}
                      <div className="mt-5">

                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-semibold ${getTypeStyle(
                            followUp.type
                          )}`}
                        >
                          <FollowUpTypeIcon
                            type={followUp.type}
                          />
                          {followUp.type}
                        </span>

                      </div>

                      {/* INFORMATION */}
                      <div className="mt-5 space-y-3">

                        <div className="flex items-center justify-between gap-3">

                          <span className="text-xs text-[#96929f]">
                            Scheduled Date
                          </span>

                          <span className="flex items-center gap-1 text-right text-xs font-medium text-[#4e4a57]">
                            <CalendarIcon />
                            {formatDate(
                              followUp.scheduledDate
                            )}
                          </span>

                        </div>

                        <div className="flex items-center justify-between gap-3">

                          <span className="text-xs text-[#96929f]">
                            Scheduled Time
                          </span>

                          <span className="flex items-center gap-1 text-right text-xs font-medium text-[#4e4a57]">
                            <ClockIcon />
                            {formatTime(
                              followUp.scheduledDate
                            )}
                          </span>

                        </div>

                        <div className="flex items-start justify-between gap-3">

                          <span className="text-xs text-[#96929f]">
                            Purpose
                          </span>

                          <span className="max-w-[180px] text-right text-xs font-medium text-[#4e4a57]">
                            {followUp.purpose || "-"}
                          </span>

                        </div>

                      </div>

                      {/* NOTES */}
                      <div className="mt-5 border-t border-[#f0edf5] pt-4">

                        <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                          Notes
                        </p>

                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#5f5b68]">
                          {followUp.notes ||
                            "No notes added."}
                        </p>

                      </div>

                      {/* ACTIONS */}
                      <div className="mt-5 flex gap-2">

                        {followUp.status ===
                          "Pending" && (
                          <button
                            onClick={() =>
                              markCompleted(
                                followUp.id
                              )
                            }
                            className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-green-200 bg-green-50 text-xs font-semibold text-green-600 transition hover:bg-green-100"
                          >
                            <CheckIcon />
                            Complete
                          </button>
                        )}

                        <button
                          onClick={() =>
                            openEditModal(followUp)
                          }
                          className="h-9 rounded-lg border border-indigo-200 bg-indigo-50 px-3 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            deleteFollowUp(
                              followUp.id
                            )
                          }
                          className="h-9 rounded-lg border border-red-100 bg-red-50 px-3 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                        >
                          Delete
                        </button>

                      </div>

                      {/* CANCEL */}
                      {followUp.status ===
                        "Pending" && (
                        <button
                          onClick={() =>
                            cancelFollowUp(
                              followUp.id
                            )
                          }
                          className="mt-2 h-9 w-full rounded-lg border border-[#e3dfeb] bg-white text-xs font-semibold text-[#77727f] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                        >
                          Cancel Follow-up
                        </button>
                      )}

                    </div>

                  ))}

                </div>

              )}

            </div>

            {/* INFO BOX */}
            <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">

              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <CalendarIcon />
                </div>

                <div>

                  <h3 className="text-sm font-semibold text-indigo-900">
                    Stay on top of your follow-ups
                  </h3>

                  <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
                    Schedule calls, emails, WhatsApp messages
                    and meetings with your leads. Keep every
                    follow-up activity organized and mark
                    activities as completed once the interaction
                    is finished.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

      {/* MODAL */}
      {showModal && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >

          <div
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">

              <div>

                <h2 className="text-lg font-bold text-[#292732]">
                  {editingFollowUp
                    ? "Edit Follow-up"
                    : "Add New Follow-up"}
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  {editingFollowUp
                    ? "Update follow-up activity details."
                    : "Schedule a new follow-up with your sales lead."}
                </p>

              </div>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              >
                <XIcon />
              </button>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="p-6"
            >

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* LEAD */}
                <div className="md:col-span-2">

                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Lead *
                  </label>

                  <div className="relative">

                    <select
                      name="lead"
                      value={formData.lead}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >

                      <option value="">
                        Select a lead
                      </option>

                      {leads.map((lead) => (

                        <option
                          key={lead.id}
                          value={lead.id}
                        >
                          {lead.companyName}{" "}
                          {lead.contactPerson
                            ? `— ${lead.contactPerson}`
                            : ""}
                        </option>

                      ))}

                    </select>

                    <div className="pointer-events-none absolute right-3 top-[29px] text-gray-400">
                      <ChevronDownIcon />
                    </div>

                  </div>

                </div>

                {/* TYPE */}
                <div>

                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Follow-up Type *
                  </label>

                  <div className="relative">

                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >

                      {types.map((type) => (

                        <option
                          key={type}
                          value={type}
                        >
                          {type}
                        </option>

                      ))}

                    </select>

                    <div className="pointer-events-none absolute right-3 top-[29px] text-gray-400">
                      <ChevronDownIcon />
                    </div>

                  </div>

                </div>

                {/* STATUS */}
                <div>

                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Status
                  </label>

                  <div className="relative">

                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className={selectClass}
                    >

                      {statuses
                        .filter(
                          (status) =>
                            status !== "All"
                        )
                        .map((status) => (

                          <option
                            key={status}
                            value={status}
                          >
                            {status}
                          </option>

                        ))}

                    </select>

                    <div className="pointer-events-none absolute right-3 top-[29px] text-gray-400">
                      <ChevronDownIcon />
                    </div>

                  </div>

                </div>

                {/* DATE */}
                <div>

                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Scheduled Date & Time *
                  </label>

                  <input
                    type="datetime-local"
                    name="scheduledDate"
                    value={formData.scheduledDate}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />

                </div>

                {/* PURPOSE */}
                <div>

                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Purpose
                  </label>

                  <input
                    type="text"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="e.g. Discuss pricing"
                    className={inputClass}
                  />

                </div>

                {/* NOTES */}
                <div className="md:col-span-2">

                  <label className="text-xs font-semibold text-[#5f5b68]">
                    Notes
                  </label>

                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Add notes about this follow-up..."
                    className="mt-2 min-h-[120px] w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-4 text-sm text-[#45424e] outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  />

                </div>

              </div>

              {/* FOOTER */}
              <div className="mt-6 flex justify-end gap-3 border-t border-[#eeeaf4] pt-5">

                <button
                  type="button"
                  onClick={() =>
                    setShowModal(false)
                  }
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
                    : editingFollowUp
                    ? "Update Follow-up"
                    : "Add Follow-up"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default FollowUps;
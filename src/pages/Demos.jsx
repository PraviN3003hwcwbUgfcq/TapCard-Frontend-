
// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const initialDemos = [
//   {
//     id: 1,
//     lead: "Metro Realty",
//     contact: "Rahul Mehta",
//     demoDate: "Today",
//     time: "11:30 AM",
//     demoType: "Online",
//     meetingLink: "https://meet.google.com/demo",
//     location: "",
//     participants: "Rahul Mehta, Sarah K.",
//     purpose: "Product presentation",
//     requirements: "Digital business card and analytics",
//     outcome: "Interested",
//     nextAction: "Send proposal",
//     status: "Scheduled",
//   },
//   {
//     id: 2,
//     lead: "Sharma Dental Care",
//     contact: "Dr. A. Sharma",
//     demoDate: "Today",
//     time: "3:00 PM",
//     demoType: "Offline",
//     meetingLink: "",
//     location: "Sharma Dental Care, Delhi",
//     participants: "Dr. A. Sharma",
//     purpose: "Product demonstration",
//     requirements: "QR code and WhatsApp integration",
//     outcome: "Positive response",
//     nextAction: "Follow up tomorrow",
//     status: "Scheduled",
//   },
//   {
//     id: 3,
//     lead: "The Urban Table",
//     contact: "Amit Kapoor",
//     demoDate: "Tomorrow",
//     time: "12:00 PM",
//     demoType: "Online",
//     meetingLink: "https://meet.google.com/demo",
//     location: "",
//     participants: "Amit Kapoor",
//     purpose: "Feature demonstration",
//     requirements: "Menu, contact and social media features",
//     outcome: "",
//     nextAction: "",
//     status: "Scheduled",
//   },
//   {
//     id: 4,
//     lead: "Prime Properties",
//     contact: "Neha Shah",
//     demoDate: "Sep 4",
//     time: "4:00 PM",
//     demoType: "Offline",
//     meetingLink: "",
//     location: "Prime Properties Office",
//     participants: "Neha Shah",
//     purpose: "Premium card demonstration",
//     requirements: "Premium card options",
//     outcome: "",
//     nextAction: "",
//     status: "Rescheduled",
//   },
//   {
//     id: 5,
//     lead: "Wellness Dental Studio",
//     contact: "Dr. Priya Singh",
//     demoDate: "Sep 5",
//     time: "1:30 PM",
//     demoType: "Online",
//     meetingLink: "https://meet.google.com/demo",
//     location: "",
//     participants: "Dr. Priya Singh",
//     purpose: "Product demonstration",
//     requirements: "Business card features",
//     outcome: "Demo completed successfully",
//     nextAction: "Send pricing details",
//     status: "Completed",
//   },
// ];

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

// function CalendarIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-5 w-5"
//     >
//       <rect x="3" y="5" width="18" height="16" rx="2" />
//       <path d="M16 3v4M8 3v4M3 10h18" />
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
//       <path d="m6 6 12 12M18 6 6 18" />
//     </svg>
//   );
// }

// function MonitorIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-5 w-5"
//     >
//       <rect x="3" y="4" width="18" height="13" rx="2" />
//       <path d="M8 21h8M12 17v4" />
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

// function LinkIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M10 13a5 5 0 0 0 7.54.54l2-2a5 5 0 0 0-7.07-7.07l-1.14 1.14" />
//       <path d="M14 11a5 5 0 0 0-7.54-.54l-2 2a5 5 0 0 0 7.07 7.07l1.14-1.14" />
//     </svg>
//   );
// }

// function Demos({ onNavigate }) {
//   const [demos, setDemos] = useState(initialDemos);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [showModal, setShowModal] = useState(false);

//   const [form, setForm] = useState({
//     lead: "",
//     demoDate: "",
//     demoTime: "",
//     demoType: "Online",
//     meetingLink: "",
//     location: "",
//     participants: "",
//     purpose: "",
//     requirements: "",
//     outcome: "",
//     nextAction: "",
//     status: "Scheduled",
//   });

//   const resetForm = () => {
//     setForm({
//       lead: "",
//       demoDate: "",
//       demoTime: "",
//       demoType: "Online",
//       meetingLink: "",
//       location: "",
//       participants: "",
//       purpose: "",
//       requirements: "",
//       outcome: "",
//       nextAction: "",
//       status: "Scheduled",
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   const formatDate = (dateValue) => {
//     if (!dateValue) return "";

//     const selectedDate = new Date(`${dateValue}T00:00:00`);
//     const today = new Date();

//     const todayString = today.toISOString().split("T")[0];

//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);

//     const tomorrowString = tomorrow.toISOString().split("T")[0];

//     if (dateValue === todayString) {
//       return "Today";
//     }

//     if (dateValue === tomorrowString) {
//       return "Tomorrow";
//     }

//     return selectedDate.toLocaleDateString("en-IN", {
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const formatTime = (timeValue) => {
//     if (!timeValue) return "";

//     const [hours, minutes] = timeValue.split(":");
//     const hour = Number(hours);

//     const suffix = hour >= 12 ? "PM" : "AM";
//     const formattedHour = hour % 12 || 12;

//     return `${formattedHour}:${minutes} ${suffix}`;
//   };

//   const handleCreateDemo = (e) => {
//     e.preventDefault();

//     if (!form.lead || !form.demoDate) {
//       return;
//     }

//     const newDemo = {
//       id: Date.now(),
//       lead: form.lead,
//       contact: "Lead Contact",
//       demoDate: formatDate(form.demoDate),
//       time: formatTime(form.demoTime),
//       demoType: form.demoType,
//       meetingLink: form.meetingLink,
//       location: form.location,
//       participants: form.participants,
//       purpose: form.purpose,
//       requirements: form.requirements,
//       outcome: form.outcome,
//       nextAction: form.nextAction,
//       status: form.status,
//     };

//     setDemos((current) => [newDemo, ...current]);
//     setFilter("All");
//     setSearch("");
//     setShowModal(false);
//     resetForm();
//   };

//   const updateStatus = (id, status) => {
//     setDemos((current) =>
//       current.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               status,
//             }
//           : item
//       )
//     );
//   };

//   const markCompleted = (id) => {
//     updateStatus(id, "Completed");
//   };

//   const filteredDemos = demos.filter((item) => {
//     const searchValue = search.toLowerCase();

//     const matchesSearch =
//       item.lead.toLowerCase().includes(searchValue) ||
//       item.contact.toLowerCase().includes(searchValue) ||
//       item.demoType.toLowerCase().includes(searchValue) ||
//       item.status.toLowerCase().includes(searchValue) ||
//       item.purpose.toLowerCase().includes(searchValue) ||
//       item.participants.toLowerCase().includes(searchValue);

//     const matchesFilter =
//       filter === "All" ||
//       (filter === "Today" && item.demoDate === "Today") ||
//       (filter === "Tomorrow" && item.demoDate === "Tomorrow") ||
//       (filter === "Scheduled" && item.status === "Scheduled") ||
//       (filter === "Completed" && item.status === "Completed") ||
//       (filter === "Cancelled" && item.status === "Cancelled") ||
//       (filter === "Rescheduled" && item.status === "Rescheduled");

//     return matchesSearch && matchesFilter;
//   });

//   const todayCount = demos.filter(
//     (item) =>
//       item.demoDate === "Today" &&
//       item.status !== "Cancelled"
//   ).length;

//   const scheduledCount = demos.filter(
//     (item) => item.status === "Scheduled"
//   ).length;

//   const completedCount = demos.filter(
//     (item) => item.status === "Completed"
//   ).length;

//   const getStatusClass = (status) => {
//     if (status === "Completed") {
//       return "bg-green-50 text-green-600";
//     }

//     if (status === "Cancelled") {
//       return "bg-red-50 text-red-600";
//     }

//     if (status === "Rescheduled") {
//       return "bg-orange-50 text-orange-600";
//     }

//     return "bg-indigo-50 text-indigo-600";
//   };

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
//                 placeholder="Search demos..."
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
//             <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
//               <div>
//                 <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                   Demos
//                 </h1>

//                 <p className="mt-1 text-sm text-[#94909d]">
//                   Manage your product demos and client presentations.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowModal(true)}
//                 className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//               >
//                 <PlusIcon />
//                 Add Demo
//               </button>
//             </div>

//             <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Today's Demos
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {todayCount}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                     <CalendarIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Scheduled
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {scheduledCount}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
//                     <MonitorIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Completed
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {completedCount}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
//                     <CheckIcon />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Demo Schedule
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredDemos.length} demos displayed
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "All",
//                     "Today",
//                     "Tomorrow",
//                     "Scheduled",
//                     "Completed",
//                     "Cancelled",
//                     "Rescheduled",
//                   ].map((item) => (
//                     <button
//                       key={item}
//                       onClick={() => setFilter(item)}
//                       className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
//                         filter === item
//                           ? "bg-indigo-600 text-white"
//                           : "border border-[#e3dfeb] bg-white text-[#66626f] hover:bg-indigo-50 hover:text-indigo-600"
//                       }`}
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {filteredDemos.length === 0 ? (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <MonitorIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No demos found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search or filter.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="divide-y divide-[#eeeaf4]">
//                   {filteredDemos.map((item) => (
//                     <div
//                       key={item.id}
//                       className="p-5 transition hover:bg-[#fcfbff]"
//                     >
//                       <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
//                         <div className="flex min-w-0 items-start gap-4">
//                           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                             {item.lead.charAt(0)}
//                           </div>

//                           <div className="min-w-0">
//                             <div className="flex flex-wrap items-center gap-2">
//                               <h3 className="text-sm font-bold text-[#292732]">
//                                 {item.lead}
//                               </h3>

//                               <span
//                                 className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusClass(
//                                   item.status
//                                 )}`}
//                               >
//                                 {item.status}
//                               </span>

//                               <span className="rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-semibold text-purple-600">
//                                 {item.demoType}
//                               </span>
//                             </div>

//                             <p className="mt-1 text-xs text-[#96929f]">
//                               {item.contact}
//                             </p>

//                             <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">
//                               <span className="flex items-center gap-1.5">
//                                 <CalendarIcon />
//                                 {item.demoDate}
//                                 {item.time && ` · ${item.time}`}
//                               </span>

//                               {item.demoType === "Online" &&
//                                 item.meetingLink && (
//                                   <a
//                                     href={item.meetingLink}
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="flex items-center gap-1.5 text-indigo-600 hover:underline"
//                                   >
//                                     <LinkIcon />
//                                     Meeting Link
//                                   </a>
//                                 )}

//                               {item.demoType === "Offline" &&
//                                 item.location && (
//                                   <span className="flex items-center gap-1.5">
//                                     <MapPinIcon />
//                                     {item.location}
//                                   </span>
//                                 )}
//                             </div>

//                             {item.participants && (
//                               <p className="mt-3 text-xs text-[#66626f]">
//                                 <span className="font-semibold">
//                                   Participants:
//                                 </span>{" "}
//                                 {item.participants}
//                               </p>
//                             )}

//                             {item.purpose && (
//                               <p className="mt-2 text-xs text-[#96929f]">
//                                 <span className="font-semibold text-[#66626f]">
//                                   Purpose:
//                                 </span>{" "}
//                                 {item.purpose}
//                               </p>
//                             )}

//                             {item.requirements && (
//                               <p className="mt-2 text-xs text-[#96929f]">
//                                 <span className="font-semibold text-[#66626f]">
//                                   Requirements:
//                                 </span>{" "}
//                                 {item.requirements}
//                               </p>
//                             )}

//                             {item.outcome && (
//                               <p className="mt-2 text-xs text-[#96929f]">
//                                 <span className="font-semibold text-[#66626f]">
//                                   Outcome:
//                                 </span>{" "}
//                                 {item.outcome}
//                               </p>
//                             )}

//                             {item.nextAction && (
//                               <p className="mt-2 text-xs text-[#96929f]">
//                                 <span className="font-semibold text-[#66626f]">
//                                   Next Action:
//                                 </span>{" "}
//                                 {item.nextAction}
//                               </p>
//                             )}
//                           </div>
//                         </div>

//                         <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
//                           <button
//                             onClick={() =>
//                               onNavigate(`/lead-details/${item.id}`)
//                             }
//                             className="h-9 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                           >
//                             View Lead
//                           </button>

//                           {item.status === "Scheduled" && (
//                             <>
//                               <button
//                                 onClick={() =>
//                                   updateStatus(item.id, "Rescheduled")
//                                 }
//                                 className="h-9 rounded-lg border border-orange-200 bg-orange-50 px-4 text-xs font-semibold text-orange-600 transition hover:bg-orange-100"
//                               >
//                                 Reschedule
//                               </button>

//                               <button
//                                 onClick={() => markCompleted(item.id)}
//                                 className="flex h-9 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition hover:bg-indigo-700"
//                               >
//                                 <CheckIcon />
//                                 Complete
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-[#272631]">
//                   Add Demo
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   Schedule a new demo for a lead.
//                 </p>
//               </div>

//               <button
//                 onClick={() => {
//                   setShowModal(false);
//                   resetForm();
//                 }}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             <form onSubmit={handleCreateDemo}>
//               <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Lead <span className="text-red-500">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       name="lead"
//                       value={form.lead}
//                       onChange={handleChange}
//                       placeholder="e.g. Metro Realty"
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Demo Date <span className="text-red-500">*</span>
//                     </label>

//                     <input
//                       type="date"
//                       name="demoDate"
//                       value={form.demoDate}
//                       onChange={handleChange}
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Demo Time
//                     </label>

//                     <input
//                       type="time"
//                       name="demoTime"
//                       value={form.demoTime}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Demo Type
//                     </label>

//                     <select
//                       name="demoType"
//                       value={form.demoType}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option value="Online">Online</option>
//                       <option value="Offline">Offline</option>
//                     </select>
//                   </div>

//                   {form.demoType === "Online" ? (
//                     <div className="sm:col-span-2">
//                       <label className="text-xs font-semibold text-[#4e4a57]">
//                         Meeting Link
//                       </label>

//                       <input
//                         type="url"
//                         name="meetingLink"
//                         value={form.meetingLink}
//                         onChange={handleChange}
//                         placeholder="https://meet.google.com/..."
//                         className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                       />
//                     </div>
//                   ) : (
//                     <div className="sm:col-span-2">
//                       <label className="text-xs font-semibold text-[#4e4a57]">
//                         Location
//                       </label>

//                       <input
//                         type="text"
//                         name="location"
//                         value={form.location}
//                         onChange={handleChange}
//                         placeholder="Enter demo location"
//                         className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                       />
//                     </div>
//                   )}

//                   <div className="sm:col-span-2">
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Participants
//                     </label>

//                     <input
//                       type="text"
//                       name="participants"
//                       value={form.participants}
//                       onChange={handleChange}
//                       placeholder="e.g. Rahul Mehta, Sarah K."
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Purpose
//                     </label>

//                     <input
//                       type="text"
//                       name="purpose"
//                       value={form.purpose}
//                       onChange={handleChange}
//                       placeholder="Purpose of demo"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Status
//                     </label>

//                     <select
//                       name="status"
//                       value={form.status}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option value="Scheduled">Scheduled</option>
//                       <option value="Completed">Completed</option>
//                       <option value="Cancelled">Cancelled</option>
//                       <option value="Rescheduled">Rescheduled</option>
//                     </select>
//                   </div>

//                   <div className="sm:col-span-2">
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Requirements
//                     </label>

//                     <textarea
//                       name="requirements"
//                       value={form.requirements}
//                       onChange={handleChange}
//                       placeholder="Enter client requirements..."
//                       rows="3"
//                       className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Outcome
//                     </label>

//                     <textarea
//                       name="outcome"
//                       value={form.outcome}
//                       onChange={handleChange}
//                       placeholder="Enter demo outcome..."
//                       rows="3"
//                       className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Next Action
//                     </label>

//                     <textarea
//                       name="nextAction"
//                       value={form.nextAction}
//                       onChange={handleChange}
//                       placeholder="Enter next action..."
//                       rows="3"
//                       className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowModal(false);
//                     resetForm();
//                   }}
//                   className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
//                 >
//                   Create Demo
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Demos;































// const mongoose = require("mongoose");
// import { useEffect, useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// // Change this only if your backend uses another URL.
// const API_BASE_URL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// const getToken = () => {
//   return (
//     localStorage.getItem("token") ||
//     localStorage.getItem("accessToken") ||
//     localStorage.getItem("authToken")
//   );
// };

// const emptyForm = {
//   lead: "",
//   demoDate: "",
//   demoTime: "",
//   demoType: "Online",
//   meetingLink: "",
//   location: "",
//   participants: "",
//   purpose: "",
//   requirements: "",
//   outcome: "",
//   nextAction: "",
//   status: "Scheduled",
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

// function CalendarIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-5 w-5"
//     >
//       <rect x="3" y="5" width="18" height="16" rx="2" />
//       <path d="M16 3v4M8 3v4M3 10h18" />
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
//       <path d="m6 6 12 12M18 6 6 18" />
//     </svg>
//   );
// }

// function MonitorIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-5 w-5"
//     >
//       <rect x="3" y="4" width="18" height="13" rx="2" />
//       <path d="M8 21h8M12 17v4" />
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

// function LinkIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M10 13a5 5 0 0 0 7.54.54l2-2a5 5 0 0 0-7.07-7.07l-1.14 1.14" />
//       <path d="M14 11a5 5 0 0 0-7.54-.54l-2 2a5 5 0 0 0 7.07 7.07l1.14-1.14" />
//     </svg>
//   );
// }

// function Demos({ onNavigate }) {
//   const [demos, setDemos] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [completingId, setCompletingId] = useState(null);
//   const [error, setError] = useState("");

//   const [form, setForm] = useState(emptyForm);

//   /*
//    * ---------------------------------------------------------
//    * API HELPER
//    * ---------------------------------------------------------
//    */
//   const apiRequest = async (endpoint, options = {}) => {
//     const token = getToken();

//     const headers = {
//       "Content-Type": "application/json",
//       ...(options.headers || {}),
//     };

//     if (token) {
//       headers.Authorization = `Bearer ${token}`;
//     }

//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       ...options,
//       headers,
//     });

//     let data = null;

//     try {
//       data = await response.json();
//     } catch {
//       data = null;
//     }

//     if (!response.ok) {
//       throw new Error(
//         data?.message ||
//           data?.error ||
//           `Request failed with status ${response.status}`
//       );
//     }

//     return data;
//   };

//   /*
//    * ---------------------------------------------------------
//    * GET ALL DEMOS
//    * GET /api/demos
//    * ---------------------------------------------------------
//    */
//   const fetchDemos = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const data = await apiRequest("/demos");

//       /*
//        * Supports:
//        * { demos: [] }
//        * { data: [] }
//        * []
//        */
//       const demoList = Array.isArray(data)
//         ? data
//         : data?.demos || data?.data || [];

//       setDemos(demoList);
//     } catch (err) {
//       console.error("Fetch demos error:", err);
//       setError(err.message || "Failed to load demos.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDemos();
//   }, []);

//   /*
//    * ---------------------------------------------------------
//    * FORM
//    * ---------------------------------------------------------
//    */
//   const resetForm = () => {
//     setForm(emptyForm);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   /*
//    * ---------------------------------------------------------
//    * DATE FORMAT
//    * ---------------------------------------------------------
//    */
//   const formatDate = (dateValue) => {
//     if (!dateValue) return "";

//     const selectedDate = new Date(`${dateValue}T00:00:00`);

//     const today = new Date();

//     const todayString =
//       today.getFullYear() +
//       "-" +
//       String(today.getMonth() + 1).padStart(2, "0") +
//       "-" +
//       String(today.getDate()).padStart(2, "0");

//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);

//     const tomorrowString =
//       tomorrow.getFullYear() +
//       "-" +
//       String(tomorrow.getMonth() + 1).padStart(2, "0") +
//       "-" +
//       String(tomorrow.getDate()).padStart(2, "0");

//     if (dateValue === todayString) {
//       return "Today";
//     }

//     if (dateValue === tomorrowString) {
//       return "Tomorrow";
//     }

//     return selectedDate.toLocaleDateString("en-IN", {
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const formatTime = (timeValue) => {
//     if (!timeValue) return "";

//     const [hours, minutes] = timeValue.split(":");

//     const hour = Number(hours);

//     const suffix = hour >= 12 ? "PM" : "AM";

//     const formattedHour = hour % 12 || 12;

//     return `${formattedHour}:${minutes} ${suffix}`;
//   };

//   /*
//    * ---------------------------------------------------------
//    * NORMALIZE BACKEND DEMO
//    * ---------------------------------------------------------
//    */
//   const normalizeDemo = (item) => {
//     const leadObject =
//       item.lead && typeof item.lead === "object" ? item.lead : null;

//     return {
//       ...item,

//       id: item._id || item.id,

//       leadId:
//         leadObject?._id ||
//         leadObject?.id ||
//         (typeof item.lead === "string" ? item.lead : ""),

//       lead:
//         leadObject?.companyName ||
//         leadObject?.name ||
//         leadObject?.company ||
//         item.leadName ||
//         (typeof item.lead === "string" ? item.lead : "Unknown Lead"),

//       contact:
//         leadObject?.contactPerson ||
//         leadObject?.contact ||
//         item.contact ||
//         item.contactPerson ||
//         "Lead Contact",

//       demoDate: item.demoDate
//         ? formatBackendDate(item.demoDate)
//         : item.date
//         ? formatBackendDate(item.date)
//         : "",

//       time:
//         item.demoTime ||
//         item.time ||
//         item.timeSlot ||
//         "",

//       demoType:
//         item.demoType ||
//         item.type ||
//         "Online",

//       meetingLink:
//         item.meetingLink ||
//         item.meetingUrl ||
//         "",

//       location: item.location || "",

//       participants:
//         Array.isArray(item.participants)
//           ? item.participants.join(", ")
//           : item.participants || "",

//       purpose: item.purpose || "",

//       requirements: item.requirements || "",

//       outcome: item.outcome || "",

//       nextAction: item.nextAction || "",

//       status: item.status || "Scheduled",
//     };
//   };

//   const formatBackendDate = (value) => {
//     if (!value) return "";

//     if (
//       typeof value === "string" &&
//       ["Today", "Tomorrow"].includes(value)
//     ) {
//       return value;
//     }

//     const date = new Date(value);

//     if (Number.isNaN(date.getTime())) {
//       return value;
//     }

//     const today = new Date();

//     const isToday =
//       date.getFullYear() === today.getFullYear() &&
//       date.getMonth() === today.getMonth() &&
//       date.getDate() === today.getDate();

//     if (isToday) {
//       return "Today";
//     }

//     const tomorrow = new Date();
//     tomorrow.setDate(today.getDate() + 1);

//     const isTomorrow =
//       date.getFullYear() === tomorrow.getFullYear() &&
//       date.getMonth() === tomorrow.getMonth() &&
//       date.getDate() === tomorrow.getDate();

//     if (isTomorrow) {
//       return "Tomorrow";
//     }

//     return date.toLocaleDateString("en-IN", {
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const normalizedDemos = demos.map(normalizeDemo);

//   /*
//    * ---------------------------------------------------------
//    * CREATE DEMO
//    * POST /api/demos
//    * ---------------------------------------------------------
//    */
//   const handleCreateDemo = async (e) => {
//     e.preventDefault();

//     if (!form.lead || !form.demoDate) {
//       setError("Lead and Demo Date are required.");
//       return;
//     }

//     try {
//       setSaving(true);
//       setError("");

//       /*
//        * Backend payload
//        */
//       const payload = {
//         lead: form.lead,
//         demoDate: form.demoDate,
//         demoTime: form.demoTime,
//         demoType: form.demoType,
//         meetingLink:
//           form.demoType === "Online" ? form.meetingLink : "",
//         location:
//           form.demoType === "Offline" ? form.location : "",
//         participants: form.participants,
//         purpose: form.purpose,
//         requirements: form.requirements,
//         outcome: form.outcome,
//         nextAction: form.nextAction,
//         status: form.status,
//       };

//       const data = await apiRequest("/demos", {
//         method: "POST",
//         body: JSON.stringify(payload),
//       });

//       const createdDemo =
//         data?.demo ||
//         data?.data ||
//         data;

//       if (createdDemo && typeof createdDemo === "object") {
//         setDemos((current) => [
//           createdDemo,
//           ...current,
//         ]);
//       } else {
//         await fetchDemos();
//       }

//       setFilter("All");
//       setSearch("");
//       setShowModal(false);
//       resetForm();
//     } catch (err) {
//       console.error("Create demo error:", err);
//       setError(err.message || "Failed to create demo.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   /*
//    * ---------------------------------------------------------
//    * COMPLETE DEMO
//    * PUT /api/demos/:id/complete
//    * ---------------------------------------------------------
//    */
//   const markCompleted = async (id) => {
//     try {
//       setCompletingId(id);
//       setError("");

//       const data = await apiRequest(
//         `/demos/${id}/complete`,
//         {
//           method: "PUT",
//         }
//       );

//       const updatedDemo =
//         data?.demo ||
//         data?.data ||
//         null;

//       if (updatedDemo) {
//         setDemos((current) =>
//           current.map((item) =>
//             (item._id || item.id) === id
//               ? updatedDemo
//               : item
//           )
//         );
//       } else {
//         setDemos((current) =>
//           current.map((item) =>
//             (item._id || item.id) === id
//               ? {
//                   ...item,
//                   status: "Completed",
//                 }
//               : item
//           )
//         );
//       }
//     } catch (err) {
//       console.error("Complete demo error:", err);
//       setError(err.message || "Failed to complete demo.");
//     } finally {
//       setCompletingId(null);
//     }
//   };

//   /*
//    * ---------------------------------------------------------
//    * RESCHEDULE
//    *
//    * Your backend does not currently have a reschedule API.
//    * So we only update the current UI here.
//    *
//    * When you add:
//    * PUT /api/demos/:id/reschedule
//    * we can connect this to DB.
//    * ---------------------------------------------------------
//    */
//   const handleReschedule = (id) => {
//     setDemos((current) =>
//       current.map((item) =>
//         (item._id || item.id) === id
//           ? {
//               ...item,
//               status: "Rescheduled",
//             }
//           : item
//       )
//     );
//   };

//   /*
//    * ---------------------------------------------------------
//    * FILTER + SEARCH
//    * ---------------------------------------------------------
//    */
//   const filteredDemos = normalizedDemos.filter((item) => {
//     const searchValue = search.toLowerCase().trim();

//     const matchesSearch =
//       item.lead?.toLowerCase().includes(searchValue) ||
//       item.contact?.toLowerCase().includes(searchValue) ||
//       item.demoType?.toLowerCase().includes(searchValue) ||
//       item.status?.toLowerCase().includes(searchValue) ||
//       item.purpose?.toLowerCase().includes(searchValue) ||
//       item.participants?.toLowerCase().includes(searchValue) ||
//       item.requirements?.toLowerCase().includes(searchValue);

//     const matchesFilter =
//       filter === "All" ||
//       (filter === "Today" &&
//         item.demoDate === "Today") ||
//       (filter === "Tomorrow" &&
//         item.demoDate === "Tomorrow") ||
//       (filter === "Scheduled" &&
//         item.status === "Scheduled") ||
//       (filter === "Completed" &&
//         item.status === "Completed") ||
//       (filter === "Cancelled" &&
//         item.status === "Cancelled") ||
//       (filter === "Rescheduled" &&
//         item.status === "Rescheduled");

//     return matchesSearch && matchesFilter;
//   });

//   /*
//    * ---------------------------------------------------------
//    * COUNTS
//    * ---------------------------------------------------------
//    */
//   const todayCount = normalizedDemos.filter(
//     (item) =>
//       item.demoDate === "Today" &&
//       item.status !== "Cancelled"
//   ).length;

//   const scheduledCount = normalizedDemos.filter(
//     (item) => item.status === "Scheduled"
//   ).length;

//   const completedCount = normalizedDemos.filter(
//     (item) => item.status === "Completed"
//   ).length;

//   /*
//    * ---------------------------------------------------------
//    * STATUS CLASS
//    * ---------------------------------------------------------
//    */
//   const getStatusClass = (status) => {
//     if (status === "Completed") {
//       return "bg-green-50 text-green-600";
//     }

//     if (status === "Cancelled") {
//       return "bg-red-50 text-red-600";
//     }

//     if (status === "Rescheduled") {
//       return "bg-orange-50 text-orange-600";
//     }

//     return "bg-indigo-50 text-indigo-600";
//   };

//   /*
//    * ---------------------------------------------------------
//    * UI
//    * ---------------------------------------------------------
//    */
//   return (
//     <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
//       <div className="flex min-h-screen w-full">
//         <Sidebar onNavigate={onNavigate} />

//         <main className="min-w-0 flex-1">
//           {/* HEADER */}
//           <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">
//             <div className="relative w-full max-w-[520px]">
//               <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8797]">
//                 <SearchIcon />
//               </div>

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search demos..."
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

//           {/* PAGE */}
//           <div className="w-full p-6 sm:p-8 lg:p-10">
//             <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
//               <div>
//                 <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                   Demos
//                 </h1>

//                 <p className="mt-1 text-sm text-[#94909d]">
//                   Manage your product demos and client presentations.
//                 </p>
//               </div>

//               <button
//                 onClick={() => {
//                   setError("");
//                   setShowModal(true);
//                 }}
//                 className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//               >
//                 <PlusIcon />
//                 Add Demo
//               </button>
//             </div>

//             {/* ERROR */}
//             {error && (
//               <div className="mt-5 flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                 <span>{error}</span>

//                 <button
//                   onClick={() => setError("")}
//                   className="font-bold"
//                 >
//                   ×
//                 </button>
//               </div>
//             )}

//             {/* STATS */}
//             <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Today's Demos
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {todayCount}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                     <CalendarIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Scheduled
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {scheduledCount}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
//                     <MonitorIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Completed
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {completedCount}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
//                     <CheckIcon />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* DEMO TABLE */}
//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Demo Schedule
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredDemos.length} demos displayed
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "All",
//                     "Today",
//                     "Tomorrow",
//                     "Scheduled",
//                     "Completed",
//                     "Cancelled",
//                     "Rescheduled",
//                   ].map((item) => (
//                     <button
//                       key={item}
//                       onClick={() => setFilter(item)}
//                       className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
//                         filter === item
//                           ? "bg-indigo-600 text-white"
//                           : "border border-[#e3dfeb] bg-white text-[#66626f] hover:bg-indigo-50 hover:text-indigo-600"
//                       }`}
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* LOADING */}
//               {loading ? (
//                 <div className="px-6 py-20 text-center">
//                   <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />

//                   <p className="mt-4 text-sm text-[#96929f]">
//                     Loading demos...
//                   </p>
//                 </div>
//               ) : filteredDemos.length === 0 ? (
//                 /* EMPTY */
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <MonitorIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No demos found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search or filter.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="divide-y divide-[#eeeaf4]">
//                   {filteredDemos.map((item) => (
//                     <div
//                       key={item.id}
//                       className="p-5 transition hover:bg-[#fcfbff]"
//                     >
//                       <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
//                         {/* DETAILS */}
//                         <div className="flex min-w-0 items-start gap-4">
//                           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                             {item.lead?.charAt(0)?.toUpperCase() || "D"}
//                           </div>

//                           <div className="min-w-0">
//                             <div className="flex flex-wrap items-center gap-2">
//                               <h3 className="text-sm font-bold text-[#292732]">
//                                 {item.lead}
//                               </h3>

//                               <span
//                                 className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusClass(
//                                   item.status
//                                 )}`}
//                               >
//                                 {item.status}
//                               </span>

//                               <span className="rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-semibold text-purple-600">
//                                 {item.demoType}
//                               </span>
//                             </div>

//                             <p className="mt-1 text-xs text-[#96929f]">
//                               {item.contact}
//                             </p>

//                             <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">
//                               <span className="flex items-center gap-1.5">
//                                 <CalendarIcon />

//                                 {item.demoDate}

//                                 {item.time && ` · ${item.time}`}
//                               </span>

//                               {item.demoType === "Online" &&
//                                 item.meetingLink && (
//                                   <a
//                                     href={item.meetingLink}
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="flex items-center gap-1.5 text-indigo-600 hover:underline"
//                                   >
//                                     <LinkIcon />
//                                     Meeting Link
//                                   </a>
//                                 )}

//                               {item.demoType === "Offline" &&
//                                 item.location && (
//                                   <span className="flex items-center gap-1.5">
//                                     <MapPinIcon />
//                                     {item.location}
//                                   </span>
//                                 )}
//                             </div>

//                             {item.participants && (
//                               <p className="mt-3 text-xs text-[#66626f]">
//                                 <span className="font-semibold">
//                                   Participants:
//                                 </span>{" "}
//                                 {item.participants}
//                               </p>
//                             )}

//                             {item.purpose && (
//                               <p className="mt-2 text-xs text-[#96929f]">
//                                 <span className="font-semibold text-[#66626f]">
//                                   Purpose:
//                                 </span>{" "}
//                                 {item.purpose}
//                               </p>
//                             )}

//                             {item.requirements && (
//                               <p className="mt-2 text-xs text-[#96929f]">
//                                 <span className="font-semibold text-[#66626f]">
//                                   Requirements:
//                                 </span>{" "}
//                                 {item.requirements}
//                               </p>
//                             )}

//                             {item.outcome && (
//                               <p className="mt-2 text-xs text-[#96929f]">
//                                 <span className="font-semibold text-[#66626f]">
//                                   Outcome:
//                                 </span>{" "}
//                                 {item.outcome}
//                               </p>
//                             )}

//                             {item.nextAction && (
//                               <p className="mt-2 text-xs text-[#96929f]">
//                                 <span className="font-semibold text-[#66626f]">
//                                   Next Action:
//                                 </span>{" "}
//                                 {item.nextAction}
//                               </p>
//                             )}
//                           </div>
//                         </div>

//                         {/* ACTIONS */}
//                         <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
//                           <button
//                             onClick={() => {
//                               if (item.leadId) {
//                                 onNavigate(
//                                   `/lead-details/${item.leadId}`
//                                 );
//                               } else {
//                                 onNavigate(
//                                   `/lead-details/${item.id}`
//                                 );
//                               }
//                             }}
//                             className="h-9 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                           >
//                             View Lead
//                           </button>

//                           {item.status === "Scheduled" && (
//                             <>
//                               <button
//                                 onClick={() =>
//                                   handleReschedule(item.id)
//                                 }
//                                 className="h-9 rounded-lg border border-orange-200 bg-orange-50 px-4 text-xs font-semibold text-orange-600 transition hover:bg-orange-100"
//                               >
//                                 Reschedule
//                               </button>

//                               <button
//                                 disabled={completingId === item.id}
//                                 onClick={() =>
//                                   markCompleted(item.id)
//                                 }
//                                 className="flex h-9 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
//                               >
//                                 {completingId === item.id ? (
//                                   <>
//                                     <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
//                                     Completing...
//                                   </>
//                                 ) : (
//                                   <>
//                                     <CheckIcon />
//                                     Complete
//                                   </>
//                                 )}
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* =====================================================
//           ADD DEMO MODAL
//       ===================================================== */}
//       {showModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
//             {/* MODAL HEADER */}
//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-[#272631]">
//                   Add Demo
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   Schedule a new demo for a lead.
//                 </p>
//               </div>

//               <button
//                 onClick={() => {
//                   setShowModal(false);
//                   resetForm();
//                 }}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             {/* FORM */}
//             <form onSubmit={handleCreateDemo}>
//               <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   {/* LEAD */}
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Lead <span className="text-red-500">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       name="lead"
//                       value={form.lead}
//                       onChange={handleChange}
//                       placeholder="Enter Lead ID"
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />

//                     <p className="mt-1 text-[10px] text-gray-400">
//                       Enter the Lead MongoDB ObjectId.
//                     </p>
//                   </div>

//                   {/* DATE */}
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Demo Date <span className="text-red-500">*</span>
//                     </label>

//                     <input
//                       type="date"
//                       name="demoDate"
//                       value={form.demoDate}
//                       onChange={handleChange}
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   {/* TIME */}
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Demo Time
//                     </label>

//                     <input
//                       type="time"
//                       name="demoTime"
//                       value={form.demoTime}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   {/* TYPE */}
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Demo Type
//                     </label>

//                     <select
//                       name="demoType"
//                       value={form.demoType}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option value="Online">Online</option>
//                       <option value="Offline">Offline</option>
//                     </select>
//                   </div>

//                   {/* ONLINE */}
//                   {form.demoType === "Online" ? (
//                     <div className="sm:col-span-2">
//                       <label className="text-xs font-semibold text-[#4e4a57]">
//                         Meeting Link
//                       </label>

//                       <input
//                         type="url"
//                         name="meetingLink"
//                         value={form.meetingLink}
//                         onChange={handleChange}
//                         placeholder="https://meet.google.com/..."
//                         className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                       />
//                     </div>
//                   ) : (
//                     <div className="sm:col-span-2">
//                       <label className="text-xs font-semibold text-[#4e4a57]">
//                         Location
//                       </label>

//                       <input
//                         type="text"
//                         name="location"
//                         value={form.location}
//                         onChange={handleChange}
//                         placeholder="Enter demo location"
//                         className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                       />
//                     </div>
//                   )}

//                   {/* PARTICIPANTS */}
//                   <div className="sm:col-span-2">
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Participants
//                     </label>

//                     <input
//                       type="text"
//                       name="participants"
//                       value={form.participants}
//                       onChange={handleChange}
//                       placeholder="e.g. Rahul Mehta, Sarah K."
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   {/* PURPOSE */}
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Purpose
//                     </label>

//                     <input
//                       type="text"
//                       name="purpose"
//                       value={form.purpose}
//                       onChange={handleChange}
//                       placeholder="Purpose of demo"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   {/* STATUS */}
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Status
//                     </label>

//                     <select
//                       name="status"
//                       value={form.status}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option value="Scheduled">
//                         Scheduled
//                       </option>

//                       <option value="Completed">
//                         Completed
//                       </option>

//                       <option value="Cancelled">
//                         Cancelled
//                       </option>

//                       <option value="Rescheduled">
//                         Rescheduled
//                       </option>
//                     </select>
//                   </div>

//                   {/* REQUIREMENTS */}
//                   <div className="sm:col-span-2">
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Requirements
//                     </label>

//                     <textarea
//                       name="requirements"
//                       value={form.requirements}
//                       onChange={handleChange}
//                       placeholder="Enter client requirements..."
//                       rows="3"
//                       className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   {/* OUTCOME */}
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Outcome
//                     </label>

//                     <textarea
//                       name="outcome"
//                       value={form.outcome}
//                       onChange={handleChange}
//                       placeholder="Enter demo outcome..."
//                       rows="3"
//                       className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   {/* NEXT ACTION */}
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Next Action
//                     </label>

//                     <textarea
//                       name="nextAction"
//                       value={form.nextAction}
//                       onChange={handleChange}
//                       placeholder="Enter next action..."
//                       rows="3"
//                       className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* FOOTER */}
//               <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowModal(false);
//                     resetForm();
//                   }}
//                   disabled={saving}
//                   className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50 disabled:opacity-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {saving && (
//                     <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
//                   )}

//                   {saving ? "Creating..." : "Create Demo"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Demos;


































import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";

// Change this only if your backend uses another URL.
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getToken = () => {
  return (
    localStorage.getItem("token") ||
    localStorage.getItem("accessToken") ||
    localStorage.getItem("authToken")
  );
};

const emptyForm = {
  lead: "",
  demoDate: "",
  demoTime: "",
  demoType: "Online",
  meetingLink: "",
  location: "",
  participants: "",
  purpose: "",
  requirements: "",
  outcome: "",
  nextAction: "",
  status: "Scheduled",
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

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
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
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
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

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l2-2a5 5 0 0 0-7.07-7.07l-1.14 1.14" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-2 2a5 5 0 0 0 7.07 7.07l1.14-1.14" />
    </svg>
  );
}

function Demos({ onNavigate }) {
  const [demos, setDemos] = useState([]);
  const [leads, setLeads] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [completingId, setCompletingId] = useState(null);
  const [error, setError] = useState("");
  const [form, setForm] = useState(emptyForm);

  // ---------------------------------------------------------
  // API HELPER
  // ---------------------------------------------------------

  const apiRequest = async (endpoint, options = {}) => {
    const token = getToken();

    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    let data = null;

    try {
      data = await response.json();
    } catch {
      data = null;
    }

    if (!response.ok) {
      throw new Error(
        data?.message ||
          data?.error ||
          `Request failed with status ${response.status}`
      );
    }

    return data;
  };

  // ---------------------------------------------------------
  // GET ALL DEMOS
  // GET /api/demos
  // ---------------------------------------------------------

  const fetchDemos = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await apiRequest("/demos");

      const demoList = Array.isArray(data)
        ? data
        : data?.demos || data?.data || [];

      setDemos(demoList);
    } catch (err) {
      console.error("Fetch demos error:", err);
      setError(err.message || "Failed to load demos.");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------------------------
  // GET ALL LEADS
  // GET /api/leads
  // ---------------------------------------------------------

  const fetchLeads = async () => {
    try {
      const data = await apiRequest("/leads");

      const leadList = Array.isArray(data)
        ? data
        : data?.leads || data?.data || [];

      setLeads(leadList);

      console.log("Leads loaded:", leadList);
    } catch (err) {
      console.error("Fetch leads error:", err);
      setError(err.message || "Failed to load leads.");
    }
  };

  useEffect(() => {
    fetchDemos();
    fetchLeads();
  }, []);

  // ---------------------------------------------------------
  // FORM
  // ---------------------------------------------------------

  const resetForm = () => {
    setForm(emptyForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // ---------------------------------------------------------
  // DATE FORMAT
  // ---------------------------------------------------------

  const formatDate = (dateValue) => {
    if (!dateValue) return "";

    const selectedDate = new Date(`${dateValue}T00:00:00`);

    const today = new Date();

    const todayString =
      today.getFullYear() +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0");

    const tomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + 1);

    const tomorrowString =
      tomorrow.getFullYear() +
      "-" +
      String(tomorrow.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(tomorrow.getDate()).padStart(2, "0");

    if (dateValue === todayString) {
      return "Today";
    }

    if (dateValue === tomorrowString) {
      return "Tomorrow";
    }

    return selectedDate.toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timeValue) => {
    if (!timeValue) return "";

    const [hours, minutes] = timeValue.split(":");

    const hour = Number(hours);

    const suffix = hour >= 12 ? "PM" : "AM";

    const formattedHour = hour % 12 || 12;

    return `${formattedHour}:${minutes} ${suffix}`;
  };

  // ---------------------------------------------------------
  // NORMALIZE BACKEND DEMO
  // ---------------------------------------------------------

  const formatBackendDate = (value) => {
    if (!value) return "";

    if (
      typeof value === "string" &&
      ["Today", "Tomorrow"].includes(value)
    ) {
      return value;
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    const today = new Date();

    const isToday =
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate();

    if (isToday) {
      return "Today";
    }

    const tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);

    const isTomorrow =
      date.getFullYear() === tomorrow.getFullYear() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getDate() === tomorrow.getDate();

    if (isTomorrow) {
      return "Tomorrow";
    }

    return date.toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
    });
  };

  const normalizeDemo = (item) => {
    const leadObject =
      item.lead && typeof item.lead === "object"
        ? item.lead
        : null;

    return {
      ...item,

      id: item._id || item.id,

      leadId:
        leadObject?._id ||
        leadObject?.id ||
        (typeof item.lead === "string" ? item.lead : ""),

      lead:
        leadObject?.companyName ||
        leadObject?.name ||
        leadObject?.company ||
        item.leadName ||
        (typeof item.lead === "string"
          ? item.lead
          : "Unknown Lead"),

      contact:
        leadObject?.contactPerson ||
        leadObject?.contact ||
        item.contact ||
        item.contactPerson ||
        "Lead Contact",

      demoDate: item.demoDate
        ? formatBackendDate(item.demoDate)
        : item.date
        ? formatBackendDate(item.date)
        : "",

      time:
        item.demoTime ||
        item.time ||
        item.timeSlot ||
        "",

      demoType:
        item.demoType ||
        item.type ||
        "Online",

      meetingLink:
        item.meetingLink ||
        item.meetingUrl ||
        "",

      location: item.location || "",

      participants:
        Array.isArray(item.participants)
          ? item.participants.join(", ")
          : item.participants || "",

      purpose: item.purpose || "",

      requirements: item.requirements || "",

      outcome: item.outcome || "",

      nextAction: item.nextAction || "",

      status: item.status || "Scheduled",
    };
  };

  const normalizedDemos = demos.map(normalizeDemo);

  // ---------------------------------------------------------
  // CREATE DEMO
  // POST /api/demos
  // ---------------------------------------------------------

  const handleCreateDemo = async (e) => {
    e.preventDefault();

    if (!form.lead || !form.demoDate) {
      setError("Lead and Demo Date are required.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const payload = {
        lead: form.lead,

        demoDate: form.demoDate,

        demoTime: form.demoTime,

        demoType: form.demoType,

        meetingLink:
          form.demoType === "Online"
            ? form.meetingLink
            : "",

        location:
          form.demoType === "Offline"
            ? form.location
            : "",

        participants: form.participants,

        purpose: form.purpose,

        requirements: form.requirements,

        outcome: form.outcome,

        nextAction: form.nextAction,

        status: form.status,
      };

      console.log("Create Demo Payload:", payload);

      const data = await apiRequest("/demos", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const createdDemo =
        data?.demo ||
        data?.data ||
        data;

      if (
        createdDemo &&
        typeof createdDemo === "object"
      ) {
        setDemos((current) => [
          createdDemo,
          ...current,
        ]);
      } else {
        await fetchDemos();
      }

      setFilter("All");
      setSearch("");
      setShowModal(false);
      resetForm();
    } catch (err) {
      console.error("Create demo error:", err);
      setError(
        err.message || "Failed to create demo."
      );
    } finally {
      setSaving(false);
    }
  };

  // ---------------------------------------------------------
  // COMPLETE DEMO
  // PUT /api/demos/:id/complete
  // ---------------------------------------------------------

  const markCompleted = async (id) => {
    try {
      setCompletingId(id);
      setError("");

      const data = await apiRequest(
        `/demos/${id}/complete`,
        {
          method: "PUT",
        }
      );

      const updatedDemo =
        data?.demo ||
        data?.data ||
        null;

      if (updatedDemo) {
        setDemos((current) =>
          current.map((item) =>
            (item._id || item.id) === id
              ? updatedDemo
              : item
          )
        );
      } else {
        setDemos((current) =>
          current.map((item) =>
            (item._id || item.id) === id
              ? {
                  ...item,
                  status: "Completed",
                }
              : item
          )
        );
      }
    } catch (err) {
      console.error("Complete demo error:", err);
      setError(
        err.message || "Failed to complete demo."
      );
    } finally {
      setCompletingId(null);
    }
  };

  // ---------------------------------------------------------
  // RESCHEDULE
  // ---------------------------------------------------------

  const handleReschedule = (id) => {
    setDemos((current) =>
      current.map((item) =>
        (item._id || item.id) === id
          ? {
              ...item,
              status: "Rescheduled",
            }
          : item
      )
    );
  };

  // ---------------------------------------------------------
  // FILTER + SEARCH
  // ---------------------------------------------------------

  const filteredDemos = normalizedDemos.filter(
    (item) => {
      const searchValue = search
        .toLowerCase()
        .trim();

      const matchesSearch =
        item.lead
          ?.toLowerCase()
          .includes(searchValue) ||
        item.contact
          ?.toLowerCase()
          .includes(searchValue) ||
        item.demoType
          ?.toLowerCase()
          .includes(searchValue) ||
        item.status
          ?.toLowerCase()
          .includes(searchValue) ||
        item.purpose
          ?.toLowerCase()
          .includes(searchValue) ||
        item.participants
          ?.toLowerCase()
          .includes(searchValue) ||
        item.requirements
          ?.toLowerCase()
          .includes(searchValue);

      const matchesFilter =
        filter === "All" ||
        (filter === "Today" &&
          item.demoDate === "Today") ||
        (filter === "Tomorrow" &&
          item.demoDate === "Tomorrow") ||
        (filter === "Scheduled" &&
          item.status === "Scheduled") ||
        (filter === "Completed" &&
          item.status === "Completed") ||
        (filter === "Cancelled" &&
          item.status === "Cancelled") ||
        (filter === "Rescheduled" &&
          item.status === "Rescheduled");

      return matchesSearch && matchesFilter;
    }
  );

  // ---------------------------------------------------------
  // COUNTS
  // ---------------------------------------------------------

  const todayCount = normalizedDemos.filter(
    (item) =>
      item.demoDate === "Today" &&
      item.status !== "Cancelled"
  ).length;

  const scheduledCount = normalizedDemos.filter(
    (item) => item.status === "Scheduled"
  ).length;

  const completedCount = normalizedDemos.filter(
    (item) => item.status === "Completed"
  ).length;

  // ---------------------------------------------------------
  // STATUS CLASS
  // ---------------------------------------------------------

  const getStatusClass = (status) => {
    if (status === "Completed") {
      return "bg-green-50 text-green-600";
    }

    if (status === "Cancelled") {
      return "bg-red-50 text-red-600";
    }

    if (status === "Rescheduled") {
      return "bg-orange-50 text-orange-600";
    }

    return "bg-indigo-50 text-indigo-600";
  };

  // ---------------------------------------------------------
  // UI
  // ---------------------------------------------------------

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
                placeholder="Search demos..."
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

          {/* PAGE */}

          <div className="w-full p-6 sm:p-8 lg:p-10">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                  Demos
                </h1>

                <p className="mt-1 text-sm text-[#94909d]">
                  Manage your product demos and client presentations.
                </p>

              </div>

              <button
                onClick={() => {
                  setError("");
                  setShowModal(true);
                }}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >

                <PlusIcon />

                Add Demo

              </button>

            </div>

            {/* ERROR */}

            {error && (
              <div className="mt-5 flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">

                <span>{error}</span>

                <button
                  onClick={() => setError("")}
                  className="font-bold"
                >
                  ×
                </button>

              </div>
            )}

            {/* STATS */}

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-medium text-[#96929f]">
                      Today's Demos
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {todayCount}
                    </p>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <CalendarIcon />
                  </div>

                </div>

              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-medium text-[#96929f]">
                      Scheduled
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {scheduledCount}
                    </p>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <MonitorIcon />
                  </div>

                </div>

              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-medium text-[#96929f]">
                      Completed
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {completedCount}
                    </p>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <CheckIcon />
                  </div>

                </div>

              </div>

            </div>

            {/* DEMO TABLE */}

            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">

              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h2 className="text-base font-semibold text-[#272631]">
                    Demo Schedule
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {filteredDemos.length} demos displayed
                  </p>

                </div>

                <div className="flex flex-wrap gap-2">

                  {[
                    "All",
                    "Today",
                    "Tomorrow",
                    "Scheduled",
                    "Completed",
                    "Cancelled",
                    "Rescheduled",
                  ].map((item) => (

                    <button
                      key={item}
                      onClick={() => setFilter(item)}
                      className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                        filter === item
                          ? "bg-indigo-600 text-white"
                          : "border border-[#e3dfeb] bg-white text-[#66626f] hover:bg-indigo-50 hover:text-indigo-600"
                      }`}
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>

              {/* LOADING */}

              {loading ? (

                <div className="px-6 py-20 text-center">

                  <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />

                  <p className="mt-4 text-sm text-[#96929f]">
                    Loading demos...
                  </p>

                </div>

              ) : filteredDemos.length === 0 ? (

                /* EMPTY */

                <div className="px-6 py-16 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <MonitorIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    No demos found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    Try changing your search or filter.
                  </p>

                </div>

              ) : (

                <div className="divide-y divide-[#eeeaf4]">

                  {filteredDemos.map((item) => (

                    <div
                      key={item.id}
                      className="p-5 transition hover:bg-[#fcfbff]"
                    >

                      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                        {/* DETAILS */}

                        <div className="flex min-w-0 items-start gap-4">

                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
                            {item.lead?.charAt(0)?.toUpperCase() || "D"}
                          </div>

                          <div className="min-w-0">

                            <div className="flex flex-wrap items-center gap-2">

                              <h3 className="text-sm font-bold text-[#292732]">
                                {item.lead}
                              </h3>

                              <span
                                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusClass(
                                  item.status
                                )}`}
                              >
                                {item.status}
                              </span>

                              <span className="rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-semibold text-purple-600">
                                {item.demoType}
                              </span>

                            </div>

                            <p className="mt-1 text-xs text-[#96929f]">
                              {item.contact}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">

                              <span className="flex items-center gap-1.5">

                                <CalendarIcon />

                                {item.demoDate}

                                {item.time &&
                                  ` · ${item.time}`}

                              </span>

                              {item.demoType === "Online" &&
                                item.meetingLink && (

                                  <a
                                    href={item.meetingLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1.5 text-indigo-600 hover:underline"
                                  >

                                    <LinkIcon />

                                    Meeting Link

                                  </a>

                                )}

                              {item.demoType === "Offline" &&
                                item.location && (

                                  <span className="flex items-center gap-1.5">

                                    <MapPinIcon />

                                    {item.location}

                                  </span>

                                )}

                            </div>

                            {item.participants && (

                              <p className="mt-3 text-xs text-[#66626f]">

                                <span className="font-semibold">
                                  Participants:
                                </span>{" "}

                                {item.participants}

                              </p>

                            )}

                            {item.purpose && (

                              <p className="mt-2 text-xs text-[#96929f]">

                                <span className="font-semibold text-[#66626f]">
                                  Purpose:
                                </span>{" "}

                                {item.purpose}

                              </p>

                            )}

                            {item.requirements && (

                              <p className="mt-2 text-xs text-[#96929f]">

                                <span className="font-semibold text-[#66626f]">
                                  Requirements:
                                </span>{" "}

                                {item.requirements}

                              </p>

                            )}

                            {item.outcome && (

                              <p className="mt-2 text-xs text-[#96929f]">

                                <span className="font-semibold text-[#66626f]">
                                  Outcome:
                                </span>{" "}

                                {item.outcome}

                              </p>

                            )}

                            {item.nextAction && (

                              <p className="mt-2 text-xs text-[#96929f]">

                                <span className="font-semibold text-[#66626f]">
                                  Next Action:
                                </span>{" "}

                                {item.nextAction}

                              </p>

                            )}

                          </div>

                        </div>

                        {/* ACTIONS */}

                        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">

                          <button
                            onClick={() => {

                              if (item.leadId) {

                                onNavigate(
                                  `/lead-details/${item.leadId}`
                                );

                              } else {

                                onNavigate(
                                  `/lead-details/${item.id}`
                                );

                              }

                            }}
                            className="h-9 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                          >
                            View Lead
                          </button>

                          {item.status === "Scheduled" && (

                            <>

                              <button
                                onClick={() =>
                                  handleReschedule(item.id)
                                }
                                className="h-9 rounded-lg border border-orange-200 bg-orange-50 px-4 text-xs font-semibold text-orange-600 transition hover:bg-orange-100"
                              >
                                Reschedule
                              </button>

                              <button
                                disabled={
                                  completingId === item.id
                                }
                                onClick={() =>
                                  markCompleted(item.id)
                                }
                                className="flex h-9 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                              >

                                {completingId === item.id ? (

                                  <>

                                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />

                                    Completing...

                                  </>

                                ) : (

                                  <>

                                    <CheckIcon />

                                    Complete

                                  </>

                                )}

                              </button>

                            </>

                          )}

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </div>

          </div>

        </main>

      </div>

      {/* =====================================================
          ADD DEMO MODAL
      ===================================================== */}

      {showModal && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

          <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* MODAL HEADER */}

            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">

              <div>

                <h2 className="text-lg font-bold text-[#272631]">
                  Add Demo
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  Schedule a new demo for a lead.
                </p>

              </div>

              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
              >
                <XIcon />
              </button>

            </div>

            {/* FORM */}

            <form onSubmit={handleCreateDemo}>

              <div className="max-h-[70vh] overflow-y-auto px-6 py-6">

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* LEAD - ONLY THIS FIELD CHANGED */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Lead{" "}
                      <span className="text-red-500">
                        *
                      </span>
                    </label>

                    <select
                      name="lead"
                      value={form.lead}
                      onChange={handleChange}
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >

                      <option value="">
                        Select Lead
                      </option>

                      {leads.map((lead) => (

                        <option
                          key={lead._id}
                          value={lead._id}
                        >
                          {lead.companyName ||
                            lead.contactPerson ||
                            lead.name ||
                            lead.company ||
                            "Unnamed Lead"}
                        </option>

                      ))}

                    </select>

                    <p className="mt-1 text-[10px] text-gray-400">
                      Select a lead for this demo.
                    </p>

                  </div>

                  {/* DATE */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Demo Date{" "}
                      <span className="text-red-500">
                        *
                      </span>
                    </label>

                    <input
                      type="date"
                      name="demoDate"
                      value={form.demoDate}
                      onChange={handleChange}
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                  {/* TIME */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Demo Time
                    </label>

                    <input
                      type="time"
                      name="demoTime"
                      value={form.demoTime}
                      onChange={handleChange}
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                  {/* TYPE */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Demo Type
                    </label>

                    <select
                      name="demoType"
                      value={form.demoType}
                      onChange={handleChange}
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >

                      <option value="Online">
                        Online
                      </option>

                      <option value="Offline">
                        Offline
                      </option>

                    </select>

                  </div>

                  {/* ONLINE */}

                  {form.demoType === "Online" ? (

                    <div className="sm:col-span-2">

                      <label className="text-xs font-semibold text-[#4e4a57]">
                        Meeting Link
                      </label>

                      <input
                        type="url"
                        name="meetingLink"
                        value={form.meetingLink}
                        onChange={handleChange}
                        placeholder="https://meet.google.com/..."
                        className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                      />

                    </div>

                  ) : (

                    <div className="sm:col-span-2">

                      <label className="text-xs font-semibold text-[#4e4a57]">
                        Location
                      </label>

                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Enter demo location"
                        className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                      />

                    </div>

                  )}

                  {/* PARTICIPANTS */}

                  <div className="sm:col-span-2">

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Participants
                    </label>

                    <input
                      type="text"
                      name="participants"
                      value={form.participants}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Mehta, Sarah K."
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                  {/* PURPOSE */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Purpose
                    </label>

                    <input
                      type="text"
                      name="purpose"
                      value={form.purpose}
                      onChange={handleChange}
                      placeholder="Purpose of demo"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                  {/* STATUS */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Status
                    </label>

                    <select
                      name="status"
                      value={form.status}
                      onChange={handleChange}
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >

                      <option value="Scheduled">
                        Scheduled
                      </option>

                      <option value="Completed">
                        Completed
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>

                      <option value="Rescheduled">
                        Rescheduled
                      </option>

                    </select>

                  </div>

                  {/* REQUIREMENTS */}

                  <div className="sm:col-span-2">

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Requirements
                    </label>

                    <textarea
                      name="requirements"
                      value={form.requirements}
                      onChange={handleChange}
                      placeholder="Enter client requirements..."
                      rows="3"
                      className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                  {/* OUTCOME */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Outcome
                    </label>

                    <textarea
                      name="outcome"
                      value={form.outcome}
                      onChange={handleChange}
                      placeholder="Enter demo outcome..."
                      rows="3"
                      className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                  {/* NEXT ACTION */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Next Action
                    </label>

                    <textarea
                      name="nextAction"
                      value={form.nextAction}
                      onChange={handleChange}
                      placeholder="Enter next action..."
                      rows="3"
                      className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                </div>

              </div>

              {/* FOOTER */}

              <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">

                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  disabled={saving}
                  className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {saving && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  )}

                  {saving
                    ? "Creating..."
                    : "Create Demo"}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Demos;
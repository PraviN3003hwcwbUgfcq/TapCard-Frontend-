
// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const initialProductions = [
//   {
//     id: 1,
//     order: "ORD-1001",
//     card: "Premium Business Card",
//     quantity: 100,
//     status: "Pending",
//     productionStartDate: "",
//     productionCompletedDate: "",
//     remarks: "Waiting for production approval.",
//   },
//   {
//     id: 2,
//     order: "ORD-1002",
//     card: "Digital Business Card",
//     quantity: 50,
//     status: "In Production",
//     productionStartDate: "2026-08-30",
//     productionCompletedDate: "",
//     remarks: "Cards are currently being printed.",
//   },
//   {
//     id: 3,
//     order: "ORD-1003",
//     card: "Premium NFC Card",
//     quantity: 200,
//     status: "Production Completed",
//     productionStartDate: "2026-08-25",
//     productionCompletedDate: "2026-08-29",
//     remarks: "Production completed successfully.",
//   },
//   {
//     id: 4,
//     order: "ORD-1004",
//     card: "Standard Business Card",
//     quantity: 75,
//     status: "On Hold",
//     productionStartDate: "2026-08-28",
//     productionCompletedDate: "",
//     remarks: "On hold due to card design changes.",
//   },
//   {
//     id: 5,
//     order: "ORD-1005",
//     card: "Premium Business Card",
//     quantity: 150,
//     status: "Cancelled",
//     productionStartDate: "",
//     productionCompletedDate: "",
//     remarks: "Production cancelled by client.",
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

// function PackageIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-5 w-5"
//     >
//       <path d="m21 8-9 5-9-5 9-5 9 5Z" />
//       <path d="M3 8v8l9 5 9-5V8" />
//       <path d="M12 13v8" />
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
//       className="h-5 w-5"
//     >
//       <circle cx="12" cy="12" r="9" />
//       <path d="M12 7v5l3 2" />
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

// function Production({ onNavigate }) {
//   const [productions, setProductions] = useState(initialProductions);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [showModal, setShowModal] = useState(false);

//   const [form, setForm] = useState({
//     order: "",
//     card: "",
//     quantity: "",
//     status: "Pending",
//     productionStartDate: "",
//     productionCompletedDate: "",
//     remarks: "",
//   });

//   const resetForm = () => {
//     setForm({
//       order: "",
//       card: "",
//       quantity: "",
//       status: "Pending",
//       productionStartDate: "",
//       productionCompletedDate: "",
//       remarks: "",
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
//     if (!dateValue) return "Not set";

//     const date = new Date(`${dateValue}T00:00:00`);

//     return date.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   const handleCreateProduction = (e) => {
//     e.preventDefault();

//     if (!form.order || !form.quantity) {
//       return;
//     }

//     const newProduction = {
//       id: Date.now(),
//       order: form.order,
//       card: form.card || "Not specified",
//       quantity: Number(form.quantity),
//       status: form.status,
//       productionStartDate: form.productionStartDate,
//       productionCompletedDate: form.productionCompletedDate,
//       remarks: form.remarks || "No remarks added.",
//     };

//     setProductions((current) => [newProduction, ...current]);

//     setFilter("All");
//     setSearch("");
//     setShowModal(false);

//     resetForm();
//   };

//   const updateStatus = (id, status) => {
//     setProductions((current) =>
//       current.map((item) => {
//         if (item.id !== id) return item;

//         const updatedItem = {
//           ...item,
//           status,
//         };

//         if (
//           status === "In Production" &&
//           !updatedItem.productionStartDate
//         ) {
//           updatedItem.productionStartDate = new Date()
//             .toISOString()
//             .split("T")[0];
//         }

//         if (status === "Production Completed") {
//           if (!updatedItem.productionStartDate) {
//             updatedItem.productionStartDate = new Date()
//               .toISOString()
//               .split("T")[0];
//           }

//           updatedItem.productionCompletedDate = new Date()
//             .toISOString()
//             .split("T")[0];
//         }

//         return updatedItem;
//       })
//     );
//   };

//   const filteredProductions = productions.filter((item) => {
//     const searchValue = search.toLowerCase();

//     const matchesSearch =
//       item.order.toLowerCase().includes(searchValue) ||
//       item.card.toLowerCase().includes(searchValue) ||
//       item.status.toLowerCase().includes(searchValue) ||
//       item.remarks.toLowerCase().includes(searchValue);

//     const matchesFilter =
//       filter === "All" || item.status === filter;

//     return matchesSearch && matchesFilter;
//   });

//   const pendingCount = productions.filter(
//     (item) => item.status === "Pending"
//   ).length;

//   const inProductionCount = productions.filter(
//     (item) => item.status === "In Production"
//   ).length;

//   const completedCount = productions.filter(
//     (item) => item.status === "Production Completed"
//   ).length;

//   const totalQuantity = productions.reduce(
//     (total, item) => total + Number(item.quantity || 0),
//     0
//   );

//   const getStatusClass = (status) => {
//     switch (status) {
//       case "Pending":
//         return "bg-orange-50 text-orange-600";

//       case "In Production":
//         return "bg-indigo-50 text-indigo-600";

//       case "Production Completed":
//         return "bg-green-50 text-green-600";

//       case "On Hold":
//         return "bg-yellow-50 text-yellow-600";

//       case "Cancelled":
//         return "bg-red-50 text-red-600";

//       default:
//         return "bg-gray-50 text-gray-600";
//     }
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
//                 placeholder="Search production..."
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
//                   Production
//                 </h1>

//                 <p className="mt-1 text-sm text-[#94909d]">
//                   Manage production orders and track manufacturing progress.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowModal(true)}
//                 className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//               >
//                 <PlusIcon />
//                 Add Production
//               </button>
//             </div>

//             <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Total Quantity
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {totalQuantity}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                     <PackageIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Pending
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {pendingCount}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
//                     <ClockIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       In Production
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {inProductionCount}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                     <PackageIcon />
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
//                     Production Schedule
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredProductions.length} production records displayed
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "All",
//                     "Pending",
//                     "In Production",
//                     "Production Completed",
//                     "On Hold",
//                     "Cancelled",
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

//               {filteredProductions.length === 0 ? (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <PackageIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No production records found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search or filter.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="divide-y divide-[#eeeaf4]">
//                   {filteredProductions.map((item) => (
//                     <div
//                       key={item.id}
//                       className="p-5 transition hover:bg-[#fcfbff]"
//                     >
//                       <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
//                         <div className="flex min-w-0 items-start gap-4">
//                           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                             <PackageIcon />
//                           </div>

//                           <div className="min-w-0">
//                             <div className="flex flex-wrap items-center gap-2">
//                               <h3 className="text-sm font-bold text-[#292732]">
//                                 {item.order}
//                               </h3>

//                               <span
//                                 className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusClass(
//                                   item.status
//                                 )}`}
//                               >
//                                 {item.status}
//                               </span>
//                             </div>

//                             <p className="mt-1 text-xs text-[#96929f]">
//                               {item.card}
//                             </p>

//                             <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">
//                               <span>
//                                 Quantity:{" "}
//                                 <strong className="font-semibold text-[#4e4a57]">
//                                   {item.quantity}
//                                 </strong>
//                               </span>

//                               <span>
//                                 Start:{" "}
//                                 {formatDate(item.productionStartDate)}
//                               </span>

//                               <span>
//                                 Completed:{" "}
//                                 {formatDate(item.productionCompletedDate)}
//                               </span>
//                             </div>

//                             <p className="mt-3 text-xs text-[#96929f]">
//                               {item.remarks}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
//                           {item.status === "Pending" && (
//                             <button
//                               onClick={() =>
//                                 updateStatus(item.id, "In Production")
//                               }
//                               className="flex h-9 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition hover:bg-indigo-700"
//                             >
//                               Start Production
//                             </button>
//                           )}

//                           {item.status === "In Production" && (
//                             <button
//                               onClick={() =>
//                                 updateStatus(
//                                   item.id,
//                                   "Production Completed"
//                                 )
//                               }
//                               className="flex h-9 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 text-xs font-semibold text-white transition hover:bg-green-700"
//                             >
//                               <CheckIcon />
//                               Complete
//                             </button>
//                           )}

//                           {(item.status === "Pending" ||
//                             item.status === "In Production") && (
//                             <button
//                               onClick={() =>
//                                 updateStatus(item.id, "On Hold")
//                               }
//                               className="h-9 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-yellow-200 hover:bg-yellow-50 hover:text-yellow-600"
//                             >
//                               Hold
//                             </button>
//                           )}

//                           {item.status === "On Hold" && (
//                             <button
//                               onClick={() =>
//                                 updateStatus(item.id, "In Production")
//                               }
//                               className="h-9 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition hover:bg-indigo-700"
//                             >
//                               Resume
//                             </button>
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
//           <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-[#272631]">
//                   Add Production
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   Create a new production record.
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

//             <form onSubmit={handleCreateProduction}>
//               <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Order *
//                     </label>

//                     <input
//                       type="text"
//                       name="order"
//                       value={form.order}
//                       onChange={handleChange}
//                       placeholder="e.g. ORD-1001"
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Card
//                     </label>

//                     <input
//                       type="text"
//                       name="card"
//                       value={form.card}
//                       onChange={handleChange}
//                       placeholder="e.g. Premium Business Card"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Quantity *
//                     </label>

//                     <input
//                       type="number"
//                       name="quantity"
//                       value={form.quantity}
//                       onChange={handleChange}
//                       placeholder="Enter quantity"
//                       min="1"
//                       required
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
//                       <option value="Pending">Pending</option>
//                       <option value="In Production">
//                         In Production
//                       </option>
//                       <option value="Production Completed">
//                         Production Completed
//                       </option>
//                       <option value="On Hold">On Hold</option>
//                       <option value="Cancelled">Cancelled</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Production Start Date
//                     </label>

//                     <input
//                       type="date"
//                       name="productionStartDate"
//                       value={form.productionStartDate}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Production Completed Date
//                     </label>

//                     <input
//                       type="date"
//                       name="productionCompletedDate"
//                       value={form.productionCompletedDate}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div className="sm:col-span-2">
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Remarks
//                     </label>

//                     <textarea
//                       name="remarks"
//                       value={form.remarks}
//                       onChange={handleChange}
//                       placeholder="Add production remarks..."
//                       rows="4"
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
//                   Create Production
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Production;























import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") ||
      localStorage.getItem("accessToken") ||
      localStorage.getItem("authToken") ||
      sessionStorage.getItem("token") ||
      sessionStorage.getItem("accessToken") ||
      sessionStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

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

function PackageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="m21 8-9 5-9-5 9-5 9 5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
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
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
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

function Production({ onNavigate }) {
  const [productions, setProductions] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cards, setCards] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);


  

  const [form, setForm] = useState({
    order: "",
    card: "",
    quantity: "",
    status: "Pending",
    productionStartDate: "",
    productionCompletedDate: "",
    remarks: "",
  });

  const resetForm = () => {
    setForm({
      order: "",
      card: "",
      quantity: "",
      status: "Pending",
      productionStartDate: "",
      productionCompletedDate: "",
      remarks: "",
    });
  };

  // =========================================================
  // GET ALL PRODUCTIONS
  // =========================================================

  const fetchProductions = async () => {
    try {
      const response = await api.get("/productions");

      const data = response.data?.productions || [];

      setProductions(
        data.map((item) => ({
          id: item._id,

          order:
            item.order?.orderNumber ||
            item.order?.orderNo ||
            item.order?.number ||
            item.order?._id ||
            "Not specified",

          card:
            item.card?.fullName ||
            item.card?.company ||
            item.card?.name ||
            item.card?._id ||
            "Not specified",

          quantity: item.quantity,

          status: item.status,

          productionStartDate: item.productionStartDate
            ? new Date(item.productionStartDate)
                .toISOString()
                .split("T")[0]
            : "",

          productionCompletedDate:
            item.productionCompletedDate
              ? new Date(item.productionCompletedDate)
                  .toISOString()
                  .split("T")[0]
              : "",

          remarks:
            item.remarks || "No remarks added.",

          orderId: item.order?._id || item.order,

          cardId: item.card?._id || item.card,

          createdBy: item.createdBy,
        }))
      );
    } catch (error) {
      console.error("GET PRODUCTIONS ERROR:", error);

      alert(
        error.response?.data?.message ||
          "Failed to load productions"
      );
    }
  };

  // =========================================================
  // GET ORDERS
  // =========================================================

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders");

      const data =
        response.data?.orders ||
        response.data?.data ||
        [];

      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("GET ORDERS ERROR:", error);

      setOrders([]);
    }
  };

  // =========================================================
  // GET CARDS
  // =========================================================

const fetchCards = async () => {
  try {
    const response = await api.get("/cards/all");

    console.log("CARDS API RESPONSE:", response.data);

    const data =
      response.data?.cards ||
      response.data?.data ||
      [];

    console.log("CARDS DATA:", data);

    setCards(Array.isArray(data) ? data : []);
  } catch (error) {
    console.error("GET CARDS ERROR:", error);
    console.error("ERROR RESPONSE:", error.response?.data);

    setCards([]);
  }
};
  // =========================================================
  // LOAD DATA
  // =========================================================

  useEffect(() => {
    fetchProductions();
    fetchOrders();
    fetchCards();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return "Not set";

    const date = new Date(`${dateValue}T00:00:00`);

    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // =========================================================
  // FIND ORDER ID
  // =========================================================

  const findOrderId = (orderValue) => {
    if (!orderValue) return null;

    const trimmedValue = orderValue.trim();

    const foundOrder = orders.find((order) => {
      const orderNumber =
        order.orderNumber ||
        order.orderNo ||
        order.number ||
        "";

      return (
        String(orderNumber).toLowerCase() ===
          trimmedValue.toLowerCase() ||
        String(order._id) === trimmedValue
      );
    });

    return foundOrder?._id || null;
  };

  // =========================================================
  // FIND CARD ID
  // =========================================================

  const findCardId = (cardValue) => {
    if (!cardValue) return null;

    const trimmedValue = cardValue.trim();

    const foundCard = cards.find((card) => {
      const cardName =
        card.fullName ||
        card.company ||
        card.name ||
        "";

      return (
        String(cardName).toLowerCase() ===
          trimmedValue.toLowerCase() ||
        String(card._id) === trimmedValue
      );
    });

    return foundCard?._id || null;
  };

  // =========================================================
  // CREATE PRODUCTION
  // =========================================================

  const handleCreateProduction = async (e) => {
    e.preventDefault();

    if (!form.order || !form.quantity) {
      return;
    }

    try {
      const orderId = findOrderId(form.order);

      if (!orderId) {
        alert(
          "Order not found. Please enter a valid Order Number."
        );
        return;
      }

      const cardId = findCardId(form.card);

      if (form.card && !cardId) {
        alert(
          "Card not found. Please enter a valid Card name or Card ID."
        );
        return;
      }

      const payload = {
        order: orderId,
        quantity: Number(form.quantity),
        remarks:
          form.remarks || "No remarks added.",
      };

      if (cardId) {
        payload.card = cardId;
      }

      const response = await api.post(
        "/productions",
        payload
      );

      if (!response.data?.success) {
        alert(
          response.data?.message ||
            "Failed to create production"
        );
        return;
      }

      let createdProduction =
        response.data.production;

      // =====================================================
      // IF USER SELECTED A STATUS OTHER THAN PENDING
      // =====================================================

      if (
        form.status &&
        form.status !== "Pending"
      ) {
        const statusResponse = await api.put(
          `/productions/${createdProduction._id}/status`,
          {
            status: form.status,
            remarks:
              form.remarks ||
              "No remarks added.",
          }
        );

        if (statusResponse.data?.success) {
          createdProduction =
            statusResponse.data.production;
        }
      }

      setFilter("All");
      setSearch("");
      setShowModal(false);

      resetForm();

      await fetchProductions();

      console.log(
        "PRODUCTION CREATED:",
        createdProduction
      );
    } catch (error) {
      console.error(
        "CREATE PRODUCTION ERROR:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to create production"
      );
    }
  };

  // =========================================================
  // UPDATE STATUS
  // =========================================================

  const updateStatus = async (id, status) => {
    try {
      const currentProduction =
        productions.find(
          (item) => item.id === id
        );

      const response = await api.put(
        `/productions/${id}/status`,
        {
          status,
          remarks:
            currentProduction?.remarks ||
            undefined,
        }
      );

      if (!response.data?.success) {
        alert(
          response.data?.message ||
            "Failed to update production status"
        );
        return;
      }

      const updatedProduction =
        response.data.production;

      setProductions((current) =>
        current.map((item) => {
          if (item.id !== id) {
            return item;
          }

          return {
            ...item,

            status: updatedProduction.status,

            productionStartDate:
              updatedProduction.productionStartDate
                ? new Date(
                    updatedProduction.productionStartDate
                  )
                    .toISOString()
                    .split("T")[0]
                : item.productionStartDate,

            productionCompletedDate:
              updatedProduction.productionCompletedDate
                ? new Date(
                    updatedProduction.productionCompletedDate
                  )
                    .toISOString()
                    .split("T")[0]
                : item.productionCompletedDate,

            remarks:
              updatedProduction.remarks ||
              item.remarks,
          };
        })
      );
    } catch (error) {
      console.error(
        "UPDATE PRODUCTION STATUS ERROR:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to update production status"
      );
    }
  };

  // =========================================================
  // SEARCH + FILTER
  // =========================================================

  const filteredProductions = productions.filter(
    (item) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        item.order
          .toLowerCase()
          .includes(searchValue) ||
        item.card
          .toLowerCase()
          .includes(searchValue) ||
        item.status
          .toLowerCase()
          .includes(searchValue) ||
        item.remarks
          .toLowerCase()
          .includes(searchValue);

      const matchesFilter =
        filter === "All" ||
        item.status === filter;

      return matchesSearch && matchesFilter;
    }
  );

  const pendingCount = productions.filter(
    (item) => item.status === "Pending"
  ).length;

  const inProductionCount = productions.filter(
    (item) => item.status === "In Production"
  ).length;

  const completedCount = productions.filter(
    (item) =>
      item.status === "Production Completed"
  ).length;

  const totalQuantity = productions.reduce(
    (total, item) =>
      total + Number(item.quantity || 0),
    0
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-orange-50 text-orange-600";

      case "In Production":
        return "bg-indigo-50 text-indigo-600";

      case "Production Completed":
        return "bg-green-50 text-green-600";

      case "On Hold":
        return "bg-yellow-50 text-yellow-600";

      case "Cancelled":
        return "bg-red-50 text-red-600";

      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
      <div className="flex min-h-screen w-full">
        <Sidebar onNavigate={onNavigate} />

        <main className="min-w-0 flex-1">
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
                placeholder="Search production..."
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
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                  Production
                </h1>

                <p className="mt-1 text-sm text-[#94909d]">
                  Manage production orders and track manufacturing progress.
                </p>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                <PlusIcon />
                Add Production
              </button>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      Total Quantity
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {totalQuantity}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <PackageIcon />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      Pending
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {pendingCount}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <ClockIcon />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      In Production
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {inProductionCount}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <PackageIcon />
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

            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#272631]">
                    Production Schedule
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {filteredProductions.length} production records displayed
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "All",
                    "Pending",
                    "In Production",
                    "Production Completed",
                    "On Hold",
                    "Cancelled",
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

              {filteredProductions.length === 0 ? (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <PackageIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    No production records found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    Try changing your search or filter.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#eeeaf4]">
                  {filteredProductions.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 transition hover:bg-[#fcfbff]"
                    >
                      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                        <div className="flex min-w-0 items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <PackageIcon />
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm font-bold text-[#292732]">
                                {item.order}
                              </h3>

                              <span
                                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusClass(
                                  item.status
                                )}`}
                              >
                                {item.status}
                              </span>
                            </div>

                            <p className="mt-1 text-xs text-[#96929f]">
                              {item.card}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">
                              <span>
                                Quantity:{" "}
                                <strong className="font-semibold text-[#4e4a57]">
                                  {item.quantity}
                                </strong>
                              </span>

                              <span>
                                Start:{" "}
                                {formatDate(
                                  item.productionStartDate
                                )}
                              </span>

                              <span>
                                Completed:{" "}
                                {formatDate(
                                  item.productionCompletedDate
                                )}
                              </span>
                            </div>

                            <p className="mt-3 text-xs text-[#96929f]">
                              {item.remarks}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
                          {item.status === "Pending" && (
                            <button
                              onClick={() =>
                                updateStatus(
                                  item.id,
                                  "In Production"
                                )
                              }
                              className="flex h-9 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition hover:bg-indigo-700"
                            >
                              Start Production
                            </button>
                          )}

                          {item.status === "In Production" && (
                            <button
                              onClick={() =>
                                updateStatus(
                                  item.id,
                                  "Production Completed"
                                )
                              }
                              className="flex h-9 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 text-xs font-semibold text-white transition hover:bg-green-700"
                            >
                              <CheckIcon />
                              Complete
                            </button>
                          )}

                          {(item.status === "Pending" ||
                            item.status === "In Production") && (
                            <button
                              onClick={() =>
                                updateStatus(
                                  item.id,
                                  "On Hold"
                                )
                              }
                              className="h-9 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-yellow-200 hover:bg-yellow-50 hover:text-yellow-600"
                            >
                              Hold
                            </button>
                          )}

                          {item.status === "On Hold" && (
                            <button
                              onClick={() =>
                                updateStatus(
                                  item.id,
                                  "In Production"
                                )
                              }
                              className="h-9 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition hover:bg-indigo-700"
                            >
                              Resume
                            </button>
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

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
              <div>
                <h2 className="text-lg font-bold text-[#272631]">
                  Add Production
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  Create a new production record.
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

            <form onSubmit={handleCreateProduction}>
              <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Order *
                    </label>

                    <select
  name="order"
  value={form.order}
  onChange={handleChange}
  required
  className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
>
  <option value="">Select Order</option>

  {orders.map((order) => (
    <option key={order._id} value={order._id}>
      {order.orderNumber}
    </option>
  ))}
</select>
                  </div>

                  <div>
  <label className="text-xs font-semibold text-[#4e4a57]">
    Card
  </label>

  <select
    name="card"
    value={form.card}
    onChange={handleChange}
    className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
  >
    <option value="">Select Card</option>

    {cards.map((card) => (
      <option key={card._id} value={card._id}>
        {card.fullName}
      </option>
    ))}
  </select>
</div>

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Quantity *
                    </label>

                    <input
                      type="number"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="Enter quantity"
                      min="1"
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

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
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="In Production">
                        In Production
                      </option>

                      <option value="Production Completed">
                        Production Completed
                      </option>

                      <option value="On Hold">
                        On Hold
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Production Start Date
                    </label>

                    <input
                      type="date"
                      name="productionStartDate"
                      value={
                        form.productionStartDate
                      }
                      onChange={handleChange}
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Production Completed Date
                    </label>

                    <input
                      type="date"
                      name="productionCompletedDate"
                      value={
                        form.productionCompletedDate
                      }
                      onChange={handleChange}
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Remarks
                    </label>

                    <textarea
                      name="remarks"
                      value={form.remarks}
                      onChange={handleChange}
                      placeholder="Add production remarks..."
                      rows="4"
                      className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Create Production
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Production;
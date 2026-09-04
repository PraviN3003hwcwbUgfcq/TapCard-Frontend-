
// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const initialQuotations = [
//   {
//     id: 1,
//     quotationNo: "QT-2026-001",
//     company: "Metro Realty",
//     contact: "Rahul Mehta",
//     phone: "+91 98765 43210",
//     date: "Aug 28, 2026",
//     validUntil: "Sep 7, 2026",
//     assigned: "Sarah K.",
//     status: "Sent",
//     items: [
//       { name: "Premium NFC Cards", quantity: 100, price: 25 },
//       { name: "QR Business Cards", quantity: 50, price: 15 },
//     ],
//     discount: 100,
//     tax: 18,
//   },
//   {
//     id: 2,
//     quotationNo: "QT-2026-002",
//     company: "Sharma Dental Care",
//     contact: "Dr. A. Sharma",
//     phone: "+91 98765 12345",
//     date: "Aug 27, 2026",
//     validUntil: "Sep 6, 2026",
//     assigned: "Rahul M.",
//     status: "Accepted",
//     items: [
//       { name: "Premium NFC Cards", quantity: 50, price: 25 },
//       { name: "Digital Profile Setup", quantity: 1, price: 1200 },
//     ],
//     discount: 0,
//     tax: 18,
//   },
//   {
//     id: 3,
//     quotationNo: "QT-2026-003",
//     company: "The Urban Table",
//     contact: "Amit Kapoor",
//     phone: "+91 99887 66554",
//     date: "Aug 26, 2026",
//     validUntil: "Sep 5, 2026",
//     assigned: "Sarah K.",
//     status: "Draft",
//     items: [
//       { name: "Premium NFC Cards", quantity: 200, price: 22 },
//     ],
//     discount: 200,
//     tax: 18,
//   },
//   {
//     id: 4,
//     quotationNo: "QT-2026-004",
//     company: "Prime Properties",
//     contact: "Neha Shah",
//     phone: "+91 91234 56789",
//     date: "Aug 25, 2026",
//     validUntil: "Sep 4, 2026",
//     assigned: "Rahul M.",
//     status: "Rejected",
//     items: [
//       { name: "Premium NFC Cards", quantity: 100, price: 25 },
//       { name: "Custom Design", quantity: 1, price: 800 },
//     ],
//     discount: 100,
//     tax: 18,
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

// function FileIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-5 w-5"
//     >
//       <path d="M6 3h9l4 4v14H6z" />
//       <path d="M14 3v5h5M9 13h6M9 17h6" />
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

// function SendIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="m22 2-7 20-4-9-9-4Z" />
//       <path d="M22 2 11 13" />
//     </svg>
//   );
// }

// function TrashIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3" />
//     </svg>
//   );
// }

// function calculateSubtotal(items) {
//   return items.reduce(
//     (total, item) =>
//       total + Number(item.quantity || 0) * Number(item.price || 0),
//     0
//   );
// }

// function calculateTotal(quotation) {
//   const subtotal = calculateSubtotal(quotation.items);
//   const discount = Number(quotation.discount || 0);
//   const taxableAmount = Math.max(subtotal - discount, 0);
//   const taxAmount = (taxableAmount * Number(quotation.tax || 0)) / 100;

//   return {
//     subtotal,
//     discount,
//     taxAmount,
//     total: taxableAmount + taxAmount,
//   };
// }

// function formatCurrency(value) {
//   return `₹${Number(value || 0).toLocaleString("en-IN", {
//     maximumFractionDigits: 2,
//   })}`;
// }

// function getTodayDate() {
//   const date = new Date();

//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");

//   return `${year}-${month}-${day}`;
// }

// function formatDisplayDate(value) {
//   if (!value) return "";

//   const date = new Date(`${value}T00:00:00`);

//   return date.toLocaleDateString("en-IN", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });
// }

// function AppInput({ name, value, onChange, placeholder, type = "text", required }) {
//   return (
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       required={required}
//       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//     />
//   );
// }

// function Quotations({ onNavigate }) {
//   const [quotations, setQuotations] = useState(initialQuotations);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [showModal, setShowModal] = useState(false);
//   const [viewQuotation, setViewQuotation] = useState(null);

//   const [form, setForm] = useState({
//     company: "",
//     contact: "",
//     phone: "",
//     date: getTodayDate(),
//     validUntil: "",
//     assigned: "",
//     tax: 18,
//     discount: 0,
//     items: [
//       {
//         name: "",
//         quantity: 1,
//         price: "",
//       },
//     ],
//   });

//   const resetForm = () => {
//     setForm({
//       company: "",
//       contact: "",
//       phone: "",
//       date: getTodayDate(),
//       validUntil: "",
//       assigned: "",
//       tax: 18,
//       discount: 0,
//       items: [
//         {
//           name: "",
//           quantity: 1,
//           price: "",
//         },
//       ],
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   const handleItemChange = (index, field, value) => {
//     setForm((current) => {
//       const updatedItems = [...current.items];

//       updatedItems[index] = {
//         ...updatedItems[index],
//         [field]: value,
//       };

//       return {
//         ...current,
//         items: updatedItems,
//       };
//     });
//   };

//   const addItem = () => {
//     setForm((current) => ({
//       ...current,
//       items: [
//         ...current.items,
//         {
//           name: "",
//           quantity: 1,
//           price: "",
//         },
//       ],
//     }));
//   };

//   const removeItem = (index) => {
//     if (form.items.length === 1) return;

//     setForm((current) => ({
//       ...current,
//       items: current.items.filter((_, itemIndex) => itemIndex !== index),
//     }));
//   };

//   const handleCreateQuotation = (e) => {
//     e.preventDefault();

//     const validItems = form.items.filter(
//       (item) =>
//         item.name.trim() &&
//         Number(item.quantity) > 0 &&
//         Number(item.price) >= 0
//     );

//     if (
//       !form.company ||
//       !form.contact ||
//       !form.date ||
//       !form.validUntil ||
//       !form.assigned ||
//       validItems.length === 0
//     ) {
//       return;
//     }

//     const nextNumber = quotations.length + 1;

//     const newQuotation = {
//       id: Date.now(),
//       quotationNo: `QT-2026-${String(nextNumber).padStart(3, "0")}`,
//       company: form.company,
//       contact: form.contact,
//       phone: form.phone || "Not provided",
//       date: formatDisplayDate(form.date),
//       validUntil: formatDisplayDate(form.validUntil),
//       assigned: form.assigned,
//       status: "Draft",
//       items: validItems.map((item) => ({
//         name: item.name,
//         quantity: Number(item.quantity),
//         price: Number(item.price),
//       })),
//       discount: Number(form.discount || 0),
//       tax: Number(form.tax || 0),
//     };

//     setQuotations((current) => [newQuotation, ...current]);
//     setFilter("All");
//     setSearch("");
//     setShowModal(false);
//     resetForm();
//   };

//   const updateStatus = (id, status) => {
//     setQuotations((current) =>
//       current.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               status,
//             }
//           : item
//       )
//     );

//     setViewQuotation((current) =>
//       current && current.id === id
//         ? {
//             ...current,
//             status,
//           }
//         : current
//     );
//   };

//   const deleteQuotation = (id) => {
//     setQuotations((current) =>
//       current.filter((quotation) => quotation.id !== id)
//     );

//     if (viewQuotation?.id === id) {
//       setViewQuotation(null);
//     }
//   };

//   const filteredQuotations = quotations.filter((quotation) => {
//     const searchValue = search.toLowerCase();

//     const matchesSearch =
//       quotation.quotationNo.toLowerCase().includes(searchValue) ||
//       quotation.company.toLowerCase().includes(searchValue) ||
//       quotation.contact.toLowerCase().includes(searchValue) ||
//       quotation.assigned.toLowerCase().includes(searchValue);

//     const matchesFilter =
//       filter === "All" || quotation.status === filter;

//     return matchesSearch && matchesFilter;
//   });

//   const draftCount = quotations.filter(
//     (item) => item.status === "Draft"
//   ).length;

//   const sentCount = quotations.filter(
//     (item) => item.status === "Sent"
//   ).length;

//   const acceptedCount = quotations.filter(
//     (item) => item.status === "Accepted"
//   ).length;

//   const rejectedCount = quotations.filter(
//     (item) => item.status === "Rejected"
//   ).length;

//   const formSubtotal = calculateSubtotal(form.items);

//   const formTaxableAmount = Math.max(
//     formSubtotal - Number(form.discount || 0),
//     0
//   );

//   const formTaxAmount =
//     (formTaxableAmount * Number(form.tax || 0)) / 100;

//   const formGrandTotal = formTaxableAmount + formTaxAmount;

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
//                 placeholder="Search quotations..."
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
//                 <h1 className="mt-1 text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                   Quotations
//                 </h1>

//                 <p className="mt-1 text-sm text-[#94909d]">
//                   Create, manage, and track customer quotations.
//                 </p>
//               </div>

//               <button
//                 onClick={() => {
//                   resetForm();
//                   setShowModal(true);
//                 }}
//                 className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//               >
//                 <PlusIcon />
//                 Add Quotation
//               </button>
//             </div>

//             <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <p className="text-xs font-medium text-[#96929f]">
//                   Draft
//                 </p>

//                 <div className="mt-2 flex items-center justify-between">
//                   <p className="text-2xl font-bold text-[#272631]">
//                     {draftCount}
//                   </p>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
//                     <FileIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <p className="text-xs font-medium text-[#96929f]">
//                   Sent
//                 </p>

//                 <div className="mt-2 flex items-center justify-between">
//                   <p className="text-2xl font-bold text-[#272631]">
//                     {sentCount}
//                   </p>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                     <SendIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <p className="text-xs font-medium text-[#96929f]">
//                   Accepted
//                 </p>

//                 <div className="mt-2 flex items-center justify-between">
//                   <p className="text-2xl font-bold text-[#272631]">
//                     {acceptedCount}
//                   </p>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
//                     <CheckIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <p className="text-xs font-medium text-[#96929f]">
//                   Rejected
//                 </p>

//                 <div className="mt-2 flex items-center justify-between">
//                   <p className="text-2xl font-bold text-[#272631]">
//                     {rejectedCount}
//                   </p>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
//                     <XIcon />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Quotation List
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredQuotations.length} quotations displayed
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "All",
//                     "Draft",
//                     "Sent",
//                     "Accepted",
//                     "Rejected",
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

//               {filteredQuotations.length === 0 ? (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <FileIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No quotations found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search or filter.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="divide-y divide-[#eeeaf4]">
//                   {filteredQuotations.map((quotation) => {
//                     const totals = calculateTotal(quotation);

//                     return (
//                       <div
//                         key={quotation.id}
//                         className="p-5 transition hover:bg-[#fcfbff]"
//                       >
//                         <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
//                           <div className="flex min-w-0 items-start gap-4">
//                             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                               {quotation.company.charAt(0)}
//                             </div>

//                             <div className="min-w-0">
//                               <div className="flex flex-wrap items-center gap-2">
//                                 <h3 className="text-sm font-bold text-[#292732]">
//                                   {quotation.company}
//                                 </h3>

//                                 <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-600">
//                                   {quotation.quotationNo}
//                                 </span>

//                                 <span
//                                   className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
//                                     quotation.status === "Accepted"
//                                       ? "bg-green-50 text-green-600"
//                                       : quotation.status === "Rejected"
//                                       ? "bg-red-50 text-red-600"
//                                       : quotation.status === "Sent"
//                                       ? "bg-blue-50 text-blue-600"
//                                       : "bg-orange-50 text-orange-600"
//                                   }`}
//                                 >
//                                   {quotation.status}
//                                 </span>
//                               </div>

//                               <p className="mt-1 text-xs text-[#96929f]">
//                                 {quotation.contact}
//                               </p>

//                               <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#66626f]">
//                                 <span>
//                                   Date: {quotation.date}
//                                 </span>

//                                 <span>
//                                   Valid until: {quotation.validUntil}
//                                 </span>

//                                 <span>
//                                   {quotation.items.length} item
//                                   {quotation.items.length !== 1 ? "s" : ""}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//                             <div className="text-left sm:text-right">
//                               <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                                 Total
//                               </p>

//                               <p className="mt-1 text-base font-bold text-[#292732]">
//                                 {formatCurrency(totals.total)}
//                               </p>

//                               <p className="mt-1 text-[10px] text-[#96929f]">
//                                 Assigned to {quotation.assigned}
//                               </p>
//                             </div>

//                             <button
//                               onClick={() => setViewQuotation(quotation)}
//                               className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                             >
//                               <EyeIcon />
//                               View
//                             </button>

//                             {quotation.status === "Draft" && (
//                               <button
//                                 onClick={() =>
//                                   updateStatus(quotation.id, "Sent")
//                                 }
//                                 className="flex h-9 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition hover:bg-indigo-700"
//                               >
//                                 <SendIcon />
//                                 Send
//                               </button>
//                             )}

//                             {quotation.status === "Sent" && (
//                               <button
//                                 onClick={() =>
//                                   updateStatus(
//                                     quotation.id,
//                                     "Accepted"
//                                   )
//                                 }
//                                 className="flex h-9 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 text-xs font-semibold text-white transition hover:bg-green-700"
//                               >
//                                 <CheckIcon />
//                                 Accept
//                               </button>
//                             )}

//                             <button
//                               onClick={() =>
//                                 deleteQuotation(quotation.id)
//                               }
//                               className="flex h-9 items-center justify-center gap-2 rounded-lg border border-red-100 px-3 text-xs font-semibold text-red-500 transition hover:bg-red-50"
//                             >
//                               <TrashIcon />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
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
//                   Add Quotation
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   Create a quotation for your customer.
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

//             <form onSubmit={handleCreateQuotation}>
//               <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Company *
//                     </label>

//                     <AppInput
//                       name="company"
//                       value={form.company}
//                       onChange={handleChange}
//                       placeholder="e.g. Metro Realty"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Contact Person *
//                     </label>

//                     <AppInput
//                       name="contact"
//                       value={form.contact}
//                       onChange={handleChange}
//                       placeholder="e.g. Rahul Mehta"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Phone
//                     </label>

//                     <AppInput
//                       name="phone"
//                       value={form.phone}
//                       onChange={handleChange}
//                       placeholder="+91 98765 43210"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Assigned To *
//                     </label>

//                     <AppInput
//                       name="assigned"
//                       value={form.assigned}
//                       onChange={handleChange}
//                       placeholder="Enter team member name"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Quotation Date *
//                     </label>

//                     <AppInput
//                       type="date"
//                       name="date"
//                       value={form.date}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Valid Until *
//                     </label>

//                     <AppInput
//                       type="date"
//                       name="validUntil"
//                       value={form.validUntil}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-7">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="text-sm font-bold text-[#272631]">
//                         Quotation Items
//                       </h3>

//                       <p className="mt-1 text-xs text-[#96929f]">
//                         Add products or services to this quotation.
//                       </p>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={addItem}
//                       className="flex h-9 items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-3 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100"
//                     >
//                       <PlusIcon />
//                       Add Item
//                     </button>
//                   </div>

//                   <div className="mt-4 space-y-3">
//                     {form.items.map((item, index) => (
//                       <div
//                         key={index}
//                         className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4"
//                       >
//                         <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_110px_140px_auto] md:items-end">
//                           <div>
//                             <label className="text-xs font-semibold text-[#4e4a57]">
//                               Item / Service *
//                             </label>

//                             <input
//                               type="text"
//                               value={item.name}
//                               onChange={(e) =>
//                                 handleItemChange(
//                                   index,
//                                   "name",
//                                   e.target.value
//                                 )
//                               }
//                               placeholder="e.g. Premium NFC Cards"
//                               required
//                               className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-xs font-semibold text-[#4e4a57]">
//                               Qty *
//                             </label>

//                             <input
//                               type="number"
//                               min="1"
//                               value={item.quantity}
//                               onChange={(e) =>
//                                 handleItemChange(
//                                   index,
//                                   "quantity",
//                                   e.target.value
//                                 )
//                               }
//                               required
//                               className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-xs font-semibold text-[#4e4a57]">
//                               Unit Price *
//                             </label>

//                             <input
//                               type="number"
//                               min="0"
//                               step="0.01"
//                               value={item.price}
//                               onChange={(e) =>
//                                 handleItemChange(
//                                   index,
//                                   "price",
//                                   e.target.value
//                                 )
//                               }
//                               placeholder="₹0"
//                               required
//                               className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                             />
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(index)}
//                             disabled={form.items.length === 1}
//                             className="h-10 rounded-lg border border-red-100 px-3 text-xs font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-30"
//                           >
//                             Remove
//                           </button>
//                         </div>

//                         <div className="mt-3 text-right text-xs text-[#66626f]">
//                           Item Total:{" "}
//                           <span className="font-bold text-[#292732]">
//                             {formatCurrency(
//                               Number(item.quantity || 0) *
//                                 Number(item.price || 0)
//                             )}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Discount
//                     </label>

//                     <input
//                       type="number"
//                       min="0"
//                       step="0.01"
//                       name="discount"
//                       value={form.discount}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Tax (%)
//                     </label>

//                     <input
//                       type="number"
//                       min="0"
//                       step="0.01"
//                       name="tax"
//                       value={form.tax}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div className="rounded-lg bg-indigo-50 p-3">
//                     <p className="text-xs font-medium text-[#777384]">
//                       Grand Total
//                     </p>

//                     <p className="mt-1 text-lg font-bold text-indigo-600">
//                       {formatCurrency(formGrandTotal)}
//                     </p>
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
//                   Create Quotation
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {viewQuotation && (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-start justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
//                   Quotation
//                 </p>

//                 <h2 className="mt-1 text-xl font-bold text-[#272631]">
//                   {viewQuotation.quotationNo}
//                 </h2>

//                 <p className="mt-1 text-sm text-[#96929f]">
//                   {viewQuotation.company}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setViewQuotation(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                 <div>
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Customer
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#292732]">
//                     {viewQuotation.contact}
//                   </p>

//                   <p className="mt-1 text-xs text-[#777384]">
//                     {viewQuotation.phone}
//                   </p>
//                 </div>

//                 <div className="sm:text-right">
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Status
//                   </p>

//                   <span
//                     className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
//                       viewQuotation.status === "Accepted"
//                         ? "bg-green-50 text-green-600"
//                         : viewQuotation.status === "Rejected"
//                         ? "bg-red-50 text-red-600"
//                         : viewQuotation.status === "Sent"
//                         ? "bg-blue-50 text-blue-600"
//                         : "bg-orange-50 text-orange-600"
//                     }`}
//                   >
//                     {viewQuotation.status}
//                   </span>
//                 </div>

//                 <div>
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Quotation Date
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#292732]">
//                     {viewQuotation.date}
//                   </p>
//                 </div>

//                 <div className="sm:text-right">
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Valid Until
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#292732]">
//                     {viewQuotation.validUntil}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed]">
//                 <div className="grid grid-cols-[1fr_70px_110px_110px] bg-[#f8f6fc] px-4 py-3 text-[10px] font-semibold uppercase tracking-wide text-[#777384]">
//                   <span>Item</span>
//                   <span className="text-center">Qty</span>
//                   <span className="text-right">Price</span>
//                   <span className="text-right">Total</span>
//                 </div>

//                 <div className="divide-y divide-[#eeeaf4]">
//                   {viewQuotation.items.map((item, index) => (
//                     <div
//                       key={index}
//                       className="grid grid-cols-[1fr_70px_110px_110px] px-4 py-3 text-xs"
//                     >
//                       <span className="font-medium text-[#292732]">
//                         {item.name}
//                       </span>

//                       <span className="text-center text-[#66626f]">
//                         {item.quantity}
//                       </span>

//                       <span className="text-right text-[#66626f]">
//                         {formatCurrency(item.price)}
//                       </span>

//                       <span className="text-right font-semibold text-[#292732]">
//                         {formatCurrency(
//                           item.quantity * item.price
//                         )}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {(() => {
//                 const totals = calculateTotal(viewQuotation);

//                 return (
//                   <div className="mt-5 ml-auto w-full max-w-xs space-y-2 text-sm">
//                     <div className="flex justify-between text-[#777384]">
//                       <span>Subtotal</span>
//                       <span>{formatCurrency(totals.subtotal)}</span>
//                     </div>

//                     <div className="flex justify-between text-[#777384]">
//                       <span>Discount</span>
//                       <span>
//                         - {formatCurrency(totals.discount)}
//                       </span>
//                     </div>

//                     <div className="flex justify-between text-[#777384]">
//                       <span>
//                         Tax ({viewQuotation.tax}%)
//                       </span>
//                       <span>
//                         {formatCurrency(totals.taxAmount)}
//                       </span>
//                     </div>

//                     <div className="border-t border-[#e5e1ed] pt-3">
//                       <div className="flex justify-between">
//                         <span className="font-bold text-[#292732]">
//                           Grand Total
//                         </span>

//                         <span className="font-bold text-indigo-600">
//                           {formatCurrency(totals.total)}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })()}

//               <div className="mt-6 rounded-xl bg-[#fcfbff] p-4">
//                 <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                   Assigned To
//                 </p>

//                 <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
//                   {viewQuotation.assigned}
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
//               {viewQuotation.status === "Draft" && (
//                 <button
//                   onClick={() =>
//                     updateStatus(viewQuotation.id, "Sent")
//                   }
//                   className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
//                 >
//                   <SendIcon />
//                   Mark as Sent
//                 </button>
//               )}

//               {viewQuotation.status === "Sent" && (
//                 <>
//                   <button
//                     onClick={() =>
//                       updateStatus(viewQuotation.id, "Accepted")
//                     }
//                     className="flex h-10 items-center gap-2 rounded-lg bg-green-600 px-4 text-sm font-semibold text-white transition hover:bg-green-700"
//                   >
//                     <CheckIcon />
//                     Accept
//                   </button>

//                   <button
//                     onClick={() =>
//                       updateStatus(viewQuotation.id, "Rejected")
//                     }
//                     className="h-10 rounded-lg border border-red-200 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-50"
//                   >
//                     Reject
//                   </button>
//                 </>
//               )}

//               <button
//                 onClick={() => setViewQuotation(null)}
//                 className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Quotations;




























import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

function getAuthHeaders() {
  const token =
    localStorage.getItem("token") ||
    localStorage.getItem("authToken") ||
    localStorage.getItem("accessToken");

  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

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

function FileIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
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

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function calculateSubtotal(items = []) {
  return items.reduce(
    (total, item) =>
      total +
      Number(item.quantity || 0) * Number(item.unitPrice ?? item.price ?? 0),
    0
  );
}

function formatCurrency(value) {
  return `₹${Number(value || 0).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
}

function getTodayDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDisplayDate(value) {
  if (!value) return "";

  const date = new Date(
    typeof value === "string" && value.length === 10
      ? `${value}T00:00:00`
      : value
  );

  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function AppInput({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
    />
  );
}

function Quotations({ onNavigate }) {
  const [quotations, setQuotations] = useState([]);
  const [leads, setLeads] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [viewQuotation, setViewQuotation] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    lead: "",
    quotationNumber: "",
    quotationDate: getTodayDate(),
    validUntil: "",
    discount: 0,
    tax: 0,
    notes: "",
    items: [
      {
        productName: "",
        description: "",
        quantity: 1,
        unitPrice: "",
      },
    ],
  });

  // ---------------------------------------------------------
  // FETCH QUOTATIONS
  // ---------------------------------------------------------

  const fetchQuotations = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/quotations`, {
        method: "GET",
        headers: getAuthHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch quotations");
      }

      setQuotations(data.quotations || []);
    } catch (err) {
      console.error("Fetch quotations error:", err);
      setError(err.message || "Unable to load quotations");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------------------------
  // FETCH LEADS
  // ---------------------------------------------------------

  const fetchLeads = async () => {
    try {
      setLoadingLeads(true);

      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: "GET",
        headers: getAuthHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch leads");
      }

      setLeads(data.leads || []);
    } catch (err) {
      console.error("Fetch leads error:", err);
      setError(err.message || "Unable to load leads");
    } finally {
      setLoadingLeads(false);
    }
  };

  useEffect(() => {
    fetchQuotations();
    fetchLeads();
  }, []);

  // ---------------------------------------------------------
  // FORM
  // ---------------------------------------------------------

  const resetForm = () => {
    setForm({
      lead: "",
      quotationNumber: "",
      quotationDate: getTodayDate(),
      validUntil: "",
      discount: 0,
      tax: 0,
      notes: "",
      items: [
        {
          productName: "",
          description: "",
          quantity: 1,
          unitPrice: "",
        },
      ],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleItemChange = (index, field, value) => {
    setForm((current) => {
      const updatedItems = [...current.items];

      updatedItems[index] = {
        ...updatedItems[index],
        [field]: value,
      };

      return {
        ...current,
        items: updatedItems,
      };
    });
  };

  const addItem = () => {
    setForm((current) => ({
      ...current,
      items: [
        ...current.items,
        {
          productName: "",
          description: "",
          quantity: 1,
          unitPrice: "",
        },
      ],
    }));
  };

  const removeItem = (index) => {
    if (form.items.length === 1) return;

    setForm((current) => ({
      ...current,
      items: current.items.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  // ---------------------------------------------------------
  // CREATE QUOTATION
  // ---------------------------------------------------------

  const handleCreateQuotation = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.lead) {
      setError("Please select a lead.");
      return;
    }

    const validItems = form.items.filter(
      (item) =>
        item.productName.trim() &&
        Number(item.quantity) > 0 &&
        Number(item.unitPrice) >= 0
    );

    if (validItems.length === 0) {
      setError("Please add at least one valid quotation item.");
      return;
    }

    if (!form.quotationNumber.trim()) {
      setError("Please enter quotation number.");
      return;
    }

    if (!form.quotationDate) {
      setError("Please select quotation date.");
      return;
    }

    setSubmitting(true);

    try {
      /*
       * IMPORTANT:
       *
       * Backend expects:
       * lead
       * quotationNumber
       * quotationDate
       * validUntil
       * items
       * discount
       * tax
       * notes
       *
       * Backend itself calculates item.amount,
       * subtotal and totalAmount.
       */

      const payload = {
        lead: form.lead,
        quotationNumber: form.quotationNumber.trim(),
        quotationDate: form.quotationDate,
        validUntil: form.validUntil || undefined,

        items: validItems.map((item) => ({
          productName: item.productName.trim(),
          description: item.description?.trim() || "",
          quantity: Number(item.quantity),
          unitPrice: Number(item.unitPrice),
        })),

        discount: Number(form.discount || 0),

        // Backend expects TAX AMOUNT, not percentage.
        tax: Number(form.tax || 0),

        notes: form.notes?.trim() || "",
      };

      const response = await fetch(`${API_BASE_URL}/quotations`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create quotation");
      }

      setShowModal(false);
      resetForm();

      await fetchQuotations();

      alert("Quotation created successfully.");
    } catch (err) {
      console.error("Create quotation error:", err);
      setError(err.message || "Unable to create quotation");
    } finally {
      setSubmitting(false);
    }
  };

  // ---------------------------------------------------------
  // UPDATE STATUS
  // ---------------------------------------------------------

  const updateStatus = async (id, status) => {
    try {
      setError("");

      const response = await fetch(
        `${API_BASE_URL}/quotations/${id}/status`,
        {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update quotation");
      }

      setQuotations((current) =>
        current.map((quotation) =>
          quotation._id === id
            ? {
                ...quotation,
                ...data.quotation,
                status,
              }
            : quotation
        )
      );

      setViewQuotation((current) =>
        current && current._id === id
          ? {
              ...current,
              ...data.quotation,
              status,
            }
          : current
      );
    } catch (err) {
      console.error("Update quotation status error:", err);
      setError(err.message || "Unable to update quotation status");
    }
  };

  // ---------------------------------------------------------
  // LEAD DISPLAY
  // ---------------------------------------------------------

  const getLeadCompany = (quotation) => {
    return (
      quotation?.lead?.companyName ||
      quotation?.lead?.company ||
      "Unknown Company"
    );
  };

  const getLeadContact = (quotation) => {
    return (
      quotation?.lead?.contactPerson ||
      quotation?.lead?.contact ||
      "No contact"
    );
  };

  const getLeadPhone = (quotation) => {
    return quotation?.lead?.phone || "Not provided";
  };

  const getLeadName = (lead) => {
    const company =
      lead?.companyName ||
      lead?.company ||
      "Unnamed Company";

    const contact =
      lead?.contactPerson ||
      lead?.contact ||
      "";

    return contact ? `${company} — ${contact}` : company;
  };

  // ---------------------------------------------------------
  // FILTER
  // ---------------------------------------------------------

  const filteredQuotations = quotations.filter((quotation) => {
    const searchValue = search.toLowerCase();

    const quotationNumber = (
      quotation.quotationNumber || ""
    ).toLowerCase();

    const company = getLeadCompany(quotation).toLowerCase();

    const contact = getLeadContact(quotation).toLowerCase();

    const matchesSearch =
      quotationNumber.includes(searchValue) ||
      company.includes(searchValue) ||
      contact.includes(searchValue);

    const matchesFilter =
      filter === "All" || quotation.status === filter;

    return matchesSearch && matchesFilter;
  });

  // ---------------------------------------------------------
  // COUNTS
  // ---------------------------------------------------------

  const draftCount = quotations.filter(
    (item) => item.status === "Draft"
  ).length;

  const sentCount = quotations.filter(
    (item) => item.status === "Sent"
  ).length;

  const acceptedCount = quotations.filter(
    (item) => item.status === "Accepted"
  ).length;

  const rejectedCount = quotations.filter(
    (item) => item.status === "Rejected"
  ).length;

  // ---------------------------------------------------------
  // FORM TOTAL
  // ---------------------------------------------------------

  const formSubtotal = calculateSubtotal(form.items);

  const formDiscount = Number(form.discount || 0);

  const formTax = Number(form.tax || 0);

  const formGrandTotal = Math.max(
    formSubtotal - formDiscount + formTax,
    0
  );

  // ---------------------------------------------------------
  // RENDER
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
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search quotations..."
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
            {/* TITLE */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="mt-1 text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                  Quotations
                </h1>

                <p className="mt-1 text-sm text-[#94909d]">
                  Create, manage, and track customer quotations.
                </p>
              </div>

              <button
                onClick={() => {
                  resetForm();
                  setError("");
                  setShowModal(true);
                }}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                <PlusIcon />
                Add Quotation
              </button>
            </div>

            {/* ERROR */}
            {error && (
              <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* STATS */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <p className="text-xs font-medium text-[#96929f]">
                  Draft
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-2xl font-bold text-[#272631]">
                    {draftCount}
                  </p>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                    <FileIcon />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <p className="text-xs font-medium text-[#96929f]">
                  Sent
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-2xl font-bold text-[#272631]">
                    {sentCount}
                  </p>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <SendIcon />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <p className="text-xs font-medium text-[#96929f]">
                  Accepted
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-2xl font-bold text-[#272631]">
                    {acceptedCount}
                  </p>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <CheckIcon />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <p className="text-xs font-medium text-[#96929f]">
                  Rejected
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-2xl font-bold text-[#272631]">
                    {rejectedCount}
                  </p>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <XIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* LIST */}
            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#272631]">
                    Quotation List
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {filteredQuotations.length} quotations displayed
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "All",
                    "Draft",
                    "Sent",
                    "Accepted",
                    "Rejected",
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

              {loading ? (
                <div className="px-6 py-16 text-center text-sm text-[#96929f]">
                  Loading quotations...
                </div>
              ) : filteredQuotations.length === 0 ? (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <FileIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    No quotations found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    Try changing your search or filter.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#eeeaf4]">
                  {filteredQuotations.map((quotation) => {
                    const subtotal = Number(quotation.subtotal || 0);
                    const discount = Number(quotation.discount || 0);
                    const tax = Number(quotation.tax || 0);
                    const total = Number(
                      quotation.totalAmount ||
                        subtotal - discount + tax
                    );

                    return (
                      <div
                        key={quotation._id}
                        className="p-5 transition hover:bg-[#fcfbff]"
                      >
                        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                          <div className="flex min-w-0 items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
                              {getLeadCompany(
                                quotation
                              ).charAt(0)}
                            </div>

                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-sm font-bold text-[#292732]">
                                  {getLeadCompany(quotation)}
                                </h3>

                                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-600">
                                  {quotation.quotationNumber}
                                </span>

                                <span
                                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                                    quotation.status ===
                                    "Accepted"
                                      ? "bg-green-50 text-green-600"
                                      : quotation.status ===
                                        "Rejected"
                                      ? "bg-red-50 text-red-600"
                                      : quotation.status ===
                                        "Sent"
                                      ? "bg-blue-50 text-blue-600"
                                      : "bg-orange-50 text-orange-600"
                                  }`}
                                >
                                  {quotation.status}
                                </span>
                              </div>

                              <p className="mt-1 text-xs text-[#96929f]">
                                {getLeadContact(quotation)}
                              </p>

                              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#66626f]">
                                <span>
                                  Date:{" "}
                                  {formatDisplayDate(
                                    quotation.quotationDate
                                  )}
                                </span>

                                <span>
                                  Valid until:{" "}
                                  {formatDisplayDate(
                                    quotation.validUntil
                                  )}
                                </span>

                                <span>
                                  {quotation.items?.length || 0}{" "}
                                  item
                                  {quotation.items?.length !== 1
                                    ? "s"
                                    : ""}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="text-left sm:text-right">
                              <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                                Total
                              </p>

                              <p className="mt-1 text-base font-bold text-[#292732]">
                                {formatCurrency(total)}
                              </p>

                              <p className="mt-1 text-[10px] text-[#96929f]">
                                {quotation.createdBy?.name
                                  ? `Created by ${quotation.createdBy.name}`
                                  : ""}
                              </p>
                            </div>

                            <button
                              onClick={() =>
                                setViewQuotation(quotation)
                              }
                              className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                              <EyeIcon />
                              View
                            </button>

                            {quotation.status === "Draft" && (
                              <button
                                onClick={() =>
                                  updateStatus(
                                    quotation._id,
                                    "Sent"
                                  )
                                }
                                className="flex h-9 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition hover:bg-indigo-700"
                              >
                                <SendIcon />
                                Send
                              </button>
                            )}

                            {quotation.status === "Sent" && (
                              <button
                                onClick={() =>
                                  updateStatus(
                                    quotation._id,
                                    "Accepted"
                                  )
                                }
                                className="flex h-9 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 text-xs font-semibold text-white transition hover:bg-green-700"
                              >
                                <CheckIcon />
                                Accept
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* =====================================================
          CREATE QUOTATION MODAL
      ===================================================== */}

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
              <div>
                <h2 className="text-lg font-bold text-[#272631]">
                  Add Quotation
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  Create a quotation for your customer.
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

            <form onSubmit={handleCreateQuotation}>
              <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
                {error && (
                  <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                {/* LEAD */}
                <div>
                  <label className="text-xs font-semibold text-[#4e4a57]">
                    Select Lead *
                  </label>

                  <select
                    name="lead"
                    value={form.lead}
                    onChange={handleChange}
                    required
                    disabled={loadingLeads}
                    className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  >
                    <option value="">
                      {loadingLeads
                        ? "Loading leads..."
                        : "Select a lead"}
                    </option>

                    {leads.map((lead) => (
                      <option key={lead._id} value={lead._id}>
                        {getLeadName(lead)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* BASIC INFO */}
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Quotation Number *
                    </label>

                    <AppInput
                      name="quotationNumber"
                      value={form.quotationNumber}
                      onChange={handleChange}
                      placeholder="e.g. QT-2026-005"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Quotation Date *
                    </label>

                    <AppInput
                      type="date"
                      name="quotationDate"
                      value={form.quotationDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Valid Until
                    </label>

                    <AppInput
                      type="date"
                      name="validUntil"
                      value={form.validUntil}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Notes
                    </label>

                    <AppInput
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Quotation notes"
                    />
                  </div>
                </div>

                {/* ITEMS */}
                <div className="mt-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-[#272631]">
                        Quotation Items
                      </h3>

                      <p className="mt-1 text-xs text-[#96929f]">
                        Add products or services to this quotation.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={addItem}
                      className="flex h-9 items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-3 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100"
                    >
                      <PlusIcon />
                      Add Item
                    </button>
                  </div>

                  <div className="mt-4 space-y-3">
                    {form.items.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4"
                      >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_100px_140px_auto] md:items-end">
                          <div>
                            <label className="text-xs font-semibold text-[#4e4a57]">
                              Product / Service *
                            </label>

                            <input
                              type="text"
                              value={item.productName}
                              onChange={(e) =>
                                handleItemChange(
                                  index,
                                  "productName",
                                  e.target.value
                                )
                              }
                              placeholder="e.g. Premium NFC Cards"
                              required
                              className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-[#4e4a57]">
                              Qty *
                            </label>

                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleItemChange(
                                  index,
                                  "quantity",
                                  e.target.value
                                )
                              }
                              required
                              className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-[#4e4a57]">
                              Unit Price *
                            </label>

                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              value={item.unitPrice}
                              onChange={(e) =>
                                handleItemChange(
                                  index,
                                  "unitPrice",
                                  e.target.value
                                )
                              }
                              placeholder="₹0"
                              required
                              className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                            />
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(index)}
                            disabled={form.items.length === 1}
                            className="h-10 rounded-lg border border-red-100 px-3 text-xs font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            Remove
                          </button>
                        </div>

                        <div className="mt-3">
                          <label className="text-xs font-semibold text-[#4e4a57]">
                            Description
                          </label>

                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                            placeholder="Optional description"
                            className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                          />
                        </div>

                        <div className="mt-3 text-right text-xs text-[#66626f]">
                          Item Total:{" "}
                          <span className="font-bold text-[#292732]">
                            {formatCurrency(
                              Number(item.quantity || 0) *
                                Number(item.unitPrice || 0)
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TOTALS */}
                <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Discount
                    </label>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      name="discount"
                      value={form.discount}
                      onChange={handleChange}
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Tax Amount
                    </label>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      name="tax"
                      value={form.tax}
                      onChange={handleChange}
                      placeholder="₹0"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div className="rounded-lg bg-indigo-50 p-3">
                    <p className="text-xs font-medium text-[#777384]">
                      Grand Total
                    </p>

                    <p className="mt-1 text-lg font-bold text-indigo-600">
                      {formatCurrency(formGrandTotal)}
                    </p>
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
                  disabled={submitting}
                  className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Creating..."
                    : "Create Quotation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================
          VIEW QUOTATION
      ===================================================== */}

      {viewQuotation && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-[#eeeaf4] px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  Quotation
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#272631]">
                  {viewQuotation.quotationNumber}
                </h2>

                <p className="mt-1 text-sm text-[#96929f]">
                  {getLeadCompany(viewQuotation)}
                </p>
              </div>

              <button
                onClick={() => setViewQuotation(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100"
              >
                <XIcon />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Customer
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#292732]">
                    {getLeadContact(viewQuotation)}
                  </p>

                  <p className="mt-1 text-xs text-[#777384]">
                    {getLeadPhone(viewQuotation)}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Status
                  </p>

                  <span
                    className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      viewQuotation.status === "Accepted"
                        ? "bg-green-50 text-green-600"
                        : viewQuotation.status === "Rejected"
                        ? "bg-red-50 text-red-600"
                        : viewQuotation.status === "Sent"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {viewQuotation.status}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Quotation Date
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#292732]">
                    {formatDisplayDate(
                      viewQuotation.quotationDate
                    )}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Valid Until
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#292732]">
                    {formatDisplayDate(viewQuotation.validUntil)}
                  </p>
                </div>
              </div>

              {/* ITEMS */}
              <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed]">
                <div className="grid grid-cols-[1fr_70px_110px_110px] bg-[#f8f6fc] px-4 py-3 text-[10px] font-semibold uppercase tracking-wide text-[#777384]">
                  <span>Item</span>
                  <span className="text-center">Qty</span>
                  <span className="text-right">Price</span>
                  <span className="text-right">Total</span>
                </div>

                <div className="divide-y divide-[#eeeaf4]">
                  {(viewQuotation.items || []).map(
                    (item, index) => {
                      const price = Number(
                        item.unitPrice || 0
                      );

                      const amount = Number(
                        item.amount ??
                          Number(item.quantity || 0) * price
                      );

                      return (
                        <div
                          key={index}
                          className="grid grid-cols-[1fr_70px_110px_110px] px-4 py-3 text-xs"
                        >
                          <span className="font-medium text-[#292732]">
                            {item.productName}
                          </span>

                          <span className="text-center text-[#66626f]">
                            {item.quantity}
                          </span>

                          <span className="text-right text-[#66626f]">
                            {formatCurrency(price)}
                          </span>

                          <span className="text-right font-semibold text-[#292732]">
                            {formatCurrency(amount)}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              {/* TOTALS */}
              <div className="mt-5 ml-auto w-full max-w-xs space-y-2 text-sm">
                <div className="flex justify-between text-[#777384]">
                  <span>Subtotal</span>

                  <span>
                    {formatCurrency(viewQuotation.subtotal)}
                  </span>
                </div>

                <div className="flex justify-between text-[#777384]">
                  <span>Discount</span>

                  <span>
                    - {formatCurrency(viewQuotation.discount)}
                  </span>
                </div>

                <div className="flex justify-between text-[#777384]">
                  <span>Tax</span>

                  <span>
                    {formatCurrency(viewQuotation.tax)}
                  </span>
                </div>

                <div className="border-t border-[#e5e1ed] pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold text-[#292732]">
                      Grand Total
                    </span>

                    <span className="font-bold text-indigo-600">
                      {formatCurrency(
                        viewQuotation.totalAmount
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {viewQuotation.notes && (
                <div className="mt-6 rounded-xl bg-[#fcfbff] p-4">
                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Notes
                  </p>

                  <p className="mt-1 text-sm text-[#4e4a57]">
                    {viewQuotation.notes}
                  </p>
                </div>
              )}

              {viewQuotation.createdBy && (
                <div className="mt-6 rounded-xl bg-[#fcfbff] p-4">
                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Created By
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
                    {viewQuotation.createdBy.name ||
                      viewQuotation.createdBy.email}
                  </p>
                </div>
              )}
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
              {viewQuotation.status === "Draft" && (
                <button
                  onClick={() =>
                    updateStatus(
                      viewQuotation._id,
                      "Sent"
                    )
                  }
                  className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  <SendIcon />
                  Mark as Sent
                </button>
              )}

              {viewQuotation.status === "Sent" && (
                <>
                  <button
                    onClick={() =>
                      updateStatus(
                        viewQuotation._id,
                        "Accepted"
                      )
                    }
                    className="flex h-10 items-center gap-2 rounded-lg bg-green-600 px-4 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    <CheckIcon />
                    Accept
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        viewQuotation._id,
                        "Rejected"
                      )
                    }
                    className="h-10 rounded-lg border border-red-200 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    Reject
                  </button>
                </>
              )}

              <button
                onClick={() => setViewQuotation(null)}
                className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quotations;  
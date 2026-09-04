
// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const initialPayments = [
//   {
//     id: 1,
//     order: "ORD-1001",
//     company: "Metro Realty",
//     contact: "Rahul Mehta",
//     paymentType: "Advance",
//     amount: 15000,
//     paymentMethod: "UPI",
//     transactionId: "UPI123456789",
//     paymentDate: "Aug 28, 2026",
//     status: "Received",
//     remarks: "Advance payment received.",
//     receivedBy: "Sarah K.",
//   },
//   {
//     id: 2,
//     order: "ORD-1002",
//     company: "Sharma Dental Care",
//     contact: "Dr. A. Sharma",
//     paymentType: "Partial",
//     amount: 10000,
//     paymentMethod: "Bank Transfer",
//     transactionId: "TXN987654321",
//     paymentDate: "Aug 27, 2026",
//     status: "Received",
//     remarks: "Partial payment received.",
//     receivedBy: "Rahul M.",
//   },
//   {
//     id: 3,
//     order: "ORD-1003",
//     company: "The Urban Table",
//     contact: "Amit Kapoor",
//     paymentType: "Advance",
//     amount: 7500,
//     paymentMethod: "Cash",
//     transactionId: "",
//     paymentDate: "Aug 29, 2026",
//     status: "Pending",
//     remarks: "Waiting for payment confirmation.",
//     receivedBy: "Sarah K.",
//   },
//   {
//     id: 4,
//     order: "ORD-1004",
//     company: "Prime Properties",
//     contact: "Neha Shah",
//     paymentType: "Remaining",
//     amount: 22000,
//     paymentMethod: "Card",
//     transactionId: "CARD445566",
//     paymentDate: "Aug 25, 2026",
//     status: "Received",
//     remarks: "Remaining amount received.",
//     receivedBy: "Rahul M.",
//   },
//   {
//     id: 5,
//     order: "ORD-1005",
//     company: "Wellness Dental Studio",
//     contact: "Dr. Priya Singh",
//     paymentType: "Full Payment",
//     amount: 30000,
//     paymentMethod: "Cheque",
//     transactionId: "CHQ778899",
//     paymentDate: "Aug 24, 2026",
//     status: "Failed",
//     remarks: "Cheque payment failed.",
//     receivedBy: "Sarah K.",
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

// function WalletIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.7"
//       className="h-5 w-5"
//     >
//       <path d="M4 6h15a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13" />
//       <path d="M16 13h5M17 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
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

// function EyeIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
//       <circle cx="12" cy="12" r="2.5" />
//     </svg>
//   );
// }

// function EditIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M12 20h9" />
//       <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
//     </svg>
//   );
// }

// function Payments({ onNavigate }) {
//   const [payments, setPayments] = useState(initialPayments);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const [showModal, setShowModal] = useState(false);
//   const [showViewModal, setShowViewModal] = useState(false);

//   const [editingPayment, setEditingPayment] = useState(null);
//   const [selectedPayment, setSelectedPayment] = useState(null);

//   const [form, setForm] = useState({
//     order: "",
//     company: "",
//     contact: "",
//     paymentType: "Advance",
//     amount: "",
//     paymentMethod: "UPI",
//     transactionId: "",
//     paymentDate: "",
//     status: "Pending",
//     remarks: "",
//     receivedBy: "",
//   });

//   const resetForm = () => {
//     setForm({
//       order: "",
//       company: "",
//       contact: "",
//       paymentType: "Advance",
//       amount: "",
//       paymentMethod: "UPI",
//       transactionId: "",
//       paymentDate: "",
//       status: "Pending",
//       remarks: "",
//       receivedBy: "",
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

//     const date = new Date(`${dateValue}T00:00:00`);

//     return date.toLocaleDateString("en-IN", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
//   };

//   const handleCreatePayment = (e) => {
//     e.preventDefault();

//     if (
//       !form.order ||
//       !form.company ||
//       !form.amount ||
//       !form.paymentDate ||
//       !form.receivedBy
//     ) {
//       return;
//     }

//     const paymentData = {
//       id: editingPayment ? editingPayment.id : Date.now(),
//       order: form.order,
//       company: form.company,
//       contact: form.contact || "Not provided",
//       paymentType: form.paymentType,
//       amount: Number(form.amount),
//       paymentMethod: form.paymentMethod,
//       transactionId: form.transactionId,
//       paymentDate: formatDate(form.paymentDate),
//       status: form.status,
//       remarks: form.remarks || "No remarks added.",
//       receivedBy: form.receivedBy,
//     };

//     if (editingPayment) {
//       setPayments((current) =>
//         current.map((item) =>
//           item.id === editingPayment.id ? paymentData : item
//         )
//       );
//     } else {
//       setPayments((current) => [paymentData, ...current]);
//     }

//     setShowModal(false);
//     setEditingPayment(null);
//     resetForm();
//   };

//   const openEditModal = (payment) => {
//     setEditingPayment(payment);

//     setForm({
//       order: payment.order,
//       company: payment.company,
//       contact: payment.contact,
//       paymentType: payment.paymentType,
//       amount: String(payment.amount),
//       paymentMethod: payment.paymentMethod,
//       transactionId: payment.transactionId || "",
//       paymentDate: "",
//       status: payment.status,
//       remarks: payment.remarks || "",
//       receivedBy: payment.receivedBy,
//     });

//     setShowModal(true);
//   };

//   const openCreateModal = () => {
//     setEditingPayment(null);
//     resetForm();
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setEditingPayment(null);
//     resetForm();
//   };

//   const markStatus = (id, status) => {
//     setPayments((current) =>
//       current.map((item) =>
//         item.id === id ? { ...item, status } : item
//       )
//     );

//     if (selectedPayment?.id === id) {
//       setSelectedPayment((current) =>
//         current ? { ...current, status } : current
//       );
//     }
//   };

//   const filteredPayments = payments.filter((item) => {
//     const searchValue = search.toLowerCase();

//     const matchesSearch =
//       item.order.toLowerCase().includes(searchValue) ||
//       item.company.toLowerCase().includes(searchValue) ||
//       item.contact.toLowerCase().includes(searchValue) ||
//       item.paymentMethod.toLowerCase().includes(searchValue) ||
//       item.paymentType.toLowerCase().includes(searchValue) ||
//       item.receivedBy.toLowerCase().includes(searchValue);

//     const matchesFilter =
//       filter === "All" || item.status === filter;

//     return matchesSearch && matchesFilter;
//   });

//   const totalReceived = payments
//     .filter((item) => item.status === "Received")
//     .reduce((sum, item) => sum + item.amount, 0);

//   const totalPending = payments
//     .filter((item) => item.status === "Pending")
//     .reduce((sum, item) => sum + item.amount, 0);

//   const totalFailed = payments
//     .filter((item) => item.status === "Failed")
//     .reduce((sum, item) => sum + item.amount, 0);

//   const totalRefunded = payments
//     .filter((item) => item.status === "Refunded")
//     .reduce((sum, item) => sum + item.amount, 0);

//   const formatCurrency = (amount) => {
//     return `₹${Number(amount).toLocaleString("en-IN")}`;
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
//                 placeholder="Search payments..."
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
//                   Payments
//                 </h1>

//                 <p className="mt-1 text-sm text-[#94909d]">
//                   Manage payments, transactions, and payment status for your orders.
//                 </p>
//               </div>

//               <button
//                 onClick={openCreateModal}
//                 className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//               >
//                 <PlusIcon />
//                 Add Payment
//               </button>
//             </div>

//             <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Total Received
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {formatCurrency(totalReceived)}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
//                     <WalletIcon />
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
//                       {formatCurrency(totalPending)}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
//                     <WalletIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Failed
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {formatCurrency(totalFailed)}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
//                     <WalletIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Refunded
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {formatCurrency(totalRefunded)}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
//                     <WalletIcon />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Payment Records
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredPayments.length} payments displayed
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "All",
//                     "Pending",
//                     "Received",
//                     "Failed",
//                     "Refunded",
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

//               {filteredPayments.length === 0 ? (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <WalletIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No payments found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search or filter.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-[1050px] text-left">
//                     <thead className="bg-[#faf9fd]">
//                       <tr className="border-b border-[#eeeaf4]">
//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Order / Company
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Payment
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Amount
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Method
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Date
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Status
//                         </th>

//                         <th className="px-5 py-4 text-right text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Actions
//                         </th>
//                       </tr>
//                     </thead>

//                     <tbody className="divide-y divide-[#eeeaf4]">
//                       {filteredPayments.map((item) => (
//                         <tr
//                           key={item.id}
//                           className="transition hover:bg-[#fcfbff]"
//                         >
//                           <td className="px-5 py-4">
//                             <div className="flex items-center gap-3">
//                               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">
//                                 {item.company.charAt(0)}
//                               </div>

//                               <div>
//                                 <p className="text-sm font-bold text-[#292732]">
//                                   {item.company}
//                                 </p>

//                                 <p className="mt-1 text-xs text-[#96929f]">
//                                   {item.order} · {item.contact}
//                                 </p>
//                               </div>
//                             </div>
//                           </td>

//                           <td className="px-5 py-4">
//                             <p className="text-xs font-semibold text-[#4e4a57]">
//                               {item.paymentType}
//                             </p>

//                             {item.transactionId && (
//                               <p className="mt-1 text-[11px] text-[#96929f]">
//                                 {item.transactionId}
//                               </p>
//                             )}
//                           </td>

//                           <td className="px-5 py-4">
//                             <p className="text-sm font-bold text-[#292732]">
//                               {formatCurrency(item.amount)}
//                             </p>
//                           </td>

//                           <td className="px-5 py-4">
//                             <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-600">
//                               {item.paymentMethod}
//                             </span>
//                           </td>

//                           <td className="px-5 py-4 text-xs text-[#66626f]">
//                             {item.paymentDate}
//                           </td>

//                           <td className="px-5 py-4">
//                             <span
//                               className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
//                                 item.status === "Received"
//                                   ? "bg-green-50 text-green-600"
//                                   : item.status === "Pending"
//                                   ? "bg-orange-50 text-orange-600"
//                                   : item.status === "Failed"
//                                   ? "bg-red-50 text-red-600"
//                                   : "bg-purple-50 text-purple-600"
//                               }`}
//                             >
//                               {item.status}
//                             </span>
//                           </td>

//                           <td className="px-5 py-4">
//                             <div className="flex justify-end gap-2">
//                               <button
//                                 onClick={() => {
//                                   setSelectedPayment(item);
//                                   setShowViewModal(true);
//                                 }}
//                                 className="flex h-8 items-center gap-1.5 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                               >
//                                 <EyeIcon />
//                                 View
//                               </button>

//                               <button
//                                 onClick={() => openEditModal(item)}
//                                 className="flex h-8 items-center gap-1.5 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                               >
//                                 <EditIcon />
//                                 Edit
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* ADD / EDIT PAYMENT MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-[#272631]">
//                   {editingPayment ? "Edit Payment" : "Add Payment"}
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   {editingPayment
//                     ? "Update payment information."
//                     : "Record a new payment for an order."}
//                 </p>
//               </div>

//               <button
//                 onClick={closeModal}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             <form onSubmit={handleCreatePayment}>
//               <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Order ID *
//                     </label>

//                     <input
//                       type="text"
//                       name="order"
//                       value={form.order}
//                       onChange={handleChange}
//                       placeholder="e.g. ORD-1006"
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Company *
//                     </label>

//                     <input
//                       type="text"
//                       name="company"
//                       value={form.company}
//                       onChange={handleChange}
//                       placeholder="e.g. Metro Realty"
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Contact Person
//                     </label>

//                     <input
//                       type="text"
//                       name="contact"
//                       value={form.contact}
//                       onChange={handleChange}
//                       placeholder="e.g. Rahul Mehta"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Payment Type *
//                     </label>

//                     <select
//                       name="paymentType"
//                       value={form.paymentType}
//                       onChange={handleChange}
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option value="Advance">Advance</option>
//                       <option value="Partial">Partial</option>
//                       <option value="Remaining">Remaining</option>
//                       <option value="Full Payment">Full Payment</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Amount *
//                     </label>

//                     <input
//                       type="number"
//                       name="amount"
//                       value={form.amount}
//                       onChange={handleChange}
//                       placeholder="e.g. 15000"
//                       min="0"
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Payment Method *
//                     </label>

//                     <select
//                       name="paymentMethod"
//                       value={form.paymentMethod}
//                       onChange={handleChange}
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option value="Cash">Cash</option>
//                       <option value="UPI">UPI</option>
//                       <option value="Bank Transfer">Bank Transfer</option>
//                       <option value="Card">Card</option>
//                       <option value="Cheque">Cheque</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Transaction ID
//                     </label>

//                     <input
//                       type="text"
//                       name="transactionId"
//                       value={form.transactionId}
//                       onChange={handleChange}
//                       placeholder="e.g. TXN123456"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Payment Date *
//                     </label>

//                     <input
//                       type="date"
//                       name="paymentDate"
//                       value={form.paymentDate}
//                       onChange={handleChange}
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Status *
//                     </label>

//                     <select
//                       name="status"
//                       value={form.status}
//                       onChange={handleChange}
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option value="Pending">Pending</option>
//                       <option value="Received">Received</option>
//                       <option value="Failed">Failed</option>
//                       <option value="Refunded">Refunded</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Received By *
//                     </label>

//                     <input
//                       type="text"
//                       name="receivedBy"
//                       value={form.receivedBy}
//                       onChange={handleChange}
//                       placeholder="Enter team member name"
//                       required
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
//                       placeholder="Add payment remarks..."
//                       rows="4"
//                       className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
//                 >
//                   {editingPayment ? "Update Payment" : "Create Payment"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* VIEW PAYMENT MODAL */}
//       {showViewModal && selectedPayment && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-[#272631]">
//                   Payment Details
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   {selectedPayment.order}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowViewModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             <div className="px-6 py-6">
//               <div className="rounded-xl bg-indigo-50 p-5">
//                 <p className="text-xs font-medium text-indigo-600">
//                   Payment Amount
//                 </p>

//                 <p className="mt-2 text-3xl font-bold text-indigo-700">
//                   {formatCurrency(selectedPayment.amount)}
//                 </p>

//                 <div className="mt-3">
//                   <span
//                     className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
//                       selectedPayment.status === "Received"
//                         ? "bg-green-100 text-green-700"
//                         : selectedPayment.status === "Pending"
//                         ? "bg-orange-100 text-orange-700"
//                         : selectedPayment.status === "Failed"
//                         ? "bg-red-100 text-red-700"
//                         : "bg-purple-100 text-purple-700"
//                     }`}
//                   >
//                     {selectedPayment.status}
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <div>
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Company
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
//                     {selectedPayment.company}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Contact
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
//                     {selectedPayment.contact}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Payment Type
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
//                     {selectedPayment.paymentType}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Payment Method
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
//                     {selectedPayment.paymentMethod}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Transaction ID
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
//                     {selectedPayment.transactionId || "Not provided"}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Payment Date
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
//                     {selectedPayment.paymentDate}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Received By
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
//                     {selectedPayment.receivedBy}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Order
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
//                     {selectedPayment.order}
//                   </p>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
//                     Remarks
//                   </p>

//                   <p className="mt-1 rounded-lg bg-[#faf9fd] p-3 text-sm text-[#66626f]">
//                     {selectedPayment.remarks}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap justify-end gap-2 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
//               {selectedPayment.status !== "Received" && (
//                 <button
//                   onClick={() => markStatus(selectedPayment.id, "Received")}
//                   className="flex h-9 items-center gap-2 rounded-lg bg-green-600 px-4 text-xs font-semibold text-white transition hover:bg-green-700"
//                 >
//                   <CheckIcon />
//                   Mark Received
//                 </button>
//               )}

//               {selectedPayment.status !== "Failed" && (
//                 <button
//                   onClick={() => markStatus(selectedPayment.id, "Failed")}
//                   className="h-9 rounded-lg border border-red-200 bg-white px-4 text-xs font-semibold text-red-600 transition hover:bg-red-50"
//                 >
//                   Mark Failed
//                 </button>
//               )}

//               {selectedPayment.status !== "Refunded" && (
//                 <button
//                   onClick={() => markStatus(selectedPayment.id, "Refunded")}
//                   className="h-9 rounded-lg border border-purple-200 bg-white px-4 text-xs font-semibold text-purple-600 transition hover:bg-purple-50"
//                 >
//                   Refund
//                 </button>
//               )}

//               <button
//                 onClick={() => {
//                   setShowViewModal(false);
//                   openEditModal(selectedPayment);
//                 }}
//                 className="flex h-9 items-center gap-2 rounded-lg border border-[#e3dfeb] bg-white px-4 text-xs font-semibold text-[#66626f] transition hover:bg-indigo-50 hover:text-indigo-600"
//               >
//                 <EditIcon />
//                 Edit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Payments;









import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const PAYMENT_API = `${API_BASE_URL}/payments`;

const EMPTY_FORM = {
  order: "",
  company: "",
  contact: "",
  paymentType: "Advance",
  amount: "",
  paymentMethod: "UPI",
  transactionId: "",
  paymentDate: "",
  status: "Pending",
  remarks: "",
  receivedBy: "",
};

/* =========================
   ICONS
========================= */

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

function WalletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <path d="M4 6h15a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13" />
      <path d="M16 13h5M17 13a1 1 0 1 0 0 2 1 1 0 0 0-1-2" />
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

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>
  );
}

/* =========================
   PAYMENTS COMPONENT
========================= */

function Payments({ onNavigate }) {
  const [payments, setPayments] = useState([]);
  const [orders, setOrders] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const [editingPayment, setEditingPayment] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState(false);

  const [error, setError] = useState("");

  const [form, setForm] = useState(EMPTY_FORM);

  /* =========================
     AUTH
  ========================= */

  const getToken = () => {
    return (
      localStorage.getItem("token") ||
      localStorage.getItem("accessToken") ||
      localStorage.getItem("authToken") ||
      ""
    );
  };

  const getHeaders = (includeJson = false) => {
    const token = getToken();

    const headers = {};

    if (includeJson) {
      headers["Content-Type"] = "application/json";
    }

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  };

  /* =========================
     RESPONSE PARSER
  ========================= */

  const parseResponse = async (response) => {
    const text = await response.text();

    let data = null;

    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = text;
    }

    if (!response.ok) {
      const message =
        data?.message ||
        data?.error ||
        (typeof data === "string" ? data : "") ||
        `Request failed with status ${response.status}`;

      throw new Error(message);
    }

    return data;
  };

  /* =========================
     LOAD ORDERS
  ========================= */

  const loadOrders = async () => {
    try {
      const token = getToken();

      if (!token) {
        console.error("Authentication token not found.");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: "GET",
        headers: getHeaders(),
      });

      const data = await parseResponse(response);

      const backendOrders = Array.isArray(data?.orders)
        ? data.orders
        : Array.isArray(data?.data)
        ? data.data
        : Array.isArray(data)
        ? data
        : [];

      setOrders(backendOrders);
    } catch (err) {
      console.error("Load orders error:", err);
    }
  };

  /* =========================
     NORMALIZE PAYMENT
  ========================= */

  const normalizePayment = (payment) => {
    if (!payment) return null;

    const rawDate =
      payment.paymentDate || payment.date || payment.createdAt;

    let formattedDate = "";

    if (rawDate) {
      const date = new Date(rawDate);

      if (!Number.isNaN(date.getTime())) {
        formattedDate = date.toLocaleDateString("en-IN", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      }
    }

    /*
      orderId = actual MongoDB Order _id
      order   = displayed order number
    */

    let orderId = "";

    if (payment.order && typeof payment.order === "object") {
      orderId = payment.order._id || "";
    } else if (typeof payment.order === "string") {
      if (/^[0-9a-fA-F]{24}$/.test(payment.order)) {
        orderId = payment.order;
      }
    }

    orderId = payment.orderId || orderId;

    const orderNumber =
      payment.orderNumber ||
      payment.order?.orderNumber ||
      payment.order?.orderId ||
      payment.order?.name ||
      (typeof payment.order === "string" &&
      !/^[0-9a-fA-F]{24}$/.test(payment.order)
        ? payment.order
        : "") ||
      "";

    /*
      Company can come from:
      payment.company
      payment.client
      payment.order.lead
    */

    const company =
      payment.company ||
      payment.companyName ||
      payment.client?.companyName ||
      payment.client?.company ||
      payment.order?.companyName ||
      payment.order?.lead?.companyName ||
      "Unknown Company";

    const contact =
      payment.contact ||
      payment.contactPerson ||
      payment.client?.contactPerson ||
      payment.order?.contactPerson ||
      payment.order?.lead?.contactPerson ||
      "Not provided";

    return {
      ...payment,

      id: payment._id || payment.id,

      orderId,

      order: orderNumber,

      company,

      contact,

      paymentType: payment.paymentType || "Advance",

      amount: Number(payment.amount || 0),

      paymentMethod: payment.paymentMethod || "Other",

      transactionId: payment.transactionId || "",

      paymentDate: formattedDate || payment.paymentDate || "",

      rawPaymentDate: rawDate || "",

      status: payment.status || "Pending",

      remarks: payment.remarks || "No remarks added.",

      receivedBy:
        payment.receivedBy?.name ||
        payment.receivedBy?.fullName ||
        payment.receivedBy ||
        "Not provided",
    };
  };

  /* =========================
     EXTRACT PAYMENTS
  ========================= */

  const extractPayments = (data) => {
    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data?.payments)) {
      return data.payments;
    }

    if (Array.isArray(data?.data)) {
      return data.data;
    }

    if (Array.isArray(data?.data?.payments)) {
      return data.data.payments;
    }

    return [];
  };

  /* =========================
     LOAD PAYMENTS
  ========================= */

  const loadPayments = async () => {
    setLoading(true);
    setError("");

    try {
      const token = getToken();

      if (!token) {
        setError("Authentication token not found. Please login again.");
        return;
      }

      const response = await fetch(PAYMENT_API, {
        method: "GET",
        headers: getHeaders(),
      });

      const data = await parseResponse(response);

      const backendPayments = extractPayments(data)
        .map(normalizePayment)
        .filter(Boolean);

      setPayments(backendPayments);
    } catch (err) {
      console.error("Get payments error:", err);

      setError(err.message || "Unable to load payments.");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     INITIAL LOAD
  ========================= */

  useEffect(() => {
    loadPayments();
    loadOrders();
  }, []);

  /* =========================
     RESET FORM
  ========================= */

  const resetForm = () => {
    setForm({
      ...EMPTY_FORM,
    });
  };

  /* =========================
     FORM CHANGE
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  /* =========================
     CURRENCY
  ========================= */

  const formatCurrency = (amount) => {
    return `₹${Number(amount || 0).toLocaleString("en-IN")}`;
  };

  /* =========================
     DATE
  ========================= */

  const toInputDate = (value) => {
    if (!value) return "";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "";
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  /* =========================
     SELECT ORDER
  ========================= */

  const handleOrderChange = (e) => {
    const selectedOrderId = e.target.value;

    const selectedOrder = orders.find(
      (order) => order._id === selectedOrderId
    );

    setForm((current) => ({
      ...current,

      order: selectedOrder?._id || "",

      company: selectedOrder?.lead?.companyName || "",

      contact: selectedOrder?.lead?.contactPerson || "",
    }));
  };

  /* =========================
     CREATE PAYMENT
  ========================= */

  const handleCreatePayment = async (e) => {
    e.preventDefault();

    /*
      Company and receivedBy are NOT required
      from frontend because:

      Company comes from selected Order.
      receivedBy comes from req.user.userId
      in backend.
    */

    if (!form.order || !form.amount || !form.paymentDate) {
      setError("Please fill all required fields.");
      return;
    }

    if (Number(form.amount) <= 0) {
      setError("Payment amount must be greater than 0.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      /*
        IMPORTANT:

        form.order contains MongoDB Order _id
        because the dropdown stores order._id.
      */

      const payload = {
        order: form.order,

        paymentType: form.paymentType,

        amount: Number(form.amount),

        paymentMethod: form.paymentMethod,

        transactionId: form.transactionId.trim(),

        paymentDate: form.paymentDate,

        status: form.status,

        remarks: form.remarks.trim(),
      };

      console.log("Creating payment:", payload);

      const response = await fetch(PAYMENT_API, {
        method: "POST",
        headers: getHeaders(true),
        body: JSON.stringify(payload),
      });

      await parseResponse(response);

      /*
        Reload payments because GET /payments
        populates order and receivedBy.
      */

      await loadPayments();

      closeModal();
    } catch (err) {
      console.error("Create payment error:", err);

      setError(err.message || "Unable to create payment.");
    } finally {
      setSaving(false);
    }
  };

  /* =========================
     OPEN CREATE MODAL
  ========================= */

  const openCreateModal = () => {
    setEditingPayment(null);

    resetForm();

    setError("");

    setShowModal(true);
  };

  /* =========================
     OPEN EDIT MODAL
  ========================= */

  const openEditModal = (payment) => {
    setEditingPayment(payment);

    /*
      payment.orderId is the actual MongoDB _id.
      payment.order is only the display order number.
    */

    let selectedOrderId = payment.orderId || "";

    /*
      Fallback:
      Find order by displayed order number.
    */

    if (!selectedOrderId && payment.order) {
      const matchedOrder = orders.find(
        (order) => order.orderNumber === payment.order
      );

      selectedOrderId = matchedOrder?._id || "";
    }

    setForm({
      order: selectedOrderId,

      company: payment.company || "",

      contact: payment.contact || "",

      paymentType: payment.paymentType || "Advance",

      amount: String(payment.amount || ""),

      paymentMethod: payment.paymentMethod || "UPI",

      transactionId: payment.transactionId || "",

      paymentDate: toInputDate(payment.rawPaymentDate),

      status: payment.status || "Pending",

      remarks:
        payment.remarks === "No remarks added."
          ? ""
          : payment.remarks || "",

      receivedBy: payment.receivedBy || "",
    });

    setError("");

    setShowModal(true);
  };

  /* =========================
     CLOSE PAYMENT MODAL
  ========================= */

  const closeModal = () => {
    setShowModal(false);

    setEditingPayment(null);

    resetForm();

    setError("");
  };

  /* =========================
     VIEW MODAL
  ========================= */

  const openViewModal = (payment) => {
    setSelectedPayment(payment);

    setShowViewModal(true);
  };

  const closeViewModal = () => {
    setShowViewModal(false);

    setSelectedPayment(null);
  };

  /* =========================
     UPDATE PAYMENT STATUS
  ========================= */

  const updatePaymentStatus = async (payment, status) => {
    if (!payment?.id) {
      setError("Payment ID is missing.");
      return;
    }

    setStatusUpdating(true);

    setError("");

    try {
      const response = await fetch(
        `${PAYMENT_API}/${payment.id}/status`,
        {
          method: "PUT",

          headers: getHeaders(true),

          body: JSON.stringify({
            status,
          }),
        }
      );

      await parseResponse(response);

      /*
        Reload so that:
        - payment status is updated
        - order payment information stays consistent
        - populated data remains correct
      */

      await loadPayments();

      setSelectedPayment((current) => {
        if (!current || current.id !== payment.id) {
          return current;
        }

        return {
          ...current,
          status,
        };
      });
    } catch (err) {
      console.error("Update payment status error:", err);

      setError(
        err.message || "Unable to update payment status."
      );
    } finally {
      setStatusUpdating(false);
    }
  };

  /* =========================
     FILTER PAYMENTS
  ========================= */

  const filteredPayments = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return payments.filter((item) => {
      const matchesSearch =
        !searchValue ||
        String(item.order || "")
          .toLowerCase()
          .includes(searchValue) ||
        String(item.company || "")
          .toLowerCase()
          .includes(searchValue) ||
        String(item.contact || "")
          .toLowerCase()
          .includes(searchValue) ||
        String(item.paymentMethod || "")
          .toLowerCase()
          .includes(searchValue) ||
        String(item.paymentType || "")
          .toLowerCase()
          .includes(searchValue) ||
        String(item.receivedBy || "")
          .toLowerCase()
          .includes(searchValue) ||
        String(item.transactionId || "")
          .toLowerCase()
          .includes(searchValue);

      const matchesFilter =
        filter === "All" || item.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [payments, search, filter]);

  /* =========================
     STATS
  ========================= */

  const totalReceived = payments
    .filter((item) => item.status === "Received")
    .reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );

  const totalPending = payments
    .filter((item) => item.status === "Pending")
    .reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );

  const totalFailed = payments
    .filter((item) => item.status === "Failed")
    .reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );

  const totalRefunded = payments
    .filter((item) => item.status === "Refunded")
    .reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );

  /* =========================
     STATUS CLASS
  ========================= */

  const statusClass = (status) => {
    if (status === "Received") {
      return "bg-green-50 text-green-600";
    }

    if (status === "Pending") {
      return "bg-orange-50 text-orange-600";
    }

    if (status === "Failed") {
      return "bg-red-50 text-red-600";
    }

    return "bg-purple-50 text-purple-600";
  };

  /* =========================
     RENDER
  ========================= */

  return (
    <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
      <div className="flex min-h-screen w-full">

        <Sidebar onNavigate={onNavigate} />

        <main className="min-w-0 flex-1">

          {/* =========================
              HEADER
          ========================= */}

          <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">

            <div className="relative w-full max-w-[520px]">

              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8797]">
                <SearchIcon />
              </div>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search payments..."
                className="h-10 w-full rounded-lg border border-[#e5e1ec] bg-[#fcfbff] pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-[#aaa5b2] focus:border-[#6554e8] focus:ring-2 focus:ring-[#6554e8]/10"
              />

            </div>

            <div className="ml-6 flex items-center gap-5">

              <button
                type="button"
                className="relative text-[#777384] transition hover:text-[#5141d8]"
              >
                <BellIcon />

                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-sm font-semibold text-white shadow-sm"
              >
                P
              </button>

            </div>

          </header>

          {/* =========================
              PAGE CONTENT
          ========================= */}

          <div className="w-full p-6 sm:p-8 lg:p-10">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <h1 className="mt-1 text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                  Payments
                </h1>

                <p className="mt-1 text-sm text-[#94909d]">
                  Manage payments, transactions, and payment status for your orders.
                </p>

              </div>

              <button
                onClick={openCreateModal}
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                <PlusIcon />
                Add Payment
              </button>

            </div>

            {/* =========================
                ERROR
            ========================= */}

            {error && (
              <div className="mt-5 flex items-center justify-between gap-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">

                <span>{error}</span>

                <button
                  type="button"
                  onClick={() => setError("")}
                  className="font-semibold"
                >
                  ×
                </button>

              </div>
            )}

            {/* =========================
                STATS
            ========================= */}

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {/* Received */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-medium text-[#96929f]">
                      Total Received
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {formatCurrency(totalReceived)}
                    </p>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <WalletIcon />
                  </div>

                </div>

              </div>

              {/* Pending */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-medium text-[#96929f]">
                      Pending
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {formatCurrency(totalPending)}
                    </p>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <WalletIcon />
                  </div>

                </div>

              </div>

              {/* Failed */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-medium text-[#96929f]">
                      Failed
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {formatCurrency(totalFailed)}
                    </p>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <WalletIcon />
                  </div>

                </div>

              </div>

              {/* Refunded */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-medium text-[#96929f]">
                      Refunded
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {formatCurrency(totalRefunded)}
                    </p>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <WalletIcon />
                  </div>

                </div>

              </div>

            </div>

            {/* =========================
                PAYMENT RECORDS
            ========================= */}

            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">

              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h2 className="text-base font-semibold text-[#272631]">
                    Payment Records
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {loading
                      ? "Loading payments..."
                      : `${filteredPayments.length} payments displayed`}
                  </p>

                </div>

                <div className="flex flex-wrap gap-2">

                  {[
                    "All",
                    "Pending",
                    "Received",
                    "Failed",
                    "Refunded",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
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

                <div className="px-6 py-16 text-center">

                  <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />

                  <p className="mt-4 text-sm text-[#96929f]">
                    Loading payments...
                  </p>

                </div>

              ) : filteredPayments.length === 0 ? (

                <div className="px-6 py-16 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <WalletIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    No payments found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    {payments.length === 0
                      ? "Add your first payment to get started."
                      : "Try changing your search or filter."}
                  </p>

                </div>

              ) : (

                <div className="overflow-x-auto">

                  <table className="w-full min-w-[1050px] text-left">

                    <thead className="bg-[#faf9fd]">

                      <tr className="border-b border-[#eeeaf4]">

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Order / Company
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Payment
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Amount
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Method
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Date
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Status
                        </th>

                        <th className="px-5 py-4 text-right text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Actions
                        </th>

                      </tr>

                    </thead>

                    <tbody className="divide-y divide-[#eeeaf4]">

                      {filteredPayments.map((item) => (

                        <tr
                          key={item.id}
                          className="transition hover:bg-[#fcfbff]"
                        >

                          <td className="px-5 py-4">

                            <div className="flex items-center gap-3">

                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">
                                {String(item.company || "?")
                                  .charAt(0)
                                  .toUpperCase()}
                              </div>

                              <div>

                                <p className="text-sm font-bold text-[#292732]">
                                  {item.company}
                                </p>

                                <p className="mt-1 text-xs text-[#96929f]">
                                  {item.order || "No order"} ·{" "}
                                  {item.contact}
                                </p>

                              </div>

                            </div>

                          </td>

                          <td className="px-5 py-4">

                            <p className="text-xs font-semibold text-[#4e4a57]">
                              {item.paymentType}
                            </p>

                            {item.transactionId && (
                              <p className="mt-1 text-[11px] text-[#96929f]">
                                {item.transactionId}
                              </p>
                            )}

                          </td>

                          <td className="px-5 py-4">

                            <p className="text-sm font-bold text-[#292732]">
                              {formatCurrency(item.amount)}
                            </p>

                          </td>

                          <td className="px-5 py-4">

                            <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-600">
                              {item.paymentMethod}
                            </span>

                          </td>

                          <td className="px-5 py-4 text-xs text-[#66626f]">
                            {item.paymentDate || "—"}
                          </td>

                          <td className="px-5 py-4">

                            <span
                              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusClass(
                                item.status
                              )}`}
                            >
                              {item.status}
                            </span>

                          </td>

                          <td className="px-5 py-4">

                            <div className="flex justify-end gap-2">

                              <button
                                type="button"
                                onClick={() =>
                                  openViewModal(item)
                                }
                                className="flex h-8 items-center gap-1.5 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                              >
                                <EyeIcon />
                                View
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  openEditModal(item)
                                }
                                className="flex h-8 items-center gap-1.5 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                              >
                                <EditIcon />
                                Edit
                              </button>

                            </div>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              )}

            </div>

          </div>

        </main>

      </div>

      {/* =====================================================
          ADD / EDIT PAYMENT MODAL
      ===================================================== */}

      {showModal && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">

              <div>

                <h2 className="text-lg font-bold text-[#272631]">
                  {editingPayment
                    ? "Edit Payment"
                    : "Add Payment"}
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  {editingPayment
                    ? "Update payment information."
                    : "Record a new payment for an order."}
                </p>

              </div>

              <button
                type="button"
                onClick={closeModal}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
              >
                <XIcon />
              </button>

            </div>

            {/* FORM */}

            <form onSubmit={handleCreatePayment}>

              <div className="max-h-[70vh] overflow-y-auto px-6 py-6">

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* =========================
                      ORDER ID
                  ========================= */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Order ID *
                    </label>

                    <select
                      name="order"
                      value={form.order}
                      onChange={handleOrderChange}
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >

                      <option value="">
                        Select Order
                      </option>

                      {orders.map((order) => (
                        <option
                          key={order._id}
                          value={order._id}
                        >
                          {order.orderNumber}
                        </option>
                      ))}

                    </select>

                  </div>

                  {/* =========================
                      COMPANY
                  ========================= */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Company *
                    </label>

                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      readOnly
                      placeholder="Company will be selected automatically"
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#f5f4f8] px-3 text-sm outline-none"
                    />

                  </div>

                  {/* =========================
                      CONTACT
                  ========================= */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Contact Person
                    </label>

                    <input
                      type="text"
                      name="contact"
                      value={form.contact}
                      readOnly
                      placeholder="Contact person will be selected automatically"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#f5f4f8] px-3 text-sm outline-none"
                    />

                  </div>

                  {/* =========================
                      PAYMENT TYPE
                  ========================= */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Payment Type *
                    </label>

                    <select
                      name="paymentType"
                      value={form.paymentType}
                      onChange={handleChange}
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >

                      <option value="Advance">
                        Advance
                      </option>

                      <option value="Partial">
                        Partial
                      </option>

                      <option value="Remaining">
                        Remaining
                      </option>

                      <option value="Full Payment">
                        Full Payment
                      </option>

                    </select>

                  </div>

                  {/* =========================
                      AMOUNT
                  ========================= */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Amount *
                    </label>

                    <input
                      type="number"
                      name="amount"
                      value={form.amount}
                      onChange={handleChange}
                      placeholder="e.g. 15000"
                      min="1"
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                  {/* =========================
                      PAYMENT METHOD
                  ========================= */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Payment Method *
                    </label>

                    <select
                      name="paymentMethod"
                      value={form.paymentMethod}
                      onChange={handleChange}
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >

                      <option value="Cash">
                        Cash
                      </option>

                      <option value="UPI">
                        UPI
                      </option>

                      <option value="Bank Transfer">
                        Bank Transfer
                      </option>

                      <option value="Card">
                        Card
                      </option>

                      <option value="Cheque">
                        Cheque
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                  </div>

                  {/* =========================
                      TRANSACTION ID
                  ========================= */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Transaction ID
                    </label>

                    <input
                      type="text"
                      name="transactionId"
                      value={form.transactionId}
                      onChange={handleChange}
                      placeholder="e.g. TXN123456"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                  {/* =========================
                      PAYMENT DATE
                  ========================= */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Payment Date *
                    </label>

                    <input
                      type="date"
                      name="paymentDate"
                      value={form.paymentDate}
                      onChange={handleChange}
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                  {/* =========================
                      STATUS
                  ========================= */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Status *
                    </label>

                    <select
                      name="status"
                      value={form.status}
                      onChange={handleChange}
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >

                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Received">
                        Received
                      </option>

                      <option value="Failed">
                        Failed
                      </option>

                      <option value="Refunded">
                        Refunded
                      </option>

                    </select>

                  </div>

                  {/* =========================
                      RECEIVED BY
                  ========================= */}

                  <div>

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Received By
                    </label>

                    <input
                      type="text"
                      name="receivedBy"
                      value={form.receivedBy}
                      readOnly
                      placeholder="Logged-in user"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#f5f4f8] px-3 text-sm outline-none"
                    />

                  </div>

                  {/* =========================
                      REMARKS
                  ========================= */}

                  <div className="sm:col-span-2">

                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Remarks
                    </label>

                    <textarea
                      name="remarks"
                      value={form.remarks}
                      onChange={handleChange}
                      placeholder="Add payment remarks..."
                      rows="4"
                      className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />

                  </div>

                </div>

              </div>

              {/* MODAL FOOTER */}

              <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">

                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex h-10 items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {saving
                    ? "Saving..."
                    : editingPayment
                    ? "Update Payment"
                    : "Create Payment"}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

      {/* =====================================================
          VIEW PAYMENT MODAL
      ===================================================== */}

      {showViewModal && selectedPayment && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

          <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">

              <div>

                <h2 className="text-lg font-bold text-[#272631]">
                  Payment Details
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  {selectedPayment.order || "Payment"}
                </p>

              </div>

              <button
                type="button"
                onClick={closeViewModal}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100"
              >
                <XIcon />
              </button>

            </div>

            <div className="max-h-[70vh] overflow-y-auto px-6 py-6">

              {/* AMOUNT */}

              <div className="rounded-xl bg-indigo-50 p-5">

                <p className="text-xs font-medium text-indigo-600">
                  Payment Amount
                </p>

                <p className="mt-2 text-3xl font-bold text-indigo-700">
                  {formatCurrency(selectedPayment.amount)}
                </p>

                <div className="mt-3">

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      selectedPayment.status === "Received"
                        ? "bg-green-100 text-green-700"
                        : selectedPayment.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : selectedPayment.status === "Failed"
                        ? "bg-red-100 text-red-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {selectedPayment.status}
                  </span>

                </div>

              </div>

              {/* DETAILS */}

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

                {/* COMPANY */}

                <div>

                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Company
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
                    {selectedPayment.company}
                  </p>

                </div>

                {/* CONTACT */}

                <div>

                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Contact
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
                    {selectedPayment.contact}
                  </p>

                </div>

                {/* PAYMENT TYPE */}

                <div>

                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Payment Type
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
                    {selectedPayment.paymentType}
                  </p>

                </div>

                {/* PAYMENT METHOD */}

                <div>

                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Payment Method
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
                    {selectedPayment.paymentMethod}
                  </p>

                </div>

                {/* TRANSACTION ID */}

                <div>

                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Transaction ID
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
                    {selectedPayment.transactionId ||
                      "Not provided"}
                  </p>

                </div>

                {/* PAYMENT DATE */}

                <div>

                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Payment Date
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
                    {selectedPayment.paymentDate ||
                      "Not provided"}
                  </p>

                </div>

                {/* RECEIVED BY */}

                <div>

                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Received By
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
                    {selectedPayment.receivedBy}
                  </p>

                </div>

                {/* ORDER */}

                <div>

                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Order
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#4e4a57]">
                    {selectedPayment.order ||
                      "Not provided"}
                  </p>

                </div>

                {/* REMARKS */}

                <div className="sm:col-span-2">

                  <p className="text-[10px] uppercase tracking-wide text-[#aaa5b2]">
                    Remarks
                  </p>

                  <p className="mt-1 rounded-lg bg-[#faf9fd] p-3 text-sm text-[#66626f]">
                    {selectedPayment.remarks}
                  </p>

                </div>

              </div>

            </div>

            {/* VIEW MODAL FOOTER */}

            <div className="flex flex-wrap justify-end gap-2 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">

              {/* MARK RECEIVED */}

              {selectedPayment.status !== "Received" && (

                <button
                  type="button"
                  disabled={statusUpdating}
                  onClick={() =>
                    updatePaymentStatus(
                      selectedPayment,
                      "Received"
                    )
                  }
                  className="flex h-9 items-center gap-2 rounded-lg bg-green-600 px-4 text-xs font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
                >

                  <CheckIcon />

                  {statusUpdating
                    ? "Updating..."
                    : "Mark Received"}

                </button>

              )}

              {/* MARK FAILED */}

              {selectedPayment.status !== "Failed" && (

                <button
                  type="button"
                  disabled={statusUpdating}
                  onClick={() =>
                    updatePaymentStatus(
                      selectedPayment,
                      "Failed"
                    )
                  }
                  className="h-9 rounded-lg border border-red-200 bg-white px-4 text-xs font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                >
                  Mark Failed
                </button>

              )}

              {/* REFUND */}

              {selectedPayment.status !== "Refunded" && (

                <button
                  type="button"
                  disabled={statusUpdating}
                  onClick={() =>
                    updatePaymentStatus(
                      selectedPayment,
                      "Refunded"
                    )
                  }
                  className="h-9 rounded-lg border border-purple-200 bg-white px-4 text-xs font-semibold text-purple-600 transition hover:bg-purple-50 disabled:opacity-50"
                >
                  Refund
                </button>

              )}

              {/* EDIT */}

              <button
                type="button"
                onClick={() => {
                  closeViewModal();
                  openEditModal(selectedPayment);
                }}
                className="flex h-9 items-center gap-2 rounded-lg border border-[#e3dfeb] bg-white px-4 text-xs font-semibold text-[#66626f] transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                <EditIcon />
                Edit
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Payments;
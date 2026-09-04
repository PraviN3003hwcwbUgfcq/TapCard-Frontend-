
// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const initialOrders = [
//   {
//     id: 1,
//     orderNo: "ORD-1001",
//     company: "Metro Realty",
//     contact: "Rahul Mehta",
//     product: "Premium NFC Cards",
//     quantity: 100,
//     amount: "₹15,000",
//     orderDate: "Aug 28, 2026",
//     deliveryDate: "Sep 3, 2026",
//     status: "Confirmed",
//     assigned: "Sarah K.",
//   },
//   {
//     id: 2,
//     orderNo: "ORD-1002",
//     company: "Sharma Dental Care",
//     contact: "Dr. A. Sharma",
//     product: "Business NFC Cards",
//     quantity: 50,
//     amount: "₹7,500",
//     orderDate: "Aug 29, 2026",
//     deliveryDate: "Sep 5, 2026",
//     status: "Processing",
//     assigned: "Rahul M.",
//   },
//   {
//     id: 3,
//     orderNo: "ORD-1003",
//     company: "The Urban Table",
//     contact: "Amit Kapoor",
//     product: "Premium NFC Cards",
//     quantity: 200,
//     amount: "₹30,000",
//     orderDate: "Aug 30, 2026",
//     deliveryDate: "Sep 7, 2026",
//     status: "Pending",
//     assigned: "Sarah K.",
//   },
//   {
//     id: 4,
//     orderNo: "ORD-1004",
//     company: "Prime Properties",
//     contact: "Neha Shah",
//     product: "Metal NFC Cards",
//     quantity: 75,
//     amount: "₹22,500",
//     orderDate: "Aug 30, 2026",
//     deliveryDate: "Sep 8, 2026",
//     status: "Confirmed",
//     assigned: "Rahul M.",
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

// function PackageIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.7"
//       className="h-5 w-5"
//     >
//       <path d="m12 3 9 5-9 5-9-5 9-5Z" />
//       <path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9" />
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
//       className="h-5 w-5"
//     >
//       <path d="m5 12 4 4L19 6" />
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

// function Orders({ onNavigate }) {
//   const [orders, setOrders] = useState(initialOrders);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [showModal, setShowModal] = useState(false);

//   const [form, setForm] = useState({
//     company: "",
//     contact: "",
//     product: "",
//     quantity: "",
//     amount: "",
//     orderDate: "",
//     deliveryDate: "",
//     assigned: "",
//     status: "Pending",
//   });

//   const resetForm = () => {
//     setForm({
//       company: "",
//       contact: "",
//       product: "",
//       quantity: "",
//       amount: "",
//       orderDate: "",
//       deliveryDate: "",
//       assigned: "",
//       status: "Pending",
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   const formatDate = (value) => {
//     if (!value) return "";

//     const date = new Date(`${value}T00:00:00`);

//     return date.toLocaleDateString("en-IN", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
//   };

//   const handleCreateOrder = (e) => {
//     e.preventDefault();

//     if (
//       !form.company ||
//       !form.contact ||
//       !form.product ||
//       !form.quantity ||
//       !form.amount ||
//       !form.orderDate ||
//       !form.deliveryDate ||
//       !form.assigned
//     ) {
//       return;
//     }

//     const newOrder = {
//       id: Date.now(),
//       orderNo: `ORD-${1000 + orders.length + 1}`,
//       company: form.company,
//       contact: form.contact,
//       product: form.product,
//       quantity: Number(form.quantity),
//       amount: form.amount.startsWith("₹")
//         ? form.amount
//         : `₹${form.amount}`,
//       orderDate: formatDate(form.orderDate),
//       deliveryDate: formatDate(form.deliveryDate),
//       status: form.status,
//       assigned: form.assigned,
//     };

//     setOrders((current) => [newOrder, ...current]);
//     setFilter("All");
//     setSearch("");
//     setShowModal(false);
//     resetForm();
//   };

//   const updateStatus = (id, status) => {
//     setOrders((current) =>
//       current.map((order) =>
//         order.id === id
//           ? { ...order, status }
//           : order
//       )
//     );
//   };

//   const filteredOrders = orders.filter((order) => {
//     const searchValue = search.toLowerCase();

//     const matchesSearch =
//       order.orderNo.toLowerCase().includes(searchValue) ||
//       order.company.toLowerCase().includes(searchValue) ||
//       order.contact.toLowerCase().includes(searchValue) ||
//       order.product.toLowerCase().includes(searchValue) ||
//       order.assigned.toLowerCase().includes(searchValue);

//     const matchesFilter =
//       filter === "All" || order.status === filter;

//     return matchesSearch && matchesFilter;
//   });

//   const totalOrders = orders.length;

//   const pendingOrders = orders.filter(
//     (order) => order.status === "Pending"
//   ).length;

//   const processingOrders = orders.filter(
//     (order) => order.status === "Processing"
//   ).length;

//   const confirmedOrders = orders.filter(
//     (order) => order.status === "Confirmed"
//   ).length;

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
//                 placeholder="Search orders..."
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

//           {/* Main Content */}
//           <div className="w-full p-6 sm:p-8 lg:p-10">
//             <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
//               <div>
//                 <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                   Orders
//                 </h1>

//                 <p className="mt-1 text-sm text-[#94909d]">
//                   Manage customer orders, processing, and order status.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowModal(true)}
//                 className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//               >
//                 <PlusIcon />
//                 Add Order
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Total Orders
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {totalOrders}
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
//                       {pendingOrders}
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
//                       Processing
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {processingOrders}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//                     <PackageIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Confirmed
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {confirmedOrders}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
//                     <CheckIcon />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Orders Table */}
//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Order Management
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredOrders.length} orders displayed
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "All",
//                     "Pending",
//                     "Confirmed",
//                     "Processing",
//                     "Completed",
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

//               {filteredOrders.length === 0 ? (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <PackageIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No orders found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search or filter.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-[1100px] text-left">
//                     <thead className="border-b border-[#eeeaf4] bg-[#fcfbff]">
//                       <tr>
//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Order
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Customer
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Product
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Quantity
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Amount
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Delivery
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Assigned
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Status
//                         </th>

//                         <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
//                           Action
//                         </th>
//                       </tr>
//                     </thead>

//                     <tbody className="divide-y divide-[#eeeaf4]">
//                       {filteredOrders.map((order) => (
//                         <tr
//                           key={order.id}
//                           className="transition hover:bg-[#fcfbff]"
//                         >
//                           <td className="px-5 py-4">
//                             <p className="text-sm font-bold text-[#292732]">
//                               {order.orderNo}
//                             </p>

//                             <p className="mt-1 text-[11px] text-[#96929f]">
//                               {order.orderDate}
//                             </p>
//                           </td>

//                           <td className="px-5 py-4">
//                             <p className="text-sm font-semibold text-[#292732]">
//                               {order.company}
//                             </p>

//                             <p className="mt-1 text-xs text-[#96929f]">
//                               {order.contact}
//                             </p>
//                           </td>

//                           <td className="px-5 py-4">
//                             <p className="text-sm text-[#4e4a57]">
//                               {order.product}
//                             </p>
//                           </td>

//                           <td className="px-5 py-4">
//                             <span className="text-sm font-semibold text-[#4e4a57]">
//                               {order.quantity}
//                             </span>
//                           </td>

//                           <td className="px-5 py-4">
//                             <span className="text-sm font-bold text-[#292732]">
//                               {order.amount}
//                             </span>
//                           </td>

//                           <td className="px-5 py-4">
//                             <span className="text-xs text-[#66626f]">
//                               {order.deliveryDate}
//                             </span>
//                           </td>

//                           <td className="px-5 py-4">
//                             <span className="text-xs font-semibold text-[#4e4a57]">
//                               {order.assigned}
//                             </span>
//                           </td>

//                           <td className="px-5 py-4">
//                             <select
//                               value={order.status}
//                               onChange={(e) =>
//                                 updateStatus(
//                                   order.id,
//                                   e.target.value
//                                 )
//                               }
//                               className={`rounded-full border-0 px-3 py-1.5 text-[10px] font-semibold outline-none ${
//                                 order.status === "Completed"
//                                   ? "bg-green-50 text-green-600"
//                                   : order.status === "Confirmed"
//                                   ? "bg-blue-50 text-blue-600"
//                                   : order.status === "Processing"
//                                   ? "bg-indigo-50 text-indigo-600"
//                                   : order.status === "Cancelled"
//                                   ? "bg-red-50 text-red-600"
//                                   : "bg-orange-50 text-orange-600"
//                               }`}
//                             >
//                               <option value="Pending">
//                                 Pending
//                               </option>

//                               <option value="Confirmed">
//                                 Confirmed
//                               </option>

//                               <option value="Processing">
//                                 Processing
//                               </option>

//                               <option value="Completed">
//                                 Completed
//                               </option>

//                               <option value="Cancelled">
//                                 Cancelled
//                               </option>
//                             </select>
//                           </td>

//                           <td className="px-5 py-4">
//                             <button
//                               onClick={() =>
//                                 onNavigate(
//                                   `/order-details/${order.id}`
//                                 )
//                               }
//                               className="whitespace-nowrap rounded-lg border border-[#e3dfeb] px-3 py-2 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                             >
//                               View Order
//                             </button>
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

//       {/* Add Order Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-[#272631]">
//                   Add Order
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   Create a new customer order.
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

//             <form onSubmit={handleCreateOrder}>
//               <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
//                       Contact Person *
//                     </label>

//                     <input
//                       type="text"
//                       name="contact"
//                       value={form.contact}
//                       onChange={handleChange}
//                       placeholder="e.g. Rahul Mehta"
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Product *
//                     </label>

//                     <input
//                       type="text"
//                       name="product"
//                       value={form.product}
//                       onChange={handleChange}
//                       placeholder="e.g. Premium NFC Cards"
//                       required
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
//                       placeholder="e.g. 100"
//                       min="1"
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Order Amount *
//                     </label>

//                     <input
//                       type="text"
//                       name="amount"
//                       value={form.amount}
//                       onChange={handleChange}
//                       placeholder="e.g. 15000"
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Order Date *
//                     </label>

//                     <input
//                       type="date"
//                       name="orderDate"
//                       value={form.orderDate}
//                       onChange={handleChange}
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Delivery Date *
//                     </label>

//                     <input
//                       type="date"
//                       name="deliveryDate"
//                       value={form.deliveryDate}
//                       onChange={handleChange}
//                       required
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Assigned To *
//                     </label>

//                     <input
//                       type="text"
//                       name="assigned"
//                       value={form.assigned}
//                       onChange={handleChange}
//                       placeholder="Enter team member name"
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
//                       <option value="Pending">
//                         Pending
//                       </option>

//                       <option value="Confirmed">
//                         Confirmed
//                       </option>

//                       <option value="Processing">
//                         Processing
//                       </option>

//                       <option value="Completed">
//                         Completed
//                       </option>

//                       <option value="Cancelled">
//                         Cancelled
//                       </option>
//                     </select>
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
//                   Create Order
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Orders;






































import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const ORDER_STATUSES = [
  "Order Confirmed",
  "Processing",
  "Completed",
  "Cancelled",
];

const CARD_TYPES = ["NFC", "QR", "NFC + QR"];

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

function PackageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9" />
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
      className="h-5 w-5"
    >
      <path d="m5 12 4 4L19 6" />
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
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M20 11a8.1 8.1 0 0 0-15-3.5L3 10" />
      <path d="M3 5v5h5" />
      <path d="M4 13a8.1 8.1 0 0 0 15 3.5L21 14" />
      <path d="M21 19v-5h-5" />
    </svg>
  );
}

/* =========================
   HELPERS
========================= */

function getToken() {
  return localStorage.getItem("token");
}

function formatDate(value) {
  if (!value) return "-";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatCurrency(value) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

function getStatusClasses(status) {
  switch (status) {
    case "Completed":
      return "bg-green-50 text-green-600";

    case "Order Confirmed":
      return "bg-blue-50 text-blue-600";

    case "Processing":
      return "bg-indigo-50 text-indigo-600";

    case "Cancelled":
      return "bg-red-50 text-red-600";

    default:
      return "bg-orange-50 text-orange-600";
  }
}

/* =========================
   EMPTY ORDER FORM
========================= */

const getEmptyOrderForm = () => ({
  lead: "",
  orderNumber: "",
  orderDate: "",
  productName: "",
  quantity: "",
  unitPrice: "",
  requirements: "",
  remarks: "",

  // Requirement fields
  cardType: "NFC + QR",
  cardColor: "",
  designRequirement: "",
  namePrinting: true,
  logoRequired: false,
  additionalRequirements: "",
});

/* =========================
   EMPTY REQUIREMENT FORM
========================= */

const getEmptyRequirementForm = () => ({
  productName: "",
  quantity: "",
  cardType: "NFC + QR",
  cardColor: "",
  designRequirement: "",
  namePrinting: true,
  logoRequired: false,
  additionalRequirements: "",
  remarks: "",
});

/* =========================
   MAIN COMPONENT
========================= */

function Orders({ onNavigate }) {
  /* =========================
     ORDERS
  ========================= */

  const [orders, setOrders] = useState([]);
  const [leads, setLeads] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [loading, setLoading] = useState(true);
  const [loadingLeads, setLoadingLeads] = useState(false);

  const [error, setError] = useState("");

  /* =========================
     ADD ORDER MODAL
  ========================= */

  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const [form, setForm] = useState(getEmptyOrderForm());

  /* =========================
     VIEW ORDER MODAL
  ========================= */

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orderRequirements, setOrderRequirements] = useState([]);
  const [loadingRequirements, setLoadingRequirements] = useState(false);
  const [requirementsError, setRequirementsError] = useState("");

  /* =========================
     REQUIREMENT MODAL
  ========================= */

  const [showRequirementModal, setShowRequirementModal] = useState(false);
  const [requirementSubmitting, setRequirementSubmitting] = useState(false);

  const [requirementError, setRequirementError] = useState("");
  const [editingRequirementId, setEditingRequirementId] = useState(null);

  const [requirementForm, setRequirementForm] = useState(
    getEmptyRequirementForm()
  );

  /* =========================
     FETCH ORDERS
  ========================= */

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const token = getToken();

      if (!token) {
        setError("Authentication token not found. Please login again.");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch orders");
      }

      setOrders(data.orders || []);
    } catch (err) {
      console.error("Fetch orders error:", err);
      setError(err.message || "Unable to load orders.");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     FETCH LEADS
  ========================= */

  const fetchLeads = async () => {
    try {
      setLoadingLeads(true);

      const token = getToken();

      if (!token) {
        return;
      }

      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch leads");
      }

      setLeads(data.leads || []);
    } catch (err) {
      console.error("Fetch leads error:", err);
    } finally {
      setLoadingLeads(false);
    }
  };

  /* =========================
     INITIAL LOAD
  ========================= */

  useEffect(() => {
    fetchOrders();
    fetchLeads();
  }, []);

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

  const handleRequirementFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setRequirementForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* =========================
     LEAD CHANGE
  ========================= */

  const handleLeadChange = (e) => {
    const leadId = e.target.value;

    const selectedLead = leads.find((lead) => lead._id === leadId);

    setForm((current) => ({
      ...current,
      lead: leadId,
      productName:
        current.productName ||
        selectedLead?.productName ||
        "",
    }));
  };

  /* =========================
     ORDER NUMBER
  ========================= */

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString().slice(-6);

    return `ORD-${timestamp}`;
  };

  /* =========================
     RESET ORDER FORM
  ========================= */

  const resetForm = () => {
    setForm(getEmptyOrderForm());
    setFormError("");
  };

  /* =========================
     OPEN ADD ORDER MODAL
  ========================= */

  const handleOpenModal = () => {
    resetForm();

    setForm((current) => ({
      ...current,
      orderNumber: generateOrderNumber(),
      orderDate: new Date().toISOString().split("T")[0],
    }));

    setShowModal(true);
  };

  /* =========================
     CLOSE ADD ORDER MODAL
  ========================= */

  const handleCloseModal = () => {
    if (submitting) return;

    setShowModal(false);
    resetForm();
  };

  /* =========================
     CREATE ORDER
  ========================= */

  const handleCreateOrder = async (e) => {
    e.preventDefault();

    setFormError("");

    if (!form.lead) {
      setFormError("Please select a lead.");
      return;
    }

    if (!form.orderNumber.trim()) {
      setFormError("Order number is required.");
      return;
    }

    if (!form.productName.trim()) {
      setFormError("Product name is required.");
      return;
    }

    if (!form.quantity || Number(form.quantity) < 1) {
      setFormError("Quantity must be at least 1.");
      return;
    }

    if (form.unitPrice === "" || Number(form.unitPrice) < 0) {
      setFormError("Please enter a valid unit price.");
      return;
    }

    try {
      setSubmitting(true);

      const token = getToken();

      if (!token) {
        setFormError(
          "Authentication token not found. Please login again."
        );
        return;
      }

      const quantity = Number(form.quantity);
      const unitPrice = Number(form.unitPrice);
      const amount = quantity * unitPrice;

      /* =========================
         CREATE ORDER PAYLOAD
      ========================= */

      const payload = {
        lead: form.lead,
        orderNumber: form.orderNumber.trim(),
        orderDate: form.orderDate || undefined,

        items: [
          {
            productName: form.productName.trim(),
            quantity,
            unitPrice,
            amount,
          },
        ],

        requirements: form.requirements.trim(),
        remarks: form.remarks.trim(),
      };

      /* =========================
         CREATE ORDER
      ========================= */

      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to create order"
        );
      }

      const createdOrder = data.order;

      /* =========================
         CREATE ORDER REQUIREMENT
         IF USER ENTERED REQUIREMENT DATA
      ========================= */

      const hasRequirementData =
        form.cardColor.trim() ||
        form.designRequirement.trim() ||
        form.additionalRequirements.trim() ||
        form.productName.trim() ||
        form.quantity;

      if (hasRequirementData && createdOrder?._id) {
        try {
          const requirementPayload = {
            order: createdOrder._id,
            productName: form.productName.trim(),
            quantity,
            cardType: form.cardType,
            cardColor: form.cardColor.trim(),
            designRequirement: form.designRequirement.trim(),
            namePrinting: Boolean(form.namePrinting),
            logoRequired: Boolean(form.logoRequired),
            additionalRequirements:
              form.additionalRequirements.trim(),
            remarks: form.remarks.trim(),
          };

          const requirementResponse = await fetch(
            `${API_BASE_URL}/order-requirements`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(requirementPayload),
            }
          );

          const requirementData =
            await requirementResponse.json();

          if (!requirementResponse.ok) {
            console.error(
              "Requirement creation error:",
              requirementData.message
            );
          }
        } catch (requirementErr) {
          console.error(
            "Requirement creation error:",
            requirementErr
          );
        }
      }

      /* =========================
         UPDATE UI
      ========================= */

      setOrders((current) => [
        createdOrder,
        ...current,
      ]);

      setFilter("All");
      setSearch("");

      setShowModal(false);
      resetForm();

      /* Refresh to get populated lead/createdBy data */
      fetchOrders();
    } catch (err) {
      console.error("Create order error:", err);

      setFormError(
        err.message || "Unable to create order."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /* =========================
     UPDATE ORDER STATUS
  ========================= */

  const updateStatus = async (id, status) => {
    try {
      const token = getToken();

      if (!token) {
        alert(
          "Authentication token not found. Please login again."
        );
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}/orders/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update order"
        );
      }

      setOrders((current) =>
        current.map((order) =>
          order._id === id
            ? {
                ...order,
                status: data.order?.status || status,
              }
            : order
        )
      );

      if (selectedOrder?._id === id) {
        setSelectedOrder((current) =>
          current
            ? {
                ...current,
                status:
                  data.order?.status || status,
              }
            : current
        );
      }
    } catch (err) {
      console.error(
        "Update order status error:",
        err
      );

      alert(
        err.message ||
          "Unable to update order status."
      );
    }
  };

  /* =========================
     FETCH SINGLE ORDER
  ========================= */

  const fetchOrderById = async (id) => {
    const token = getToken();

    if (!token) {
      throw new Error(
        "Authentication token not found. Please login again."
      );
    }

    const response = await fetch(
      `${API_BASE_URL}/orders/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch order"
      );
    }

    return data.order;
  };

  /* =========================
     FETCH REQUIREMENTS
  ========================= */

  const fetchOrderRequirements = async (orderId) => {
    try {
      setLoadingRequirements(true);
      setRequirementsError("");

      const token = getToken();

      if (!token) {
        throw new Error(
          "Authentication token not found. Please login again."
        );
      }

      const response = await fetch(
        `${API_BASE_URL}/order-requirements/order/${orderId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to fetch order requirements"
        );
      }

      setOrderRequirements(
        data.requirements || []
      );
    } catch (err) {
      console.error(
        "Fetch requirements error:",
        err
      );

      setRequirementsError(
        err.message ||
          "Unable to load requirements."
      );
    } finally {
      setLoadingRequirements(false);
    }
  };

  /* =========================
     OPEN VIEW ORDER
  ========================= */

  const handleViewOrder = async (order) => {
    try {
      setSelectedOrder(order);
      setShowDetailsModal(true);
      setOrderRequirements([]);
      setRequirementsError("");

      const [freshOrder] = await Promise.all([
        fetchOrderById(order._id),
        fetchOrderRequirements(order._id),
      ]);

      setSelectedOrder(freshOrder);
    } catch (err) {
      console.error("View order error:", err);

      /* We still keep the existing order visible */
    }
  };

  /* =========================
     CLOSE DETAILS MODAL
  ========================= */

  const handleCloseDetails = () => {
    setShowDetailsModal(false);
    setSelectedOrder(null);
    setOrderRequirements([]);
    setRequirementsError("");
  };

  /* =========================
     OPEN ADD REQUIREMENT
  ========================= */

  const handleOpenAddRequirement = () => {
    if (!selectedOrder) return;

    const firstItem = selectedOrder.items?.[0];

    setEditingRequirementId(null);

    setRequirementForm({
      ...getEmptyRequirementForm(),
      productName: firstItem?.productName || "",
      quantity: firstItem?.quantity || "",
    });

    setRequirementError("");
    setShowRequirementModal(true);
  };

  /* =========================
     OPEN EDIT REQUIREMENT
  ========================= */

  const handleOpenEditRequirement = (requirement) => {
    setEditingRequirementId(requirement._id);

    setRequirementForm({
      productName: requirement.productName || "",
      quantity: requirement.quantity || "",
      cardType:
        requirement.cardType || "NFC + QR",
      cardColor: requirement.cardColor || "",
      designRequirement:
        requirement.designRequirement || "",
      namePrinting:
        requirement.namePrinting ?? true,
      logoRequired:
        requirement.logoRequired ?? false,
      additionalRequirements:
        requirement.additionalRequirements || "",
      remarks: requirement.remarks || "",
    });

    setRequirementError("");
    setShowRequirementModal(true);
  };

  /* =========================
     CLOSE REQUIREMENT MODAL
  ========================= */

  const handleCloseRequirementModal = () => {
    if (requirementSubmitting) return;

    setShowRequirementModal(false);
    setEditingRequirementId(null);
    setRequirementForm(
      getEmptyRequirementForm()
    );
    setRequirementError("");
  };

  /* =========================
     CREATE / UPDATE REQUIREMENT
  ========================= */

  const handleSaveRequirement = async (e) => {
    e.preventDefault();

    setRequirementError("");

    if (!selectedOrder?._id) {
      setRequirementError(
        "Order information is missing."
      );
      return;
    }

    if (!requirementForm.productName.trim()) {
      setRequirementError(
        "Product name is required."
      );
      return;
    }

    if (
      !requirementForm.quantity ||
      Number(requirementForm.quantity) < 1
    ) {
      setRequirementError(
        "Quantity must be at least 1."
      );
      return;
    }

    try {
      setRequirementSubmitting(true);

      const token = getToken();

      if (!token) {
        setRequirementError(
          "Authentication token not found. Please login again."
        );
        return;
      }

      const payload = {
        productName:
          requirementForm.productName.trim(),

        quantity: Number(
          requirementForm.quantity
        ),

        cardType:
          requirementForm.cardType,

        cardColor:
          requirementForm.cardColor.trim(),

        designRequirement:
          requirementForm.designRequirement.trim(),

        namePrinting:
          Boolean(requirementForm.namePrinting),

        logoRequired:
          Boolean(requirementForm.logoRequired),

        additionalRequirements:
          requirementForm.additionalRequirements.trim(),

        remarks:
          requirementForm.remarks.trim(),
      };

      let response;

      if (editingRequirementId) {
        response = await fetch(
          `${API_BASE_URL}/order-requirements/${editingRequirementId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
          }
        );
      } else {
        response = await fetch(
          `${API_BASE_URL}/order-requirements`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              order: selectedOrder._id,
              ...payload,
            }),
          }
        );
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to save requirement"
        );
      }

      /* Refresh requirement list */
      await fetchOrderRequirements(
        selectedOrder._id
      );

      setShowRequirementModal(false);
      setEditingRequirementId(null);
      setRequirementForm(
        getEmptyRequirementForm()
      );
    } catch (err) {
      console.error(
        "Save requirement error:",
        err
      );

      setRequirementError(
        err.message ||
          "Unable to save requirement."
      );
    } finally {
      setRequirementSubmitting(false);
    }
  };

  /* =========================
     FILTERED ORDERS
  ========================= */

  const filteredOrders = useMemo(() => {
    const searchValue =
      search.toLowerCase().trim();

    return orders.filter((order) => {
      const lead = order.lead || {};
      const items = order.items || [];

      const productText = items
        .map(
          (item) =>
            item.productName || ""
        )
        .join(" ");

      const matchesSearch =
        !searchValue ||
        (order.orderNumber || "")
          .toLowerCase()
          .includes(searchValue) ||
        (lead.companyName || "")
          .toLowerCase()
          .includes(searchValue) ||
        (lead.contactPerson || "")
          .toLowerCase()
          .includes(searchValue) ||
        (lead.email || "")
          .toLowerCase()
          .includes(searchValue) ||
        productText
          .toLowerCase()
          .includes(searchValue);

      const matchesFilter =
        filter === "All" ||
        order.status === filter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });
  }, [orders, search, filter]);

  /* =========================
     STATS
  ========================= */

  const totalOrders = orders.length;

  const processingOrders =
    orders.filter(
      (order) =>
        order.status === "Processing"
    ).length;

  const confirmedOrders =
    orders.filter(
      (order) =>
        order.status ===
        "Order Confirmed"
    ).length;

  const completedOrders =
    orders.filter(
      (order) =>
        order.status === "Completed"
    ).length;

  /* =========================
     RENDER
  ========================= */

  return (
    <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
      <div className="flex min-h-screen w-full">

        {/* =========================
            SIDEBAR
        ========================= */}

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
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search orders..."
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
              MAIN
          ========================= */}

          <div className="w-full p-6 sm:p-8 lg:p-10">

            {/* TITLE */}

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                  Orders
                </h1>

                <p className="mt-1 text-sm text-[#94909d]">
                  Manage customer orders, processing, and order status.
                </p>
              </div>

              <button
                type="button"
                onClick={handleOpenModal}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                <PlusIcon />
                Add Order
              </button>
            </div>

            {/* =========================
                ERROR
            ========================= */}

            {error && (
              <div className="mt-5 flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                <span>{error}</span>

                <button
                  type="button"
                  onClick={fetchOrders}
                  className="ml-3 flex items-center gap-1 font-semibold underline"
                >
                  <RefreshIcon />
                  Retry
                </button>
              </div>
            )}

            {/* =========================
                STATS
            ========================= */}

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {/* TOTAL */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      Total Orders
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {totalOrders}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <PackageIcon />
                  </div>
                </div>
              </div>

              {/* PROCESSING */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      Processing
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {processingOrders}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <ClockIcon />
                  </div>
                </div>
              </div>

              {/* CONFIRMED */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      Order Confirmed
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {confirmedOrders}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <PackageIcon />
                  </div>
                </div>
              </div>

              {/* COMPLETED */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      Completed
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {completedOrders}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <CheckIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                ORDER TABLE
            ========================= */}

            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">

              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">

                <div>
                  <h2 className="text-base font-semibold text-[#272631]">
                    Order Management
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {filteredOrders.length} orders displayed
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "All",
                    "Order Confirmed",
                    "Processing",
                    "Completed",
                    "Cancelled",
                  ].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() =>
                        setFilter(item)
                      }
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
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />

                  <p className="mt-4 text-sm text-[#96929f]">
                    Loading orders...
                  </p>
                </div>
              ) : filteredOrders.length === 0 ? (
                /* EMPTY */

                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <PackageIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    No orders found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    Try changing your search or filter.
                  </p>
                </div>
              ) : (
                /* TABLE */

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1200px] text-left">

                    <thead className="border-b border-[#eeeaf4] bg-[#fcfbff]">
                      <tr>
                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Order
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Customer
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Product
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Quantity
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Amount
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Order Date
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Created By
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Status
                        </th>

                        <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[#eeeaf4]">
                      {filteredOrders.map((order) => {
                        const lead = order.lead || {};
                        const firstItem =
                          order.items?.[0];

                        return (
                          <tr
                            key={order._id}
                            className="transition hover:bg-[#fcfbff]"
                          >
                            {/* ORDER */}

                            <td className="px-5 py-4">
                              <p className="text-sm font-bold text-[#292732]">
                                {order.orderNumber}
                              </p>

                              <p className="mt-1 text-[11px] text-[#96929f]">
                                {formatDate(
                                  order.orderDate
                                )}
                              </p>
                            </td>

                            {/* CUSTOMER */}

                            <td className="px-5 py-4">
                              <p className="text-sm font-semibold text-[#292732]">
                                {lead.companyName ||
                                  "Unknown Company"}
                              </p>

                              <p className="mt-1 text-xs text-[#96929f]">
                                {lead.contactPerson ||
                                  "-"}
                              </p>
                            </td>

                            {/* PRODUCT */}

                            <td className="px-5 py-4">
                              <p className="text-sm text-[#4e4a57]">
                                {firstItem?.productName ||
                                  "-"}
                              </p>
                            </td>

                            {/* QUANTITY */}

                            <td className="px-5 py-4">
                              <span className="text-sm font-semibold text-[#4e4a57]">
                                {firstItem?.quantity ||
                                  0}
                              </span>
                            </td>

                            {/* AMOUNT */}

                            <td className="px-5 py-4">
                              <span className="text-sm font-bold text-[#292732]">
                                {formatCurrency(
                                  order.totalAmount
                                )}
                              </span>
                            </td>

                            {/* DATE */}

                            <td className="px-5 py-4">
                              <span className="text-xs text-[#66626f]">
                                {formatDate(
                                  order.orderDate
                                )}
                              </span>
                            </td>

                            {/* CREATED BY */}

                            <td className="px-5 py-4">
                              <span className="text-xs font-semibold text-[#4e4a57]">
                                {order.createdBy
                                  ?.name || "-"}
                              </span>
                            </td>

                            {/* STATUS */}

                            <td className="px-5 py-4">
                              <select
                                value={
                                  order.status ||
                                  "Order Confirmed"
                                }
                                onChange={(e) =>
                                  updateStatus(
                                    order._id,
                                    e.target.value
                                  )
                                }
                                className={`rounded-full border-0 px-3 py-1.5 text-[10px] font-semibold outline-none ${getStatusClasses(
                                  order.status
                                )}`}
                              >
                                {ORDER_STATUSES.map(
                                  (status) => (
                                    <option
                                      key={status}
                                      value={status}
                                    >
                                      {status}
                                    </option>
                                  )
                                )}
                              </select>
                            </td>

                            {/* ACTION */}

                            <td className="px-5 py-4">
                              <button
                                type="button"
                                onClick={() =>
                                  handleViewOrder(
                                    order
                                  )
                                }
                                className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-[#e3dfeb] px-3 py-2 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                              >
                                <EyeIcon />
                                View Order
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* =========================================================
          ADD ORDER MODAL
      ========================================================= */}

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

          <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
              <div>
                <h2 className="text-lg font-bold text-[#272631]">
                  Add Order
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  Create a new customer order and its requirements.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
              >
                <XIcon />
              </button>
            </div>

            <form onSubmit={handleCreateOrder}>

              <div className="max-h-[72vh] overflow-y-auto px-6 py-6">

                {formError && (
                  <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* LEAD */}

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Select Lead *
                    </label>

                    <select
                      name="lead"
                      value={form.lead}
                      onChange={handleLeadChange}
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
                        <option
                          key={lead._id}
                          value={lead._id}
                        >
                          {lead.companyName ||
                            lead.contactPerson ||
                            "Unnamed Lead"}
                        </option>
                      ))}
                    </select>

                    {!loadingLeads &&
                      leads.length === 0 && (
                        <p className="mt-2 text-xs text-orange-600">
                          No leads found. Create a lead first.
                        </p>
                      )}
                  </div>

                  {/* ORDER NUMBER */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Order Number *
                    </label>

                    <input
                      type="text"
                      name="orderNumber"
                      value={form.orderNumber}
                      onChange={handleChange}
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* ORDER DATE */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Order Date
                    </label>

                    <input
                      type="date"
                      name="orderDate"
                      value={form.orderDate}
                      onChange={handleChange}
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* PRODUCT */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Product *
                    </label>

                    <input
                      type="text"
                      name="productName"
                      value={form.productName}
                      onChange={handleChange}
                      placeholder="e.g. Premium NFC Cards"
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* QUANTITY */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Quantity *
                    </label>

                    <input
                      type="number"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 100"
                      min="1"
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* UNIT PRICE */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Unit Price *
                    </label>

                    <input
                      type="number"
                      name="unitPrice"
                      value={form.unitPrice}
                      onChange={handleChange}
                      placeholder="e.g. 150"
                      min="0"
                      step="0.01"
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* TOTAL */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Total Amount
                    </label>

                    <div className="mt-2 flex h-10 items-center rounded-lg border border-[#e3dfeb] bg-gray-50 px-3 text-sm font-bold text-[#292732]">
                      {formatCurrency(
                        Number(form.quantity || 0) *
                          Number(
                            form.unitPrice || 0
                          )
                      )}
                    </div>
                  </div>

                  {/* =========================
                      REQUIREMENT SECTION
                  ========================= */}

                  <div className="sm:col-span-2">
                    <div className="mb-1 mt-2 border-t border-[#eeeaf4] pt-5">
                      <h3 className="text-sm font-bold text-[#272631]">
                        Card Requirements
                      </h3>

                      <p className="mt-1 text-xs text-[#96929f]">
                        Add the card production requirements for this order.
                      </p>
                    </div>
                  </div>

                  {/* CARD TYPE */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Card Type
                    </label>

                    <select
                      name="cardType"
                      value={form.cardType}
                      onChange={handleChange}
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >
                      {CARD_TYPES.map(
                        (type) => (
                          <option
                            key={type}
                            value={type}
                          >
                            {type}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  {/* CARD COLOR */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Card Color
                    </label>

                    <input
                      type="text"
                      name="cardColor"
                      value={form.cardColor}
                      onChange={handleChange}
                      placeholder="e.g. Matte Black"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* DESIGN */}

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Design Requirement
                    </label>

                    <textarea
                      name="designRequirement"
                      value={
                        form.designRequirement
                      }
                      onChange={handleChange}
                      rows="3"
                      placeholder="Describe the card design requirements..."
                      className="mt-2 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* CHECKBOXES */}

                  <div className="sm:col-span-2">
                    <div className="flex flex-wrap gap-6">

                      <label className="flex cursor-pointer items-center gap-2 text-sm text-[#4e4a57]">
                        <input
                          type="checkbox"
                          name="namePrinting"
                          checked={
                            form.namePrinting
                          }
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />

                        Name Printing Required
                      </label>

                      <label className="flex cursor-pointer items-center gap-2 text-sm text-[#4e4a57]">
                        <input
                          type="checkbox"
                          name="logoRequired"
                          checked={
                            form.logoRequired
                          }
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />

                        Logo Required
                      </label>

                    </div>
                  </div>

                  {/* ADDITIONAL REQUIREMENTS */}

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Additional Requirements
                    </label>

                    <textarea
                      name="additionalRequirements"
                      value={
                        form.additionalRequirements
                      }
                      onChange={handleChange}
                      rows="3"
                      placeholder="Enter any additional production requirements..."
                      className="mt-2 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* ORDER REQUIREMENTS */}

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Order Requirements
                    </label>

                    <textarea
                      name="requirements"
                      value={
                        form.requirements
                      }
                      onChange={handleChange}
                      rows="3"
                      placeholder="Enter general order requirements..."
                      className="mt-2 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* REMARKS */}

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Remarks
                    </label>

                    <textarea
                      name="remarks"
                      value={form.remarks}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Enter remarks..."
                      className="mt-2 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                </div>
              </div>

              {/* FOOTER */}

              <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">

                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={submitting}
                  className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
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
                    : "Create Order"}
                </button>

              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================
          VIEW ORDER DETAILS MODAL
      ========================================================= */}

      {showDetailsModal &&
        selectedOrder && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

            <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">

              {/* HEADER */}

              <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">

                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-bold text-[#272631]">
                      Order Details
                    </h2>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-semibold ${getStatusClasses(
                        selectedOrder.status
                      )}`}
                    >
                      {selectedOrder.status}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {selectedOrder.orderNumber}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={
                    handleCloseDetails
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
                >
                  <XIcon />
                </button>

              </div>

              {/* CONTENT */}

              <div className="max-h-[78vh] overflow-y-auto px-6 py-6">

                {/* ORDER SUMMARY */}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                  {/* CUSTOMER */}

                  <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                      Customer
                    </p>

                    <p className="mt-2 text-sm font-bold text-[#292732]">
                      {selectedOrder.lead
                        ?.companyName ||
                        "Unknown Company"}
                    </p>

                    <p className="mt-1 text-xs text-[#66626f]">
                      {selectedOrder.lead
                        ?.contactPerson ||
                        "-"}
                    </p>

                    {selectedOrder.lead
                      ?.email && (
                      <p className="mt-1 text-xs text-[#96929f]">
                        {
                          selectedOrder.lead
                            .email
                        }
                      </p>
                    )}
                  </div>

                  {/* ORDER DATE */}

                  <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                      Order Date
                    </p>

                    <p className="mt-2 text-sm font-bold text-[#292732]">
                      {formatDate(
                        selectedOrder.orderDate
                      )}
                    </p>

                    <p className="mt-1 text-xs text-[#96929f]">
                      Created by{" "}
                      {selectedOrder
                        .createdBy?.name ||
                        "-"}
                    </p>
                  </div>

                  {/* TOTAL */}

                  <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                      Total Amount
                    </p>

                    <p className="mt-2 text-xl font-bold text-indigo-600">
                      {formatCurrency(
                        selectedOrder.totalAmount
                      )}
                    </p>

                    <div className="mt-2">
                      <select
                        value={
                          selectedOrder.status
                        }
                        onChange={(e) =>
                          updateStatus(
                            selectedOrder._id,
                            e.target.value
                          )
                        }
                        className={`rounded-full border-0 px-3 py-1.5 text-[10px] font-semibold outline-none ${getStatusClasses(
                          selectedOrder.status
                        )}`}
                      >
                        {ORDER_STATUSES.map(
                          (status) => (
                            <option
                              key={status}
                              value={status}
                            >
                              {status}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                </div>

                {/* ITEMS */}

                <div className="mt-6">
                  <h3 className="text-sm font-bold text-[#272631]">
                    Order Items
                  </h3>

                  <div className="mt-3 overflow-hidden rounded-xl border border-[#e5e1ed]">

                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[600px] text-left">

                        <thead className="bg-[#fcfbff]">
                          <tr>
                            <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                              Product
                            </th>

                            <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                              Quantity
                            </th>

                            <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                              Unit Price
                            </th>

                            <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#96929f]">
                              Amount
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-[#eeeaf4]">
                          {(selectedOrder.items ||
                            []).map(
                            (item, index) => (
                              <tr
                                key={
                                  item._id ||
                                  index
                                }
                              >
                                <td className="px-4 py-3 text-sm font-semibold text-[#292732]">
                                  {
                                    item.productName
                                  }
                                </td>

                                <td className="px-4 py-3 text-sm text-[#66626f]">
                                  {
                                    item.quantity
                                  }
                                </td>

                                <td className="px-4 py-3 text-sm text-[#66626f]">
                                  {formatCurrency(
                                    item.unitPrice
                                  )}
                                </td>

                                <td className="px-4 py-3 text-sm font-bold text-[#292732]">
                                  {formatCurrency(
                                    item.amount
                                  )}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>

                      </table>
                    </div>
                  </div>
                </div>

                {/* REQUIREMENTS */}

                <div className="mt-7">

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <h3 className="text-sm font-bold text-[#272631]">
                        Card Requirements
                      </h3>

                      <p className="mt-1 text-xs text-[#96929f]">
                        Production requirements for this order.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={
                        handleOpenAddRequirement
                      }
                      className="flex h-9 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition hover:bg-indigo-700"
                    >
                      <PlusIcon />
                      Add Requirement
                    </button>

                  </div>

                  {/* REQUIREMENT ERROR */}

                  {requirementsError && (
                    <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600">
                      {requirementsError}
                    </div>
                  )}

                  {/* REQUIREMENT LOADING */}

                  {loadingRequirements ? (
                    <div className="mt-4 rounded-xl border border-[#e5e1ed] px-5 py-10 text-center">
                      <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />

                      <p className="mt-3 text-xs text-[#96929f]">
                        Loading requirements...
                      </p>
                    </div>
                  ) : orderRequirements.length ===
                    0 ? (
                    <div className="mt-4 rounded-xl border border-dashed border-[#ddd8e8] bg-[#fcfbff] px-5 py-10 text-center">
                      <PackageIcon />

                      <p className="mt-3 text-sm font-semibold text-[#4e4a57]">
                        No card requirements added
                      </p>

                      <p className="mt-1 text-xs text-[#96929f]">
                        Add production requirements for this order.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">

                      {orderRequirements.map(
                        (requirement) => (
                          <div
                            key={
                              requirement._id
                            }
                            className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm"
                          >

                            {/* REQUIREMENT TOP */}

                            <div className="flex items-start justify-between gap-3">

                              <div>
                                <h4 className="text-sm font-bold text-[#292732]">
                                  {
                                    requirement.productName
                                  }
                                </h4>

                                <p className="mt-1 text-xs text-[#96929f]">
                                  Quantity:{" "}
                                  {
                                    requirement.quantity
                                  }
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() =>
                                  handleOpenEditRequirement(
                                    requirement
                                  )
                                }
                                className="flex h-8 items-center gap-1.5 rounded-lg border border-[#e3dfeb] px-2.5 text-[11px] font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                              >
                                <EditIcon />
                                Edit
                              </button>

                            </div>

                            {/* DETAILS */}

                            <div className="mt-4 grid grid-cols-2 gap-3">

                              <div className="rounded-lg bg-[#fcfbff] p-3">
                                <p className="text-[10px] font-semibold uppercase text-[#96929f]">
                                  Card Type
                                </p>

                                <p className="mt-1 text-xs font-semibold text-[#4e4a57]">
                                  {
                                    requirement.cardType ||
                                      "-"
                                  }
                                </p>
                              </div>

                              <div className="rounded-lg bg-[#fcfbff] p-3">
                                <p className="text-[10px] font-semibold uppercase text-[#96929f]">
                                  Card Color
                                </p>

                                <p className="mt-1 text-xs font-semibold text-[#4e4a57]">
                                  {
                                    requirement.cardColor ||
                                      "-"
                                  }
                                </p>
                              </div>

                              <div className="rounded-lg bg-[#fcfbff] p-3">
                                <p className="text-[10px] font-semibold uppercase text-[#96929f]">
                                  Name Printing
                                </p>

                                <p className="mt-1 text-xs font-semibold text-[#4e4a57]">
                                  {requirement.namePrinting
                                    ? "Required"
                                    : "Not Required"}
                                </p>
                              </div>

                              <div className="rounded-lg bg-[#fcfbff] p-3">
                                <p className="text-[10px] font-semibold uppercase text-[#96929f]">
                                  Logo
                                </p>

                                <p className="mt-1 text-xs font-semibold text-[#4e4a57]">
                                  {requirement.logoRequired
                                    ? "Required"
                                    : "Not Required"}
                                </p>
                              </div>

                            </div>

                            {/* DESIGN */}

                            {requirement.designRequirement && (
                              <div className="mt-4">
                                <p className="text-[10px] font-semibold uppercase text-[#96929f]">
                                  Design Requirement
                                </p>

                                <p className="mt-1 whitespace-pre-wrap text-xs leading-5 text-[#66626f]">
                                  {
                                    requirement.designRequirement
                                  }
                                </p>
                              </div>
                            )}

                            {/* ADDITIONAL */}

                            {requirement.additionalRequirements && (
                              <div className="mt-4">
                                <p className="text-[10px] font-semibold uppercase text-[#96929f]">
                                  Additional Requirements
                                </p>

                                <p className="mt-1 whitespace-pre-wrap text-xs leading-5 text-[#66626f]">
                                  {
                                    requirement.additionalRequirements
                                  }
                                </p>
                              </div>
                            )}

                            {/* REMARKS */}

                            {requirement.remarks && (
                              <div className="mt-4">
                                <p className="text-[10px] font-semibold uppercase text-[#96929f]">
                                  Remarks
                                </p>

                                <p className="mt-1 whitespace-pre-wrap text-xs leading-5 text-[#66626f]">
                                  {
                                    requirement.remarks
                                  }
                                </p>
                              </div>
                            )}

                          </div>
                        )
                      )}

                    </div>
                  )}
                </div>

                {/* GENERAL REQUIREMENTS */}

                {selectedOrder.requirements && (
                  <div className="mt-7">
                    <h3 className="text-sm font-bold text-[#272631]">
                      General Order Requirements
                    </h3>

                    <div className="mt-3 rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                      <p className="whitespace-pre-wrap text-sm leading-6 text-[#66626f]">
                        {
                          selectedOrder.requirements
                        }
                      </p>
                    </div>
                  </div>
                )}

                {/* REMARKS */}

                {selectedOrder.remarks && (
                  <div className="mt-5">
                    <h3 className="text-sm font-bold text-[#272631]">
                      Remarks
                    </h3>

                    <div className="mt-3 rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                      <p className="whitespace-pre-wrap text-sm leading-6 text-[#66626f]">
                        {
                          selectedOrder.remarks
                        }
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* FOOTER */}

              <div className="flex justify-end border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">

                <button
                  type="button"
                  onClick={
                    handleCloseDetails
                  }
                  className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
                >
                  Close
                </button>

              </div>

            </div>
          </div>
        )}

      {/* =========================================================
          ADD / EDIT REQUIREMENT MODAL
      ========================================================= */}

      {showRequirementModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">

              <div>
                <h2 className="text-lg font-bold text-[#272631]">
                  {editingRequirementId
                    ? "Edit Requirement"
                    : "Add Requirement"}
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  {selectedOrder?.orderNumber}
                </p>
              </div>

              <button
                type="button"
                onClick={
                  handleCloseRequirementModal
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
              >
                <XIcon />
              </button>

            </div>

            <form
              onSubmit={
                handleSaveRequirement
              }
            >

              <div className="max-h-[70vh] overflow-y-auto px-6 py-6">

                {requirementError && (
                  <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {requirementError}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* PRODUCT */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Product Name *
                    </label>

                    <input
                      type="text"
                      name="productName"
                      value={
                        requirementForm.productName
                      }
                      onChange={
                        handleRequirementFormChange
                      }
                      required
                      placeholder="e.g. Premium NFC Cards"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* QUANTITY */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Quantity *
                    </label>

                    <input
                      type="number"
                      name="quantity"
                      value={
                        requirementForm.quantity
                      }
                      onChange={
                        handleRequirementFormChange
                      }
                      min="1"
                      required
                      placeholder="e.g. 100"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* CARD TYPE */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Card Type
                    </label>

                    <select
                      name="cardType"
                      value={
                        requirementForm.cardType
                      }
                      onChange={
                        handleRequirementFormChange
                      }
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >
                      {CARD_TYPES.map(
                        (type) => (
                          <option
                            key={type}
                            value={type}
                          >
                            {type}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  {/* CARD COLOR */}

                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Card Color
                    </label>

                    <input
                      type="text"
                      name="cardColor"
                      value={
                        requirementForm.cardColor
                      }
                      onChange={
                        handleRequirementFormChange
                      }
                      placeholder="e.g. Matte Black"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* DESIGN */}

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Design Requirement
                    </label>

                    <textarea
                      name="designRequirement"
                      value={
                        requirementForm.designRequirement
                      }
                      onChange={
                        handleRequirementFormChange
                      }
                      rows="3"
                      placeholder="Describe design requirements..."
                      className="mt-2 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* CHECKBOXES */}

                  <div className="sm:col-span-2">
                    <div className="flex flex-wrap gap-6">

                      <label className="flex cursor-pointer items-center gap-2 text-sm text-[#4e4a57]">
                        <input
                          type="checkbox"
                          name="namePrinting"
                          checked={
                            requirementForm.namePrinting
                          }
                          onChange={
                            handleRequirementFormChange
                          }
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />

                        Name Printing Required
                      </label>

                      <label className="flex cursor-pointer items-center gap-2 text-sm text-[#4e4a57]">
                        <input
                          type="checkbox"
                          name="logoRequired"
                          checked={
                            requirementForm.logoRequired
                          }
                          onChange={
                            handleRequirementFormChange
                          }
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />

                        Logo Required
                      </label>

                    </div>
                  </div>

                  {/* ADDITIONAL */}

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Additional Requirements
                    </label>

                    <textarea
                      name="additionalRequirements"
                      value={
                        requirementForm.additionalRequirements
                      }
                      onChange={
                        handleRequirementFormChange
                      }
                      rows="3"
                      placeholder="Enter additional requirements..."
                      className="mt-2 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* REMARKS */}

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Remarks
                    </label>

                    <textarea
                      name="remarks"
                      value={
                        requirementForm.remarks
                      }
                      onChange={
                        handleRequirementFormChange
                      }
                      rows="3"
                      placeholder="Enter remarks..."
                      className="mt-2 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                </div>
              </div>

              {/* FOOTER */}

              <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">

                <button
                  type="button"
                  onClick={
                    handleCloseRequirementModal
                  }
                  disabled={
                    requirementSubmitting
                  }
                  className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={
                    requirementSubmitting
                  }
                  className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {requirementSubmitting
                    ? "Saving..."
                    : editingRequirementId
                    ? "Update Requirement"
                    : "Add Requirement"}
                </button>

              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
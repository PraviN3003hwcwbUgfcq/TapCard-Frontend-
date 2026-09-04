
// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const initialClients = [
//   {
//     id: 1,
//     companyName: "Metro Realty",
//     contactPerson: "Rahul Mehta",
//     designation: "Director",
//     phone: "+91 98765 43210",
//     email: "rahul@metrorealty.com",
//     website: "www.metrorealty.com",
//     industry: "Real Estate",
//     location: "Mumbai",
//     source: "Manual",
//     productInterest: "Digital Business Card",
//     requirement: "50 digital cards for sales team",
//     notes: "Interested in premium card design.",
//     isConvertedToLead: true,
//   },
//   {
//     id: 2,
//     companyName: "Sharma Dental Care",
//     contactPerson: "Dr. A. Sharma",
//     designation: "Dentist",
//     phone: "+91 98765 12345",
//     email: "info@sharmadental.com",
//     website: "www.sharmadental.com",
//     industry: "Healthcare",
//     location: "Delhi",
//     source: "Website",
//     productInterest: "Digital Business Card",
//     requirement: "Digital cards for doctors",
//     notes: "Follow up regarding pricing.",
//     isConvertedToLead: false,
//   },
//   {
//     id: 3,
//     companyName: "The Urban Table",
//     contactPerson: "Amit Kapoor",
//     designation: "Owner",
//     phone: "+91 99887 66554",
//     email: "amit@theurbantable.com",
//     website: "www.theurbantable.com",
//     industry: "Restaurant",
//     location: "Pune",
//     source: "Referral",
//     productInterest: "NFC Card",
//     requirement: "NFC cards for restaurant management",
//     notes: "Requested a demo.",
//     isConvertedToLead: false,
//   },
//   {
//     id: 4,
//     companyName: "Prime Properties",
//     contactPerson: "Neha Shah",
//     designation: "Manager",
//     phone: "+91 91234 56789",
//     email: "neha@primeproperties.com",
//     website: "www.primeproperties.com",
//     industry: "Real Estate",
//     location: "Bangalore",
//     source: "Manual",
//     productInterest: "NFC Card",
//     requirement: "Cards for property consultants",
//     notes: "Interested in bulk order.",
//     isConvertedToLead: true,
//   },
//   {
//     id: 5,
//     companyName: "Wellness Studio",
//     contactPerson: "Dr. Priya Singh",
//     designation: "Founder",
//     phone: "+91 97654 32109",
//     email: "priya@wellnessstudio.com",
//     website: "www.wellnessstudio.com",
//     industry: "Healthcare",
//     location: "Pune",
//     source: "Google",
//     productInterest: "Digital Business Card",
//     requirement: "Digital profile for entire team",
//     notes: "Negotiation pending.",
//     isConvertedToLead: false,
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
//       <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z" />
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
//       <path d="M4 7h16" />
//       <path d="M10 11v6M14 11v6" />
//       <path d="M6 7l1 14h10l1-14" />
//       <path d="M9 7V4h6v3" />
//     </svg>
//   );
// }

// function ArrowIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M5 12h14" />
//       <path d="m13 6 6 6-6 6" />
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

// function LocationIcon() {
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

// function Clients({ onNavigate }) {
//   const [clients, setClients] = useState(initialClients);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const [showModal, setShowModal] = useState(false);
//   const [showViewModal, setShowViewModal] = useState(false);

//   const [editingClient, setEditingClient] = useState(null);
//   const [selectedClient, setSelectedClient] = useState(null);

//   const emptyForm = {
//     companyName: "",
//     contactPerson: "",
//     designation: "",
//     phone: "",
//     email: "",
//     website: "",
//     industry: "",
//     location: "",
//     source: "Manual",
//     productInterest: "",
//     requirement: "",
//     notes: "",
//   };

//   const [form, setForm] = useState(emptyForm);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   const openCreateModal = () => {
//     setEditingClient(null);
//     setForm(emptyForm);
//     setShowModal(true);
//   };

//   const openEditModal = (client) => {
//     setEditingClient(client);

//     setForm({
//       companyName: client.companyName || "",
//       contactPerson: client.contactPerson || "",
//       designation: client.designation || "",
//       phone: client.phone || "",
//       email: client.email || "",
//       website: client.website || "",
//       industry: client.industry || "",
//       location: client.location || "",
//       source: client.source || "Manual",
//       productInterest: client.productInterest || "",
//       requirement: client.requirement || "",
//       notes: client.notes || "",
//     });

//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setEditingClient(null);
//     setForm(emptyForm);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.companyName.trim()) {
//       return;
//     }

//     if (editingClient) {
//       setClients((current) =>
//         current.map((client) =>
//           client.id === editingClient.id
//             ? {
//                 ...client,
//                 ...form,
//               }
//             : client
//         )
//       );
//     } else {
//       const newClient = {
//         id: Date.now(),
//         ...form,
//         isConvertedToLead: false,
//       };

//       setClients((current) => [newClient, ...current]);
//     }

//     closeModal();
//   };

//   const handleDelete = (id) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this client?"
//     );

//     if (!confirmed) return;

//     setClients((current) => current.filter((client) => client.id !== id));

//     if (selectedClient?.id === id) {
//       setSelectedClient(null);
//       setShowViewModal(false);
//     }
//   };

//   const convertToLead = (id) => {
//     setClients((current) =>
//       current.map((client) =>
//         client.id === id
//           ? {
//               ...client,
//               isConvertedToLead: true,
//             }
//           : client
//       )
//     );

//     setSelectedClient((current) =>
//       current
//         ? {
//             ...current,
//             isConvertedToLead: true,
//           }
//         : current
//     );
//   };

//   const openViewModal = (client) => {
//     setSelectedClient(client);
//     setShowViewModal(true);
//   };

//   const filteredClients = clients.filter((client) => {
//     const searchValue = search.toLowerCase().trim();

//     const matchesSearch =
//       client.companyName.toLowerCase().includes(searchValue) ||
//       (client.contactPerson || "").toLowerCase().includes(searchValue) ||
//       (client.industry || "").toLowerCase().includes(searchValue) ||
//       (client.location || "").toLowerCase().includes(searchValue) ||
//       (client.phone || "").toLowerCase().includes(searchValue) ||
//       (client.email || "").toLowerCase().includes(searchValue);

//     let matchesFilter = true;

//     if (filter === "Converted") {
//       matchesFilter = client.isConvertedToLead;
//     }

//     if (filter === "Not Converted") {
//       matchesFilter = !client.isConvertedToLead;
//     }

//     return matchesSearch && matchesFilter;
//   });

//   const totalClients = clients.length;

//   const convertedClients = clients.filter(
//     (client) => client.isConvertedToLead
//   ).length;

//   const potentialClients = clients.filter(
//     (client) => !client.isConvertedToLead
//   ).length;

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
//                 placeholder="Search clients..."
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
//                   Clients
//                 </h1>

//                 <p className="mt-1 text-sm text-[#94909d]">
//                   Manage your potential clients and convert them into leads.
//                 </p>
//               </div>

//               <button
//                 onClick={openCreateModal}
//                 className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//               >
//                 <PlusIcon />
//                 Add Client
//               </button>
//             </div>

//             <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <p className="text-xs font-medium text-[#96929f]">
//                   Total Clients
//                 </p>

//                 <p className="mt-2 text-2xl font-bold text-[#272631]">
//                   {totalClients}
//                 </p>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <p className="text-xs font-medium text-[#96929f]">
//                   Potential Clients
//                 </p>

//                 <p className="mt-2 text-2xl font-bold text-orange-600">
//                   {potentialClients}
//                 </p>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <p className="text-xs font-medium text-[#96929f]">
//                   Converted to Leads
//                 </p>

//                 <p className="mt-2 text-2xl font-bold text-green-600">
//                   {convertedClients}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Client Directory
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredClients.length} clients displayed
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {["All", "Not Converted", "Converted"].map((item) => (
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

//               {filteredClients.length === 0 ? (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <SearchIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No clients found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search or filter.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="divide-y divide-[#eeeaf4]">
//                   {filteredClients.map((client) => (
//                     <div
//                       key={client.id}
//                       className="p-5 transition hover:bg-[#fcfbff]"
//                     >
//                       <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
//                         <div className="flex min-w-0 items-start gap-4">
//                           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                             {client.companyName.charAt(0).toUpperCase()}
//                           </div>

//                           <div className="min-w-0">
//                             <div className="flex flex-wrap items-center gap-2">
//                               <h3 className="text-sm font-bold text-[#292732]">
//                                 {client.companyName}
//                               </h3>

//                               <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-600">
//                                 {client.industry || "Business"}
//                               </span>

//                               {client.isConvertedToLead ? (
//                                 <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-600">
//                                   Converted
//                                 </span>
//                               ) : (
//                                 <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-semibold text-orange-600">
//                                   Potential
//                                 </span>
//                               )}
//                             </div>

//                             <p className="mt-1 text-xs text-[#96929f]">
//                               {client.contactPerson || "No contact person"}
//                               {client.designation
//                                 ? ` · ${client.designation}`
//                                 : ""}
//                             </p>

//                             <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">
//                               {client.phone && (
//                                 <span className="flex items-center gap-1.5">
//                                   <PhoneIcon />
//                                   {client.phone}
//                                 </span>
//                               )}

//                               {client.email && (
//                                 <span className="flex items-center gap-1.5">
//                                   <MailIcon />
//                                   {client.email}
//                                 </span>
//                               )}

//                               {client.location && (
//                                 <span className="flex items-center gap-1.5">
//                                   <LocationIcon />
//                                   {client.location}
//                                 </span>
//                               )}
//                             </div>

//                             {client.requirement && (
//                               <p className="mt-3 max-w-2xl text-xs text-[#96929f]">
//                                 <span className="font-semibold text-[#66626f]">
//                                   Requirement:
//                                 </span>{" "}
//                                 {client.requirement}
//                               </p>
//                             )}
//                           </div>
//                         </div>

//                         <div className="flex shrink-0 flex-wrap items-center gap-2">
//                           <button
//                             onClick={() => openViewModal(client)}
//                             className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                           >
//                             <EyeIcon />
//                             View
//                           </button>

//                           <button
//                             onClick={() => openEditModal(client)}
//                             className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                           >
//                             <EditIcon />
//                             Edit
//                           </button>

//                           {!client.isConvertedToLead && (
//                             <button
//                               onClick={() => convertToLead(client.id)}
//                               className="flex h-9 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white transition hover:bg-indigo-700"
//                             >
//                               Convert
//                               <ArrowIcon />
//                             </button>
//                           )}

//                           <button
//                             onClick={() => handleDelete(client.id)}
//                             className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 text-red-500 transition hover:bg-red-50"
//                             title="Delete client"
//                           >
//                             <TrashIcon />
//                           </button>
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
//                   {editingClient ? "Edit Client" : "Add Client"}
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   {editingClient
//                     ? "Update client information."
//                     : "Add a new potential client to your CRM."}
//                 </p>
//               </div>

//               <button
//                 onClick={closeModal}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Company Name *
//                     </label>

//                     <input
//                       type="text"
//                       name="companyName"
//                       value={form.companyName}
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
//                       name="contactPerson"
//                       value={form.contactPerson}
//                       onChange={handleChange}
//                       placeholder="e.g. Rahul Mehta"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Designation
//                     </label>

//                     <input
//                       type="text"
//                       name="designation"
//                       value={form.designation}
//                       onChange={handleChange}
//                       placeholder="e.g. Director"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Phone
//                     </label>

//                     <input
//                       type="text"
//                       name="phone"
//                       value={form.phone}
//                       onChange={handleChange}
//                       placeholder="+91 98765 43210"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Email
//                     </label>

//                     <input
//                       type="email"
//                       name="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       placeholder="name@company.com"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Website
//                     </label>

//                     <input
//                       type="text"
//                       name="website"
//                       value={form.website}
//                       onChange={handleChange}
//                       placeholder="www.company.com"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Industry
//                     </label>

//                     <input
//                       type="text"
//                       name="industry"
//                       value={form.industry}
//                       onChange={handleChange}
//                       placeholder="e.g. Real Estate"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Location
//                     </label>

//                     <input
//                       type="text"
//                       name="location"
//                       value={form.location}
//                       onChange={handleChange}
//                       placeholder="e.g. Mumbai"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Source
//                     </label>

//                     <select
//                       name="source"
//                       value={form.source}
//                       onChange={handleChange}
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option value="Manual">Manual</option>
//                       <option value="Website">Website</option>
//                       <option value="Referral">Referral</option>
//                       <option value="Google">Google</option>
//                       <option value="Social Media">Social Media</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Product Interest
//                     </label>

//                     <input
//                       type="text"
//                       name="productInterest"
//                       value={form.productInterest}
//                       onChange={handleChange}
//                       placeholder="e.g. NFC Card"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div className="sm:col-span-2">
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Requirement
//                     </label>

//                     <textarea
//                       name="requirement"
//                       value={form.requirement}
//                       onChange={handleChange}
//                       placeholder="Describe the client's requirement..."
//                       rows="3"
//                       className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div className="sm:col-span-2">
//                     <label className="text-xs font-semibold text-[#4e4a57]">
//                       Notes
//                     </label>

//                     <textarea
//                       name="notes"
//                       value={form.notes}
//                       onChange={handleChange}
//                       placeholder="Add notes about this client..."
//                       rows="3"
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
//                   {editingClient ? "Update Client" : "Create Client"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {showViewModal && selectedClient && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">
//                   {selectedClient.companyName.charAt(0).toUpperCase()}
//                 </div>

//                 <div>
//                   <h2 className="text-lg font-bold text-[#272631]">
//                     {selectedClient.companyName}
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {selectedClient.industry || "Business"}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setShowViewModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
//               <div className="mb-6 flex flex-wrap gap-2">
//                 {selectedClient.isConvertedToLead ? (
//                   <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
//                     Converted to Lead
//                   </span>
//                 ) : (
//                   <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600">
//                     Potential Client
//                   </span>
//                 )}

//                 <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
//                   {selectedClient.source || "Manual"}
//                 </span>
//               </div>

//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                 <div>
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//                     Contact Person
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#45424e]">
//                     {selectedClient.contactPerson || "Not provided"}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//                     Designation
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#45424e]">
//                     {selectedClient.designation || "Not provided"}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//                     Phone
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#45424e]">
//                     {selectedClient.phone || "Not provided"}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//                     Email
//                   </p>

//                   <p className="mt-1 break-all text-sm font-semibold text-[#45424e]">
//                     {selectedClient.email || "Not provided"}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//                     Website
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-indigo-600">
//                     {selectedClient.website || "Not provided"}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//                     Location
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#45424e]">
//                     {selectedClient.location || "Not provided"}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//                     Product Interest
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#45424e]">
//                     {selectedClient.productInterest || "Not provided"}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//                     Source
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-[#45424e]">
//                     {selectedClient.source || "Manual"}
//                   </p>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//                     Requirement
//                   </p>

//                   <p className="mt-2 rounded-lg bg-[#faf8ff] p-4 text-sm leading-6 text-[#66626f]">
//                     {selectedClient.requirement || "No requirement added."}
//                   </p>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//                     Notes
//                   </p>

//                   <p className="mt-2 rounded-lg bg-[#faf8ff] p-4 text-sm leading-6 text-[#66626f]">
//                     {selectedClient.notes || "No notes added."}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
//               {!selectedClient.isConvertedToLead && (
//                 <button
//                   onClick={() => convertToLead(selectedClient.id)}
//                   className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
//                 >
//                   Convert to Lead
//                   <ArrowIcon />
//                 </button>
//               )}

//               <button
//                 onClick={() => {
//                   setShowViewModal(false);
//                   openEditModal(selectedClient);
//                 }}
//                 className="flex h-10 items-center gap-2 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
//               >
//                 <EditIcon />
//                 Edit
//               </button>

//               <button
//                 onClick={() => setShowViewModal(false)}
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

// export default Clients;






























import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const LEAD_API = `${API_BASE_URL}/leads`;

const EMPTY_FORM = {
  companyName: "",
  contactPerson: "",
  designation: "",
  phone: "",
  email: "",
  website: "",
  industry: "",
  location: "",
  source: "Manual",
  productInterest: "",
  requirement: "",
  notes: "",
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
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M4 7h16" />
      <path d="M10 11v6M14 11v6" />
      <path d="M6 7l1 14h10l1-14" />
      <path d="M9 7V4h6v3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
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

function LocationIcon() {
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

function Clients({ onNavigate }) {
  const [clients, setClients] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const [editingClient, setEditingClient] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);

  const [form, setForm] = useState(EMPTY_FORM);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [convertingId, setConvertingId] = useState(null);

  const [error, setError] = useState("");

  // =========================================================
  // AUTH
  // =========================================================

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

  // =========================================================
  // RESPONSE HANDLER
  // =========================================================

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

  // =========================================================
  // NORMALIZE LEAD → CLIENT
  // =========================================================

  const normalizeClient = (lead) => {
    if (!lead) return null;

    return {
      ...lead,

      id: lead._id || lead.id,

      companyName: lead.companyName || "",
      contactPerson: lead.contactPerson || "",
      designation: lead.designation || "",
      phone: lead.phone || "",
      email: lead.email || "",
      website: lead.website || "",
      industry: lead.industry || "",
      location: lead.location || "",
      source: lead.source || "Manual",
      productInterest: lead.productInterest || "",
      requirement: lead.requirement || "",

      // Lead.remarks is used as Client.notes
      notes: lead.remarks || "",

      // A Lead is considered converted when status is Converted
      isConvertedToLead: lead.status === "Converted",

      status: lead.status || "New",
      priority: lead.priority || "Medium",
      nextFollowUp: lead.nextFollowUp || null,
      assignedTo: lead.assignedTo || null,
      potentialClient: lead.potentialClient || null,
    };
  };

  // =========================================================
  // GET ALL LEADS
  // =========================================================

  const loadClients = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(LEAD_API, {
        method: "GET",
        headers: getHeaders(),
      });

      const data = await parseResponse(response);

      const leadList =
        data?.leads ||
        data?.data ||
        (Array.isArray(data) ? data : []);

      const normalizedClients = leadList
        .map(normalizeClient)
        .filter(Boolean);

      setClients(normalizedClients);
    } catch (err) {
      console.error("Load clients/leads error:", err);
      setError(err.message || "Unable to load clients.");
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // INITIAL LOAD
  // =========================================================

  useEffect(() => {
    loadClients();
  }, []);

  // =========================================================
  // FORM CHANGE
  // =========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // =========================================================
  // CREATE MODAL
  // =========================================================

  const openCreateModal = () => {
    setEditingClient(null);
    setForm(EMPTY_FORM);
    setError("");
    setShowModal(true);
  };

  // =========================================================
  // EDIT MODAL
  // =========================================================

  const openEditModal = (client) => {
    setEditingClient(client);

    setForm({
      companyName: client.companyName || "",
      contactPerson: client.contactPerson || "",
      designation: client.designation || "",
      phone: client.phone || "",
      email: client.email || "",
      website: client.website || "",
      industry: client.industry || "",
      location: client.location || "",
      source: client.source || "Manual",
      productInterest: client.productInterest || "",
      requirement: client.requirement || "",
      notes: client.notes || "",
    });

    setError("");
    setShowModal(true);
  };

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const closeModal = () => {
    if (saving) return;

    setShowModal(false);
    setEditingClient(null);
    setForm(EMPTY_FORM);
    setError("");
  };

  // =========================================================
  // CREATE / UPDATE LEAD
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.companyName.trim()) {
      setError("Company Name is required.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const payload = {
        companyName: form.companyName.trim(),
        contactPerson: form.contactPerson.trim(),
        designation: form.designation.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        website: form.website.trim(),
        industry: form.industry.trim(),
        location: form.location.trim(),
        source: form.source,
        productInterest: form.productInterest.trim(),
        requirement: form.requirement.trim(),
        remarks: form.notes.trim(),
      };

      let response;

      if (editingClient) {
        // Keep existing Lead status while editing
        payload.status = editingClient.status || "New";
        payload.priority = editingClient.priority || "Medium";

        response = await fetch(
          `${LEAD_API}/${editingClient.id}`,
          {
            method: "PUT",
            headers: getHeaders(true),
            body: JSON.stringify(payload),
          }
        );
      } else {
        // New Client = New Lead
        payload.status = "New";
        payload.priority = "Medium";

        response = await fetch(LEAD_API, {
          method: "POST",
          headers: getHeaders(true),
          body: JSON.stringify(payload),
        });
      }

      await parseResponse(response);

      await loadClients();

      closeModal();
    } catch (err) {
      console.error("Save client/lead error:", err);
      setError(err.message || "Unable to save client.");
    } finally {
      setSaving(false);
    }
  };

  // =========================================================
  // DELETE LEAD
  // =========================================================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this client?"
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setError("");

      const response = await fetch(`${LEAD_API}/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
      });

      await parseResponse(response);

      setClients((current) =>
        current.filter((client) => client.id !== id)
      );

      if (selectedClient?.id === id) {
        setSelectedClient(null);
        setShowViewModal(false);
      }
    } catch (err) {
      console.error("Delete client/lead error:", err);
      setError(err.message || "Unable to delete client.");
    } finally {
      setDeletingId(null);
    }
  };

  // =========================================================
  // CONVERT LEAD
  // =========================================================

  const convertToLead = async (id) => {
    const client = clients.find((item) => item.id === id);

    if (!client) return;

    if (client.status === "Converted") {
      return;
    }

    try {
      setConvertingId(id);
      setError("");

      const payload = {
        companyName: client.companyName,
        contactPerson: client.contactPerson,
        designation: client.designation,
        phone: client.phone,
        email: client.email,
        website: client.website,
        industry: client.industry,
        location: client.location,
        source: client.source,
        productInterest: client.productInterest,
        requirement: client.requirement,
        remarks: client.notes,

        status: "Converted",

        priority: client.priority || "Medium",
      };

      const response = await fetch(`${LEAD_API}/${id}`, {
        method: "PUT",
        headers: getHeaders(true),
        body: JSON.stringify(payload),
      });

      await parseResponse(response);

      await loadClients();

      setSelectedClient((current) =>
        current && current.id === id
          ? {
              ...current,
              status: "Converted",
              isConvertedToLead: true,
            }
          : current
      );
    } catch (err) {
      console.error("Convert lead error:", err);
      setError(err.message || "Unable to convert client.");
    } finally {
      setConvertingId(null);
    }
  };

  // =========================================================
  // VIEW MODAL
  // =========================================================

  const openViewModal = (client) => {
    setSelectedClient(client);
    setShowViewModal(true);
  };

  // =========================================================
  // FILTER + SEARCH
  // =========================================================

  const filteredClients = clients.filter((client) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      (client.companyName || "")
        .toLowerCase()
        .includes(searchValue) ||
      (client.contactPerson || "")
        .toLowerCase()
        .includes(searchValue) ||
      (client.industry || "")
        .toLowerCase()
        .includes(searchValue) ||
      (client.location || "")
        .toLowerCase()
        .includes(searchValue) ||
      (client.phone || "")
        .toLowerCase()
        .includes(searchValue) ||
      (client.email || "")
        .toLowerCase()
        .includes(searchValue);

    let matchesFilter = true;

    if (filter === "Converted") {
      matchesFilter = client.status === "Converted";
    }

    if (filter === "Not Converted") {
      matchesFilter = client.status !== "Converted";
    }

    return matchesSearch && matchesFilter;
  });

  // =========================================================
  // STATS
  // =========================================================

  const totalClients = clients.length;

  const convertedClients = clients.filter(
    (client) => client.status === "Converted"
  ).length;

  const potentialClients = clients.filter(
    (client) => client.status !== "Converted"
  ).length;

  // =========================================================
  // UI
  // =========================================================

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
                placeholder="Search clients..."
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

          {/* CONTENT */}
          <div className="w-full p-6 sm:p-8 lg:p-10">
            {/* TITLE */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="mt-1 text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                  Clients
                </h1>

                <p className="mt-1 text-sm text-[#94909d]">
                  Manage your potential clients and convert them into leads.
                </p>
              </div>

              <button
                onClick={openCreateModal}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                <PlusIcon />
                Add Client
              </button>
            </div>

            {/* ERROR */}
            {error && !showModal && (
              <div className="mt-5 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* STATS */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <p className="text-xs font-medium text-[#96929f]">
                  Total Clients
                </p>

                <p className="mt-2 text-2xl font-bold text-[#272631]">
                  {totalClients}
                </p>
              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <p className="text-xs font-medium text-[#96929f]">
                  Potential Clients
                </p>

                <p className="mt-2 text-2xl font-bold text-orange-600">
                  {potentialClients}
                </p>
              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <p className="text-xs font-medium text-[#96929f]">
                  Converted to Leads
                </p>

                <p className="mt-2 text-2xl font-bold text-green-600">
                  {convertedClients}
                </p>
              </div>
            </div>

            {/* DIRECTORY */}
            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#272631]">
                    Client Directory
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {filteredClients.length} clients displayed
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["All", "Not Converted", "Converted"].map((item) => (
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
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-indigo-100 border-t-indigo-600" />

                  <p className="mt-4 text-sm text-[#96929f]">
                    Loading clients...
                  </p>
                </div>
              ) : filteredClients.length === 0 ? (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <SearchIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    No clients found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    Try changing your search or filter.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#eeeaf4]">
                  {filteredClients.map((client) => (
                    <div
                      key={client.id}
                      className="p-5 transition hover:bg-[#fcfbff]"
                    >
                      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                        <div className="flex min-w-0 items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
                            {(client.companyName || "C")
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm font-bold text-[#292732]">
                                {client.companyName}
                              </h3>

                              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-600">
                                {client.industry || "Business"}
                              </span>

                              {client.status === "Converted" ? (
                                <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-600">
                                  Converted
                                </span>
                              ) : (
                                <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-semibold text-orange-600">
                                  Potential
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-xs text-[#96929f]">
                              {client.contactPerson || "No contact person"}

                              {client.designation
                                ? ` · ${client.designation}`
                                : ""}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">
                              {client.phone && (
                                <span className="flex items-center gap-1.5">
                                  <PhoneIcon />
                                  {client.phone}
                                </span>
                              )}

                              {client.email && (
                                <span className="flex items-center gap-1.5">
                                  <MailIcon />
                                  {client.email}
                                </span>
                              )}

                              {client.location && (
                                <span className="flex items-center gap-1.5">
                                  <LocationIcon />
                                  {client.location}
                                </span>
                              )}
                            </div>

                            {client.requirement && (
                              <p className="mt-3 max-w-2xl text-xs text-[#96929f]">
                                <span className="font-semibold text-[#66626f]">
                                  Requirement:
                                </span>{" "}
                                {client.requirement}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex shrink-0 flex-wrap items-center gap-2">
                          <button
                            onClick={() => openViewModal(client)}
                            className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                          >
                            <EyeIcon />
                            View
                          </button>

                          <button
                            onClick={() => openEditModal(client)}
                            className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                          >
                            <EditIcon />
                            Edit
                          </button>

                          {client.status !== "Converted" && (
                            <button
                              onClick={() => convertToLead(client.id)}
                              disabled={convertingId === client.id}
                              className="flex h-9 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                              {convertingId === client.id
                                ? "Converting..."
                                : "Convert"}

                              {convertingId !== client.id && <ArrowIcon />}
                            </button>
                          )}

                          <button
                            onClick={() => handleDelete(client.id)}
                            disabled={deletingId === client.id}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                            title="Delete client"
                          >
                            {deletingId === client.id ? (
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-200 border-t-red-500" />
                            ) : (
                              <TrashIcon />
                            )}
                          </button>
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
          ADD / EDIT MODAL
      ===================================================== */}

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
              <div>
                <h2 className="text-lg font-bold text-[#272631]">
                  {editingClient ? "Edit Client" : "Add Client"}
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  {editingClient
                    ? "Update client information."
                    : "Add a new potential client to your CRM."}
                </p>
              </div>

              <button
                onClick={closeModal}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
              >
                <XIcon />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
                {error && (
                  <div className="mb-5 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* COMPANY */}
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Company Name *
                    </label>

                    <input
                      type="text"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Metro Realty"
                      required
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* CONTACT */}
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Contact Person
                    </label>

                    <input
                      type="text"
                      name="contactPerson"
                      value={form.contactPerson}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Mehta"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* DESIGNATION */}
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Designation
                    </label>

                    <input
                      type="text"
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      placeholder="e.g. Director"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Phone
                    </label>

                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* WEBSITE */}
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Website
                    </label>

                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="www.company.com"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* INDUSTRY */}
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Industry
                    </label>

                    <input
                      type="text"
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      placeholder="e.g. Real Estate"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* LOCATION */}
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Location
                    </label>

                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="e.g. Mumbai"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* SOURCE */}
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Source
                    </label>

                    <select
                      name="source"
                      value={form.source}
                      onChange={handleChange}
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >
                      <option value="Manual">Manual</option>
                      <option value="Website">Website</option>
                      <option value="Referral">Referral</option>
                      <option value="Google">Google</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* PRODUCT */}
                  <div>
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Product Interest
                    </label>

                    <input
                      type="text"
                      name="productInterest"
                      value={form.productInterest}
                      onChange={handleChange}
                      placeholder="e.g. NFC Card"
                      className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* REQUIREMENT */}
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Requirement
                    </label>

                    <textarea
                      name="requirement"
                      value={form.requirement}
                      onChange={handleChange}
                      placeholder="Describe the client's requirement..."
                      rows="3"
                      className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* NOTES */}
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#4e4a57]">
                      Notes
                    </label>

                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Add notes about this client..."
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
                  onClick={closeModal}
                  disabled={saving}
                  className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingClient
                    ? "Update Client"
                    : "Create Client"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================
          VIEW MODAL
      ===================================================== */}

      {showViewModal && selectedClient && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">
                  {(selectedClient.companyName || "C")
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#272631]">
                    {selectedClient.companyName}
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {selectedClient.industry || "Business"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowViewModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100"
              >
                <XIcon />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedClient.status === "Converted" ? (
                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                    Converted to Lead
                  </span>
                ) : (
                  <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600">
                    Potential Client
                  </span>
                )}

                <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
                  {selectedClient.source || "Manual"}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
                    Contact Person
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#45424e]">
                    {selectedClient.contactPerson || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
                    Designation
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#45424e]">
                    {selectedClient.designation || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#45424e]">
                    {selectedClient.phone || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-[#45424e]">
                    {selectedClient.email || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
                    Website
                  </p>

                  <p className="mt-1 text-sm font-semibold text-indigo-600">
                    {selectedClient.website || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#45424e]">
                    {selectedClient.location || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
                    Product Interest
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#45424e]">
                    {selectedClient.productInterest || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
                    Source
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#45424e]">
                    {selectedClient.source || "Manual"}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
                    Requirement
                  </p>

                  <p className="mt-2 rounded-lg bg-[#faf8ff] p-4 text-sm leading-6 text-[#66626f]">
                    {selectedClient.requirement ||
                      "No requirement added."}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
                    Notes
                  </p>

                  <p className="mt-2 rounded-lg bg-[#faf8ff] p-4 text-sm leading-6 text-[#66626f]">
                    {selectedClient.notes || "No notes added."}
                  </p>
                </div>
              </div>
            </div>

            {/* VIEW FOOTER */}
            <div className="flex flex-wrap justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
              {selectedClient.status !== "Converted" && (
                <button
                  onClick={() => convertToLead(selectedClient.id)}
                  disabled={convertingId === selectedClient.id}
                  className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
                >
                  {convertingId === selectedClient.id
                    ? "Converting..."
                    : "Convert to Lead"}

                  {convertingId !== selectedClient.id && (
                    <ArrowIcon />
                  )}
                </button>
              )}

              <button
                onClick={() => {
                  setShowViewModal(false);
                  openEditModal(selectedClient);
                }}
                className="flex h-10 items-center gap-2 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
              >
                <EditIcon />
                Edit
              </button>

              <button
                onClick={() => setShowViewModal(false)}
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

export default Clients;
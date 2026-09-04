
// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const initialCards = [
//   {
//     id: 1,
//     fullName: "Rahul Mehta",
//     designation: "Director",
//     company: "Metro Realty",
//     bio: "Helping businesses build strong digital identities.",
//     profileImage: "",
//     phone: "+91 98765 43210",
//     email: "rahul@metrorealty.com",
//     website: "www.metrorealty.com",
//     address: "Mumbai, Maharashtra",
//     socialLinks: {
//       linkedin: "linkedin.com/in/rahulmehta",
//       instagram: "instagram.com/rahulmehta",
//       facebook: "",
//       twitter: "",
//     },
//     cardTheme: "Default",
//     isActive: true,
//     approvalStatus: "Approved",
//     approvedAt: "2026-08-25",
//     approvalRemarks: "Card approved by client.",
//     createdAt: "2026-08-20",
//   },
//   {
//     id: 2,
//     fullName: "Dr. A. Sharma",
//     designation: "Dentist",
//     company: "Sharma Dental Care",
//     bio: "Experienced dental professional providing quality dental care.",
//     profileImage: "",
//     phone: "+91 98765 12345",
//     email: "drsharma@sharmadental.com",
//     website: "www.sharmadental.com",
//     address: "Delhi, India",
//     socialLinks: {
//       linkedin: "",
//       instagram: "instagram.com/sharmadental",
//       facebook: "",
//       twitter: "",
//     },
//     cardTheme: "Professional",
//     isActive: true,
//     approvalStatus: "Pending",
//     approvedAt: "",
//     approvalRemarks: "",
//     createdAt: "2026-08-22",
//   },
//   {
//     id: 3,
//     fullName: "Amit Kapoor",
//     designation: "Founder",
//     company: "The Urban Table",
//     bio: "Restaurant entrepreneur and hospitality professional.",
//     profileImage: "",
//     phone: "+91 99887 66554",
//     email: "amit@theurbantable.com",
//     website: "www.theurbantable.com",
//     address: "Pune, Maharashtra",
//     socialLinks: {
//       linkedin: "linkedin.com/in/amitkapoor",
//       instagram: "instagram.com/theurbantable",
//       facebook: "facebook.com/theurbantable",
//       twitter: "",
//     },
//     cardTheme: "Modern",
//     isActive: false,
//     approvalStatus: "Approved",
//     approvedAt: "2026-08-23",
//     approvalRemarks: "Approved.",
//     createdAt: "2026-08-21",
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

// function TrashIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M4 7h16M10 11v6M14 11v6" />
//       <path d="M6 7l1 14h10l1-14M9 7V4h6v3" />
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

// function CardIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.7"
//       className="h-5 w-5"
//     >
//       <rect x="3" y="5" width="18" height="14" rx="2" />
//       <path d="M3 10h18M7 15h4" />
//     </svg>
//   );
// }

// const emptyForm = {
//   fullName: "",
//   designation: "",
//   company: "",
//   bio: "",
//   profileImage: "",
//   phone: "",
//   email: "",
//   website: "",
//   address: "",
//   linkedin: "",
//   instagram: "",
//   facebook: "",
//   twitter: "",
//   cardTheme: "Default",
//   isActive: true,
//   approvalStatus: "Pending",
//   approvalRemarks: "",
// };

// function Cards({ onNavigate }) {
//   const [cards, setCards] = useState(initialCards);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [approvalFilter, setApprovalFilter] = useState("All");

//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showViewModal, setShowViewModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);

//   const [selectedCard, setSelectedCard] = useState(null);
//   const [form, setForm] = useState(emptyForm);

//   const resetForm = () => {
//     setForm(emptyForm);
//   };

//   const openCreateModal = () => {
//     resetForm();
//     setShowCreateModal(true);
//   };

//   const openViewModal = (card) => {
//     setSelectedCard(card);
//     setShowViewModal(true);
//   };

//   const openEditModal = (card) => {
//     setSelectedCard(card);

//     setForm({
//       fullName: card.fullName || "",
//       designation: card.designation || "",
//       company: card.company || "",
//       bio: card.bio || "",
//       profileImage: card.profileImage || "",
//       phone: card.phone || "",
//       email: card.email || "",
//       website: card.website || "",
//       address: card.address || "",
//       linkedin: card.socialLinks?.linkedin || "",
//       instagram: card.socialLinks?.instagram || "",
//       facebook: card.socialLinks?.facebook || "",
//       twitter: card.socialLinks?.twitter || "",
//       cardTheme: card.cardTheme || "Default",
//       isActive: card.isActive,
//       approvalStatus: card.approvalStatus || "Pending",
//       approvalRemarks: card.approvalRemarks || "",
//     });

//     setShowEditModal(true);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setForm((current) => ({
//       ...current,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const createCard = (e) => {
//     e.preventDefault();

//     if (!form.fullName.trim()) {
//       return;
//     }

//     const newCard = {
//       id: Date.now(),
//       fullName: form.fullName,
//       designation: form.designation,
//       company: form.company,
//       bio: form.bio,
//       profileImage: form.profileImage,
//       phone: form.phone,
//       email: form.email,
//       website: form.website,
//       address: form.address,
//       socialLinks: {
//         linkedin: form.linkedin,
//         instagram: form.instagram,
//         facebook: form.facebook,
//         twitter: form.twitter,
//       },
//       cardTheme: form.cardTheme,
//       isActive: form.isActive,
//       approvalStatus: form.approvalStatus,
//       approvedAt:
//         form.approvalStatus === "Approved"
//           ? new Date().toISOString().split("T")[0]
//           : "",
//       approvalRemarks: form.approvalRemarks,
//       createdAt: new Date().toISOString().split("T")[0],
//     };

//     setCards((current) => [newCard, ...current]);
//     setShowCreateModal(false);
//     resetForm();
//   };

//   const updateCard = (e) => {
//     e.preventDefault();

//     if (!selectedCard || !form.fullName.trim()) {
//       return;
//     }

//     setCards((current) =>
//       current.map((card) =>
//         card.id === selectedCard.id
//           ? {
//               ...card,
//               fullName: form.fullName,
//               designation: form.designation,
//               company: form.company,
//               bio: form.bio,
//               profileImage: form.profileImage,
//               phone: form.phone,
//               email: form.email,
//               website: form.website,
//               address: form.address,
//               socialLinks: {
//                 linkedin: form.linkedin,
//                 instagram: form.instagram,
//                 facebook: form.facebook,
//                 twitter: form.twitter,
//               },
//               cardTheme: form.cardTheme,
//               isActive: form.isActive,
//               approvalStatus: form.approvalStatus,
//               approvedAt:
//                 form.approvalStatus === "Approved"
//                   ? card.approvedAt ||
//                     new Date().toISOString().split("T")[0]
//                   : "",
//               approvalRemarks: form.approvalRemarks,
//             }
//           : card
//       )
//     );

//     setShowEditModal(false);
//     setSelectedCard(null);
//     resetForm();
//   };

//   const toggleActive = (id) => {
//     setCards((current) =>
//       current.map((card) =>
//         card.id === id
//           ? { ...card, isActive: !card.isActive }
//           : card
//       )
//     );
//   };

//   const deleteCard = (id) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this card?"
//     );

//     if (!confirmed) return;

//     setCards((current) => current.filter((card) => card.id !== id));

//     if (selectedCard?.id === id) {
//       setSelectedCard(null);
//       setShowViewModal(false);
//       setShowEditModal(false);
//     }
//   };

//   const filteredCards = cards.filter((card) => {
//     const searchValue = search.toLowerCase();

//     const matchesSearch =
//       card.fullName.toLowerCase().includes(searchValue) ||
//       card.company.toLowerCase().includes(searchValue) ||
//       card.designation.toLowerCase().includes(searchValue) ||
//       card.email.toLowerCase().includes(searchValue) ||
//       card.phone.toLowerCase().includes(searchValue);

//     const matchesStatus =
//       statusFilter === "All" ||
//       (statusFilter === "Active" && card.isActive) ||
//       (statusFilter === "Inactive" && !card.isActive);

//     const matchesApproval =
//       approvalFilter === "All" ||
//       card.approvalStatus === approvalFilter;

//     return matchesSearch && matchesStatus && matchesApproval;
//   });

//   const totalCards = cards.length;
//   const activeCards = cards.filter((card) => card.isActive).length;
//   const pendingCards = cards.filter(
//     (card) => card.approvalStatus === "Pending"
//   ).length;
//   const approvedCards = cards.filter(
//     (card) => card.approvalStatus === "Approved"
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
//                 placeholder="Search cards..."
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
//                   Cards
//                 </h1>

//                 <p className="mt-1 text-sm text-[#94909d]">
//                   Create and manage your digital business cards.
//                 </p>
//               </div>

//               <button
//                 onClick={openCreateModal}
//                 className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//               >
//                 <PlusIcon />
//                 Create Card
//               </button>
//             </div>

//             <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Total Cards
//                     </p>
//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {totalCards}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                     <CardIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Active Cards
//                     </p>
//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {activeCards}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
//                     <CheckIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Pending Approval
//                     </p>
//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {pendingCards}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
//                     <CardIcon />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-[#96929f]">
//                       Approved
//                     </p>
//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {approvedCards}
//                     </p>
//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//                     <CheckIcon />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Digital Cards
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredCards.length} cards displayed
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {["All", "Active", "Inactive"].map((item) => (
//                     <button
//                       key={item}
//                       onClick={() => setStatusFilter(item)}
//                       className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
//                         statusFilter === item
//                           ? "bg-indigo-600 text-white"
//                           : "border border-[#e3dfeb] bg-white text-[#66626f] hover:bg-indigo-50 hover:text-indigo-600"
//                       }`}
//                     >
//                       {item}
//                     </button>
//                   ))}

//                   <select
//                     value={approvalFilter}
//                     onChange={(e) => setApprovalFilter(e.target.value)}
//                     className="rounded-lg border border-[#e3dfeb] bg-white px-3 py-2 text-xs font-semibold text-[#66626f] outline-none focus:border-indigo-500"
//                   >
//                     <option value="All">All Approval</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                   </select>
//                 </div>
//               </div>

//               {filteredCards.length === 0 ? (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <CardIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No cards found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search or filters.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="divide-y divide-[#eeeaf4]">
//                   {filteredCards.map((card) => (
//                     <div
//                       key={card.id}
//                       className="p-5 transition hover:bg-[#fcfbff]"
//                     >
//                       <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
//                         <div className="flex min-w-0 items-start gap-4">
//                           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                             {card.fullName.charAt(0).toUpperCase()}
//                           </div>

//                           <div className="min-w-0">
//                             <div className="flex flex-wrap items-center gap-2">
//                               <h3 className="text-sm font-bold text-[#292732]">
//                                 {card.fullName}
//                               </h3>

//                               <span
//                                 className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
//                                   card.isActive
//                                     ? "bg-green-50 text-green-600"
//                                     : "bg-gray-100 text-gray-500"
//                                 }`}
//                               >
//                                 {card.isActive ? "Active" : "Inactive"}
//                               </span>

//                               <span
//                                 className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
//                                   card.approvalStatus === "Approved"
//                                     ? "bg-green-50 text-green-600"
//                                     : card.approvalStatus === "Rejected"
//                                     ? "bg-red-50 text-red-600"
//                                     : "bg-orange-50 text-orange-600"
//                                 }`}
//                               >
//                                 {card.approvalStatus}
//                               </span>

//                               <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-600">
//                                 {card.cardTheme}
//                               </span>
//                             </div>

//                             <p className="mt-1 text-xs text-[#96929f]">
//                               {card.designation || "No designation"}
//                               {card.company
//                                 ? ` · ${card.company}`
//                                 : ""}
//                             </p>

//                             <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">
//                               {card.phone && <span>{card.phone}</span>}
//                               {card.email && <span>{card.email}</span>}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="flex flex-wrap gap-2">
//                           <button
//                             onClick={() => openViewModal(card)}
//                             className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                           >
//                             <EyeIcon />
//                             View
//                           </button>

//                           <button
//                             onClick={() => openEditModal(card)}
//                             className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                           >
//                             <EditIcon />
//                             Edit
//                           </button>

//                           <button
//                             onClick={() => toggleActive(card.id)}
//                             className={`h-9 rounded-lg px-4 text-xs font-semibold transition ${
//                               card.isActive
//                                 ? "border border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100"
//                                 : "border border-green-200 bg-green-50 text-green-600 hover:bg-green-100"
//                             }`}
//                           >
//                             {card.isActive ? "Deactivate" : "Activate"}
//                           </button>

//                           <button
//                             onClick={() => deleteCard(card.id)}
//                             className="flex h-9 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 text-xs font-semibold text-red-600 transition hover:bg-red-100"
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

//       {showCreateModal && (
//         <CardFormModal
//           title="Create Digital Card"
//           subtitle="Create a new digital business card."
//           form={form}
//           handleChange={handleChange}
//           onSubmit={createCard}
//           onClose={() => {
//             setShowCreateModal(false);
//             resetForm();
//           }}
//           submitText="Create Card"
//         />
//       )}

//       {showEditModal && (
//         <CardFormModal
//           title="Edit Digital Card"
//           subtitle="Update the digital card information."
//           form={form}
//           handleChange={handleChange}
//           onSubmit={updateCard}
//           onClose={() => {
//             setShowEditModal(false);
//             setSelectedCard(null);
//             resetForm();
//           }}
//           submitText="Save Changes"
//         />
//       )}

//       {showViewModal && selectedCard && (
//         <ViewCardModal
//           card={selectedCard}
//           onClose={() => {
//             setShowViewModal(false);
//             setSelectedCard(null);
//           }}
//           onEdit={() => {
//             setShowViewModal(false);
//             openEditModal(selectedCard);
//           }}
//           onToggle={() => {
//             toggleActive(selectedCard.id);

//             setSelectedCard((current) =>
//               current
//                 ? { ...current, isActive: !current.isActive }
//                 : current
//             );
//           }}
//         />
//       )}
//     </div>
//   );
// }

// function CardFormModal({
//   title,
//   subtitle,
//   form,
//   handleChange,
//   onSubmit,
//   onClose,
//   submitText,
// }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//       <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
//         <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//           <div>
//             <h2 className="text-lg font-bold text-[#272631]">{title}</h2>

//             <p className="mt-1 text-xs text-[#96929f]">{subtitle}</p>
//           </div>

//           <button
//             onClick={onClose}
//             className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
//           >
//             <XIcon />
//           </button>
//         </div>

//         <form onSubmit={onSubmit}>
//           <div className="max-h-[72vh] overflow-y-auto px-6 py-6">
//             <div className="mb-6">
//               <h3 className="text-sm font-bold text-[#272631]">
//                 Personal Information
//               </h3>

//               <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
//                 <Input
//                   label="Full Name"
//                   name="fullName"
//                   value={form.fullName}
//                   onChange={handleChange}
//                   placeholder="e.g. Rahul Mehta"
//                   required
//                 />

//                 <Input
//                   label="Designation"
//                   name="designation"
//                   value={form.designation}
//                   onChange={handleChange}
//                   placeholder="e.g. Director"
//                 />

//                 <Input
//                   label="Company"
//                   name="company"
//                   value={form.company}
//                   onChange={handleChange}
//                   placeholder="e.g. Metro Realty"
//                 />

//                 <Input
//                   label="Phone"
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   placeholder="+91 98765 43210"
//                 />

//                 <Input
//                   label="Email"
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="name@company.com"
//                 />

//                 <Input
//                   label="Website"
//                   name="website"
//                   value={form.website}
//                   onChange={handleChange}
//                   placeholder="www.example.com"
//                 />

//                 <Input
//                   label="Profile Image URL"
//                   name="profileImage"
//                   value={form.profileImage}
//                   onChange={handleChange}
//                   placeholder="https://..."
//                 />

//                 <Input
//                   label="Address"
//                   name="address"
//                   value={form.address}
//                   onChange={handleChange}
//                   placeholder="Mumbai, Maharashtra"
//                 />

//                 <div className="sm:col-span-2">
//                   <label className="text-xs font-semibold text-[#4e4a57]">
//                     Bio
//                   </label>

//                   <textarea
//                     name="bio"
//                     value={form.bio}
//                     onChange={handleChange}
//                     rows="3"
//                     placeholder="Write a short professional bio..."
//                     className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="border-t border-[#eeeaf4] pt-6">
//               <h3 className="text-sm font-bold text-[#272631]">
//                 Social Links
//               </h3>

//               <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
//                 <Input
//                   label="LinkedIn"
//                   name="linkedin"
//                   value={form.linkedin}
//                   onChange={handleChange}
//                   placeholder="linkedin.com/in/username"
//                 />

//                 <Input
//                   label="Instagram"
//                   name="instagram"
//                   value={form.instagram}
//                   onChange={handleChange}
//                   placeholder="instagram.com/username"
//                 />

//                 <Input
//                   label="Facebook"
//                   name="facebook"
//                   value={form.facebook}
//                   onChange={handleChange}
//                   placeholder="facebook.com/username"
//                 />

//                 <Input
//                   label="Twitter / X"
//                   name="twitter"
//                   value={form.twitter}
//                   onChange={handleChange}
//                   placeholder="x.com/username"
//                 />
//               </div>
//             </div>

//             <div className="border-t border-[#eeeaf4] pt-6">
//               <h3 className="text-sm font-bold text-[#272631]">
//                 Digital Card Settings
//               </h3>

//               <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
//                 <div>
//                   <label className="text-xs font-semibold text-[#4e4a57]">
//                     Card Theme
//                   </label>

//                   <select
//                     name="cardTheme"
//                     value={form.cardTheme}
//                     onChange={handleChange}
//                     className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   >
//                     <option value="Default">Default</option>
//                     <option value="Professional">Professional</option>
//                     <option value="Modern">Modern</option>
//                     <option value="Minimal">Minimal</option>
//                     <option value="Elegant">Elegant</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-[#4e4a57]">
//                     Approval Status
//                   </label>

//                   <select
//                     name="approvalStatus"
//                     value={form.approvalStatus}
//                     onChange={handleChange}
//                     className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                   </select>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label className="flex cursor-pointer items-center gap-3">
//                     <input
//                       type="checkbox"
//                       name="isActive"
//                       checked={form.isActive}
//                       onChange={handleChange}
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                     />

//                     <span className="text-sm font-medium text-[#45424e]">
//                       Card is active
//                     </span>
//                   </label>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label className="text-xs font-semibold text-[#4e4a57]">
//                     Approval Remarks
//                   </label>

//                   <textarea
//                     name="approvalRemarks"
//                     value={form.approvalRemarks}
//                     onChange={handleChange}
//                     rows="3"
//                     placeholder="Add approval remarks..."
//                     className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
//             >
//               {submitText}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// function Input({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
//   required = false,
// }) {
//   return (
//     <div>
//       <label className="text-xs font-semibold text-[#4e4a57]">
//         {label}
//         {required && <span className="ml-1 text-red-500">*</span>}
//       </label>

//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required={required}
//         className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//       />
//     </div>
//   );
// }

// function ViewCardModal({ card, onClose, onEdit, onToggle }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//       <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
//         <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//           <div>
//             <h2 className="text-lg font-bold text-[#272631]">
//               Digital Card
//             </h2>

//             <p className="mt-1 text-xs text-[#96929f]">
//               Preview card information.
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100"
//           >
//             <XIcon />
//           </button>
//         </div>

//         <div className="max-h-[70vh] overflow-y-auto p-6">
//           <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-6 text-white shadow-xl">
//             <div className="flex items-start justify-between gap-4">
//               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-xl font-bold backdrop-blur">
//                 {card.fullName.charAt(0).toUpperCase()}
//               </div>

//               <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold backdrop-blur">
//                 {card.cardTheme}
//               </span>
//             </div>

//             <h2 className="mt-5 text-xl font-bold">{card.fullName}</h2>

//             <p className="mt-1 text-sm text-white/80">
//               {card.designation}
//               {card.company ? ` · ${card.company}` : ""}
//             </p>

//             {card.bio && (
//               <p className="mt-4 text-sm leading-6 text-white/80">
//                 {card.bio}
//               </p>
//             )}

//             <div className="mt-5 space-y-2 text-sm text-white/90">
//               {card.phone && <p>{card.phone}</p>}
//               {card.email && <p>{card.email}</p>}
//               {card.website && <p>{card.website}</p>}
//               {card.address && <p>{card.address}</p>}
//             </div>
//           </div>

//           <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <Detail label="Approval Status" value={card.approvalStatus} />
//             <Detail
//               label="Card Status"
//               value={card.isActive ? "Active" : "Inactive"}
//             />
//             <Detail label="Created" value={card.createdAt || "-"} />
//             <Detail
//               label="Approved At"
//               value={card.approvedAt || "-"}
//             />
//           </div>

//           <div className="mt-6">
//             <h3 className="text-sm font-bold text-[#272631]">
//               Social Links
//             </h3>

//             <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
//               <Social label="LinkedIn" value={card.socialLinks?.linkedin} />
//               <Social label="Instagram" value={card.socialLinks?.instagram} />
//               <Social label="Facebook" value={card.socialLinks?.facebook} />
//               <Social label="Twitter / X" value={card.socialLinks?.twitter} />
//             </div>
//           </div>

//           {card.approvalRemarks && (
//             <div className="mt-6 rounded-lg bg-[#faf8ff] p-4">
//               <p className="text-xs font-semibold text-[#66626f]">
//                 Approval Remarks
//               </p>

//               <p className="mt-1 text-sm text-[#96929f]">
//                 {card.approvalRemarks}
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
//           <button
//             onClick={onClose}
//             className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
//           >
//             Close
//           </button>

//           <button
//             onClick={onToggle}
//             className={`h-10 rounded-lg px-5 text-sm font-semibold ${
//               card.isActive
//                 ? "border border-orange-200 bg-orange-50 text-orange-600"
//                 : "border border-green-200 bg-green-50 text-green-600"
//             }`}
//           >
//             {card.isActive ? "Deactivate" : "Activate"}
//           </button>

//           <button
//             onClick={onEdit}
//             className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
//           >
//             Edit Card
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Detail({ label, value }) {
//   return (
//     <div className="rounded-lg border border-[#eeeaf4] bg-[#fcfbff] p-4">
//       <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//         {label}
//       </p>

//       <p className="mt-1 text-sm font-semibold text-[#45424e]">{value}</p>
//     </div>
//   );
// }

// function Social({ label, value }) {
//   return (
//     <div className="rounded-lg border border-[#eeeaf4] p-3">
//       <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//         {label}
//       </p>

//       <p className="mt-1 break-all text-xs text-[#66626f]">
//         {value || "Not provided"}
//       </p>
//     </div>
//   );
// }

// export default Cards;




















import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import api from "../api/axios";

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

function TrashIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M4 7h16M10 11v6M14 11v6" />
      <path d="M6 7l1 14h10l1-14M9 7V4h6v3" />
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

function CardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </svg>
  );
}

const emptyForm = {
  fullName: "",
  designation: "",
  company: "",
  bio: "",
  profileImage: "",
  phone: "",
  email: "",
  website: "",
  address: "",
  linkedin: "",
  instagram: "",
  facebook: "",
  twitter: "",
  cardTheme: "Default",
  isActive: true,
  approvalStatus: "Pending",
  approvalRemarks: "",
};

function formatDate(date) {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toISOString().split("T")[0];
}

function getCardId(card) {
  return card?._id || card?.id;
}

function Cards({ onNavigate }) {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [approvalFilter, setApprovalFilter] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await api.get("/cards/my");

      setCards(response.data.cards || []);
    } catch (error) {
      console.error(
        "Failed to fetch cards:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to load cards. Please try again."
      );
    }
  };

  const resetForm = () => {
    setForm({ ...emptyForm });
  };

  const openCreateModal = () => {
    resetForm();
    setShowCreateModal(true);
  };

  const openViewModal = (card) => {
    setSelectedCard(card);
    setShowViewModal(true);
  };

  const openEditModal = (card) => {
    setSelectedCard(card);

    setForm({
      fullName: card.fullName || "",
      designation: card.designation || "",
      company: card.company || "",
      bio: card.bio || "",
      profileImage: card.profileImage || "",
      phone: card.phone || "",
      email: card.email || "",
      website: card.website || "",
      address: card.address || "",
      linkedin: card.socialLinks?.linkedin || "",
      instagram: card.socialLinks?.instagram || "",
      facebook: card.socialLinks?.facebook || "",
      twitter: card.socialLinks?.twitter || "",
      cardTheme: card.cardTheme || "Default",
      isActive: card.isActive ?? true,
      approvalStatus: card.approvalStatus || "Pending",
      approvalRemarks: card.approvalRemarks || "",
    });

    setShowEditModal(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const buildCardPayload = () => {
    return {
      fullName: form.fullName.trim(),
      designation: form.designation.trim(),
      company: form.company.trim(),
      bio: form.bio.trim(),
      profileImage: form.profileImage.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      website: form.website.trim(),
      address: form.address.trim(),
      socialLinks: {
        linkedin: form.linkedin.trim(),
        instagram: form.instagram.trim(),
        facebook: form.facebook.trim(),
        twitter: form.twitter.trim(),
      },
      cardTheme: form.cardTheme,
      isActive: form.isActive,
      approvalStatus: form.approvalStatus,
      approvalRemarks: form.approvalRemarks.trim(),
    };
  };

  const createCard = async (e) => {
    e.preventDefault();

    if (!form.fullName.trim()) {
      return;
    }

    try {
      const payload = buildCardPayload();

      /*
       * createCard controller accepts:
       * fullName, designation, company, bio, profileImage,
       * phone, email, website, address, socialLinks, cardTheme
       *
       * isActive / approvalStatus / approvalRemarks are handled
       * separately below because the current backend create controller
       * does not destructure those fields.
       */
      const response = await api.post("/cards", {
        fullName: payload.fullName,
        designation: payload.designation,
        company: payload.company,
        bio: payload.bio,
        profileImage: payload.profileImage,
        phone: payload.phone,
        email: payload.email,
        website: payload.website,
        address: payload.address,
        socialLinks: payload.socialLinks,
        cardTheme: payload.cardTheme,
      });

      let createdCard = response.data.card;

      if (!createdCard) {
        throw new Error("Card was created but no card data was returned.");
      }

      const createdCardId = getCardId(createdCard);

      /*
       * The current backend createCard controller always creates:
       * isActive = true
       * approvalStatus = Pending
       *
       * So if the user selected different settings, update them after
       * creation.
       */
      if (
        payload.isActive !== true ||
        payload.approvalRemarks ||
        payload.approvalStatus === "Pending"
      ) {
        const updateResponse = await api.put(
          `/cards/${createdCardId}`,
          {
            isActive: payload.isActive,
            approvalRemarks: payload.approvalRemarks,
          }
        );

        createdCard = updateResponse.data.card || createdCard;
      }

      /*
       * Approval endpoint only accepts Approved / Rejected.
       * Pending is already the backend default.
       */
      if (
        payload.approvalStatus === "Approved" ||
        payload.approvalStatus === "Rejected"
      ) {
        const approvalResponse = await api.put(
          `/cards/${createdCardId}/approval`,
          {
            approvalStatus: payload.approvalStatus,
            approvalRemarks: payload.approvalRemarks,
          }
        );

        createdCard = approvalResponse.data.card || createdCard;
      }

      setCards((current) => [createdCard, ...current]);

      setShowCreateModal(false);
      resetForm();
    } catch (error) {
      console.error(
        "Failed to create card:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to create card. Please try again."
      );
    }
  };

  const updateCard = async (e) => {
    e.preventDefault();

    if (!selectedCard || !form.fullName.trim()) {
      return;
    }

    const cardId = getCardId(selectedCard);

    try {
      const payload = buildCardPayload();

      /*
       * Update normal card information + active status.
       */
      const response = await api.put(`/cards/${cardId}`, {
        fullName: payload.fullName,
        designation: payload.designation,
        company: payload.company,
        bio: payload.bio,
        profileImage: payload.profileImage,
        phone: payload.phone,
        email: payload.email,
        website: payload.website,
        address: payload.address,
        socialLinks: payload.socialLinks,
        cardTheme: payload.cardTheme,
        isActive: payload.isActive,
      });

      let updatedCard = response.data.card || selectedCard;

      /*
       * Approval endpoint is used because the backend controller
       * handles approvedAt correctly there.
       *
       * Pending is not accepted by this endpoint, so only call it
       * when changing to Approved / Rejected.
       */
      if (
        payload.approvalStatus === "Approved" ||
        payload.approvalStatus === "Rejected"
      ) {
        const approvalResponse = await api.put(
          `/cards/${cardId}/approval`,
          {
            approvalStatus: payload.approvalStatus,
            approvalRemarks: payload.approvalRemarks,
          }
        );

        updatedCard = approvalResponse.data.card || updatedCard;
      } else {
        /*
         * If status is Pending, update remarks through normal update.
         */
        const remarksResponse = await api.put(`/cards/${cardId}`, {
          approvalStatus: "Pending",
          approvalRemarks: payload.approvalRemarks,
        });

        updatedCard = remarksResponse.data.card || updatedCard;
      }

      setCards((current) =>
        current.map((card) =>
          getCardId(card) === cardId ? updatedCard : card
        )
      );

      setShowEditModal(false);
      setSelectedCard(null);
      resetForm();
    } catch (error) {
      console.error(
        "Failed to update card:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to update card. Please try again."
      );
    }
  };

  const toggleActive = async (id) => {
    const card = cards.find((item) => getCardId(item) === id);

    if (!card) {
      return;
    }

    try {
      const response = await api.put(`/cards/${id}`, {
        isActive: !card.isActive,
      });

      const updatedCard = response.data.card;

      setCards((current) =>
        current.map((item) =>
          getCardId(item) === id ? updatedCard : item
        )
      );

      if (selectedCard && getCardId(selectedCard) === id) {
        setSelectedCard(updatedCard);
      }
    } catch (error) {
      console.error(
        "Failed to update card status:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to update card status. Please try again."
      );
    }
  };

  const deleteCard = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this card?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await api.delete(`/cards/${id}`);

      setCards((current) =>
        current.filter((card) => getCardId(card) !== id)
      );

      if (selectedCard && getCardId(selectedCard) === id) {
        setSelectedCard(null);
        setShowViewModal(false);
        setShowEditModal(false);
      }
    } catch (error) {
      console.error(
        "Failed to delete card:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to delete card. Please try again."
      );
    }
  };

  const filteredCards = cards.filter((card) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      (card.fullName || "").toLowerCase().includes(searchValue) ||
      (card.company || "").toLowerCase().includes(searchValue) ||
      (card.designation || "").toLowerCase().includes(searchValue) ||
      (card.email || "").toLowerCase().includes(searchValue) ||
      (card.phone || "").toLowerCase().includes(searchValue);

    const matchesStatus =
      statusFilter === "All" ||
      (statusFilter === "Active" && card.isActive) ||
      (statusFilter === "Inactive" && !card.isActive);

    const matchesApproval =
      approvalFilter === "All" ||
      card.approvalStatus === approvalFilter;

    return matchesSearch && matchesStatus && matchesApproval;
  });

  const totalCards = cards.length;

  const activeCards = cards.filter(
    (card) => card.isActive
  ).length;

  const pendingCards = cards.filter(
    (card) => card.approvalStatus === "Pending"
  ).length;

  const approvedCards = cards.filter(
    (card) => card.approvalStatus === "Approved"
  ).length;

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
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search cards..."
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
                  Cards
                </h1>

                <p className="mt-1 text-sm text-[#94909d]">
                  Create and manage your digital business cards.
                </p>
              </div>

              <button
                onClick={openCreateModal}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                <PlusIcon />
                Create Card
              </button>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      Total Cards
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {totalCards}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <CardIcon />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      Active Cards
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {activeCards}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <CheckIcon />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      Pending Approval
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {pendingCards}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <CardIcon />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#96929f]">
                      Approved
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#272631]">
                      {approvedCards}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <CheckIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#272631]">
                    Digital Cards
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {filteredCards.length} cards displayed
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["All", "Active", "Inactive"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setStatusFilter(item)}
                      className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                        statusFilter === item
                          ? "bg-indigo-600 text-white"
                          : "border border-[#e3dfeb] bg-white text-[#66626f] hover:bg-indigo-50 hover:text-indigo-600"
                      }`}
                    >
                      {item}
                    </button>
                  ))}

                  <select
                    value={approvalFilter}
                    onChange={(e) => setApprovalFilter(e.target.value)}
                    className="rounded-lg border border-[#e3dfeb] bg-white px-3 py-2 text-xs font-semibold text-[#66626f] outline-none focus:border-indigo-500"
                  >
                    <option value="All">All Approval</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>

              {filteredCards.length === 0 ? (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <CardIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    No cards found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    Try changing your search or filters.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#eeeaf4]">
                  {filteredCards.map((card) => (
                    <div
                      key={getCardId(card)}
                      className="p-5 transition hover:bg-[#fcfbff]"
                    >
                      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                        <div className="flex min-w-0 items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
                            {(card.fullName || "?")
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm font-bold text-[#292732]">
                                {card.fullName}
                              </h3>

                              <span
                                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                                  card.isActive
                                    ? "bg-green-50 text-green-600"
                                    : "bg-gray-100 text-gray-500"
                                }`}
                              >
                                {card.isActive ? "Active" : "Inactive"}
                              </span>

                              <span
                                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                                  card.approvalStatus === "Approved"
                                    ? "bg-green-50 text-green-600"
                                    : card.approvalStatus === "Rejected"
                                    ? "bg-red-50 text-red-600"
                                    : "bg-orange-50 text-orange-600"
                                }`}
                              >
                                {card.approvalStatus}
                              </span>

                              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-600">
                                {card.cardTheme}
                              </span>
                            </div>

                            <p className="mt-1 text-xs text-[#96929f]">
                              {card.designation || "No designation"}
                              {card.company
                                ? ` · ${card.company}`
                                : ""}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">
                              {card.phone && <span>{card.phone}</span>}
                              {card.email && <span>{card.email}</span>}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => openViewModal(card)}
                            className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                          >
                            <EyeIcon />
                            View
                          </button>

                          <button
                            onClick={() => openEditModal(card)}
                            className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                          >
                            <EditIcon />
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              toggleActive(getCardId(card))
                            }
                            className={`h-9 rounded-lg px-4 text-xs font-semibold transition ${
                              card.isActive
                                ? "border border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100"
                                : "border border-green-200 bg-green-50 text-green-600 hover:bg-green-100"
                            }`}
                          >
                            {card.isActive
                              ? "Deactivate"
                              : "Activate"}
                          </button>

                          <button
                            onClick={() =>
                              deleteCard(getCardId(card))
                            }
                            className="flex h-9 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                          >
                            <TrashIcon />
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

      {showCreateModal && (
        <CardFormModal
          title="Create Digital Card"
          subtitle="Create a new digital business card."
          form={form}
          handleChange={handleChange}
          onSubmit={createCard}
          onClose={() => {
            setShowCreateModal(false);
            resetForm();
          }}
          submitText="Create Card"
        />
      )}

      {showEditModal && (
        <CardFormModal
          title="Edit Digital Card"
          subtitle="Update the digital card information."
          form={form}
          handleChange={handleChange}
          onSubmit={updateCard}
          onClose={() => {
            setShowEditModal(false);
            setSelectedCard(null);
            resetForm();
          }}
          submitText="Save Changes"
        />
      )}

      {showViewModal && selectedCard && (
        <ViewCardModal
          card={selectedCard}
          onClose={() => {
            setShowViewModal(false);
            setSelectedCard(null);
          }}
          onEdit={() => {
            setShowViewModal(false);
            openEditModal(selectedCard);
          }}
          onToggle={() => {
            toggleActive(getCardId(selectedCard));
          }}
        />
      )}
    </div>
  );
}

function CardFormModal({
  title,
  subtitle,
  form,
  handleChange,
  onSubmit,
  onClose,
  submitText,
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-[#272631]">
              {title}
            </h2>

            <p className="mt-1 text-xs text-[#96929f]">
              {subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
          >
            <XIcon />
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <div className="max-h-[72vh] overflow-y-auto px-6 py-6">
            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#272631]">
                Personal Information
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input
                  label="Full Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Mehta"
                  required
                />

                <Input
                  label="Designation"
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                  placeholder="e.g. Director"
                />

                <Input
                  label="Company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="e.g. Metro Realty"
                />

                <Input
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                />

                <Input
                  label="Website"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="www.example.com"
                />

                <Input
                  label="Profile Image URL"
                  name="profileImage"
                  value={form.profileImage}
                  onChange={handleChange}
                  placeholder="https://..."
                />

                <Input
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Mumbai, Maharashtra"
                />

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-[#4e4a57]">
                    Bio
                  </label>

                  <textarea
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Write a short professional bio..."
                    className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-[#eeeaf4] pt-6">
              <h3 className="text-sm font-bold text-[#272631]">
                Social Links
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input
                  label="LinkedIn"
                  name="linkedin"
                  value={form.linkedin}
                  onChange={handleChange}
                  placeholder="linkedin.com/in/username"
                />

                <Input
                  label="Instagram"
                  name="instagram"
                  value={form.instagram}
                  onChange={handleChange}
                  placeholder="instagram.com/username"
                />

                <Input
                  label="Facebook"
                  name="facebook"
                  value={form.facebook}
                  onChange={handleChange}
                  placeholder="facebook.com/username"
                />

                <Input
                  label="Twitter / X"
                  name="twitter"
                  value={form.twitter}
                  onChange={handleChange}
                  placeholder="x.com/username"
                />
              </div>
            </div>

            <div className="border-t border-[#eeeaf4] pt-6">
              <h3 className="text-sm font-bold text-[#272631]">
                Digital Card Settings
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-[#4e4a57]">
                    Card Theme
                  </label>

                  <select
                    name="cardTheme"
                    value={form.cardTheme}
                    onChange={handleChange}
                    className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  >
                    <option value="Default">Default</option>
                    <option value="Professional">
                      Professional
                    </option>
                    <option value="Modern">Modern</option>
                    <option value="Minimal">Minimal</option>
                    <option value="Elegant">Elegant</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#4e4a57]">
                    Approval Status
                  </label>

                  <select
                    name="approvalStatus"
                    value={form.approvalStatus}
                    onChange={handleChange}
                    className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      name="isActive"
                      checked={form.isActive}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />

                    <span className="text-sm font-medium text-[#45424e]">
                      Card is active
                    </span>
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-[#4e4a57]">
                    Approval Remarks
                  </label>

                  <textarea
                    name="approvalRemarks"
                    value={form.approvalRemarks}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Add approval remarks..."
                    className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              {submitText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-[#4e4a57]">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
      />
    </div>
  );
}

function ViewCardModal({ card, onClose, onEdit, onToggle }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-[#272631]">
              Digital Card
            </h2>

            <p className="mt-1 text-xs text-[#96929f]">
              Preview card information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100"
          >
            <XIcon />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-6 text-white shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-xl font-bold backdrop-blur">
                {(card.fullName || "?").charAt(0).toUpperCase()}
              </div>

              <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold backdrop-blur">
                {card.cardTheme}
              </span>
            </div>

            <h2 className="mt-5 text-xl font-bold">
              {card.fullName}
            </h2>

            <p className="mt-1 text-sm text-white/80">
              {card.designation}
              {card.company ? ` · ${card.company}` : ""}
            </p>

            {card.bio && (
              <p className="mt-4 text-sm leading-6 text-white/80">
                {card.bio}
              </p>
            )}

            <div className="mt-5 space-y-2 text-sm text-white/90">
              {card.phone && <p>{card.phone}</p>}
              {card.email && <p>{card.email}</p>}
              {card.website && <p>{card.website}</p>}
              {card.address && <p>{card.address}</p>}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Detail
              label="Approval Status"
              value={card.approvalStatus}
            />

            <Detail
              label="Card Status"
              value={card.isActive ? "Active" : "Inactive"}
            />

            <Detail
              label="Created"
              value={formatDate(card.createdAt) || "-"}
            />

            <Detail
              label="Approved At"
              value={formatDate(card.approvedAt) || "-"}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-bold text-[#272631]">
              Social Links
            </h3>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Social
                label="LinkedIn"
                value={card.socialLinks?.linkedin}
              />

              <Social
                label="Instagram"
                value={card.socialLinks?.instagram}
              />

              <Social
                label="Facebook"
                value={card.socialLinks?.facebook}
              />

              <Social
                label="Twitter / X"
                value={card.socialLinks?.twitter}
              />
            </div>
          </div>

          {card.approvalRemarks && (
            <div className="mt-6 rounded-lg bg-[#faf8ff] p-4">
              <p className="text-xs font-semibold text-[#66626f]">
                Approval Remarks
              </p>

              <p className="mt-1 text-sm text-[#96929f]">
                {card.approvalRemarks}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
          <button
            onClick={onClose}
            className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
          >
            Close
          </button>

          <button
            onClick={onToggle}
            className={`h-10 rounded-lg px-5 text-sm font-semibold ${
              card.isActive
                ? "border border-orange-200 bg-orange-50 text-orange-600"
                : "border border-green-200 bg-green-50 text-green-600"
            }`}
          >
            {card.isActive ? "Deactivate" : "Activate"}
          </button>

          <button
            onClick={onEdit}
            className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Edit Card
          </button>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="rounded-lg border border-[#eeeaf4] bg-[#fcfbff] p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-[#45424e]">
        {value}
      </p>
    </div>
  );
}

function Social({ label, value }) {
  return (
    <div className="rounded-lg border border-[#eeeaf4] p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
        {label}
      </p>

      <p className="mt-1 break-all text-xs text-[#66626f]">
        {value || "Not provided"}
      </p>
    </div>
  );
}

export default Cards;
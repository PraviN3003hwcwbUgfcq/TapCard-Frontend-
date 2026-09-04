// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const clients = [
//   {
//     id: 1,
//     company: "Metro Realty",
//     type: "Real Estate Agency",
//     location: "Mumbai",
//     phone: "+91 98765 43210",
//     rating: "4.8",
//     status: "New",
//   },
//   {
//     id: 2,
//     company: "Sharma Dental Care",
//     type: "Dental Clinic",
//     location: "Delhi",
//     phone: "+91 98765 12345",
//     rating: "4.7",
//     status: "New",
//   },
//   {
//     id: 3,
//     company: "The Urban Table",
//     type: "Restaurant",
//     location: "Pune",
//     phone: "+91 99887 66554",
//     rating: "4.6",
//     status: "New",
//   },
//   {
//     id: 4,
//     company: "Prime Properties",
//     type: "Real Estate Agency",
//     location: "Mumbai",
//     phone: "+91 91234 56789",
//     rating: "4.9",
//     status: "New",
//   },
//   {
//     id: 5,
//     company: "Wellness Dental Studio",
//     type: "Dental Clinic",
//     location: "Delhi",
//     phone: "+91 97654 32109",
//     rating: "4.5",
//     status: "New",
//   },
//   {
//     id: 6,
//     company: "Green Leaf Restaurant",
//     type: "Restaurant",
//     location: "Pune",
//     phone: "+91 98989 78787",
//     rating: "4.4",
//     status: "New",
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

// function BriefcaseIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <rect x="3" y="7" width="18" height="13" rx="2" />
//       <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
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

// function StarIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-4 w-4"
//     >
//       <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
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

// function UserPlusIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <circle cx="9" cy="8" r="3" />
//       <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" />
//       <path d="M18 8v6M15 11h6" />
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

// function SearchResults({ onNavigate }) {
//   const [searchText, setSearchText] = useState("");
//   const [location, setLocation] = useState("Mumbai");
//   const [profession, setProfession] = useState("All Professions");
//   const [selectedClients, setSelectedClients] = useState([]);

//   const filteredClients = clients.filter((client) => {
//     const matchesSearch =
//       client.company.toLowerCase().includes(searchText.toLowerCase()) ||
//       client.type.toLowerCase().includes(searchText.toLowerCase()) ||
//       client.location.toLowerCase().includes(searchText.toLowerCase());

//     const matchesLocation =
//       location === "All Locations" || client.location === location;

//     const matchesProfession =
//       profession === "All Professions" ||
//       client.type === profession;

//     return matchesSearch && matchesLocation && matchesProfession;
//   });

//   const toggleClient = (id) => {
//     setSelectedClients((current) =>
//       current.includes(id)
//         ? current.filter((clientId) => clientId !== id)
//         : [...current, id]
//     );
//   };

//   const toggleAll = () => {
//     if (selectedClients.length === filteredClients.length) {
//       setSelectedClients([]);
//     } else {
//       setSelectedClients(filteredClients.map((client) => client.id));
//     }
//   };

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
//                 value={searchText}
//                 onChange={(event) => setSearchText(event.target.value)}
//                 placeholder="Search clients, businesses..."
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
//             {/* Heading */}
//             <div className="animate-[fadeIn_.5s_ease-out]">
//               <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                 Search Results
//               </h1>

//               <p className="mt-1 text-sm text-[#94909d]">
//                 Browse potential businesses and discover your next clients.
//               </p>
//             </div>

//             {/* Search Summary */}
//             <div className="mt-7 rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//               <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//                 <div>
//                   <p className="text-xs font-medium text-[#9995a1]">
//                     SEARCH RESULTS
//                   </p>

//                   <div className="mt-1 flex flex-wrap items-center gap-2">
//                     <span className="text-lg font-bold text-[#24232d]">
//                       {filteredClients.length} businesses found
//                     </span>

//                     <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
//                       {profession}
//                     </span>

//                     <span className="rounded-full bg-[#f5f3f8] px-3 py-1 text-xs font-medium text-[#716d79]">
//                       {location}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-3">
//                   <div className="relative">
//                     <select
//                       value={profession}
//                       onChange={(event) =>
//                         setProfession(event.target.value)
//                       }
//                       className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option>All Professions</option>
//                       <option>Real Estate Agency</option>
//                       <option>Dental Clinic</option>
//                       <option>Restaurant</option>
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       <ChevronDownIcon />
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <select
//                       value={location}
//                       onChange={(event) => setLocation(event.target.value)}
//                       className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option>All Locations</option>
//                       <option>Mumbai</option>
//                       <option>Delhi</option>
//                       <option>Pune</option>
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       <ChevronDownIcon />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Results Table */}
//             <div className="mt-6 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               {/* Table Header */}
//               <div className="flex flex-col gap-3 border-b border-[#eeeaf4] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Potential Clients
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     Review businesses and convert qualified prospects into
//                     leads.
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   {selectedClients.length > 0 && (
//                     <span className="text-xs font-medium text-indigo-600">
//                       {selectedClients.length} selected
//                     </span>
//                   )}

//                   <button
//                     onClick={toggleAll}
//                     className="rounded-lg border border-[#e2deea] px-3 py-2 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                   >
//                     {selectedClients.length === filteredClients.length &&
//                     filteredClients.length > 0
//                       ? "Unselect All"
//                       : "Select All"}
//                   </button>
//                 </div>
//               </div>

//               {/* Desktop Table */}
//               <div className="hidden overflow-x-auto lg:block">
//                 <table className="w-full min-w-[900px] text-left">
//                   <thead className="border-b border-[#eeeaf4] bg-[#faf9fd]">
//                     <tr>
//                       <th className="w-12 px-5 py-4">
//                         <input
//                           type="checkbox"
//                           checked={
//                             filteredClients.length > 0 &&
//                             selectedClients.length === filteredClients.length
//                           }
//                           onChange={toggleAll}
//                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                         />
//                       </th>

//                       <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Business
//                       </th>

//                       <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Profession
//                       </th>

//                       <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Location
//                       </th>

//                       <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Rating
//                       </th>

//                       <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Contact
//                       </th>

//                       <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {filteredClients.map((client) => (
//                       <tr
//                         key={client.id}
//                         className="border-b border-[#f0edf5] transition last:border-b-0 hover:bg-[#fcfbff]"
//                       >
//                         <td className="px-5 py-5">
//                           <input
//                             type="checkbox"
//                             checked={selectedClients.includes(client.id)}
//                             onChange={() => toggleClient(client.id)}
//                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                           />
//                         </td>

//                         <td className="px-4 py-5">
//                           <div className="flex items-center gap-3">
//                             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                               {client.company.charAt(0)}
//                             </div>

//                             <div>
//                               <div className="text-sm font-semibold text-[#292732]">
//                                 {client.company}
//                               </div>

//                               <div className="mt-1 text-xs text-[#9995a1]">
//                                 Potential client
//                               </div>
//                             </div>
//                           </div>
//                         </td>

//                         <td className="px-4 py-5">
//                           <div className="flex items-center gap-2 text-sm text-[#5f5b68]">
//                             <BriefcaseIcon />
//                             {client.type}
//                           </div>
//                         </td>

//                         <td className="px-4 py-5">
//                           <div className="flex items-center gap-2 text-sm text-[#5f5b68]">
//                             <MapPinIcon />
//                             {client.location}
//                           </div>
//                         </td>

//                         <td className="px-4 py-5">
//                           <div className="flex items-center gap-1.5">
//                             <span className="text-yellow-500">
//                               <StarIcon />
//                             </span>

//                             <span className="text-sm font-semibold text-[#403d48]">
//                               {client.rating}
//                             </span>
//                           </div>
//                         </td>

//                         <td className="px-4 py-5">
//                           <div className="flex items-center gap-2 text-sm text-[#66626f]">
//                             <PhoneIcon />
//                             {client.phone}
//                           </div>
//                         </td>

//                         <td className="px-5 py-5">
//                           <div className="flex items-center justify-end gap-2">
//                             <button className="flex h-9 items-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
//                               <EyeIcon />
//                               View Details
//                             </button>

//                             <button className="flex h-9 items-center gap-2 rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white transition hover:bg-indigo-700">
//                               <UserPlusIcon />
//                               Convert to Lead
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Mobile / Tablet Cards */}
//               <div className="divide-y divide-[#eeeaf4] lg:hidden">
//                 {filteredClients.map((client) => (
//                   <div key={client.id} className="p-5">
//                     <div className="flex items-start gap-4">
//                       <input
//                         type="checkbox"
//                         checked={selectedClients.includes(client.id)}
//                         onChange={() => toggleClient(client.id)}
//                         className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                       />

//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                         {client.company.charAt(0)}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="text-sm font-semibold text-[#292732]">
//                           {client.company}
//                         </div>

//                         <div className="mt-1 text-xs text-[#9995a1]">
//                           {client.type}
//                         </div>

//                         <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#6f6b77]">
//                           <span className="flex items-center gap-1">
//                             <MapPinIcon />
//                             {client.location}
//                           </span>

//                           <span className="flex items-center gap-1">
//                             <StarIcon />
//                             {client.rating}
//                           </span>
//                         </div>

//                         <div className="mt-2 flex items-center gap-1 text-xs text-[#77737f]">
//                           <PhoneIcon />
//                           {client.phone}
//                         </div>

//                         <div className="mt-4 flex flex-wrap gap-2">
//                           <button className="flex h-9 items-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
//                             <EyeIcon />
//                             View Details
//                           </button>

//                           <button className="flex h-9 items-center gap-2 rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white hover:bg-indigo-700">
//                             <UserPlusIcon />
//                             Convert to Lead
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Empty State */}
//               {filteredClients.length === 0 && (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <SearchIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold text-[#292732]">
//                     No businesses found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search, profession, or location filters.
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* Bottom Information */}
//             <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
//               <div className="flex gap-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
//                   <UserPlusIcon />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-indigo-900">
//                     Convert qualified businesses into leads
//                   </h3>

//                   <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
//                     Review the business details before adding a prospect to
//                     your sales pipeline. Converted businesses will become
//                     available in the Leads section for follow-ups and demos.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default SearchResults;



































// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const clients = [
//   {
//     id: 1,
//     company: "Metro Realty",
//     type: "Real Estate Agency",
//     location: "Mumbai",
//     phone: "+91 98765 43210",
//     rating: "4.8",
//     status: "New",
//   },
//   {
//     id: 2,
//     company: "Sharma Dental Care",
//     type: "Dental Clinic",
//     location: "Delhi",
//     phone: "+91 98765 12345",
//     rating: "4.7",
//     status: "New",
//   },
//   {
//     id: 3,
//     company: "The Urban Table",
//     type: "Restaurant",
//     location: "Pune",
//     phone: "+91 99887 66554",
//     rating: "4.6",
//     status: "New",
//   },
//   {
//     id: 4,
//     company: "Prime Properties",
//     type: "Real Estate Agency",
//     location: "Mumbai",
//     phone: "+91 91234 56789",
//     rating: "4.9",
//     status: "New",
//   },
//   {
//     id: 5,
//     company: "Wellness Dental Studio",
//     type: "Dental Clinic",
//     location: "Delhi",
//     phone: "+91 97654 32109",
//     rating: "4.5",
//     status: "New",
//   },
//   {
//     id: 6,
//     company: "Green Leaf Restaurant",
//     type: "Restaurant",
//     location: "Pune",
//     phone: "+91 98989 78787",
//     rating: "4.4",
//     status: "New",
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

// function BriefcaseIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <rect x="3" y="7" width="18" height="13" rx="2" />
//       <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
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

// function StarIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-4 w-4"
//     >
//       <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
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

// function UserPlusIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <circle cx="9" cy="8" r="3" />
//       <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" />
//       <path d="M18 8v6M15 11h6" />
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

// function SearchResults({ onNavigate }) {
//   const [searchText, setSearchText] = useState("");
//   const [location, setLocation] = useState("Mumbai");
//   const [profession, setProfession] = useState("All Professions");
//   const [selectedClients, setSelectedClients] = useState([]);

//   const filteredClients = clients.filter((client) => {
//     const matchesSearch =
//       client.company.toLowerCase().includes(searchText.toLowerCase()) ||
//       client.type.toLowerCase().includes(searchText.toLowerCase()) ||
//       client.location.toLowerCase().includes(searchText.toLowerCase());

//     const matchesLocation =
//       location === "All Locations" || client.location === location;

//     const matchesProfession =
//       profession === "All Professions" ||
//       client.type === profession;

//     return matchesSearch && matchesLocation && matchesProfession;
//   });

//   const toggleClient = (id) => {
//     setSelectedClients((current) =>
//       current.includes(id)
//         ? current.filter((clientId) => clientId !== id)
//         : [...current, id]
//     );
//   };

//   const toggleAll = () => {
//     if (selectedClients.length === filteredClients.length) {
//       setSelectedClients([]);
//     } else {
//       setSelectedClients(filteredClients.map((client) => client.id));
//     }
//   };

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
//                 value={searchText}
//                 onChange={(event) => setSearchText(event.target.value)}
//                 placeholder="Search clients, businesses..."
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
//             {/* Heading */}
//             <div className="animate-[fadeIn_.5s_ease-out]">
//               <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                 Search Results
//               </h1>

//               <p className="mt-1 text-sm text-[#94909d]">
//                 Browse potential businesses and discover your next clients.
//               </p>
//             </div>

//             {/* Search Summary */}
//             <div className="mt-7 rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//               <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//                 <div>
//                   <p className="text-xs font-medium text-[#9995a1]">
//                     SEARCH RESULTS
//                   </p>

//                   <div className="mt-1 flex flex-wrap items-center gap-2">
//                     <span className="text-lg font-bold text-[#24232d]">
//                       {filteredClients.length} businesses found
//                     </span>

//                     <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
//                       {profession}
//                     </span>

//                     <span className="rounded-full bg-[#f5f3f8] px-3 py-1 text-xs font-medium text-[#716d79]">
//                       {location}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-3">
//                   <div className="relative">
//                     <select
//                       value={profession}
//                       onChange={(event) =>
//                         setProfession(event.target.value)
//                       }
//                       className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option>All Professions</option>
//                       <option>Real Estate Agency</option>
//                       <option>Dental Clinic</option>
//                       <option>Restaurant</option>
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       <ChevronDownIcon />
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <select
//                       value={location}
//                       onChange={(event) => setLocation(event.target.value)}
//                       className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option>All Locations</option>
//                       <option>Mumbai</option>
//                       <option>Delhi</option>
//                       <option>Pune</option>
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       <ChevronDownIcon />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Results Table */}
//             <div className="mt-6 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               {/* Table Header */}
//               <div className="flex flex-col gap-3 border-b border-[#eeeaf4] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Potential Clients
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     Review businesses and convert qualified prospects into
//                     leads.
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   {selectedClients.length > 0 && (
//                     <span className="text-xs font-medium text-indigo-600">
//                       {selectedClients.length} selected
//                     </span>
//                   )}

//                   <button
//                     onClick={toggleAll}
//                     className="rounded-lg border border-[#e2deea] px-3 py-2 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                   >
//                     {selectedClients.length === filteredClients.length &&
//                     filteredClients.length > 0
//                       ? "Unselect All"
//                       : "Select All"}
//                   </button>
//                 </div>
//               </div>

//               {/* Desktop Table */}
//               <div className="hidden overflow-x-auto lg:block">
//                 <table className="w-full min-w-[900px] text-left">
//                   <thead className="border-b border-[#eeeaf4] bg-[#faf9fd]">
//                     <tr>
//                       <th className="w-12 px-5 py-4">
//                         <input
//                           type="checkbox"
//                           checked={
//                             filteredClients.length > 0 &&
//                             selectedClients.length === filteredClients.length
//                           }
//                           onChange={toggleAll}
//                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                         />
//                       </th>

//                       <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Business
//                       </th>

//                       <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Profession
//                       </th>

//                       <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Location
//                       </th>

//                       <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Rating
//                       </th>

//                       <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Contact
//                       </th>

//                       <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#8d8996]">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {filteredClients.map((client) => (
//                       <tr
//                         key={client.id}
//                         className="border-b border-[#f0edf5] transition last:border-b-0 hover:bg-[#fcfbff]"
//                       >
//                         <td className="px-5 py-5">
//                           <input
//                             type="checkbox"
//                             checked={selectedClients.includes(client.id)}
//                             onChange={() => toggleClient(client.id)}
//                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                           />
//                         </td>

//                         <td className="px-4 py-5">
//                           <div className="flex items-center gap-3">
//                             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                               {client.company.charAt(0)}
//                             </div>

//                             <div>
//                               <div className="text-sm font-semibold text-[#292732]">
//                                 {client.company}
//                               </div>

//                               <div className="mt-1 text-xs text-[#9995a1]">
//                                 Potential client
//                               </div>
//                             </div>
//                           </div>
//                         </td>

//                         <td className="px-4 py-5">
//                           <div className="flex items-center gap-2 text-sm text-[#5f5b68]">
//                             <BriefcaseIcon />
//                             {client.type}
//                           </div>
//                         </td>

//                         <td className="px-4 py-5">
//                           <div className="flex items-center gap-2 text-sm text-[#5f5b68]">
//                             <MapPinIcon />
//                             {client.location}
//                           </div>
//                         </td>

//                         <td className="px-4 py-5">
//                           <div className="flex items-center gap-1.5">
//                             <span className="text-yellow-500">
//                               <StarIcon />
//                             </span>

//                             <span className="text-sm font-semibold text-[#403d48]">
//                               {client.rating}
//                             </span>
//                           </div>
//                         </td>

//                         <td className="px-4 py-5">
//                           <div className="flex items-center gap-2 text-sm text-[#66626f]">
//                             <PhoneIcon />
//                             {client.phone}
//                           </div>
//                         </td>

//                         <td className="px-5 py-5">
//                           <div className="flex items-center justify-end gap-2">
//                             <button className="flex h-9 items-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
//                               <EyeIcon />
//                               View Details
//                             </button>

//                             <button className="flex h-9 items-center gap-2 rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white transition hover:bg-indigo-700">
//                               <UserPlusIcon />
//                               Convert to Lead
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Mobile / Tablet Cards */}
//               <div className="divide-y divide-[#eeeaf4] lg:hidden">
//                 {filteredClients.map((client) => (
//                   <div key={client.id} className="p-5">
//                     <div className="flex items-start gap-4">
//                       <input
//                         type="checkbox"
//                         checked={selectedClients.includes(client.id)}
//                         onChange={() => toggleClient(client.id)}
//                         className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                       />

//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                         {client.company.charAt(0)}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="text-sm font-semibold text-[#292732]">
//                           {client.company}
//                         </div>

//                         <div className="mt-1 text-xs text-[#9995a1]">
//                           {client.type}
//                         </div>

//                         <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#6f6b77]">
//                           <span className="flex items-center gap-1">
//                             <MapPinIcon />
//                             {client.location}
//                           </span>

//                           <span className="flex items-center gap-1">
//                             <StarIcon />
//                             {client.rating}
//                           </span>
//                         </div>

//                         <div className="mt-2 flex items-center gap-1 text-xs text-[#77737f]">
//                           <PhoneIcon />
//                           {client.phone}
//                         </div>

//                         <div className="mt-4 flex flex-wrap gap-2">
//                           <button className="flex h-9 items-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
//                             <EyeIcon />
//                             View Details
//                           </button>

//                           <button className="flex h-9 items-center gap-2 rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white hover:bg-indigo-700">
//                             <UserPlusIcon />
//                             Convert to Lead
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Empty State */}
//               {filteredClients.length === 0 && (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <SearchIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold text-[#292732]">
//                     No businesses found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search, profession, or location filters.
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* Bottom Information */}
//             <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
//               <div className="flex gap-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
//                   <UserPlusIcon />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-indigo-900">
//                     Convert qualified businesses into leads
//                   </h3>

//                   <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
//                     Review the business details before adding a prospect to
//                     your sales pipeline. Converted businesses will become
//                     available in the Leads section for follow-ups and demos.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default SearchResults;














































// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const clients = [
//   {
//     id: 1,
//     company: "Metro Realty",
//     type: "Real Estate Agency",
//     location: "Mumbai",
//     phone: "+91 98765 43210",
//     rating: "4.8",
//     status: "New",
//   },
//   {
//     id: 2,
//     company: "Sharma Dental Care",
//     type: "Dental Clinic",
//     location: "Delhi",
//     phone: "+91 98765 12345",
//     rating: "4.7",
//     status: "New",
//   },
//   {
//     id: 3,
//     company: "The Urban Table",
//     type: "Restaurant",
//     location: "Pune",
//     phone: "+91 99887 66554",
//     rating: "4.6",
//     status: "New",
//   },
//   {
//     id: 4,
//     company: "Prime Properties",
//     type: "Real Estate Agency",
//     location: "Mumbai",
//     phone: "+91 91234 56789",
//     rating: "4.9",
//     status: "New",
//   },
//   {
//     id: 5,
//     company: "Wellness Dental Studio",
//     type: "Dental Clinic",
//     location: "Delhi",
//     phone: "+91 97654 32109",
//     rating: "4.5",
//     status: "New",
//   },
//   {
//     id: 6,
//     company: "Green Leaf Restaurant",
//     type: "Restaurant",
//     location: "Pune",
//     phone: "+91 98989 78787",
//     rating: "4.4",
//     status: "New",
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

// function BriefcaseIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <rect x="3" y="7" width="18" height="13" rx="2" />
//       <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
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

// function StarIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-4 w-4"
//     >
//       <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
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

// function UserPlusIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <circle cx="9" cy="8" r="3" />
//       <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" />
//       <path d="M18 8v6M15 11h6" />
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

// function SearchResults({ onNavigate }) {
//   const [searchText, setSearchText] = useState("");
//   const [location, setLocation] = useState("Mumbai");
//   const [profession, setProfession] = useState("All Professions");
//   const [selectedClients, setSelectedClients] = useState([]);

//   const filteredClients = clients.filter((client) => {
//     const matchesSearch =
//       client.company.toLowerCase().includes(searchText.toLowerCase()) ||
//       client.type.toLowerCase().includes(searchText.toLowerCase()) ||
//       client.location.toLowerCase().includes(searchText.toLowerCase());

//     const matchesLocation =
//       location === "All Locations" || client.location === location;

//     const matchesProfession =
//       profession === "All Professions" ||
//       client.type === profession;

//     return matchesSearch && matchesLocation && matchesProfession;
//   });

//   const toggleClient = (id) => {
//     setSelectedClients((current) =>
//       current.includes(id)
//         ? current.filter((clientId) => clientId !== id)
//         : [...current, id]
//     );
//   };

//   const toggleAll = () => {
//     if (selectedClients.length === filteredClients.length) {
//       setSelectedClients([]);
//     } else {
//       setSelectedClients(filteredClients.map((client) => client.id));
//     }
//   };

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
//                 value={searchText}
//                 onChange={(event) => setSearchText(event.target.value)}
//                 placeholder="Search clients, businesses..."
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
//             {/* Heading */}
//             <div className="animate-[fadeIn_.5s_ease-out]">
//               <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                 Search Results
//               </h1>

//               <p className="mt-1 text-sm text-[#94909d]">
//                 Browse potential businesses and discover your next clients.
//               </p>
//             </div>

//             {/* Search Summary */}
//             <div className="mt-7 rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//               <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//                 <div>
//                   <p className="text-xs font-medium text-[#9995a1]">
//                     SEARCH RESULTS
//                   </p>

//                   <div className="mt-1 flex flex-wrap items-center gap-2">
//                     <span className="text-lg font-bold text-[#24232d]">
//                       {filteredClients.length} businesses found
//                     </span>

//                     <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
//                       {profession}
//                     </span>

//                     <span className="rounded-full bg-[#f5f3f8] px-3 py-1 text-xs font-medium text-[#716d79]">
//                       {location}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-3">
//                   {/* Profession Filter */}
//                   <div className="relative">
//                     <select
//                       value={profession}
//                       onChange={(event) =>
//                         setProfession(event.target.value)
//                       }
//                       className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option>All Professions</option>
//                       <option>Real Estate Agency</option>
//                       <option>Dental Clinic</option>
//                       <option>Restaurant</option>
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       <ChevronDownIcon />
//                     </div>
//                   </div>

//                   {/* Location Filter */}
//                   <div className="relative">
//                     <select
//                       value={location}
//                       onChange={(event) => setLocation(event.target.value)}
//                       className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option>All Locations</option>
//                       <option>Mumbai</option>
//                       <option>Delhi</option>
//                       <option>Pune</option>
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       <ChevronDownIcon />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Potential Clients */}
//             <div className="mt-6 rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//               {/* Section Header */}
//               <div className="flex flex-col gap-3 border-b border-[#eeeaf4] pb-5 sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Potential Clients
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     Review businesses and convert qualified prospects into
//                     leads.
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   {selectedClients.length > 0 && (
//                     <span className="text-xs font-medium text-indigo-600">
//                       {selectedClients.length} selected
//                     </span>
//                   )}

//                   <button
//                     onClick={toggleAll}
//                     className="rounded-lg border border-[#e2deea] px-3 py-2 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                   >
//                     {selectedClients.length === filteredClients.length &&
//                     filteredClients.length > 0
//                       ? "Unselect All"
//                       : "Select All"}
//                   </button>
//                 </div>
//               </div>

//               {/* Client Cards */}
//               {filteredClients.length > 0 && (
//                 <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
//                   {filteredClients.map((client) => (
//                     <div
//                       key={client.id}
//                       className={`group relative rounded-2xl border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
//                         selectedClients.includes(client.id)
//                           ? "border-indigo-400 ring-2 ring-indigo-100"
//                           : "border-[#e8e4ef] hover:border-indigo-200"
//                       }`}
//                     >
//                       {/* Top Row */}
//                       <div className="flex items-start justify-between">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-base font-bold text-indigo-600">
//                             {client.company.charAt(0)}
//                           </div>

//                           <div className="min-w-0">
//                             <h3 className="truncate text-sm font-bold text-[#292732]">
//                               {client.company}
//                             </h3>

//                             <span className="mt-1 inline-block rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-600">
//                               {client.status}
//                             </span>
//                           </div>
//                         </div>

//                         <input
//                           type="checkbox"
//                           checked={selectedClients.includes(client.id)}
//                           onChange={() => toggleClient(client.id)}
//                           className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                         />
//                       </div>

//                       {/* Profession */}
//                       <div className="mt-5 flex items-center gap-2 text-sm text-[#5f5b68]">
//                         <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f6f4fa] text-[#77737f]">
//                           <BriefcaseIcon />
//                         </span>

//                         <span>{client.type}</span>
//                       </div>

//                       {/* Location */}
//                       <div className="mt-3 flex items-center gap-2 text-sm text-[#5f5b68]">
//                         <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f6f4fa] text-[#77737f]">
//                           <MapPinIcon />
//                         </span>

//                         <span>{client.location}</span>
//                       </div>

//                       {/* Phone */}
//                       <div className="mt-3 flex items-center gap-2 text-sm text-[#5f5b68]">
//                         <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f6f4fa] text-[#77737f]">
//                           <PhoneIcon />
//                         </span>

//                         <span>{client.phone}</span>
//                       </div>

//                       {/* Rating */}
//                       <div className="mt-4 flex items-center justify-between border-t border-[#eeeaf4] pt-4">
//                         <div className="flex items-center gap-1.5">
//                           <span className="text-yellow-500">
//                             <StarIcon />
//                           </span>

//                           <span className="text-sm font-bold text-[#403d48]">
//                             {client.rating}
//                           </span>

//                           <span className="text-xs text-[#aaa5b2]">
//                             Rating
//                           </span>
//                         </div>
//                       </div>

//                       {/* Actions */}
//                       <div className="mt-4 grid grid-cols-2 gap-2">
//                         <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
//                           <EyeIcon />
//                           View Details
//                         </button>

//                         <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white transition hover:bg-indigo-700">
//                           <UserPlusIcon />
//                           Convert
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Empty State */}
//               {filteredClients.length === 0 && (
//                 <div className="px-6 py-16 text-center">
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <SearchIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold text-[#292732]">
//                     No businesses found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search, profession, or location filters.
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* Bottom Information */}
//             <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
//               <div className="flex gap-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
//                   <UserPlusIcon />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-indigo-900">
//                     Convert qualified businesses into leads
//                   </h3>

//                   <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
//                     Review the business details before adding a prospect to
//                     your sales pipeline. Converted businesses will become
//                     available in the Leads section for follow-ups and demos.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default SearchResults;





































// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const clients = [
//   {
//     id: 1,
//     company: "Metro Realty",
//     type: "Real Estate Agency",
//     location: "Mumbai",
//     phone: "+91 98765 43210",
//     rating: "4.8",
//     status: "New",
//   },
//   {
//     id: 2,
//     company: "Sharma Dental Care",
//     type: "Dental Clinic",
//     location: "Delhi",
//     phone: "+91 98765 12345",
//     rating: "4.7",
//     status: "New",
//   },
//   {
//     id: 3,
//     company: "The Urban Table",
//     type: "Restaurant",
//     location: "Pune",
//     phone: "+91 99887 66554",
//     rating: "4.6",
//     status: "New",
//   },
//   {
//     id: 4,
//     company: "Prime Properties",
//     type: "Real Estate Agency",
//     location: "Mumbai",
//     phone: "+91 91234 56789",
//     rating: "4.9",
//     status: "New",
//   },
//   {
//     id: 5,
//     company: "Wellness Dental Studio",
//     type: "Dental Clinic",
//     location: "Delhi",
//     phone: "+91 97654 32109",
//     rating: "4.5",
//     status: "New",
//   },
//   {
//     id: 6,
//     company: "Green Leaf Restaurant",
//     type: "Restaurant",
//     location: "Pune",
//     phone: "+91 98989 78787",
//     rating: "4.4",
//     status: "New",
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

// function BriefcaseIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <rect x="3" y="7" width="18" height="13" rx="2" />
//       <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
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

// function StarIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-4 w-4"
//     >
//       <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
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

// function UserPlusIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <circle cx="9" cy="8" r="3" />
//       <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" />
//       <path d="M18 8v6M15 11h6" />
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

// function SearchResults({ onNavigate }) {
//   const [searchText, setSearchText] = useState("");
//   const [location, setLocation] = useState("Mumbai");
//   const [profession, setProfession] = useState("All Professions");

//   const [selectedClients, setSelectedClients] = useState([]);

//   const [clientList, setClientList] = useState(clients);

//   const [selectedClient, setSelectedClient] = useState(null);

//   const [showDetails, setShowDetails] = useState(false);

//   const filteredClients = clientList.filter((client) => {
//     const matchesSearch =
//       client.company.toLowerCase().includes(searchText.toLowerCase()) ||
//       client.type.toLowerCase().includes(searchText.toLowerCase()) ||
//       client.location.toLowerCase().includes(searchText.toLowerCase());

//     const matchesLocation =
//       location === "All Locations" || client.location === location;

//     const matchesProfession =
//       profession === "All Professions" ||
//       client.type === profession;

//     return matchesSearch && matchesLocation && matchesProfession;
//   });

//   const toggleClient = (id) => {
//     setSelectedClients((current) =>
//       current.includes(id)
//         ? current.filter((clientId) => clientId !== id)
//         : [...current, id]
//     );
//   };

//   const toggleAll = () => {
//     if (selectedClients.length === filteredClients.length) {
//       setSelectedClients([]);
//     } else {
//       setSelectedClients(filteredClients.map((client) => client.id));
//     }
//   };

//   const handleViewDetails = (client) => {
//     setSelectedClient(client);
//     setShowDetails(true);
//   };

//   const handleCloseDetails = () => {
//     setShowDetails(false);
//     setSelectedClient(null);
//   };

//   const handleConvertToLead = (client) => {
//     setClientList((currentClients) =>
//       currentClients.map((item) =>
//         item.id === client.id
//           ? {
//               ...item,
//               status: "Converted",
//             }
//           : item
//       )
//     );

//     setSelectedClients((current) =>
//       current.filter((id) => id !== client.id)
//     );
//   };

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
//                 value={searchText}
//                 onChange={(event) =>
//                   setSearchText(event.target.value)
//                 }
//                 placeholder="Search clients, businesses..."
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

//             {/* Heading */}
//             <div className="animate-[fadeIn_.5s_ease-out]">

//               <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                 Search Results
//               </h1>

//               <p className="mt-1 text-sm text-[#94909d]">
//                 Browse potential businesses and discover your next clients.
//               </p>

//             </div>

//             {/* Search Summary */}
//             <div className="mt-7 rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

//               <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

//                 <div>

//                   <p className="text-xs font-medium text-[#9995a1]">
//                     SEARCH RESULTS
//                   </p>

//                   <div className="mt-1 flex flex-wrap items-center gap-2">

//                     <span className="text-lg font-bold text-[#24232d]">
//                       {filteredClients.length} businesses found
//                     </span>

//                     <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
//                       {profession}
//                     </span>

//                     <span className="rounded-full bg-[#f5f3f8] px-3 py-1 text-xs font-medium text-[#716d79]">
//                       {location}
//                     </span>

//                   </div>

//                 </div>

//                 <div className="flex flex-wrap gap-3">

//                   <div className="relative">

//                     <select
//                       value={profession}
//                       onChange={(event) =>
//                         setProfession(event.target.value)
//                       }
//                       className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option>All Professions</option>
//                       <option>Real Estate Agency</option>
//                       <option>Dental Clinic</option>
//                       <option>Restaurant</option>
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       <ChevronDownIcon />
//                     </div>

//                   </div>

//                   <div className="relative">

//                     <select
//                       value={location}
//                       onChange={(event) =>
//                         setLocation(event.target.value)
//                       }
//                       className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     >
//                       <option>All Locations</option>
//                       <option>Mumbai</option>
//                       <option>Delhi</option>
//                       <option>Pune</option>
//                     </select>

//                     <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       <ChevronDownIcon />
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* Results */}
//             <div className="mt-6">

//               <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Potential Clients
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     Review businesses and convert qualified prospects into leads.
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3">

//                   {selectedClients.length > 0 && (
//                     <span className="text-xs font-medium text-indigo-600">
//                       {selectedClients.length} selected
//                     </span>
//                   )}

//                   <button
//                     onClick={toggleAll}
//                     className="rounded-lg border border-[#e2deea] px-3 py-2 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                   >
//                     {selectedClients.length === filteredClients.length &&
//                     filteredClients.length > 0
//                       ? "Unselect All"
//                       : "Select All"}
//                   </button>

//                 </div>

//               </div>

//               {/* CLIENT CARDS */}
//               {filteredClients.length > 0 && (
//                 <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

//                   {filteredClients.map((client) => (

//                     <div
//                       key={client.id}
//                       className="group rounded-2xl border border-[#e5e1ed] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
//                     >

//                       {/* Card Top */}
//                       <div className="flex items-start justify-between">

//                         <div className="flex items-center gap-3">

//                           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-base font-bold text-indigo-600">
//                             {client.company.charAt(0)}
//                           </div>

//                           <div className="min-w-0">

//                             <h3 className="truncate text-sm font-bold text-[#292732]">
//                               {client.company}
//                             </h3>

//                             <p className="mt-1 text-xs text-[#9995a1]">
//                               Potential client
//                             </p>

//                           </div>

//                         </div>

//                         <input
//                           type="checkbox"
//                           checked={selectedClients.includes(client.id)}
//                           onChange={() => toggleClient(client.id)}
//                           className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                         />

//                       </div>

//                       {/* Profession */}
//                       <div className="mt-5 flex items-center gap-2 rounded-lg bg-[#faf9fd] px-3 py-2.5 text-xs text-[#5f5b68]">
//                         <BriefcaseIcon />
//                         <span>{client.type}</span>
//                       </div>

//                       {/* Location + Rating */}
//                       <div className="mt-4 grid grid-cols-2 gap-3">

//                         <div className="rounded-lg border border-[#eeeaf4] p-3">

//                           <div className="flex items-center gap-1.5 text-xs text-[#96929f]">
//                             <MapPinIcon />
//                             Location
//                           </div>

//                           <p className="mt-1 text-sm font-semibold text-[#403d48]">
//                             {client.location}
//                           </p>

//                         </div>

//                         <div className="rounded-lg border border-[#eeeaf4] p-3">

//                           <div className="flex items-center gap-1.5 text-xs text-[#96929f]">
//                             <span className="text-yellow-500">
//                               <StarIcon />
//                             </span>
//                             Rating
//                           </div>

//                           <p className="mt-1 text-sm font-semibold text-[#403d48]">
//                             {client.rating}
//                           </p>

//                         </div>

//                       </div>

//                       {/* Phone */}
//                       <div className="mt-4 flex items-center gap-2 text-xs text-[#66626f]">
//                         <PhoneIcon />
//                         {client.phone}
//                       </div>

//                       {/* Status */}
//                       <div className="mt-4">

//                         {client.status === "Converted" ? (
//                           <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
//                             <CheckIcon />
//                             Converted to Lead
//                           </span>
//                         ) : (
//                           <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
//                             New Prospect
//                           </span>
//                         )}

//                       </div>

//                       {/* Buttons */}
//                       <div className="mt-5 flex gap-2">

//                         <button
//                           onClick={() => handleViewDetails(client)}
//                           className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                         >
//                           <EyeIcon />
//                           View Details
//                         </button>

//                         <button
//                           onClick={() => handleConvertToLead(client)}
//                           disabled={client.status === "Converted"}
//                           className={`flex h-10 flex-1 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold text-white transition ${
//                             client.status === "Converted"
//                               ? "cursor-not-allowed bg-green-500"
//                               : "bg-indigo-600 hover:bg-indigo-700"
//                           }`}
//                         >
//                           {client.status === "Converted" ? (
//                             <>
//                               <CheckIcon />
//                               Lead Added
//                             </>
//                           ) : (
//                             <>
//                               <UserPlusIcon />
//                               Convert to Lead
//                             </>
//                           )}
//                         </button>

//                       </div>

//                     </div>

//                   ))}

//                 </div>
//               )}

//               {/* Empty State */}
//               {filteredClients.length === 0 && (
//                 <div className="rounded-2xl border border-[#e5e1ed] bg-white px-6 py-16 text-center shadow-sm">

//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <SearchIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold text-[#292732]">
//                     No businesses found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Try changing your search, profession, or location filters.
//                   </p>

//                 </div>
//               )}

//             </div>

//             {/* Bottom Information */}
//             <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">

//               <div className="flex gap-4">

//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
//                   <UserPlusIcon />
//                 </div>

//                 <div>

//                   <h3 className="text-sm font-semibold text-indigo-900">
//                     Convert qualified businesses into leads
//                   </h3>

//                   <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
//                     Review the business details before adding a prospect to
//                     your sales pipeline. Converted businesses will become
//                     available in the Leads section for follow-ups and demos.
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </main>

//       </div>

//       {/* VIEW DETAILS MODAL */}
//       {showDetails && selectedClient && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
//           onClick={handleCloseDetails}
//         >

//           <div
//             className="w-full max-w-lg rounded-2xl bg-white shadow-2xl"
//             onClick={(event) => event.stopPropagation()}
//           >

//             {/* Modal Header */}
//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">

//               <div className="flex items-center gap-3">

//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">
//                   {selectedClient.company.charAt(0)}
//                 </div>

//                 <div>

//                   <h2 className="text-lg font-bold text-[#292732]">
//                     {selectedClient.company}
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {selectedClient.type}
//                   </p>

//                 </div>

//               </div>

//               <button
//                 onClick={handleCloseDetails}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-900"
//               >
//                 <XIcon />
//               </button>

//             </div>

//             {/* Modal Body */}
//             <div className="p-6">

//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

//                 <div className="rounded-xl border border-[#eeeaf4] p-4">

//                   <div className="flex items-center gap-2 text-xs text-[#96929f]">
//                     <BriefcaseIcon />
//                     Profession
//                   </div>

//                   <p className="mt-2 text-sm font-semibold text-[#292732]">
//                     {selectedClient.type}
//                   </p>

//                 </div>

//                 <div className="rounded-xl border border-[#eeeaf4] p-4">

//                   <div className="flex items-center gap-2 text-xs text-[#96929f]">
//                     <MapPinIcon />
//                     Location
//                   </div>

//                   <p className="mt-2 text-sm font-semibold text-[#292732]">
//                     {selectedClient.location}
//                   </p>

//                 </div>

//                 <div className="rounded-xl border border-[#eeeaf4] p-4">

//                   <div className="flex items-center gap-2 text-xs text-[#96929f]">
//                     <PhoneIcon />
//                     Contact
//                   </div>

//                   <p className="mt-2 text-sm font-semibold text-[#292732]">
//                     {selectedClient.phone}
//                   </p>

//                 </div>

//                 <div className="rounded-xl border border-[#eeeaf4] p-4">

//                   <div className="flex items-center gap-2 text-xs text-[#96929f]">
//                     <span className="text-yellow-500">
//                       <StarIcon />
//                     </span>
//                     Rating
//                   </div>

//                   <p className="mt-2 text-sm font-semibold text-[#292732]">
//                     {selectedClient.rating} / 5
//                   </p>

//                 </div>

//               </div>

//               <div className="mt-4 rounded-xl bg-[#faf9fd] p-4">

//                 <p className="text-xs font-medium text-[#96929f]">
//                   CURRENT STATUS
//                 </p>

//                 <p className="mt-1 text-sm font-semibold text-[#292732]">
//                   {selectedClient.status === "Converted"
//                     ? "Converted to Lead"
//                     : "New Prospect"}
//                 </p>

//               </div>

//             </div>

//             {/* Modal Footer */}
//             <div className="flex justify-end gap-3 border-t border-[#eeeaf4] px-6 py-4">

//               <button
//                 onClick={handleCloseDetails}
//                 className="rounded-lg border border-[#e3dfeb] px-4 py-2.5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
//               >
//                 Close
//               </button>

//               {selectedClient.status !== "Converted" && (
//                 <button
//                   onClick={() => {
//                     handleConvertToLead(selectedClient);
//                     handleCloseDetails();
//                   }}
//                   className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
//                 >
//                   <UserPlusIcon />
//                   Convert to Lead
//                 </button>
//               )}

//             </div>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// }

// export default SearchResults;
























































import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Sidebar from "../components/dashboard/Sidebar";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

/* -------------------------------------------------------------------------- */
/* Icons                                                                     */
/* -------------------------------------------------------------------------- */

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

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
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
      <path d="M5 20c.8-4 3.1-6 7-6s6.2 2 7 6" />
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

function UserPlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" />
      <path d="M18 8v6M15 11h6" />
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

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const getToken = () =>
  localStorage.getItem("token") || sessionStorage.getItem("token");

const getAuthHeaders = () => {
  const token = getToken();

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
};

/*
 * Convert backend PotentialClient object into the structure used by
 * this page. No fake data is created here.
 */
const normalizeClient = (client) => {
  return {
    id: client?._id,

    company: client?.companyName || "Unnamed Company",

    type: client?.industry || "Not specified",

    location: client?.location || "Location not available",

    phone: client?.phone || "No phone available",

    contactPerson: client?.contactPerson || "",

    designation: client?.designation || "",

    email: client?.email || "",

    website: client?.website || "",

    source: client?.source || "",

    productInterest: client?.productInterest || "",

    requirement: client?.requirement || "",

    notes: client?.notes || "",

    isConvertedToLead: Boolean(client?.isConvertedToLead),

    status: client?.isConvertedToLead ? "Converted" : "New",

    raw: client,
  };
};

/* -------------------------------------------------------------------------- */
/* Search Results                                                             */
/* -------------------------------------------------------------------------- */

function SearchResults({ onNavigate }) {
  const [searchText, setSearchText] = useState("");

  const [location, setLocation] = useState("All Locations");

  const [profession, setProfession] = useState("All Professions");

  const [selectedClients, setSelectedClients] = useState([]);

  const [clientList, setClientList] = useState([]);

  const [selectedClient, setSelectedClient] = useState(null);

  const [showDetails, setShowDetails] = useState(false);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [convertingId, setConvertingId] = useState(null);

  /* ---------------------------------------------------------------------- */
  /* Load search results / potential clients                                */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    let mounted = true;

    const loadClients = async () => {
      setLoading(true);
      setError("");

      try {
        const storedResults = sessionStorage.getItem(
          "tapcard_client_search_results"
        );

        const storedFilters = sessionStorage.getItem(
          "tapcard_client_search_filters"
        );

        let parsedFilters = null;

        if (storedFilters) {
          try {
            parsedFilters = JSON.parse(storedFilters);
          } catch {
            parsedFilters = null;
          }
        }

        /*
         * Restore the filters used from FindClients.
         */
        if (parsedFilters) {
          if (
            parsedFilters.profession &&
            parsedFilters.profession !== "All Professions"
          ) {
            setProfession(parsedFilters.profession);
          }

          if (
            parsedFilters.location &&
            parsedFilters.location !== "All Locations"
          ) {
            setLocation(parsedFilters.location);
          }
        }

        /*
         * If FindClients already performed a backend search,
         * use those backend results.
         */
        if (storedResults) {
          try {
            const parsedResults = JSON.parse(storedResults);

            if (Array.isArray(parsedResults)) {
              const normalized = parsedResults
                .map(normalizeClient)
                .filter((client) => client.id);

              if (mounted) {
                setClientList(normalized);
                setLoading(false);
              }

              return;
            }
          } catch {
            /*
             * If sessionStorage contains invalid data,
             * fall back to the backend.
             */
          }
        }

        /*
         * Fallback:
         * Get all Potential Clients directly from backend.
         */
        const response = await axios.get(
          `${API_BASE_URL}/potential-clients`,
          {
            headers: getAuthHeaders(),
          }
        );

        if (!mounted) return;

        const backendClients = Array.isArray(response.data?.clients)
          ? response.data.clients
          : [];

        setClientList(
          backendClients
            .map(normalizeClient)
            .filter((client) => client.id)
        );
      } catch (err) {
        if (!mounted) return;

        if (err.response?.status === 401) {
          setError("Your session has expired. Please login again.");
        } else {
          setError(
            err.response?.data?.message ||
              err.message ||
              "Failed to load potential clients."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadClients();

    return () => {
      mounted = false;
    };
  }, []);

  /* ---------------------------------------------------------------------- */
  /* Filtering                                                               */
  /* ---------------------------------------------------------------------- */

  const filteredClients = useMemo(() => {
    const search = searchText.trim().toLowerCase();

    return clientList.filter((client) => {
      const matchesSearch =
        !search ||
        client.company.toLowerCase().includes(search) ||
        client.type.toLowerCase().includes(search) ||
        client.location.toLowerCase().includes(search) ||
        client.phone.toLowerCase().includes(search) ||
        client.contactPerson.toLowerCase().includes(search) ||
        client.email.toLowerCase().includes(search);

      const matchesLocation =
        location === "All Locations" ||
        client.location.toLowerCase() === location.toLowerCase();

      const matchesProfession =
        profession === "All Professions" ||
        client.type.toLowerCase() === profession.toLowerCase();

      return matchesSearch && matchesLocation && matchesProfession;
    });
  }, [clientList, searchText, location, profession]);

  /* ---------------------------------------------------------------------- */
  /* Selection                                                               */
  /* ---------------------------------------------------------------------- */

  const toggleClient = (id) => {
    setSelectedClients((current) =>
      current.includes(id)
        ? current.filter((clientId) => clientId !== id)
        : [...current, id]
    );
  };

  const toggleAll = () => {
    if (filteredClients.length === 0) {
      return;
    }

    const filteredIds = filteredClients.map((client) => client.id);

    const allSelected = filteredIds.every((id) =>
      selectedClients.includes(id)
    );

    if (allSelected) {
      setSelectedClients((current) =>
        current.filter((id) => !filteredIds.includes(id))
      );
    } else {
      setSelectedClients((current) => [
        ...new Set([...current, ...filteredIds]),
      ]);
    }
  };

  /* ---------------------------------------------------------------------- */
  /* Details                                                                 */
  /* ---------------------------------------------------------------------- */

  const handleViewDetails = (client) => {
    setSelectedClient(client);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedClient(null);
  };

  /* ---------------------------------------------------------------------- */
  /* Convert Potential Client → Lead                                         */
  /* ---------------------------------------------------------------------- */

  const handleConvertToLead = async (client) => {
    if (!client?.id) {
      return;
    }

    if (client.isConvertedToLead) {
      return;
    }

    const token = getToken();

    if (!token) {
      alert("Please login again to convert this client to a lead.");
      return;
    }

    try {
      setConvertingId(client.id);

      const response = await axios.post(
        `${API_BASE_URL}/leads/from-potential/${client.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data?.success) {
        throw new Error(
          response.data?.message || "Failed to convert client to lead."
        );
      }

      /*
       * Backend has already:
       * 1. Created the Lead
       * 2. Updated PotentialClient.isConvertedToLead = true
       *
       * Update only the local representation so the UI reflects
       * the confirmed backend result.
       */
      setClientList((currentClients) =>
        currentClients.map((item) =>
          item.id === client.id
            ? {
                ...item,
                status: "Converted",
                isConvertedToLead: true,
              }
            : item
        )
      );

      setSelectedClients((current) =>
        current.filter((id) => id !== client.id)
      );

      /*
       * Also update the selected modal client if it is open.
       */
      setSelectedClient((current) => {
        if (!current || current.id !== client.id) {
          return current;
        }

        return {
          ...current,
          status: "Converted",
          isConvertedToLead: true,
        };
      });

      /*
       * Keep sessionStorage synchronized when search results
       * originally came from FindClients.
       */
      try {
        const storedResults = sessionStorage.getItem(
          "tapcard_client_search_results"
        );

        if (storedResults) {
          const parsedResults = JSON.parse(storedResults);

          if (Array.isArray(parsedResults)) {
            const updatedResults = parsedResults.map((item) =>
              item?._id === client.id
                ? {
                    ...item,
                    isConvertedToLead: true,
                  }
                : item
            );

            sessionStorage.setItem(
              "tapcard_client_search_results",
              JSON.stringify(updatedResults)
            );
          }
        }
      } catch {
        /*
         * Session storage is only a UI cache.
         * Backend remains the source of truth.
         */
      }

      alert(
        response.data?.message ||
          "Potential client added to leads successfully."
      );
    } catch (err) {
      if (err.response?.status === 401) {
        alert("Your session has expired. Please login again.");
      } else {
        alert(
          err.response?.data?.message ||
            err.message ||
            "Failed to convert client to lead."
        );
      }
    } finally {
      setConvertingId(null);
    }
  };

  /* ---------------------------------------------------------------------- */
  /* Render                                                                  */
  /* ---------------------------------------------------------------------- */

  return (
    <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
      <div className="flex min-h-screen w-full">
        <Sidebar onNavigate={onNavigate} />

        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">
            <div className="relative w-full max-w-[520px]">
              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8797]">
                <SearchIcon />
              </div>

              <input
                type="text"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search clients, businesses..."
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

          {/* Main Content */}
          <div className="w-full p-6 sm:p-8 lg:p-10">
            {/* Heading */}
            <div className="animate-[fadeIn_.5s_ease-out]">
              <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                Search Results
              </h1>

              <p className="mt-1 text-sm text-[#94909d]">
                Browse potential businesses and discover your next clients.
              </p>
            </div>

            {/* Search Summary */}
            <div className="mt-7 rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <p className="text-xs font-medium text-[#9995a1]">
                    SEARCH RESULTS
                  </p>

                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="text-lg font-bold text-[#24232d]">
                      {filteredClients.length} businesses found
                    </span>

                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                      {profession}
                    </span>

                    <span className="rounded-full bg-[#f5f3f8] px-3 py-1 text-xs font-medium text-[#716d79]">
                      {location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="relative">
                    <select
                      value={profession}
                      onChange={(event) =>
                        setProfession(event.target.value)
                      }
                      className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >
                      <option>All Professions</option>
                      <option>Real Estate Agency</option>
                      <option>Dental Clinic</option>
                      <option>Restaurant</option>
                      <option>Hotel</option>
                      <option>Gym</option>
                      <option>Salon</option>
                      <option>Retail Store</option>
                      <option>Law Firm</option>
                      <option>Medical Clinic</option>
                      <option>Education</option>
                    </select>

                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <ChevronDownIcon />
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      className="h-10 appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    >
                      <option>All Locations</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Pune</option>
                      <option>Bangalore</option>
                      <option>Hyderabad</option>
                      <option>Chennai</option>
                    </select>

                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <ChevronDownIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Results */}
            <div className="mt-6">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#272631]">
                    Potential Clients
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    Review businesses and convert qualified prospects into
                    leads.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {selectedClients.length > 0 && (
                    <span className="text-xs font-medium text-indigo-600">
                      {selectedClients.length} selected
                    </span>
                  )}

                  <button
                    onClick={toggleAll}
                    disabled={filteredClients.length === 0}
                    className="rounded-lg border border-[#e2deea] px-3 py-2 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {selectedClients.length === filteredClients.length &&
                    filteredClients.length > 0
                      ? "Unselect All"
                      : "Select All"}
                  </button>
                </div>
              </div>

              {/* Loading */}
              {loading && (
                <div className="rounded-2xl border border-[#e5e1ed] bg-white px-6 py-16 text-center shadow-sm">
                  <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-indigo-100 border-t-indigo-600" />

                  <p className="mt-4 text-sm font-medium text-[#66626f]">
                    Loading potential clients...
                  </p>
                </div>
              )}

              {/* CLIENT CARDS */}
              {!loading && filteredClients.length > 0 && (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {filteredClients.map((client) => {
                    const isConverting = convertingId === client.id;
                    const isConverted = client.isConvertedToLead;

                    return (
                      <div
                        key={client.id}
                        className="group rounded-2xl border border-[#e5e1ed] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                      >
                        {/* Card Top */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-base font-bold text-indigo-600">
                              {client.company.charAt(0).toUpperCase()}
                            </div>

                            <div className="min-w-0">
                              <h3 className="truncate text-sm font-bold text-[#292732]">
                                {client.company}
                              </h3>

                              <p className="mt-1 text-xs text-[#9995a1]">
                                Potential client
                              </p>
                            </div>
                          </div>

                          <input
                            type="checkbox"
                            checked={selectedClients.includes(client.id)}
                            onChange={() => toggleClient(client.id)}
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>

                        {/* Profession */}
                        <div className="mt-5 flex items-center gap-2 rounded-lg bg-[#faf9fd] px-3 py-2.5 text-xs text-[#5f5b68]">
                          <BriefcaseIcon />
                          <span>{client.type}</span>
                        </div>

                        {/* Location + Contact Person */}
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div className="rounded-lg border border-[#eeeaf4] p-3">
                            <div className="flex items-center gap-1.5 text-xs text-[#96929f]">
                              <MapPinIcon />
                              Location
                            </div>

                            <p className="mt-1 truncate text-sm font-semibold text-[#403d48]">
                              {client.location}
                            </p>
                          </div>

                          <div className="rounded-lg border border-[#eeeaf4] p-3">
                            <div className="flex items-center gap-1.5 text-xs text-[#96929f]">
                              <UserIcon />
                              Contact Person
                            </div>

                            <p className="mt-1 truncate text-sm font-semibold text-[#403d48]">
                              {client.contactPerson || "Not available"}
                            </p>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="mt-4 flex items-center gap-2 text-xs text-[#66626f]">
                          <PhoneIcon />
                          <span className="truncate">{client.phone}</span>
                        </div>

                        {/* Status */}
                        <div className="mt-4">
                          {isConverted ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                              <CheckIcon />
                              Converted to Lead
                            </span>
                          ) : (
                            <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
                              New Prospect
                            </span>
                          )}
                        </div>

                        {/* Buttons */}
                        <div className="mt-5 flex gap-2">
                          <button
                            onClick={() => handleViewDetails(client)}
                            className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-3 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                          >
                            <EyeIcon />
                            View Details
                          </button>

                          <button
                            onClick={() => handleConvertToLead(client)}
                            disabled={isConverted || isConverting}
                            className={`flex h-10 flex-1 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold text-white transition ${
                              isConverted
                                ? "cursor-not-allowed bg-green-500"
                                : isConverting
                                ? "cursor-not-allowed bg-indigo-400"
                                : "bg-indigo-600 hover:bg-indigo-700"
                            }`}
                          >
                            {isConverted ? (
                              <>
                                <CheckIcon />
                                Lead Added
                              </>
                            ) : isConverting ? (
                              <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                Converting...
                              </>
                            ) : (
                              <>
                                <UserPlusIcon />
                                Convert to Lead
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Empty State */}
              {!loading && filteredClients.length === 0 && (
                <div className="rounded-2xl border border-[#e5e1ed] bg-white px-6 py-16 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <SearchIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-[#292732]">
                    No businesses found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    Try changing your search, profession, or location filters.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Information */}
            <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <UserPlusIcon />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-indigo-900">
                    Convert qualified businesses into leads
                  </h3>

                  <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
                    Review the business details before adding a prospect to
                    your sales pipeline. Converted businesses will become
                    available in the Leads section for follow-ups and demos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* VIEW DETAILS MODAL */}
      {showDetails && selectedClient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={handleCloseDetails}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">
                  {selectedClient.company.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#292732]">
                    {selectedClient.company}
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {selectedClient.type}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCloseDetails}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-900"
              >
                <XIcon />
              </button>
            </div>

            {/* Modal Body */}
            <div className="max-h-[70vh] overflow-y-auto p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#eeeaf4] p-4">
                  <div className="flex items-center gap-2 text-xs text-[#96929f]">
                    <BriefcaseIcon />
                    Profession
                  </div>

                  <p className="mt-2 text-sm font-semibold text-[#292732]">
                    {selectedClient.type}
                  </p>
                </div>

                <div className="rounded-xl border border-[#eeeaf4] p-4">
                  <div className="flex items-center gap-2 text-xs text-[#96929f]">
                    <MapPinIcon />
                    Location
                  </div>

                  <p className="mt-2 text-sm font-semibold text-[#292732]">
                    {selectedClient.location}
                  </p>
                </div>

                <div className="rounded-xl border border-[#eeeaf4] p-4">
                  <div className="flex items-center gap-2 text-xs text-[#96929f]">
                    <UserIcon />
                    Contact Person
                  </div>

                  <p className="mt-2 text-sm font-semibold text-[#292732]">
                    {selectedClient.contactPerson || "Not available"}
                  </p>

                  {selectedClient.designation && (
                    <p className="mt-1 text-xs text-[#96929f]">
                      {selectedClient.designation}
                    </p>
                  )}
                </div>

                <div className="rounded-xl border border-[#eeeaf4] p-4">
                  <div className="flex items-center gap-2 text-xs text-[#96929f]">
                    <PhoneIcon />
                    Contact
                  </div>

                  <p className="mt-2 text-sm font-semibold text-[#292732]">
                    {selectedClient.phone || "Not available"}
                  </p>
                </div>

                <div className="rounded-xl border border-[#eeeaf4] p-4">
                  <div className="flex items-center gap-2 text-xs text-[#96929f]">
                    <MailIcon />
                    Email
                  </div>

                  <p className="mt-2 break-all text-sm font-semibold text-[#292732]">
                    {selectedClient.email || "Not available"}
                  </p>
                </div>

                <div className="rounded-xl border border-[#eeeaf4] p-4">
                  <div className="flex items-center gap-2 text-xs text-[#96929f]">
                    <BriefcaseIcon />
                    Source
                  </div>

                  <p className="mt-2 text-sm font-semibold text-[#292732]">
                    {selectedClient.source || "Not specified"}
                  </p>
                </div>
              </div>

              {(selectedClient.productInterest ||
                selectedClient.requirement ||
                selectedClient.website ||
                selectedClient.notes) && (
                <div className="mt-4 space-y-3">
                  {selectedClient.productInterest && (
                    <div className="rounded-xl bg-[#faf9fd] p-4">
                      <p className="text-xs font-medium text-[#96929f]">
                        PRODUCT INTEREST
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#292732]">
                        {selectedClient.productInterest}
                      </p>
                    </div>
                  )}

                  {selectedClient.requirement && (
                    <div className="rounded-xl bg-[#faf9fd] p-4">
                      <p className="text-xs font-medium text-[#96929f]">
                        REQUIREMENT
                      </p>

                      <p className="mt-1 text-sm leading-6 text-[#292732]">
                        {selectedClient.requirement}
                      </p>
                    </div>
                  )}

                  {selectedClient.website && (
                    <div className="rounded-xl bg-[#faf9fd] p-4">
                      <p className="text-xs font-medium text-[#96929f]">
                        WEBSITE
                      </p>

                      <p className="mt-1 break-all text-sm font-semibold text-[#292732]">
                        {selectedClient.website}
                      </p>
                    </div>
                  )}

                  {selectedClient.notes && (
                    <div className="rounded-xl bg-[#faf9fd] p-4">
                      <p className="text-xs font-medium text-[#96929f]">
                        NOTES
                      </p>

                      <p className="mt-1 text-sm leading-6 text-[#292732]">
                        {selectedClient.notes}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-4 rounded-xl bg-[#faf9fd] p-4">
                <p className="text-xs font-medium text-[#96929f]">
                  CURRENT STATUS
                </p>

                <p className="mt-1 text-sm font-semibold text-[#292732]">
                  {selectedClient.isConvertedToLead
                    ? "Converted to Lead"
                    : "New Prospect"}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 border-t border-[#eeeaf4] px-6 py-4">
              <button
                onClick={handleCloseDetails}
                className="rounded-lg border border-[#e3dfeb] px-4 py-2.5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
              >
                Close
              </button>

              {!selectedClient.isConvertedToLead && (
                <button
                  onClick={async () => {
                    await handleConvertToLead(selectedClient);
                  }}
                  disabled={convertingId === selectedClient.id}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition ${
                    convertingId === selectedClient.id
                      ? "cursor-not-allowed bg-indigo-400"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {convertingId === selectedClient.id ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Converting...
                    </>
                  ) : (
                    <>
                      <UserPlusIcon />
                      Convert to Lead
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
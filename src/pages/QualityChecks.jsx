// import { useEffect, useState } from "react";

// import Sidebar from "../components/dashboard/Sidebar";
// import api from "../api/axios";

// /* =========================
//    ICONS
// ========================= */

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

// function AlertIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-5 w-5"
//     >
//       <path d="M12 3 2.5 20h19L12 3Z" />
//       <path d="M12 9v5" />
//       <path d="M12 17h.01" />
//     </svg>
//   );
// }

// function ClipboardIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.7"
//       className="h-5 w-5"
//     >
//       <rect x="5" y="4" width="14" height="17" rx="2" />
//       <path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h4" />
//     </svg>
//   );
// }

// /* =========================
//    HELPERS
// ========================= */

// const emptyForm = {
//   order: "",
//   production: "",
//   card: "",
//   quantityChecked: "",
//   passedQuantity: "",
//   failedQuantity: "",
//   cardPrinting: false,
//   cardDesign: false,
//   NFC: false,
//   QRCode: false,
//   digitalProfile: false,
//   remarks: "",
// };

// function getId(value) {
//   if (!value) return "";

//   if (typeof value === "string") {
//     return value;
//   }

//   return value._id || value.id || "";
// }

// function getOrderId(production) {
//   if (!production) return "";

//   return getId(
//     production.order ||
//       production.orderId ||
//       production.order?._id
//   );
// }

// function getCardId(production) {
//   if (!production) return "";

//   return getId(
//     production.card ||
//       production.cardId ||
//       production.card?._id
//   );
// }

// function getOrderNumber(item) {
//   if (!item) return "-";

//   if (typeof item.order === "object" && item.order) {
//     return (
//       item.order.orderNumber ||
//       item.order._id ||
//       "-"
//     );
//   }

//   return (
//     item.orderNumber ||
//     item.order?.orderNumber ||
//     "-"
//   );
// }

// function getProductionQuantity(production) {
//   if (!production) return "";

//   return (
//     production.quantity ??
//     production.totalQuantity ??
//     production.productionQuantity ??
//     ""
//   );
// }

// function getCardName(card) {
//   if (!card) return "-";

//   return (
//     card.fullName ||
//     card.name ||
//     card.company ||
//     card._id ||
//     "-"
//   );
// }

// function getProductionStatus(production) {
//   return production?.status || "";
// }

// function getStatusClass(status) {
//   switch (status) {
//     case "Passed":
//       return "bg-green-50 text-green-600";

//     case "Failed":
//       return "bg-red-50 text-red-600";

//     case "Partially Passed":
//       return "bg-orange-50 text-orange-600";

//     default:
//       return "bg-gray-100 text-gray-500";
//   }
// }

// /* =========================
//    MAIN COMPONENT
// ========================= */

// function QualityChecks({ onNavigate }) {
//   const [qualityChecks, setQualityChecks] = useState([]);
//   const [productions, setProductions] = useState([]);
//   const [cards, setCards] = useState([]);

//   const [search, setSearch] = useState("");

//   const [statusFilter, setStatusFilter] = useState("All");

//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showViewModal, setShowViewModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);

//   const [selectedQualityCheck, setSelectedQualityCheck] =
//     useState(null);

//   const [form, setForm] = useState(emptyForm);

//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);

//   /* =========================
//      INITIAL LOAD
//   ========================= */

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     setLoading(true);

//     try {
//       await Promise.all([
//         fetchQualityChecks(),
//         fetchProductions(),
//         fetchCards(),
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* =========================
//      GET QUALITY CHECKS
//   ========================= */

//   const fetchQualityChecks = async () => {
//     try {
//       const response = await api.get("/quality-checks");

//       setQualityChecks(
//         response.data.qualityChecks ||
//           response.data.data ||
//           []
//       );
//     } catch (error) {
//       console.error(
//         "Failed to fetch quality checks:",
//         error.response?.data || error.message
//       );

//       alert(
//         error.response?.data?.message ||
//           "Failed to load quality checks."
//       );
//     }
//   };

//   /* =========================
//      GET PRODUCTIONS
//   ========================= */

//   const fetchProductions = async () => {
//     try {
//       const response = await api.get("/production");

//       const data =
//         response.data.productions ||
//         response.data.production ||
//         response.data.data ||
//         [];

//       setProductions(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error(
//         "Failed to fetch productions:",
//         error.response?.data || error.message
//       );

//       /*
//        * Production endpoint may have a different response
//        * depending on your existing productionController.
//        *
//        * Quality checks will still load normally.
//        */
//       setProductions([]);
//     }
//   };

//   /* =========================
//      GET CARDS
//   ========================= */

//   const fetchCards = async () => {
//     try {
//       const response = await api.get("/cards/my");

//       const data =
//         response.data.cards ||
//         response.data.data ||
//         [];

//       setCards(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error(
//         "Failed to fetch cards:",
//         error.response?.data || error.message
//       );

//       setCards([]);
//     }
//   };

//   /* =========================
//      FORM
//   ========================= */

//   const resetForm = () => {
//     setForm({ ...emptyForm });
//   };

//   const openCreateModal = () => {
//     resetForm();
//     setShowCreateModal(true);
//   };

//   const openViewModal = (qualityCheck) => {
//     setSelectedQualityCheck(qualityCheck);
//     setShowViewModal(true);
//   };

//   const openEditModal = (qualityCheck) => {
//     setSelectedQualityCheck(qualityCheck);

//     setForm({
//       order: getId(qualityCheck.order),
//       production: getId(qualityCheck.production),
//       card: getId(qualityCheck.card),

//       quantityChecked:
//         qualityCheck.quantityChecked ?? "",

//       passedQuantity:
//         qualityCheck.passedQuantity ?? "",

//       failedQuantity:
//         qualityCheck.failedQuantity ?? "",

//       cardPrinting:
//         qualityCheck.checks?.cardPrinting ?? false,

//       cardDesign:
//         qualityCheck.checks?.cardDesign ?? false,

//       NFC:
//         qualityCheck.checks?.NFC ?? false,

//       QRCode:
//         qualityCheck.checks?.QRCode ?? false,

//       digitalProfile:
//         qualityCheck.checks?.digitalProfile ?? false,

//       remarks:
//         qualityCheck.remarks || "",
//     });

//     setShowEditModal(true);
//   };

//   const handleChange = (e) => {
//     const {
//       name,
//       value,
//       type,
//       checked,
//     } = e.target;

//     setForm((current) => ({
//       ...current,
//       [name]:
//         type === "checkbox"
//           ? checked
//           : value,
//     }));
//   };

//   /* =========================
//      PRODUCTION CHANGE
//   ========================= */

//   const handleProductionChange = (e) => {
//     const productionId = e.target.value;

//     const selectedProduction = productions.find(
//       (item) => getId(item) === productionId
//     );

//     if (!selectedProduction) {
//       setForm((current) => ({
//         ...current,
//         production: "",
//         order: "",
//         card: "",
//         quantityChecked: "",
//       }));

//       return;
//     }

//     setForm((current) => ({
//       ...current,

//       production: productionId,

//       order: getOrderId(selectedProduction),

//       card: getCardId(selectedProduction),

//       quantityChecked:
//         getProductionQuantity(selectedProduction),

//       passedQuantity: "",
//       failedQuantity: "",
//     }));
//   };

//   /* =========================
//      PAYLOAD
//   ========================= */

//   const buildCreatePayload = () => {
//     return {
//       order: form.order,
//       production: form.production,

//       ...(form.card
//         ? { card: form.card }
//         : {}),

//       quantityChecked: Number(
//         form.quantityChecked
//       ),

//       passedQuantity: Number(
//         form.passedQuantity || 0
//       ),

//       failedQuantity: Number(
//         form.failedQuantity || 0
//       ),

//       checks: {
//         cardPrinting: form.cardPrinting,
//         cardDesign: form.cardDesign,
//         NFC: form.NFC,
//         QRCode: form.QRCode,
//         digitalProfile: form.digitalProfile,
//       },

//       remarks: form.remarks.trim(),
//     };
//   };

//   /* =========================
//      CREATE
//   ========================= */

//   const createQualityCheck = async (e) => {
//     e.preventDefault();

//     if (!form.order) {
//       alert("Please select an order.");
//       return;
//     }

//     if (!form.production) {
//       alert("Please select a production.");
//       return;
//     }

//     if (!form.quantityChecked) {
//       alert("Please enter quantity checked.");
//       return;
//     }

//     const quantity = Number(
//       form.quantityChecked
//     );

//     const passed = Number(
//       form.passedQuantity || 0
//     );

//     const failed = Number(
//       form.failedQuantity || 0
//     );

//     if (passed + failed > quantity) {
//       alert(
//         "Passed quantity + failed quantity cannot be greater than checked quantity."
//       );
//       return;
//     }

//     setSubmitting(true);

//     try {
//       const payload = buildCreatePayload();

//       const response = await api.post(
//         "/quality-checks",
//         payload
//       );

//       const createdQualityCheck =
//         response.data.qualityCheck ||
//         response.data.data;

//       if (!createdQualityCheck) {
//         throw new Error(
//           "Quality check created but no data was returned."
//         );
//       }

//       setQualityChecks((current) => [
//         createdQualityCheck,
//         ...current,
//       ]);

//       setShowCreateModal(false);
//       resetForm();
//     } catch (error) {
//       console.error(
//         "Failed to create quality check:",
//         error.response?.data || error.message
//       );

//       alert(
//         error.response?.data?.message ||
//           "Failed to create quality check."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   /* =========================
//      UPDATE
//   ========================= */

//   const updateQualityCheck = async (e) => {
//     e.preventDefault();

//     if (!selectedQualityCheck) {
//       return;
//     }

//     const quantity = Number(
//       form.quantityChecked
//     );

//     const passed = Number(
//       form.passedQuantity || 0
//     );

//     const failed = Number(
//       form.failedQuantity || 0
//     );

//     if (passed + failed > quantity) {
//       alert(
//         "Passed quantity + failed quantity cannot be greater than checked quantity."
//       );
//       return;
//     }

//     setSubmitting(true);

//     try {
//       const id =
//         getId(selectedQualityCheck);

//       const payload = {
//         passedQuantity: passed,
//         failedQuantity: failed,

//         checks: {
//           cardPrinting: form.cardPrinting,
//           cardDesign: form.cardDesign,
//           NFC: form.NFC,
//           QRCode: form.QRCode,
//           digitalProfile: form.digitalProfile,
//         },

//         remarks: form.remarks.trim(),
//       };

//       const response = await api.put(
//         `/quality-checks/${id}`,
//         payload
//       );

//       const updatedQualityCheck =
//         response.data.qualityCheck ||
//         response.data.data;

//       if (!updatedQualityCheck) {
//         throw new Error(
//           "Quality check updated but no data was returned."
//         );
//       }

//       setQualityChecks((current) =>
//         current.map((item) =>
//           getId(item) === id
//             ? updatedQualityCheck
//             : item
//         )
//       );

//       setShowEditModal(false);
//       setSelectedQualityCheck(null);
//       resetForm();
//     } catch (error) {
//       console.error(
//         "Failed to update quality check:",
//         error.response?.data || error.message
//       );

//       alert(
//         error.response?.data?.message ||
//           "Failed to update quality check."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   /* =========================
//      FILTER
//   ========================= */

//   const filteredQualityChecks =
//     qualityChecks.filter((item) => {
//       const searchValue =
//         search.toLowerCase();

//       const orderNumber =
//         getOrderNumber(item).toLowerCase();

//       const productionId =
//         getId(item.production)
//           .toLowerCase();

//       const cardName =
//         getCardName(item.card)
//           .toLowerCase();

//       const remarks =
//         (item.remarks || "")
//           .toLowerCase();

//       const matchesSearch =
//         orderNumber.includes(searchValue) ||
//         productionId.includes(searchValue) ||
//         cardName.includes(searchValue) ||
//         remarks.includes(searchValue);

//       const matchesStatus =
//         statusFilter === "All" ||
//         item.status === statusFilter;

//       return (
//         matchesSearch &&
//         matchesStatus
//       );
//     });

//   /* =========================
//      STATS
//   ========================= */

//   const totalChecks =
//     qualityChecks.length;

//   const passedChecks =
//     qualityChecks.filter(
//       (item) =>
//         item.status === "Passed"
//     ).length;

//   const failedChecks =
//     qualityChecks.filter(
//       (item) =>
//         item.status === "Failed"
//     ).length;

//   const partialChecks =
//     qualityChecks.filter(
//       (item) =>
//         item.status ===
//         "Partially Passed"
//     ).length;

//   /* =========================
//      COMPLETED PRODUCTIONS
//   ========================= */

//   const completedProductions =
//     productions.filter(
//       (production) =>
//         getProductionStatus(
//           production
//         ) === "Production Completed"
//     );

//   /* =========================
//      RENDER
//   ========================= */

//   return (
//     <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
//       <div className="flex min-h-screen w-full">

//         <Sidebar
//           onNavigate={onNavigate}
//         />

//         <main className="min-w-0 flex-1">

//           {/* ================= HEADER ================= */}

//           <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">

//             <div className="relative w-full max-w-[520px]">

//               <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8797]">
//                 <SearchIcon />
//               </div>

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(e.target.value)
//                 }
//                 placeholder="Search quality checks..."
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

//           {/* ================= CONTENT ================= */}

//           <div className="w-full p-6 sm:p-8 lg:p-10">

//             {/* TITLE */}

//             <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

//               <div>

//                 <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                   Quality Check
//                 </h1>

//                 <p className="mt-1 text-sm text-[#94909d]">
//                   Inspect completed production before card activation.
//                 </p>

//               </div>

//               <button
//                 onClick={openCreateModal}
//                 className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//               >
//                 <PlusIcon />
//                 Create Quality Check
//               </button>

//             </div>

//             {/* ================= STATS ================= */}

//             <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

//               {/* Total */}

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

//                 <div className="flex items-center justify-between">

//                   <div>

//                     <p className="text-xs font-medium text-[#96929f]">
//                       Total Checks
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {totalChecks}
//                     </p>

//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                     <ClipboardIcon />
//                   </div>

//                 </div>

//               </div>

//               {/* Passed */}

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

//                 <div className="flex items-center justify-between">

//                   <div>

//                     <p className="text-xs font-medium text-[#96929f]">
//                       Passed
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {passedChecks}
//                     </p>

//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
//                     <CheckIcon />
//                   </div>

//                 </div>

//               </div>

//               {/* Failed */}

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

//                 <div className="flex items-center justify-between">

//                   <div>

//                     <p className="text-xs font-medium text-[#96929f]">
//                       Failed
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {failedChecks}
//                     </p>

//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
//                     <AlertIcon />
//                   </div>

//                 </div>

//               </div>

//               {/* Partial */}

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">

//                 <div className="flex items-center justify-between">

//                   <div>

//                     <p className="text-xs font-medium text-[#96929f]">
//                       Partially Passed
//                     </p>

//                     <p className="mt-2 text-2xl font-bold text-[#272631]">
//                       {partialChecks}
//                     </p>

//                   </div>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
//                     <ClipboardIcon />
//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* ================= TABLE ================= */}

//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">

//               {/* FILTER HEADER */}

//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">

//                 <div>

//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Quality Checks
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     {filteredQualityChecks.length} checks displayed
//                   </p>

//                 </div>

//                 <div className="flex flex-wrap gap-2">

//                   {[
//                     "All",
//                     "Pending",
//                     "Passed",
//                     "Failed",
//                     "Partially Passed",
//                   ].map((item) => (

//                     <button
//                       key={item}
//                       onClick={() =>
//                         setStatusFilter(item)
//                       }
//                       className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
//                         statusFilter === item
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

//                 <div className="px-6 py-16 text-center">

//                   <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-indigo-100 border-t-indigo-600" />

//                   <p className="mt-4 text-sm text-[#96929f]">
//                     Loading quality checks...
//                   </p>

//                 </div>

//               ) : filteredQualityChecks.length === 0 ? (

//                 /* EMPTY */

//                 <div className="px-6 py-16 text-center">

//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
//                     <ClipboardIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold">
//                     No quality checks found
//                   </h3>

//                   <p className="mt-1 text-sm text-[#96929f]">
//                     Create a quality check after production is completed.
//                   </p>

//                 </div>

//               ) : (

//                 /* LIST */

//                 <div className="divide-y divide-[#eeeaf4]">

//                   {filteredQualityChecks.map(
//                     (qualityCheck) => (

//                       <div
//                         key={getId(
//                           qualityCheck
//                         )}
//                         className="p-5 transition hover:bg-[#fcfbff]"
//                       >

//                         <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

//                           {/* LEFT */}

//                           <div className="flex min-w-0 items-start gap-4">

//                             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
//                               QC
//                             </div>

//                             <div className="min-w-0">

//                               <div className="flex flex-wrap items-center gap-2">

//                                 <h3 className="text-sm font-bold text-[#292732]">
//                                   {getOrderNumber(
//                                     qualityCheck
//                                   )}
//                                 </h3>

//                                 <span
//                                   className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusClass(
//                                     qualityCheck.status
//                                   )}`}
//                                 >
//                                   {qualityCheck.status ||
//                                     "Pending"}
//                                 </span>

//                               </div>

//                               <p className="mt-1 text-xs text-[#96929f]">

//                                 Production:{" "}

//                                 {getId(
//                                   qualityCheck.production
//                                 ) || "-"}

//                               </p>

//                               <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">

//                                 <span>
//                                   Checked:{" "}
//                                   {
//                                     qualityCheck.quantityChecked
//                                   }
//                                 </span>

//                                 <span className="text-green-600">
//                                   Passed:{" "}
//                                   {
//                                     qualityCheck.passedQuantity
//                                   }
//                                 </span>

//                                 <span className="text-red-600">
//                                   Failed:{" "}
//                                   {
//                                     qualityCheck.failedQuantity
//                                   }
//                                 </span>

//                                 {qualityCheck.card && (
//                                   <span>
//                                     Card:{" "}
//                                     {getCardName(
//                                       qualityCheck.card
//                                     )}
//                                   </span>
//                                 )}

//                               </div>

//                             </div>

//                           </div>

//                           {/* ACTIONS */}

//                           <div className="flex flex-wrap gap-2">

//                             <button
//                               onClick={() =>
//                                 openViewModal(
//                                   qualityCheck
//                                 )
//                               }
//                               className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                             >
//                               <EyeIcon />
//                               View
//                             </button>

//                             <button
//                               onClick={() =>
//                                 openEditModal(
//                                   qualityCheck
//                                 )
//                               }
//                               className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                             >
//                               <EditIcon />
//                               Edit
//                             </button>

//                           </div>

//                         </div>

//                       </div>

//                     )
//                   )}

//                 </div>

//               )}

//             </div>

//           </div>

//         </main>

//       </div>

//       {/* ================= CREATE MODAL ================= */}

//       {showCreateModal && (

//         <QualityCheckFormModal
//           title="Create Quality Check"
//           subtitle="Inspect completed production before card activation."
//           form={form}
//           productions={completedProductions}
//           cards={cards}
//           handleChange={handleChange}
//           handleProductionChange={
//             handleProductionChange
//           }
//           onSubmit={createQualityCheck}
//           onClose={() => {
//             setShowCreateModal(false);
//             resetForm();
//           }}
//           submitText={
//             submitting
//               ? "Creating..."
//               : "Create Quality Check"
//           }
//           isEdit={false}
//         />

//       )}

//       {/* ================= EDIT MODAL ================= */}

//       {showEditModal && (

//         <QualityCheckFormModal
//           title="Edit Quality Check"
//           subtitle="Update quality check results and inspection details."
//           form={form}
//           productions={productions}
//           cards={cards}
//           handleChange={handleChange}
//           handleProductionChange={
//             handleProductionChange
//           }
//           onSubmit={updateQualityCheck}
//           onClose={() => {
//             setShowEditModal(false);
//             setSelectedQualityCheck(null);
//             resetForm();
//           }}
//           submitText={
//             submitting
//               ? "Saving..."
//               : "Save Changes"
//           }
//           isEdit={true}
//         />

//       )}

//       {/* ================= VIEW MODAL ================= */}

//       {showViewModal &&
//         selectedQualityCheck && (

//           <ViewQualityCheckModal
//             qualityCheck={
//               selectedQualityCheck
//             }
//             onClose={() => {
//               setShowViewModal(false);
//               setSelectedQualityCheck(null);
//             }}
//             onEdit={() => {
//               setShowViewModal(false);
//               openEditModal(
//                 selectedQualityCheck
//               );
//             }}
//           />

//         )}

//     </div>
//   );
// }

// /* =========================================================
//    QUALITY CHECK FORM MODAL
// ========================================================= */

// function QualityCheckFormModal({
//   title,
//   subtitle,
//   form,
//   productions,
//   cards,
//   handleChange,
//   handleProductionChange,
//   onSubmit,
//   onClose,
//   submitText,
//   isEdit,
// }) {
//   const selectedProduction =
//     productions.find(
//       (item) =>
//         getId(item) === form.production
//     );

//   const selectedCard =
//     cards.find(
//       (item) =>
//         getId(item) === form.card
//     );

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

//       <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">

//         {/* HEADER */}

//         <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">

//           <div>

//             <h2 className="text-lg font-bold text-[#272631]">
//               {title}
//             </h2>

//             <p className="mt-1 text-xs text-[#96929f]">
//               {subtitle}
//             </p>

//           </div>

//           <button
//             onClick={onClose}
//             className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100 hover:text-gray-700"
//           >
//             <XIcon />
//           </button>

//         </div>

//         {/* FORM */}

//         <form onSubmit={onSubmit}>

//           <div className="max-h-[72vh] overflow-y-auto px-6 py-6">

//             {/* PRODUCTION INFORMATION */}

//             <div className="mb-6">

//               <h3 className="text-sm font-bold text-[#272631]">
//                 Production Information
//               </h3>

//               <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">

//                 {/* Production */}

//                 <div className="sm:col-span-2">

//                   <label className="text-xs font-semibold text-[#4e4a57]">
//                     Production
//                     <span className="ml-1 text-red-500">
//                       *
//                     </span>
//                   </label>

//                   <select
//                     name="production"
//                     value={form.production}
//                     onChange={
//                       handleProductionChange
//                     }
//                     disabled={isEdit}
//                     required
//                     className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-gray-100"
//                   >

//                     <option value="">
//                       Select completed production
//                     </option>

//                     {productions.map(
//                       (production) => (

//                         <option
//                           key={getId(
//                             production
//                           )}
//                           value={getId(
//                             production
//                           )}
//                         >
//                           {getId(
//                             production
//                           )}{" "}
//                           — Quantity:{" "}
//                           {getProductionQuantity(
//                             production
//                           )}
//                         </option>

//                       )
//                     )}

//                   </select>

//                   {!isEdit &&
//                     productions.length === 0 && (

//                       <p className="mt-2 text-xs text-orange-600">
//                         No Production Completed record is available.
//                         Complete production first.
//                       </p>

//                     )}

//                 </div>

//                 {/* Order */}

//                 <div>

//                   <label className="text-xs font-semibold text-[#4e4a57]">
//                     Order
//                   </label>

//                   <input
//                     type="text"
//                     value={
//                       form.order || "Not available"
//                     }
//                     readOnly
//                     className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-gray-50 px-3 text-sm text-gray-600 outline-none"
//                   />

//                 </div>

//                 {/* Card */}

//                 <div>

//                   <label className="text-xs font-semibold text-[#4e4a57]">
//                     Card
//                   </label>

//                   <select
//                     name="card"
//                     value={form.card}
//                     onChange={handleChange}
//                     disabled={isEdit}
//                     className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 disabled:bg-gray-100"
//                   >

//                     <option value="">
//                       Select card
//                     </option>

//                     {cards.map((card) => (

//                       <option
//                         key={getId(card)}
//                         value={getId(card)}
//                       >
//                         {getCardName(card)}
//                       </option>

//                     ))}

//                   </select>

//                 </div>

//                 {/* Production Quantity */}

//                 {selectedProduction && (

//                   <div className="sm:col-span-2 rounded-lg bg-indigo-50 p-4">

//                     <div className="flex items-center justify-between">

//                       <span className="text-xs font-semibold text-indigo-700">
//                         Production Quantity
//                       </span>

//                       <span className="text-lg font-bold text-indigo-700">
//                         {
//                           getProductionQuantity(
//                             selectedProduction
//                           )
//                         }
//                       </span>

//                     </div>

//                   </div>

//                 )}

//                 {selectedCard && (

//                   <div className="sm:col-span-2 rounded-lg bg-green-50 p-4">

//                     <p className="text-xs font-semibold text-green-700">
//                       Selected Card
//                     </p>

//                     <p className="mt-1 text-sm font-bold text-green-800">
//                       {getCardName(
//                         selectedCard
//                       )}
//                     </p>

//                   </div>

//                 )}

//               </div>

//             </div>

//             {/* QUANTITY */}

//             <div className="border-t border-[#eeeaf4] pt-6">

//               <h3 className="text-sm font-bold text-[#272631]">
//                 Quantity Inspection
//               </h3>

//               <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">

//                 <Input
//                   label="Quantity Checked"
//                   name="quantityChecked"
//                   type="number"
//                   value={
//                     form.quantityChecked
//                   }
//                   onChange={handleChange}
//                   placeholder="e.g. 100"
//                   required
//                   readOnly={isEdit}
//                 />

//                 <Input
//                   label="Passed Quantity"
//                   name="passedQuantity"
//                   type="number"
//                   value={
//                     form.passedQuantity
//                   }
//                   onChange={handleChange}
//                   placeholder="e.g. 95"
//                 />

//                 <Input
//                   label="Failed Quantity"
//                   name="failedQuantity"
//                   type="number"
//                   value={
//                     form.failedQuantity
//                   }
//                   onChange={handleChange}
//                   placeholder="e.g. 5"
//                 />

//               </div>

//             </div>

//             {/* CHECKLIST */}

//             <div className="border-t border-[#eeeaf4] pt-6">

//               <h3 className="text-sm font-bold text-[#272631]">
//                 Quality Checklist
//               </h3>

//               <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">

//                 <Checkbox
//                   name="cardPrinting"
//                   checked={
//                     form.cardPrinting
//                   }
//                   onChange={handleChange}
//                   label="Card Printing"
//                 />

//                 <Checkbox
//                   name="cardDesign"
//                   checked={
//                     form.cardDesign
//                   }
//                   onChange={handleChange}
//                   label="Card Design"
//                 />

//                 <Checkbox
//                   name="NFC"
//                   checked={form.NFC}
//                   onChange={handleChange}
//                   label="NFC"
//                 />

//                 <Checkbox
//                   name="QRCode"
//                   checked={form.QRCode}
//                   onChange={handleChange}
//                   label="QR Code"
//                 />

//                 <Checkbox
//                   name="digitalProfile"
//                   checked={
//                     form.digitalProfile
//                   }
//                   onChange={handleChange}
//                   label="Digital Profile"
//                 />

//               </div>

//             </div>

//             {/* REMARKS */}

//             <div className="border-t border-[#eeeaf4] pt-6">

//               <label className="text-xs font-semibold text-[#4e4a57]">
//                 Remarks
//               </label>

//               <textarea
//                 name="remarks"
//                 value={form.remarks}
//                 onChange={handleChange}
//                 rows="4"
//                 placeholder="Add quality check remarks..."
//                 className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//               />

//             </div>

//           </div>

//           {/* FOOTER */}

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
//               disabled={!!submitText?.includes("...")}
//               className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {submitText}
//             </button>

//           </div>

//         </form>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    INPUT
// ========================================================= */

// function Input({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
//   required = false,
//   readOnly = false,
// }) {
//   return (
//     <div>

//       <label className="text-xs font-semibold text-[#4e4a57]">

//         {label}

//         {required && (
//           <span className="ml-1 text-red-500">
//             *
//           </span>
//         )}

//       </label>

//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required={required}
//         readOnly={readOnly}
//         min={type === "number" ? "0" : undefined}
//         className={`mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 ${
//           readOnly
//             ? "bg-gray-100 text-gray-600"
//             : "bg-[#fcfbff]"
//         }`}
//       />

//     </div>
//   );
// }

// /* =========================================================
//    CHECKBOX
// ========================================================= */

// function Checkbox({
//   name,
//   checked,
//   onChange,
//   label,
// }) {
//   return (
//     <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-4 transition hover:border-indigo-200 hover:bg-indigo-50">

//       <input
//         type="checkbox"
//         name={name}
//         checked={checked}
//         onChange={onChange}
//         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//       />

//       <span className="text-sm font-medium text-[#45424e]">
//         {label}
//       </span>

//     </label>
//   );
// }

// /* =========================================================
//    VIEW MODAL
// ========================================================= */

// function ViewQualityCheckModal({
//   qualityCheck,
//   onClose,
//   onEdit,
// }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

//       <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">

//         {/* HEADER */}

//         <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">

//           <div>

//             <h2 className="text-lg font-bold text-[#272631]">
//               Quality Check Details
//             </h2>

//             <p className="mt-1 text-xs text-[#96929f]">
//               View inspection information.
//             </p>

//           </div>

//           <button
//             onClick={onClose}
//             className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777384] transition hover:bg-gray-100"
//           >
//             <XIcon />
//           </button>

//         </div>

//         {/* BODY */}

//         <div className="max-h-[70vh] overflow-y-auto p-6">

//           {/* STATUS */}

//           <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-6 text-white shadow-xl">

//             <div className="flex items-start justify-between gap-4">

//               <div>

//                 <p className="text-xs font-medium text-white/70">
//                   Order
//                 </p>

//                 <h2 className="mt-1 text-xl font-bold">
//                   {getOrderNumber(
//                     qualityCheck
//                   )}
//                 </h2>

//               </div>

//               <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold backdrop-blur">
//                 {qualityCheck.status ||
//                   "Pending"}
//               </span>

//             </div>

//             <div className="mt-5 grid grid-cols-3 gap-3">

//               <div className="rounded-lg bg-white/10 p-3">

//                 <p className="text-[10px] text-white/70">
//                   Checked
//                 </p>

//                 <p className="mt-1 text-lg font-bold">
//                   {
//                     qualityCheck.quantityChecked
//                   }
//                 </p>

//               </div>

//               <div className="rounded-lg bg-white/10 p-3">

//                 <p className="text-[10px] text-white/70">
//                   Passed
//                 </p>

//                 <p className="mt-1 text-lg font-bold">
//                   {
//                     qualityCheck.passedQuantity
//                   }
//                 </p>

//               </div>

//               <div className="rounded-lg bg-white/10 p-3">

//                 <p className="text-[10px] text-white/70">
//                   Failed
//                 </p>

//                 <p className="mt-1 text-lg font-bold">
//                   {
//                     qualityCheck.failedQuantity
//                   }
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* DETAILS */}

//           <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

//             <Detail
//               label="Production"
//               value={
//                 getId(
//                   qualityCheck.production
//                 ) || "-"
//               }
//             />

//             <Detail
//               label="Card"
//               value={getCardName(
//                 qualityCheck.card
//               )}
//             />

//             <Detail
//               label="Checked By"
//               value={
//                 qualityCheck.checkedBy?.name ||
//                 qualityCheck.checkedBy?.email ||
//                 "-"
//               }
//             />

//             <Detail
//               label="Checked At"
//               value={
//                 qualityCheck.checkedAt
//                   ? new Date(
//                       qualityCheck.checkedAt
//                     ).toLocaleString()
//                   : "-"
//               }
//             />

//           </div>

//           {/* CHECKLIST */}

//           <div className="mt-6">

//             <h3 className="text-sm font-bold text-[#272631]">
//               Quality Checklist
//             </h3>

//             <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">

//               <ChecklistResult
//                 label="Card Printing"
//                 value={
//                   qualityCheck.checks
//                     ?.cardPrinting
//                 }
//               />

//               <ChecklistResult
//                 label="Card Design"
//                 value={
//                   qualityCheck.checks
//                     ?.cardDesign
//                 }
//               />

//               <ChecklistResult
//                 label="NFC"
//                 value={
//                   qualityCheck.checks?.NFC
//                 }
//               />

//               <ChecklistResult
//                 label="QR Code"
//                 value={
//                   qualityCheck.checks
//                     ?.QRCode
//                 }
//               />

//               <ChecklistResult
//                 label="Digital Profile"
//                 value={
//                   qualityCheck.checks
//                     ?.digitalProfile
//                 }
//               />

//             </div>

//           </div>

//           {/* REMARKS */}

//           {qualityCheck.remarks && (

//             <div className="mt-6 rounded-lg bg-[#faf8ff] p-4">

//               <p className="text-xs font-semibold text-[#66626f]">
//                 Remarks
//               </p>

//               <p className="mt-1 text-sm leading-6 text-[#96929f]">
//                 {qualityCheck.remarks}
//               </p>

//             </div>

//           )}

//         </div>

//         {/* FOOTER */}

//         <div className="flex justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">

//           <button
//             onClick={onClose}
//             className="h-10 rounded-lg border border-[#e3dfeb] bg-white px-5 text-sm font-semibold text-[#66626f] transition hover:bg-gray-50"
//           >
//             Close
//           </button>

//           <button
//             onClick={onEdit}
//             className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
//           >
//             Edit Quality Check
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    DETAIL
// ========================================================= */

// function Detail({ label, value }) {
//   return (
//     <div className="rounded-lg border border-[#eeeaf4] bg-[#fcfbff] p-4">

//       <p className="text-[10px] font-semibold uppercase tracking-wide text-[#aaa5b2]">
//         {label}
//       </p>

//       <p className="mt-1 text-sm font-semibold text-[#45424e]">
//         {value}
//       </p>

//     </div>
//   );
// }

// /* =========================================================
//    CHECKLIST RESULT
// ========================================================= */

// function ChecklistResult({
//   label,
//   value,
// }) {
//   return (
//     <div className="flex items-center justify-between rounded-lg border border-[#eeeaf4] p-3">

//       <span className="text-xs font-semibold text-[#66626f]">
//         {label}
//       </span>

//       {value ? (

//         <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-600">
//           <CheckIcon />
//           Passed
//         </span>

//       ) : (

//         <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-semibold text-red-600">
//           Not Checked
//         </span>

//       )}

//     </div>
//   );
// }

// export default QualityChecks;



































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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M12 3 2.8 20h18.4L12 3Z" />
      <path d="M12 9v5M12 17h.01" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V2h6v2M9 9h6M9 13h6M9 17h4" />
    </svg>
  );
}

const emptyForm = {
  order: "",
  production: "",
  card: "",
  quantityChecked: "",
  passedQuantity: 0,
  failedQuantity: 0,
  cardPrinting: false,
  cardDesign: false,
  NFC: false,
  QRCode: false,
  digitalProfile: false,
  remarks: "",
};

function getId(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value._id || value.id || "";
}

function getName(value, fallback = "-") {
  if (!value) return fallback;
  if (typeof value === "string") return value;

  return (
    value.orderNumber ||
    value.order?.orderNumber ||
    value.fullName ||
    value.company ||
    value.name ||
    fallback
  );
}

function formatDate(date) {
  if (!date) return "-";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "-";
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getStatusClasses(status) {
  switch (status) {
    case "Passed":
      return "bg-green-50 text-green-600";

    case "Failed":
      return "bg-red-50 text-red-600";

    case "Partially Passed":
      return "bg-orange-50 text-orange-600";

    default:
      return "bg-gray-100 text-gray-500";
  }
}

function QualityChecks({ onNavigate }) {
  const [qualityChecks, setQualityChecks] = useState([]);

  const [orders, setOrders] = useState([]);
  const [productions, setProductions] = useState([]);
  const [cards, setCards] = useState([]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedQualityCheck, setSelectedQualityCheck] =
    useState(null);

  const [form, setForm] = useState(emptyForm);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchQualityChecks();
    fetchOrders();
    fetchProductions();
    fetchCards();
  }, []);

  const fetchQualityChecks = async () => {
    try {
      setLoading(true);

      const response = await api.get("/quality-checks");

      setQualityChecks(response.data.qualityChecks || []);
    } catch (error) {
      console.error(
        "Failed to fetch quality checks:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to load quality checks. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders");

      setOrders(
        response.data.orders ||
          response.data.data ||
          []
      );
    } catch (error) {
      console.error(
        "Failed to fetch orders:",
        error.response?.data || error.message
      );
    }
  };

  const fetchProductions = async () => {
    try {
      const response = await api.get("/productions");

      setProductions(
        response.data.productions ||
          response.data.production ||
          response.data.data ||
          []
      );
    } catch (error) {
      console.error(
        "Failed to fetch productions:",
        error.response?.data || error.message
      );
    }
  };

  const fetchCards = async () => {
    try {
      const response = await api.get("/cards/my");

      setCards(response.data.cards || []);
    } catch (error) {
      console.error(
        "Failed to fetch cards:",
        error.response?.data || error.message
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

  const openViewModal = (qualityCheck) => {
    setSelectedQualityCheck(qualityCheck);
    setShowViewModal(true);
  };

  const openEditModal = (qualityCheck) => {
    setSelectedQualityCheck(qualityCheck);

    setForm({
      order: getId(qualityCheck.order),
      production: getId(qualityCheck.production),
      card: getId(qualityCheck.card),
      quantityChecked: qualityCheck.quantityChecked || "",
      passedQuantity: qualityCheck.passedQuantity || 0,
      failedQuantity: qualityCheck.failedQuantity || 0,

      cardPrinting:
        qualityCheck.checks?.cardPrinting || false,

      cardDesign:
        qualityCheck.checks?.cardDesign || false,

      NFC:
        qualityCheck.checks?.NFC || false,

      QRCode:
        qualityCheck.checks?.QRCode || false,

      digitalProfile:
        qualityCheck.checks?.digitalProfile || false,

      remarks: qualityCheck.remarks || "",
    });

    setShowEditModal(true);
  };

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setForm((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const createQualityCheck = async (e) => {
    e.preventDefault();

    if (!form.order) {
      alert("Please select an order.");
      return;
    }

    if (!form.production) {
      alert("Please select production.");
      return;
    }

    if (!form.quantityChecked) {
      alert("Please enter quantity checked.");
      return;
    }

    const quantityChecked = Number(
      form.quantityChecked
    );

    const passedQuantity = Number(
      form.passedQuantity || 0
    );

    const failedQuantity = Number(
      form.failedQuantity || 0
    );

    if (passedQuantity + failedQuantity > quantityChecked) {
      alert(
        "Passed quantity + failed quantity cannot be greater than quantity checked."
      );
      return;
    }

    try {
      setSaving(true);

      const payload = {
        order: form.order,
        production: form.production,
        card: form.card || undefined,

        quantityChecked,

        passedQuantity,

        failedQuantity,

        checks: {
          cardPrinting: form.cardPrinting,
          cardDesign: form.cardDesign,
          NFC: form.NFC,
          QRCode: form.QRCode,
          digitalProfile: form.digitalProfile,
        },

        remarks: form.remarks.trim(),
      };

      const response = await api.post(
        "/quality-checks",
        payload
      );

      const createdQualityCheck =
        response.data.qualityCheck;

      if (!createdQualityCheck) {
        throw new Error(
          "Quality check was created but no data was returned."
        );
      }

      setQualityChecks((current) => [
        createdQualityCheck,
        ...current,
      ]);

      setShowCreateModal(false);
      resetForm();
    } catch (error) {
      console.error(
        "Failed to create quality check:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to create quality check. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const updateQualityCheck = async (e) => {
    e.preventDefault();

    if (!selectedQualityCheck) {
      return;
    }

    const qualityCheckId =
      getId(selectedQualityCheck);

    const quantityChecked = Number(
      form.quantityChecked ||
        selectedQualityCheck.quantityChecked ||
        0
    );

    const passedQuantity = Number(
      form.passedQuantity || 0
    );

    const failedQuantity = Number(
      form.failedQuantity || 0
    );

    if (passedQuantity + failedQuantity > quantityChecked) {
      alert(
        "Passed quantity + failed quantity cannot be greater than quantity checked."
      );
      return;
    }

    try {
      setSaving(true);

      const payload = {
        passedQuantity,
        failedQuantity,

        checks: {
          cardPrinting: form.cardPrinting,
          cardDesign: form.cardDesign,
          NFC: form.NFC,
          QRCode: form.QRCode,
          digitalProfile: form.digitalProfile,
        },

        remarks: form.remarks.trim(),
      };

      const response = await api.put(
        `/quality-checks/${qualityCheckId}`,
        payload
      );

      const updatedQualityCheck =
        response.data.qualityCheck;

      setQualityChecks((current) =>
        current.map((item) =>
          getId(item) === qualityCheckId
            ? updatedQualityCheck
            : item
        )
      );

      setSelectedQualityCheck(
        updatedQualityCheck
      );

      setShowEditModal(false);
      resetForm();
    } catch (error) {
      console.error(
        "Failed to update quality check:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to update quality check. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const filteredQualityChecks =
    qualityChecks.filter((item) => {
      const searchValue =
        search.toLowerCase().trim();

      const orderName =
        getName(item.order, "").toLowerCase();

      const productionName =
        getName(item.production, "").toLowerCase();

      const cardName =
        getName(item.card, "").toLowerCase();

      const matchesSearch =
        !searchValue ||
        orderName.includes(searchValue) ||
        productionName.includes(searchValue) ||
        cardName.includes(searchValue) ||
        (item.status || "")
          .toLowerCase()
          .includes(searchValue);

      const matchesStatus =
        statusFilter === "All" ||
        item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

  const totalChecks = qualityChecks.length;

  const pendingChecks = qualityChecks.filter(
    (item) => item.status === "Pending"
  ).length;

  const passedChecks = qualityChecks.filter(
    (item) => item.status === "Passed"
  ).length;

  const failedChecks = qualityChecks.filter(
    (item) =>
      item.status === "Failed" ||
      item.status === "Partially Passed"
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
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search quality checks..."
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
                  Quality Check
                </h1>

                <p className="mt-1 text-sm text-[#94909d]">
                  Inspect completed production before
                  card activation.
                </p>
              </div>

              <button
                onClick={openCreateModal}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                <PlusIcon />
                Create Quality Check
              </button>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                label="Total Checks"
                value={totalChecks}
                icon={<ClipboardIcon />}
                iconClass="bg-indigo-50 text-indigo-600"
              />

              <StatCard
                label="Pending"
                value={pendingChecks}
                icon={<ClipboardIcon />}
                iconClass="bg-orange-50 text-orange-600"
              />

              <StatCard
                label="Passed"
                value={passedChecks}
                icon={<CheckIcon />}
                iconClass="bg-green-50 text-green-600"
              />

              <StatCard
                label="Failed / Partial"
                value={failedChecks}
                icon={<AlertIcon />}
                iconClass="bg-red-50 text-red-600"
              />
            </div>

            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#272631]">
                    Quality Checks
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    {filteredQualityChecks.length} checks
                    displayed
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "All",
                    "Pending",
                    "Passed",
                    "Failed",
                    "Partially Passed",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() =>
                        setStatusFilter(item)
                      }
                      className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                        statusFilter === item
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
                  <p className="text-sm text-[#96929f]">
                    Loading quality checks...
                  </p>
                </div>
              ) : filteredQualityChecks.length === 0 ? (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <ClipboardIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    No quality checks found
                  </h3>

                  <p className="mt-1 text-sm text-[#96929f]">
                    Create a quality check after production
                    is completed.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#eeeaf4]">
                  {filteredQualityChecks.map(
                    (qualityCheck) => (
                      <div
                        key={getId(qualityCheck)}
                        className="p-5 transition hover:bg-[#fcfbff]"
                      >
                        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                          <div className="flex min-w-0 items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                              <ClipboardIcon />
                            </div>

                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-sm font-bold text-[#292732]">
                                  {getName(
                                    qualityCheck.order,
                                    "Order"
                                  )}
                                </h3>

                                <span
                                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusClasses(
                                    qualityCheck.status
                                  )}`}
                                >
                                  {qualityCheck.status}
                                </span>
                              </div>

                              <p className="mt-1 text-xs text-[#96929f]">
                                Production:{" "}
                                {getName(
                                  qualityCheck.production,
                                  "-"
                                )}
                              </p>

                              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#66626f]">
                                <span>
                                  Checked:{" "}
                                  {
                                    qualityCheck.quantityChecked
                                  }
                                </span>

                                <span className="text-green-600">
                                  Passed:{" "}
                                  {
                                    qualityCheck.passedQuantity
                                  }
                                </span>

                                <span className="text-red-600">
                                  Failed:{" "}
                                  {
                                    qualityCheck.failedQuantity
                                  }
                                </span>

                                <span>
                                  {formatDate(
                                    qualityCheck.checkedAt ||
                                      qualityCheck.createdAt
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() =>
                                openViewModal(
                                  qualityCheck
                                )
                              }
                              className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                              <EyeIcon />
                              View
                            </button>

                            <button
                              onClick={() =>
                                openEditModal(
                                  qualityCheck
                                )
                              }
                              className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#e3dfeb] px-4 text-xs font-semibold text-[#66626f] transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                              <EditIcon />
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {showCreateModal && (
        <QualityCheckFormModal
          title="Create Quality Check"
          subtitle="Inspect the completed production before card activation."
          form={form}
          handleChange={handleChange}
          onSubmit={createQualityCheck}
          onClose={() => {
            setShowCreateModal(false);
            resetForm();
          }}
          submitText={
            saving
              ? "Creating..."
              : "Create Quality Check"
          }
          orders={orders}
          productions={productions}
          cards={cards}
          isEdit={false}
        />
      )}

      {showEditModal &&
        selectedQualityCheck && (
          <QualityCheckFormModal
            title="Edit Quality Check"
            subtitle="Update passed quantity, failed quantity and inspection results."
            form={form}
            handleChange={handleChange}
            onSubmit={updateQualityCheck}
            onClose={() => {
              setShowEditModal(false);
              setSelectedQualityCheck(null);
              resetForm();
            }}
            submitText={
              saving
                ? "Saving..."
                : "Save Changes"
            }
            orders={orders}
            productions={productions}
            cards={cards}
            isEdit={true}
          />
        )}

      {showViewModal &&
        selectedQualityCheck && (
          <ViewQualityCheckModal
            qualityCheck={selectedQualityCheck}
            onClose={() => {
              setShowViewModal(false);
              setSelectedQualityCheck(null);
            }}
            onEdit={() => {
              setShowViewModal(false);
              openEditModal(
                selectedQualityCheck
              );
            }}
          />
        )}
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  iconClass,
}) {
  return (
    <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-[#96929f]">
            {label}
          </p>

          <p className="mt-2 text-2xl font-bold text-[#272631]">
            {value}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function QualityCheckFormModal({
  title,
  subtitle,
  form,
  handleChange,
  onSubmit,
  onClose,
  submitText,
  orders,
  productions,
  cards,
  isEdit,
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
            <div>
              <h3 className="text-sm font-bold text-[#272631]">
                Production Information
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <SelectField
                  label="Order"
                  name="order"
                  value={form.order}
                  onChange={handleChange}
                  disabled={isEdit}
                >
                  <option value="">
                    Select Order
                  </option>

                  {orders.map((order) => (
                    <option
                      key={getId(order)}
                      value={getId(order)}
                    >
                      {getName(
                        order,
                        "Order"
                      )}
                    </option>
                  ))}
                </SelectField>

                <SelectField
                  label="Production"
                  name="production"
                  value={form.production}
                  onChange={handleChange}
                  disabled={isEdit}
                >
                  <option value="">
                    Select Production
                  </option>

                  {productions.map(
                    (production) => (
                      <option
                        key={getId(production)}
                        value={getId(production)}
                      >
                        {getName(
                          production,
                          "Production"
                        )}
                      </option>
                    )
                  )}
                </SelectField>

                <SelectField
                  label="Card"
                  name="card"
                  value={form.card}
                  onChange={handleChange}
                  disabled={isEdit}
                >
                  <option value="">
                    Select Card (Optional)
                  </option>

                  {cards.map((card) => (
                    <option
                      key={getId(card)}
                      value={getId(card)}
                    >
                      {card.fullName ||
                        card.company ||
                        getId(card)}
                    </option>
                  ))}
                </SelectField>

                <Input
                  label="Quantity Checked"
                  name="quantityChecked"
                  type="number"
                  value={form.quantityChecked}
                  onChange={handleChange}
                  placeholder="e.g. 100"
                  required
                  disabled={isEdit}
                  min="1"
                />

                <Input
                  label="Passed Quantity"
                  name="passedQuantity"
                  type="number"
                  value={form.passedQuantity}
                  onChange={handleChange}
                  placeholder="e.g. 90"
                  min="0"
                />

                <Input
                  label="Failed Quantity"
                  name="failedQuantity"
                  type="number"
                  value={form.failedQuantity}
                  onChange={handleChange}
                  placeholder="e.g. 10"
                  min="0"
                />
              </div>
            </div>

            <div className="mt-6 border-t border-[#eeeaf4] pt-6">
              <h3 className="text-sm font-bold text-[#272631]">
                Inspection Checklist
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Checkbox
                  name="cardPrinting"
                  checked={form.cardPrinting}
                  onChange={handleChange}
                  label="Card Printing"
                />

                <Checkbox
                  name="cardDesign"
                  checked={form.cardDesign}
                  onChange={handleChange}
                  label="Card Design"
                />

                <Checkbox
                  name="NFC"
                  checked={form.NFC}
                  onChange={handleChange}
                  label="NFC"
                />

                <Checkbox
                  name="QRCode"
                  checked={form.QRCode}
                  onChange={handleChange}
                  label="QR Code"
                />

                <Checkbox
                  name="digitalProfile"
                  checked={form.digitalProfile}
                  onChange={handleChange}
                  label="Digital Profile"
                />
              </div>
            </div>

            <div className="mt-6 border-t border-[#eeeaf4] pt-6">
              <label className="text-xs font-semibold text-[#4e4a57]">
                Remarks
              </label>

              <textarea
                name="remarks"
                value={form.remarks}
                onChange={handleChange}
                rows="4"
                placeholder="Add quality check remarks..."
                className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
              />
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
              disabled={submitText.includes("...")}
              className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
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
  disabled = false,
  min,
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-[#4e4a57]">
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        min={min}
        className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  children,
  disabled = false,
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-[#4e4a57]">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
      >
        {children}
      </select>
    </div>
  );
}

function Checkbox({
  name,
  checked,
  onChange,
  label,
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#eeeaf4] bg-[#fcfbff] p-3">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />

      <span className="text-sm font-medium text-[#45424e]">
        {label}
      </span>
    </label>
  );
}

function ViewQualityCheckModal({
  qualityCheck,
  onClose,
  onEdit,
}) {
  const checks = qualityCheck.checks || {};

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-[#272631]">
              Quality Check Details
            </h2>

            <p className="mt-1 text-xs text-[#96929f]">
              Inspection and production details.
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
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                <ClipboardIcon />
              </div>

              <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold backdrop-blur">
                {qualityCheck.status}
              </span>
            </div>

            <h2 className="mt-5 text-xl font-bold">
              {getName(
                qualityCheck.order,
                "Order"
              )}
            </h2>

            <p className="mt-1 text-sm text-white/80">
              Production:{" "}
              {getName(
                qualityCheck.production,
                "-"
              )}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Detail
              label="Quantity Checked"
              value={
                qualityCheck.quantityChecked
              }
            />

            <Detail
              label="Passed Quantity"
              value={
                qualityCheck.passedQuantity
              }
            />

            <Detail
              label="Failed Quantity"
              value={
                qualityCheck.failedQuantity
              }
            />

            <Detail
              label="Checked At"
              value={formatDate(
                qualityCheck.checkedAt
              )}
            />

            <Detail
              label="Card"
              value={getName(
                qualityCheck.card,
                "Not assigned"
              )}
            />

            <Detail
              label="Checked By"
              value={getName(
                qualityCheck.checkedBy,
                "Unknown"
              )}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-bold text-[#272631]">
              Inspection Checklist
            </h3>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <CheckDetail
                label="Card Printing"
                value={checks.cardPrinting}
              />

              <CheckDetail
                label="Card Design"
                value={checks.cardDesign}
              />

              <CheckDetail
                label="NFC"
                value={checks.NFC}
              />

              <CheckDetail
                label="QR Code"
                value={checks.QRCode}
              />

              <CheckDetail
                label="Digital Profile"
                value={checks.digitalProfile}
              />
            </div>
          </div>

          {qualityCheck.remarks && (
            <div className="mt-6 rounded-lg bg-[#faf8ff] p-4">
              <p className="text-xs font-semibold text-[#66626f]">
                Remarks
              </p>

              <p className="mt-1 text-sm text-[#96929f]">
                {qualityCheck.remarks}
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
            onClick={onEdit}
            className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <EditIcon />
            Edit Quality Check
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

function CheckDetail({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[#eeeaf4] p-3">
      <span className="text-xs font-semibold text-[#66626f]">
        {label}
      </span>

      <span
        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
          value
            ? "bg-green-50 text-green-600"
            : "bg-gray-100 text-gray-500"
        }`}
      >
        {value ? "Passed" : "Not Checked"}
      </span>
    </div>
  );
}

export default QualityChecks;
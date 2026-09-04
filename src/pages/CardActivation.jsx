// import { useEffect, useMemo, useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";
// import api from "../api/axios";

// /* =========================
//    Icons
// ========================= */

// const SearchIcon = ({ className = "h-5 w-5" }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//   >
//     <circle cx="11" cy="11" r="7" />
//     <path d="m20 20-4-4" />
//   </svg>
// );

// const BellIcon = () => (
//   <svg
//     className="h-5 w-5"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//   >
//     <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
//     <path d="M10 21h4" />
//   </svg>
// );

// const PlusIcon = () => (
//   <svg
//     className="h-4 w-4"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path d="M12 5v14M5 12h14" />
//   </svg>
// );

// const XIcon = () => (
//   <svg
//     className="h-5 w-5"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path d="M6 6l12 12M18 6 6 18" />
//   </svg>
// );

// const EyeIcon = () => (
//   <svg
//     className="h-4 w-4"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//   >
//     <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
//     <circle cx="12" cy="12" r="2.5" />
//   </svg>
// );

// const CheckIcon = () => (
//   <svg
//     className="h-5 w-5"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path d="m5 12 4 4L19 6" />
//   </svg>
// );

// const QrIcon = () => (
//   <svg
//     className="h-5 w-5"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//   >
//     <rect x="3" y="3" width="6" height="6" rx="1" />
//     <rect x="15" y="3" width="6" height="6" rx="1" />
//     <rect x="3" y="15" width="6" height="6" rx="1" />
//     <path d="M15 15h3v3h3M15 21v-3M21 15v3M18 18h3" />
//   </svg>
// );



// const ActivationIcon = () => (
//   <svg
//     className="h-5 w-5"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//   >
//     <circle cx="12" cy="12" r="9" />
//     <path d="m8 12 2.5 2.5L16.5 9" />
//   </svg>
// );

// /* =========================
//    Helpers
// ========================= */

// const getId = (value) => {
//   if (!value) return "";
//   if (typeof value === "string") return value;
//   return value._id || value.id || "";
// };

// const getOrderLabel = (order) => {
//   if (!order) return "—";

//   if (typeof order === "string") return order;

//   return (
//     order.orderNumber ||
//     order.orderId ||
//     order._id ||
//     "Order"
//   );
// };

// const getCardLabel = (card) => {
//   if (!card) return "—";

//   if (typeof card === "string") return card;

//   const name = card.fullName || card.name || "Unnamed Card";
//   const company = card.company ? ` • ${card.company}` : "";

//   return `${name}${company}`;
// };

// const getQualityCheckLabel = (qualityCheck) => {
//   if (!qualityCheck) return "—";

//   if (typeof qualityCheck === "string") return qualityCheck;

//   const id =
//     qualityCheck.qualityCheckId ||
//     qualityCheck._id ||
//     qualityCheck.id;

//   const status = qualityCheck.status
//     ? ` • ${qualityCheck.status}`
//     : "";

//   return `${id || "Quality Check"}${status}`;
// };

// const formatDate = (date) => {
//   if (!date) return "—";

//   const parsed = new Date(date);

//   if (Number.isNaN(parsed.getTime())) return "—";

//   return parsed.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// };

// const formatDateTime = (date) => {
//   if (!date) return "—";

//   const parsed = new Date(date);

//   if (Number.isNaN(parsed.getTime())) return "—";

//   return parsed.toLocaleString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//   });
// };

// /* =========================
//    Status Badge
// ========================= */

// const StatusBadge = ({ status }) => {
//   const styles = {
//     Pending: "bg-amber-50 text-amber-700 border-amber-200",
//     "QR Activated": "bg-blue-50 text-blue-700 border-blue-200",
//     "NFC Activated": "bg-purple-50 text-purple-700 border-purple-200",
//     "Fully Activated": "bg-green-50 text-green-700 border-green-200",
//   };

//   return (
//     <span
//       className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${
//         styles[status] ||
//         "border-gray-200 bg-gray-50 text-gray-600"
//       }`}
//     >
//       {status || "Unknown"}
//     </span>
//   );
// };

// /* =========================
//    Main Component
// ========================= */

// const CardActivation = ({ onNavigate }) => {
//   const [activations, setActivations] = useState([]);
//   const [cards, setCards] = useState([]);
//   const [qualityChecks, setQualityChecks] = useState([]);
//   const [orders, setOrders] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [submitLoading, setSubmitLoading] = useState(false);
//   const [detailsLoading, setDetailsLoading] = useState(false);

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");

//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showViewModal, setShowViewModal] = useState(false);

//   const [selectedActivation, setSelectedActivation] = useState(null);

//   const [form, setForm] = useState({
//     order: "",
//   card: "",
//   qualityCheck: "",
//   qrUrl: "",
//   remarks: "",
//   });

//   /* =========================
//      Fetch Activations
//   ========================= */

//   const fetchActivations = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await api.get("/card-activations");

//       const data = response?.data;

//       if (Array.isArray(data?.activations)) {
//         setActivations(data.activations);
//       } else if (Array.isArray(data)) {
//         setActivations(data);
//       } else {
//         setActivations([]);
//       }
//     } catch (err) {
//       console.error("Error fetching card activations:", err);

//       setError(
//         err?.response?.data?.message ||
//           "Failed to load card activations."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* =========================
//      Fetch Cards
//   ========================= */

//   const fetchCards = async () => {
//     try {
//       const response = await api.get("/cards/my");

//       const data = response?.data;

//       if (Array.isArray(data?.cards)) {
//         setCards(data.cards);
//       } else if (Array.isArray(data)) {
//         setCards(data);
//       } else {
//         setCards([]);
//       }
//     } catch (err) {
//       console.error("Error fetching cards:", err);

//       setCards([]);
//     }
//   };

//   /* =========================
//      Fetch Quality Checks
//   ========================= */

//   const fetchQualityChecks = async () => {
//     try {
//       /*
//        * Your Quality Check page/backend may return either:
//        * { qualityChecks: [...] }
//        * or { checks: [...] }
//        * or directly [...]
//        */

//       const response = await api.get("/quality-checks");

//       const data = response?.data;

//       let list = [];

//       if (Array.isArray(data?.qualityChecks)) {
//         list = data.qualityChecks;
//       } else if (Array.isArray(data?.checks)) {
//         list = data.checks;
//       } else if (Array.isArray(data)) {
//         list = data;
//       }

//       setQualityChecks(list);
//     } catch (err) {
//       console.error("Error fetching quality checks:", err);

//       setQualityChecks([]);
//     }
//   };

//   /* =========================
//      Fetch Orders
//   ========================= */

//   const fetchOrders = async () => {
//     try {
//       /*
//        * Primary endpoint.
//        * If your existing Orders backend uses /orders/my,
//        * change only this endpoint.
//        */
//       const response = await api.get("/orders");

//       const data = response?.data;

//       if (Array.isArray(data?.orders)) {
//         setOrders(data.orders);
//       } else if (Array.isArray(data)) {
//         setOrders(data);
//       } else {
//         setOrders([]);
//       }
//     } catch (err) {
//       console.error("Error fetching orders:", err);

//       setOrders([]);
//     }
//   };

//   /* =========================
//      Initial Load
//   ========================= */

//   useEffect(() => {
//     fetchActivations();
//     fetchCards();
//     fetchQualityChecks();
//     fetchOrders();
//   }, []);

//   /* =========================
//      Passed Quality Checks
//   ========================= */

//   const passedQualityChecks = useMemo(() => {
//     return qualityChecks.filter(
//       (item) =>
//         String(item?.status || "").toLowerCase() ===
//         "passed"
//     );
//   }, [qualityChecks]);

//   /* =========================
//      Stats
//   ========================= */

//   const totalActivations = activations.length;

//   const fullyActivated = activations.filter(
//     (item) => item.status === "Fully Activated"
//   ).length;

//   const pendingActivations = activations.filter(
//     (item) => item.status === "Pending"
//   ).length;

//   const qrActivated = activations.filter(
//     (item) =>
//       item.qrActivated === true ||
//       item.status === "QR Activated" ||
//       item.status === "Fully Activated"
//   ).length;



//   /* =========================
//      Filtered Activations
//   ========================= */

//   const filteredActivations = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return activations.filter((activation) => {
//       const statusMatch =
//         statusFilter === "All" ||
//         activation.status === statusFilter;

//       if (!statusMatch) return false;

//       if (!query) return true;

//       const orderText = getOrderLabel(
//         activation.order
//       ).toLowerCase();

//       const cardText = getCardLabel(
//         activation.card
//       ).toLowerCase();

//       const qualityText = getQualityCheckLabel(
//         activation.qualityCheck
//       ).toLowerCase();

//       const activatedBy =
//         activation?.activatedBy?.name
//           ?.toLowerCase() || "";

//       const qrUrl =
//         activation?.qrUrl?.toLowerCase() || "";

    

//       return (
//   orderText.includes(query) ||
//   cardText.includes(query) ||
//   qualityText.includes(query) ||
//   activatedBy.includes(query) ||
//   qrUrl.includes(query)
// );
//     });
//   }, [activations, search, statusFilter]);

//   /* =========================
//      Form Change
//   ========================= */

//   const handleChange = async (e) => {
//   const { name, value } = e.target;

//   setForm((prev) => ({
//     ...prev,
//     [name]: value,
//   }));

//   if (name === "card" && value) {
//     try {
//       setError("");

//       const response = await api.get(`/cards/qr/${value}`);

//       const publicUrl = response?.data?.publicUrl;

//       if (!publicUrl) {
//         setError("QR URL could not be generated.");
//         return;
//       }

//       setForm((prev) => ({
//         ...prev,
//         card: value,
//         qrUrl: publicUrl,
//       }));
//     } catch (err) {
//       console.error("QR generation error:", err);

//       setError(
//         err?.response?.data?.message ||
//           "Failed to generate QR code."
//       );
//     }
//   }

//   if (name === "card" && !value) {
//     setForm((prev) => ({
//       ...prev,
//       card: "",
//       qrUrl: "",
//     }));
//   }
// };

//   /* =========================
//      Reset Form
//   ========================= */

// const resetForm = () => {
//   setForm({
//     order: "",
//     card: "",
//     qualityCheck: "",
//     qrUrl: "",
//     remarks: "",
//   });
// };
//   /* =========================
//      Open Create Modal
//   ========================= */

//   const openCreateModal = () => {
//     setError("");
//     setSuccess("");
//     resetForm();
//     setShowCreateModal(true);
//   };

//   /* =========================
//      Close Create Modal
//   ========================= */

//   const closeCreateModal = () => {
//     if (submitLoading) return;

//     setShowCreateModal(false);
//     resetForm();
//   };

//   /* =========================
//      Create Activation
//   ========================= */

// const handleActivate = async (e) => {
//   e.preventDefault();

//   setError("");
//   setSuccess("");

//   if (!form.order) {
//     setError("Please select an order");
//     return;
//   }

//   if (!form.card) {
//     setError("Please select a card");
//     return;
//   }

//   if (!form.qualityCheck) {
//     setError("Please select a quality check");
//     return;
//   }

//   if (!form.qrUrl) {
//   setError("QR code could not be generated for this card.");
//   return;
// }

//   try {
//     setSubmitLoading(true);

//     const payload = {
//   order: form.order,
//   card: form.card,
//   qualityCheck: form.qualityCheck,
//   qrUrl: form.qrUrl,
//   remarks: (form.remarks || "").trim(),
// };
//     await api.post("/card-activations", payload);

//     setSuccess("Card activated successfully");
//     resetForm();
//     setShowCreateModal(false);

//     await fetchActivations();
//   } catch (error) {
//     console.error("Activation error:", error);

//     setError(
//       error.response?.data?.message ||
//       "Failed to activate card"
//     );
//   } finally {
//     setSubmitLoading(false);
//   }
// };

//   /* =========================
//      View Activation
//   ========================= */

//   const handleView = async (activation) => {
//     setError("");
//     setSelectedActivation(activation);
//     setShowViewModal(true);

//     const activationId = getId(activation);

//     if (!activationId) return;

//     try {
//       setDetailsLoading(true);

//       const response = await api.get(
//         `/card-activations/${activationId}`
//       );

//       if (response?.data?.activation) {
//         setSelectedActivation(
//           response.data.activation
//         );
//       }
//     } catch (err) {
//       console.error(
//         "Error fetching activation details:",
//         err
//       );

//       /*
//        * Keep already-loaded data in modal
//        * if detail API fails.
//        */
//     } finally {
//       setDetailsLoading(false);
//     }
//   };

//   const closeViewModal = () => {
//     if (detailsLoading) return;

//     setShowViewModal(false);
//     setSelectedActivation(null);
//   };

//   /* =========================
//      Render
//   ========================= */

//   return (
//     <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
//       <div className="flex min-h-screen w-full">
//         <Sidebar onNavigate={onNavigate} />

//         <main className="min-w-0 flex-1">
//           {/* =========================
//               Header
//           ========================= */}

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
//                 placeholder="Search activations..."
//                 className="h-10 w-full rounded-lg border border-[#e5e1ec] bg-[#fcfbff] pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-[#aaa5b2] focus:border-[#6554e8] focus:ring-2 focus:ring-[#6554e8]/10"
//               />
//             </div>

//             <div className="ml-6 flex items-center gap-5">
//               <button
//                 type="button"
//                 className="relative text-[#777282] transition hover:text-[#6554e8]"
//               >
//                 <BellIcon />

//                 <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-indigo-600" />
//               </button>
//             </div>
//           </header>

//           {/* =========================
//               Main Content
//           ========================= */}

//           <div className="w-full p-6 sm:p-8 lg:p-10">
//             {/* Page Heading */}

//             <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//               <div>
//                 <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                   Card Activation
//                 </h1>

//                 <p className="mt-1 text-sm text-[#94909d]">
//                   Activate QR and NFC for quality-approved cards.
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={openCreateModal}
//                 className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//               >
//                 <PlusIcon />
//                 Activate Card
//               </button>
//             </div>

//             {/* =========================
//                 Alerts
//             ========================= */}

//             {success && (
//               <div className="mt-5 flex items-center justify-between rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
//                 <span>{success}</span>

//                 <button
//                   type="button"
//                   onClick={() => setSuccess("")}
//                   className="ml-4 text-green-700 hover:text-green-900"
//                 >
//                   <XIcon />
//                 </button>
//               </div>
//             )}

//             {error && !showCreateModal && (
//               <div className="mt-5 flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                 <span>{error}</span>

//                 <button
//                   type="button"
//                   onClick={() => setError("")}
//                   className="ml-4 text-red-700 hover:text-red-900"
//                 >
//                   <XIcon />
//                 </button>
//               </div>
//             )}

//             {/* =========================
//                 Stats
//             ========================= */}

//             <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
//               {/* Total */}

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                     <ActivationIcon />
//                   </div>

//                   <div>
//                     <p className="text-xs font-medium text-[#96919f]">
//                       Total Activations
//                     </p>

//                     <p className="mt-1 text-2xl font-bold text-[#20202b]">
//                       {totalActivations}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Fully Activated */}

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
//                     <CheckIcon />
//                   </div>

//                   <div>
//                     <p className="text-xs font-medium text-[#96919f]">
//                       Fully Activated
//                     </p>

//                     <p className="mt-1 text-2xl font-bold text-[#20202b]">
//                       {fullyActivated}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Pending */}

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
//                     <ActivationIcon />
//                   </div>

//                   <div>
//                     <p className="text-xs font-medium text-[#96919f]">
//                       Pending
//                     </p>

//                     <p className="mt-1 text-2xl font-bold text-[#20202b]">
//                       {pendingActivations}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* QR */}

//               <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//                     <QrIcon />
//                   </div>

//                   <div>
//                     <p className="text-xs font-medium text-[#96919f]">
//                       QR Activated
//                     </p>

//                     <p className="mt-1 text-2xl font-bold text-[#20202b]">
//                       {qrActivated}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* NFC */}

              
//             </div>

//             {/* =========================
//                 Activation List
//             ========================= */}

//             <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//               {/* List Header */}

//               <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#20202b]">
//                     Card Activations
//                   </h2>

//                   <p className="mt-0.5 text-xs text-[#96919f]">
//                     Manage activated QR and NFC cards.
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap items-center gap-2">
//                   {[
//                     "All",
//                     "Fully Activated",
//                     "QR Activated",
//                     "NFC Activated",
//                     "Pending",
//                   ].map((status) => (
//                     <button
//                       key={status}
//                       type="button"
//                       onClick={() =>
//                         setStatusFilter(status)
//                       }
//                       className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
//                         statusFilter === status
//                           ? "bg-indigo-600 text-white"
//                           : "border border-[#e5e1ed] bg-white text-[#777282] hover:bg-[#faf8ff]"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Loading */}

//               {loading ? (
//                 <div className="flex min-h-[260px] items-center justify-center">
//                   <div className="flex items-center gap-3 text-sm text-[#888390]">
//                     <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#e2deeb] border-t-indigo-600" />
//                     Loading activations...
//                   </div>
//                 </div>
//               ) : filteredActivations.length === 0 ? (
//                 /* Empty */

//                 <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
//                     <ActivationIcon />
//                   </div>

//                   <h3 className="mt-4 text-base font-semibold text-[#292733]">
//                     No card activations found
//                   </h3>

//                   <p className="mt-1 max-w-[420px] text-sm text-[#96919f]">
//                     {search
//                       ? "Try changing your search or filter."
//                       : "Activate a quality-approved card to see it here."}
//                   </p>

//                   {!search && (
//                     <button
//                       type="button"
//                       onClick={openCreateModal}
//                       className="mt-5 flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
//                     >
//                       <PlusIcon />
//                       Activate Card
//                     </button>
//                   )}
//                 </div>
//               ) : (
//                 /* Rows */

//                 <div className="divide-y divide-[#eeeaf4]">
//                   {filteredActivations.map(
//                     (activation) => (
//                       <div
//                         key={getId(activation)}
//                         className="p-5 transition hover:bg-[#fcfbff]"
//                       >
//                         <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
//                           {/* Left */}

//                           <div className="min-w-0 flex-1">
//                             <div className="flex flex-wrap items-center gap-3">
//                               <h3 className="truncate text-sm font-semibold text-[#24232e]">
//                                 {getCardLabel(
//                                   activation.card
//                                 )}
//                               </h3>

//                               <StatusBadge
//                                 status={
//                                   activation.status
//                                 }
//                               />
//                             </div>

//                             <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//                               <div>
//                                 <p className="text-[11px] font-medium uppercase tracking-wide text-[#aaa5b2]">
//                                   Order
//                                 </p>

//                                 <p className="mt-1 truncate text-sm text-[#55515e]">
//                                   {getOrderLabel(
//                                     activation.order
//                                   )}
//                                 </p>
//                               </div>

//                               <div>
//                                 <p className="text-[11px] font-medium uppercase tracking-wide text-[#aaa5b2]">
//                                   Quality Check
//                                 </p>

//                                 <p className="mt-1 truncate text-sm text-[#55515e]">
//                                   {getQualityCheckLabel(
//                                     activation.qualityCheck
//                                   )}
//                                 </p>
//                               </div>

//                               <div>
//                                 <p className="text-[11px] font-medium uppercase tracking-wide text-[#aaa5b2]">
//                                   Activated By
//                                 </p>

//                                 <p className="mt-1 truncate text-sm text-[#55515e]">
//                                   {activation
//                                     ?.activatedBy
//                                     ?.name ||
//                                     "—"}
//                                 </p>
//                               </div>

//                               <div>
//                                 <p className="text-[11px] font-medium uppercase tracking-wide text-[#aaa5b2]">
//                                   Activated At
//                                 </p>

//                                 <p className="mt-1 text-sm text-[#55515e]">
//                                   {formatDate(
//                                     activation.activatedAt
//                                   )}
//                                 </p>
//                               </div>
//                             </div>

//                             <div className="mt-4 flex flex-wrap items-center gap-3">
//                               <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-700">
//                                 <QrIcon />
//                                 QR Active
//                               </span>

//                               <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple-50 px-2.5 py-1.5 text-xs font-medium text-purple-700">
//                                 <NfcIcon />
//                                 NFC Active
//                               </span>
//                             </div>
//                           </div>

//                           {/* Action */}

//                           <div className="flex shrink-0 items-center gap-2">
//                             <button
//                               type="button"
//                               onClick={() =>
//                                 handleView(
//                                   activation
//                                 )
//                               }
//                               className="flex h-9 items-center gap-2 rounded-lg border border-[#e3dfeb] bg-white px-3 text-xs font-semibold text-[#6554e8] transition hover:bg-[#f7f5ff]"
//                             >
//                               <EyeIcon />
//                               View
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

//       {/* =====================================================
//           CREATE ACTIVATION MODAL
//       ===================================================== */}

//       {showCreateModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//           <div className="flex max-h-[92vh] w-full max-w-[650px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
//             {/* Modal Header */}

//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-[#20202b]">
//                   Activate Card
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96919f]">
//                   Activate QR and NFC for a passed quality-check card.
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={closeCreateModal}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-[#85808e] transition hover:bg-[#f5f3f9] hover:text-[#292733]"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             {/* Modal Body */}

//             <form
//               onSubmit={handleActivate}
//               className="overflow-y-auto"
//             >
//               <div className="space-y-5 px-6 py-6">
//                 {error && (
//                   <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                     {error}
//                   </div>
//                 )}

//                 {/* Order */}

//                 <div>
//                   <label className="text-sm font-semibold text-[#393641]">
//                     Order
//                     <span className="ml-1 text-red-500">
//                       *
//                     </span>
//                   </label>

//                   <select
//                     name="order"
//                     value={form.order}
//                     onChange={handleChange}
//                     className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   >
//                     <option value="">
//                       Select Order
//                     </option>

//                     {orders.map((order) => (
//                       <option
//                         key={getId(order)}
//                         value={getId(order)}
//                       >
//                         {getOrderLabel(order)}
//                       </option>
//                     ))}
//                   </select>

//                   {orders.length === 0 && (
//                     <p className="mt-1.5 text-xs text-amber-600">
//                       No orders available.
//                     </p>
//                   )}
//                 </div>

//                 {/* Card */}

//                 <div>
//                   <label className="text-sm font-semibold text-[#393641]">
//                     Card
//                     <span className="ml-1 text-red-500">
//                       *
//                     </span>
//                   </label>

//                   <select
//                     name="card"
//                     value={form.card}
//                     onChange={handleChange}
//                     className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   >
//                     <option value="">
//                       Select Card
//                     </option>

//                     {cards.map((card) => (
//                       <option
//                         key={getId(card)}
//                         value={getId(card)}
//                       >
//                         {getCardLabel(card)}
//                       </option>
//                     ))}
//                   </select>

//                   {cards.length === 0 && (
//                     <p className="mt-1.5 text-xs text-amber-600">
//                       No cards available.
//                     </p>
//                   )}
//                 </div>

//                 {/* Quality Check */}

//                 <div>
//                   <label className="text-sm font-semibold text-[#393641]">
//                     Quality Check
//                     <span className="ml-1 text-red-500">
//                       *
//                     </span>
//                   </label>

//                   <select
//                     name="qualityCheck"
//                     value={form.qualityCheck}
//                     onChange={handleChange}
//                     className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   >
//                     <option value="">
//                       Select Passed Quality Check
//                     </option>

//                     {passedQualityChecks.map(
//                       (check) => (
//                         <option
//                           key={getId(check)}
//                           value={getId(check)}
//                         >
//                           {getQualityCheckLabel(
//                             check
//                           )}
//                         </option>
//                       )
//                     )}
//                   </select>

//                   {passedQualityChecks.length ===
//                     0 && (
//                     <p className="mt-1.5 text-xs text-amber-600">
//                       No passed quality checks are available.
//                     </p>
//                   )}

//                   <p className="mt-1.5 text-xs text-[#9994a1]">
//                     Only quality checks with status
//                     {" "}
//                     <span className="font-semibold text-green-600">
//                       Passed
//                     </span>
//                     {" "}
//                     can be activated.
//                   </p>
//                 </div>

//                 {/* QR + NFC */}

//                 {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div>
//                     <label className="text-sm font-semibold text-[#393641]">
//                       QR URL
//                       <span className="ml-1 text-red-500">
//                         *
//                       </span>
//                     </label>

//                     <input
//                       type="text"
//                       name="qrUrl"
//                       value={form.qrUrl}
//                       onChange={handleChange}
//                       placeholder="https://example.com/qr"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm font-semibold text-[#393641]">
//                       NFC URL
//                       <span className="ml-1 text-red-500">
//                         *
//                       </span>
//                     </label>

//                     <input
//                       type="text"
//                       name="nfcUrl"
//                       value={form.nfcUrl}
//                       onChange={handleChange}
//                       placeholder="https://example.com/nfc"
//                       className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                     />
//                   </div>
//                 </div> */}

//                 {/* Remarks */}

//                 <div>
//                   <label className="text-sm font-semibold text-[#393641]">
//                     Remarks
//                   </label>

//                   <textarea
//                     name="remarks"
//                     value={form.remarks}
//                     onChange={handleChange}
//                     rows={3}
//                     placeholder="Enter activation remarks..."
//                     className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>

//                 {/* Activation Info */}

//                 <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4">
//                   <div className="flex gap-3">
//                     <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
//                       <ActivationIcon />
//                     </div>

//                     <div>
//                       <p className="text-sm font-semibold text-indigo-900">
//                         Full activation
//                       </p>

//                       <p className="mt-1 text-xs leading-5 text-indigo-700">
//                         After successful activation, the backend
//                         automatically marks both QR and NFC as active
//                         and sets the status to Fully Activated.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Modal Footer */}

//               <div className="flex items-center justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
//                 <button
//                   type="button"
//                   onClick={closeCreateModal}
//                   disabled={submitLoading}
//                   className="h-10 rounded-lg border border-[#e1dde8] bg-white px-4 text-sm font-semibold text-[#65616d] transition hover:bg-[#f7f5fa] disabled:cursor-not-allowed disabled:opacity-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   disabled={submitLoading}
//                   className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {submitLoading && (
//                     <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
//                   )}

//                   {submitLoading
//                     ? "Activating..."
//                     : "Activate Card"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* =====================================================
//           VIEW ACTIVATION MODAL
//       ===================================================== */}

//       {showViewModal && selectedActivation && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
//           <div className="max-h-[92vh] w-full max-w-[620px] overflow-hidden rounded-2xl bg-white shadow-2xl">
//             {/* Header */}

//             <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-[#20202b]">
//                   Activation Details
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96919f]">
//                   View card activation information.
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={closeViewModal}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-[#85808e] transition hover:bg-[#f5f3f9] hover:text-[#292733]"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             {/* Body */}

//             <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
//               {detailsLoading ? (
//                 <div className="flex min-h-[220px] items-center justify-center">
//                   <div className="flex items-center gap-3 text-sm text-[#888390]">
//                     <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#e2deeb] border-t-indigo-600" />
//                     Loading details...
//                   </div>
//                 </div>
//               ) : (
//                 <div className="space-y-5">
//                   {/* Status */}

//                   <div className="flex items-center justify-between rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
//                     <div>
//                       <p className="text-xs font-medium text-[#96919f]">
//                         Activation Status
//                       </p>

//                       <div className="mt-2">
//                         <StatusBadge
//                           status={
//                             selectedActivation.status
//                           }
//                         />
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       {selectedActivation.card?.qrCode ? (
//   <img
//     src={selectedActivation.card.qrCode}
//     alt="QR Code"
//     className="h-40 w-40 rounded-lg border border-gray-200 object-contain p-2"
//   />
// ) : (
//   <span className="text-gray-500">QR Code not available</span>
// )}

//                       {selectedActivation.nfcActivated && (
//                         <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
//                           <NfcIcon />
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Details Grid */}

//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <div className="rounded-xl border border-[#e5e1ed] p-4">
//                       <p className="text-xs font-medium text-[#9994a1]">
//                         Card
//                       </p>

//                       <p className="mt-1.5 text-sm font-semibold text-[#302e39]">
//                         {getCardLabel(
//                           selectedActivation.card
//                         )}
//                       </p>
//                     </div>

//                     <div className="rounded-xl border border-[#e5e1ed] p-4">
//                       <p className="text-xs font-medium text-[#9994a1]">
//                         Order
//                       </p>

//                       <p className="mt-1.5 text-sm font-semibold text-[#302e39]">
//                         {getOrderLabel(
//                           selectedActivation.order
//                         )}
//                       </p>
//                     </div>

//                     <div className="rounded-xl border border-[#e5e1ed] p-4">
//                       <p className="text-xs font-medium text-[#9994a1]">
//                         Quality Check
//                       </p>

//                       <p className="mt-1.5 text-sm font-semibold text-[#302e39]">
//                         {getQualityCheckLabel(
//                           selectedActivation.qualityCheck
//                         )}
//                       </p>
//                     </div>

//                     <div className="rounded-xl border border-[#e5e1ed] p-4">
//                       <p className="text-xs font-medium text-[#9994a1]">
//                         Activated By
//                       </p>

//                       <p className="mt-1.5 text-sm font-semibold text-[#302e39]">
//                         {selectedActivation
//                           ?.activatedBy?.name ||
//                           "—"}
//                       </p>

//                       {selectedActivation
//                         ?.activatedBy?.email && (
//                         <p className="mt-0.5 text-xs text-[#96919f]">
//                           {
//                             selectedActivation
//                               .activatedBy
//                               .email
//                           }
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* QR URL */}

//                   <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
//                     <div className="flex items-start gap-3">
//                       <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
//                         <QrIcon />
//                       </div>

//                       <div className="min-w-0">
//                         <p className="text-xs font-semibold text-blue-900">
//                           QR URL
//                         </p>

//                         <p className="mt-1 break-all text-sm text-blue-700">
//                           {selectedActivation.qrUrl ||
//                             "—"}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* NFC URL */}

//                   <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-4">
//                     <div className="flex items-start gap-3">
//                       <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-purple-600 shadow-sm">
//                         <NfcIcon />
//                       </div>

//                       <div className="min-w-0">
//                         <p className="text-xs font-semibold text-purple-900">
//                           NFC URL
//                         </p>

//                         <p className="mt-1 break-all text-sm text-purple-700">
//                           {selectedActivation.nfcUrl ||
//                             "—"}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Dates */}

//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <div>
//                       <p className="text-xs font-medium text-[#9994a1]">
//                         Activated At
//                       </p>

//                       <p className="mt-1 text-sm text-[#44414c]">
//                         {formatDateTime(
//                           selectedActivation.activatedAt
//                         )}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs font-medium text-[#9994a1]">
//                         Created At
//                       </p>

//                       <p className="mt-1 text-sm text-[#44414c]">
//                         {formatDateTime(
//                           selectedActivation.createdAt
//                         )}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Remarks */}

//                   {selectedActivation.remarks && (
//                     <div>
//                       <p className="text-xs font-medium text-[#9994a1]">
//                         Remarks
//                       </p>

//                       <div className="mt-2 rounded-lg bg-[#faf8ff] p-3 text-sm leading-6 text-[#55515e]">
//                         {selectedActivation.remarks}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Footer */}

//             <div className="flex justify-end border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={closeViewModal}
//                 disabled={detailsLoading}
//                 className="h-10 rounded-lg border border-[#e1dde8] bg-white px-5 text-sm font-semibold text-[#65616d] transition hover:bg-[#f7f5fa] disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardActivation;
























import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import api from "../api/axios";

/* =========================
   Icons
========================= */

const SearchIcon = ({ className = "h-5 w-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
  </svg>
);

const BellIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
    <path d="M10 21h4" />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const XIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const EyeIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const QrIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="3" y="15" width="6" height="6" rx="1" />
    <path d="M15 15h3v3h3M15 21v-3M21 15v3M18 18h3" />
  </svg>
);

const ActivationIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 2.5 2.5L16.5 9" />
  </svg>
);

/* =========================
   Helpers
========================= */

const getId = (value) => {
  if (!value) return "";

  if (typeof value === "string") {
    return value;
  }

  return value._id || value.id || "";
};

const getOrderLabel = (order) => {
  if (!order) return "—";

  if (typeof order === "string") {
    return order;
  }

  return (
    order.orderNumber ||
    order.orderId ||
    order._id ||
    "Order"
  );
};

const getCardLabel = (card) => {
  if (!card) return "—";

  if (typeof card === "string") {
    return card;
  }

  const name = card.fullName || card.name || "Unnamed Card";
  const company = card.company ? ` • ${card.company}` : "";

  return `${name}${company}`;
};

const getQualityCheckLabel = (qualityCheck) => {
    if (!qualityCheck) return "—";

    if (typeof qualityCheck === "string") {
        return qualityCheck;
    }

    const name =
        qualityCheck.qcNumber ||
        qualityCheck.qualityCheckNumber ||
        qualityCheck.name ||
        qualityCheck.orderNumber ||
        qualityCheck.order?.orderNumber;

    const status = qualityCheck.status
        ? ` • ${qualityCheck.status}`
        : "";

    return `${name || "Quality Check"}${status}`;
};

const formatDate = (date) => {
  if (!date) return "—";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "—";
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatDateTime = (date) => {
  if (!date) return "—";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "—";
  }

  return parsed.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/* =========================
   Status Badge
========================= */

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-amber-50 text-amber-700 border-amber-200",
    "QR Activated": "bg-blue-50 text-blue-700 border-blue-200",
    "Fully Activated": "bg-green-50 text-green-700 border-green-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${
        styles[status] ||
        "border-gray-200 bg-gray-50 text-gray-600"
      }`}
    >
      {status || "Unknown"}
    </span>
  );
};

/* =========================
   Main Component
========================= */

const CardActivation = ({ onNavigate }) => {
  const [activations, setActivations] = useState([]);
  const [cards, setCards] = useState([]);
  const [qualityChecks, setQualityChecks] = useState([]);
  const [orders, setOrders] = useState([]);

  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const [selectedActivation, setSelectedActivation] =
    useState(null);

  const [form, setForm] = useState({
    order: "",
    card: "",
    qualityCheck: "",
    qrUrl: "",
    remarks: "",
  });

  /* =========================
     Fetch Activations
  ========================= */

  const fetchActivations = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/card-activations");

      const data = response?.data;

      if (Array.isArray(data?.activations)) {
        setActivations(data.activations);
      } else if (Array.isArray(data)) {
        setActivations(data);
      } else {
        setActivations([]);
      }
    } catch (err) {
      console.error(
        "Error fetching card activations:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "Failed to load card activations."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     Fetch Cards
  ========================= */

  const fetchCards = async () => {
    try {
      const response = await api.get("/cards/my");

      const data = response?.data;

      if (Array.isArray(data?.cards)) {
        setCards(data.cards);
      } else if (Array.isArray(data)) {
        setCards(data);
      } else {
        setCards([]);
      }
    } catch (err) {
      console.error("Error fetching cards:", err);
      setCards([]);
    }
  };

  /* =========================
     Fetch Quality Checks
  ========================= */

  const fetchQualityChecks = async () => {
    try {
      const response = await api.get("/quality-checks");

      const data = response?.data;

      let list = [];

      if (Array.isArray(data?.qualityChecks)) {
        list = data.qualityChecks;
      } else if (Array.isArray(data?.checks)) {
        list = data.checks;
      } else if (Array.isArray(data)) {
        list = data;
      }

      setQualityChecks(list);
    } catch (err) {
      console.error(
        "Error fetching quality checks:",
        err
      );

      setQualityChecks([]);
    }
  };

  /* =========================
     Fetch Orders
  ========================= */

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders");

      const data = response?.data;

      if (Array.isArray(data?.orders)) {
        setOrders(data.orders);
      } else if (Array.isArray(data)) {
        setOrders(data);
      } else {
        setOrders([]);
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      setOrders([]);
    }
  };

  /* =========================
     Initial Load
  ========================= */

  useEffect(() => {
    fetchActivations();
    fetchCards();
    fetchQualityChecks();
    fetchOrders();
  }, []);

  /* =========================
     Passed Quality Checks
  ========================= */

  const passedQualityChecks = useMemo(() => {
    return qualityChecks.filter(
      (item) =>
        String(item?.status || "").toLowerCase() ===
        "passed"
    );
  }, [qualityChecks]);

  /* =========================
     Stats
  ========================= */

  const totalActivations = activations.length;

  const fullyActivated = activations.filter(
    (item) => item.status === "Fully Activated"
  ).length;

  const pendingActivations = activations.filter(
    (item) => item.status === "Pending"
  ).length;

  const qrActivated = activations.filter(
    (item) =>
      item.qrActivated === true ||
      item.status === "QR Activated" ||
      item.status === "Fully Activated"
  ).length;

  /* =========================
     Filtered Activations
  ========================= */

  const filteredActivations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return activations.filter((activation) => {
      const statusMatch =
        statusFilter === "All" ||
        activation.status === statusFilter;

      if (!statusMatch) {
        return false;
      }

      if (!query) {
        return true;
      }

      const orderText = getOrderLabel(
        activation.order
      ).toLowerCase();

      const cardText = getCardLabel(
        activation.card
      ).toLowerCase();

      const qualityText = getQualityCheckLabel(
        activation.qualityCheck
      ).toLowerCase();

      const activatedBy =
        activation?.activatedBy?.name?.toLowerCase() ||
        "";

      const qrUrl =
        activation?.qrUrl?.toLowerCase() || "";

      return (
        orderText.includes(query) ||
        cardText.includes(query) ||
        qualityText.includes(query) ||
        activatedBy.includes(query) ||
        qrUrl.includes(query)
      );
    });
  }, [activations, search, statusFilter]);

  /* =========================
     Form Change
  ========================= */

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    /*
      When card is selected:
      GET /cards/qr/:cardId

      Backend:
      - generates QR
      - saves QR in Card.qrCode
      - returns publicUrl
      - returns qrCode
    */

    if (name === "card" && value) {
      try {
        setError("");

        const response = await api.get(
          `/cards/qr/${value}`
        );

        const publicUrl =
          response?.data?.publicUrl;

        if (!publicUrl) {
          setError(
            "QR URL could not be generated."
          );

          return;
        }

        setForm((prev) => ({
          ...prev,
          card: value,
          qrUrl: publicUrl,
        }));
      } catch (err) {
        console.error(
          "QR generation error:",
          err
        );

        setError(
          err?.response?.data?.message ||
            "Failed to generate QR code."
        );
      }
    }

    if (name === "card" && !value) {
      setForm((prev) => ({
        ...prev,
        card: "",
        qrUrl: "",
      }));
    }
  };

  /* =========================
     Reset Form
  ========================= */

  const resetForm = () => {
    setForm({
      order: "",
      card: "",
      qualityCheck: "",
      qrUrl: "",
      remarks: "",
    });
  };

  /* =========================
     Open Create Modal
  ========================= */

  const openCreateModal = () => {
    setError("");
    setSuccess("");
    resetForm();
    setShowCreateModal(true);
  };

  /* =========================
     Close Create Modal
  ========================= */

  const closeCreateModal = () => {
    if (submitLoading) return;

    setShowCreateModal(false);
    resetForm();
  };

  /* =========================
     Create Activation
  ========================= */

  const handleActivate = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!form.order) {
      setError("Please select an order");
      return;
    }

    if (!form.card) {
      setError("Please select a card");
      return;
    }

    if (!form.qualityCheck) {
      setError("Please select a quality check");
      return;
    }

    if (!form.qrUrl) {
      setError(
        "QR code could not be generated for this card."
      );
      return;
    }

    try {
      setSubmitLoading(true);

      const payload = {
        order: form.order,
        card: form.card,
        qualityCheck: form.qualityCheck,
        qrUrl: form.qrUrl,
        remarks: (form.remarks || "").trim(),
      };

      await api.post(
        "/card-activations",
        payload
      );

      setSuccess(
        "Card activated successfully"
      );

      resetForm();
      setShowCreateModal(false);

      await fetchActivations();
    } catch (error) {
      console.error(
        "Activation error:",
        error
      );

      setError(
        error.response?.data?.message ||
          "Failed to activate card"
      );
    } finally {
      setSubmitLoading(false);
    }
  };

  /* =========================
     View Activation
  ========================= */

  const handleView = async (activation) => {
    setError("");
    setSelectedActivation(activation);
    setShowViewModal(true);

    const activationId = getId(activation);

    if (!activationId) return;

    try {
      setDetailsLoading(true);

      const response = await api.get(
        `/card-activations/${activationId}`
      );

      if (response?.data?.activation) {
        setSelectedActivation(
          response.data.activation
        );
      }
    } catch (err) {
      console.error(
        "Error fetching activation details:",
        err
      );
    } finally {
      setDetailsLoading(false);
    }
  };

  const closeViewModal = () => {
    if (detailsLoading) return;

    setShowViewModal(false);
    setSelectedActivation(null);
  };

  /* =========================
     Render
  ========================= */

  return (
    <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
      <div className="flex min-h-screen w-full">
        <Sidebar onNavigate={onNavigate} />

        <main className="min-w-0 flex-1">
          {/* =========================
              Header
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
                placeholder="Search activations..."
                className="h-10 w-full rounded-lg border border-[#e5e1ec] bg-[#fcfbff] pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-[#aaa5b2] focus:border-[#6554e8] focus:ring-2 focus:ring-[#6554e8]/10"
              />
            </div>

            <div className="ml-6 flex items-center gap-5">
              <button
                type="button"
                className="relative text-[#777282] transition hover:text-[#6554e8]"
              >
                <BellIcon />

                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-indigo-600" />
              </button>
            </div>
          </header>

          {/* =========================
              Main Content
          ========================= */}

          <div className="w-full p-6 sm:p-8 lg:p-10">
            {/* Page Heading */}

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                  Card Activation
                </h1>

                <p className="mt-1 text-sm text-[#94909d]">
                  Activate QR for quality-approved cards.
                </p>
              </div>

              <button
                type="button"
                onClick={openCreateModal}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                <PlusIcon />
                Activate Card
              </button>
            </div>

            {/* =========================
                Alerts
            ========================= */}

            {success && (
              <div className="mt-5 flex items-center justify-between rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                <span>{success}</span>

                <button
                  type="button"
                  onClick={() => setSuccess("")}
                  className="ml-4 text-green-700 hover:text-green-900"
                >
                  <XIcon />
                </button>
              </div>
            )}

            {error && !showCreateModal && (
              <div className="mt-5 flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                <span>{error}</span>

                <button
                  type="button"
                  onClick={() => setError("")}
                  className="ml-4 text-red-700 hover:text-red-900"
                >
                  <XIcon />
                </button>
              </div>
            )}

            {/* =========================
                Stats
            ========================= */}

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {/* Total */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <ActivationIcon />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#96919f]">
                      Total Activations
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#20202b]">
                      {totalActivations}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fully Activated */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <CheckIcon />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#96919f]">
                      Fully Activated
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#20202b]">
                      {fullyActivated}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pending */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <ActivationIcon />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#96919f]">
                      Pending
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#20202b]">
                      {pendingActivations}
                    </p>
                  </div>
                </div>
              </div>

              {/* QR */}

              <div className="rounded-xl border border-[#e5e1ed] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <QrIcon />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#96919f]">
                      QR Activated
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#20202b]">
                      {qrActivated}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                Activation List
            ========================= */}

            <div className="mt-7 overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
              {/* List Header */}

              <div className="flex flex-col gap-4 border-b border-[#eeeaf4] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#20202b]">
                    Card Activations
                  </h2>

                  <p className="mt-0.5 text-xs text-[#96919f]">
                    Manage activated QR cards.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {[
  "All",
  "Fully Activated",
  "Pending",
].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() =>
                        setStatusFilter(status)
                      }
                      className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                        statusFilter === status
                          ? "bg-indigo-600 text-white"
                          : "border border-[#e5e1ed] bg-white text-[#777282] hover:bg-[#faf8ff]"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Loading */}

              {loading ? (
                <div className="flex min-h-[260px] items-center justify-center">
                  <div className="flex items-center gap-3 text-sm text-[#888390]">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#e2deeb] border-t-indigo-600" />
                    Loading activations...
                  </div>
                </div>
              ) : filteredActivations.length === 0 ? (
                /* Empty */

                <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <ActivationIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-[#292733]">
                    No card activations found
                  </h3>

                  <p className="mt-1 max-w-[420px] text-sm text-[#96919f]">
                    {search
                      ? "Try changing your search or filter."
                      : "Activate a quality-approved card to see it here."}
                  </p>

                  {!search && (
                    <button
                      type="button"
                      onClick={openCreateModal}
                      className="mt-5 flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                      <PlusIcon />
                      Activate Card
                    </button>
                  )}
                </div>
              ) : (
                /* Rows */

                <div className="divide-y divide-[#eeeaf4]">
                  {filteredActivations.map(
                    (activation) => (
                      <div
                        key={getId(activation)}
                        className="p-5 transition hover:bg-[#fcfbff]"
                      >
                        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                          {/* Left */}

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="truncate text-sm font-semibold text-[#24232e]">
                                {getCardLabel(
                                  activation.card
                                )}
                              </h3>

                              <StatusBadge
                                status={
                                  activation.status
                                }
                              />
                            </div>

                            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                              <div>
                                <p className="text-[11px] font-medium uppercase tracking-wide text-[#aaa5b2]">
                                  Order
                                </p>

                                <p className="mt-1 truncate text-sm text-[#55515e]">
                                  {getOrderLabel(
                                    activation.order
                                  )}
                                </p>
                              </div>

                              <div>
                                <p className="text-[11px] font-medium uppercase tracking-wide text-[#aaa5b2]">
                                  Quality Check
                                </p>

                                <p className="mt-1 truncate text-sm text-[#55515e]">
                                  {getQualityCheckLabel(
                                    activation.qualityCheck
                                  )}
                                </p>
                              </div>

                              <div>
                                <p className="text-[11px] font-medium uppercase tracking-wide text-[#aaa5b2]">
                                  Activated By
                                </p>

                                <p className="mt-1 truncate text-sm text-[#55515e]">
                                  {activation
                                    ?.activatedBy
                                    ?.name ||
                                    "—"}
                                </p>
                              </div>

                              <div>
                                <p className="text-[11px] font-medium uppercase tracking-wide text-[#aaa5b2]">
                                  Activated At
                                </p>

                                <p className="mt-1 text-sm text-[#55515e]">
                                  {formatDate(
                                    activation.activatedAt
                                  )}
                                </p>
                              </div>
                            </div>

                            {/* QR Only */}

                            <div className="mt-4 flex flex-wrap items-center gap-3">
                              <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-700">
                                <QrIcon />
                                QR Active
                              </span>
                            </div>
                          </div>

                          {/* Action */}

                          <div className="flex shrink-0 items-center gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                handleView(
                                  activation
                                )
                              }
                              className="flex h-9 items-center gap-2 rounded-lg border border-[#e3dfeb] bg-white px-3 text-xs font-semibold text-[#6554e8] transition hover:bg-[#f7f5ff]"
                            >
                              <EyeIcon />
                              View
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

      {/* =====================================================
          CREATE ACTIVATION MODAL
      ===================================================== */}

      {showCreateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="flex max-h-[92vh] w-full max-w-[650px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}

            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-6 py-5">
              <div>
                <h2 className="text-lg font-bold text-[#20202b]">
                  Activate Card
                </h2>

                <p className="mt-1 text-xs text-[#96919f]">
                  Activate QR for a passed quality-check card.
                </p>
              </div>

              <button
                type="button"
                onClick={closeCreateModal}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#85808e] transition hover:bg-[#f5f3f9] hover:text-[#292733]"
              >
                <XIcon />
              </button>
            </div>

            {/* Modal Body */}

            <form
              onSubmit={handleActivate}
              className="overflow-y-auto"
            >
              <div className="space-y-5 px-6 py-6">
                {error && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {/* Order */}

                <div>
                  <label className="text-sm font-semibold text-[#393641]">
                    Order
                    <span className="ml-1 text-red-500">
                      *
                    </span>
                  </label>

                  <select
                    name="order"
                    value={form.order}
                    onChange={handleChange}
                    className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  >
                    <option value="">
                      Select Order
                    </option>

                    {orders.map((order) => (
                      <option
                        key={getId(order)}
                        value={getId(order)}
                      >
                        {getOrderLabel(order)}
                      </option>
                    ))}
                  </select>

                  {orders.length === 0 && (
                    <p className="mt-1.5 text-xs text-amber-600">
                      No orders available.
                    </p>
                  )}
                </div>

                {/* Card */}

                <div>
                  <label className="text-sm font-semibold text-[#393641]">
                    Card
                    <span className="ml-1 text-red-500">
                      *
                    </span>
                  </label>

                  <select
                    name="card"
                    value={form.card}
                    onChange={handleChange}
                    className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  >
                    <option value="">
                      Select Card
                    </option>

                    {cards.map((card) => (
                      <option
                        key={getId(card)}
                        value={getId(card)}
                      >
                        {getCardLabel(card)}
                      </option>
                    ))}
                  </select>

                  {cards.length === 0 && (
                    <p className="mt-1.5 text-xs text-amber-600">
                      No cards available.
                    </p>
                  )}
                </div>

                {/* Quality Check */}

                <div>
                  <label className="text-sm font-semibold text-[#393641]">
                    Quality Check
                    <span className="ml-1 text-red-500">
                      *
                    </span>
                  </label>

                  <select
                    name="qualityCheck"
                    value={form.qualityCheck}
                    onChange={handleChange}
                    className="mt-2 h-10 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  >
                    <option value="">
                      Select Passed Quality Check
                    </option>

                    {passedQualityChecks.map(
                      (check) => (
                        <option
                          key={getId(check)}
                          value={getId(check)}
                        >
                          {getQualityCheckLabel(
                            check
                          )}
                        </option>
                      )
                    )}
                  </select>

                  {passedQualityChecks.length ===
                    0 && (
                    <p className="mt-1.5 text-xs text-amber-600">
                      No passed quality checks are available.
                    </p>
                  )}

                  <p className="mt-1.5 text-xs text-[#9994a1]">
                    Only quality checks with status{" "}
                    <span className="font-semibold text-green-600">
                      Passed
                    </span>{" "}
                    can be activated.
                  </p>
                </div>

                {/* Remarks */}

                <div>
                  <label className="text-sm font-semibold text-[#393641]">
                    Remarks
                  </label>

                  <textarea
                    name="remarks"
                    value={form.remarks}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter activation remarks..."
                    className="mt-2 w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Activation Info */}

                <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4">
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                      <ActivationIcon />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-indigo-900">
                        QR activation
                      </p>

                      <p className="mt-1 text-xs leading-5 text-indigo-700">
                        After successful activation, the backend automatically marks the QR code as active for the card.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}

              <div className="flex items-center justify-end gap-3 border-t border-[#eeeaf4] bg-[#fcfbff] px-6 py-4">
                <button
                  type="button"
                  onClick={closeCreateModal}
                  disabled={submitLoading}
                  className="h-10 rounded-lg border border-[#e1dde8] bg-white px-4 text-sm font-semibold text-[#65616d] transition hover:bg-[#f7f5fa] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitLoading}
                  className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitLoading && (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  )}

                  {submitLoading
                    ? "Activating..."
                    : "Activate Card"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================
          VIEW ACTIVATION MODAL
      ===================================================== */}

     {showViewModal && selectedActivation && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
        <div className="max-h-[92vh] w-full max-w-[620px] overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#e5e1ed] px-6 py-5">
                <div>
                    <h2 className="text-xl font-semibold text-[#17131f]">
                        Activation Details
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        View card activation information
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        setShowViewModal(false);
                        setSelectedActivation(null);
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>

            {/* Body */}
            <div className="max-h-[70vh] overflow-y-auto px-6 py-6">

                {detailsLoading ? (
                    <div className="flex min-h-[250px] items-center justify-center">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#6d4aff] border-t-transparent" />
                    </div>
                ) : (
                    <div className="space-y-6">

                        {/* =========================
                            CARD FLIP ANIMATION
                        ========================= */}
                        <div className="flex justify-center">
                            {selectedActivation.card ? (
                                <div
                                    className="w-full max-w-[360px] cursor-pointer"
                                    style={{
                                        perspective: "1200px"
                                    }}
                                >
                                    <div
                                        onClick={() =>
                                            setIsCardFlipped(
                                                (prev) => !prev
                                            )
                                        }
                                        className="relative h-[210px] w-full"
                                        style={{
                                            transformStyle:
                                                "preserve-3d",
                                            transition:
                                                "transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1)",
                                            transform:
                                                isCardFlipped
                                                    ? "rotateY(180deg)"
                                                    : "rotateY(0deg)"
                                        }}
                                    >

                                        {/* =========================
                                            FRONT
                                        ========================= */}
                                        <div
                                            className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#17131f] via-[#30265a] to-[#6d4aff] p-5 text-white shadow-xl"
                                            style={{
                                                backfaceVisibility:
                                                    "hidden"
                                            }}
                                        >
                                            <div className="flex h-full flex-col justify-between">

                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                                                            TapCard
                                                        </p>

                                                        <p className="mt-2 text-lg font-semibold">
                                                            Digital Business Card
                                                        </p>
                                                    </div>

                                                    <div className="rounded-lg bg-white/10 px-3 py-1 text-xs">
                                                        CARD
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className="text-lg font-semibold">
                                                        {selectedActivation.card.fullName ||
                                                            "Card Holder"}
                                                    </p>

                                                    {selectedActivation.card.designation && (
                                                        <p className="mt-1 text-sm text-white/70">
                                                            {
                                                                selectedActivation
                                                                    .card
                                                                    .designation
                                                            }
                                                        </p>
                                                    )}

                                                    {selectedActivation.card.company && (
                                                        <p className="mt-1 text-sm text-white/60">
                                                            {
                                                                selectedActivation
                                                                    .card
                                                                    .company
                                                            }
                                                        </p>
                                                    )}
                                                </div>

                                                <p className="text-center text-[10px] text-white/50">
                                                    Click card to view QR
                                                </p>
                                            </div>
                                        </div>

                                        {/* =========================
                                            BACK - QR CODE
                                        ========================= */}
                                        <div
                                            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white p-5 shadow-xl"
                                            style={{
                                                backfaceVisibility:
                                                    "hidden",
                                                transform:
                                                    "rotateY(180deg)"
                                            }}
                                        >
                                            {selectedActivation.card.qrCode ? (
                                                <>
                                                    <img
                                                        src={
                                                            selectedActivation
                                                                .card
                                                                .qrCode
                                                        }
                                                        alt="Card QR Code"
                                                        className="h-[145px] w-[145px] rounded-xl object-contain"
                                                    />

                                                    <p className="mt-3 text-xs font-medium text-gray-500">
                                                        Scan to open digital card
                                                    </p>

                                                    <p className="mt-1 text-[10px] text-gray-400">
                                                        Click card to flip back
                                                    </p>
                                                </>
                                            ) : (
                                                <div className="text-center">
                                                    <p className="text-sm text-gray-500">
                                                        QR code not available
                                                    </p>

                                                    <p className="mt-1 text-xs text-gray-400">
                                                        Click card to flip back
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            ) : (
                                <div className="flex h-[210px] w-full max-w-[360px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">
                                    <span className="text-sm text-gray-500">
                                        Card not available
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* =========================
                            DETAILS GRID
                        ========================= */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Card Holder
                                </p>

                                <p className="mt-1 break-words text-sm font-semibold text-[#17131f]">
                                    {selectedActivation.card?.fullName ||
                                        "—"}
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Company
                                </p>

                                <p className="mt-1 break-words text-sm font-semibold text-[#17131f]">
                                    {selectedActivation.card?.company ||
                                        "—"}
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Order
                                </p>

                                <p className="mt-1 break-words text-sm font-semibold text-[#17131f]">
                                    {selectedActivation.order?.orderNumber ||
                                        selectedActivation.order ||
                                        "—"}
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Quality Check
                                </p>

                                <p className="mt-1 break-words text-sm font-semibold text-[#17131f]">
                                    {selectedActivation.qualityCheck?.order?.orderNumber ||
            selectedActivation.qualityCheck?.order?.orderNo ||
            selectedActivation.qualityCheck?.order?.name ||
                                        "—"}
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Activated By
                                </p>

                                <p className="mt-1 break-words text-sm font-semibold text-[#17131f]">
                                    {selectedActivation.activatedBy?.name ||
                                        selectedActivation.activatedBy?.email ||
                                        "—"}
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    QR Activated
                                </p>

                                <p className="mt-1 text-sm font-semibold text-green-600">
                                    {selectedActivation.qrActivated
                                        ? "Yes"
                                        : "No"}
                                </p>
                            </div>

                        </div>

                        {/* =========================
                            QR URL
                        ========================= */}
                        <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                QR URL
                            </p>

                            <p className="mt-2 break-all text-sm text-[#17131f]">
                                {selectedActivation.qrUrl || "—"}
                            </p>
                        </div>

                        {/* =========================
                            DATES
                        ========================= */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Activated At
                                </p>

                                <p className="mt-1 text-sm font-semibold text-[#17131f]">
                                    {selectedActivation.activatedAt
                                        ? new Date(
                                              selectedActivation.activatedAt
                                          ).toLocaleString()
                                        : "—"}
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Created At
                                </p>

                                <p className="mt-1 text-sm font-semibold text-[#17131f]">
                                    {selectedActivation.createdAt
                                        ? new Date(
                                              selectedActivation.createdAt
                                          ).toLocaleString()
                                        : "—"}
                                </p>
                            </div>

                        </div>

                        {/* =========================
                            REMARKS
                        ========================= */}
                        {selectedActivation.remarks && (
                            <div className="rounded-xl border border-[#e5e1ed] bg-[#fcfbff] p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Remarks
                                </p>

                                <p className="mt-2 break-words text-sm leading-6 text-[#17131f]">
                                    {selectedActivation.remarks}
                                </p>
                            </div>
                        )}

                    </div>
                )}

            </div>

            {/* Footer */}
            <div className="flex justify-end border-t border-[#e5e1ed] px-6 py-4">
                <button
                    type="button"
                    onClick={() => {
                        setShowViewModal(false);
                        setSelectedActivation(null);
                    }}
                    className="rounded-xl bg-[#17131f] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                >
                    Close
                </button>
            </div>

        </div>
    </div>
)}
    </div>
  );
};

export default CardActivation;
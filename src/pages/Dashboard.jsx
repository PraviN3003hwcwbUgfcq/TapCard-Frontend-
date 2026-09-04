

// import Sidebar from "../components/dashboard/Sidebar";
// import StatCard from "../components/dashboard/StatCard";
// import FollowUps from "../components/dashboard/FollowUps";
// import DemoSchedule from "../components/dashboard/DemoSchedule";
// import RecentLeads from "../components/dashboard/RecentLeads";
// import SalesTrend from "../components/dashboard/SalesTrend";

// const stats = [
//   {
//     title: "TOTAL LEADS",
//     value: "1,240",
//     change: "+12.5%",
//     icon: "users",
//     color: "purple",
//   },
//   {
//     title: "FOLLOW-UPS",
//     subtitle: "TODAY",
//     value: "18",
//     icon: "calendar",
//     color: "orange",
//   },
//   {
//     title: "INTERESTED",
//     subtitle: "CLIENTS",
//     value: "45",
//     icon: "heart",
//     color: "purple",
//   },
//   {
//     title: "ORDERS",
//     value: "89",
//     icon: "cart",
//     color: "blue",
//   },
//   {
//     title: "PRODUCTION",
//     subtitle: "PENDING",
//     value: "12",
//     icon: "package",
//     color: "yellow",
//   },
//   {
//     title: "ORDERS",
//     subtitle: "DELIVERED",
//     value: "65",
//     icon: "truck",
//     color: "green",
//   },
//   {
//     title: "PENDING",
//     subtitle: "PAYMENTS",
//     value: "₹4,200",
//     icon: "wallet",
//     color: "red",
//   },
// ];

// function SearchIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
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

// function Dashboard({ onNavigate }) {
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
//                 placeholder="Search..."
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
//                 Dashboard
//               </h1>

//               <p className="mt-1 text-sm text-[#94909d]">
//                 Overview of sales, orders and operations.
//               </p>
//             </div>

//             {/* Statistics */}
//             <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
//               {stats.map((stat, index) => (
//                 <div
//                   key={stat.title + index}
//                   className="animate-[slideUp_.45s_ease-out_both]"
//                   style={{ animationDelay: `${index * 70}ms` }}
//                 >
//                   <StatCard {...stat} />
//                 </div>
//               ))}

//               {/* Upcoming Demos */}
//               <div
//                 className="animate-[slideUp_.45s_ease-out_both]"
//                 style={{ animationDelay: "490ms" }}
//               >
//                 <StatCard
//                   title="UPCOMING DEMOS"
//                   value="7"
//                   icon="bolt"
//                   color="orange"
//                 />
//               </div>
//             </div>

//             {/* Bottom Dashboard */}
//             <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1fr)_380px]">
//               {/* Left Section */}
//               <div className="min-w-0 space-y-5">
//                 <FollowUps />
//                 <DemoSchedule />
//                 <RecentLeads />
//               </div>

//               {/* Right Section */}
//               <div className="min-w-0">
//                 <SalesTrend />
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;





























// import { useEffect, useState } from "react";

// import Sidebar from "../components/dashboard/Sidebar";
// import StatCard from "../components/dashboard/StatCard";
// import FollowUps from "../components/dashboard/FollowUps";
// import DemoSchedule from "../components/dashboard/DemoSchedule";
// import RecentLeads from "../components/dashboard/RecentLeads";
// import SalesTrend from "../components/dashboard/SalesTrend";

// import api from "../api/axios";

// function SearchIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
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

// function Dashboard({ onNavigate }) {
//   const [dashboardData, setDashboardData] = useState({
//     totalLeads: 0,
//     followUpsToday: 0,
//     interestedClients: 0,
//     totalOrders: 0,
//     pendingProduction: 0,
//     deliveredOrders: 0,
//     pendingPayments: 0,
//     upcomingDemos: 0,
//   });

//   const [notifications, setNotifications] = useState([]);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   /*
//    * Fetch Dashboard Data
//    */
//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         setLoading(true);

//         const [
//           leadsResponse,
//           followUpsResponse,
//           demosResponse,
//           ordersResponse,
//           paymentsResponse,
//           productionResponse,
//         ] = await Promise.allSettled([
//           api.get("/leads"),
//           api.get("/follow-ups"),
//           api.get("/demos"),
//           api.get("/orders"),
//           api.get("/payments"),
//           api.get("/productions"),
//         ]);

//         /*
//          * Helper to safely get API data
//          */
//         const getData = (response) => {
//           if (response.status !== "fulfilled") {
//             return [];
//           }

//           return response.value?.data?.data ||
//             response.value?.data?.leads ||
//             response.value?.data?.followUps ||
//             response.value?.data?.demos ||
//             response.value?.data?.orders ||
//             response.value?.data?.payments ||
//             response.value?.data?.productions ||
//             [];
//         };

//         const leads = getData(leadsResponse);
//         const followUps = getData(followUpsResponse);
//         const demos = getData(demosResponse);
//         const orders = getData(ordersResponse);
//         const payments = getData(paymentsResponse);
//         const productions = getData(productionResponse);

//         /*
//          * TODAY
//          */
//         const today = new Date();

//         const isToday = (date) => {
//           if (!date) return false;

//           const itemDate = new Date(date);

//           return (
//             itemDate.getDate() === today.getDate() &&
//             itemDate.getMonth() === today.getMonth() &&
//             itemDate.getFullYear() === today.getFullYear()
//           );
//         };

//         /*
//          * FOLLOW UPS TODAY
//          */
//         const todayFollowUps = followUps.filter((item) => {
//           return isToday(
//             item.followUpDate ||
//               item.date ||
//               item.scheduledAt ||
//               item.createdAt
//           );
//         });

//         /*
//          * UPCOMING DEMOS
//          */
//         const upcomingDemos = demos.filter((item) => {
//           const demoDate = new Date(
//             item.demoDate ||
//               item.date ||
//               item.scheduledAt
//           );

//           return !isNaN(demoDate) && demoDate >= today;
//         });

//         /*
//          * INTERESTED CLIENTS
//          */
//         const interestedClients = leads.filter((lead) => {
//           const status =
//             lead.status ||
//             lead.stage ||
//             lead.leadStatus;

//           return String(status).toLowerCase() === "interested";
//         });

//         /*
//          * PENDING PRODUCTION
//          */
//         const pendingProductions = productions.filter((item) => {
//           const status = String(
//             item.status ||
//               item.productionStatus ||
//               ""
//           ).toLowerCase();

//           return ![
//             "completed",
//             "complete",
//             "delivered",
//             "ready",
//           ].includes(status);
//         });

//         /*
//          * DELIVERED ORDERS
//          */
//         const deliveredOrders = orders.filter((order) => {
//           const status = String(
//             order.status ||
//               order.orderStatus ||
//               ""
//           ).toLowerCase();

//           return status === "delivered";
//         });

//         /*
//          * PENDING PAYMENTS
//          */
//         const pendingPayments = payments.filter((payment) => {
//           const status = String(
//             payment.status ||
//               payment.paymentStatus ||
//               ""
//           ).toLowerCase();

//           return ![
//             "paid",
//             "completed",
//             "success",
//           ].includes(status);
//         });

//         /*
//          * Calculate pending payment amount
//          */
//         const pendingPaymentAmount = pendingPayments.reduce(
//           (total, payment) => {
//             const amount = Number(
//               payment.remainingAmount ??
//                 payment.pendingAmount ??
//                 payment.amount ??
//                 0
//             );

//             return total + amount;
//           },
//           0
//         );

//         setDashboardData({
//           totalLeads: leads.length,

//           followUpsToday: todayFollowUps.length,

//           interestedClients: interestedClients.length,

//           totalOrders: orders.length,

//           pendingProduction: pendingProductions.length,

//           deliveredOrders: deliveredOrders.length,

//           pendingPayments: pendingPaymentAmount,

//           upcomingDemos: upcomingDemos.length,
//         });

//         /*
//          * Dynamic Notifications
//          */
//         const newNotifications = [];

//         if (todayFollowUps.length > 0) {
//           newNotifications.push({
//             id: "followups",
//             title: "Follow-ups scheduled",
//             message: `${todayFollowUps.length} follow-up${
//               todayFollowUps.length > 1 ? "s" : ""
//             } scheduled for today.`,
//           });
//         }

//         if (upcomingDemos.length > 0) {
//           newNotifications.push({
//             id: "demos",
//             title: "Upcoming demos",
//             message: `${upcomingDemos.length} upcoming demo${
//               upcomingDemos.length > 1 ? "s" : ""
//             } found.`,
//           });
//         }

//         if (pendingProductions.length > 0) {
//           newNotifications.push({
//             id: "production",
//             title: "Production pending",
//             message: `${pendingProductions.length} production ${
//               pendingProductions.length > 1
//                 ? "orders are"
//                 : "order is"
//             } pending.`,
//           });
//         }

//         if (pendingPayments.length > 0) {
//           newNotifications.push({
//             id: "payments",
//             title: "Pending payments",
//             message: `₹${pendingPaymentAmount.toLocaleString(
//               "en-IN"
//             )} payment is pending.`,
//           });
//         }

//         setNotifications(newNotifications);
//       } catch (error) {
//         console.error(
//           "Dashboard API Error:",
//           error
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   /*
//    * Stats
//    */
//   const stats = [
//     {
//       title: "TOTAL LEADS",
//       value: loading
//         ? "..."
//         : dashboardData.totalLeads.toLocaleString("en-IN"),
//       change: "",
//       icon: "users",
//       color: "purple",
//     },

//     {
//       title: "FOLLOW-UPS",
//       subtitle: "TODAY",
//       value: loading
//         ? "..."
//         : dashboardData.followUpsToday,
//       icon: "calendar",
//       color: "orange",
//     },

//     {
//       title: "INTERESTED",
//       subtitle: "CLIENTS",
//       value: loading
//         ? "..."
//         : dashboardData.interestedClients,
//       icon: "heart",
//       color: "purple",
//     },

//     {
//       title: "ORDERS",
//       value: loading
//         ? "..."
//         : dashboardData.totalOrders,
//       icon: "cart",
//       color: "blue",
//     },

//     {
//       title: "PRODUCTION",
//       subtitle: "PENDING",
//       value: loading
//         ? "..."
//         : dashboardData.pendingProduction,
//       icon: "package",
//       color: "yellow",
//     },

//     {
//       title: "ORDERS",
//       subtitle: "DELIVERED",
//       value: loading
//         ? "..."
//         : dashboardData.deliveredOrders,
//       icon: "truck",
//       color: "green",
//     },

//     {
//       title: "PENDING",
//       subtitle: "PAYMENTS",
//       value: loading
//         ? "..."
//         : `₹${dashboardData.pendingPayments.toLocaleString(
//             "en-IN"
//           )}`,
//       icon: "wallet",
//       color: "red",
//     },
//   ];

//   /*
//    * Search
//    */
//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
//       <div className="flex min-h-screen w-full">

//         <Sidebar onNavigate={onNavigate} />

//         <main className="min-w-0 flex-1">

//           {/* Header */}
//           <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">

//             {/* Search */}
//             <div className="relative w-full max-w-[520px]">

//               <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8797]">
//                 <SearchIcon />
//               </div>

//               <input
//                 type="text"
//                 value={search}
//                 onChange={handleSearch}
//                 placeholder="Search..."
//                 className="h-10 w-full rounded-lg border border-[#e5e1ec] bg-[#fcfbff] pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-[#aaa5b2] focus:border-[#6554e8] focus:ring-2 focus:ring-[#6554e8]/10"
//               />

//             </div>

//             {/* Header Right */}
//             <div className="ml-6 flex items-center gap-5">

//               {/* Notification */}
//               <div className="relative">

//                 <button
//                   onClick={() =>
//                     setShowNotifications(
//                       !showNotifications
//                     )
//                   }
//                   className="relative text-[#777384] transition hover:text-[#5141d8]"
//                 >
//                   <BellIcon />

//                   {notifications.length > 0 && (
//                     <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[8px] font-bold text-white">
//                       {notifications.length}
//                     </span>
//                   )}
//                 </button>

//                 {/* Notification Dropdown */}
//                 {showNotifications && (
//                   <div className="absolute right-0 top-8 z-50 w-[320px] overflow-hidden rounded-xl border border-[#eeeaf5] bg-white shadow-xl">

//                     <div className="border-b border-[#eeeaf5] px-4 py-3">
//                       <h3 className="text-sm font-semibold text-[#20202b]">
//                         Notifications
//                       </h3>

//                       <p className="mt-0.5 text-[11px] text-[#9994a3]">
//                         Latest CRM updates
//                       </p>
//                     </div>

//                     <div className="max-h-[320px] overflow-y-auto">

//                       {notifications.length === 0 ? (
//                         <div className="px-4 py-8 text-center">
//                           <p className="text-xs text-[#9994a3]">
//                             No new notifications
//                           </p>
//                         </div>
//                       ) : (
//                         notifications.map(
//                           (notification) => (
//                             <div
//                               key={notification.id}
//                               className="border-b border-[#f1eef5] px-4 py-3 transition hover:bg-[#faf8ff]"
//                             >
//                               <p className="text-xs font-semibold text-[#292735]">
//                                 {notification.title}
//                               </p>

//                               <p className="mt-1 text-[11px] leading-4 text-[#9994a3]">
//                                 {notification.message}
//                               </p>
//                             </div>
//                           )
//                         )
//                       )}

//                     </div>

//                   </div>
//                 )}

//               </div>

//               {/* Profile */}
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
//                 Dashboard
//               </h1>

//               <p className="mt-1 text-sm text-[#94909d]">
//                 Overview of sales, orders and operations.
//               </p>

//             </div>

//             {/* Statistics */}
//             <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

//               {stats.map((stat, index) => (
//                 <div
//                   key={stat.title + index}
//                   className="animate-[slideUp_.45s_ease-out_both]"
//                   style={{
//                     animationDelay: `${index * 70}ms`,
//                   }}
//                 >
//                   <StatCard {...stat} />
//                 </div>
//               ))}

//               {/* Upcoming Demos */}
//               <div
//                 className="animate-[slideUp_.45s_ease-out_both]"
//                 style={{
//                   animationDelay: "490ms",
//                 }}
//               >
//                 <StatCard
//                   title="UPCOMING DEMOS"
//                   value={
//                     loading
//                       ? "..."
//                       : dashboardData.upcomingDemos
//                   }
//                   icon="bolt"
//                   color="orange"
//                 />
//               </div>

//             </div>

//             {/* Bottom Dashboard */}
//             <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1fr)_380px]">

//               {/* Left Section */}
//               <div className="min-w-0 space-y-5">

//                 <FollowUps />

//                 <DemoSchedule />

//                 <RecentLeads />

//               </div>

//               {/* Right Section */}
//               <div className="min-w-0">

//                 <SalesTrend />

//               </div>

//             </div>

//           </div>

//         </main>

//       </div>
//     </div>
//   );
// }

// export default Dashboard;





























import { useEffect, useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import StatCard from "../components/dashboard/StatCard";
import FollowUps from "../components/dashboard/FollowUps";
import DemoSchedule from "../components/dashboard/DemoSchedule";
import RecentLeads from "../components/dashboard/RecentLeads";
import SalesTrend from "../components/dashboard/SalesTrend";

import api from "../api/axios";

/* =========================
   Search Icon
========================= */

function SearchIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
        >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
        </svg>
    );
}

/* =========================
   Bell Icon
========================= */

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

/* =========================
   Helper Functions
========================= */

const getResponseArray = (response, keys = []) => {
    if (!response || response.status !== "fulfilled") {
        return [];
    }

    const data = response.value?.data;

    if (Array.isArray(data)) {
        return data;
    }

    for (const key of keys) {
        if (Array.isArray(data?.[key])) {
            return data[key];
        }
    }

    if (Array.isArray(data?.data)) {
        return data.data;
    }

    return [];
};

/* =========================
   Date Helpers
========================= */

const isValidDate = (date) => {
    if (!date) return false;

    const parsed = new Date(date);

    return !Number.isNaN(parsed.getTime());
};

const isToday = (date) => {
    if (!isValidDate(date)) {
        return false;
    }

    const today = new Date();
    const itemDate = new Date(date);

    return (
        itemDate.getDate() === today.getDate() &&
        itemDate.getMonth() === today.getMonth() &&
        itemDate.getFullYear() === today.getFullYear()
    );
};

const isUpcoming = (date) => {
    if (!isValidDate(date)) {
        return false;
    }

    const now = new Date();
    const itemDate = new Date(date);

    return itemDate >= now;
};

/* =========================
   Dashboard
========================= */

function Dashboard({ onNavigate }) {
    const [dashboardData, setDashboardData] =
        useState({
            totalLeads: 0,
            followUpsToday: 0,
            interestedClients: 0,
            totalOrders: 0,
            pendingProduction: 0,
            deliveredOrders: 0,
            pendingPayments: 0,
            upcomingDemos: 0,
        });

    /* =========================
       Data For Child Components
    ========================= */

    const [followUpsData, setFollowUpsData] =
        useState([]);

    const [demosData, setDemosData] =
        useState([]);

    const [leadsData, setLeadsData] =
        useState([]);

    /* =========================
       Notifications
    ========================= */

    const [notifications, setNotifications] =
        useState([]);

    const [showNotifications, setShowNotifications] =
        useState(false);

    /* =========================
       Search
    ========================= */

    const [search, setSearch] = useState("");

    /* =========================
       Loading
    ========================= */

    const [loading, setLoading] = useState(true);

    /* =========================
       Fetch Dashboard Data
    ========================= */

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);

                const [
                    leadsResponse,
                    followUpsResponse,
                    demosResponse,
                    ordersResponse,
                    paymentsResponse,
                    productionResponse,
                ] = await Promise.allSettled([
                    api.get("/leads"),
                    api.get("/follow-ups"),
                    api.get("/demos"),
                    api.get("/orders"),
                    api.get("/payments"),
                    api.get("/productions"),
                ]);

                /* =========================
                   Get API Arrays
                ========================= */

                const leads = getResponseArray(
                    leadsResponse,
                    ["leads"]
                );

                const followUps =
                    getResponseArray(
                        followUpsResponse,
                        ["followUps", "followups"]
                    );

                const demos = getResponseArray(
                    demosResponse,
                    ["demos", "demo"]
                );

                const orders = getResponseArray(
                    ordersResponse,
                    ["orders"]
                );

                const payments =
                    getResponseArray(
                        paymentsResponse,
                        ["payments"]
                    );

                const productions =
                    getResponseArray(
                        productionResponse,
                        ["productions", "production"]
                    );

                /* =========================
                   Save Data For Components
                ========================= */

                setLeadsData(leads);
                setFollowUpsData(followUps);
                setDemosData(demos);

                /* =========================
                   TODAY'S FOLLOW-UPS
                ========================= */

                const todayFollowUps =
                    followUps.filter((item) => {
                        const date =
                            item.followUpDate ||
                            item.followupDate ||
                            item.date ||
                            item.scheduledAt ||
                            item.nextFollowUpDate;

                        return isToday(date);
                    });

                /* =========================
                   UPCOMING DEMOS
                ========================= */

                const upcomingDemos =
                    demos.filter((item) => {
                        const date =
                            item.demoDate ||
                            item.date ||
                            item.scheduledAt ||
                            item.demoAt ||
                            item.startDate;

                        return isUpcoming(date);
                    });

                /* =========================
                   INTERESTED CLIENTS
                ========================= */

                const interestedClients =
                    leads.filter((lead) => {
                        const status =
                            lead.status ||
                            lead.stage ||
                            lead.leadStatus;

                        return (
                            String(status)
                                .trim()
                                .toLowerCase() ===
                            "interested"
                        );
                    });

                /* =========================
                   PENDING PRODUCTION
                ========================= */

                const pendingProductions =
                    productions.filter((item) => {
                        const status =
                            item.status ||
                            item.productionStatus ||
                            "";

                        const normalizedStatus =
                            String(status)
                                .trim()
                                .toLowerCase();

                        return ![
                            "completed",
                            "complete",
                            "delivered",
                            "ready",
                        ].includes(
                            normalizedStatus
                        );
                    });

                /* =========================
                   DELIVERED ORDERS
                ========================= */

                const deliveredOrders =
                    orders.filter((order) => {
                        const status =
                            order.status ||
                            order.orderStatus ||
                            "";

                        return (
                            String(status)
                                .trim()
                                .toLowerCase() ===
                            "delivered"
                        );
                    });

                /* =========================
                   PENDING PAYMENTS
                ========================= */

                const pendingPayments =
                    payments.filter((payment) => {
                        const status =
                            payment.status ||
                            payment.paymentStatus ||
                            "";

                        const normalizedStatus =
                            String(status)
                                .trim()
                                .toLowerCase();

                        return ![
                            "paid",
                            "completed",
                            "success",
                        ].includes(
                            normalizedStatus
                        );
                    });

                /* =========================
                   Pending Payment Amount
                ========================= */

                const pendingPaymentAmount =
                    pendingPayments.reduce(
                        (total, payment) => {
                            const amount = Number(
                                payment.remainingAmount ??
                                    payment.pendingAmount ??
                                    payment.amount ??
                                    0
                            );

                            return (
                                total +
                                (Number.isNaN(amount)
                                    ? 0
                                    : amount)
                            );
                        },
                        0
                    );

                /* =========================
                   Set Dashboard Stats
                ========================= */

                setDashboardData({
                    totalLeads: leads.length,

                    followUpsToday:
                        todayFollowUps.length,

                    interestedClients:
                        interestedClients.length,

                    totalOrders:
                        orders.length,

                    pendingProduction:
                        pendingProductions.length,

                    deliveredOrders:
                        deliveredOrders.length,

                    pendingPayments:
                        pendingPaymentAmount,

                    upcomingDemos:
                        upcomingDemos.length,
                });

                /* =========================
                   Notifications
                ========================= */

                const newNotifications = [];

                if (
                    todayFollowUps.length >
                    0
                ) {
                    newNotifications.push({
                        id: "followups",
                        title:
                            "Follow-ups scheduled",
                        message: `${todayFollowUps.length} follow-up${
                            todayFollowUps.length >
                            1
                                ? "s"
                                : ""
                        } scheduled for today.`,
                    });
                }

                if (
                    upcomingDemos.length >
                    0
                ) {
                    newNotifications.push({
                        id: "demos",
                        title:
                            "Upcoming demos",
                        message: `${upcomingDemos.length} upcoming demo${
                            upcomingDemos.length >
                            1
                                ? "s"
                                : ""
                        } found.`,
                    });
                }

                if (
                    pendingProductions.length >
                    0
                ) {
                    newNotifications.push({
                        id: "production",
                        title:
                            "Production pending",
                        message: `${pendingProductions.length} production ${
                            pendingProductions.length >
                            1
                                ? "orders are"
                                : "order is"
                        } pending.`,
                    });
                }

                if (
                    pendingPayments.length >
                    0
                ) {
                    newNotifications.push({
                        id: "payments",
                        title:
                            "Pending payments",
                        message: `₹${pendingPaymentAmount.toLocaleString(
                            "en-IN"
                        )} payment is pending.`,
                    });
                }

                setNotifications(
                    newNotifications
                );
            } catch (error) {
                console.error(
                    "Dashboard API Error:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    /* =========================
       Stats
    ========================= */

    const stats = [
        {
            title: "TOTAL LEADS",
            value: loading
                ? "..."
                : dashboardData.totalLeads.toLocaleString(
                      "en-IN"
                  ),
            change: "",
            icon: "users",
            color: "purple",
        },
        {
            title: "FOLLOW-UPS",
            subtitle: "TODAY",
            value: loading
                ? "..."
                : dashboardData.followUpsToday,
            icon: "calendar",
            color: "orange",
        },
        {
            title: "INTERESTED",
            subtitle: "CLIENTS",
            value: loading
                ? "..."
                : dashboardData.interestedClients,
            icon: "heart",
            color: "purple",
        },
        {
            title: "ORDERS",
            value: loading
                ? "..."
                : dashboardData.totalOrders,
            icon: "cart",
            color: "blue",
        },
        {
            title: "PRODUCTION",
            subtitle: "PENDING",
            value: loading
                ? "..."
                : dashboardData.pendingProduction,
            icon: "package",
            color: "yellow",
        },
        {
            title: "ORDERS",
            subtitle: "DELIVERED",
            value: loading
                ? "..."
                : dashboardData.deliveredOrders,
            icon: "truck",
            color: "green",
        },
        {
            title: "PENDING",
            subtitle: "PAYMENTS",
            value: loading
                ? "..."
                : `₹${dashboardData.pendingPayments.toLocaleString(
                      "en-IN"
                  )}`,
            icon: "wallet",
            color: "red",
        },
    ];

    /* =========================
       Search
    ========================= */

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    /* =========================
       Render
    ========================= */

    return (
        <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">

            <div className="flex min-h-screen w-full">

                {/* Sidebar */}

                <Sidebar
                    onNavigate={onNavigate}
                />

                <main className="min-w-0 flex-1">

                    {/* =========================
                       Header
                    ========================= */}

                    <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">

                        {/* Search */}

                        <div className="relative w-full max-w-[520px]">

                            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8797]">

                                <SearchIcon />

                            </div>

                            <input
                                type="text"
                                value={search}
                                onChange={
                                    handleSearch
                                }
                                placeholder="Search..."
                                className="h-10 w-full rounded-lg border border-[#e5e1ec] bg-[#fcfbff] pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-[#aaa5b2] focus:border-[#6554e8] focus:ring-2 focus:ring-[#6554e8]/10"
                            />

                        </div>

                        {/* Header Right */}

                        <div className="ml-6 flex items-center gap-5">

                            {/* Notification */}

                            <div className="relative">

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowNotifications(
                                            !showNotifications
                                        )
                                    }
                                    className="relative text-[#777384] transition hover:text-[#5141d8]"
                                >

                                    <BellIcon />

                                    {notifications.length >
                                        0 && (
                                        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[8px] font-bold text-white">

                                            {
                                                notifications.length
                                            }

                                        </span>
                                    )}

                                </button>

                                {/* Notification Dropdown */}

                                {showNotifications && (
                                    <div className="absolute right-0 top-8 z-50 w-[320px] overflow-hidden rounded-xl border border-[#eeeaf5] bg-white shadow-xl">

                                        <div className="border-b border-[#eeeaf5] px-4 py-3">

                                            <h3 className="text-sm font-semibold text-[#20202b]">
                                                Notifications
                                            </h3>

                                            <p className="mt-0.5 text-[11px] text-[#9994a3]">
                                                Latest CRM updates
                                            </p>

                                        </div>

                                        <div className="max-h-[320px] overflow-y-auto">

                                            {notifications.length ===
                                            0 ? (
                                                <div className="px-4 py-8 text-center">

                                                    <p className="text-xs text-[#9994a3]">
                                                        No new notifications
                                                    </p>

                                                </div>
                                            ) : (
                                                notifications.map(
                                                    (
                                                        notification
                                                    ) => (
                                                        <div
                                                            key={
                                                                notification.id
                                                            }
                                                            className="border-b border-[#f1eef5] px-4 py-3 transition hover:bg-[#faf8ff]"
                                                        >

                                                            <p className="text-xs font-semibold text-[#292735]">
                                                                {
                                                                    notification.title
                                                                }
                                                            </p>

                                                            <p className="mt-1 text-[11px] leading-4 text-[#9994a3]">
                                                                {
                                                                    notification.message
                                                                }
                                                            </p>

                                                        </div>
                                                    )
                                                )
                                            )}

                                        </div>

                                    </div>
                                )}

                            </div>

                            {/* Profile */}

                            <button
                                type="button"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-sm font-semibold text-white shadow-sm"
                            >
                                P
                            </button>

                        </div>

                    </header>

                    {/* =========================
                       Main Content
                    ========================= */}

                    <div className="w-full p-6 sm:p-8 lg:p-10">

                        {/* Heading */}

                        <div className="animate-[fadeIn_.5s_ease-out]">

                            <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                                Dashboard
                            </h1>

                            <p className="mt-1 text-sm text-[#94909d]">
                                Overview of sales, orders and operations.
                            </p>

                        </div>

                        {/* =========================
                           Statistics
                        ========================= */}

                        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

                            {stats.map(
                                (
                                    stat,
                                    index
                                ) => (
                                    <div
                                        key={
                                            stat.title +
                                            index
                                        }
                                        className="animate-[slideUp_.45s_ease-out_both]"
                                        style={{
                                            animationDelay: `${
                                                index *
                                                70
                                            }ms`,
                                        }}
                                    >

                                        <StatCard
                                            {...stat}
                                        />

                                    </div>
                                )
                            )}

                            {/* Upcoming Demos */}

                            <div
                                className="animate-[slideUp_.45s_ease-out_both]"
                                style={{
                                    animationDelay:
                                        "490ms",
                                }}
                            >

                                <StatCard
                                    title="UPCOMING DEMOS"
                                    value={
                                        loading
                                            ? "..."
                                            : dashboardData.upcomingDemos
                                    }
                                    icon="bolt"
                                    color="orange"
                                />

                            </div>

                        </div>

                        {/* =========================
                           Bottom Dashboard
                        ========================= */}

                        <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1fr)_380px]">

                            {/* Left Section */}

                            <div className="min-w-0 space-y-5">

                                {/* Today's Follow-ups */}

                                <FollowUps
    followUps={followUpsData}
    loading={loading}
    onViewAll={() => onNavigate("/follow-ups")}
    onView={(followUp) => {
        if (followUp?._id) {
            onNavigate(`/follow-ups/${followUp._id}`);
        }
    }}
/>

                                {/* Demo Schedule */}

                                <DemoSchedule
    demos={demosData}
    loading={loading}
    onViewAll={() => onNavigate("/demos")}
/>
                                {/* Recent Leads */}

                                <RecentLeads
    leads={leadsData}
    loading={loading}
    onViewAll={() => onNavigate("/leads")}
    onView={(lead) => {
        if (lead?._id) {
            onNavigate(`/lead-details/${lead._id}`);
        }
    }}
/>
                            </div>

                            {/* Right Section */}

                            <div className="min-w-0">

                                <SalesTrend />

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}

export default Dashboard;
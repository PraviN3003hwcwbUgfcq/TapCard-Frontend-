



// const demos = [
//   {
//     name: "Priya Desai",
//     date: "Oct 24",
//     time: "11:00 AM",
//     status: "Scheduled",
//   },
//   {
//     name: "Amit Patel",
//     date: "Oct 24",
//     time: "02:30 PM",
//     status: "Scheduled",
//   },
// ];

// function DemoSchedule() {
//   return (
//     <section className="overflow-hidden rounded-xl border border-[#e5e1eb] bg-white transition hover:shadow-sm">
//       <div className="flex items-center justify-between border-b border-[#eeeaf3] px-5 py-4">
//         <h2 className="text-base font-semibold text-[#24232d]">
//           Demo Schedule
//         </h2>

//         <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
//           View All
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[550px]">
//           <thead className="bg-[#fbfaff]">
//             <tr className="text-left text-xs font-semibold uppercase tracking-wide text-[#98939f]">
//               <th className="px-5 py-3">Client</th>
//               <th className="px-5 py-3">Date</th>
//               <th className="px-5 py-3">Time</th>
//               <th className="px-5 py-3">Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {demos.map((demo) => (
//               <tr
//                 key={demo.name}
//                 className="border-t border-[#f1eef5] transition hover:bg-[#fcfbff]"
//               >
//                 <td className="px-5 py-4 text-sm font-medium text-[#45424d]">
//                   {demo.name}
//                 </td>

//                 <td className="px-5 py-4 text-sm text-[#77727e]">
//                   {demo.date}
//                 </td>

//                 <td className="px-5 py-4 text-sm text-[#77727e]">
//                   {demo.time}
//                 </td>

//                 <td className="px-5 py-4">
//                   <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
//                     {demo.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }

// export default DemoSchedule;






















// function DemoSchedule({ demos = [], onViewAll }) {
//     const formatDate = (date) => {
//         if (!date) return "-";

//         return new Date(date).toLocaleDateString("en-IN", {
//             month: "short",
//             day: "numeric",
//         });
//     };

//     const formatTime = (date) => {
//         if (!date) return "-";

//         return new Date(date).toLocaleTimeString("en-IN", {
//             hour: "2-digit",
//             minute: "2-digit",
//             hour12: true,
//         });
//     };

//     return (
//         <section className="overflow-hidden rounded-xl border border-[#e5e1eb] bg-white transition hover:shadow-sm">
//             <div className="flex items-center justify-between border-b border-[#eeeaf3] px-5 py-4">
//                 <h2 className="text-base font-semibold text-[#24232d]">
//                     Demo Schedule
//                 </h2>

//                 <button
//                     onClick={onViewAll}
//                     className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
//                 >
//                     View All
//                 </button>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="w-full min-w-[550px]">
//                     <thead className="bg-[#fbfaff]">
//                         <tr className="text-left text-xs font-semibold uppercase tracking-wide text-[#98939f]">
//                             <th className="px-5 py-3">Client</th>
//                             <th className="px-5 py-3">Date</th>
//                             <th className="px-5 py-3">Time</th>
//                             <th className="px-5 py-3">Status</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {demos.length > 0 ? (
//                             demos.map((demo) => (
//                                 <tr
//                                     key={demo._id}
//                                     className="border-t border-[#f1eef5] transition hover:bg-[#fcfbff]"
//                                 >
//                                     <td className="px-5 py-4 text-sm font-medium text-[#45424d]">
//                                         {demo.lead?.contactPerson ||
//                                             demo.lead?.companyName ||
//                                             "Unknown Client"}
//                                     </td>

//                                     <td className="px-5 py-4 text-sm text-[#77727e]">
//                                         {formatDate(demo.demoDate)}
//                                     </td>

//                                     <td className="px-5 py-4 text-sm text-[#77727e]">
//                                         {formatTime(demo.demoDate)}
//                                     </td>

//                                     <td className="px-5 py-4">
//                                         <span
//                                             className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
//                                                 demo.status === "Completed"
//                                                     ? "bg-emerald-50 text-emerald-600"
//                                                     : demo.status === "Cancelled"
//                                                     ? "bg-red-50 text-red-600"
//                                                     : "bg-blue-50 text-blue-600"
//                                             }`}
//                                         >
//                                             {demo.status}
//                                         </span>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td
//                                     colSpan="4"
//                                     className="px-5 py-8 text-center text-sm text-[#98939f]"
//                                 >
//                                     No upcoming demos
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </section>
//     );
// }

// export default DemoSchedule;



































import { useEffect, useState } from "react";

function DemoSchedule({ demos = [], onViewAll }) {
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 4;

    useEffect(() => {
        setCurrentPage(1);
    }, [demos]);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentDemos = demos.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-IN", {
            month: "short",
            day: "numeric",
        });
    };

    const formatTime = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    return (
        <section className="overflow-hidden rounded-xl border border-[#e5e1eb] bg-white transition hover:shadow-sm">
            <div className="flex items-center justify-between border-b border-[#eeeaf3] px-5 py-4">
                <h2 className="text-base font-semibold text-[#24232d]">
                    Demo Schedule
                </h2>

                <button
                    onClick={onViewAll}
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                >
                    View All
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[550px]">
                    <thead className="bg-[#fbfaff]">
                        <tr className="text-left text-xs font-semibold uppercase tracking-wide text-[#98939f]">
                            <th className="px-5 py-3">Client</th>
                            <th className="px-5 py-3">Date</th>
                            <th className="px-5 py-3">Time</th>
                            <th className="px-5 py-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentDemos.length > 0 ? (
                            currentDemos.map((demo) => (
                                <tr
                                    key={demo._id}
                                    className="border-t border-[#f1eef5] transition hover:bg-[#fcfbff]"
                                >
                                    <td className="px-5 py-4 text-sm font-medium text-[#45424d]">
                                        {demo.lead?.contactPerson ||
                                            demo.lead?.companyName ||
                                            "Unknown Client"}
                                    </td>

                                    <td className="px-5 py-4 text-sm text-[#77727e]">
                                        {formatDate(demo.demoDate)}
                                    </td>

                                    <td className="px-5 py-4 text-sm text-[#77727e]">
                                        {formatTime(demo.demoDate)}
                                    </td>

                                    <td className="px-5 py-4">
                                        <span
                                            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                                                demo.status === "Completed"
                                                    ? "bg-emerald-50 text-emerald-600"
                                                    : demo.status === "Cancelled"
                                                    ? "bg-red-50 text-red-600"
                                                    : "bg-blue-50 text-blue-600"
                                            }`}
                                        >
                                            {demo.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-5 py-8 text-center text-sm text-[#98939f]"
                                >
                                    No upcoming demos
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default DemoSchedule;








// const rows = [
//   {
//     initials: "AS",
//     name: "Arjun Singh",
//     type: "Real Estate",
//     time: "10:30 AM",
//     status: "Pending",
//     color: "bg-indigo-500",
//   },
//   {
//     initials: "NK",
//     name: "Neha Kapoor",
//     type: "Consulting",
//     time: "01:15 PM",
//     status: "Completed",
//     color: "bg-orange-500",
//   },
//   {
//     initials: "RM",
//     name: "Rahul Mehta",
//     type: "Retail",
//     time: "04:45 PM",
//     status: "Pending",
//     color: "bg-slate-300",
//   },
// ];

// function FollowUps() {
//   return (
//     <section className="overflow-hidden rounded-xl border border-[#e5e1eb] bg-white transition hover:shadow-sm">
//       <div className="flex items-center justify-between border-b border-[#eeeaf3] px-5 py-4">
//         <h2 className="text-base font-semibold text-[#24232d]">
//           Today's Follow-ups
//         </h2>

//         <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
//           View All
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[600px]">
//           <thead className="bg-[#fbfaff]">
//             <tr className="text-left text-xs font-semibold uppercase tracking-wide text-[#98939f]">
//               <th className="px-5 py-3">Client</th>
//               <th className="px-5 py-3">Time</th>
//               <th className="px-5 py-3">Status</th>
//               <th className="px-5 py-3 text-right">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {rows.map((row) => (
//               <tr
//                 key={row.name}
//                 className="border-t border-[#f1eef5] transition hover:bg-[#fcfbff]"
//               >
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`flex h-9 w-9 items-center justify-center rounded-full ${row.color} text-xs font-bold text-white`}
//                     >
//                       {row.initials}
//                     </div>

//                     <div>
//                       <p className="text-sm font-medium text-[#35333e]">
//                         {row.name}
//                       </p>

//                       <p className="mt-0.5 text-xs text-[#a29da9]">
//                         {row.type}
//                       </p>
//                     </div>
//                   </div>
//                 </td>

//                 <td className="px-5 py-4 text-sm text-[#6f6b76]">
//                   {row.time}
//                 </td>

//                 <td className="px-5 py-4">
//                   <span
//                     className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
//                       row.status === "Completed"
//                         ? "bg-emerald-50 text-emerald-600"
//                         : "bg-amber-50 text-amber-600"
//                     }`}
//                   >
//                     {row.status}
//                   </span>
//                 </td>

//                 <td className="px-5 py-4 text-right">
//                   <button className="text-sm font-medium text-indigo-500 hover:text-indigo-700">
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }

// export default FollowUps;








// function FollowUps({ followUps = [], onViewAll, onView }) {
//   const formatTime = (date) => {
//     if (!date) return "-";

//     return new Date(date).toLocaleTimeString("en-IN", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//   };

//   const getInitials = (name = "Client") => {
//     return name
//       .split(" ")
//       .map((word) => word[0])
//       .join("")
//       .substring(0, 2)
//       .toUpperCase();
//   };

//   const getAvatarColor = (index) => {
//     const colors = [
//       "bg-indigo-500",
//       "bg-orange-500",
//       "bg-slate-400",
//       "bg-purple-500",
//       "bg-emerald-500",
//     ];

//     return colors[index % colors.length];
//   };

//   return (
//     <section className="overflow-hidden rounded-xl border border-[#e5e1eb] bg-white transition hover:shadow-sm">
      
//       {/* Header */}
//       <div className="flex items-center justify-between border-b border-[#eeeaf3] px-5 py-4">
//         <h2 className="text-base font-semibold text-[#24232d]">
//           Today's Follow-ups
//         </h2>

//         <button
//           onClick={onViewAll}
//           className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
//         >
//           View All
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[600px]">
//           <thead className="bg-[#fbfaff]">
//             <tr className="text-left text-xs font-semibold uppercase tracking-wide text-[#98939f]">
//               <th className="px-5 py-3">Client</th>
//               <th className="px-5 py-3">Time</th>
//               <th className="px-5 py-3">Status</th>
//               <th className="px-5 py-3 text-right">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {followUps.length > 0 ? (
//               followUps.map((followUp, index) => {
//                 const clientName =
//                   followUp.lead?.contactPerson ||
//                   followUp.lead?.companyName ||
//                   "Unknown Client";

//                 const clientType =
//                   followUp.lead?.industry || "Client";

//                 return (
//                   <tr
//                     key={followUp._id}
//                     className="border-t border-[#f1eef5] transition hover:bg-[#fcfbff]"
//                   >
//                     {/* Client */}
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         <div
//                           className={`flex h-9 w-9 items-center justify-center rounded-full ${getAvatarColor(
//                             index
//                           )} text-xs font-bold text-white`}
//                         >
//                           {getInitials(clientName)}
//                         </div>

//                         <div>
//                           <p className="text-sm font-medium text-[#35333e]">
//                             {clientName}
//                           </p>

//                           <p className="mt-0.5 text-xs text-[#a29da9]">
//                             {clientType}
//                           </p>
//                         </div>
//                       </div>
//                     </td>

//                     {/* Time */}
//                     <td className="px-5 py-4 text-sm text-[#6f6b76]">
//                       {formatTime(followUp.scheduledDate)}
//                     </td>

//                     {/* Status */}
//                     <td className="px-5 py-4">
//                       <span
//                         className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
//                           followUp.status === "Completed"
//                             ? "bg-emerald-50 text-emerald-600"
//                             : followUp.status === "Cancelled"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-amber-50 text-amber-600"
//                         }`}
//                       >
//                         {followUp.status || "Pending"}
//                       </span>
//                     </td>

//                     {/* Action */}
//                     <td className="px-5 py-4 text-right">
//                       <button
//                         onClick={() => onView?.(followUp)}
//                         className="text-sm font-medium text-indigo-500 hover:text-indigo-700"
//                       >
                        
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td
//                   colSpan="4"
//                   className="px-5 py-8 text-center text-sm text-[#98939f]"
//                 >
//                   No follow-ups scheduled for today
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }

// export default FollowUps;

















































import { useEffect, useState } from "react";

function FollowUps({
    followUps = [],
    onViewAll,
    onView,
    loading = false
}) {
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 4;

    useEffect(() => {
        setCurrentPage(1);
    }, [followUps]);

    const totalPages = Math.ceil(followUps.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentFollowUps = followUps.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const formatTime = (date) => {
        if (!date) return "-";

        const parsedDate = new Date(date);

        if (Number.isNaN(parsedDate.getTime())) {
            return "-";
        }

        return parsedDate.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    };

    const getInitials = (name = "Client") =>
        name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .substring(0, 2)
            .toUpperCase();

    const getAvatarColor = (index) => {
        const colors = [
            "bg-indigo-500",
            "bg-orange-500",
            "bg-slate-400",
            "bg-purple-500",
            "bg-emerald-500"
        ];

        return colors[index % colors.length];
    };

    return (
        <section className="overflow-hidden rounded-xl border border-[#e5e1eb] bg-white transition-all duration-300 hover:shadow-sm">

            <div className="flex items-center justify-between border-b border-[#eeeaf3] px-5 py-4">
                <h2 className="text-base font-semibold text-[#24232d]">
                    Today's Follow-ups
                </h2>

                <button
                    onClick={onViewAll}
                    className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
                >
                    View All
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">

                    <thead>
                        <tr className="border-b border-[#eeeaf3] text-left">
                            <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                                Client
                            </th>

                            <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                                Time
                            </th>

                            <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                                Status
                            </th>

                            <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                                {/* Action */}
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {loading ? (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-5 py-8 text-center text-sm text-gray-500"
                                >
                                    Loading...
                                </td>
                            </tr>
                        ) : currentFollowUps.length > 0 ? (
                            currentFollowUps.map((followUp, index) => {

                                const clientName =
                                    followUp.lead?.contactPerson ||
                                    followUp.lead?.companyName ||
                                    "Unknown Client";

                                const clientType =
                                    followUp.lead?.industry ||
                                    "Client";

                                return (
                                    <tr
                                        key={followUp._id}
                                        className="border-b border-[#f1eef5] last:border-b-0"
                                    >
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">

                                                <div
                                                    className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white ${getAvatarColor(
                                                        index
                                                    )}`}
                                                >
                                                    {getInitials(clientName)}
                                                </div>

                                                <div>
                                                    <p className="text-sm font-medium text-[#24232d]">
                                                        {clientName}
                                                    </p>

                                                    <p className="text-xs text-gray-500">
                                                        {clientType}
                                                    </p>
                                                </div>

                                            </div>
                                        </td>

                                        <td className="px-5 py-4 text-sm text-gray-600">
                                            {formatTime(followUp.scheduledDate)}
                                        </td>

                                        <td className="px-5 py-4">

                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                    followUp.status === "Completed"
                                                        ? "bg-green-100 text-green-700"
                                                        : followUp.status === "Cancelled"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                }`}
                                            >
                                                {followUp.status || "Pending"}
                                            </span>

                                        </td>

                                        <td className="px-5 py-4">
                                            <button
                                                onClick={() => onView?.(followUp)}
                                                className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                                            >
                                                {/* View */}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-5 py-8 text-center text-sm text-gray-500"
                                >
                                    No follow-ups scheduled for today
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {!loading && totalPages > 1 && (
                <div className="flex items-center justify-between border-t border-[#eeeaf3] px-5 py-3">

                    <p className="text-xs text-gray-500">
                        Showing {startIndex + 1}-
                        {Math.min(
                            startIndex + ITEMS_PER_PAGE,
                            followUps.length
                        )}{" "}
                        of {followUps.length}
                    </p>

                    <div className="flex items-center gap-2">

                        <button
                            disabled={currentPage === 1}
                            onClick={() =>
                                setCurrentPage((page) => page - 1)
                            }
                            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Previous
                        </button>

                        <span className="text-xs text-gray-600">
                            {currentPage} / {totalPages}
                        </span>

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() =>
                                setCurrentPage((page) => page + 1)
                            }
                            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Next
                        </button>

                    </div>
                </div>
            )}

        </section>
    );
}

export default FollowUps;
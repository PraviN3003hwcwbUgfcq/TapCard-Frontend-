












// const leads = [
//   {
//     company: "Metro Realty",
//     type: "Real Estate Agency",
//     location: "Mumbai",
//     status: "New",
//     assigned: "Sarah K.",
//   },
//   {
//     company: "Dr. A. Sharma",
//     type: "Dental Clinic",
//     location: "Delhi",
//     status: "Contacted",
//     assigned: "John D.",
//   },
// ];

// function RecentLeads() {
//   return (
//     <section className="overflow-hidden rounded-xl border border-[#e5e1eb] bg-white transition-all duration-300 hover:shadow-sm">
//       {/* Header */}
//       <div className="flex items-center justify-between border-b border-[#eeeaf3] px-5 py-4">
//         <h2 className="text-base font-semibold text-[#24232d]">
//           Recent Leads
//         </h2>

//         <button className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-800">
//           View All
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[700px]">
//           <thead className="bg-[#fbfaff]">
//             <tr className="text-left text-xs font-semibold uppercase tracking-wide text-[#98939f]">
//               <th className="px-5 py-3.5">
//                 Business / Profession
//               </th>

//               <th className="px-5 py-3.5">
//                 Location
//               </th>

//               <th className="px-5 py-3.5">
//                 Status
//               </th>

//               <th className="px-5 py-3.5">
//                 Assigned
//               </th>

//               <th className="px-5 py-3.5 text-right">
//                 Action
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {leads.map((lead) => (
//               <tr
//                 key={lead.company}
//                 className="border-t border-[#f1eef5] transition-colors duration-200 hover:bg-[#fcfbff]"
//               >
//                 <td className="px-5 py-4">
//                   <p className="text-sm font-medium text-[#45424d]">
//                     {lead.company}
//                   </p>

//                   <p className="mt-1 text-xs text-[#a29da9]">
//                     {lead.type}
//                   </p>
//                 </td>

//                 <td className="px-5 py-4 text-sm text-[#77727e]">
//                   {lead.location}
//                 </td>

//                 <td className="px-5 py-4">
//                   <span
//                     className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
//                       lead.status === "New"
//                         ? "bg-blue-50 text-blue-600"
//                         : "bg-amber-50 text-amber-600"
//                     }`}
//                   >
//                     {lead.status}
//                   </span>
//                 </td>

//                 <td className="px-5 py-4 text-sm text-[#77727e]">
//                   {lead.assigned}
//                 </td>

//                 <td className="px-5 py-4 text-right">
//                   <button className="text-sm font-medium text-indigo-500 transition hover:text-indigo-700">
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

// export default RecentLeads;

























// function RecentLeads({ leads = [], onViewAll, onView }) {
//     return (
//         <section className="overflow-hidden rounded-xl border border-[#e5e1eb] bg-white transition-all duration-300 hover:shadow-sm">

//             {/* Header */}
//             <div className="flex items-center justify-between border-b border-[#eeeaf3] px-5 py-4">
//                 <h2 className="text-base font-semibold text-[#24232d]">
//                     Recent Leads
//                 </h2>

//                 <button
//                     onClick={onViewAll}
//                     className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
//                 >
//                     View All
//                 </button>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//                 <table className="w-full min-w-[700px]">

//                     <thead className="bg-[#fbfaff]">
//                         <tr className="text-left text-xs font-semibold uppercase tracking-wide text-[#98939f]">
//                             <th className="px-5 py-3.5">
//                                 Business / Profession
//                             </th>

//                             <th className="px-5 py-3.5">
//                                 Location
//                             </th>

//                             <th className="px-5 py-3.5">
//                                 Status
//                             </th>

//                             <th className="px-5 py-3.5">
//                                 Assigned
//                             </th>

//                             <th className="px-5 py-3.5 text-right">
//                                 Action
//                             </th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {leads.length > 0 ? (
//                             leads.map((lead) => {

//                                 const company =
//                                     lead.companyName || "Unknown Company";

//                                 const type =
//                                     lead.industry || "Business";

//                                 const assigned =
//                                     lead.assignedTo?.name || "Unassigned";

//                                 return (
//                                     <tr
//                                         key={lead._id}
//                                         className="border-t border-[#f1eef5] transition-colors duration-200 hover:bg-[#fcfbff]"
//                                     >

//                                         {/* Business / Profession */}
//                                         <td className="px-5 py-4">
//                                             <p className="text-sm font-medium text-[#45424d]">
//                                                 {company}
//                                             </p>

//                                             <p className="mt-1 text-xs text-[#a29da9]">
//                                                 {type}
//                                             </p>
//                                         </td>

//                                         {/* Location */}
//                                         <td className="px-5 py-4 text-sm text-[#77727e]">
//                                             {lead.location || "-"}
//                                         </td>

//                                         {/* Status */}
//                                         <td className="px-5 py-4">
//                                             <span
//                                                 className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
//                                                     lead.status === "New"
//                                                         ? "bg-blue-50 text-blue-600"
//                                                         : lead.status === "Contacted"
//                                                         ? "bg-amber-50 text-amber-600"
//                                                         : lead.status === "Interested"
//                                                         ? "bg-emerald-50 text-emerald-600"
//                                                         : "bg-gray-50 text-gray-600"
//                                                 }`}
//                                             >
//                                                 {lead.status || "New"}
//                                             </span>
//                                         </td>

//                                         {/* Assigned */}
//                                         <td className="px-5 py-4 text-sm text-[#77727e]">
//                                             {assigned}
//                                         </td>

//                                         {/* Action */}
//                                         <td className="px-5 py-4 text-right">
//                                             <button
//                                                 onClick={() => onView?.(lead)}
//                                                 className="text-sm font-medium text-indigo-500 transition hover:text-indigo-700"
//                                             >
//                                                 View
//                                             </button>
//                                         </td>

//                                     </tr>
//                                 );
//                             })
//                         ) : (
//                             <tr>
//                                 <td
//                                     colSpan="5"
//                                     className="px-5 py-8 text-center text-sm text-[#98939f]"
//                                 >
//                                     No recent leads
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>

//                 </table>
//             </div>
//         </section>
//     );
// }

// export default RecentLeads;





















import { useEffect, useState } from "react";

function RecentLeads({ leads = [], onViewAll, onView }) {
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 4;

    useEffect(() => {
        setCurrentPage(1);
    }, [leads]);

    const totalPages = Math.ceil(leads.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentLeads = leads.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    return (
        <section className="overflow-hidden rounded-xl border border-[#e5e1eb] bg-white transition-all duration-300 hover:shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#eeeaf3] px-5 py-4">

                <h2 className="text-base font-semibold text-[#24232d]">
                    Recent Leads
                </h2>

                <button
                    onClick={onViewAll}
                    className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
                >
                    View All
                </button>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="w-full min-w-[700px]">

                    <thead className="bg-[#fbfaff]">

                        <tr className="text-left text-xs font-semibold uppercase tracking-wide text-[#98939f]">

                            <th className="px-5 py-3.5">
                                Business / Profession
                            </th>

                            <th className="px-5 py-3.5">
                                Location
                            </th>

                            <th className="px-5 py-3.5">
                                Status
                            </th>

                            <th className="px-5 py-3.5">
                                Assigned
                            </th>

                            <th className="px-5 py-3.5 text-right">
                                {/* Action */}
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {currentLeads.length > 0 ? (

                            currentLeads.map((lead) => {

                                const company =
                                    lead.companyName ||
                                    "Unknown Company";

                                const type =
                                    lead.industry ||
                                    "Business";

                                const assigned =
                                    lead.assignedTo?.name ||
                                    "Unassigned";

                                return (
                                    <tr
                                        key={lead._id}
                                        className="border-t border-[#f1eef5] transition-colors duration-200 hover:bg-[#fcfbff]"
                                    >

                                        {/* Business / Profession */}
                                        <td className="px-5 py-4">

                                            <p className="text-sm font-medium text-[#45424d]">
                                                {company}
                                            </p>

                                            <p className="mt-1 text-xs text-[#a29da9]">
                                                {type}
                                            </p>

                                        </td>

                                        {/* Location */}
                                        <td className="px-5 py-4 text-sm text-[#77727e]">
                                            {lead.location || "-"}
                                        </td>

                                        {/* Status */}
                                        <td className="px-5 py-4">

                                            <span
    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        lead.status === "New"
            ? "bg-blue-50 text-blue-600"
            : lead.status === "Contacted"
            ? "bg-amber-50 text-amber-600"
            : lead.status === "Follow-up"
            ? "bg-purple-50 text-purple-600"
            : lead.status === "Demo"
            ? "bg-indigo-50 text-indigo-600"
            : lead.status === "Interested"
            ? "bg-emerald-50 text-emerald-600"
            : lead.status === "Quotation"
            ? "bg-cyan-50 text-cyan-600"
            : lead.status === "Negotiation"
            ? "bg-orange-50 text-orange-600"
            : lead.status === "Order Confirmed"
            ? "bg-green-50 text-green-600"
            : lead.status === "Converted"
            ? "bg-teal-50 text-teal-600"
            : lead.status === "Lost"
            ? "bg-red-50 text-red-600"
            : "bg-gray-50 text-gray-600"
    }`}
>
    {lead.status || "New"}
</span>

                                        </td>

                                        {/* Assigned */}
                                        <td className="px-5 py-4 text-sm text-[#77727e]">
                                            {assigned}
                                        </td>

                                        {/* Action */}
                                        <td className="px-5 py-4 text-right">

                                            <button
                                                onClick={() =>
                                                    onView?.(lead)
                                                }
                                                className="text-sm font-medium text-indigo-500 transition hover:text-indigo-700"
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
                                    colSpan="5"
                                    className="px-5 py-8 text-center text-sm text-[#98939f]"
                                >
                                    No recent leads
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

            {/* Pagination */}
            {totalPages > 1 && (

                <div className="flex items-center justify-between border-t border-[#eeeaf3] px-5 py-3">

                    <p className="text-xs text-[#98939f]">
                        Showing{" "}
                        {startIndex + 1}
                        -
                        {Math.min(
                            startIndex + ITEMS_PER_PAGE,
                            leads.length
                        )}{" "}
                        of {leads.length}
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

export default RecentLeads;
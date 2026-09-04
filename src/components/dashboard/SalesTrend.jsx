





// function SalesTrend() {
//   return (
//     <section className="rounded-lg border border-[#e5e1eb] bg-white p-4 transition hover:shadow-sm">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-sm font-semibold text-[#24232d]">
//           Sales Trend
//         </h2>

//         <button className="text-base leading-none text-gray-400 transition hover:text-[#6655e8]">
//           ⋮
//         </button>
//       </div>

//       {/* Chart */}
//       <div className="relative mt-5 h-[250px]">
//         {/* Grid */}
//         <div className="absolute inset-0 flex flex-col justify-between pb-7">
//           {[6, 5, 4, 3, 2, 1].map((n) => (
//             <div key={n} className="flex items-center gap-2">
//               <span className="w-6 text-right text-[9px] text-[#a7a2ad]">
//                 {n}k
//               </span>

//               <div className="h-px flex-1 bg-[#f0edf5]" />
//             </div>
//           ))}
//         </div>

//         {/* Chart */}
//         <svg
//           viewBox="0 0 180 250"
//           preserveAspectRatio="none"
//           className="absolute left-8 right-0 top-0 h-[220px] w-[calc(100%-32px)] overflow-visible"
//         >
//           <defs>
//             <linearGradient
//               id="salesFill"
//               x1="0"
//               x2="0"
//               y1="0"
//               y2="1"
//             >
//               <stop
//                 offset="0%"
//                 stopColor="#8b7cf6"
//                 stopOpacity="0.22"
//               />

//               <stop
//                 offset="100%"
//                 stopColor="#8b7cf6"
//                 stopOpacity="0"
//               />
//             </linearGradient>
//           </defs>

//           {/* Area */}
//           <path
//             d="M0 200 L25 165 L50 195 L75 95 L100 155 L125 130 L150 15 L180 50 L180 220 L0 220 Z"
//             fill="url(#salesFill)"
//           />

//           {/* Line */}
//           <path
//             d="M0 200 L25 165 L50 195 L75 95 L100 155 L125 130 L150 15 L180 50"
//             fill="none"
//             stroke="#6655e8"
//             strokeWidth="1.5"
//             vectorEffect="non-scaling-stroke"
//           />

//           {/* Points */}
//           {[
//             [0, 200],
//             [25, 165],
//             [50, 195],
//             [75, 95],
//             [100, 155],
//             [125, 130],
//             [150, 15],
//             [180, 50],
//           ].map(([cx, cy], index) => (
//             <circle
//               key={index}
//               cx={cx}
//               cy={cy}
//               r="2"
//               fill="white"
//               stroke="#6655e8"
//               strokeWidth="1"
//             />
//           ))}
//         </svg>

//         {/* Days */}
//         <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[9px] text-[#99949f]">
//           <span>Mon</span>
//           <span>Tue</span>
//           <span>Wed</span>
//           <span>Thu</span>
//           <span>Fri</span>
//           <span>Sat</span>
//           <span>Sun</span>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-4 flex items-center justify-between border-t border-[#f0edf5] pt-3">
//         <span className="text-[9px] text-[#99949f]">
//           Past 7 days
//         </span>

//         <span className="text-[9px] font-semibold text-emerald-500">
//           ↑ 15% vs last week
//         </span>
//       </div>
//     </section>
//   );
// }

// export default SalesTrend;



























// import { useEffect, useState } from "react";
// import api from "../../api/axios";

// function SalesTrend() {
//     const [salesData, setSalesData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchSalesTrend();
//     }, []);

//     const fetchSalesTrend = async () => {
//         try {
//             const response = await api.get("/dashboard/sales-trend");

//             if (response.data.success) {
//                 setSalesData(response.data.sales || []);
//             }
//         } catch (error) {
//             console.error("Failed to fetch sales trend:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const days = [];

//     for (let i = 6; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);

//         const dateKey = date.toISOString().split("T")[0];

//         const sale = salesData.find(
//             (item) => item._id === dateKey
//         );

//         days.push({
//             date: dateKey,
//             day: date.toLocaleDateString("en-US", {
//                 weekday: "short",
//             }),
//             amount: sale?.totalSales || 0,
//         });
//     }

//     const maxSales = Math.max(
//         ...days.map((item) => item.amount),
//         1000
//     );

//     const points = days.map((item, index) => {
//         const x = (index / 6) * 180;

//         const y =
//             200 -
//             (item.amount / maxSales) * 180;

//         return [x, y];
//     });

//     const linePath = points
//         .map(([x, y], index) =>
//             `${index === 0 ? "M" : "L"}${x} ${y}`
//         )
//         .join(" ");

//     const areaPath = `${linePath} L180 220 L0 220 Z`;

//     return (
//         <section className="rounded-lg border border-[#e5e1eb] bg-white p-4 transition hover:shadow-sm">

//             {/* Header */}
//             <div className="flex items-center justify-between">
//                 <h2 className="text-sm font-semibold text-[#24232d]">
//                     Sales Trend
//                 </h2>

//                 <button className="text-base leading-none text-gray-400 transition hover:text-[#6655e8]">
//                     ⋮
//                 </button>
//             </div>

//             {/* Chart */}
//             <div className="relative mt-5 h-[250px]">

//                 {/* Grid */}
//                 <div className="absolute inset-0 flex flex-col justify-between pb-7">

//                     {[6, 5, 4, 3, 2, 1].map((n) => (
//                         <div
//                             key={n}
//                             className="flex items-center gap-2"
//                         >
//                             <span className="w-6 text-right text-[9px] text-[#a7a2ad]">
//                                 {Math.round(
//                                     (maxSales / 6) * n / 1000
//                                 )}k
//                             </span>

//                             <div className="h-px flex-1 bg-[#f0edf5]" />
//                         </div>
//                     ))}

//                 </div>

//                 {/* SVG */}
//                 {loading ? (
//                     <div className="absolute inset-0 flex items-center justify-center text-sm text-[#98939f]">
//                         Loading sales...
//                     </div>
//                 ) : (
//                     <svg
//                         viewBox="0 0 180 250"
//                         preserveAspectRatio="none"
//                         className="absolute left-8 right-0 top-0 h-[220px] w-[calc(100%-32px)] overflow-visible"
//                     >

//                         <defs>
//                             <linearGradient
//                                 id="salesFill"
//                                 x1="0"
//                                 x2="0"
//                                 y1="0"
//                                 y2="1"
//                             >
//                                 <stop
//                                     offset="0%"
//                                     stopColor="#8b7cf6"
//                                     stopOpacity="0.22"
//                                 />

//                                 <stop
//                                     offset="100%"
//                                     stopColor="#8b7cf6"
//                                     stopOpacity="0"
//                                 />
//                             </linearGradient>
//                         </defs>

//                         {/* Area */}
//                         <path
//                             d={areaPath}
//                             fill="url(#salesFill)"
//                         />

//                         {/* Line */}
//                         <path
//                             d={linePath}
//                             fill="none"
//                             stroke="#6655e8"
//                             strokeWidth="1.5"
//                             vectorEffect="non-scaling-stroke"
//                         />

//                         {/* Points */}
//                         {points.map(([cx, cy], index) => (
//                             <circle
//                                 key={index}
//                                 cx={cx}
//                                 cy={cy}
//                                 r="2"
//                                 fill="white"
//                                 stroke="#6655e8"
//                                 strokeWidth="1"
//                             />
//                         ))}

//                     </svg>
//                 )}

//                 {/* Days */}
//                 <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[9px] text-[#99949f]">
//                     {days.map((item) => (
//                         <span key={item.date}>
//                             {item.day}
//                         </span>
//                     ))}
//                 </div>

//             </div>

//             {/* Footer */}
//             <div className="mt-4 flex items-center justify-between border-t border-[#f0edf5] pt-3">

//                 <span className="text-[9px] text-[#99949f]">
//                     Past 7 days
//                 </span>

//                 <span className="text-[9px] font-semibold text-emerald-500">
//                     Sales from Orders
//                 </span>

//             </div>

//         </section>
//     );
// }

// export default SalesTrend;














// import { useEffect, useState } from "react";

// import api from "../../api/axios";

// function SalesTrend() {
//     const [salesData, setSalesData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         fetchSalesTrend();
//     }, []);

//     const fetchSalesTrend = async () => {
//         try {
//             setLoading(true);
//             setError("");

//             const response = await api.get("/dashboard/sales-trend");

//             console.log("Sales Trend API Response:", response.data);

//             const responseData = response.data;

//             if (Array.isArray(responseData)) {
//                 setSalesData(responseData);
//                 return;
//             }

//             if (Array.isArray(responseData?.sales)) {
//                 setSalesData(responseData.sales);
//                 return;
//             }

//             if (Array.isArray(responseData?.salesTrend)) {
//                 setSalesData(responseData.salesTrend);
//                 return;
//             }

//             if (Array.isArray(responseData?.data)) {
//                 setSalesData(responseData.data);
//                 return;
//             }

//             setSalesData([]);
//         } catch (error) {
//             console.error("Failed to fetch sales trend:", error);

//             setSalesData([]);
//             setError(
//                 error?.response?.data?.message ||
//                     "Failed to load sales data"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     const formatDateKey = (date) => {
//         if (!date) return null;

//         const parsedDate = new Date(date);

//         if (Number.isNaN(parsedDate.getTime())) {
//             return null;
//         }

//         const year = parsedDate.getFullYear();
//         const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
//         const day = String(parsedDate.getDate()).padStart(2, "0");

//         return `${year}-${month}-${day}`;
//     };

//     const getSaleAmount = (sale) => {
//         if (!sale) return 0;

//         const amount =
//             sale.totalSales ??
//             sale.totalAmount ??
//             sale.amount ??
//             sale.sales ??
//             sale.value ??
//             0;

//         const numericAmount = Number(amount);

//         return Number.isNaN(numericAmount) ? 0 : numericAmount;
//     };

//     const days = [];

//     for (let i = 6; i >= 0; i--) {
//         const date = new Date();

//         date.setHours(0, 0, 0, 0);
//         date.setDate(date.getDate() - i);

//         const dateKey = formatDateKey(date);

//         const sale = salesData.find((item) => {
//             const itemDate =
//                 item?._id ||
//                 item?.date ||
//                 item?.saleDate ||
//                 item?.createdAt;

//             return formatDateKey(itemDate) === dateKey;
//         });

//         days.push({
//             date: dateKey,
//             day: date.toLocaleDateString("en-US", {
//                 weekday: "short",
//             }),
//             amount: getSaleAmount(sale),
//         });
//     }

//     const maxActualSales = Math.max(
//         ...days.map((item) => item.amount),
//         0
//     );

//     const maxSales =
//         maxActualSales > 0
//             ? Math.ceil(maxActualSales / 1000) * 1000
//             : 1000;

//     const points = days.map((item, index) => {
//         const x = (index / 6) * 180;

//         const y =
//             200 -
//             (item.amount / maxSales) * 180;

//         return [x, y];
//     });

//     const linePath = points
//         .map(([x, y], index) =>
//             `${index === 0 ? "M" : "L"}${x} ${y}`
//         )
//         .join(" ");

//     const areaPath = `${linePath} L180 220 L0 220 Z`;

//     return (
//         <section className="rounded-lg border border-[#e5e1eb] bg-white p-4 transition hover:shadow-sm">
//             {/* Header */}
//             <div className="flex items-center justify-between">
//                 <h2 className="text-sm font-semibold text-[#24232d]">
//                     Sales Trend
//                 </h2>

//                 <button
//                     type="button"
//                     className="text-base leading-none text-gray-400 transition hover:text-[#6655e8]"
//                 >
//                     ⋮
//                 </button>
//             </div>

//             {/* Chart */}
//             <div className="relative mt-5 h-[250px]">
//                 {/* Grid */}
//                 <div className="absolute inset-0 flex flex-col justify-between pb-7">
//                     {[6, 5, 4, 3, 2, 1].map((n) => (
//                         <div
//                             key={n}
//                             className="flex items-center gap-2"
//                         >
//                             <span className="w-6 text-right text-[9px] text-[#a7a2ad]">
//                                 {Math.round(
//                                     (maxSales / 6) * n / 1000
//                                 )}
//                                 k
//                             </span>

//                             <div className="h-px flex-1 bg-[#f0edf5]" />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Loading */}
//                 {loading ? (
//                     <div className="absolute inset-0 flex items-center justify-center text-sm text-[#98939f]">
//                         Loading sales...
//                     </div>
//                 ) : error ? (
//                     <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-[#98939f]">
//                         {error}
//                     </div>
//                 ) : (
//                     <>
//                         {/* SVG */}
//                         <svg
//                             viewBox="0 0 180 250"
//                             preserveAspectRatio="none"
//                             className="absolute left-8 right-0 top-0 h-[220px] w-[calc(100%-32px)] overflow-visible"
//                         >
//                             <defs>
//                                 <linearGradient
//                                     id="salesFill"
//                                     x1="0"
//                                     x2="0"
//                                     y1="0"
//                                     y2="1"
//                                 >
//                                     <stop
//                                         offset="0%"
//                                         stopColor="#8b7cf6"
//                                         stopOpacity="0.22"
//                                     />

//                                     <stop
//                                         offset="100%"
//                                         stopColor="#8b7cf6"
//                                         stopOpacity="0"
//                                     />
//                                 </linearGradient>
//                             </defs>

//                             {/* Area */}
//                             <path
//                                 d={areaPath}
//                                 fill="url(#salesFill)"
//                             />

//                             {/* Line */}
//                             <path
//                                 d={linePath}
//                                 fill="none"
//                                 stroke="#6655e8"
//                                 strokeWidth="1.5"
//                                 vectorEffect="non-scaling-stroke"
//                             />

//                             {/* Points */}
//                             {points.map(([cx, cy], index) => (
//                                 <circle
//                                     key={index}
//                                     cx={cx}
//                                     cy={cy}
//                                     r="2"
//                                     fill="white"
//                                     stroke="#6655e8"
//                                     strokeWidth="1"
//                                 />
//                             ))}
//                         </svg>
//                     </>
//                 )}

//                 {/* Days */}
//                 <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[9px] text-[#99949f]">
//                     {days.map((item) => (
//                         <span key={item.date}>
//                             {item.day}
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* Footer */}
//             <div className="mt-4 flex items-center justify-between border-t border-[#f0edf5] pt-3">
//                 <span className="text-[9px] text-[#99949f]">
//                     Past 7 days
//                 </span>

//                 <span className="text-[9px] font-semibold text-emerald-500">
//                     Sales from Orders
//                 </span>
//             </div>
//         </section>
//     );
// }

// export default SalesTrend;


























import { useEffect, useState } from "react";

import api from "../../api/axios";

function SalesTrend() {
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSalesTrend();
    }, []);

    const fetchSalesTrend = async () => {
        try {
            setLoading(true);

            const response = await api.get("/dashboard/sales-trend");

            console.log("Sales Trend:", response.data);

            if (response.data?.success) {
                setSalesData(response.data.salesTrend || []);
            } else {
                setSalesData([]);
            }
        } catch (error) {
            console.error("Failed to fetch sales trend:", error);
            setSalesData([]);
        } finally {
            setLoading(false);
        }
    };

    const days = [];

    for (let i = 6; i >= 0; i--) {
        const date = new Date();

        date.setDate(date.getDate() - i);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        const dateKey = `${year}-${month}-${day}`;

        const sale = salesData.find(
            (item) => item?._id === dateKey
        );

        days.push({
            date: dateKey,

            day: date.toLocaleDateString("en-US", {
                weekday: "short",
            }),

            amount: Number(sale?.totalSales || 0),
        });
    }

    const maxSales = Math.max(
        ...days.map((item) => item.amount),
        1000
    );

    const points = days.map((item, index) => {
        const x = (index / 6) * 180;

        const y =
            200 -
            (item.amount / maxSales) * 180;

        return [x, y];
    });

    const linePath = points
        .map(([x, y], index) =>
            `${index === 0 ? "M" : "L"}${x} ${y}`
        )
        .join(" ");

    const areaPath = `${linePath} L180 220 L0 220 Z`;

    return (
        <section className="rounded-lg border border-[#e5e1eb] bg-white p-4 transition hover:shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-[#24232d]">
                    Sales Trend
                </h2>

                <button
                    type="button"
                    className="text-base leading-none text-gray-400 transition hover:text-[#6655e8]"
                >
                    ⋮
                </button>
            </div>

            {/* Chart */}
            <div className="relative mt-5 h-[250px]">

                {/* Grid */}
                <div className="absolute inset-0 flex flex-col justify-between pb-7">
                    {[6, 5, 4, 3, 2, 1].map((n) => (
                        <div
                            key={n}
                            className="flex items-center gap-2"
                        >
                            <span className="w-6 text-right text-[9px] text-[#a7a2ad]">
                                ₹
                                {Math.round(
                                    (maxSales / 6) * n / 1000
                                )}
                                k
                            </span>

                            <div className="h-px flex-1 bg-[#f0edf5]" />
                        </div>
                    ))}
                </div>

                {/* Chart */}
                {loading ? (
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-[#98939f]">
                        Loading sales...
                    </div>
                ) : (
                    <svg
                        viewBox="0 0 180 250"
                        preserveAspectRatio="none"
                        className="absolute left-8 right-0 top-0 h-[220px] w-[calc(100%-32px)] overflow-visible"
                    >
                        <defs>
                            <linearGradient
                                id="salesFill"
                                x1="0"
                                x2="0"
                                y1="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#8b7cf6"
                                    stopOpacity="0.22"
                                />

                                <stop
                                    offset="100%"
                                    stopColor="#8b7cf6"
                                    stopOpacity="0"
                                />
                            </linearGradient>
                        </defs>

                        {/* Area */}
                        <path
                            d={areaPath}
                            fill="url(#salesFill)"
                        />

                        {/* Line */}
                        <path
                            d={linePath}
                            fill="none"
                            stroke="#6655e8"
                            strokeWidth="1.5"
                            vectorEffect="non-scaling-stroke"
                        />

                        {/* Points */}
                        {points.map(([cx, cy], index) => (
                            <circle
                                key={index}
                                cx={cx}
                                cy={cy}
                                r="2"
                                fill="white"
                                stroke="#6655e8"
                                strokeWidth="1"
                            />
                        ))}
                    </svg>
                )}

                {/* Days */}
                <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[9px] text-[#99949f]">
                    {days.map((item) => (
                        <span key={item.date}>
                            {item.day}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between border-t border-[#f0edf5] pt-3">
                <span className="text-[9px] text-[#99949f]">
                    Past 7 days
                </span>

                <span className="text-[9px] font-semibold text-emerald-500">
                    Sales from Payments
                </span>
            </div>
        </section>
    );
}

export default SalesTrend;
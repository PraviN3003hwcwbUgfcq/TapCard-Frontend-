// function Icon({ type }) {
//   const base = "h-3.5 w-3.5";

//   if (type === "users") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base}>
//         <circle cx="9" cy="8" r="3" />
//         <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" />
//         <path d="M16 5a3 3 0 0 1 0 6M18 14c2 .5 3 2 3 6" />
//       </svg>
//     );
//   }

//   if (type === "calendar") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base}>
//         <rect x="3" y="5" width="18" height="16" rx="2" />
//         <path d="M16 3v4M8 3v4M3 10h18" />
//       </svg>
//     );
//   }

//   if (type === "heart") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base}>
//         <path d="M20.8 8.8c0 5-8.8 10-8.8 10S3.2 13.8 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
//       </svg>
//     );
//   }

//   if (type === "cart") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base}>
//         <path d="M3 4h2l2 11h11l2-8H6" />
//         <circle cx="9" cy="19" r="1.5" />
//         <circle cx="17" cy="19" r="1.5" />
//       </svg>
//     );
//   }

//   if (type === "package") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base}>
//         <path d="m12 3 9 5-9 5-9-5 9-5Z" />
//         <path d="M3 8v9l9 5 9-5V8M12 13v9" />
//       </svg>
//     );
//   }

//   if (type === "truck") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base}>
//         <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
//         <circle cx="7" cy="19" r="2" />
//         <circle cx="18" cy="19" r="2" />
//       </svg>
//     );
//   }

//   if (type === "wallet") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base}>
//         <path d="M4 6h15a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13" />
//         <path d="M16 13h5" />
//       </svg>
//     );
//   }

//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base}>
//       <path d="M12 3v18M3 12h18" />
//     </svg>
//   );
// }

// function StatCard({
//   title,
//   subtitle,
//   value,
//   change,
//   icon,
//   color = "purple",
// }) {
//   const colors = {
//     purple: "bg-purple-50 text-purple-500",
//     orange: "bg-orange-50 text-orange-500",
//     blue: "bg-blue-50 text-blue-500",
//     yellow: "bg-amber-50 text-amber-500",
//     green: "bg-emerald-50 text-emerald-500",
//     red: "bg-red-50 text-red-500",
//   };

//   return (
//     <div className="group relative h-[74px] overflow-hidden rounded-lg border border-[#e6e1ed] bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-[0_8px_25px_rgba(91,76,200,0.08)]">
//       <div className="flex items-start justify-between">
//         <div>
//           <div className="text-[6px] font-semibold leading-[8px] tracking-wide text-[#8e8997]">
//             {title}
//           </div>

//           {subtitle && (
//             <div className="text-[6px] font-semibold leading-[8px] tracking-wide text-[#8e8997]">
//               {subtitle}
//             </div>
//           )}
//         </div>

//         <div
//           className={`flex h-5 w-5 items-center justify-center rounded ${colors[color]}`}
//         >
//           <Icon type={icon} />
//         </div>
//       </div>

//       <div className="mt-2 flex items-end gap-2">
//         <span className="text-[16px] font-bold leading-none text-[#20202a]">
//           {value}
//         </span>

//         {change && (
//           <span className="mb-0.5 rounded bg-emerald-50 px-1 py-0.5 text-[5px] font-semibold text-emerald-500">
//             {change}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StatCard;















function Icon({ type }) {
  const base = "h-4 w-4";

  if (type === "users") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={base}
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" />
        <path d="M16 5a3 3 0 0 1 0 6M18 14c2 .5 3 2 3 6" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={base}
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={base}
      >
        <path d="M20.8 8.8c0 5-8.8 10-8.8 10S3.2 13.8 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
      </svg>
    );
  }

  if (type === "cart") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={base}
      >
        <path d="M3 4h2l2 11h11l2-8H6" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
    );
  }

  if (type === "package") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={base}
      >
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="M3 8v9l9 5 9-5V8M12 13v9" />
      </svg>
    );
  }

  if (type === "truck") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={base}
      >
        <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </svg>
    );
  }

  if (type === "wallet") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={base}
      >
        <path d="M4 6h15a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13" />
        <path d="M16 13h5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={base}
    >
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

function StatCard({
  title,
  subtitle,
  value,
  change,
  icon,
  color = "purple",
}) {
  const colors = {
    purple: "bg-purple-50 text-purple-500",
    orange: "bg-orange-50 text-orange-500",
    blue: "bg-blue-50 text-blue-500",
    yellow: "bg-amber-50 text-amber-500",
    green: "bg-emerald-50 text-emerald-500",
    red: "bg-red-50 text-red-500",
  };

  return (
    <div
      className="
        group relative
        h-[92px]
        w-full
        overflow-hidden
        rounded-xl
        border border-[#e6e1ed]
        bg-white
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-200
        hover:shadow-[0_8px_25px_rgba(91,76,200,0.08)]
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <div className="text-[9px] font-semibold leading-3 tracking-wide text-[#8e8997]">
            {title}
          </div>

          {subtitle && (
            <div className="text-[9px] font-semibold leading-3 tracking-wide text-[#8e8997]">
              {subtitle}
            </div>
          )}
        </div>

        <div
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${colors[color]}`}
        >
          <Icon type={icon} />
        </div>
      </div>

      {/* Value */}
      <div className="mt-3 flex items-end gap-2">
        <span className="text-[21px] font-bold leading-none tracking-tight text-[#20202a]">
          {value}
        </span>

        {change && (
          <span className="mb-0.5 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[7px] font-semibold text-emerald-500">
            {change}
          </span>
        )}
      </div>
    </div>
  );
}

export default StatCard;
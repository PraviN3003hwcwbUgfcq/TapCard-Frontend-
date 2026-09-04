




// import { useState } from "react";

// const menuItems = [
//   { label: "Dashboard", icon: "grid", path: "/dashboard" },
//   { label: "Find Clients", icon: "search", path: "/find-clients" },
//   { label: "Leads", icon: "users", path: "/leads" },
//   { label: "Follow-ups", icon: "calendar", path: "/follow-ups" },
//   { label: "Demos", icon: "presentation", path: "/demos" },
//   { label: "Quotations", icon: "file", path: "/quotations" },
//   { label: "Orders", icon: "cart", path: "/orders" },
//   { label: "Production", icon: "package", path: "/production" },
//   { label: "Cards", icon: "card", path: "/cards" },
//   { label: "Delivery", icon: "truck", path: "/delivery" },
//   { label: "Payments", icon: "wallet", path: "/payments" },
//   { label: "Clients", icon: "people", path: "/clients" },
//   { label: "Reports", icon: "chart", path: "/reports" },
//   { label: "Settings", icon: "settings", path: "/settings" },
// ];

// function Icon({ type }) {
//   const common =
//     "h-5 w-5 shrink-0 transition-colors duration-200";

//   const icons = {
//     grid: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
//         <rect x="3" y="3" width="7" height="7" rx="1" />
//         <rect x="14" y="3" width="7" height="7" rx="1" />
//         <rect x="3" y="14" width="7" height="7" rx="1" />
//         <rect x="14" y="14" width="7" height="7" rx="1" />
//       </svg>
//     ),

//     search: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         className={common}
//       >
//         <circle cx="10.5" cy="10.5" r="6" />
//         <path d="m15 15 5 5" />
//       </svg>
//     ),

//     users: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         className={common}
//       >
//         <circle cx="9" cy="8" r="3" />
//         <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" />
//         <path d="M16 5a3 3 0 0 1 0 6M18 14c2 .5 3 2 3 6" />
//       </svg>
//     ),

//     calendar: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         className={common}
//       >
//         <rect x="3" y="5" width="18" height="16" rx="2" />
//         <path d="M16 3v4M8 3v4M3 10h18" />
//       </svg>
//     ),

//     presentation: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         className={common}
//       >
//         <rect x="3" y="4" width="18" height="12" rx="1" />
//         <path d="M12 16v5M8 21h8M7 8h10" />
//       </svg>
//     ),

//     file: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         className={common}
//       >
//         <path d="M6 3h9l4 4v14H6z" />
//         <path d="M14 3v5h5M9 13h6M9 17h6" />
//       </svg>
//     ),

//     cart: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         className={common}
//       >
//         <path d="M3 4h2l2 11h11l2-8H6" />
//         <circle cx="9" cy="19" r="1.5" />
//         <circle cx="17" cy="19" r="1.5" />
//       </svg>
//     ),

//     package: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         className={common}
//       >
//         <path d="m12 3 9 5-9 5-9-5 9-5Z" />
//         <path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9" />
//       </svg>
//     ),

//     card: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         className={common}
//       >
//         <rect x="3" y="5" width="18" height="14" rx="2" />
//         <path d="M3 10h18M7 15h4" />
//       </svg>
//     ),

//     truck: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         className={common}
//       >
//         <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
//         <circle cx="7" cy="19" r="2" />
//         <circle cx="18" cy="19" r="2" />
//       </svg>
//     ),

//     wallet: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         className={common}
//       >
//         <path d="M4 6h15a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13" />
//         <path d="M16 13h5M17 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
//       </svg>
//     ),

//     people: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         className={common}
//       >
//         <circle cx="9" cy="8" r="3" />
//         <circle cx="17" cy="9" r="2.5" />
//         <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6M15 14c3 0 5 2 6 6" />
//       </svg>
//     ),

//     chart: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         className={common}
//       >
//         <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
//       </svg>
//     ),

//     settings: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         className={common}
//       >
//         <circle cx="12" cy="12" r="3" />
//         <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.5v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.5-1H6v-2.5h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h2.5v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1Z" />
//       </svg>
//     ),
//   };

//   return icons[type];
// }

// function Sidebar({ onNavigate }) {
//   const [active, setActive] = useState("Dashboard");

//   const handleNavigation = (item) => {
//     setActive(item.label);

//     if (onNavigate && item.path) {
//       onNavigate(item.path);
//     }
//   };

//   return (
//     <>
//       <aside className="hidden w-[240px] shrink-0 border-r border-[#ebe7f2] bg-white lg:block">
//         <div className="sticky top-0 flex h-screen flex-col">
//           <div className="flex h-[70px] items-center border-b border-[#f0edf5] px-6">
//             <div className="mr-3 flex h-9 w-9 items-center justify-center">
//               <div className="relative h-7 w-7">
//                 <span className="absolute left-0 top-0 h-3.5 w-3.5 border-l-[3px] border-t-[3px] border-red-500" />
//                 <span className="absolute right-0 top-0 h-3.5 w-3.5 border-r-[3px] border-t-[3px] border-yellow-400" />
//                 <span className="absolute bottom-0 left-0 h-3.5 w-3.5 border-b-[3px] border-l-[3px] border-green-500" />
//                 <span className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b-[3px] border-r-[3px] border-blue-500" />
//               </div>
//             </div>

//             <div>
//               <div className="text-[17px] font-bold text-indigo-600">
//                 TapCard
//               </div>

//               <div className="text-[8px] tracking-wide text-gray-400">
//                 BUSINESS CRM
//               </div>
//             </div>
//           </div>

//           <nav className="flex-1 px-4 py-6">
//             {menuItems.map((item, index) => (
//               <button
//                 key={item.label}
//                 onClick={() => handleNavigation(item)}
//                 className={`group mb-1 flex h-11 w-full items-center gap-3 rounded-lg px-4 text-left text-[13px] transition-all duration-200 ${
//                   active === item.label
//                     ? "bg-indigo-50 font-semibold text-indigo-600 shadow-[inset_-3px_0_0_#5b4de3]"
//                     : "text-[#74717c] hover:bg-[#f8f6fc] hover:text-indigo-500"
//                 }`}
//                 style={{
//                   animation: "slideRight .35s ease-out both",
//                   animationDelay: `${index * 35}ms`,
//                 }}
//               >
//                 <Icon type={item.icon} />
//                 <span>{item.label}</span>
//               </button>
//             ))}
//           </nav>
//         </div>
//       </aside>

//       <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-[#e7e2ef] bg-white/95 p-2 shadow-xl backdrop-blur lg:hidden">
//         {menuItems.slice(0, 5).map((item) => (
//           <button
//             key={item.label}
//             onClick={() => handleNavigation(item)}
//             className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
//               active === item.label
//                 ? "bg-indigo-600 text-white"
//                 : "text-gray-400 hover:bg-gray-100"
//             }`}
//             title={item.label}
//           >
//             <Icon type={item.icon} />
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Sidebar;






































import { useState } from "react";

const menuItems = [
  { label: "Dashboard", icon: "grid", path: "/dashboard" },
  // { label: "Find Clients", icon: "search", path: "/find-clients" },
  { label: "Leads", icon: "users", path: "/leads" },
  { label: "Follow-ups", icon: "calendar", path: "/follow-ups" },
  { label: "Demos", icon: "presentation", path: "/demos" },
  { label: "Quotations", icon: "file", path: "/quotations" },
  { label: "Orders", icon: "cart", path: "/orders" },
  { label: "Production", icon: "package", path: "/production" },
  { label: "Quality Check", icon: "check", path: "/quality-checks" },
  { label: "Card Activation", icon: "card", path: "/card-activation" },
  { label: "Cards", icon: "card", path: "/cards" },
  { label: "Delivery", icon: "truck", path: "/delivery" },
  { label: "Payments", icon: "wallet", path: "/payments" },
  { label: "Clients", icon: "people", path: "/clients" },
  // { label: "Reports", icon: "chart", path: "/reports" },
  // { label: "Settings", icon: "settings", path: "/settings" },
];

function Icon({ type }) {
  const common =
    "h-5 w-5 shrink-0 transition-colors duration-200";

  const icons = {
    grid: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),

    check: (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={common}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
),

    search: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={common}
      >
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="m15 15 5 5" />
      </svg>
    ),

    users: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={common}
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" />
        <path d="M16 5a3 3 0 0 1 0 6M18 14c2 .5 3 2 3 6" />
      </svg>
    ),

    calendar: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={common}
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
    ),

    presentation: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={common}
      >
        <rect x="3" y="4" width="18" height="12" rx="1" />
        <path d="M12 16v5M8 21h8M7 8h10" />
      </svg>
    ),

    file: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={common}
      >
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </svg>
    ),

    cart: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={common}
      >
        <path d="M3 4h2l2 11h11l2-8H6" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
    ),

    package: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={common}
      >
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9" />
      </svg>
    ),

    card: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={common}
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </svg>
    ),

    truck: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={common}
      >
        <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </svg>
    ),

    wallet: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={common}
      >
        <path d="M4 6h15a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13" />
        <path d="M16 13h5M17 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
      </svg>
    ),

    people: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={common}
      >
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6M15 14c3 0 5 2 6 6" />
      </svg>
    ),

    chart: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={common}
      >
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),

    settings: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={common}
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.5v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.5-1H6v-2.5h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h2.5v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1Z" />
      </svg>
    ),
  };

  return icons[type];
}

function Sidebar({ onNavigate }) {
  const getActiveItem = () => {
    const currentPath = window.location.pathname;

    const currentItem = menuItems.find(
      (item) => item.path === currentPath
    );

    return currentItem ? currentItem.label : "Dashboard";
  };

  const [active, setActive] = useState(getActiveItem);

  const handleNavigation = (item) => {
    setActive(item.label);

    if (onNavigate && item.path) {
      onNavigate(item.path);
    }
  };

  return (
    <>
      <aside className="hidden w-[240px] shrink-0 border-r border-[#ebe7f2] bg-white lg:block">
        <div className="sticky top-0 flex h-screen flex-col">

          <div className="flex h-[70px] items-center border-b border-[#f0edf5] px-6">
            <div className="mr-3 flex h-9 w-9 items-center justify-center">
              <div className="relative h-7 w-7">
                <span className="absolute left-0 top-0 h-3.5 w-3.5 border-l-[3px] border-t-[3px] border-red-500" />
                <span className="absolute right-0 top-0 h-3.5 w-3.5 border-r-[3px] border-t-[3px] border-yellow-400" />
                <span className="absolute bottom-0 left-0 h-3.5 w-3.5 border-b-[3px] border-l-[3px] border-green-500" />
                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b-[3px] border-r-[3px] border-blue-500" />
              </div>
            </div>

            <div>
              <div className="text-[17px] font-bold text-indigo-600">
                TapCard
              </div>

              <div className="text-[8px] tracking-wide text-gray-400">
                BUSINESS CRM
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4 py-6">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={`group mb-1 flex h-11 w-full items-center gap-3 rounded-lg px-4 text-left text-[13px] transition-all duration-200 ${
                  active === item.label
                    ? "bg-indigo-50 font-semibold text-indigo-600 shadow-[inset_-3px_0_0_#5b4de3]"
                    : "text-[#74717c] hover:bg-[#f8f6fc] hover:text-indigo-500"
                }`}
                style={{
                  animation: "slideRight .35s ease-out both",
                  animationDelay: `${index * 35}ms`,
                }}
              >
                <Icon type={item.icon} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-[#e7e2ef] bg-white/95 p-2 shadow-xl backdrop-blur lg:hidden">
        {menuItems.slice(0, 5).map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavigation(item)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
              active === item.label
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:bg-gray-100"
            }`}
            title={item.label}
          >
            <Icon type={item.icon} />
          </button>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
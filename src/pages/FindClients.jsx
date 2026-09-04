
// import { useState } from "react";
// import Sidebar from "../components/dashboard/Sidebar";

// const professions = [
//   "All Professions",
//   "Real Estate Agency",
//   "Dental Clinic",
//   "Restaurant",
//   "Hotel",
//   "Gym",
//   "Salon",
//   "Retail Store",
//   "Law Firm",
//   "Medical Clinic",
//   "Education",
// ];

// const popularLocations = [
//   "Mumbai",
//   "Delhi",
//   "Pune",
//   "Bangalore",
//   "Hyderabad",
//   "Chennai",
// ];

// const recentSearches = [
//   {
//     profession: "Real Estate Agency",
//     location: "Mumbai",
//     results: 124,
//   },
//   {
//     profession: "Dental Clinic",
//     location: "Delhi",
//     results: 86,
//   },
//   {
//     profession: "Restaurant",
//     location: "Pune",
//     results: 156,
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

// function MapPinIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-5 w-5"
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
//       className="h-5 w-5"
//     >
//       <rect x="3" y="7" width="18" height="13" rx="2" />
//       <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
//     </svg>
//   );
// }

// function ClockIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <circle cx="12" cy="12" r="9" />
//       <path d="M12 7v5l3 2" />
//     </svg>
//   );
// }

// function ArrowRightIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="h-4 w-4"
//     >
//       <path d="M5 12h14M13 6l6 6-6 6" />
//     </svg>
//   );
// }

// function SearchCard({ title, description, icon, children }) {
//   return (
//     <div className="rounded-xl border border-[#e7e3ef] bg-white p-5 shadow-sm">
//       <div className="mb-4 flex items-center gap-3">
//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
//           {icon}
//         </div>

//         <div>
//           <h3 className="text-sm font-semibold text-[#24232d]">
//             {title}
//           </h3>

//           <p className="mt-0.5 text-xs text-[#96929f]">
//             {description}
//           </p>
//         </div>
//       </div>

//       {children}
//     </div>
//   );
// }

// function FindClients({ onNavigate }) {
//   const [profession, setProfession] = useState("");
//   const [location, setLocation] = useState("");

//   const handleSearch = () => {
//     onNavigate("/search-results");
//   };

//   const handlePopularLocation = (city) => {
//     setLocation(city);
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
//       <div className="flex min-h-screen w-full">
//         <Sidebar onNavigate={onNavigate} />

//         <main className="min-w-0 flex-1">
//           <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">
//             <div className="relative w-full max-w-[520px]">
//               <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8797]">
//                 <SearchIcon />
//               </div>

//               <input
//                 type="text"
//                 placeholder="Search clients, leads..."
//                 className="h-10 w-full rounded-lg border border-[#e5e1ec] bg-[#fcfbff] pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-[#aaa5b2] focus:border-[#6554e8] focus:ring-2 focus:ring-[#6554e8]/10"
//               />
//             </div>

//             <div className="ml-6 flex items-center gap-5">
//               <button className="relative text-[#777384] transition hover:text-[#5141d8]">
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.7"
//                   className="h-5 w-5"
//                 >
//                   <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
//                   <path d="M10 21h4" />
//                 </svg>

//                 <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
//               </button>

//               <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-sm font-semibold text-white shadow-sm">
//                 P
//               </button>
//             </div>
//           </header>

//           <div className="w-full p-6 sm:p-8 lg:p-10">
//             <div className="animate-[fadeIn_.5s_ease-out]">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
//                     Find Clients
//                   </h1>

//                   <p className="mt-1 text-sm text-[#94909d]">
//                     Discover potential businesses and clients for your sales pipeline.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
//               <SearchCard
//                 title="Search by Profession"
//                 description="Find businesses based on their profession or category."
//                 icon={<BriefcaseIcon />}
//               >
//                 <div className="relative">
//                   <select
//                     value={profession}
//                     onChange={(e) => setProfession(e.target.value)}
//                     className="h-12 w-full appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   >
//                     <option value="" disabled>
//                       Select profession
//                     </option>

//                     {professions.map((item) => (
//                       <option key={item} value={item}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>

//                   <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       className="h-4 w-4"
//                     >
//                       <path d="m6 9 6 6 6-6" />
//                     </svg>
//                   </div>
//                 </div>
//               </SearchCard>

//               <SearchCard
//                 title="Search by Location"
//                 description="Target businesses in a specific city or area."
//                 icon={<MapPinIcon />}
//               >
//                 <div className="relative">
//                   <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     <MapPinIcon />
//                   </div>

//                   <input
//                     type="text"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     placeholder="Enter city or location"
//                     className="h-12 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] pl-12 pr-4 text-sm text-[#45424e] outline-none transition placeholder:text-[#aaa5b2] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
//                   />
//                 </div>
//               </SearchCard>
//             </div>

//             <div className="mt-5">
//               <button
//                 onClick={handleSearch}
//                 className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.99]"
//               >
//                 <SearchIcon />
//                 Search Clients
//               </button>
//             </div>

//             <div className="mt-8">
//               <div className="mb-4">
//                 <h2 className="text-base font-semibold text-[#272631]">
//                   Popular Locations
//                 </h2>

//                 <p className="mt-1 text-xs text-[#96929f]">
//                   Quickly search businesses in popular markets.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
//                 {popularLocations.map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => handlePopularLocation(item)}
//                     className="group flex items-center justify-center gap-2 rounded-lg border border-[#e4e0eb] bg-white px-4 py-3 text-sm font-medium text-[#686471] shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                   >
//                     <MapPinIcon />
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-8">
//               <div className="mb-4 flex items-center justify-between">
//                 <div>
//                   <h2 className="text-base font-semibold text-[#272631]">
//                     Recent Searches
//                   </h2>

//                   <p className="mt-1 text-xs text-[#96929f]">
//                     Continue working with your previous searches.
//                   </p>
//                 </div>

//                 <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">
//                   Clear all
//                 </button>
//               </div>

//               <div className="overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
//                 {recentSearches.map((search, index) => (
//                   <div
//                     key={`${search.profession}-${search.location}`}
//                     className={`flex flex-col gap-4 px-5 py-4 transition hover:bg-[#faf9fd] sm:flex-row sm:items-center sm:justify-between ${
//                       index !== recentSearches.length - 1
//                         ? "border-b border-[#eeeaf4]"
//                         : ""
//                     }`}
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f4f1fb] text-indigo-600">
//                         <ClockIcon />
//                       </div>

//                       <div>
//                         <div className="text-sm font-semibold text-[#292732]">
//                           {search.profession}
//                         </div>

//                         <div className="mt-1 flex items-center gap-1.5 text-xs text-[#94909d]">
//                           <MapPinIcon />
//                           {search.location}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between gap-5 sm:justify-end">
//                       <div className="text-right">
//                         <div className="text-sm font-semibold text-[#292732]">
//                           {search.results}
//                         </div>

//                         <div className="text-[10px] text-[#9b97a3]">
//                           businesses found
//                         </div>
//                       </div>

//                       <button
//                         onClick={handleSearch}
//                         className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e4e0eb] text-gray-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//                       >
//                         <ArrowRightIcon />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-8 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
//               <div className="flex gap-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
//                   <SearchIcon />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-indigo-900">
//                     Find your next potential client
//                   </h3>

//                   <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
//                     Search businesses by profession and location to discover
//                     potential clients. You can review their details and convert
//                     qualified businesses into leads from the search results.
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

// export default FindClients;



































import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/dashboard/Sidebar";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const professions = [
  "All Professions",
  "Real Estate Agency",
  "Dental Clinic",
  "Restaurant",
  "Hotel",
  "Gym",
  "Salon",
  "Retail Store",
  "Law Firm",
  "Medical Clinic",
  "Education",
];

const popularLocations = [
  "Mumbai",
  "Delhi",
  "Pune",
  "Bangalore",
  "Hyderabad",
  "Chennai",
];

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

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
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
      className="h-5 w-5"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function SearchCard({ title, description, icon, children }) {
  return (
    <div className="rounded-xl border border-[#e7e3ef] bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          {icon}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#24232d]">
            {title}
          </h3>

          <p className="mt-0.5 text-xs text-[#96929f]">
            {description}
          </p>
        </div>
      </div>

      {children}
    </div>
  );
}

function FindClients({ onNavigate }) {
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");

  const [recentSearches, setRecentSearches] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // --------------------------------------------------
  // Get JWT token
  // --------------------------------------------------
  const getToken = () => {
    return (
      localStorage.getItem("token") ||
      sessionStorage.getItem("token")
    );
  };

  // --------------------------------------------------
  // Load recent searches
  // --------------------------------------------------
  useEffect(() => {
    try {
      const savedSearches = localStorage.getItem(
        "tapcard_recent_client_searches"
      );

      if (savedSearches) {
        setRecentSearches(JSON.parse(savedSearches));
      }
    } catch (error) {
      console.error("Unable to load recent searches:", error);
    }
  }, []);

  // --------------------------------------------------
  // Save recent search
  // --------------------------------------------------
  const saveRecentSearch = (search) => {
    try {
      const existingSearches = [...recentSearches];

      const filtered = existingSearches.filter(
        (item) =>
          !(
            item.profession === search.profession &&
            item.location === search.location
          )
      );

      const updated = [search, ...filtered].slice(0, 5);

      setRecentSearches(updated);

      localStorage.setItem(
        "tapcard_recent_client_searches",
        JSON.stringify(updated)
      );
    } catch (error) {
      console.error("Unable to save recent search:", error);
    }
  };

  // --------------------------------------------------
  // Search clients
  // --------------------------------------------------
  const handleSearch = async (
    searchProfession = profession,
    searchLocation = location
  ) => {
    const selectedProfession =
      searchProfession === "All Professions"
        ? ""
        : searchProfession.trim();

    const selectedLocation = searchLocation.trim();

    if (!selectedProfession && !selectedLocation) {
      setError("Please select a profession or enter a location.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const token = getToken();

      if (!token) {
        alert("Your session has expired. Please login again.");
        window.location.href = "/login";
        return;
      }

      let clients = [];

      // --------------------------------------------------
      // Backend search API only supports q.
      //
      // If profession is selected, search backend by
      // profession/industry first.
      //
      // Otherwise search backend by location.
      // --------------------------------------------------
      const query = selectedProfession || selectedLocation;

      const response = await axios.get(
        `${API_BASE_URL}/potential-clients/search`,
        {
          params: {
            q: query,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        clients = response.data.clients || [];
      }

      // --------------------------------------------------
      // If location is also selected, filter the results
      // returned by backend.
      // --------------------------------------------------
      if (selectedLocation) {
        clients = clients.filter((client) =>
          String(client.location || "")
            .toLowerCase()
            .includes(selectedLocation.toLowerCase())
        );
      }

      // --------------------------------------------------
      // If profession is selected, make sure industry
      // matches the selected profession.
      // --------------------------------------------------
      if (selectedProfession) {
        clients = clients.filter((client) =>
          String(client.industry || "")
            .toLowerCase()
            .includes(selectedProfession.toLowerCase())
        );
      }

      // --------------------------------------------------
      // Save recent search
      // --------------------------------------------------
      saveRecentSearch({
        profession:
          searchProfession || "All Professions",
        location: selectedLocation || "All Locations",
        results: clients.length,
      });

      // --------------------------------------------------
      // Store current results for Search Results page.
      //
      // SearchResults integration will consume this data.
      // --------------------------------------------------
      sessionStorage.setItem(
        "tapcard_client_search_results",
        JSON.stringify(clients)
      );

      sessionStorage.setItem(
        "tapcard_client_search_filters",
        JSON.stringify({
          profession: searchProfession,
          location: selectedLocation,
        })
      );

      // --------------------------------------------------
      // Existing navigation preserved
      // --------------------------------------------------
      onNavigate("/search-results");
    } catch (error) {
      console.error("Find clients error:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");

        alert("Your session has expired. Please login again.");
        window.location.href = "/login";
        return;
      }

      setError(
        error.response?.data?.message ||
          "Unable to search clients. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // Popular location
  // --------------------------------------------------
  const handlePopularLocation = (city) => {
    setLocation(city);
    setError("");
  };

  // --------------------------------------------------
  // Recent search click
  // --------------------------------------------------
  const handleRecentSearch = (search) => {
    const recentProfession =
      search.profession === "All Professions"
        ? ""
        : search.profession;

    const recentLocation =
      search.location === "All Locations"
        ? ""
        : search.location;

    setProfession(search.profession);
    setLocation(recentLocation);

    handleSearch(recentProfession, recentLocation);
  };

  // --------------------------------------------------
  // Clear recent searches
  // --------------------------------------------------
  const handleClearRecentSearches = () => {
    setRecentSearches([]);

    localStorage.removeItem(
      "tapcard_recent_client_searches"
    );
  };

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
                placeholder="Search clients, leads..."
                className="h-10 w-full rounded-lg border border-[#e5e1ec] bg-[#fcfbff] pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-[#aaa5b2] focus:border-[#6554e8] focus:ring-2 focus:ring-[#6554e8]/10"
              />
            </div>

            <div className="ml-6 flex items-center gap-5">
              <button className="relative text-[#777384] transition hover:text-[#5141d8]">
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

                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-sm font-semibold text-white shadow-sm">
                P
              </button>
            </div>
          </header>

          <div className="w-full p-6 sm:p-8 lg:p-10">
            <div className="animate-[fadeIn_.5s_ease-out]">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#171720]">
                    Find Clients
                  </h1>

                  <p className="mt-1 text-sm text-[#94909d]">
                    Discover potential businesses and clients for your sales pipeline.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <SearchCard
                title="Search by Profession"
                description="Find businesses based on their profession or category."
                icon={<BriefcaseIcon />}
              >
                <div className="relative">
                  <select
                    value={profession}
                    onChange={(e) => {
                      setProfession(e.target.value);
                      setError("");
                    }}
                    className="h-12 w-full appearance-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] px-4 pr-10 text-sm text-[#45424e] outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  >
                    <option value="" disabled>
                      Select profession
                    </option>

                    {professions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </SearchCard>

              <SearchCard
                title="Search by Location"
                description="Target businesses in a specific city or area."
                icon={<MapPinIcon />}
              >
                <div className="relative">
                  <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <MapPinIcon />
                  </div>

                  <input
                    type="text"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter city or location"
                    className="h-12 w-full rounded-lg border border-[#e3dfeb] bg-[#fcfbff] pl-12 pr-4 text-sm text-[#45424e] outline-none transition placeholder:text-[#aaa5b2] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
              </SearchCard>
            </div>

            <div className="mt-5">
              {error && (
                <div className="mb-3 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <button
                onClick={() => handleSearch()}
                disabled={loading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="40 20"
                      />
                    </svg>

                    Searching...
                  </>
                ) : (
                  <>
                    <SearchIcon />
                    Search Clients
                  </>
                )}
              </button>
            </div>

            <div className="mt-8">
              <div className="mb-4">
                <h2 className="text-base font-semibold text-[#272631]">
                  Popular Locations
                </h2>

                <p className="mt-1 text-xs text-[#96929f]">
                  Quickly search businesses in popular markets.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {popularLocations.map((item) => (
                  <button
                    key={item}
                    onClick={() => handlePopularLocation(item)}
                    className="group flex items-center justify-center gap-2 rounded-lg border border-[#e4e0eb] bg-white px-4 py-3 text-sm font-medium text-[#686471] shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    <MapPinIcon />
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#272631]">
                    Recent Searches
                  </h2>

                  <p className="mt-1 text-xs text-[#96929f]">
                    Continue working with your previous searches.
                  </p>
                </div>

                {recentSearches.length > 0 && (
                  <button
                    onClick={handleClearRecentSearches}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div className="overflow-hidden rounded-xl border border-[#e5e1ed] bg-white shadow-sm">
                {recentSearches.length === 0 ? (
                  <div className="px-5 py-8 text-center text-sm text-[#96929f]">
                    No recent searches yet.
                  </div>
                ) : (
                  recentSearches.map((search, index) => (
                    <div
                      key={`${search.profession}-${search.location}`}
                      className={`flex flex-col gap-4 px-5 py-4 transition hover:bg-[#faf9fd] sm:flex-row sm:items-center sm:justify-between ${
                        index !== recentSearches.length - 1
                          ? "border-b border-[#eeeaf4]"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f4f1fb] text-indigo-600">
                          <ClockIcon />
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-[#292732]">
                            {search.profession}
                          </div>

                          <div className="mt-1 flex items-center gap-1.5 text-xs text-[#94909d]">
                            <MapPinIcon />
                            {search.location}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-5 sm:justify-end">
                        <div className="text-right">
                          <div className="text-sm font-semibold text-[#292732]">
                            {search.results}
                          </div>

                          <div className="text-[10px] text-[#9b97a3]">
                            businesses found
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            handleRecentSearch(search)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e4e0eb] text-gray-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          <ArrowRightIcon />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <SearchIcon />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-indigo-900">
                    Find your next potential client
                  </h3>

                  <p className="mt-1 max-w-3xl text-xs leading-5 text-indigo-700/80">
                    Search businesses by profession and location to discover
                    potential clients. You can review their details and convert
                    qualified businesses into leads from the search results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FindClients;
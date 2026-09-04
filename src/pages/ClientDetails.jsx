import Sidebar from "../components/dashboard/Sidebar";

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

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M6.5 3.5h3l1.5 4-2 1.5c1 2.1 2.7 3.8 4.8 4.8l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 18.3 5.7 13.5 4.2 6.7c-.3-1.7.7-3.2 2.3-3.2Z" />
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
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function UserPlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" />
      <path d="M18 8v6M15 11h6" />
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

function ClientDetails({ onNavigate }) {
  const client = {
    company: "Metro Realty",
    type: "Real Estate Agency",
    location: "Mumbai",
    phone: "+91 98765 43210",
    rating: "4.8",
    status: "New",
  };

  const handleConvertToLead = () => {
    onNavigate("/leads");
  };

  return (
    <div className="min-h-screen w-full bg-[#faf8ff] text-[#20202b]">
      <div className="flex min-h-screen w-full">
        <Sidebar onNavigate={onNavigate} />

        <main className="min-w-0 flex-1">
          <header className="flex h-[70px] items-center justify-between border-b border-[#eeeaf5] bg-white px-6 lg:px-8">
            <div />

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
            <button
              onClick={() => onNavigate("/search-results")}
              className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#66626f] transition hover:text-indigo-600"
            >
              <ArrowLeftIcon />
              Back to Search Results
            </button>

            <div className="mb-7">
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">
                Potential Client
              </p>

              <h1 className="mt-1 text-[30px] font-bold tracking-[-0.7px] text-[#171720]">
                {client.company}
              </h1>

              <p className="mt-1 text-sm text-[#94909d]">
                Review business information before converting this prospect
                into a lead.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4 border-b border-[#eeeaf4] pb-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl font-bold text-indigo-600">
                      {client.company.charAt(0)}
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-[#292732]">
                        {client.company}
                      </h2>

                      <p className="mt-1 text-sm text-[#96929f]">
                        {client.type}
                      </p>

                      <span className="mt-3 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                        {client.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="rounded-lg border border-[#eeeaf4] bg-[#fcfbff] p-4">
                      <div className="flex items-center gap-3 text-[#66626f]">
                        <MapPinIcon />
                        <div>
                          <p className="text-xs text-[#9995a1]">Location</p>
                          <p className="mt-1 text-sm font-semibold text-[#292732]">
                            {client.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#eeeaf4] bg-[#fcfbff] p-4">
                      <div className="flex items-center gap-3 text-[#66626f]">
                        <BriefcaseIcon />
                        <div>
                          <p className="text-xs text-[#9995a1]">Profession</p>
                          <p className="mt-1 text-sm font-semibold text-[#292732]">
                            {client.type}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#eeeaf4] bg-[#fcfbff] p-4">
                      <div className="flex items-center gap-3 text-[#66626f]">
                        <PhoneIcon />
                        <div>
                          <p className="text-xs text-[#9995a1]">Phone</p>
                          <p className="mt-1 text-sm font-semibold text-[#292732]">
                            {client.phone}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#eeeaf4] bg-[#fcfbff] p-4">
                      <div>
                        <p className="text-xs text-[#9995a1]">Rating</p>
                        <p className="mt-1 text-sm font-semibold text-[#292732]">
                          ⭐ {client.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">
                  <h2 className="text-base font-semibold text-[#272631]">
                    Internal Notes
                  </h2>

                  <textarea
                    placeholder="Add internal notes about this potential client..."
                    className="mt-4 min-h-[130px] w-full resize-none rounded-lg border border-[#e3dfeb] bg-[#fcfbff] p-4 text-sm text-[#45424e] outline-none placeholder:text-[#aaa5b2] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              <div>
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <UserPlusIcon />
                  </div>

                  <h2 className="mt-4 text-base font-semibold text-indigo-900">
                    Convert to Lead
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-indigo-700/80">
                    Add this business to your sales pipeline so your team can
                    start follow-ups and manage the opportunity.
                  </p>

                  <button
                    onClick={handleConvertToLead}
                    className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    <UserPlusIcon />
                    Convert to Lead
                  </button>
                </div>

                <div className="mt-6 rounded-xl border border-[#e5e1ed] bg-white p-6 shadow-sm">
                  <h2 className="text-base font-semibold text-[#272631]">
                    Business Summary
                  </h2>

                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-xs text-[#9995a1]">Business</p>
                      <p className="mt-1 text-sm font-semibold text-[#292732]">
                        {client.company}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-[#9995a1]">Category</p>
                      <p className="mt-1 text-sm font-semibold text-[#292732]">
                        {client.type}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-[#9995a1]">Market</p>
                      <p className="mt-1 text-sm font-semibold text-[#292732]">
                        {client.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ClientDetails;
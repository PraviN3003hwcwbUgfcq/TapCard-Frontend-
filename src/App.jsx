








// import { useState } from "react";

// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import FindClients from "./pages/FindClients";
// import SearchResults from "./pages/SearchResults";
// import ClientDetails from "./pages/ClientDetails";
// import LeadManagement from "./pages/LeadManagement";
// import LeadDetails from "./pages/LeadDetails";
//  if (path.startsWith("/lead-details/")) return "lead-details";
// import FollowUps from "./pages/FollowUps";
// import Demos from "./pages/Demos";
// import Quotations from "./pages/Quotations";
// import Orders from "./pages/Orders";
// import Production from "./pages/Production";
// import QualityChecks from "./pages/QualityChecks";
// import CardActivation from "./pages/CardActivation";
// import Cards from "./pages/Cards";
// import Delivery from "./pages/Delivery";
// import Payments from "./pages/Payments";
// import Clients from "./pages/Clients";
// import PublicCard from "./pages/PublicCard";


// import "./index.css";

// function App() {
//   const getPageFromPath = () => {
//     const path = window.location.pathname;

//     if (path === "/dashboard") return "dashboard";
//     if (path === "/find-clients") return "find-clients";
//     if (path === "/search-results") return "search-results";
//     if (path === "/client-details") return "client-details";
//     if (path === "/leads") return "leads";
//     if (path.startsWith("/lead-details/")) return "lead-details";
//     if (path === "/follow-ups") return "follow-ups";
//     if (path === "/demos") return "demos";
//     if (path === "/quotations") return "quotations";
//     if (path === "/orders") return "orders";
//     if (path === "/production") return "production";
//     if (path === "/quality-checks") return "quality-checks";
//     if (path === "/card-activation") return "card-activation";
//     if (path === "/cards") return "cards";
//     if (path === "/delivery") return "delivery";
//     if (path === "/payments") return "payments";
//     if (path === "/clients") return "clients";
//     if (page === "public-card") {return <PublicCard />;}

//     return "login";
//   };

//   const [page, setPage] = useState(getPageFromPath());

//   const navigate = (path) => {
//     window.history.pushState({}, "", path);
//     setPage(getPageFromPath());
//   };

//   if (page === "dashboard") {
//     return <Dashboard onNavigate={navigate} />;
//   }

//   if (page === "find-clients") {
//     return <FindClients onNavigate={navigate} />;
//   }

//   if (page === "search-results") {
//     return <SearchResults onNavigate={navigate} />;
//   }

//   if (page === "client-details") {
//     return <ClientDetails onNavigate={navigate} />;
//   }

//   if (page === "leads") {
//     return <LeadManagement onNavigate={navigate} />;
//   }

//   if (page === "lead-details") {
//   const leadId = window.location.pathname.split("/")[2];

//   return (
//     <LeadDetails
//       onNavigate={navigate}
//       leadId={leadId}
//     />
//   );
// }

//   if (page === "follow-ups") {
//     return <FollowUps onNavigate={navigate} />;
//   }


//    if (page === "demos") {
//     return <Demos onNavigate={navigate} />;
//   }

//   if (page === "quotations") {
//   return <Quotations onNavigate={navigate} />;
// }


//   if (page === "orders") {
//   return <Orders onNavigate={navigate} />;
// }

// if (page === "production") {
//   return <Production onNavigate={navigate} />;
// }

// if (page === "quality-checks") {
//   return <QualityChecks onNavigate={navigate} />;
// }

// if (page === "card-activation") {
//   return <CardActivation onNavigate={navigate} />;
// }

// if (page === "cards") {
//   return <Cards onNavigate={navigate} />;
// }

//   if (page === "delivery") {
//   return <Delivery onNavigate={navigate} />;
// }

// if (page === "payments") {
//   return <Payments onNavigate={navigate} />;
// }

// if (page === "clients") {
//   return <Clients onNavigate={navigate} />;
// }

// if (page === "public-card") {
//         return <PublicCard />;
//     }

 


//   return <Login onNavigate={navigate} />;




// }

// export default App;
























import { useState } from "react";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import FindClients from "./pages/FindClients";

import SearchResults from "./pages/SearchResults";

import ClientDetails from "./pages/ClientDetails";

import LeadManagement from "./pages/LeadManagement";

import LeadDetails from "./pages/LeadDetails";

import FollowUps from "./pages/FollowUps";

import Demos from "./pages/Demos";

import Quotations from "./pages/Quotations";

import Orders from "./pages/Orders";

import Production from "./pages/Production";

import QualityChecks from "./pages/QualityChecks";

import CardActivation from "./pages/CardActivation";

import Cards from "./pages/Cards";

import Delivery from "./pages/Delivery";

import Payments from "./pages/Payments";

import Clients from "./pages/Clients";

import PublicCard from "./pages/PublicCard";

import "./index.css";


function App() {

    const getPageFromPath = () => {

        const path = window.location.pathname;

        if (path === "/dashboard") return "dashboard";

        if (path === "/find-clients") return "find-clients";

        if (path === "/search-results") return "search-results";

        if (path === "/client-details") return "client-details";

        if (path === "/leads") return "leads";

        if (path.startsWith("/lead-details/")) {
            return "lead-details";
        }

        if (path === "/follow-ups") return "follow-ups";

        if (path === "/demos") return "demos";

        if (path === "/quotations") return "quotations";

        if (path === "/orders") return "orders";

        if (path === "/production") return "production";

        if (path === "/quality-checks") return "quality-checks";

        if (path === "/card-activation") {
            return "card-activation";
        }

        if (path === "/cards") return "cards";

        if (path === "/delivery") return "delivery";

        if (path === "/payments") return "payments";

        if (path === "/clients") return "clients";

        // Public QR Card
        if (path.startsWith("/public-card/")) {
            return "public-card";
        }

        return "login";
    };


    const [page, setPage] = useState(
        getPageFromPath()
    );


    const navigate = (path) => {

        window.history.pushState(
            {},
            "",
            path
        );

        setPage(
            getPageFromPath()
        );
    };


    if (page === "dashboard") {

        return (
            <Dashboard
                onNavigate={navigate}
            />
        );
    }


    if (page === "find-clients") {

        return (
            <FindClients
                onNavigate={navigate}
            />
        );
    }


    if (page === "search-results") {

        return (
            <SearchResults
                onNavigate={navigate}
            />
        );
    }


    if (page === "client-details") {

        return (
            <ClientDetails
                onNavigate={navigate}
            />
        );
    }


    if (page === "leads") {

        return (
            <LeadManagement
                onNavigate={navigate}
            />
        );
    }


    if (page === "lead-details") {

        const leadId =
            window.location.pathname.split("/")[2];

        return (
            <LeadDetails
                onNavigate={navigate}
                leadId={leadId}
            />
        );
    }


    if (page === "follow-ups") {

        return (
            <FollowUps
                onNavigate={navigate}
            />
        );
    }


    if (page === "demos") {

        return (
            <Demos
                onNavigate={navigate}
            />
        );
    }


    if (page === "quotations") {

        return (
            <Quotations
                onNavigate={navigate}
            />
        );
    }


    if (page === "orders") {

        return (
            <Orders
                onNavigate={navigate}
            />
        );
    }


    if (page === "production") {

        return (
            <Production
                onNavigate={navigate}
            />
        );
    }


    if (page === "quality-checks") {

        return (
            <QualityChecks
                onNavigate={navigate}
            />
        );
    }


    if (page === "card-activation") {

        return (
            <CardActivation
                onNavigate={navigate}
            />
        );
    }


    if (page === "cards") {

        return (
            <Cards
                onNavigate={navigate}
            />
        );
    }


    if (page === "delivery") {

        return (
            <Delivery
                onNavigate={navigate}
            />
        );
    }


    if (page === "payments") {

        return (
            <Payments
                onNavigate={navigate}
            />
        );
    }


    if (page === "clients") {

        return (
            <Clients
                onNavigate={navigate}
            />
        );
    }


    // Public Card
    if (page === "public-card") {

        return (
            <PublicCard />
        );
    }


    return (
        <Login
            onNavigate={navigate}
        />
    );
}


export default App;
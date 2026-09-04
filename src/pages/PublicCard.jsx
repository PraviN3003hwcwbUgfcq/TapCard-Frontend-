// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const PublicCard = () => {
//     const [card, setCard] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         const loadCard = async () => {
//             try {
//                 setLoading(true);
//                 setError("");

//                 const pathParts =
//                     window.location.pathname.split("/");

//                 const cardId = pathParts[2];

//                 if (!cardId) {
//                     setError("Card ID not found.");
//                     return;
//                 }

//                 const response = await api.get(
//                     `/cards/public/${cardId}`
//                 );

//                 if (response?.data?.success && response?.data?.card) {
//                     setCard(response.data.card);
//                 } else {
//                     setError(
//                         response?.data?.message ||
//                         "Card not found."
//                     );
//                 }
//             } catch (err) {
//                 console.error("Public card error:", err);

//                 setError(
//                     err?.response?.data?.message ||
//                     "Unable to load card."
//                 );
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadCard();
//     }, []);

//     if (loading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-gray-100">
//                 <p className="text-gray-600">
//                     Loading card...
//                 </p>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//                 <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
//                     <h2 className="text-xl font-semibold text-gray-800">
//                         Card Not Found
//                     </h2>

//                     <p className="mt-2 text-sm text-gray-500">
//                         {error}
//                     </p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 px-4 py-10">
//             <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-xl">

//                 {card.profileImage ? (
//                     <img
//                         src={card.profileImage}
//                         alt={card.fullName}
//                         className="h-32 w-32 mx-auto mt-8 rounded-full object-cover border-4 border-white shadow"
//                     />
//                 ) : (
//                     <div className="mx-auto mt-8 flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 text-4xl font-bold text-gray-500">
//                         {card.fullName?.charAt(0)?.toUpperCase() || "C"}
//                     </div>
//                 )}

//                 <div className="px-6 pb-8 pt-5 text-center">

//                     <h1 className="text-2xl font-bold text-gray-900">
//                         {card.fullName}
//                     </h1>

//                     {card.designation && (
//                         <p className="mt-1 text-sm font-medium text-gray-600">
//                             {card.designation}
//                         </p>
//                     )}

//                     {card.company && (
//                         <p className="mt-1 text-sm text-gray-500">
//                             {card.company}
//                         </p>
//                     )}

//                     {card.bio && (
//                         <p className="mt-5 text-sm leading-6 text-gray-600">
//                             {card.bio}
//                         </p>
//                     )}

//                     <div className="mt-6 space-y-3 text-left">

//                         {card.phone && (
//                             <a
//                                 href={`tel:${card.phone}`}
//                                 className="block rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-700"
//                             >
//                                 📞 {card.phone}
//                             </a>
//                         )}

//                         {card.email && (
//                             <a
//                                 href={`mailto:${card.email}`}
//                                 className="block rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-700"
//                             >
//                                 ✉️ {card.email}
//                             </a>
//                         )}

//                         {card.website && (
//                             <a
//                                 href={
//                                     card.website.startsWith("http")
//                                         ? card.website
//                                         : `https://${card.website}`
//                                 }
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="block rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-700"
//                             >
//                                 🌐 {card.website}
//                             </a>
//                         )}

//                         {card.address && (
//                             <div className="rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-700">
//                                 📍 {card.address}
//                             </div>
//                         )}

//                     </div>

//                     {card.socialLinks && (
//                         <div className="mt-6 flex justify-center gap-3">

//                             {card.socialLinks.linkedin && (
//                                 <a
//                                     href={card.socialLinks.linkedin}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="rounded-lg bg-gray-100 px-4 py-2 text-sm"
//                                 >
//                                     LinkedIn
//                                 </a>
//                             )}

//                             {card.socialLinks.instagram && (
//                                 <a
//                                     href={card.socialLinks.instagram}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="rounded-lg bg-gray-100 px-4 py-2 text-sm"
//                                 >
//                                     Instagram
//                                 </a>
//                             )}

//                             {card.socialLinks.facebook && (
//                                 <a
//                                     href={card.socialLinks.facebook}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="rounded-lg bg-gray-100 px-4 py-2 text-sm"
//                                 >
//                                     Facebook
//                                 </a>
//                             )}

//                             {card.socialLinks.twitter && (
//                                 <a
//                                     href={card.socialLinks.twitter}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="rounded-lg bg-gray-100 px-4 py-2 text-sm"
//                                 >
//                                     Twitter
//                                 </a>
//                             )}

//                         </div>
//                     )}

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PublicCard;





























import { useEffect, useState } from "react";
import api from "../api/axios";

const PublicCard = () => {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const pathParts = window.location.pathname.split("/");
                const cardId = pathParts[2];

                if (!cardId) {
                    setError("Card ID not found");
                    setLoading(false);
                    return;
                }

                const response = await api.get(
                    `/cards/public/${cardId}`
                );

                if (response.data?.success) {
                    setCard(response.data.card);
                } else {
                    setError(
                        response.data?.message ||
                            "Card not found"
                    );
                }
            } catch (err) {
                console.error("Public card error:", err);

                setError(
                    err.response?.data?.message ||
                        "Unable to load card"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCard();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto"></div>

                    <p className="mt-4 text-gray-600 text-sm">
                        Loading card...
                    </p>
                </div>
            </div>
        );
    }

    if (error || !card) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full">
                    <div className="text-5xl mb-4">⚠️</div>

                    <h2 className="text-xl font-semibold text-gray-900">
                        Card Not Found
                    </h2>

                    <p className="text-gray-500 mt-2">
                        {error || "Unable to load this card."}
                    </p>
                </div>
            </div>
        );
    }

    const socialLinks = card.socialLinks || {};

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">

            {/* Activation Status */}
            <div className="mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>

                <span className="text-sm font-medium text-green-700">
                    QR Activated
                </span>
            </div>

            {/* Card Container */}
            <div
                className="w-full max-w-[420px]"
                style={{
                    perspective: "1200px",
                }}
            >
                <div
                    onClick={() => setFlipped(!flipped)}
                    className="relative w-full cursor-pointer"
                    style={{
                        aspectRatio: "1.65 / 1",
                        transformStyle: "preserve-3d",
                        transition:
                            "transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1)",
                        transform: flipped
                            ? "rotateY(180deg)"
                            : "rotateY(0deg)",
                    }}
                >

                    {/* ================= FRONT ================= */}
                    <div
                        className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                        style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                        }}
                    >
                        {/* Card Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-800 to-gray-950"></div>

                        {/* Decorative Circle */}
                        <div className="absolute -right-20 -top-20 w-52 h-52 rounded-full bg-white/5"></div>

                        <div className="absolute -left-20 -bottom-24 w-56 h-56 rounded-full bg-white/5"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full p-7 flex flex-col justify-between text-white">

                            {/* Top */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-[0.3em] uppercase text-white/60">
                                        TapCard
                                    </p>

                                    <p className="text-[10px] text-white/40 mt-1">
                                        DIGITAL BUSINESS CARD
                                    </p>
                                </div>

                                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                                    <span className="text-sm font-bold">
                                        TC
                                    </span>
                                </div>
                            </div>

                            {/* Middle */}
                            <div>
                                <div className="flex items-center gap-4">

                                    {/* Profile Image */}
                                    {card.profileImage ? (
                                        <img
                                            src={card.profileImage}
                                            alt={card.fullName}
                                            className="w-16 h-16 rounded-2xl object-cover border-2 border-white/20"
                                        />
                                    ) : (
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                                            <span className="text-xl font-semibold">
                                                {card.fullName
                                                    ?.charAt(0)
                                                    ?.toUpperCase()}
                                            </span>
                                        </div>
                                    )}

                                    <div>
                                        <h1 className="text-2xl font-bold tracking-tight">
                                            {card.fullName}
                                        </h1>

                                        {card.designation && (
                                            <p className="text-sm text-white/70 mt-1">
                                                {card.designation}
                                            </p>
                                        )}

                                        {card.company && (
                                            <p className="text-xs text-white/50 mt-1">
                                                {card.company}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="flex items-end justify-between gap-4">

                                <div className="space-y-1 text-xs text-white/60">
                                    {card.phone && (
                                        <p>{card.phone}</p>
                                    )}

                                    {card.email && (
                                        <p>{card.email}</p>
                                    )}

                                    {card.website && (
                                        <p>{card.website}</p>
                                    )}
                                </div>

                                <div className="text-[10px] text-white/40 text-right">
                                    Tap card<br />
                                    to flip
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* ================= BACK ================= */}
                    <div
                        className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                        style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                        }}
                    >
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>

                        <div className="absolute -right-20 -top-20 w-52 h-52 rounded-full bg-white/5"></div>

                        <div className="absolute -left-20 -bottom-24 w-56 h-56 rounded-full bg-white/5"></div>

                        {/* Back Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-white">

                            <p className="text-xs tracking-[0.35em] uppercase text-white/50 mb-4">
                                Scan to Connect
                            </p>

                            {/* QR */}
                            <div className="bg-white p-4 rounded-2xl shadow-xl">
                                {card.qrCode ? (
                                    <img
                                        src={card.qrCode}
                                        alt="QR Code"
                                        className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
                                    />
                                ) : (
                                    <div className="w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center text-gray-500 text-xs text-center">
                                        QR Code<br />
                                        Not Available
                                    </div>
                                )}
                            </div>

                            <h2 className="mt-4 text-lg font-semibold">
                                {card.fullName}
                            </h2>

                            {card.company && (
                                <p className="text-xs text-white/50 mt-1">
                                    {card.company}
                                </p>
                            )}

                            {/* Social Links */}
                            <div className="flex items-center gap-3 mt-4">

                                {socialLinks.linkedin && (
                                    <a
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) =>
                                            e.stopPropagation()
                                        }
                                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition"
                                    >
                                        in
                                    </a>
                                )}

                                {socialLinks.instagram && (
                                    <a
                                        href={socialLinks.instagram}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) =>
                                            e.stopPropagation()
                                        }
                                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition"
                                    >
                                        ig
                                    </a>
                                )}

                                {socialLinks.facebook && (
                                    <a
                                        href={socialLinks.facebook}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) =>
                                            e.stopPropagation()
                                        }
                                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition"
                                    >
                                        f
                                    </a>
                                )}

                            </div>

                            <p className="absolute bottom-5 text-[10px] text-white/30">
                                Tap card to flip back
                            </p>

                        </div>
                    </div>

                </div>
            </div>

            {/* Helper Text */}
            <p className="mt-6 text-xs text-gray-400">
                Tap the card to view QR code
            </p>

        </div>
    );
};

export default PublicCard;
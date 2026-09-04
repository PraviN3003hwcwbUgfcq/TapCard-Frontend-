import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import api from "../api/axios";

/* =========================================================
   API ENDPOINTS
========================================================= */

const ORDERS_API = "/orders";
const ACTIVATIONS_API = "/card-activations";
const SHIPMENTS_API = "/shipments";

/* =========================================================
   ICONS
========================================================= */

const SearchIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

const BellIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const XIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const EyeIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TruckIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 6h11v11H3z" />
    <path d="M14 10h4l3 3v4h-7z" />
    <circle cx="7.5" cy="19" r="2" />
    <circle cx="17.5" cy="19" r="2" />
  </svg>
);

const PackageIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m21 8-9-5-9 5 9 5 9-5Z" />
    <path d="M3 8v9l9 5 9-5V8" />
    <path d="M12 13v9" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

/* =========================================================
   HELPERS
========================================================= */

const getId = (value) => {
  if (!value) return "";

  if (typeof value === "string") {
    return value;
  }

  return value._id || value.id || "";
};

const formatDate = (date) => {
  if (!date) return "-";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "-";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatDateTime = (date) => {
  if (!date) return "-";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "-";
  }

  return parsedDate.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/* =========================================================
   STATUS BADGE
========================================================= */

const StatusBadge = ({ status }) => {
  const styles = {
    Ready: "bg-amber-50 text-amber-700 border border-amber-200",
    Shipped: "bg-blue-50 text-blue-700 border border-blue-200",
    Delivered: "bg-green-50 text-green-700 border border-green-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] ||
        "bg-gray-50 text-gray-700 border border-gray-200"
      }`}
    >
      {status || "Unknown"}
    </span>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Delivery = ({ onNavigate }) => {
  /* =======================================================
     STATES
  ======================================================= */

  const [shipments, setShipments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activations, setActivations] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  /* =======================================================
     MODALS
  ======================================================= */

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const [selectedShipment, setSelectedShipment] = useState(null);

  /* =======================================================
     CREATE FORM
  ======================================================= */

  const [createForm, setCreateForm] = useState({
    order: "",
    activation: "",
    shippingAddress: "",
    remarks: "",
  });

  /* =======================================================
     STATUS FORM
  ======================================================= */

  const [statusForm, setStatusForm] = useState({
    status: "Ready",
    courierName: "",
    trackingNumber: "",
    remarks: "",
  });

  /* =======================================================
     FETCH SHIPMENTS
  ======================================================= */

  const fetchShipments = async () => {
    try {
      const response = await api.get(SHIPMENTS_API);

      const data = response?.data;

      if (Array.isArray(data)) {
        setShipments(data);
      } else if (Array.isArray(data?.shipments)) {
        setShipments(data.shipments);
      } else if (Array.isArray(data?.data)) {
        setShipments(data.data);
      } else {
        setShipments([]);
      }
    } catch (err) {
      console.error("Fetch shipments error:", err);

      throw new Error(
        err?.response?.data?.message ||
          "Failed to load shipments"
      );
    }
  };

  /* =======================================================
     FETCH ORDERS
  ======================================================= */

  const fetchOrders = async () => {
    try {
      const response = await api.get(ORDERS_API);

      const data = response?.data;

      if (Array.isArray(data)) {
        setOrders(data);
      } else if (Array.isArray(data?.orders)) {
        setOrders(data.orders);
      } else if (Array.isArray(data?.data)) {
        setOrders(data.data);
      } else {
        setOrders([]);
      }
    } catch (err) {
      console.error("Fetch orders error:", err);
      setOrders([]);
    }
  };

  /* =======================================================
     FETCH CARD ACTIVATIONS
  ======================================================= */

  const fetchActivations = async () => {
    try {
      const response = await api.get(ACTIVATIONS_API);

      const data = response?.data;

      if (Array.isArray(data)) {
        setActivations(data);
      } else if (Array.isArray(data?.activations)) {
        setActivations(data.activations);
      } else if (Array.isArray(data?.cardActivations)) {
        setActivations(data.cardActivations);
      } else if (Array.isArray(data?.data)) {
        setActivations(data.data);
      } else {
        setActivations([]);
      }
    } catch (err) {
      console.error("Fetch activations error:", err);
      setActivations([]);
    }
  };

  /* =======================================================
     INITIAL LOAD
  ======================================================= */

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError("");

      try {
        await Promise.all([
          fetchShipments(),
          fetchOrders(),
          fetchActivations(),
        ]);
      } catch (err) {
        console.error(err);

        setError(
          err?.message || "Unable to load delivery data."
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  /* =======================================================
     CLEAR MESSAGES
  ======================================================= */

  useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  /* =======================================================
     REFRESH SHIPMENTS
  ======================================================= */

  const refreshShipments = async () => {
    try {
      await fetchShipments();
    } catch (err) {
      console.error("Refresh shipments error:", err);
    }
  };

  /* =======================================================
     CREATE SHIPMENT
  ======================================================= */

  const handleCreateShipment = async (event) => {
    event.preventDefault();

    setError("");
    setSuccessMessage("");

    if (!createForm.order) {
      setError("Please select an order.");
      return;
    }

    if (!createForm.activation) {
      setError("Please select a fully activated card.");
      return;
    }

    if (!createForm.shippingAddress.trim()) {
      setError("Shipping address is required.");
      return;
    }

    setSaving(true);

    try {
      const payload = {
        order: createForm.order,
        activation: createForm.activation,
        shippingAddress: createForm.shippingAddress.trim(),
        remarks: createForm.remarks.trim(),
      };

      const response = await api.post(
        SHIPMENTS_API,
        payload
      );

      console.log("Shipment created:", response.data);

      await refreshShipments();

      setCreateForm({
        order: "",
        activation: "",
        shippingAddress: "",
        remarks: "",
      });

      setShowCreateModal(false);

      setSuccessMessage(
        response?.data?.message ||
          "Shipment created successfully."
      );
    } catch (err) {
      console.error("Create shipment error:", err);

      setError(
        err?.response?.data?.message ||
          "Failed to create shipment."
      );
    } finally {
      setSaving(false);
    }
  };

  /* =======================================================
     VIEW SHIPMENT
  ======================================================= */

  const handleViewShipment = async (shipment) => {
    setError("");

    try {
      const shipmentId = getId(shipment);

      if (!shipmentId) {
        setSelectedShipment(shipment);
        setShowViewModal(true);
        return;
      }

      const response = await api.get(
        `${SHIPMENTS_API}/${shipmentId}`
      );

      const data = response?.data;

      setSelectedShipment(
        data?.shipment ||
          data?.data ||
          data
      );

      setShowViewModal(true);
    } catch (err) {
      console.error("View shipment error:", err);

      setSelectedShipment(shipment);
      setShowViewModal(true);
    }
  };

  /* =======================================================
     OPEN STATUS MODAL
  ======================================================= */

  const handleOpenStatusModal = (shipment) => {
    setSelectedShipment(shipment);

    setStatusForm({
      status: shipment?.status || "Ready",
      courierName: shipment?.courierName || "",
      trackingNumber: shipment?.trackingNumber || "",
      remarks: shipment?.remarks || "",
    });

    setError("");
    setSuccessMessage("");

    setShowStatusModal(true);
  };

  /* =======================================================
     UPDATE SHIPMENT STATUS
  ======================================================= */

  const handleUpdateStatus = async (event) => {
    event.preventDefault();

    setError("");
    setSuccessMessage("");

    if (!selectedShipment) {
      setError("Shipment not selected.");
      return;
    }

    if (!statusForm.status) {
      setError("Please select shipment status.");
      return;
    }

    if (
      statusForm.status === "Shipped" &&
      !statusForm.courierName.trim()
    ) {
      setError("Courier name is required when shipping.");
      return;
    }

    if (
      statusForm.status === "Shipped" &&
      !statusForm.trackingNumber.trim()
    ) {
      setError(
        "Tracking number is required when shipping."
      );
      return;
    }

    setSaving(true);

    try {
      const shipmentId = getId(selectedShipment);

      const payload = {
        status: statusForm.status,
        courierName: statusForm.courierName.trim(),
        trackingNumber:
          statusForm.trackingNumber.trim(),
        remarks: statusForm.remarks.trim(),
      };

      const response = await api.put(
        `${SHIPMENTS_API}/${shipmentId}/status`,
        payload
      );

      console.log(
        "Shipment status updated:",
        response.data
      );

      await refreshShipments();

      setShowStatusModal(false);

      setSuccessMessage(
        response?.data?.message ||
          "Shipment status updated successfully."
      );

      setSelectedShipment(null);
    } catch (err) {
      console.error(
        "Update shipment status error:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "Failed to update shipment status."
      );
    } finally {
      setSaving(false);
    }
  };

  /* =======================================================
     FILTERED SHIPMENTS
  ======================================================= */

  const filteredShipments = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return shipments.filter((shipment) => {
      const orderNumber =
        shipment?.order?.orderNumber || "";

      const shippingAddress =
        shipment?.shippingAddress || "";

      const courierName =
        shipment?.courierName || "";

      const trackingNumber =
        shipment?.trackingNumber || "";

      const status =
        shipment?.status || "";

      const searchMatch =
        !search ||
        orderNumber.toLowerCase().includes(search) ||
        shippingAddress.toLowerCase().includes(search) ||
        courierName.toLowerCase().includes(search) ||
        trackingNumber.toLowerCase().includes(search) ||
        status.toLowerCase().includes(search);

      const statusMatch =
        statusFilter === "All" ||
        status === statusFilter;

      return searchMatch && statusMatch;
    });
  }, [
    shipments,
    searchTerm,
    statusFilter,
  ]);

  /* =======================================================
     KPI COUNTS
  ======================================================= */

  const totalShipments = shipments.length;

  const readyCount = shipments.filter(
    (shipment) => shipment.status === "Ready"
  ).length;

  const shippedCount = shipments.filter(
    (shipment) => shipment.status === "Shipped"
  ).length;

  const deliveredCount = shipments.filter(
    (shipment) => shipment.status === "Delivered"
  ).length;

  /* =======================================================
     ACTIVATION FILTER
     Only Fully Activated cards can create shipment.
  ======================================================= */

  const fullyActivatedCards = activations.filter(
    (activation) =>
      activation?.status === "Fully Activated"
  );

  /* =======================================================
     CLOSE MODALS
  ======================================================= */

  const closeCreateModal = () => {
    if (saving) return;

    setShowCreateModal(false);

    setCreateForm({
      order: "",
      activation: "",
      shippingAddress: "",
      remarks: "",
    });

    setError("");
  };

  const closeViewModal = () => {
    setShowViewModal(false);
    setSelectedShipment(null);
  };

  const closeStatusModal = () => {
    if (saving) return;

    setShowStatusModal(false);
    setSelectedShipment(null);
    setError("");
  };

  /* =======================================================
     RENDER
  ======================================================= */

 return (
  <div className="min-h-screen bg-gray-50">

    {/* Delivery page only - fixed sidebar */}
    <div className="hidden lg:block">
      <div className="fixed left-0 top-0 z-40 h-screen w-[240px]">
        <Sidebar onNavigate={onNavigate} />
      </div>
    </div>

    <div className="ml-0 min-h-screen lg:ml-[240px]">
        {/* =================================================
            TOP HEADER
        ================================================= */}

        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6">
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              Delivery
            </h1>

            <p className="hidden text-xs text-gray-500 sm:block">
              Manage card shipments and deliveries
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="relative rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
            >
              <BellIcon />

              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </button>
          </div>
        </header>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main className="p-4 sm:p-6 lg:p-8">
          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Delivery Management
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Track ready, shipped and delivered cards.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setError("");
                setShowCreateModal(true);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <PlusIcon />
              Create Shipment
            </button>
          </div>

          {/* =================================================
              SUCCESS MESSAGE
          ================================================= */}

          {successMessage && (
            <div className="mb-5 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              <CheckIcon />
              <span>{successMessage}</span>
            </div>
          )}

          {/* =================================================
              ERROR MESSAGE
          ================================================= */}

          {error && (
            <div className="mb-5 flex items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <span>{error}</span>

              <button
                type="button"
                onClick={() => setError("")}
                className="rounded p-1 hover:bg-red-100"
              >
                <XIcon />
              </button>
            </div>
          )}

          {/* =================================================
              KPI CARDS
          ================================================= */}

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Total */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Shipments
                  </p>

                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {totalShipments}
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                  <PackageIcon />
                </div>
              </div>
            </div>

            {/* Ready */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Ready
                  </p>

                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {readyCount}
                  </p>
                </div>

                <div className="rounded-lg bg-amber-50 p-3 text-amber-600">
                  <PackageIcon />
                </div>
              </div>
            </div>

            {/* Shipped */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Shipped
                  </p>

                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {shippedCount}
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                  <TruckIcon />
                </div>
              </div>
            </div>

            {/* Delivered */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Delivered
                  </p>

                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {deliveredCount}
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-3 text-green-600">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              SEARCH / FILTER
          ================================================= */}

          <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <SearchIcon />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="Search by order, address, courier or tracking number..."
                  className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(event.target.value)
                }
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 md:w-48"
              >
                <option value="All">All Status</option>
                <option value="Ready">Ready</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">
                  Delivered
                </option>
              </select>
            </div>
          </div>

          {/* =================================================
              SHIPMENTS TABLE
          ================================================= */}

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Shipments
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {filteredShipments.length} shipment
                  {filteredShipments.length !== 1
                    ? "s"
                    : ""}{" "}
                  found
                </p>
              </div>
            </div>

            {loading ? (
              <div className="flex min-h-[300px] items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

                  <p className="text-sm text-gray-500">
                    Loading shipments...
                  </p>
                </div>
              </div>
            ) : filteredShipments.length === 0 ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center px-5 text-center">
                <div className="mb-4 rounded-full bg-gray-100 p-4 text-gray-500">
                  <PackageIcon />
                </div>

                <h4 className="font-semibold text-gray-800">
                  No shipments found
                </h4>

                <p className="mt-1 max-w-md text-sm text-gray-500">
                  There are no shipments matching your current
                  search or filter.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-[1000px] w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Order
                      </th>

                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Address
                      </th>

                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Courier
                      </th>

                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Tracking
                      </th>

                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Status
                      </th>

                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Created
                      </th>

                      <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {filteredShipments.map(
                      (shipment) => (
                        <tr
                          key={getId(shipment)}
                          className="transition hover:bg-gray-50"
                        >
                          {/* Order */}
                          <td className="px-5 py-4">
                            <div>
                              <p className="font-semibold text-gray-800">
                                {shipment?.order
                                  ?.orderNumber ||
                                  "-"}
                              </p>

                              <p className="mt-1 text-xs text-gray-500">
                                Order Status:{" "}
                                {shipment?.order
                                  ?.status || "-"}
                              </p>
                            </div>
                          </td>

                          {/* Address */}
                          <td className="max-w-xs px-5 py-4">
                            <div className="flex gap-2">
                              <MapPinIcon />

                              <p className="line-clamp-2 text-sm text-gray-600">
                                {shipment?.shippingAddress ||
                                  "-"}
                              </p>
                            </div>
                          </td>

                          {/* Courier */}
                          <td className="px-5 py-4">
                            <p className="text-sm text-gray-700">
                              {shipment?.courierName ||
                                "-"}
                            </p>
                          </td>

                          {/* Tracking */}
                          <td className="px-5 py-4">
                            <p className="text-sm font-medium text-gray-700">
                              {shipment?.trackingNumber ||
                                "-"}
                            </p>
                          </td>

                          {/* Status */}
                          <td className="px-5 py-4">
                            <StatusBadge
                              status={shipment?.status}
                            />
                          </td>

                          {/* Created */}
                          <td className="px-5 py-4">
                            <p className="text-sm text-gray-600">
                              {formatDate(
                                shipment?.createdAt
                              )}
                            </p>
                          </td>

                          {/* Actions */}
                          <td className="px-5 py-4">
                            <div className="flex justify-end gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  handleViewShipment(
                                    shipment
                                  )
                                }
                                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                              >
                                <EyeIcon />
                                View
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  handleOpenStatusModal(
                                    shipment
                                  )
                                }
                                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                              >
                                <TruckIcon />
                                Update
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* =====================================================
          CREATE SHIPMENT MODAL
      ===================================================== */}

      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Create Shipment
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Mark a fully activated card as ready for
                  shipment.
                </p>
              </div>

              <button
                type="button"
                onClick={closeCreateModal}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
              >
                <XIcon />
              </button>
            </div>

            {/* Body */}
            <form
              onSubmit={handleCreateShipment}
              className="space-y-5 p-6"
            >
              {/* Order */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Order <span className="text-red-500">*</span>
                </label>

                <select
                  value={createForm.order}
                  onChange={(event) =>
                    setCreateForm((prev) => ({
                      ...prev,
                      order: event.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">
                    Select Order
                  </option>

                  {orders.map((order) => (
                    <option
                      key={getId(order)}
                      value={getId(order)}
                    >
                      {order?.orderNumber ||
                        getId(order)}
                      {order?.status
                        ? ` - ${order.status}`
                        : ""}
                    </option>
                  ))}
                </select>

                {orders.length === 0 && (
                  <p className="mt-1 text-xs text-gray-500">
                    No orders available.
                  </p>
                )}
              </div>

              {/* Activation */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Card Activation{" "}
                  <span className="text-red-500">*</span>
                </label>

                <select
                  value={createForm.activation}
                  onChange={(event) =>
                    setCreateForm((prev) => ({
                      ...prev,
                      activation: event.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">
                    Select Fully Activated Card
                  </option>

                  {fullyActivatedCards.map(
                    (activation) => (
                      <option
                        key={getId(activation)}
                        value={getId(activation)}
                      >
                        {activation?.card
                          ?.fullName ||
                          activation?.card
                            ?.cardNumber ||
                          getId(activation)}{" "}
                        - Fully Activated
                      </option>
                    )
                  )}
                </select>

                {fullyActivatedCards.length === 0 && (
                  <p className="mt-1 text-xs text-amber-600">
                    No fully activated cards available.
                  </p>
                )}
              </div>

              {/* Shipping Address */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Shipping Address{" "}
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows={4}
                  value={createForm.shippingAddress}
                  onChange={(event) =>
                    setCreateForm((prev) => ({
                      ...prev,
                      shippingAddress:
                        event.target.value,
                    }))
                  }
                  placeholder="Enter complete shipping address"
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Remarks */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Remarks
                </label>

                <textarea
                  rows={3}
                  value={createForm.remarks}
                  onChange={(event) =>
                    setCreateForm((prev) => ({
                      ...prev,
                      remarks: event.target.value,
                    }))
                  }
                  placeholder="Optional remarks"
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Info */}
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs text-blue-700">
                <strong>Note:</strong> New shipments are
                automatically created with status{" "}
                <strong>Ready</strong>.
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
                <button
                  type="button"
                  onClick={closeCreateModal}
                  disabled={saving}
                  className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  )}

                  {saving
                    ? "Creating..."
                    : "Create Shipment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================
          VIEW SHIPMENT MODAL
      ===================================================== */}

      {showViewModal && selectedShipment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Shipment Details
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Shipment ID:{" "}
                  {getId(selectedShipment) || "-"}
                </p>
              </div>

              <button
                type="button"
                onClick={closeViewModal}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
              >
                <XIcon />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-6 p-6">
              {/* Status */}
              <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Shipment Status
                  </p>

                  <div className="mt-2">
                    <StatusBadge
                      status={
                        selectedShipment.status
                      }
                    />
                  </div>
                </div>

                <TruckIcon />
              </div>

              {/* Order + Activation */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Order
                  </p>

                  <p className="mt-2 font-semibold text-gray-900">
                    {selectedShipment?.order
                      ?.orderNumber ||
                      "-"}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Status:{" "}
                    {selectedShipment?.order
                      ?.status || "-"}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Activation
                  </p>

                  <p className="mt-2 font-semibold text-gray-900">
                    {selectedShipment?.activation
                      ?.status || "-"}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Activation ID:{" "}
                    {getId(
                      selectedShipment.activation
                    ) || "-"}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-xl border border-gray-200 p-4">
                <div className="flex items-center gap-2">
                  <MapPinIcon />

                  <p className="text-sm font-semibold text-gray-800">
                    Shipping Address
                  </p>
                </div>

                <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                  {selectedShipment.shippingAddress ||
                    "-"}
                </p>
              </div>

              {/* Courier Details */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Courier
                  </p>

                  <p className="mt-2 text-sm font-semibold text-gray-800">
                    {selectedShipment.courierName ||
                      "-"}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Tracking Number
                  </p>

                  <p className="mt-2 break-all text-sm font-semibold text-gray-800">
                    {selectedShipment.trackingNumber ||
                      "-"}
                  </p>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Created
                  </p>

                  <p className="mt-2 text-sm text-gray-700">
                    {formatDateTime(
                      selectedShipment.createdAt
                    )}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Shipped
                  </p>

                  <p className="mt-2 text-sm text-gray-700">
                    {formatDateTime(
                      selectedShipment.shippedDate
                    )}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Delivered
                  </p>

                  <p className="mt-2 text-sm text-gray-700">
                    {formatDateTime(
                      selectedShipment.deliveredDate
                    )}
                  </p>
                </div>
              </div>

              {/* Remarks */}
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Remarks
                </p>

                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                  {selectedShipment.remarks || "-"}
                </p>
              </div>

              {/* Created By */}
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Created By
                </p>

                <p className="mt-2 text-sm font-semibold text-gray-800">
                  {selectedShipment?.createdBy
                    ?.name || "-"}
                </p>

                {selectedShipment?.createdBy
                  ?.email && (
                  <p className="mt-1 text-sm text-gray-500">
                    {
                      selectedShipment.createdBy
                        .email
                    }
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="flex justify-end border-t border-gray-100 pt-5">
                <button
                  type="button"
                  onClick={closeViewModal}
                  className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          UPDATE STATUS MODAL
      ===================================================== */}

      {showStatusModal && selectedShipment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Update Shipment
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Order:{" "}
                  {selectedShipment?.order
                    ?.orderNumber || "-"}
                </p>
              </div>

              <button
                type="button"
                onClick={closeStatusModal}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
              >
                <XIcon />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleUpdateStatus}
              className="space-y-5 p-6"
            >
              {/* Status */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Status{" "}
                  <span className="text-red-500">*</span>
                </label>

                <select
                  value={statusForm.status}
                  onChange={(event) =>
                    setStatusForm((prev) => ({
                      ...prev,
                      status: event.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="Ready">
                    Ready
                  </option>

                  <option value="Shipped">
                    Shipped
                  </option>

                  <option value="Delivered">
                    Delivered
                  </option>
                </select>
              </div>

              {/* Courier */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Courier Name
                  {statusForm.status ===
                    "Shipped" && (
                    <span className="text-red-500">
                      {" "}
                      *
                    </span>
                  )}
                </label>

                <input
                  type="text"
                  value={statusForm.courierName}
                  onChange={(event) =>
                    setStatusForm((prev) => ({
                      ...prev,
                      courierName:
                        event.target.value,
                    }))
                  }
                  placeholder="Enter courier name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Tracking */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Tracking Number
                  {statusForm.status ===
                    "Shipped" && (
                    <span className="text-red-500">
                      {" "}
                      *
                    </span>
                  )}
                </label>

                <input
                  type="text"
                  value={statusForm.trackingNumber}
                  onChange={(event) =>
                    setStatusForm((prev) => ({
                      ...prev,
                      trackingNumber:
                        event.target.value,
                    }))
                  }
                  placeholder="Enter tracking number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Remarks */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Remarks
                </label>

                <textarea
                  rows={4}
                  value={statusForm.remarks}
                  onChange={(event) =>
                    setStatusForm((prev) => ({
                      ...prev,
                      remarks: event.target.value,
                    }))
                  }
                  placeholder="Enter remarks"
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Status Information */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs leading-5 text-gray-600">
                {statusForm.status ===
                  "Shipped" && (
                  <span>
                    When status becomes{" "}
                    <strong>Shipped</strong>, the backend
                    automatically sets the shipped date.
                  </span>
                )}

                {statusForm.status ===
                  "Delivered" && (
                  <span>
                    When status becomes{" "}
                    <strong>Delivered</strong>, the backend
                    automatically sets the delivered date.
                  </span>
                )}

                {statusForm.status === "Ready" && (
                  <span>
                    The shipment will remain in{" "}
                    <strong>Ready</strong> status.
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
                <button
                  type="button"
                  onClick={closeStatusModal}
                  disabled={saving}
                  className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  )}

                  {saving
                    ? "Updating..."
                    : "Update Status"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivery;
import React from 'react';

const orders = [
  {
    id: "sk_live_6jQ4JmT9uPQX",
    date: "Read & Write",
    product: "2 hours ago",
  },
  {
    id: "sk_live_9yU32GhL4mMn",
    date: "Read Only",
    product: "Last used: 5 days ago",
  },
];



const logs = [
  {
    id: "sk_live_6jQ4JmT9uPQX",
    date: "2025-03-30 12:05 PM",
    product: "GET /orders",
    status: "200 OK",
  },
  {
    id: "sk_live_9yU32GhL4mMn",
    date: "2025-03-30 12:05 PM",
    product: "POST / Payouts",
    status: "403 FORBIDDEN",
  },
  {
    id: "sk_live_A1B2C3D4E5F6",
    date: "2025-03-30 12:05 PM",
    product: "DELETE / Product",
    status: "200 OK",
  },
];


const ApiIntegrationDashboard: React.FC = () => {
  return (
<div className="bg-white rounded-xl h-screen w-full flex flex-col relative overflow-x-hidden overflow-y-auto items-center gap-y-8">

      {/* Header */}
      <div className="bg-[#2E0234] w-full h-[110px] py-4 px-14 border-b border-[#121212]/10 flex flex-col justify-center items-center text-center rounded-t-xl">
        <div className="flex flex-col items-center flex-1 justify-center w-full h-full">
          <h2 className="text-white font-['Urbanist'] font-semibold text-2xl leading-tight tracking-[0.02em] text-center capitalize max-w-[557px] mb-3">
            API Integration - Connect & Automate
          </h2>
          <p className="text-white/80 font-['Inter'] font-normal text-sm leading-relaxed tracking-normal text-center max-w-[552px]">
            Easily link My Darads with your existing business tools using secure API connections.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mb-8 p-8 flex flex-col gap-2 w-[600px] mx-auto">
        <div className="flex flex-col justify-center items-start gap-3" style={{ height: '76px' }}>
          <h3
            className="capitalize font-['Urbanist'] font-semibold text-[24px] leading-[160%] text-black"
          >
            API Keys Management
          </h3>
          <p
            className="text-base text-gray-600 font-['Inter'] font-normal leading-[160%]"
          >
            Manage your API keys for secure integration
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          <div className="overflow-x-auto rounded-[16px] border border-[#D2D1D6]">
            <table className="w-full table-fixed text-sm">
              <thead>
                <tr className="bg-gray-200 text-gray-800 text-[16px]">
                  <th className="p-4 text-left w-[45%]">API Key</th>
                  <th className="p-4 text-left w-[20%]">Permission</th>
                  <th className="p-4 text-left w-[20%]">Last Used</th>
                  <th className="p-4 text-center w-[15%]">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr key={idx} className="border-t border-[#D2D1D6] text-gray-900">
                    <td className="py-4 px-4 flex items-center gap-3 font-semibold text-left truncate">
                      <span className="border px-2 py-1 rounded text-xs select-none">{idx + 1}</span>
                      <span className="truncate">{order.id}</span>
                    </td>
                    <td className="p-4 text-left">{order.date}</td>
                    <td className="p-4 text-left">{order.product}</td>
                    <td className="p-4 text-[24px] text-gray-800 text-center cursor-pointer select-none">⋮</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            className="text-white font-bold rounded block mx-auto flex items-center justify-center mt-4"
            style={{
              width: '335px',
              height: '52px',
              borderRadius: '12px',
              backgroundColor: '#5F04F6',
              fontFamily: 'Urbanist',
              fontWeight: '600',
              fontSize: '16px',
              lineHeight: '150%',
              textTransform: 'capitalize',
              whiteSpace: 'nowrap',
            }}
          >
            Generate New API Key
          </button>
        </div>



        {/* Webhook Management Section */}
<div className="mt-12 p-4 w-[540px] mx-auto border-dashed  border-t-4 border-[#D4A9F9] ">
  <div className="p-6 bg-white rounded-[8px] flex flex-col gap-4">
    <h3 className="text-[20px] font-['Urbanist'] font-semibold text-black mb-2">
      📌 Webhook Management
    </h3>
    <p className="text-sm text-gray-600 font-['Inter']">
      Receive real-time updates on important events.
    </p>

    <label className="text-sm font-medium mt-4">🔗 Webhook URL</label>
    <input
      type="text"
      value="https://vendorbusiness.com/webhook-listener"
      readOnly
      className="w-full mt-1 px-4 py-2 rounded border border-gray-300 text-sm font-mono bg-gray-50"
    />

    <div className="mt-6">
      <label className="block text-sm font-medium mb-2">Subscribed Events</label>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked readOnly className="accent-green-600" />
          New Order Placed
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" readOnly />
          Refund Processed
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked readOnly className="accent-green-600" />
          Payment Completed
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" readOnly />
          Stock Update
        </label>
      </div>
    </div>
  </div>
</div>

<div className="mt-12 p-4 w-[540px] mx-auto border-dashed  border-t-4 border-[#D4A9F9] "></div>



   <div className="flex flex-col justify-center items-start gap-3" style={{ height: '76px' }}>
          <h3
            className="capitalize font-['Urbanist'] font-semibold text-[24px] leading-[160%] text-black"
          >
          API Logs & Monitoring
          </h3>
          <p
            className="text-base text-gray-600 font-['Inter'] font-normal leading-[160%]"
          >
         View all recent API requests for security & debugging
          </p>
        </div>

  <div className="flex flex-col gap-4 mt-2">
  <div className="rounded-[16px] w-full max-w-[600px] border border-[#D2D1D6] mx-auto overflow-x-auto">
    <table className="w-full text-sm table-auto">
      <thead>
        <tr className="bg-gray-200 text-gray-800 text-[16px]">
          <th className="p-4 text-left min-w-[250px]">API Key</th>
          <th className="p-4 text-center min-w-[150px]">Permission</th>
          <th className="p-4 text-center min-w-[150px]">Last Used</th>
          <th className="p-4 text-center min-w-[120px]">Status</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, idx) => (
          <tr key={idx} className="border-t border-[#D2D1D6] text-gray-900">
            <td className="py-4 px-4 font-semibold truncate text-left">
              <span className="truncate">{log.id}</span>
            </td>
            <td className="p-4 text-center">{log.date}</td>
            <td className="p-4 text-center">{log.product}</td>
            <td className="p-4 text-center font-medium">
              <span
                className={`px-2 py-1 rounded text-sm ${
                  log.status.startsWith("200")
                    ? "text-green-700 bg-green-100"
                    : "text-red-700 bg-red-100"
                }`}
              >
                {log.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <button
    className="text-white font-bold rounded block mx-auto flex items-center justify-center mt-4"
    style={{
      width: "335px",
      height: "52px",
      borderRadius: "12px",
      backgroundColor: "#5F04F6",
      fontFamily: "Urbanist",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "150%",
      textTransform: "capitalize",
      whiteSpace: "nowrap",
    }}
  >
    Generate New API Key
  </button>
</div>


      </div>
    </div>
  );
};

export default ApiIntegrationDashboard;

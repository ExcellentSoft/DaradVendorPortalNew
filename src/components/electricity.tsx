import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ElectricityBillForm = () => {
  const [provider, setProvider] = useState('Ikeja Electric');
  const [meterNumber, setMeterNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!meterNumber.trim() || !amount.trim()) {
      alert('Please fill all fields.');
      return;
    }

    setShowModal(true); // Show confirmation modal
  };

  const confirmPayment = () => {
    setShowModal(false);
    alert(`Payment Confirmed: ₦${amount} for meter ${meterNumber} to ${provider}`);
    // Proceed with actual payment logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <ul className="space-y-4">
          <li className="text-gray-700 font-medium">Airtime & Data Top-Up</li>
          <li className="text-purple-700 font-semibold">Electricity Bill Payments</li>
          <li className="text-gray-700 font-medium">API Services Integration</li>
        </ul>
      </div>

      {/* Main Form Area */}
      <div className="flex-1 p-10">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-8">
          <h2 className="text-xl font-semibold text-center text-purple-900 mb-1">
            Electricity Bill Payments
          </h2>
          <p className="text-sm text-center text-gray-500 mb-6">Pay your meter bills hassle-free.</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Provider Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Electricity Provider
              </label>
              <div className="relative">
                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-700"
                >
                  <option>Ikeja Electric</option>
                  <option>Eko Electric</option>
                  <option>Abuja Electric</option>
                  <option>Kano Electric</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4 pointer-events-none" />
              </div>
            </div>

            {/* Meter Number */}
            <div>
              <label htmlFor="meter" className="block text-sm font-medium text-gray-700 mb-1">
                Meter Number
              </label>
              <input
                id="meter"
                type="text"
                value={meterNumber}
                onChange={(e) => setMeterNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-700"
              />
              <p className="text-xs text-gray-400 mt-1">Tenfrills Apartment</p>
            </div>

            {/* Amount */}
            <div>

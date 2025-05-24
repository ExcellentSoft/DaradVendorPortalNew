import { useState } from 'react';

export default function ConfirmWithdrawalModal() {
  const [amount, setAmount] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleWithdrawal = () => {
    if (!confirmed) {
      alert('Please confirm details before proceeding.');
      return;
    }
    alert(`Processing withdrawal of ₦${amount}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Confirm Withdrawal Request</h2>
        <p className="text-sm text-gray-600 mb-4">
          Review your withdrawal details carefully. Funds will be processed within 24 hours.
        </p>

        {/* Balance Info */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mb-4">
          <div className="flex justify-between text-sm text-gray-700 mb-2">
            <span>Current Balance</span>
            <span className="font-semibold">₦1,200,000</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <span>Maximum Withdrawal</span>
            <span className="text-purple-600 font-semibold">₦500,000</span>
          </div>
        </div>

        {/* Withdrawal Amount */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Withdrawal Amount (₦)</label>
        <input
          type="number"
          placeholder="e.g. 50000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Confirmation Checkbox */}
        <label className="flex items-start mb-4 space-x-2 text-sm text-yellow-700 bg-yellow-50 p-3 rounded-md border border-yellow-300">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-1"
          />
          <span>Review your details carefully before confirming.</span>
        </label>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => alert('Withdrawal cancelled')}
          >
            Cancel
          </button>
          <button
            onClick={handleWithdrawal}
            className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition"
          >
            Confirm Withdrawal
          </button>
        </div>
      </div>
    </div>
  );
}

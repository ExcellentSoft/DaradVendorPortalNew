import { useState } from 'react';

const TopUpForm = () => {
  const [tab, setTab] = useState<'airtime' | 'data'>('airtime');
  const [mobile, setMobile] = useState('');
  const [amount, setAmount] = useState('');
  const [operator, setOperator] = useState('Mtn Nigeria');
  const [showModal, setShowModal] = useState(false);

  const isValid = () => {
    return mobile.trim() !== '' && amount.trim() !== '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid()) {
      setShowModal(true);
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-md mx-auto">
        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-4">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              tab === 'airtime' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500'
            }`}
            onClick={() => setTab('airtime')}
          >
            Airtime Top Up
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ml-4 ${
              tab === 'data' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500'
            }`}
            onClick={() => setTab('data')}
          >
            Data Top Up
          </button>
        </div>

        {/* Description */}
        <p className="text-center text-sm text-gray-500 mb-6">Recharge mobile numbers instantly</p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Mobile Number */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-4 bg-purple-700 text-white text-sm font-medium rounded-l-md border border-r-0 border-purple-700">
                +234
              </span>
              <input
                id="mobile"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="flex-1 block w-full px-3 py-2 border border-purple-700 rounded-r-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-700"
              />
            </div>
          </div>

          {/* Amount */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="500(₦)"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-700"
            />
          </div>

          {/* Operator */}
          <div>
            <label htmlFor="operator" className="block text-sm font-medium text-gray-700 mb-1">
              Select Operator
            </label>
            <select
              id="operator"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-700"
            >
              <option>Mtn Nigeria</option>
              <option>Airtel</option>
              <option>Glo</option>
              <option>9mobile</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white text-sm font-medium py-2 rounded-md hover:bg-purple-800 transition"
            >
              Recharge Now
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-2">Confirm Airtime Top-Up</h2>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to recharge <span className="font-medium">+234{mobile}</span>
              <br />
              with <span className="font-bold text-purple-700">₦{amount}</span> on {operator}?
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  alert('Recharge Confirmed!');
                }}
                className="px-4 py-2 bg-purple-700 text-white rounded-md text-sm hover:bg-purple-800"
              >
                Yes, Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopUpForm;

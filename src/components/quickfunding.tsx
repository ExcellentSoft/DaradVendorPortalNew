import { useState } from 'react';

export default function FundWallet() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [transferFrom, setTransferFrom] = useState('wallet');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (transferFrom === 'bank') {
      setShowModal(true);
    } else {
      alert(`Sending ₦${amount} to ${email} from account wallet`);
    }
  };

  const handleConfirm = () => {
    setShowModal(false);
    alert(`Redirecting to bank portal for ₦${amount} payment.`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        <h1 className="text-xl font-semibold text-center mb-4">
          Fund Customer Wallet – Quick & Secure Funding
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Easily credit your customer’s wallet for seamless transactions and purchases.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Search by email…"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount to Credit</label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="₦75,000"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Customer Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Aymomide.Johnson@Email.Com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Transfer From</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="transfer"
                  value="wallet"
                  checked={transferFrom === 'wallet'}
                  onChange={() => setTransferFrom('wallet')}
                />
                <span>Account Wallet (Current Balance: ₦120,000)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="transfer"
                  value="bank"
                  checked={transferFrom === 'bank'}
                  onChange={() => setTransferFrom('bank')}
                />
                <span>Fund from online banking</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
          >
            Send ₦{amount || '0'} From {transferFrom === 'wallet' ? 'Account Wallet' : 'Online Banking'}
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Confirm Online Payment</h2>
            <p className="text-sm text-gray-700 mb-6">
              You are about to be redirected to your bank’s secure online portal to complete your payment of ₦{amount}.
              Please ensure you have your bank login credentials ready.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

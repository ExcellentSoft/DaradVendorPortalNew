import React from "react";
import Image from "next/image";

export default function FeeFormPage() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* QUICK ACTIONS */}
      <div className="flex items-center justify-between bg-white p-6 rounded-3xl shadow-sm mb-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Quick actions</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Set Fee Structure", icon: "🔗" },
              { label: "Manage Fees", icon: "⚙️" },
              { label: "Generate Invoice", icon: "🧾" },
              { label: "View Schedule", icon: "⏻" },
              { label: "Send Reminder", icon: "🔔" },
            ].map((btn) => (
              <button
                key={btn.label}
                className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 shadow-sm hover:shadow-md transition"
              >
                <span className="text-xl">{btn.icon}</span>
                <span className="text-sm font-medium">{btn.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="shrink-0 rounded-full overflow-hidden w-20 h-20">
          <Image
            src="/quick.png" // Make sure this image is in the `public/` folder
            alt="Profile"
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT COLUMN: Student & Parent Info */}
        <div className="space-y-6 xl:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="form-input" placeholder="First Name" />
              <input className="form-input" placeholder="Last Name" />
              <div className="flex items-center gap-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" className="accent-blue-500" />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" className="accent-blue-500" />
                  <span>Female</span>
                </label>
              </div>
              <input className="form-input" type="date" placeholder="Date of Birth" />
              <input className="form-input" placeholder="Class" />
              <input className="form-input" placeholder="Section" />
              <div className="md:col-span-2 border-dashed border-2 border-gray-300 p-4 rounded-lg text-center text-sm text-gray-500">
                Drag or drop file to upload
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Parent Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="form-input" placeholder="Father’s First Name" />
              <input className="form-input" placeholder="Mother’s First Name" />
              <input className="form-input" placeholder="Father’s Last Name" />
              <input className="form-input" placeholder="Mother’s Last Name" />
              <input className="form-input" placeholder="Father’s Phone Number" />
              <input className="form-input" placeholder="Mother’s Phone Number" />
              <input className="form-input" placeholder="Father’s Email" />
              <input className="form-input" placeholder="Mother’s Email" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Earlybean Account Details</h3>
            <input className="form-input mb-3" placeholder="Bank Name" />
            <input className="form-input" placeholder="Account Number" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <input className="form-input mb-3" placeholder="Phone" />
            <input className="form-input mb-3" placeholder="Email" />
            <input className="form-input mb-3" placeholder="Street Address" />
            <input className="form-input mb-3" placeholder="City" />
            <input className="form-input mb-3" placeholder="State" />
            <input className="form-input" placeholder="LGA / Province" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            <div className="flex flex-wrap gap-3">
              {["Day Schooler", "Boarder", "Transport", "Non Transport"].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-2 bg-gray-100 rounded-full hover:bg-blue-100 text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEES BREAKDOWN */}
      <div className="bg-white p-6 rounded-lg shadow mt-10">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">School Fees Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Tuition", "Bus", "Development Levy", "Books", "School Supplies", "Lunch",
            "Uniform", "Sport's Wear", "Internal Exams", "External Exams", "Club Fee",
            "PTA Reg/Levy", "Education Insurance", "Other's",
          ].map((label) => (
            <div key={label} className="flex justify-between border-b pb-2">
              <span className="text-gray-700 font-medium">{label}</span>
              <span className="text-gray-900 font-semibold">N</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-700">Total Fees:</span>
              <span className="text-xl font-bold text-blue-600">N 0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT SCHEDULE */}
      <div className="bg-white p-6 rounded-lg shadow mt-10 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Payment Schedule</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Options</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1].map((_, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="date" className="form-input w-full" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select className="form-input w-full">
                      <option value="">Select an option</option>
                      <option value="credit_card">Credit Card</option>
                      <option value="bank_transfer">Bank Transfer</option>
                      <option value="paypal">PayPal</option>
                      <option value="other">Other</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Schedule</button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
}

const App: React.FC = () => {
  const [customer, setCustomer] = useState<CustomerDetails>({
    fullName: 'Tunde Balogun',
    email: 'tunde@example.com',
    phone: '+2348012345678',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // In a real application, you would send this data to a backend
    console.log('Saving changes:', customer);
    alert('Changes saved successfully!'); // Using alert for demonstration as per instructions to avoid confirm/window.alert
  };

  const handleClose = () => {
    // In a real application, this might close a modal or navigate away
    console.log('Closing form');
    alert('Form closed.'); // Using alert for demonstration
  };

  return (
    // Changed height from min-h-screen to fixed 700px
    <div className="bg-gray-100 flex items-center justify-center p-4 font-inter"
      style={{
        height: '700px', // Set fixed height here
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >
      {/* The main white container, now with 64px vertical padding */}
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-lg relative"
        style={{
          paddingTop: '64px',
          paddingBottom: '64px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        {/* Header */}
        <div className="text-center mb-6 md:mb-8 border-b pb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Edit Customer Details - Temitope Soremekun
          </h2>
        </div>

        {/* Form Content and Action Buttons Container - added mt-16 for margin-top: 64px */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mt-16">
          {/* Avatar Placeholder */}
          <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-3xl font-bold">
            {/* You could add an image here */}
          </div>

          {/* Form Fields and Action Buttons (now grouped) */}
          <div className="flex-grow w-full flex flex-col">
            {/* Form Fields */}
            <div>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={customer.fullName}
                  onChange={handleChange}
                  className="block py-3 px-4 rounded-[6px] border bg-white text-gray-700 leading-tight focus:outline-none focus:ring-transparent focus:border-transparent transition duration-200"
                  style={{
                      width: '335px',
                      height: '44px',
                      border: '1px solid rgba(30, 1, 86, 0.5)', // #1E0156 with 50% opacity
                  }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customer.email}
                  onChange={handleChange}
                  className="block py-3 px-4 rounded-[6px] border bg-white text-gray-700 leading-tight focus:outline-none focus:ring-transparent focus:border-transparent transition duration-200"
                  style={{
                      width: '335px',
                      height: '44px',
                      border: '1px solid rgba(30, 1, 86, 0.5)', // #1E0156 with 50% opacity
                  }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={customer.phone}
                  onChange={handleChange}
                  className="block py-3 px-4 rounded-[6px] border bg-white text-gray-700 leading-tight focus:outline-none focus:ring-transparent focus:border-transparent transition duration-200"
                  style={{
                      width: '335px',
                      height: '44px',
                      border: '1px solid rgba(30, 1, 86, 0.5)', // #1E0156 with 50% opacity
                  }}
                />
              </div>
            </div>

            {/* Action Buttons - now inside the form fields parent and right-aligned */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleClose}
                className="font-semibold shadow-sm hover:shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                style={{
                  width: '157px',
                  height: '44px',
                  borderRadius: '8px',
                  paddingTop: '10px',
                  paddingRight: '16px',
                  paddingBottom: '10px',
                  paddingLeft: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E7EA',
                  boxShadow: '0px 1px 2px 0px rgba(5, 32, 81, 0.05)',
                  fontFamily: 'Urbanist',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  textTransform: 'capitalize',
                  color: 'rgba(18, 18, 18, 0.8)',
                }}
              >
                Close
              </button>
              <button
                onClick={handleSave}
                className="w-[157px] h-[41px] rounded-lg py-3 pr-5 pl-5 bg-[#5604F6] font-urbanist font-semibold text-sm leading-none tracking-wide capitalize text-white text-center shadow-md hover:shadow-lg transition duration-200 focus:outline-none focus:ring-transparent"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
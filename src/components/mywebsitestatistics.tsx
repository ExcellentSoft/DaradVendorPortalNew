// components/Dashboard.tsx
import React from 'react';

// --- Icons (using simple SVG for demonstration, in a real app these might be imported from a library) ---
const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C23 17.9391 22.5786 16.9217 21.8284 16.1716C21.0783 15.4214 20.0609 15 19 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 11C19.2091 11 21 9.20914 21 7C21 4.79086 19.2091 3 17 3C14.7909 3 13 4.79086 13 7C13 9.20914 14.7909 11 17 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2C14.5013 4.73855 15.9228 8.29203 15.9228 12C15.9228 15.708 14.5013 19.2615 12 22C9.49872 19.2615 8.07719 15.708 8.07719 12C8.07719 8.29203 9.49872 4.73855 12 2V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 16V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H15M21 16L12 21L3 16V8L12 3L21 8M21 16V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V16M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 8L12 13L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Custom SVG Icons for Customer Section Header and Dropdowns
const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 15L7.5 10L12.5 5" />
  </svg>
);

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 5L12.5 10L7.5 15" />
  </svg>
);

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  // Applying specific width, height, and color as requested
  <svg className="w-[11.503852844238281px] h-[6.503767490386963px] text-[#121212]/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  // CalendarIcon is already 16x16 (h-4 w-4)
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

// New: Three Vertical Dots Icon for Action button
const ThreeDotsVerticalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"/>
  </svg>
);


// --- Interfaces ---
interface PerformanceMetric {
  title: string;
  icon: React.ElementType; // React component for the SVG icon
  iconBgColor: string; // Tailwind class for icon background (e.g., 'bg-[#F5EEFF]')
  iconColor: string;   // Tailwind class for icon color (e.g., 'text-[#6F3F97]')
  mainValue: string;
  valueUnit?: string; // Optional: e.g., 'customers', 'Visits'
  description: string;
  valueTextColor: string; // Hex color string for the main value's text color (e.g., '#8E44AD')
}

interface Customer {
  id: string;
  email: string;
  customerName: string;
  dateJoined: string;
  orders: number;
  totalSpend: string;
  status: 'Active' | 'Inactive' | 'Pending';
}

// --- Dummy Data ---
const performanceMetrics: PerformanceMetric[] = [
  {
    title: 'CUSTOMER COUNT',
    icon: UsersIcon,
    iconBgColor: 'bg-[#F5EEFF]', // Light purple from image
    iconColor: 'text-[#6F3F97]', // Darker purple from image
    mainValue: '350',
    valueUnit: 'customers',
    description: 'New sign-ups this week',
    valueTextColor: '#8E44AD', // Updated color for 350
  },
  {
    title: 'WEBSITE VISITS',
    icon: GlobeIcon, // Or a more fitting 'visits' icon if available
    iconBgColor: 'bg-[#EEFFF6]', // Light green from image
    iconColor: 'text-[#3F976F]', // Darker green from image
    mainValue: '8,700',
    valueUnit: 'Visits',
    description: 'Traffic for the last 7 days',
    valueTextColor: '#16A085', // Updated color for 8700
  },
  {
    title: 'TOTAL ORDERS',
    icon: CubeIcon, // Or a more fitting 'orders' icon
    iconBgColor: 'bg-[#F5EEFF]', // Same light purple as customer count, from image
    iconColor: 'text-[#6F3F97]', // Same darker purple as customer count, from image
    mainValue: '1,250',
    valueUnit: '', // No explicit unit in image
    description: 'Orders received today',
    valueTextColor: '#121212', // Updated color for 1250
  },
];

const customers: Customer[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    customerName: 'John Doe',
    dateJoined: '2023-01-15',
    orders: 5,
    totalSpend: '$250.00',
    status: 'Active',
  },
  {
    id: '2',
    email: 'jane.smith@example.com',
    customerName: 'Jane Smith',
    dateJoined: '2023-02-20',
    orders: 3,
    totalSpend: '$120.50',
    status: 'Active',
  },
  {
    id: '3',
    email: 'bob.johnson@example.com',
    customerName: 'Bob Johnson',
    dateJoined: '2023-03-10',
    orders: 1,
    totalSpend: '$45.00',
    status: 'Inactive',
  },
  {
    id: '4',
    email: 'alice.williams@example.com',
    customerName: 'Alice Williams',
    dateJoined: '2023-04-01',
    orders: 8,
    totalSpend: '$500.00',
    status: 'Active',
  },
  {
    id: '5',
    email: 'charlie.brown@example.com',
    customerName: 'Charlie Brown',
    dateJoined: '2023-05-22',
    orders: 2,
    totalSpend: '$75.00',
    status: 'Pending',
  },
  {
    id: '6',
    email: 'diana.prince@example.com',
    customerName: 'Diana Prince',
    dateJoined: '2023-06-01',
    orders: 10,
    totalSpend: '$1200.00',
    status: 'Active',
  },
  {
    id: '7',
    email: 'clark.kent@example.com',
    customerName: 'Clark Kent',
    dateJoined: '2023-07-10',
    orders: 0,
    totalSpend: '$0.00',
    status: 'Inactive',
  },
  {
    id: '8',
    email: 'bruce.wayne@example.com',
    customerName: 'Bruce Wayne',
    dateJoined: '2023-08-05',
    orders: 6,
    totalSpend: '$300.00',
    status: 'Active',
  },
  {
    id: '9',
    email: 'lois.lane@example.com',
    customerName: 'Lois Lane',
    dateJoined: '2023-09-18',
    orders: 4,
    totalSpend: '$180.00',
    status: 'Active',
  },
  {
    id: '10',
    email: 'arthur.curry@example.com',
    customerName: 'Arthur Curry',
    dateJoined: '2023-10-25',
    orders: 1,
    totalSpend: '$60.00',
    status: 'Pending',
  },
];

// --- Sub-components ---
const PerformanceCard: React.FC<{ metric: PerformanceMetric }> = ({ metric }) => {
  const IconComponent = metric.icon;

  return (
    <div className="bg-white w-[350px] h-[150px] rounded-[16px] shadow-sm p-4 flex flex-col justify-between">
      {/* Top Part: Header (Title, Icon, Dropdown) */}
      <div className="flex justify-between items-center">
        {/* Card's icon and Title */}
        <div className="flex items-center space-x-3 flex-grow min-w-0">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${metric.iconBgColor}`}>
            <IconComponent className={`w-6 h-6 ${metric.iconColor}`} />
          </div>
          <h3 className="font-inter font-medium text-base leading-none tracking-normal uppercase text-[#121212]/60">
            {metric.title}
          </h3>
        </div>
        {/* Dropdown Menu */}
        <div className="relative flex-shrink-0">
          <select
            className="
              appearance-none
              bg-white
              w-[81px] h-[32px]
              rounded-[8px]
              border-[0.5px] border-[#121212]/10
              p-[8px] pr-8
              font-inter font-normal text-xs leading-none tracking-normal capitalize text-[#161A41]/53
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
            "
            defaultValue="Weekly"
          >
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Annually</option>
          </select>
          {/* Dropdown Arrow Icon */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-[#121212]/40">
            {/* Keeping this ChevronDownIcon at its original h-4 w-4 for this specific dropdown in PerformanceCard */}
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Part: New combined div for Value, Unit, and Description */}
      {/* Aligned left with the h3 (title) using ml-[52px] */}
      <div className="ml-[52px]">
        {/* Div for Main Value and Unit */}
        <div>
          <p
            className="font-urbanist font-bold text-4xl leading-none tracking-normal inline-block"
            style={{ color: metric.valueTextColor }}
          >
            {metric.mainValue}
          </p>
          {metric.valueUnit && (
            <span className="font-urbanist font-medium text-2xl leading-none tracking-wide ml-1 text-[#121212]/40">
              {metric.valueUnit}
            </span>
          )}
        </div>

        {/* Div for Description */}
        <div className="mt-2 font-inter font-normal text-base leading-none tracking-normal text-[#161A41]/53">
          {metric.description}
        </div>
      </div>
    </div>
  );
};

const CustomerStatus: React.FC<{ status: Customer['status'] }> = ({ status }) => {
  let bgColorClass: string;
  let textColorClass: string;

  switch (status) {
    case 'Active':
      bgColorClass = 'bg-green-100';
      textColorClass = 'text-green-800';
      break;
    case 'Inactive':
      bgColorClass = 'bg-red-100';
      textColorClass = 'text-red-800';
      break;
    case 'Pending':
      bgColorClass = 'bg-yellow-100';
      textColorClass = 'text-yellow-800';
      break;
    default:
      bgColorClass = 'bg-gray-100';
      textColorClass = 'text-gray-800';
  }

  return (
    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColorClass} ${textColorClass}`}>
      {status}
    </span>
  );
};

// --- Main Dashboard Component ---
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Performance Tracking Section */}
      <div className="mb-8">
        {/* Performance Section Header Container */}
        <div className="w-[950px] min-h-[99px] px-6 py-5 rounded-[8px] bg-white border-[0.5px] border-[#121212]/10 flex flex-col justify-center gap-2">
          {/* Title Text */}
          <h1 className="font-urbanist font-bold text-2xl leading-[100%] tracking-[0.02em] capitalize text-[#121212]">
            Track Your Store Performance
          </h1>
          {/* Subtitle Text */}
          <p className="font-inter font-normal text-sm leading-[160%] tracking-normal text-[#121212]/80">
            Analyze sales, website visits, and customer insights to grow your business.
          </p>
        </div>

        {/* Performance Metrics Grid Container */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performanceMetrics.map((metric, index) => (
            <PerformanceCard key={index} metric={metric} />
          ))}
        </div>
      </div>

      {/* Your Customers Section (Main Container, reverted) */}
      {/* Added border-radius to the main customer section container */}
      <div className="bg-white p-6 shadow-sm w-[950px] h-[1150px] rounded-[16px] relative">

        {/* NEW Wrapper Div for Header and Search/Filter Bar */}
        <div className="
          bg-white flex flex-col absolute top-0 -left-px
          w-[951px] h-[190px] rounded-tl-[8px] rounded-tr-[8px]
          pt-[12px] pr-[20px] pb-[12px] pl-[20px] gap-[16px]
          border-b border-[#121212]/10
        ">
          {/* Customer Section Header */}
          <div className="
                      w-[911px] h-[87px] rounded-[6px]
                      pt-[8px] pr-[12px] pb-[16px] pl-[12px]
                      bg-[#F1F0F2]/40 border-[0.5px] border-[#121212]/10
                      flex justify-between items-center gap-2"> {/* Layout and styling for header itself */}
            <div className="flex flex-col justify-center gap-2 h-full"> {/* Applied vertical centering and gap */}
              <h2 className="font-urbanist font-semibold text-[18px] leading-[100%] capitalize text-[#121212]/80">Your Customers</h2> {/* Updated title typography and color */}
              <p className="font-inter font-normal text-[14px] leading-[100%] tracking-normal text-[#121212]/80"> {/* Updated subtitle typography and color */}
                Manage your customer data, review orders, and track spending.
              </p>
            </div>
            {/* Page Info and Pagination Controls */}
            <div className="flex items-center space-x-3 text-gray-500">
              <span className="font-inter font-medium text-[12px] leading-[100%] tracking-normal capitalize text-[#121212]/60 whitespace-nowrap">Page 1 Of 5</span>
              <div className="flex items-center space-x-1"> {/* Container for arrows with 4px gap */}
                <ChevronLeftIcon className="cursor-pointer text-gray-700" /> {/* Color changed for visibility */}
                <ChevronRightIcon className="cursor-pointer text-gray-700" /> {/* Color changed for visibility */}
              </div>
            </div>
          </div>

          {/* Search and Filter Bar Container */}
          <div className="
            w-[911px] h-[63px]
            pt-[12px] pb-[12px] gap-[272px]
            flex flex-row items-center
          ">
            {/* Search Input Container */}
            <div className="
              relative w-[194px] h-[39px]
              rounded-[8px] border-[1px] bg-[#FBFCFC] border-[#121212]/20
              p-[12px] gap-[14px]
            ">
              {/* Search Icon Container - Adjusted positioning */}
              <div className="absolute inset-y-0 flex items-center pointer-events-none left-[12px]">
                {/* Search Icon */}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="
                  block w-full h-full bg-transparent outline-none
                  font-inter font-normal text-[12px] leading-[100%]
                  text-[#6E6B7B] placeholder-[#6E6B7B]
                  pl-[36px] pr-[12px]
                "
                placeholder="Search by name, email, or ID"
              />
            </div>

            {/* Filter select container - Updated as per instructions */}
            <div className="flex space-x-2 items-center"> {/* Added items-center for vertical alignment */}
              {/* Date Range Select Button */}
              <div className="relative flex items-center w-[130px] h-[39px] border border-gray-300 bg-white rounded-md">
                <CalendarIcon className="absolute left-3 text-gray-500" />
                <select
                  id="dateRange"
                  name="dateRange"
                  className="block w-full appearance-none bg-transparent outline-none py-2 text-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                  pl-[30px] pr-[26px]" // Adjusted padding for 2px gap and smaller icons
                  defaultValue="" // Set default value to an empty string to select the hidden option
                >
                  <option value="" disabled selected hidden>Date Range</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>All time</option>
                </select>
                <ChevronDownIcon className="absolute right-3 pointer-events-none" /> {/* Color now set on the icon component */}
              </div>

              {/* Status Select Button */}
              <div className="relative flex items-center w-[120px] h-[39px] border border-gray-300 bg-white rounded-md">
                <select
                  id="status"
                  name="status"
                  className="block w-full appearance-none bg-transparent outline-none py-2 text-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                  pl-3 pr-[26px]" // Adjusted padding for 2px gap and smaller icons
                  defaultValue=""
                >
                  <option value="" disabled selected hidden>Status</option>
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Pending</option>
                </select>
                <ChevronDownIcon className="absolute right-3 pointer-events-none" />
              </div>

              {/* Sort By Select Button */}
              <div className="relative flex items-center w-[120px] h-[39px] border border-gray-300 bg-white rounded-md">
                <select
                  id="sortBy"
                  name="sortBy"
                  className="block w-full appearance-none bg-transparent outline-none py-2 text-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                  pl-3 pr-[26px]" // Adjusted padding for 2px gap and smaller icons
                  defaultValue=""
                >
                  <option value="" disabled selected hidden>Sort by</option>
                  <option>Date Joined</option>
                  <option>Orders</option>
                  <option>Total Spend</option>
                </select>
                <ChevronDownIcon className="absolute right-3 pointer-events-none" />
              </div>

              {/* Export Button */}
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Customer Table - Adjusted position to account for the new header/search wrapper */}
        <div className="overflow-x-auto mt-[190px] rounded-b-[16px]">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Thead - Updated with border-radius and new typography for th elements */}
            <thead
              className="
                h-[49px]
                text-gray-500 uppercase tracking-wider
                font-medium text-xs
                rounded-tl-[16px] rounded-tr-[16px]
              "
              style={{
                backgroundColor: 'rgba(194, 195, 197, 0.5)',
                // Applying border-radius directly since Tailwind's rounded-t-xl is rounded-top-2xl which is 16px
                // Adding specific border-radius here to ensure it's on the thead itself
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px'
              }}
            >
              <tr>
                {/* Th elements - Applied specific typography and color */}
                <th scope="col" className="
                  px-6 py-3 text-left whitespace-nowrap
                  font-inter font-medium text-[14px] leading-[100%]
                  tracking-[0.01em] capitalize text-[#121212]
                ">
                  Email
                </th>
                <th scope="col" className="
                  px-6 py-3 text-left whitespace-nowrap
                  font-inter font-medium text-[14px] leading-[100%]
                  tracking-[0.01em] capitalize text-[#121212]
                ">
                  Customer Name
                </th>
                <th scope="col" className="
                  px-6 py-3 text-left whitespace-nowrap
                  font-inter font-medium text-[14px] leading-[100%]
                  tracking-[0.01em] capitalize text-[#121212]
                ">
                  Date Joined
                </th>
                <th scope="col" className="
                  px-6 py-3 text-left whitespace-nowrap
                  font-inter font-medium text-[14px] leading-[100%]
                  tracking-[0.01em] capitalize text-[#121212]
                ">
                  Orders
                </th>
                <th scope="col" className="
                  px-6 py-3 text-left whitespace-nowrap
                  font-inter font-medium text-[14px] leading-[100%]
                  tracking-[0.01em] capitalize text-[#121212]
                ">
                  Total Spend
                </th>
                <th scope="col" className="
                  px-6 py-3 text-left whitespace-nowrap
                  font-inter font-medium text-[14px] leading-[100%]
                  tracking-[0.01em] capitalize text-[#121212]
                ">
                  Status
                </th>
                <th scope="col" className="
                  px-6 py-3 text-left whitespace-nowrap
                  font-inter font-medium text-[14px] leading-[100%]
                  tracking-[0.01em] capitalize text-[#121212]
                ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.dateJoined}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.orders}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {customer.totalSpend}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <CustomerStatus status={customer.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                      <ThreeDotsVerticalIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
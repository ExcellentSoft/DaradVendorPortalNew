import React, { useState } from 'react';
import Electricity from './electricity'; 
// import ApiIntegration from './apiservice';


const Card: React.FC<{ title: string; subtitle?: string; children: React.ReactNode; disableStyles?: boolean }> = ({
  title,
  subtitle,
  children,
  disableStyles = false, 
}) => (

  <div className={disableStyles ? "" : "bg-white p-6 rounded-xl shadow-md border border-gray-100"}>
 
    <h3 className="text-[#121212] font-bold text-2xl leading-none tracking-wide capitalize mb-2">
      {title}
    </h3>

    {subtitle && (
      <p className="text-[#121212]/80 font-normal text-sm leading-relaxed mb-4">
        {subtitle}
      </p>
    )}
    {children}
  </div>
);



const CheckmarkIcon: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div
    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors 
      ${isActive ? 'bg-white text-[#5604F6] border border-[#5604F6]' : 'bg-gray-200 text-gray-600'}`}
  >
  <svg
  className="w-4 h-4"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg>

  </div>
);




const EnvelopeIcon: React.FC = () => (
  <svg
    className="w-6 h-6 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v10z"
    />
  </svg>
);


interface ServiceCategory {
  id: string;
  name: string;
  formComponent: React.ReactNode; 
}


const UtilitiesForm: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('airtime_data_topup');
  const [activeTab, setActiveTab] = useState<'airtime' | 'data'>('airtime');
  
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [operator, setOperator] = useState<string>('Mtn Nigeria'); 
  const [showModal, setShowModal] = useState<boolean>(false); 


  
  const [mobileNumberError, setMobileNumberError] = useState<string | null>(null);
  const [amountError, setAmountError] = useState<string | null>(null);
  const [selectedDataPlan, setSelectedDataPlan] = useState<{ id: string; label: string; price: number } | null>(null);
  const [dataPlanError, setDataPlanError] = useState<string | null>(null);


  const networkOperators = [
    'Mtn Nigeria',
    'Airtel Nigeria',
    'Glo Nigeria',
    '9mobile Nigeria',
  ];


  // NEW: Data plans for Data Top Up
  const dataPlans = [
    { id: '1gb_300', label: '1GB', price: 300 },
    { id: '1.5gb_500', label: '1.5GB', price: 500 },
    { id: '2gb_750', label: '2GB', price: 750 },
    { id: '3gb_1000', label: '3GB', price: 1000 },
  ];


  // Consolidated error message class for consistency
  const errorMessageClass = "font-['Inter'] font-normal text-xs leading-[145%] capitalize text-[#101928] mt-1";




  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    // Reset errors
    setMobileNumberError(null);
    setAmountError(null);
    setDataPlanError(null); // Clear data plan error


    let hasError = false;


    
    if (!mobileNumber || mobileNumber.length !== 11 || !/^(0)\d{10}$/.test(mobileNumber)) {
      setMobileNumberError('Invalid Mobile Number Format. Must be 11 digits starting with 0.');
      hasError = true;
    }


    if (activeTab === 'airtime') {
   
      if (!amount || parseFloat(amount) <= 0) {
        setAmountError('Please Enter A Valid Amount.');
        hasError = true;
      }
    } else if (activeTab === 'data') {
     
      if (!selectedDataPlan) {
        setDataPlanError('Please Select A Data Plan.');
        hasError = true;
      }
    }


    if (!hasError) {
      setShowModal(true);
    }
  };


  const handleConfirmRecharge = () => {
    console.log('Recharge Confirmed!');
    if (activeTab === 'airtime') {
      console.log({
        activeTab,
        mobileNumber,
        amount,
        operator,
      });
      alert(`Recharging ${mobileNumber} with ${amount} via ${operator} for ${activeTab}. Check console for details.`);
    } else { // activeTab === 'data'
      console.log({
        activeTab,
        mobileNumber,
        selectedDataPlan,
        operator,
      });
      alert(`Buying ${selectedDataPlan?.label} for ${mobileNumber} for ₦${selectedDataPlan?.price} via ${operator}. Check console for details.`);
    }


    setShowModal(false); 
  };


  const handleCancelRecharge = () => {
    console.log('Recharge Cancelled.');
    setShowModal(false);
  };


  
  const AirtimeDataTopUpForm = (
  
    <div className="bg-white rounded-xl h-full w-full flex flex-col relative overflow-hidden items-center gap-y-8">


      {/* The header section with dark background */}
      <div className="bg-[#2E0234] w-full h-[103px] pt-[24px] pr-[60px] pb-[16px] pl-[60px] border-b border-[#121212]/10 flex flex-col justify-center items-center text-center rounded-t-xl">
        <h3 className="text-white font-['Urbanist'] font-semibold text-2xl leading-tight tracking-[0.02em] text-center capitalize w-[557px] h-[29px] mb-[12px]">
          Airtime & Data Top-Up
        </h3>
        <p className="text-white/80 font-['Inter'] font-normal text-sm leading-relaxed tracking-normal text-center w-[552px] h-[22px]">
          Recharge mobile numbers instantly with ease.
        </p>
      </div>


     
      <div className="w-[400px] rounded-3xl border-[0.5px] border-[#121212]/20 flex flex-col gap-6 py-[24px] px-8"> 
       
        <form onSubmit={handleFormSubmit} className="flex flex-col items-center justify-center h-full w-full">
         
          <div className="flex flex-col gap-6 justify-center items-center">
           
            <div className="flex w-[269px] h-[53px] pt-2 pr-4 pb-2 pl-4 gap-4 border-b border-[#121212]/10 mx-auto">
              <button
                type="button"
                onClick={() => setActiveTab('airtime')}
                className={`py-3 px-2 text-sm leading-none tracking-[0.02em] capitalize font-['Urbanist'] border-b-2 transition-colors duration-200
                                ${activeTab === 'airtime'
                    ? 'border-[#5604F6] text-[#5604F6] font-semibold'
                    : 'border-transparent text-black font-medium hover:text-gray-700'
                  }`}
              >
                Airtime Top Up
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('data')}
                className={`py-3 px-2 text-sm leading-none tracking-[0.02em] capitalize font-['Urbanist'] border-b-2 transition-colors duration-200
                                ${activeTab === 'data'
                    ? 'border-[#5604F6] text-[#5604F6] font-semibold'
                    : 'border-transparent text-black font-medium hover:text-gray-700'
                  }`}
              >
                Data Top Up
              </button>
            </div>


            
            <div className="w-[336px] flex flex-col gap-y-6">
             
              <div className="flex justify-center items-center">
                <p className="text-[#121212]/80 font-['Inter'] font-normal text-sm leading-none text-center">
                  {activeTab === 'airtime' ? 'Recharge mobile numbers instantly' : 'Buy data quickly for any mobile number.'}
                </p>
              </div>


              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                
                  <label htmlFor="mobileNumber" className="block text-[#101928] text-base font-medium mb-2">
                    Mobile Number
                  </label>
                  
                  <div className={`group flex w-[335px] mx-auto border rounded-lg focus-within:border-[#1E0156]/50 overflow-hidden gap-3
                                     ${mobileNumberError ? 'border-[#ED0423]' : 'border-[#D0D5DD]'}`}>
                 
                    <span className={`px-4 py-[15px] font-medium border-r-[0.5px] border-r-[#121212]/80 flex items-center self-stretch w-[64px] justify-center transition-colors duration-200
                                         ${mobileNumberError
                                            ? 'bg-[#ED0423] text-white'
                                            : (mobileNumber
                                                ? 'bg-[#5604F6] text-white' // If mobileNumber has value, keep active color
                                                : 'bg-[#121212]/5 text-gray-700 group-focus-within:bg-[#5604F6] group-focus-within:text-white' // Default or on focus
                                            )
                                         }`}>
                      +234
                    </span>

                    <input
                      type="tel"
                      id="mobileNumber"
                      value={mobileNumber}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                        setMobileNumberError(null); // Clear error on change
                      }}
                      className="outline-none py-[15px] text-gray-700 w-[259px]
                                         font-['Inter'] font-normal text-sm leading-[145%] placeholder-[#98A2B3]"
                      placeholder="09029717250" // Placeholder remains for visual guidance
                      maxLength={11} // UPDATED: Changed to 11 for full Nigerian number
                    />
                  </div>
                  {mobileNumberError && (
                    <p className={errorMessageClass}> {/* Applied consolidated error class */}
                      {mobileNumberError}
                    </p>
                  )}
                </div>


                {/* Conditional rendering for Amount / Operator / Data Plan based on activeTab */}
                {activeTab === 'airtime' ? (
                  <>
                    {/* Amount Field for Airtime */}
                    <div>
                      {/* CORRECTED: text-gray-700 to text-[#101928] */}
                      <label htmlFor="amount" className="block text-[#101928] text-base font-medium mb-2">
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => {
                          setAmount(e.target.value);
                          setAmountError(null); // Clear error on change
                        }}
                        className={`block w-[335px] mx-auto border rounded-lg py-[15px] px-4 focus:outline-none focus:border-[#1E0156]/50 text-gray-700
                                             font-['Inter'] font-normal text-sm leading-[145%] placeholder-[#98A2B3]
                                             [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                                             ${amountError ? 'border-[#ED0423]' : 'border-[#D0D5DD]'}`}
                        placeholder="500(₦)"
                        min="0"
                      />
                      {amountError && (
                        <p className={errorMessageClass}> {/* Applied consolidated error class */}
                          {amountError}
                        </p>
                      )}
                    </div>


                    {/* Select Operator Field for Airtime (comes after amount) */}
                    <div>
                      {/* CORRECTED: text-gray-700 to text-[#101928] */}
                      <label htmlFor="operator" className="block text-[#101928] text-base font-medium mb-2">
                        Select Operator
                      </label>
                      <div className="relative w-[335px] mx-auto border border-[#D0D5DD] rounded-lg focus-within:border-[#1E0156]/50 overflow-hidden">
                        <select
                          id="operator"
                          value={operator}
                          onChange={(e) => setOperator(e.target.value)}
                          className="block w-full py-[15px] px-4 pr-8 outline-none bg-white text-gray-700 appearance-none
                                             font-['Inter'] font-normal text-sm leading-[145%] cursor-pointer"
                        >
                          {networkOperators.map((op) => (
                            <option key={op} value={op}>
                              {op}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#121212]/40">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Select Operator Field for Data Top Up (comes before data plan) */}
                    <div>
                      {/* CORRECTED: text-gray-700 to text-[#101928] */}
                      <label htmlFor="operator" className="block text-[#101928] text-base font-medium mb-2">
                        Select Operator
                      </label>
                      <div className="relative w-[335px] mx-auto border border-[#D0D5DD] rounded-lg focus-within:border-[#1E0156]/50 overflow-hidden">
                        <select
                          id="operator"
                          value={operator}
                          onChange={(e) => setOperator(e.target.value)}
                          className="block w-full py-[15px] px-4 pr-8 outline-none bg-white text-gray-700 appearance-none
                                             font-['Inter'] font-normal text-sm leading-[145%] cursor-pointer"
                        >
                          {networkOperators.map((op) => (
                            <option key={op} value={op}>
                              {op}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#121212]/40">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z" />
                          </svg>
                        </div>
                      </div>
                    </div>


                    {/* Data Plan Selection for Data Top Up */}
                    <div>
                      {/* CORRECTED: text-gray-700 to text-[#101928] */}
                      <label className="block text-[#101928] text-base font-medium mb-2">
                        Select Data Plan
                      </label>
                      <div className="grid grid-cols-2 gap-4 w-[335px] mx-auto">
                        {dataPlans.map(plan => (
                          <label
                            key={plan.id}
                            className={`
                                  flex items-center justify-center p-4 rounded-lg cursor-pointer h-[60px]
                                  transition-colors duration-200
                                  bg-white
                                  text-gray-700 font-medium
                                  ${selectedDataPlan?.id === plan.id
                                    ? 'border-[#1E0156]/50 ring-2 ring-[#1E0156]/50' // Selected: New border color, ring
                                    : 'border-[#D0D5DD]' // Default: original border
                                  }
                                  hover:border-[#1E0156]/50 // Hover: New border color
                                `}
                          >
                            <input
                              type="radio"
                              name="dataPlan"
                              value={plan.id}
                              checked={selectedDataPlan?.id === plan.id}
                              onChange={() => {
                                setSelectedDataPlan(plan);
                                setDataPlanError(null); // Clear error on selection
                              }}
                              className="hidden" // Hide native radio button
                            />
                            <span className="text-center"> {/* Font-medium moved to parent */}
                              {plan.label} for ₦{plan.price.toLocaleString()}
                            </span>
                          </label>
                        ))}
                      </div>
                      {dataPlanError && (
                        <p className={errorMessageClass}> {/* Applied consolidated error class */}
                          {dataPlanError}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>


              {/* Recharge Now / Buy Data Button - FONT WEIGHT REMAINS MEDIUM (500) */}
              <button
                type="submit"
                className="mt-8 w-[335px] py-[14px] bg-[#5604F6] text-white rounded-xl text-base font-medium font-['Urbanist'] leading-[150%] tracking-normal capitalize mx-auto focus:outline-none focus:ring-2 focus:ring-[#5604F6] focus:ring-offset-2 transition-colors duration-200"
              >
                {activeTab === 'airtime' ? 'Recharge Now' : 'Buy Data'}
              </button>
            </div>
          </div>
        </form>
      </div>


      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-xl p-8 text-center shadow-lg"
            style={{ width: 450, height: 250, borderRadius: 12, backgroundColor: '#ffffff' }}>
            {/* Close button icon */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={handleCancelRecharge}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>


            {/* Modal Title and Subtitle Container */}
            <div className="absolute flex flex-col items-center justify-center"
              style={{ width: 434, height: 119, top: 40, left: 8, paddingTop: 24, paddingRight: 40, paddingBottom: 12, paddingLeft: 40, gap: 10 }}>
              {/* Modal Title with updated typography */}
              <h2 className="font-['Urbanist'] font-semibold text-2xl leading-none tracking-normal text-center capitalize text-black">
                Confirm {activeTab === 'airtime' ? 'Airtime Top-Up' : 'Data Purchase'}
              </h2>
              {/* Modal Subtitle with updated typography and dynamic amount styling */}
              <p className="font-['Inter'] font-normal text-sm leading-[160%] tracking-normal text-center text-[#121212]/80">
                {activeTab === 'airtime' ? (
                  <>
                    Are you sure you want to recharge <span className="font-medium">+234{mobileNumber}</span>
                    <br />
                    with <span className="font-['Inter'] font-medium text-[#5604F6]">₦{amount}</span> on <span className="font-semibold">{operator.replace(' Nigeria', '')}</span>?
                  </>
                ) : ( // activeTab === 'data'
                  <>
                    Do you want to recharge <span className="font-medium">+234{mobileNumber}</span> with the{' '}
                    <span className="font-medium text-[#5604F6]">{selectedDataPlan?.label}</span> data plan for{' '}
                    <span className="font-medium">₦{selectedDataPlan?.price.toLocaleString()}</span>?
                  </>
                )}
              </p>
            </div>


            {/* Buttons Container */}
            <div className="absolute flex justify-center items-center"
              style={{ width: 338, height: 44, top: 186, left: 56, gap: 24 }}>
              <button
                className="rounded-lg font-['Urbanist'] font-semibold text-[16px] leading-6 capitalize transition-colors duration-200"
                style={{ width: 157, height: 44, borderRadius: 8, borderWidth: 1, paddingTop: 10, paddingRight: 16, paddingBottom: 10, paddingLeft: 16, gap: 10, borderColor: '#E6E7EA', backgroundColor: '#FFFFFF', boxShadow: '0px 1px 2px 0px #0520510D', color: 'rgba(18, 18, 18, 0.8)' }}
                onClick={handleCancelRecharge}
              >
                Cancel
              </button>
              <button
                className="rounded-lg font-['Urbanist'] font-semibold text-[14px] leading-[100%] tracking-[0.02em] capitalize transition-colors duration-200"
                style={{ width: 157, height: 41, borderRadius: 8, paddingTop: 12, paddingRight: 20, paddingBottom: 12, paddingLeft: 20, gap: 8, backgroundColor: '#5604F6', color: '#ffffff' }}
                onClick={handleConfirmRecharge}
              >
                Yes, Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );


  // Placeholder for other service forms - still use the generic Card
  const OtherServiceForm = (serviceName: string) => (
    <Card title={serviceName} subtitle={`Details for ${serviceName} will be displayed here.`}>
      <div className="p-8 text-center text-gray-500">
        <p>This section is under construction. Please check back later!</p>
      </div>
    </Card>
  );


  // Define service categories and their corresponding forms
  const serviceCategories: ServiceCategory[] = [
    {
      id: 'airtime_data_topup',
      name: 'Airtime & Data Top-Up',
      formComponent: AirtimeDataTopUpForm,
    },
      {
    id: 'electricity',
    name: 'Electricity',
    formComponent: <Electricity />
  },
    {
      id: 'api_services_integration',
      name: 'API Services Integration',
      formComponent: <Electricity/>
    },
  ];


  // Get the currently selected service category object
  const currentSelectedCategory = serviceCategories.find(
    (category) => category.id === selectedServiceId
  );


  return (
    <div className="min-h-screen bg-[#F1F0F2] font-sans text-gray-900 pb-16 max-w-[930px] mx-auto flex flex-col gap-8">
     
      <div className="bg-white border border-black/10 w-full h-[114px] pt-7 pr-6 pb-8 pl-6 rounded-lg flex flex-col justify-center items-start text-left">
        
        <div className="w-full flex flex-col gap-2 justify-center">
          <h1 className="text-[#121212] text-2xl font-bold">Utilities & API Services</h1>
          <p className="text-[#121212]/80 text-lg">
            Recharge, pay bills, and integrate advanced features—exclusively for vendors.
          </p>
        </div>
      </div>


     
      <div className="w-full pt-0 pr-0 pb-0 pl-0 rounded-lg flex flex-col lg:flex-row gap-[69px] overflow-hidden">
    
        <div className="w-[249px] h-[214px] pt-[24px] px-[14px] pb-[24px] rounded-xl border bg-white border-black/10 flex-shrink-0 flex flex-col justify-center items-center">
        
          <Card
            title=""
            subtitle=""
          >
           
            <div className="space-y-[20px]">
              {serviceCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedServiceId(category.id)}
                  // Border radius reduced to 10px using custom value
                  className={`w-[220px] h-[42px] p-3 rounded-[10px] flex items-center cursor-pointer transition-all duration-200 gap-2
                                ${selectedServiceId === category.id
                                  ? 'bg-[#5604F6] text-white'
                                  : 'bg-white text-[#121212]/80 hover:bg-gray-100'
                                }`}
                >
                  <CheckmarkIcon isActive={selectedServiceId === category.id} />
                  {/* Updated typography classes for the span element */}
                  <span className={`whitespace-nowrap capitalize text-sm leading-none ${selectedServiceId === category.id ? 'font-semibold' : 'font-normal'}`}>
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>


        {/* Right Column - Main Form Content (conditionally rendered) */}
        <div className="w-[612px] h-[850px] rounded-xl relative">
          {currentSelectedCategory?.formComponent}
        </div>
      </div>
    </div>
  );
};


export default UtilitiesForm;
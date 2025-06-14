
import React, { useState } from 'react';
import FundWalletForm from './fundwalletform';


const CustomerWalletHistory: React.FC = () => {
 
  const transactions = [
    {
      id: 1,
      customerEmail: 'Chinedu.Okafor@Email.Com',
      depositorName: 'Chinedu Okafor',
      amountPaid: '₦50,000',
      bankAccountName: 'Zenith Bank',
      paidFromBank: 'GTBank',
      paidDate: '28 Mar 2025',
    },
    {
      id: 2,
      customerEmail: 'Amaka.Ade@Gmail.Com',
      depositorName: 'Amaka Ade',
      amountPaid: '₦35,000',
      bankAccountName: 'Access Bank',
      paidFromBank: 'UBA',
      paidDate: '27 Mar 2025',
    },
    {
      id: 3,
      customerEmail: 'Oluwaseun.Taiwo@Yahoo.Com',
      depositorName: 'Oluwaseun Taiwo',
      amountPaid: '₦20,000',
      bankAccountName: 'First Bank',
      paidFromBank: 'Fidelity Bank',
      paidDate: '25 Mar 2025',
    },
    {
      id: 4,
      customerEmail: 'Blessing.Udo@GMail.Com',
      depositorName: 'Blessing Udo',
      amountPaid: '₦70,000',
      bankAccountName: 'EcoBank',
      paidFromBank: 'Zenith Bank',
      paidDate: '24 Mar 2025',
    },
    {
      id: 5,
      customerEmail: 'Daniel.Adeleke@Hotmail.Com',
      depositorName: 'Daniel Adeleke',
      amountPaid: '₦15,000',
      bankAccountName: 'UBA',
      paidFromBank: 'Polaris Bank',
      paidDate: '22 Mar 2025',
    },
  ];


 
  const [activeTab, setActiveTab] = useState('allTransactions');
 
  const [showFundForm, setShowFundForm] = useState(false);


  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };


  const handleFundCustomerWalletClick = () => {
    setShowFundForm(true);
  };


  const handleGoBackFromForm = () => {
    setShowFundForm(false);
  };


  if (showFundForm) {
    return <FundWalletForm onGoBack={handleGoBackFromForm} />;
  }


  return (
    <div
      className=" border rounded-2xl bg-white 
                 "
    >
 
      <header
        className=" w-full  rounded-t-2xl
                    p-5 gap-2
                   bg-[#2E0234] text-white flex items-center justify-between"
      >
       
        <div className="flex flex-col w-[426px] h-[59px] gap-2">
          <h1 className="text-2xl font-semibold">Customer Wallet Fund History</h1>
         
          <p className="text-sm text-gray-200">
            Review customer proof of payment and fund wallets accordingly
          </p>
        </div>
        <button
          onClick={handleFundCustomerWalletClick} // Add click handler here
          className="bg-white rounded-lg gap-2 pt-3 pr-5 pb-3 pl-5 hover:bg-gray-100
                     font-[Urbanist,sans-serif] font-semibold text-sm leading-none tracking-[0.02em] capitalize text-[#5604F6]"
        >
          Fund Customer Wallet
        </button>
      </header>


     
      <div className="p-6">
   
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
       
          <div
            className="flex rounded border-b border-[#121212]/10 gap-3
                       pt-3 pr-5 pb-3 pl-5 bg-white"
          >
            <button
              onClick={() => handleTabClick('allTransactions')}
              className={`
                px-4 py-3 rounded-md capitalize leading-none tracking-normal font-[Inter,sans-serif] text-base
                ${activeTab === 'allTransactions'
                  ? 'bg-[#5604F6] text-white font-semibold'
                  : 'text-[#121212]/80 font-normal hover:bg-gray-300'
                }
              `}
            >
              All Transactions
            </button>
            <button
              onClick={() => handleTabClick('pendingApproval')}
              className={`
                px-4 py-3 rounded-md capitalize leading-none tracking-normal font-[Inter,sans-serif] text-base
                ${activeTab === 'pendingApproval'
                  ? 'bg-[#5604F6] text-white font-semibold'
                  : 'text-[#121212]/80 font-normal hover:bg-gray-300'
                }
              `}
            >
              Pending Approval
            </button>
            <button
              onClick={() => handleTabClick('funded')}
              className={`
                px-4 py-3 rounded-md capitalize leading-none tracking-normal font-[Inter,sans-serif] text-base
                ${activeTab === 'funded'
                  ? 'bg-[#5604F6] text-white font-semibold'
                  : 'text-[#121212]/80 font-normal hover:bg-gray-300'
                }
              `}
            >
              Funded
            </button>
            <button
              onClick={() => handleTabClick('deleted')}
              className={`
                px-4 py-3 rounded-md capitalize leading-none tracking-normal font-[Inter,sans-serif] text-base
                ${activeTab === 'deleted'
                  ? 'bg-[#5604F6] text-white font-semibold'
                  : 'text-[#121212]/80 font-normal hover:bg-gray-300'
                }
              `}
            >
              Deleted
            </button>
          </div>
         
          <div className="relative w-[272px] h-[44px]">
            <input
              type="text"
              placeholder="Enter customer name or email..."
              className="w-full h-full rounded-lg border bg-[#FBFCFC]
                         pl-[14px] pr-[38px] pt-3 pb-3  border-[#121212]/20
                         focus:outline-none focus:ring-2 focus:ring-purple-500
                         placeholder:font-[Inter,sans-serif] placeholder:font-normal placeholder:text-sm
                         placeholder:leading-none placeholder:tracking-normal placeholder:text-[#6E6B7B]"
            />
            <svg
              className="absolute right-[14px] top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>


   
      <div
        className=" w-[912px] h-[556px] m-4  rounded-md overflow-hidden bg-white border border-[#D2D1D6]"
      >
        <table className="min-w-full divide-y divide-gray-200 table-fixed">
          <thead className="bg-[#C2C3C5] h-[76px] rounded-t-lg">
            <tr>
           
              <th className="px-3 py-3 font-[Inter,sans-serif] text-base font-medium text-[#121212] capitalize leading-none tracking-normal text-left w-[191px]">
                Customer Email
              </th>
              <th className="px-3 py-3 font-[Inter,sans-serif] text-base font-medium text-[#121212] capitalize leading-none tracking-normal text-left w-[150px]">
                Depositor Name
              </th>
              <th
                className="px-3 py-3 font-[Inter,sans-serif] text-base font-medium text-[#121212] capitalize leading-none tracking-normal
                           w-[120px] flex flex-col justify-center items-center"
              >
                <div className="px-2">Amount Paid</div>
                <div>(₦)</div>
              </th>
             
              <th className="px-3 py-3 font-[Inter,sans-serif] text-base font-medium text-[#121212] capitalize leading-none tracking-normal text-center w-[144px]">
                Bank Account Name
              </th>
             
              <th className="px-3 py-3 font-[Inter,sans-serif] text-base font-medium text-[#121212] capitalize leading-none tracking-normal text-center w-[120px]">
                Paid From Bank
              </th>
              <th className="px-3 py-3 font-[Inter,sans-serif] text-base font-medium text-[#121212] capitalize leading-none tracking-normal text-left w-[100px]">
                Paid Date
              </th>
              <th className="px-3 py-3 font-[Inter,sans-serif] text-base font-medium text-[#121212] capitalize leading-none tracking-normal text-center w-[70px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
             
                <td
                  className="px-3 py-4 w-[191px] flex items-center justify-start"
                  style={{ verticalAlign: 'middle' }}
                >
                  <div
                    className="flex items-center w-[167px] h-auto gap-3"
                  >
                    <div
                      className="bg-white w-[28px] h-[28px] rounded-md flex items-center justify-center
                                 font-medium text-base leading-[160%] capitalize text-[#121212] flex-shrink-0"
                      style={{ border: '0.5px solid #D2D1D6' }}
                    >
                      {transaction.id}
                    </div>
                   
                    <span
                      className="font-medium text-base leading-[160%] capitalize text-[#121212] min-w-0 flex-grow break-words"
                    >
                      {transaction.customerEmail}
                    </span>
                  </div>
                </td>
             
                <td
                  className="px-3 py-4 whitespace-nowrap font-normal text-base leading-[100%] text-center text-[#121212]/80 w-[150px] overflow-hidden text-ellipsis"
                  style={{ verticalAlign: 'middle' }}
                >
                  {transaction.depositorName}
                </td>
               
                <td
                  className="px-3 py-4 whitespace-nowrap font-normal text-base leading-[100%] text-center text-[#121212]/80 w-[100px]"
                  style={{ verticalAlign: 'middle' }}
                >
                  {transaction.amountPaid}
                </td>
             
                <td
                  className="px-3 py-4 whitespace-nowrap font-medium text-base leading-[160%] capitalize text-[#121212] w-[144px] overflow-hidden text-ellipsis text-left"
                  style={{ verticalAlign: 'middle' }}
                >
                  {transaction.bankAccountName}
                </td>
               
                <td
                  className="px-3 py-4 whitespace-nowrap font-medium text-base leading-[160%] capitalize text-[#121212] w-[120px] overflow-hidden text-ellipsis text-left"
                  style={{ verticalAlign: 'middle' }}
                >
                  {transaction.paidFromBank}
                </td>
             
                <td
                  className="px-3 py-4 whitespace-nowrap font-medium text-base leading-[160%] capitalize text-[#121212] w-[100px] text-left"
                  style={{ verticalAlign: 'middle' }}
                >
                  {transaction.paidDate}
                </td>
             
                <td
                  className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium w-[70px]"
                  style={{ verticalAlign: 'middle' }}
                >
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default CustomerWalletHistory;


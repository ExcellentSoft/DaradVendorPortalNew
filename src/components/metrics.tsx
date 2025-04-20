// pages/index.js
import Image from 'next/image';
export default function Home() {
    return (
      <div className="min-h-screen  p-8">
         <h1 className="text-[24px] font-bold text-[#5604F6] mb-2">Good Morning Temitope,</h1>
          <p className="text-lg text-[#121212CC] mb-8 pb-4 border-b border-[#1212121A]">Your store is performing great! Here’s what’s happening today.</p>
  
          <h1 className="text-[24px] font-bold text-[#000000] mb-2">Wallet & Payment Metrics,</h1>
          <p className="text-lg text-[#121212CC] mb-8">Monitor your earnings and manage transactions effortlessly</p>
  
          <div className="grid grid-cols-3 gap-6 mb-8 mt-20">
            {/* Sale Wallet Balance */}
            <div className="w-full max-w-[500px] min-h-[500px] bg-white p-8 rounded-xl shadow-md flex flex-col justify-between">
  {/* Header */}
  <div>
    <div className="flex items-center space-x-2 mb-4">
      <Image src="/fund.svg" alt="Wallet Icon" width={40} height={40} />
      <h2 className="text-[#161A41C7] font-semibold">Sale Wallet Balance</h2>
    </div>
    <p className="text-[40px] font-bold text-center text-[#121212]">₦1,200,000</p>
  </div>

  {/* Buttons */}
  <div className="flex space-x-3 border-b border-gray-200 w-full pb-4 mt-6">
    <button className="border border-[#5604F6] text-indigo-600 font-medium py-1.5 px-4 rounded-md">
      Transfer Funds
    </button>
    <button className="bg-indigo-700 text-white font-medium py-1.5 px-4 rounded-md">
      Withdraw Funds
    </button>
  </div>

  {/* Daily Sales Stats */}
  <div className="flex justify-between items-center bg-[#F8F8F8] p-4 mt-4 rounded-md">
    <div>
      <p className="text-gray-500 text-sm">Daily Sales Stats</p>
      <p className="font-medium">₦150,000 Sales Today</p>
    </div>
    <img src="/Line.svg" alt="trend" className="w-24" />
  </div>

  {/* Pending Withdrawal */}
  <div className="bg-[#F8F8F8] p-4 rounded-md">
    <p className="text-gray-500 text-sm">Pending Withdrawal</p>
    <p className="text-sm">Next Withdrawal Available On Mar 05, 2025</p>
  </div>

  {/* Recent Transaction */}
  <div className="flex justify-end items-center mt-6">
    <button className="text-sm text-gray-700 flex items-center space-x-2">
      <span>Recent Transaction</span>
      <span className="text-lg">{'>'}</span>
    </button>
  </div>
</div>

  
            {/* Account Wallet Balance */}
            <div className="w-full max-w-[500px] h-full min-h-[500px] bg-[#FFFFFF] p-8 rounded-xl shadow-md flex flex-col justify-between space-y-10">

      <div>
        <div className="flex items-center space-x-2 mb-2">
          
                       <Image src="/yellowwallet.svg" alt="Darads Logo" width={40} height={40} />
           
         
          <h2 className="text-[#161A41C7] font-semibold">Sale Wallet Balance</h2>
        </div>
        <p className="text-[40px] font-bold flex justify-center text-[#121212]">₦120,000</p>
      </div>
      <div className="flex justify-center">
        
        <button className="bg-[#5604F6] text-white font-medium py-2 px-6 rounded-md">
          Fund Wallet
        </button>
      </div>
     
      <div>


      <div className='flex  bg-[#F8F8F8] p-2'>
        <div>
        <p className="text-gray-500 text-sm">Daily Credit</p>
        <p className="text-sm">₦35,000 credited today</p>
         
        </div>
       
        <div>
        </div>
         
        </div>
      <div className="border-t pt-4 ">
        <div className='flex justify-between bg-[#F8F8F8] p-2'>
        <div>
          <p className="text-gray-500 text-sm">Transaction Count</p>
          <p className="font-medium">12 transactions today</p>
         
        </div>
        <img src="/Line.svg" alt="trend" className=" w-24 " />
        <div>
        </div>
         
        </div>
       
      </div>
      </div>
      <div className="flex justify-end items-center">
  <button className="text-sm text-gray-700  flex items-center space-x-3">
    <span>Recent Transaction</span>
    <span className="text-lg">{'>'}</span>
  </button>
</div>

    </div>
  
            {/* Promotion Performance */}
            <div className="w-full max-w-[500px] h-full min-h-[500px] bg-[#FFFFFF] p-8 rounded-xl shadow-md flex flex-col justify-between space-y-10">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="bg-pink-100 p-2 rounded-full">
          <Image src="/notify.svg" alt="Darads Logo" width={40} height={40} />
           
          </div>
          <h2 className="text-gray-700 font-semibold">Promotion Performance</h2>
        </div>
        <div className='flex justify-center'>
        <div className='flex flex-col'>
        <p className="text-[40px] font-bold flex justify-center text-[#121212]">3</p>
        <p className="text-sm text-[#12121299]">Active Promotions</p>
        </div>
        </div>
      </div>
      <div className="flex justify-center">
  <div className="bg-gray-100 rounded-md w-full max-w-[207px] gap-4 flex justify-center p-3 text-sm font-medium text-gray-700">
    <button className="bg-white text-indigo-600 rounded-md px-2">1D</button>
    <button>1W</button>
    <button>1M</button>
    <button>1Y</button>
  </div>
</div>

       <div className=' bg-[#F8F8F8] p-2'>
        <p className="text-gray-500 text-sm">Ad Spend Today</p>
        <p className="font-medium text-green-600 mt-3">
          ₦20,000 <span className="text-xs">(↑ 8% From Yesterday)</span>
        </p>
      </div>
      <button className="bg-indigo-700 text-white font-medium py-2 px-4 rounded-md w-fit self-center">
        View Analytics
      </button>
    </div>
          </div>
  
       
        </div>
     
    );
  }
  
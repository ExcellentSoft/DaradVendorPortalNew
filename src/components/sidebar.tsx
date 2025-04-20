
import Image from 'next/image';

export default function Sidebar() {
  return (
    
      <aside className="flex flex-col  h-[3100px]  bg-white border-r shadow-sm ">
  
     
     
      <div className="flex-1 flex flex-col ">
        {/* Logo and Search */}
        <div className="p-4 shrink-0">
          <div className="ml-16 flex">
            <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
            <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
          </div>

          <input
            type="text"
            placeholder="Search sidebar..."
            className="mt-4 w-full px-3 py-2 border rounded text-sm"
          />
        </div>

        {/* Scrollable Nav */}
        <nav className="flex-1  text-sm px-4 space-y-6 pb-6">
          <div>
            <p className="text-[#121212CC] uppercase  text-xs mt-6 ml-6 font-semibold pb-2">Business Overview</p>
            <p className='text-#12121266 border borber-b mb-8'></p>
           
            <ul className="space-y-1 font-semibold">
              <li className="bg-[#5604F6]  text-white flex items-center gap-6 px-4 py-3 rounded-t-2xl">
                <Image src="/overview.svg" alt="Overview" width={20} height={16} />
                <span>Overview</span>
              </li>
              <li className="flex items-center gap-6 px-4 py-3 text-[#121212]">
                <Image src="/order.svg" alt="Orders" width={20} height={20} />
                <span>Orders</span>
              </li>
              <li className="flex items-center gap-6 px-4 py-3 text-[#121212]">
                <Image src="/products.svg" alt="Products" width={20} height={20} />
                <span>Products</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#121212CC] uppercase  text-xs mt-6 ml-6 font-semibold pb-2">Finance & Transactions</p>
            <p className='text-#12121266 border borber-b'></p>
           
            <ul className="space-y-1 font-semibold">
              <li className="flex items-center gap-6 px-4 py-3 text-[#121212]">
                <Image src="/wallet.svg" alt="Wallet" width={20} height={20} />
                <span>Wallet</span>
              </li>
              <li className="flex items-center gap-6 px-4 py-3 text-[#121212]">
                <Image src="/transaction.svg" alt="Transactions" width={20} height={20} />
                <span>Transactions</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#121212CC] uppercase  font-semibold text-xs mt-6 ml-6  pb-2">Store And Customer Engagement</p>
            <p className='text-#12121266 border borber-b'></p>
            <ul className="space-y-1 font-semibold">
              <li className="flex items-center gap-6 px-4 py-3 text-[#121212]">
                <Image src="/globe.svg" alt="My Website" width={20} height={20} />
                <span>My Website</span>
              </li>
              <li className="flex items-center gap-6 px-4 py-3 text-[#121212]">
                <Image src="/promotion.svg" alt="Promotion" width={20} height={20} />
                <span>Promotion</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#121212CC] uppercase   text-xs mt-6 ml-6  pb-2">Account And Utilities</p>
            <p className='text-#12121266 border borber-b'>

            </p>
            <ul className="space-y-1 font-semibold">
              <li className="flex items-center gap-6 px-4 py-3 text-[#121212]">
                <Image src="/settingss.svg" alt="Settings" width={20} height={20} />
                <span>Settings</span>
              </li>
              <li className="flex items-center gap-6 px-4 py-3 text-[#121212]">
                <Image src="/utility.svg" alt="API & Utilities" width={20} height={20} />
                <span>API & Utilities</span>
              </li>
              <li className="flex items-center gap-6 px-4 py-3 text-[#121212]">
                <Image src="/support.svg" alt="Support" width={20} height={20} />
                <span>Support</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Footer */}
      <div className="bg-[#5604F6] text-white flex items-center justify-between px-4 py-3 rounded-t-2xl shrink-0">
        <div className="flex items-center gap-6 px-4 py-3">
          <Image src="/logout.svg" alt="Logout" width={32} height={32} />
          <Image src="/user.svg" alt="User Avatar" width={32} height={32} />
          <div className="text-sm flex flex-col">
            <p className="font-semibold leading-none truncate w-28">Temitope Sore...</p>
            <p className="text-xs text-gray-200 truncate w-28">Temito...@Gmail.Com</p>
          </div>
        </div>
       
      </div>
    </aside>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type MenuItem = {
  icon: string;
  label: string;
  action?: () => void;
};

type MenuSection = {
  section: string;
  items: MenuItem[];
};

export default function Sidebar({ setActivePage }: { setActivePage: (page: string) => void }) {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [activePage, setPage] = useState<string>('Overview');
  const router = useRouter();

  useEffect(() => {
    const email = sessionStorage.getItem('userEmail');
    setUserEmail(email);
  }, []);

  const handleMenuClick = (page: string) => {
    setPage(page);
    setActivePage(page);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    router.push('/');
  };

  const menuItems: MenuSection[] = [
    {
      section: 'Business Overview',
      items: [
        { icon: '/overview.svg', label: 'Overview' },
        { icon: '/products.svg', label: 'Products' },
        { icon: '/order.svg', label: 'Orders' },
      ],
    },
    {
      section: 'Finance & Transactions',
      items: [
        { icon: '/wallet.svg', label: 'Wallet' },
        { icon: '/transaction.svg', label: 'Transactions' },
      ],
    },
    {
      section: 'Store And Customer Engagement',
      items: [
        { icon: '/globe.svg', label: 'My Website' },
        { icon: '/promotion.svg', label: 'Promotion' },
      ],
    },
    {
      section: 'Account And Utilities',
      items: [
        { icon: '/settingss.svg', label: 'Settings' },
        { icon: '/utility.svg', label: 'API & Utilities' },
        { icon: '/support.svg', label: 'Support' },
      ],
    },
    {
      section: 'Logout',
      items: [
        { icon: '/logout.svg', label: 'Logout', action: handleLogout },
      ],
    },
  ];

  return (
    <aside className="flex flex-col h-screen bg-white border-r shadow-sm">
      <div className="p-4">
        <div className="ml-16 flex">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <Image src="/logo-name.svg" alt="Logo Name" width={152} height={40} />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto text-sm px-4 space-y-6 pb-6">
        {menuItems.map((section) => (
          <div key={section.section}>
            <p className="text-[#121212CC] uppercase text-xs mt-6 ml-6 font-semibold pb-2">{section.section}</p>
            <p className="text-[#C8C8C8] border-b mb-2" />
            <ul className="space-y-1 font-semibold">
              {section.items.map((item) => (
                <li
                  key={item.label}
                  onClick={() => {
                    if (item.action) {
                      item.action();
                    } else {
                      handleMenuClick(item.label);
                    }
                  }}
                  className={`flex items-center gap-6 px-4 py-3 cursor-pointer rounded-t-2xl ${
                    activePage === item.label ? 'bg-[#5604F6] text-white' : 'text-[#121212]'
                  }`}
                >
                  <Image src={item.icon} alt={item.label} width={20} height={20} />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div
        onClick={handleLogout}
        className="bg-[#5604F6] text-white flex items-center justify-between px-4 py-3 rounded-t-2xl cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <Image src="/user.svg" alt="User" width={32} height={32} />
          <div className="text-sm flex flex-col">
            <p className="text-xs text-gray-200 truncate w-28">
              {userEmail || 'Temitope.....@gmail.com'}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

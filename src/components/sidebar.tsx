'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type MenuItem = {
  icon: string;
  label: string;
  action?: () => void;
  children?: string[]; 
};

type MenuSection = {
  section: string;
  items: MenuItem[];
};

export default function Sidebar({ setActivePage }: { setActivePage: (page: string) => void }) {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [activePage, setPage] = useState<string>('Overview');
  const [expandedMenus, setExpandedMenus] = useState<{ [label: string]: boolean }>({});
  const [selectedPromotionTab, setSelectedPromotionTab] = useState<string>('Promotion Analytics');

  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
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

  const isChildActive = (children: string[] | undefined) => {
    return children?.some((child) => activePage === child);
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
        {
          icon: '/wallet.svg',
          label: 'Wallet',
          children: ['Sales Wallet', 'Account Wallet', 'Fund Customer Wallet'],
        },
        {
          icon: '/transaction.svg',
          label: 'Transactions',
          children: ['Sales Transactions', 'Account Transactions'],
        },
      ],
    },
    {
      section: 'Store And Customer Engagement',
      items: [
        {
          icon: '/globe.svg',
          label: 'My Website',
          children: ['Vendor Website Setup', 'Website Statistics'],
        },
        {
          icon: '/promotion.svg',
          label: 'Promotion',
          children: ['Promotion Analytics', 'Create Promotion'],
        },
      ],
    },
    {
      section: 'Account And Utilities',
      items: [
        { icon: '/settingss.svg', label: 'Settings' },
        // { icon: '/utility.svg', label: 'API & Utilities' },
        { icon: '/support.svg', label: 'Support' },
      ],
    },
    {
      section: 'Logout',
      items: [{ icon: '/logout.svg', label: 'Logout', action: handleLogout }],
    },
  ];

  return (
    <aside className="flex flex-col h-screen bg-white border-r shadow-sm">
   <div className="p-4">
  <div className="ml-16 flex items-center" style={{ minWidth: 192 }}>
    <img src="/logo.svg" alt="Logo" width={40} height={40} />
    <img src="/logo-name.svg" alt="Logo Name" width={152} height={40} />
  </div>
</div>


      <nav className="flex-1 overflow-y-auto text-sm px-4 space-y-6 pb-6">
        {menuItems.map((section) => (
          <div key={section.section}>
            <p className="text-[#121212CC] uppercase text-xs mt-6 ml-6 font-semibold pb-2">
              {section.section}
            </p>
            <p className="text-[#C8C8C8] border-b mb-2" />
          <ul className="space-y-1 font-semibold">
  {section.items.map((item) => (
    <li key={item.label} className="flex flex-col">
      <div
        onClick={() => {
          if (item.children) {
            setExpandedMenus((prev) => ({
              ...prev,
              [item.label]: !prev[item.label],
            }));
          } else if (item.action) {
            item.action();
          } else {
            handleMenuClick(item.label);
          }
        }}
        className={`flex items-center gap-6 px-4 py-3 cursor-pointer rounded-t-2xl ${
          activePage === item.label || isChildActive(item.children)
            ? 'bg-[#5604F6] text-white'
            : 'text-[#121212]'
        }`}
      >
        <img src={item.icon} alt={item.label} width={20} height={20} />
        <span>{item.label}</span>
        {item.children && (
          <span className="ml-auto text-lg">
            {expandedMenus[item.label] ? '▾' : '▸'}
          </span>
        )}
      </div>

      {/* Children (dropdown submenu) */}
      {item.children && expandedMenus[item.label] && (
        <ul className="ml-4 mt-1 space-y-1 bg-white rounded-md shadow-sm">
          {item.children.map((child) => (
            <li
              key={child}
              onClick={() => {
                setSelectedPromotionTab(child);
                handleMenuClick(child);
              }}
              className={`cursor-pointer px-4 py-2 rounded-md relative transition-colors duration-150 ${
                selectedPromotionTab === child
                  ? 'bg-[#EAE0FF] text-[#5604F6] font-medium before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#5604F6] before:rounded'
                  : 'text-[#121212] hover:bg-gray-100'
              }`}
            >
              {child}
            </li>
          ))}
        </ul>
      )}
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
          <img src="/user.svg" alt="User" width={32} height={32} />
          <div className="text-sm flex flex-col">
            <p className="text-xs text-gray-200 truncate w-28">
              {hasMounted ? (userEmail ?? 'Temitope.....@gmail.com') : null}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

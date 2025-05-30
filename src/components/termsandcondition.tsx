import { useState } from 'react';

// Embedded SidebarLayout component
const SidebarLayout = ({
  children,
  setActiveSection,
  activeSection,
}: {
  children: React.ReactNode;
  setActiveSection: (section: string) => void;
  activeSection: string;
}) => {
  const menuItems = [
    { label: 'Contact Us', section: 'contact' },
    { label: 'Terms & Conditions', section: 'terms' },
    { label: 'Privacy Policy', section: 'privacy' },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="w-1/5 bg-gray-100 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.section}>
              <button
                onClick={() => setActiveSection(item.section)}
                className={`w-full text-left px-4 py-2 rounded ${
                  activeSection === item.section
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
};

const accordionItems = {
  terms: [
    {
      title: 'Account Responsibilities',
      content: 'You must secure your account and comply with our platform rules.',
    },
    {
      title: 'Product Listings & Sales',
      content: 'Only legitimate products can be sold. Counterfeit items are prohibited.',
    },
    {
      title: 'Payment & Payouts',
      content: 'Payouts occur every 3 days. Disputes must be raised within 7 days.',
    },
  ],
  privacy: [
    {
      title: 'Information We Collect',
      content: 'We collect name, email, and product info to improve your experience.',
    },
    {
      title: 'Information Sharing',
      content: 'We never sell your data. Limited sharing is done for operational purposes.',
    },
    {
      title: 'Your Rights',
      content: 'You can request data deletion or export anytime.',
    },
  ],
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('contact');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const renderContact = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">📞 Contact Us</h2>
        <p className="text-gray-600">Need help? Get in touch with our support team.</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message Subject</label>
          <select className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-purple-500">
            <option>Select A Subject</option>
            <option>Technical Issue</option>
            <option>Payment Inquiry</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            className="w-full border px-4 py-2 rounded resize-none focus:ring-2 focus:ring-purple-500"
            rows={5}
          />
        </div>
        <div className="bg-gray-50 border border-dashed p-6 rounded text-center">
          <p className="mb-2">Upload File</p>
          <input type="file" className="hidden" id="fileUpload" onChange={handleFileChange} />
          <label htmlFor="fileUpload" className="cursor-pointer px-4 py-2 border text-purple-600 rounded hover:bg-purple-50">
            {file ? file.name : 'Drag your file(s) or browse'}
          </label>
          <p className="text-xs text-gray-400 mt-1">Max 10MB. .jpg, .png, .svg, .zip</p>
        </div>
        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Submit Request</button>
      </form>
    </div>
  );

  const renderAccordion = (type: 'terms' | 'privacy') => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">
          {type === 'terms' ? '📜 Terms & Conditions' : '🔒 Privacy Policy'}
        </h2>
        <p className="text-gray-600">
          {type === 'terms'
            ? 'Rules governing your use of My Darads services.'
            : 'How we protect and use your data.'}
        </p>
      </div>
      <div className="space-y-4">
        {accordionItems[type].map((item, index) => (
          <div key={index} className="border rounded">
            <button
              className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 flex justify-between"
              onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
            >
              {item.title}
              <span>{openAccordion === index ? '-' : '+'}</span>
            </button>
            {openAccordion === index && (
              <div className="px-4 py-3 text-gray-700 bg-white">{item.content}</div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-4 mt-6">
        <button className="bg-white border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-50">
          ❌ Decline
        </button>
        <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
          ✅ Accept & Continue
        </button>
      </div>
    </div>
  );

  return (
    <SidebarLayout setActiveSection={setActiveSection} activeSection={activeSection}>
      {activeSection === 'contact'
        ? renderContact()
        : renderAccordion(activeSection as 'terms' | 'privacy')}
    </SidebarLayout>
  );
}

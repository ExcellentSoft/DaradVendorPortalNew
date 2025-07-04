import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddNewProductForm() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [sku, setSku] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    axios
      .get(
        'https://daradsapi-dedghra9bga3bscr.eastus-01.azurewebsites.net/api/Vendor/Products/categories?searchText=p',
        { headers: { accept: 'text/plain' } }
      )
      .then((res) => {
        if (res.data?.status && res.data?.data) {
          setCategories(res.data.data);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch categories', err);
      });
  }, []);



  
const getCategoryIdByName = (name: string): number | null => {
  const found = categories.find((cat) => cat.name === name);
  return found ? found.id : null;
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const categoryId = getCategoryIdByName(category);
if (categoryId === null) {
  alert("Please select a valid category.");
  return;
}

const payload = {
  name: productName,
  description: description,
  price: parseFloat(price),
  categoryId: categoryId,
  qty: parseInt(stockQuantity),
  colors: [],
  sizes: [],
  stock: parseInt(stockQuantity),
  vendorId: parseInt(localStorage.getItem('vendorId') || '0'), 
};


    const headers: any = {
      'Content-Type': 'application/json',
      Accept: 'text/plain',
    };

    // Optionally add auth header
    const token = localStorage.getItem('authToken'); // if stored
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.post(
      'https://daradsapi-dedghra9bga3bscr.eastus-01.azurewebsites.net/api/Vendor/Products/create-product',
      payload,
      { headers }
    );

    if (response.data?.status) {
      alert('Product created successfully!');
      console.log(response.data);
    } else {
      alert('Product creation failed.');
      console.log(response.data);
    }
  } catch (error) {
    console.error('Error creating product:', error);
    alert('An error occurred while creating the product.');
  }
};

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-sans">
      <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center text-black font-[Urbanist] mb-2">
          Add New Product
        </h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          Fill in the details below to add a new product to your store.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[#101928]">Product Name</label>
            <input
              type="text"
              placeholder="Nike Air Max 90"
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">Description</label>
            <textarea
              placeholder="A stylish and comfortable sneaker with premium cushioning and durable design."
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">Category</label>
           <div>
  <label className="text-sm font-medium text-[#101928]">Category</label>
  <select
    className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="">Select Category</option>
    {categories.map((cat) => (
      <option key={cat.id} value={cat.name}>
        {cat.name}
      </option>
    ))}
  </select>
</div>

          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">Subcategory</label>
            <select
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
            >
              <option value="">Footwear, Accessories</option>
              <option value="Footwear">Footwear</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">Price Per Unit</label>
            <input
              type="text"
              placeholder="Enter price, e.g., 5000"
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">Stock Quantity</label>
            <input
              type="text"
              placeholder="120"
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">SKU / Product Code</label>
            <input
              type="text"
              placeholder="NM-AIR90-2023"
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">Date Added</label>
            <input
              type="text"
              placeholder="12-march-2025"
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
              value={dateAdded}
              onChange={(e) => setDateAdded(e.target.value)}
            />
          </div>

          {/* Upload Section */}
     <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-[0px_4px_6px_0px_#2121210A,_0px_4px_50px_0px_#21212114] mt-8">
  <div className="flex flex-col mb-4 gap-2">
    <h3 className="block text-lg font-urbanist font-bold leading-[1.75rem] tracking-[0.02em] text-[#0B0B0B] capitalize">
      image & video upload
    </h3>
    <p className="font-inter font-normal text-sm leading-[1.5rem] tracking-[0.01em] text-[#6D6D6D]">
      Drag & drop or upload a product video <br />(max: 60 seconds).
    </p>
  </div>

  <div
    className="flex justify-center px-6 pt-5 pb-6 border-[2px] border-dashed border-[#5604F6] rounded-md"
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => {
      e.preventDefault();
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setMediaFile(e.dataTransfer.files[0]);
      }
    }}
  >
    <div className="space-y-2 text-center">
      <svg
        className="mx-auto h-12 w-12 text-[#5604F6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>

      <div className="flex justify-center text-sm text-gray-600">
        <label
          htmlFor="media-file-upload"
          className="relative cursor-pointer bg-white rounded-md focus-within:outline-none"
        >
          <span className="font-inter font-normal text-sm leading-6 tracking-[0.01em] text-[#0B0B0B]">
            Drag your file(s) or{' '}
          </span>
          <span className="font-inter font-semibold text-sm leading-6 tracking-[0.01em] text-[#5604F6]">
            browse
          </span>
          <input
            id="media-file-upload"
            name="media-file-upload"
            type="file"
            className="sr-only"
            onChange={(e) => handleFileChange(e, setMediaFile)}
            accept="image/*,video/*,.svg,.zip"
          />
        </label>
      </div>

      <p className="font-inter font-normal text-sm leading-6 tracking-[0.01em] text-center text-[#6D6D6D]">
        Max size: 10MB are allowed
      </p>

      {mediaFile && (
        <p className="text-sm text-gray-700 mt-1">
          Selected file: {mediaFile.name}
        </p>
      )}
    </div>
  </div>

  <p className="font-inter font-normal text-sm leading-6 tracking-[0.01em] text-left text-[#6D6D6D] mt-2">
    Only support .jpg, .png, .svg, .zip,files
  </p>
</div>

        {/* Buttons */}
<div className="flex justify-between gap-4 mt-8 w-full">
  <button
    type="button"
    className="w-[157px] h-[41px] flex items-center justify-center rounded-lg px-5 py-3 bg-white text-[#121212CC] text-base font-medium border border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D]"
  >
    Cancel
  </button>
  <button
    type="submit"
    className="w-[157px] h-[41px] flex items-center justify-center rounded-lg px-5 py-3 bg-[#5604F6] text-white text-base font-medium"
  >
    Save product
  </button>
</div>


        </form>
      </div>
    </div>
  );
}

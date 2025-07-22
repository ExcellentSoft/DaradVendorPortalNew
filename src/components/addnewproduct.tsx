"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Video } from 'lucide-react';



interface ProductData {
  id?: number;         
  name?: string;
  description?: string;
  categoryId?: number;
  price?: number;
  stock?: number;
}



interface CreateModalProps {
  onClose: () => void;
  isEdit?: boolean;
  productData?: ProductData | null;
}


const CreateModal: React.FC<CreateModalProps> = ({ onClose, isEdit = false, productData }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
 const [category, setCategory] = useState<number | null>(null);
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

useEffect(() => {
  if (isEdit && !productData) {
    console.warn('productData is undefined for edit mode');
    return;
  }

  if (isEdit && productData) {
    setProductName(productData.name || '');
    setDescription(productData.description || '');
    setCategory(productData.categoryId ?? null);
    setPrice(productData.price?.toString() || '');
    setStockQuantity(productData.stock?.toString() || '');
  }
}, [isEdit, productData]);



  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const response = await axios.get(
          `https://daradsapi-dedghra9bga3bscr.eastus-01.azurewebsites.net/api/Vendor/Products/categories?searchText=${searchTerm}`,
          { headers: { accept: 'text/plain' } }
        );
        if (response.data?.status && response.data?.data) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error('Failed to fetch categories', error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, [searchTerm]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!category) {
      setResponseMessage('Please select a category.');
      return;
    }

   const productId = isEdit && productData?.id ? productData.id : undefined;

const payload = {
  name: productName,
  description,
  price: parseFloat(price),
  categoryId: category !== null ? category : 0,
  qty: parseInt(stockQuantity),
  colors: [],
  sizes: [],
  stock: parseInt(stockQuantity),
  vendorId: parseInt(localStorage.getItem('vendorId') || '0'),
  ...(productId ? { id: productId } : {}),
};


    try {
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      };

      const url = isEdit
        ? 'https://daradsapi-dedghra9bga3bscr.eastus-01.azurewebsites.net/api/Vendor/Products/update-product'
        : 'https://daradsapi-dedghra9bga3bscr.eastus-01.azurewebsites.net/api/Vendor/Products/create-product';

      const response = await axios[isEdit ? 'put' : 'post'](url, payload, { headers });

      if (response.data?.status) {
const productId = isEdit && (productData as ProductData)?.id ? (productData as ProductData).id : undefined;
setCategory((productData as ProductData)?.categoryId ?? null);

        setResponseMessage(isEdit ? 'Product updated successfully!' : 'Product created successfully! Uploading image...');

        if (mediaFile && productId) {
          await uploadProductImage(productId, mediaFile);
          setResponseMessage(isEdit ? 'Product updated and image uploaded!' : 'Product and image uploaded successfully!');
        }

        onClose();
      } else {
        setResponseMessage('Operation failed.');
      }
    } catch (error) {
      console.error('Error during product operation:', error);
      setResponseMessage('An error occurred.');
    }
  };

  const uploadProductImage = async (productId: number, file: File) => {
    const formData = new FormData();
    formData.append('ProductId', productId.toString());
    formData.append('Image', file);

    try {
      const response = await axios.post(
        'https://daradsapi-dedghra9bga3bscr.eastus-01.azurewebsites.net/api/Vendor/Products/add-product-image',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'text/plain',
          },
        }
      );
      console.log('Image upload response:', response.data);
    } catch (error) {
      console.error('Error uploading product image:', error);
      setResponseMessage('Product was saved but image upload failed.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMediaFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-w-2xl p-8 font-sans">
      <div className="bg-white max-h-screen overflow-y-auto rounded-2xl p-8 w-full max-w-2xl cursor-pointer">
        <h1 className="text-2xl font-semibold text-center text-black mb-2">
          {isEdit ? 'Edit Product' : 'Add New Product'}
        </h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          {isEdit
            ? 'Update the details of your product.'
            : 'Fill in the details below to add a new product to your store.'}
        </p>

        {responseMessage && (
          <div
            className={`text-sm font-medium my-4 ${
              responseMessage.toLowerCase().includes('success') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {responseMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[#101928]">Product Name</label>
            <input
              type="text"
              placeholder="Product Name"
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">Description</label>
            <textarea
              placeholder="Product description"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-[#121212CC]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">Category</label>
          <Select
  isLoading={loadingCategories}
  options={categories.map((cat) => ({ label: cat.name, value: cat.id }))}
  onInputChange={(inputValue) => setSearchTerm(inputValue)}
  onChange={(selectedOption) => setCategory(selectedOption ? selectedOption.value : null)}
  value={category ? categories.map(cat => ({ label: cat.name, value: cat.id })).find(option => option.value === category) : null}
  placeholder="Search and select category"
  isClearable
  className="mt-2 text-black"
/>

          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">Price Per Unit</label>
            <input
              type="text"
              placeholder="Enter price"
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101928]">Stock Quantity</label>
            <input
              type="text"
              placeholder="Stock quantity"
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 text-sm text-[#121212CC]"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </div>

          <div className="bg-white px-6 py-8 rounded-xl shadow-2xl mt-8">
            <div className="flex flex-col mb-4 gap-2">
              <h3 className="text-lg font-semibold text-[#0B0B0B]">Image & Video Upload</h3>
              <p className="text-sm text-[#6D6D6D]">
                Drag & drop or upload a product image/video (max: 60 seconds).
              </p>
            </div>

            <div
              className="flex justify-center items-center h-[200px] p-6 border-2 border-dashed border-[#5604F6] rounded-md"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  setMediaFile(e.dataTransfer.files[0]);
                }
              }}
            >
              <div className="space-y-2 text-center">
                <Video className="text-[#5604F6] mx-auto" size={32} />
                <input
                  id="media-file-upload"
                  name="media-file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  accept="image/*,video/*,.svg,.zip"
                />
                <label htmlFor="media-file-upload" className="cursor-pointer text-[#5604F6] font-semibold">
                  Drag your file(s) or <span className="font-bold">browse</span>
                </label>
                <p className="text-sm text-[#6D6D6D]">Max 10 MB files are allowed</p>

                {mediaFile && (
                  <p className="text-sm text-gray-700 mt-1">
                    Selected file: {mediaFile.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4 mt-8 w-full">
            <button
              onClick={onClose}
              type="button"
              className="rounded-lg px-8 py-4 bg-white text-[#121212CC] text-base font-medium border border-[#E6E7EA]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-8 py-4 bg-[#5604F6] text-white text-base font-medium"
            >
              {isEdit ? 'Update Product' : 'Save Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;

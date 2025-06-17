import { useState } from "react";
import { Upload, Trash2, Eye } from "lucide-react";
import Image from 'next/image';

export default function BrandCustomization() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="w-full mx-auto p-6">
      <p className="text-black">
        Upload and adjust your banner image to create a stunning first impression.
      </p>

      <div className="mt-6 border rounded-md p-6 w-full">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Upload Banner Image
        </h3>
        <p className="text-xs text-gray-500 mb-4">
          Upload a clear, high-quality logo (PNG, JPG, or SVG).
        </p>

        <div className="border border-dashed border-purple-400 rounded-lg p-6 text-center bg-white">
          {image ? (
            <div className="relative">
              <div className="rounded-md w-full h-48 overflow-hidden relative">
                <Image
                  src={image}
                  alt="Uploaded Banner"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                  <Eye className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={removeImage}
                  className="bg-white p-1 rounded-full shadow hover:bg-gray-100"
                >
                  <Trash2 className="h-4 w-4 text-red-600" />
                </button>
              </div>
            </div>
          ) : (
            <label className="block cursor-pointer">
              <div className="flex flex-col items-center">
                <Upload className="text-[#5604F6] h-6 w-6 mb-2" />
                <p className="text-sm text-gray-600">Drop banner image or browse</p>
                <p className="text-xs text-gray-400 mt-1">
                  Format: .jpg, .jpeg & .png | Max size: 25 MB
                </p>
                <div className="mt-3 inline-block px-4 py-1 text-sm font-medium text-white bg-[#5604F6] rounded hover:bg-purple-700">
                  Browse Files
                </div>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

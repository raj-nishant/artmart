import React, { useState } from "react";

const AddProduct = () => {
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);

  const handleImageChange = (e) => {
    const files = [...e.target.files];
    const urls = files.map((file) => URL.createObjectURL(file));
    setImagePreviewUrls(urls);
  };

  return (
    <>
      <div className="flex mt-14">
        <div className="w-1/3 border-2 border-dotted border-black p-5">
          <form className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="border border-gray-400 rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="images"
                className="block text-gray-700 font-bold mb-2"
              >
                Images
              </label>
              <input
                type="file"
                id="images"
                name="images"
                accept="image/*"
                multiple
                onChange={handleImageChange} // Call handleImageChange when files are selected
                className="border border-gray-400 rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="flex flex-wrap">
              {imagePreviewUrls.map((url, index) => (
                <div key={index} className="w-1/4 p-1">
                  <img
                    src={url}
                    alt={`Preview ${index}`}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="max-w-md mx-auto p-4 bg-gray-50">
          <h1 className="text-sm font-bold mb-4">*Best Primary File Size</h1>
          <div>
            <p className="mb-2 text-sm">
              Hi-Res 4200 x 4800 pixel (wide x tall) 300 ppi transparent .PNG
            </p>
            <p className="mb-2 text-sm">
              The primary file is used as the file for all preview images and
              universally applied to all product types — except cut & sew
              t-shirts, shoes, leggings, duffel bags and backpacks. For best
              results, optimize your file for apparel.
            </p>
            <p className="text-sm">
              For non-apparel products, the primary file's transparent area is
              automatically trimmed and the design is centered on products with
              the chosen design background color. Once products are created, you
              can customize further by uploading an optimized file for each type
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

import React, { useState } from "react";

const AddProduct = () => {
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);

  const handleImageChange = (e) => {
    const files = [...e.target.files];
    const urls = files.map((file) => URL.createObjectURL(file));
    setImagePreviewUrls(urls);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);

    try {
      const jwtData = JSON.parse(localStorage.getItem("jwt"));
      const response = await fetch(
        "https://artist-shop-back-end.onrender.com/api/illustrations/new",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${jwtData.jwt}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        if (response.status === 409) {
          throw new Error("Email is already in use");
        } else {
          throw new Error("Failed to register");
        }
      }

      // setSuccessMessage("Registration successful, redirecting to login......");
      // setErrorMessage("");
      return await response.json();
    } catch (error) {
      // setErrorMessage(error.message);
      // setSuccessMessage("");
    }
  };

  return (
    <>
      <div className="flex h-auto mt-14">
        <div className=" border-2 border-dotted border-black p-5">
          <form onSubmit={handleFormSubmit} className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border border-gray-400 rounded-md py-2 px-3 w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                price
              </label>
              <input
                type="text"
                id="price"
                name="price"
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
                onChange={handleImageChange}
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

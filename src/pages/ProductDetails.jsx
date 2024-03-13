import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwtData = JSON.parse(localStorage.getItem("jwt"));
        const formData = new FormData();
        formData.append("id", id);
        const response = await fetch(
          `https://artist-shop-back-end.onrender.com/api/illustrations/${id}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${jwtData.jwt}`,
            },
            body: formData,
          }
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="mt-3 flex w-full justify-between">
      <div className="p-5 bg-white w-2/5 border flex items-center">
        {data && (
          <div className="md:flex">
            <img
              className="h-1/2 object-cover md:h-full"
              src={data.images[0].url}
              alt={data.name}
            />
          </div>
        )}
      </div>

      <div className="p-10 bg-white w-1/2">
        <form className="space-y-4">
          <div>
            <label className="block font-medium italic" htmlFor="title">
              Product Title
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="text"
              id="title"
              name="title"
              // value={formData.title}
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block font-medium italic" htmlFor="description">
              Description
            </label>
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full"
              id="description"
              name="description"
              // value={formData.description}
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="tags">Tags</label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full italic"
              type="text"
              id="tags"
              name="tags"
              // value={formData.tags}
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <span className="mr-2">Mature Content:</span>
            <label className="inline-block mr-4">
              <input
                type="radio"
                name="matureContent"
                value="yes"
                // checked={formData.matureContent === "yes"}
                // onChange={handleRadioChange}
                className="mr-1"
              />
              Yes
            </label>
            <label className="inline-block">
              <input
                type="radio"
                name="matureContent"
                value="no"
                // checked={formData.matureContent === "no"}
                // onChange={handleRadioChange}
                className="mr-1"
              />
              No
            </label>
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;

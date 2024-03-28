import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="text-black w-1/6 left-0 overflow-y-auto px-7">
      <nav className="mt-6">
        <div className="mb-4">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-300">
            Home
          </Link>
        </div>
        <div className="mb-4">
          <h1 className="text-lg font-bold">Artist Shop</h1>
          <Link
            to="/add-product"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Add Product
          </Link>
          <Link
            to="/products"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Products
          </Link>
          <Link
            to="/collections"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Collections
          </Link>
          <Link
            to="/visit-your-shop"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Visit Your Shop
          </Link>
          <Link
            to="/about-page"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            About Page
          </Link>
          <Link
            to="/earn-more"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Earn More
          </Link>
          <Link
            to="/settings"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Settings
          </Link>
        </div>
        <hr className="border-gray-700 my-2" />
        <div className="mb-4">
          <Link
            to="/pricing"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Pricing
          </Link>
          <Link
            to="/earnings"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Earnings
          </Link>
          <Link
            to="/orders"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Orders
          </Link>
          <Link
            to="/payment-info"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Payment Info
          </Link>
          <Link
            to="/shop-updates"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Shop Updates
          </Link>
          <Link
            to="/promo-tools"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Promo Tools
          </Link>
          <Link
            to="/coupons"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Coupons
          </Link>
        </div>
        <hr className="border-gray-700 my-2" />
        <div className="mb-4">
          <Link
            to="/view-all-challenges"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            View all Challenges
          </Link>
        </div>
        <hr className="border-gray-700 my-2" />
        <div className="mb-4">
          <Link
            to="/faqs"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            FAQs
          </Link>
          <Link
            to="/changelog"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Changelog
          </Link>
          <Link
            to="/creative-resources"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Creative Resources
          </Link>
          <Link
            to="/contact-us"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Contact Us
          </Link>

          <Link
            to="/creative-resources"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Creative Resources
          </Link>
          <Link
            to="/contact-us"
            className="block py-2 px-4 text-sm hover:bg-gray-300"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

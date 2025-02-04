"use client";
import AdminFooter from "@/layout/AdminFooter";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    brand: "",
    category: "",
    productDescription: "",
    stock: "",
    size: "",
    color: "#000000",
    image: "",
  });

  return (
    <>
      <div>
        <div className="flex overflow-hidden bg-white pt-7">
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          ></div>
          <div
            id="main-content"
            className="h-full w-full  relative overflow-y-auto lg:ml-64"
          >
            <main>
              <div className="flex justify-center items-center min-h-screen  p-4">
                <div className="bg-white rounded-2xl p-4 w-full transform transition duration-300  flex flex-col md:flex-row gap-6">
                  <div className="flex-1 flex flex-col justify-center items-center p-4 rounded-xl">
                    <h2 className="text-3xl font-extrabold text-black text-center">
                      Add Product
                    </h2>
                    <p className="text-gray-400 text-center">
                      Fill the details to add a new product
                    </p>
                  </div>
                  <form className="flex-1 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-violet-500"
                        required
                      />
                      <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-violet-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="brand"
                        placeholder="Brand"
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-violet-500"
                        required
                      />
                      <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-violet-500"
                        required
                      />
                    </div>
                    <textarea
                      name="productDescription"
                      placeholder="Description"
                      className="p-3 border rounded-lg focus:ring-2 focus:ring-violet-500"
                      required
                    ></textarea>
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-violet-500"
                        required
                      />
                      <input
                        type="text"
                        name="size"
                        placeholder="Size"
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-violet-500"
                        required
                      />
                      <input
                        type="color"
                        name="color"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500"
                        required
                      />
                    </div>
                    <div className="relative w-full border rounded-lg p-6 flex flex-col items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                      <span className="text-gray-600 text-2xl mb-2">
                        <FaUpload />
                      </span>
                      <input
                        type="file"
                        name="image"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        required
                      />
                      <span className="text-gray-700">Upload Image</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition font-bold shadow-md"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </main>
            <AdminFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

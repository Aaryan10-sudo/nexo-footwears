import React from "react";
import SalesOverview from "./SalesOverview";
import Ruppess from "@/ui/Ruppees";

type Order = {
  orderId: string;
  customer: string;
  address: string;
  orderDate: string;
  totalAmount: number;
  deliveryStatus: string;
  paymentMethod: string;
  paymentStatus: string;
};

const Orders: Order[] = [
  {
    orderId: "12345",
    customer: "John Doe",
    address: "123 Main St, City, State, ZIP",
    orderDate: "2022-01-01",
    totalAmount: 1000,
    deliveryStatus: "Delivered",
    paymentMethod: "Khalti",
    paymentStatus: "Completed",
  },
  {
    orderId: "67890",
    customer: "Jane Smith",
    address: "456 Elm St, City, State, ZIP",
    orderDate: "2022-02-01",
    totalAmount: 1500,
    deliveryStatus: "Shipped",
    paymentMethod: "COD",
    paymentStatus: "Pending",
  },
  {
    orderId: "34567",
    customer: "Alice Johnson",
    address: "789 Oak St, City, State, ZIP",
    orderDate: "2022-03-01",
    totalAmount: 2000,
    deliveryStatus: "Cancelled",
    paymentMethod: "Esewa",
    paymentStatus: "Failed",
  },
  {
    orderId: "90123",
    customer: "Bob Brown",
    address: "234 Maple St, City, State, ZIP",
    orderDate: "2022-04-01",
    totalAmount: 2500,
    deliveryStatus: "Processing",
    paymentMethod: "COD",
    paymentStatus: "Processing",
  },
  {
    orderId: "45678",
    customer: "Charlie Davis",
    address: "345 Pine St, City, State, ZIP",
    orderDate: "2022-05-01",
    totalAmount: 3000,
    deliveryStatus: "Delivered",
    paymentMethod: "Khalti",
    paymentStatus: "Completed",
  },
  {
    orderId: "56789",
    customer: "David Wilson",
    address: "678 Birch St, City, State, ZIP",
    orderDate: "2022-06-01",
    totalAmount: 3500,
    deliveryStatus: "Shipped",
    paymentMethod: "Esewa",
    paymentStatus: "Completed",
  },
];

const OrderSummary = () => {
  return (
    <div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
        <div className="bg-white shadow rounded-lg mb-4 p-1 sm:p-6 h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900">
              Latest Orders
            </h3>
            <a
              href="#"
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
            >
              View all
            </a>
          </div>
          <div className="container mx-0 sm:mx-auto sm:p-4 text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
              Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup>
                <thead className="bg-gray-300">
                  <tr className="text-left">
                    <th className="p-3">Order Id</th>
                    <th className="p-3">Customer</th>
                    <th className="p-3">Address</th>
                    <th className="p-3">Order Date</th>
                    <th className="p-3 text-center">Amount</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-center">Payment Method</th>
                    <th className="p-3 text-center">Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Orders.map((value, index) => (
                    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                      <td className="p-3">{value.orderId}</td>
                      <td className="p-3">
                        <p>{value.customer}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-gray-600">{value.address}</p>
                      </td>
                      <td className="p-3">
                        <p>{value.orderDate}</p>
                      </td>
                      <td className="p-3 text-right">
                        <p className="flex justify-center items-center gap-2">
                          <Ruppess />
                          {value.totalAmount}
                        </p>
                      </td>
                      <td className="flex items-center justify-center p-3">
                        <span
                          className={`w-[70px] h-[25px] text-white flex justify-center items-center rounded-md font-bold
      ${
        value.deliveryStatus === "Cancelled"
          ? "bg-red-500"
          : value.deliveryStatus === "Processing"
          ? "bg-yellow-500"
          : value.deliveryStatus === "Delivered"
          ? "bg-green-500"
          : value.deliveryStatus === "Shipped"
          ? "bg-gray-500"
          : "bg-gray-500"
      }`}
                        >
                          <span>{value.deliveryStatus}</span>
                        </span>
                      </td>

                      <td className="p-3 text-center">
                        <p>{value.paymentMethod}</p>
                      </td>
                      <td className="p-3 text-center">
                        <p>{value.paymentStatus}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

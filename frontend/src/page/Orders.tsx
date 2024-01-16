import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Orders = () => {
  const [orderData, setOrderData] = useState<any[]>([]); // Update 'any' with the appropriate type for your data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getAllOrders", {
          headers: {
            "Content-Type": "application/json"
          }
        });

        // Assuming the data structure is an array of orders
        setOrderData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
        toast.error("Failed to fetch orders");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8 ">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Order Table</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Total Quantity</th>
            <th className="border p-2">Total Price</th>
            <th className="border p-2">Products</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map(order => (
            <tr key={order._id} className="border">
              <td className="border p-2">{order._id}</td>
              <td className="border p-2">{order.totalQty}</td>
              <td className="border p-2">${order.totalPrice}</td>
              <td className="border p-2">
                <ul className="list-none p-0">
                  {order.productCartItem.map((product: any, index: any) => (
                    <li key={index} className="flex items-center mb-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 mr-2"
                      />
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {product.qty}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

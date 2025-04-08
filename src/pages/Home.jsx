import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import DeviceCompatibility from "../components/DeviceCompatibility"; // ✅ Import once

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    axios.get("https://playshifu-backend.onrender.com")
      .then((res) => {
        console.log("API Response:", res.data);
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else if (res.data.products && Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        } else {
          setProducts([res.data]);
        }
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-1 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={handleAddToCart}
            cartCount={cartCount}
          />
        ))}
      </div>

      {/* ✅ Show Device Compatibility once at bottom */}
      <div className="mt-10">
        <DeviceCompatibility />
      </div>
    </div>
  );
};

export default Home;

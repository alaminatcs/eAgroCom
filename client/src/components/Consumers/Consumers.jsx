import { useState, useEffect } from "react";

const Consumers = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");

  // Fetch products data
  useEffect(() => {
    fetch("../../assets/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  // Filter products based on category and location
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        (category === "All" || product.category === category) &&
        (location === "All" || product.location === location) &&
        product.type === "Buy"
    );
    setFilteredProducts(filtered);
  }, [category, location, products]);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar for Filters */}
      <aside className="lg:w-1/5 w-full lg:h-auto p-4 bg-green-800 text-white flex flex-col">
        {/* Category and Location Filters */}
        <div className="flex flex-col lg:space-y-4">
          <div className="mb-4">
            <label className="block font-semibold mb-1">Filter by Category</label>
            <select
              className="w-full p-2 bg-gray-800 text-white"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="All">All Categories</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Grain">Grain</option>
              <option value="Spice">Spice</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Filter by Location</label>
            <select
              className="w-full p-2 bg-gray-800 text-white"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            >
              <option value="All">All Locations</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Chittagong">Chittagong</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Right Display Section */}
      <main className="flex-1 p-4 lg:ml-4 overflow-auto">
        <h1 className="text-3xl font-bold text-center mb-5">Available Products</h1>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card border p-4 shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-3" />
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
              <p>Location: {product.location}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Consumers;

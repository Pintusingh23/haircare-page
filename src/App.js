import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Pages
const Home = () => <div>Home Page</div>;
const AboutUs = () => <div>About Us Page</div>;
const ProductsPage = () => <div>Products Page</div>;
const Blogs = () => <div>Blogs Page</div>;
const ContactUs = () => <div>Contact Us Page</div>;

// Product and testimonial data
const products = [
  {
    id: 1,
    name: "Samasti Hair Oil",
    description: "Natural hair oil for hair growth (100ml)",
    price: "₹595.00",
    image: "https://abhyanjana.com/wp-content/uploads/2023/03/amazon-post-1.jpg",
  },
  {
    id: 2,
    name: "Abhyanjana Haircare Kit",
    description: "Best hair care kit for hair growth",
    price: "₹995.00",
    image: "https://abhyanjana.com/wp-content/uploads/2023/03/amazon-post-1.jpg",
  },
  {
    id: 3,
    name: "Ukti Natural Hair Scrub",
    description: "Natural Hair Scrub (100g)",
    price: "₹595.00",
    image: "https://abhyanjana.com/wp-content/uploads/2023/11/amazon-post-ukti1.jpg",
  },
  {
    id: 4,
    name: "Samasti Hair Oil - Pack of 2",
    description: "200ml",
    price: "₹1,029.00",
    image: "https://abhyanjana.com/wp-content/uploads/2023/10/amazon-post-1-1-1.jpg",
  },
];

const testimonials = [
  { id: 1, videoUrl: "https://youtu.be/_jaCdPa2JRg?si=jl0X5nRc1R8rE1er" },
  { id: 2, videoUrl: "https://www.youtube.com/shorts/EpbZq7N_8_w" },
  { id: 3, videoUrl: "https://www.youtube.com/shorts/bkpx1z9I6Vs" },
  { id: 4, videoUrl: "https://www.youtube.com/shorts/MRHFrzVUcxM"},
];

function App() {
  return (
    <Router>
      {/* Header Section */}
      <header className="hero-section" style={{ backgroundColor: "#123E2A", color: "white", padding: "50px", textAlign: "center" }}>
        <h1>The Natural Hair Scrub Ukti</h1>
        <ul>
          <li>100% Organic Products</li>
          <li>Say Goodbye to Hair Fall</li>
          <li>Thermal Free</li>
        </ul>
        <button className="btn-primary">Try it now!</button>
      </header>

      {/* Navigation Bar */}
      <header className="nav-bar" style={{ display: "flex", gap: "20px", padding: "10px", backgroundColor: "#123E2A", color: "white" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about-us" style={{ color: "white", textDecoration: "none" }}>About Us</Link>
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link>
        <Link to="/blogs" style={{ color: "white", textDecoration: "none" }}>Blogs</Link>
        <Link to="/contact-us" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link>
      </header>

      {/* Products Section */}
      <section className="products-section" style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>Our Products</h2>
        <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {products.map((product) => (
            <div key={product.id} className="product-card" style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px", textAlign: "center" }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto" }} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h4>{product.price}</h4>
              <button className="btn-primary">Add to cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" style={{ padding: "20px", backgroundColor: "#f7f7f7" }}>
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>Real People Real Stories</h2>
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card" style={{ textAlign: "center" }}>
              <video controls style={{ width: "100%", borderRadius: "5px" }}>
                <source src={testimonial.videoUrl} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section" style={{ padding: "10px", textAlign: "center", backgroundColor: "#123E2A", color: "white" }}>
        <p>Abhyanjana - Crafting Care</p>
      </footer>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;

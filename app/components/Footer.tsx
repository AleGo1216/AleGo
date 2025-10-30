import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content container">
        <div className="footer-section logo-section">
          <div className="logo">ALeToys</div>
          <p>Discover the pinnacle of collectible art. Handcrafted statues for the discerning collector.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Limited Masterpieces</a></li>
            <li><a href="#">Buyer's Guide</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section social-icons">
          <h3>Follow Us</h3>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 16, color: "#999" }}>
        &copy; {new Date().getFullYear()} ALeToys. All rights reserved.
      </div>
    </footer>
  );
}
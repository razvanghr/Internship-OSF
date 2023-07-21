import React from "react";

import "./Footer.scss";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
} from "react-icons/fa";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <footer className="footer">
      <FooterContact />
      <section className="section section-2">
        <p id="ul-title">CATEGORIES</p>
        <ul>
          <li>
            <Link to="/error404">Alcohol</Link>
          </li>
          <li>
            <Link to="/error404">Art</Link>
          </li>
          <li>
            <Link to="/error404">Books</Link>
          </li>
          <li>
            <Link to="/error404">Drink</Link>
          </li>
          <li>
            <Link to="/error404">Electronics</Link>
          </li>
        </ul>
      </section>
      <section className="section section-3">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/error404">Jewelry</Link>
          </li>
          <li>
            <Link to="/error404">Kids & Baby</Link>
          </li>
          <li>
            <Link to="/error404">Men's Fashion</Link>
          </li>
          <li>
            <Link to="/error404">Mobile</Link>
          </li>
          <li>
            <Link to="/error404">Motorcycles</Link>
          </li>
          <li>
            <Link to="/error404">Movies</Link>
          </li>
          <li>
            <Link to="/error404">Music</Link>
          </li>
        </ul>
      </section>
      <section className="section section-4">
        <ul>
          <li>
            <Link to="/error404">Sports</Link>
          </li>
          <li>
            <Link to="/error404">Toys</Link>
          </li>
          <li>
            <Link to="/error404">Travel</Link>
          </li>
          <li>
            <Link to="/error404">Women's Fashion</Link>
          </li>
        </ul>
      </section>
      <section className="section section-5">
        <p id="ul-title">ABOUT</p>
        <ul>
          <li>
            <Link to="/error404">About Us</Link>
          </li>
          <li>
            <Link to="/error404">Delivery</Link>
          </li>
          <li>
            <Link to="/error404">Testimonials</Link>
          </li>
          <li>
            <Link to="/error404">Contact</Link>
          </li>
        </ul>
      </section>
      <section className="section section-6">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <FaGooglePlusG />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.pinterest.ca/" target="_blank">
          <FaPinterestP />
        </a>
      </section>
    </footer>
  );
}

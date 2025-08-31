import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className=" border-t border-gray-800  py-10">
        <div className=" container px-5 max-w-7xl xl:mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo />
              <p className="text-gray-400 mt-4">
                Your ultimate shopping destination powered by DummyJSON API.
                Discover amazing products and connect with our community.
              </p>
              <div className="flex space-x-4">
                <Facebook
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Twitter
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Instagram
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Github
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white" to={"/home"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-white"
                    to={"/products"}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-white"
                    to={"/about"}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" to={"/home"}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Cart>Cart</Cart>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-gray-400 hover:text-white"
                    to="/products?category=smart-phones"
                  >
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-white"
                    to="/products?category=labtops"
                  >
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-white"
                    to="/products?category=fragrances"
                  >
                    Fragrances
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-white"
                    to="/products?category=skincare"
                  >
                    Skincare
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-white"
                    to="/products?category=groceries"
                  >
                    Groceries
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white" to="/user">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-white"
                    to="/checkout"
                  >
                    Checkout
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-white cursor-pointer">
                    Help Center
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-white cursor-pointer">
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-white cursor-pointer">
                    Terms of Service
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t container max-w-7xl mx-auto border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2024 DummyStore. All rights reserved. Powered by DummyJSON API.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

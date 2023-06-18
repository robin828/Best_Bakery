/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../logo.png'
function Navbar() {
  const reduxStateData = useSelector((state) => state.ProductData.products);
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    if (reduxStateData !== null) {
      reduxStateData.map((item) => {
        count = count + item.count;
      });
    }
    setCartCount(count);
  }, [reduxStateData]);
  return (

          <div className="flex	p-8 bg-textcolor items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <div className="flex items-center gap-4">
                  {/* <img src="https://icons8.com/icon/112118/lemon-cake" className="h-8 w-8" alt="Logo" /> */}
                  <img src={logo} alt="lemon-cake--v1"/>
                  <h1 className="text-3xl font-bold text-cardbackground mr-4 sm:text-4xl">
                    Bakery
                  </h1>
                </div>
              </Link>

            </div>
            <div>
            <Link to="/cart">
                    <span class="relative inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-cardbackground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="absolute text-cardbackground top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 bg-lightbrown rounded-full">
                        {cartCount}
                      </span>
                    </span>
                  </Link>
            </div>
          </div>
  
  );
}

export default Navbar;

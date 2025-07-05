import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import LOGO from "../IMG/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [iotOpen, setIotOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const productsTimeout = useRef(null);
  const iotTimeout = useRef(null);
  const location = useLocation();

  // Instantly close menus and remove nav highlight on route change
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
    setIotOpen(false);
    setShowQuickLinks(false);
    setActiveNav(""); // Remove nav highlight
  }, [location]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dropdown handlers for desktop
  const handleProductsHover = (open) => {
    clearTimeout(productsTimeout.current);
    if (open) setProductsOpen(true);
    else productsTimeout.current = setTimeout(() => setProductsOpen(false), 100);
  };
  const handleIotHover = (open) => {
    clearTimeout(iotTimeout.current);
    if (open) setIotOpen(true);
    else iotTimeout.current = setTimeout(() => setIotOpen(false), 100);
  };

  // Helper for nav link classes
  const navLinkClass = (name) =>
    `${activeNav === name ? "text-orange-600 font-semibold" : "text-gray-700"} hover:text-blue-700 focus:text-orange-600 focus:outline-none transition-colors duration-150`;

  // Quick Links for mobile and desktop
  const quickLinks = (
    <div className="flex flex-col gap-2">
      <Link to="/Allen_Bradly" className="hover:text-orange-500 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Allen Bradley</Link>
      <Link to="/Mitsubishi" className="hover:text-orange-500 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Mitsubishi</Link>
      <Link to="/Omron" className="hover:text-orange-500 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Omron</Link>
      <Link to="/Delta" className="hover:text-orange-500 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Delta</Link>
    </div>
  );

  return (
    <nav className="border-b-4 border-orange-500 bg-white px-4 md:px-6 py-3 md:py-4 sticky top-0 z-50 shadow-md flex items-center justify-between min-h-[64px] md:min-h-[80px] transition-all duration-150">
      {/* Logo and Hamburger */}
      <div className="flex items-center w-full md:w-auto justify-between">
        <Link to="/" tabIndex={0} aria-label="Homepage">
          <img src={LOGO} alt="Winmer Logo" className="h-[44px] md:h-[60px] animate-bounce transition-all duration-150" />
        </Link>
        <button
          className="md:hidden text-3xl text-gray-800 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition-colors duration-150"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoMdClose /> : <AiOutlineMenuUnfold />}
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6 md:space-x-8 font-semibold text-base md:text-lg text-gray-700 select-none">
        <Link
          to="/about"
          className={navLinkClass("about")}
          tabIndex={0}
          onClick={() => setActiveNav("about")}
        >
          About Us
        </Link>

        <div
          className="relative"
          onMouseEnter={() => handleProductsHover(true)}
          onMouseLeave={() => handleProductsHover(false)}
        >
          <Link
            to="/products"
            className={navLinkClass("products")}
            tabIndex={0}
            onClick={() => setActiveNav("products")}
          >
            Products
          </Link>
          {productsOpen && (
            <ul className="absolute left-0 top-full mt-3 w-72 bg-gray-800 text-white rounded-lg shadow-2xl z-50 animate-fadeIn py-2">
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link
                  to="/automated"
                  className="block"
                  onClick={() => setActiveNav("Automated Control Panels")}
                >
                  Automated Control Panels
                </Link>
              </li>
              <li
                className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors relative group cursor-pointer select-none"
                onClick={() => setShowQuickLinks((prev) => !prev)}
                onMouseLeave={() => setShowQuickLinks(false)}
                tabIndex={0}
                onBlur={() => setShowQuickLinks(false)}
              >
                <Link to="/We_are_Deal_plc_and_hmi_controller" className="block">
                  PLC and HMI Controller Solutions
                </Link>
                <div
                  className={`absolute top-1/2 left-full ml-4 w-56 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl px-5 py-4 shadow-2xl border border-blue-500 opacity-0 pointer-events-none transition-opacity duration-150 transform -translate-y-1/2
                  group-hover:opacity-100 group-hover:pointer-events-auto
                  ${showQuickLinks ? "opacity-100 pointer-events-auto" : ""}`}
                  style={{ boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)" }}
                >
                  <span className="mb-3 text-blue-400 font-semibold tracking-wide block">Quick Links</span>
                  {quickLinks}
                </div>
                <style>
                  {`
                    @media (hover: hover) and (pointer: fine) {
                      .group:hover > div,
                      .group:focus-within > div {
                        opacity: 1 !important;
                        pointer-events: auto;
                      }
                    }
                  `}
                </style>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/special" onClick={() => setActiveNav("Special Purpose Machineries")}>Special Purpose Machinery</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/VisionBasedSystems" onClick={() => setActiveNav("Vision Based Automation")}>Vision-Based Automation</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/Customized_robotic_system" onClick={() => setActiveNav("Customized Robotic System")}>Customized Robotic Systems</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/Powder_coating_plant" onClick={() => setActiveNav("Powder Coating Plant")}>Powder Coating Plant</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/Liqud_paint_shop" onClick={() => setActiveNav("Liquid Paint Shop")}>Liquid Paint Shop</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/Plating_Plant" onClick={() => setActiveNav("Plating Plant")}>Plating Plant</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/Full_automated_water_treatment_plant" onClick={() => setActiveNav("Fully Automated Water Treatment Plant")}>Fully Automated Water Treatment Plant</Link>
              </li>
            </ul>
          )}
        </div>

        <Link
          to="/Solutions"
          className={navLinkClass("solutions")}
          tabIndex={0}
          onClick={() => setActiveNav("solutions")}
        >
          Solutions
        </Link>

        <div
          className="relative"
          onMouseEnter={() => handleIotHover(true)}
          onMouseLeave={() => handleIotHover(false)}
        >
          <Link
            className={navLinkClass("iot")}
            to="/Industrial"
          >
            Industrial IoT 4.0
          </Link>
          {iotOpen && (
            <ul className="absolute right-0 top-full mt-3 w-72 bg-gray-800 text-white rounded-lg shadow-2xl z-50 animate-fadeIn py-2">
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/water_treatment_plant" onClick={() => setActiveNav("Water Treatment Plant")}>Water Treatment Plant</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/Health_care_industrise" onClick={() => setActiveNav("Health Care Industries")}>Health Care Industries</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/Cement_Industries" onClick={() => setActiveNav("Cement Industries")}>Cement Industries</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/Poultry_Breeding_Farms" onClick={() => setActiveNav("Poultry Breeding Farms")}>Poultry Breeding Farms</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/Food_Beverage_industries" onClick={() => setActiveNav("Food Beverage Industries")}>Food & Beverage Industries</Link>
              </li>
              <li className="px-6 py-3 hover:bg-blue-700 focus:bg-orange-600 rounded transition-colors cursor-pointer">
                <Link to="/OEM_industrial_control_panels" onClick={() => setActiveNav("OEM Industrial Control Panels")}>OEM Industrial Control Panels</Link>
              </li>
            </ul>
          )}
        </div>

        <Link
          to="/contact"
          className={navLinkClass("contact")}
          tabIndex={0}
          onClick={() => setActiveNav("contact")}
        >
          Contact
        </Link>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden fixed left-0 top-[64px] md:top-[80px] w-full bg-white shadow-lg border-b-2 border-orange-500 animate-fadeIn z-50 transition-all duration-150">
          <div className="flex flex-col space-y-3 py-6 px-4 font-semibold text-gray-800 text-base">
            <Link
              to="/about"
              className={navLinkClass("about")}
              onClick={() => {
                setMenuOpen(false);
                setActiveNav("");
              }}
            >
              About Us
            </Link>
            <details className="cursor-pointer">
              <summary className="font-semibold hover:text-blue-700 focus:text-orange-600 focus:outline-none transition-colors">
                Products
              </summary>
              <ul className="pl-5 mt-2 space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/automated"
                    className={navLinkClass("Automated Control Panels")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Automated Control Panels
                  </Link>
                </li>
                <li>
                  <span className="block text-xs text-gray-500 mb-1">
                    <Link to="/We_are_Deal_plc_and_hmi_controller">PLC and HMI Controller Solutions</Link>
                  </span>
                  <div className="flex flex-col gap-1 pl-2">
                    {quickLinks}
                  </div>
                </li>
                <li>
                  <Link
                    to="/special"
                    className={navLinkClass("Special Purpose Machineries")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Special Purpose Machinery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/VisionBasedSystems"
                    className={navLinkClass("Vision Based Automation")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Vision-Based Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Customized_robotic_system"
                    className={navLinkClass("Customized Robotic System")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Customized Robotic Systems
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Powder_coating_plant"
                    className={navLinkClass("Powder Coating Plant")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Powder Coating Plant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Liqud_paint_shop"
                    className={navLinkClass("Liquid Paint Shop")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Liquid Paint Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Plating_Plant"
                    className={navLinkClass("Plating Plant")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Plating Plant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Full_automated_water_treatment_plant"
                    className={navLinkClass("Fully Automated Water Treatment Plant")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Fully Automated Water Treatment Plant
                  </Link>
                </li>
              </ul>
            </details>

            <Link
              to="/Solutions"
              className={navLinkClass("solutions")}
              onClick={() => {
                setMenuOpen(false);
                setActiveNav("");
              }}
            >
              Solutions
            </Link>

            <details>
              <summary className="cursor-pointer font-semibold hover:text-blue-700 focus:text-orange-600 focus:outline-none transition-colors">
                <Link to="/Industrial">Industrial IoT 4.0</Link>
              </summary>
              <ul className="pl-5 mt-2 space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/water_treatment_plant"
                    className={navLinkClass("Water Treatment Plant")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Water Treatment Plant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Health_care_industrise"
                    className={navLinkClass("Health Care Industries")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Health Care Industries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Cement_Industries"
                    className={navLinkClass("Cement Industries")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Cement Industries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Poultry_Breeding_Farms"
                    className={navLinkClass("Poultry Breeding Farms")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Poultry Breeding Farms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Food_Beverage_industries"
                    className={navLinkClass("Food Beverage Industries")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    Food & Beverage Industries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/OEM_industrial_control_panels"
                    className={navLinkClass("OEM Industrial Control Panels")}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveNav("");
                    }}
                  >
                    OEM Industrial Control Panels
                  </Link>
                </li>
              </ul>
            </details>

            <Link
              to="/contact"
              className={navLinkClass("contact")}
              onClick={() => {
                setMenuOpen(false);
                setActiveNav("");
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

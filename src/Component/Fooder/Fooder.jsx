import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500 tracking-wide">ABOUT</h3>
          <p className="mb-2 font-semibold text-lg text-white">ABOUT WINMER</p>
          <p className="text-sm leading-relaxed text-gray-300">
            105B, Vidyalakshmi Complex (2nd Floor),<br />
            4th Street, Gandipuram,<br />
            Coimbatore-641012.
          </p>
        </div>
        {/* Products */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500 tracking-wide">PRODUCTS</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/automated" className="hover:text-orange-400 transition-colors">
                Automation Control Panels
              </Link>
            </li>
            <li>
              <Link to="/special" className="hover:text-orange-400 transition-colors">
                Special Purpose Machines
              </Link>
            </li>
            <li>
              <Link to="/VisionBasedSystems" className="hover:text-orange-400 transition-colors">
                Vision Based Automation
              </Link>
            </li>
            <li>
              <Link to="/Customized_robotic_system" className="hover:text-orange-400 transition-colors">
                Customized Robotic
              </Link>
            </li>
            <li>
              <Link to="/Powder_coating_plant" className="hover:text-orange-400 transition-colors">
                Powder Coating Plant
              </Link>
            </li>
          </ul>
        </div>
        {/* Industrial IoT */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500 tracking-wide">INDUSTRIAL IOT 4.0</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/Health_care_industrise" className="hover:text-orange-400 transition-colors">
                Health Care Industries
              </Link>
            </li>
            <li>
              <Link to="/Cement_Industries" className="hover:text-orange-400 transition-colors">
                Cement Industries
              </Link>
            </li>
            <li>
              <Link to="/Poultry_Breeding_Farms" className="hover:text-orange-400 transition-colors">
                Poultry Breeding
              </Link>
            </li>
            <li>
              <Link to="/Food_Beverage_industries" className="hover:text-orange-400 transition-colors">
                Food Beverage
              </Link>
            </li>
            <li>
              <Link to="/OEM_industrial_control_panels" className="hover:text-orange-400 transition-colors">
                OEM Industrial
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500 tracking-wide">CONTACT</h3>
          <div className="mb-3">
            <span className="font-semibold text-white">Email:</span>
            <div className="text-sm break-all text-gray-300">Sales@winmer.in<br />sales@winmer.in</div>
          </div>
          <div className="mb-3">
            <span className="font-semibold text-white">Service Hotline:</span>
            <div className="text-sm text-gray-300">0422-4212161</div>
          </div>
          <div>
            <span className="font-semibold text-white">Technical Support:</span>
            <div className="text-sm break-all text-gray-300">purchase@winmer.in<br />vividsathiya@winmer.in</div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} <span className="text-orange-400 font-semibold">Winmer</span>. All rights reserved.
      </div>
    </footer>
  );
}

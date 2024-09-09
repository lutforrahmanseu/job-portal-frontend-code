import React from "react";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About JobPortal</h3>
            <p className="text-sm text-gray-400">
              JobPortal is your gateway to the best job opportunities. Our
              mission is to connect job seekers with the best companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/jobs" className="hover:text-gray-500">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">Email: support@jobportal.com</p>
            <p className="text-sm text-gray-400">Phone: +1 (123) 456-7890</p>
            <p className="text-sm text-gray-400">Address: 123 Job St, City, Country</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 ">
          <p className="text-sm text-gray-400  text-center">
            © {new Date().getFullYear()} JobPortal. All Rights Reserved.
          </p>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;

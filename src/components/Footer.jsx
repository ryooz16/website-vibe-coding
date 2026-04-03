import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-brand-white/70">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-brand-primary flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-md leading-none">
                  R
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-brand-white">
                Rio Corporate
              </span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Rio Corporate. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-brand-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-brand-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

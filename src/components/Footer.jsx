import React from 'react';
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 to-gray-700 text-white p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/mohammad-talha-6a954045"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="w-6 h-6 hover:text-teal-400 transition" />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="w-6 h-6 hover:text-teal-400 transition" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram className="w-6 h-6 hover:text-teal-400 transition" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-center">
          Designed by M. Talha &copy; {new Date().getFullYear()}
        </p>

        {/* Flag Image */}
        <div>
          <img
            src="/flagBig.png"
            alt="Canada flag"
            className="w-10 md:w-10 lg:w-15 h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

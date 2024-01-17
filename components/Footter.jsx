'use client';
import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi'; // Ícone de e-mail
import { SiTryhackme } from 'react-icons/si'; // Ícone do TryHackMe

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="grid grid-flow-col gap-4 mb-4 md:mb-0">
          <a href="#" className="text-xl">
            <BsGithub />
          </a>
          <a href="#" className="text-xl">
            <BsTwitter />
          </a>
          <a href="#" className="text-xl">
            <BsLinkedin />
          </a>
          <a href="#" alt="TryHackMe" className="text-xl">
            <SiTryhackme />
          </a>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <form className="flex items-center space-x-4">
            <label htmlFor="newsletter" className="text-gray-300">Subscribe to newsletter:</label>
            <input
              type="email"
              id="newsletter"
              name="newsletter"
              placeholder="Your email"
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-teal-500 transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-1 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:border-teal-300 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row">
          <a href="#" className="text-gray-300 hover:text-white mr-4">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

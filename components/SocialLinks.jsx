import React from 'react';

const SocialLinks = () => {
  return (
    <section className="container mx-auto flex justify-center mb-8">
      <div className="flex space-x-4">
        <a href="https://github.com/pxis" target="_blank" title="Github" className="text-gray-700 hover:text-gray-900">
          <i className="fal fa-code-merge fa-fw"></i>
        </a>
        <a href="https://linkedin.com/in/#" target="_blank" title="Linkedin" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-linkedin-in fa-fw"></i>
        </a>
        <a href="https://www.hackthebox.eu/profile/1603696" target="_blank" title="HackTheBox" className="text-gray-700 hover:text-gray-900">
          <i className="fal fa-box-open">Linkedin</i>
        </a>
        <a href="https://tryhackme.com/p/ZenPxis" target="_blank" title="TryHackMe" className="text-gray-700 hover:text-gray-900">
          <i className="far fa-bug"></i>
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;

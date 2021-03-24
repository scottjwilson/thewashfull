import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="py-8 bg-black h-full">
        <p className="text-white flex justify-center ">
          © {new Date().getFullYear()} Your Business. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

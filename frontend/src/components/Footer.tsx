import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-black text-center h-7 fixed bottom-0 w-full">
      <div className="max-w-1xl mx-auto">
        <p className="text-lg font-semibold">&copy; 2024 Your Pizza Shop. All rights reserved.</p>
        <p className="mt-2">🍕 We deliver happiness! Contact us: <a className="underline" href="mailto:info@yourpizzashop.com">info@yourpizzashop.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;

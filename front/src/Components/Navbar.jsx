import React from 'react';

const Navbar = () => {
  return (
    <div className="Navbar_container bg-red-500 py-3 px-2">
      <div className="Navbar_Wrapper flex justify-between px-2 py-2">
        <div className="Logo bg-orange-500">
          <span className="Logo_Image">Logo</span>
        </div>
        <div className="Sign box bg-pink-800"> sign</div>
      </div>
    </div>
  );
};

export default Navbar;

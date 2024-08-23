import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar_container bg-red-500 p-2">
      <div className="Navbar_Wrapper flex justify-between px-2 py-2">
        <div className="Logo bg-orange-500 p-2 rounded-lg">
          <span className="Logo_Image">Logo</span>
        </div>
        <div className="Sign_box_container flex gap-3 border-2 border-red-500">
          <div className="Sign_box_wrapper flex ">
            <span className="Sign up border-2 border-red-500">
              <Link to="/register">회원가입</Link>
            </span>
            <span className="Sign In border-2 border-red-500">
              <Link to="/login">로그인</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

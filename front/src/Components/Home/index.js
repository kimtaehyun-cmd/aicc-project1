import React from 'react';
import Navbar from '../Navbar';
import Itempanel from '../Itempanel';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const index = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Itempanel />
      <Footer />
    </div>
  );
};

export default index;

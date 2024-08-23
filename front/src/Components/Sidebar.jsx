import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar_container bg-blue-500">
      <div>
        <div className="map">
          <Link to="/map">지도</Link>
        </div>
        <div className="planner">
          <Link to="/planner">여행 일정</Link>
        </div>
        <div className="project">
          <Link to="/project">여행 목록</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

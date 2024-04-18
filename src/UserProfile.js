
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

const apiUrl='https://randomuser.me/api/'
const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
      const userData = response.data.results[0];
      setUserData(userData);
    } catch (error) {
      console.error('Unable to fetch data from API:', error);
    }
  };

  const handleRefresh = () => {
    fetchUserData();
  };

  return (
    <div className="max-w-md mx-auto  bg-slate-400 shadow-md rounded px-8 py-6 mt-8">
        <h1 className="text-black font-extrabold"> PROFILE DETAILS</h1>
      {userData && (
        <>
          <img
            className="rectangle-full w-24 h-24 mx-auto mb-4 border-black 900 border-4"
            src={userData.picture.large}
            alt="User"
          />
          <div className="text-center ">
            <p className="text-xl font-semibold"> First Name : {userData.name.first}</p> 
            <p className="text-xl font-semibold"> Last  Name : {userData.name.last}</p>
            <p className="text-black-600"> Email : {userData.email}</p>
          </div>
        </>
      )}
      <div className="mt-6">
        <button
          className="bg-red-500 hover:bg-green-700 text-white  font-serif py-2 px-4 rounded w-full"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default UserProfile;

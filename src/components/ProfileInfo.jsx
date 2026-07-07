// import React from "react";
import { useSelector } from "react-redux";
import "../css/profile-info.css";


const ProfileInfo = () => {
  const user = useSelector((state) => state.user || {});
  const { name, phone, address} = user;

  return (
    <div className="profile-info">
      <h3>Name : {name}</h3>
      <p>Phone : {phone}</p>
      <p>Delivery Address : {address}</p>
    </div>
  );
};

export default ProfileInfo;

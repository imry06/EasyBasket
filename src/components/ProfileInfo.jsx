import { useSelector, useDispatch } from "react-redux";
import "../css/profile-info.css";
import { useNavigate } from "react-router-dom";
import { clearProfile } from "../features/profile/profileSlice";

const ProfileInfo = () => {
  const profile = useSelector((state) => state.profile.profile);
const dispatch = useDispatch();
const navigate = useNavigate();

  return (
    <div className="profile-info">

       <div className="profile-info-actions">
        <button className="add"><i className="fa-solid fa-user-plus"></i></button>
        <button className="edit"><i className="fa-solid fa-user-pen"></i></button>
        <button onClick={()=>dispatch(clearProfile())} className="remove"><i className="fa-solid fa-user-xmark"></i></button>
      </div>

      <h3>{profile.fullName}</h3>

      <p>
        <strong>Phone:</strong> {profile.phone}
      </p>

      <hr />

      <h4>House Details</h4>

      <p>
        <strong>House No:</strong> {profile.houseNo}
      </p>

      <p>
        <strong>Floor:</strong> {profile.floor}
      </p>

      <p>
        <strong>Apartment/Society:</strong> {profile.apartment}
      </p>

      <p>
        <strong>Building:</strong> {profile.building}
      </p>

      <hr />

      <h4>Address Details</h4>

      <p>
        <strong>Street/Road:</strong> {profile.street}
      </p>

      <p>
        <strong>Landmark:</strong> {profile.landmark}
      </p>

      <p>
        <strong>Area/Colony:</strong> {profile.area}
      </p>

      <p>
        <strong>Locality:</strong> {profile.locality}
      </p>

      <hr />

      <h4>Complete Delivery Address</h4>

      <p>
        {[
          profile.houseNo,
          profile.floor && `Floor ${profile.floor}`,
          profile.apartment,
          profile.building,
          profile.street,
          profile.landmark,
          profile.area,
          profile.locality,
        ]
          .filter(Boolean)
          .join(", ")}
      </p>

     
    </div>
  );
};

export default ProfileInfo;
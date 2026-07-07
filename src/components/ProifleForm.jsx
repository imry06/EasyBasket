import "../css/profile-form.css";
import { useDispatch, useSelector } from "react-redux";
import { updateField, saveProfile } from "../features/profile/profileSlice";

const ProifleForm = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);

  // console.log(profile); 

  return (
    <div className="profile-form">
      <form className="customer-details-form">
        <h3>Customer Details</h3>

        <div className="form-field">
          <label htmlFor="">
            <i className="fa-solid fa-user"></i> Full Name :
          </label>
          <input
            type="text"
            placeholder="Full Name"
            value={profile.fullname}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "fullName",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>

        <div className="form-field">
          <label htmlFor="">
            <i className="fa-solid fa-phone"></i> Phone Number :
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            value={profile.phone}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "phone",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>

        <h3>House Details</h3>
        <div className="form-field">
          <label htmlFor="">
            <i className="fa-solid fa-house-circle-check"></i> House No :
          </label>
          <input
            type="text"
            placeholder="House No"
            value={profile.house}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "houseNo",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>
        <div className="form-field">
          <label htmlFor="">
            <i className="fa-solid fa-right-left"></i> Floor :
          </label>
          <input
            type="text"
            placeholder="Floor"
            value={profile.floor}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "floor",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>
        <div className="form-field">
          <label htmlFor="">
            <i className="fa-solid fa-people-roof"></i> Apartment/Society Name :
          </label>
          <input
            type="text"
            placeholder="Apartment/Society Name"
            value={profile.apartment}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "apartment",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>
        <div className="form-field">
          <label htmlFor="">
            <i className="fa-solid fa-building-circle-check"></i> Building Name
            :
          </label>
          <input
            type="text"
            placeholder="Building Name"
            value={profile.value}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "building",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>

        <h3>Address Details</h3>
        <div className="form-field">
          <label htmlFor="">
            <i className="fa-solid fa-signs-post"></i> Street/Road :
          </label>
          <input 
          type="text" 
          placeholder="Street/Road" 
          value={profile.street}
          onChange={(e)=>
            dispatch(
              updateField({
                field:"street",
                value: e.target.value,
              }),
            )
          }
          />
        </div>
        <div className="form-field">
          <label htmlFor="">
            <i className="fa-solid fa-landmark"></i> Landmark :
          </label>
          <input 
          type="text" 
          placeholder="Landmark" 
          value={profile.landmark}
          onChange={(e)=>
            dispatch(
              updateField({
                field:"landmark",
                value: e.target.value,
              }),
            )
          }
          />
        </div>
        <div className="form-field">
          <label htmlFor="">
            <i className="fa-solid fa-tree-city"></i> Area/Colony :
          </label>
          <input 
          type="text" 
          placeholder="Area/Colony" 
          value={profile.area}
          onChange={(e)=>
            dispatch(
              updateField({
                field:"area",
                value: e.target.value,
              })
            )
          }
          />
        </div>
        <div className="form-field">
          <label htmlFor="">
            <i className="fa-solid fa-location-crosshairs"></i> Locality :
          </label>
          <input 
          type="text" 
          placeholder="Locality" 
          value={profile.locality}
          onChange={(e)=>
            dispatch(
              updateField({
                field:"locality",
                value: e.target.value
              })
            )
          }
          />
        </div>

        <div className="button-field">
          <button
          type="button"
          onClick={()=>dispatch(saveProfile())}
          >
            <i className="fa-solid fa-user-check"></i> Save Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProifleForm;

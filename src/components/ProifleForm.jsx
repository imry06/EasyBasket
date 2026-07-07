import "../css/profile-form.css"

const ProifleForm = () => {
  return (
    <div className="profile-form">
      <form className="customer-details-form">
        <h3>Customer Details</h3>

        <div className="form-field">
          <label htmlFor=""><i className="fa-solid fa-user"></i>  Full Name :</label>
          <input type="text" placeholder="Full Name" />
        </div>

        <div className="form-field">
          <label htmlFor=""><i className="fa-solid fa-phone"></i> Phone Number :</label>
          <input type="text" placeholder="Phone Number" />
        </div>

        <h3>House Details</h3>
        <div className="form-field">
          <label htmlFor=""><i className="fa-solid fa-house-circle-check"></i> House No :</label>
          <input type="text" placeholder="House No" />
        </div>
        <div className="form-field">
          <label htmlFor=""><i className="fa-solid fa-right-left"></i> Floor :</label>
          <input type="number" placeholder="Floor" />
        </div>
        <div className="form-field">
          <label htmlFor=""><i className="fa-solid fa-people-roof"></i> Apartment/Society Name :</label>
          <input type="text" placeholder="Apartment/Society Name" />
        </div>
        <div className="form-field">
            <label htmlFor=""><i className="fa-solid fa-building-circle-check"></i> Building Name :</label>
            <input type="text" placeholder="Building Name" />
        </div>

        <h3>Address Details</h3>
        <div className="form-field">
            <label htmlFor=""><i className="fa-solid fa-signs-post"></i> Street/Road :</label>
            <input type="text" placeholder="Street/Road" />
        </div>
        <div className="form-field">
            <label htmlFor=""><i className="fa-solid fa-landmark"></i> Landmark :</label>
            <input type="text" placeholder="Landmark" />
        </div>
        <div className="form-field">
            <label htmlFor=""><i className="fa-solid fa-tree-city"></i> Area/Colony :</label>
            <input type="text" placeholder="Area/Colony" />
        </div>
        <div className="form-field">
            <label htmlFor=""><i className="fa-solid fa-location-crosshairs"></i> Locality :</label>
            <input type="text" placeholder="Locality" />
        </div>

        <div className="button-field">
            <button><i className="fa-solid fa-user-check"></i> Save Details</button>
        </div>
      </form>
    </div>
  );
};

export default ProifleForm;

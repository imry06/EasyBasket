const ProifleForm = () => {
  return (
    <div className="profile-form">
      <form className="customer-details-form">
        <h3>Customer Details</h3>

        <div className="form-field">
          <label htmlFor="">Full Name :</label>
          <input type="text" placeholder="Full Name" />
        </div>

        <div className="form-field">
          <label htmlFor="">Phone Number :</label>
          <input type="text" placeholder="Phone Number" />
        </div>

        <h3>House Details</h3>
        <div className="form-field">
          <label htmlFor="">House No :</label>
          <input type="text" placeholder="House No" />
        </div>
        <div className="form-field">
          <label htmlFor="">Floor :</label>
          <input type="number" placeholder="Floor" />
        </div>
        <div className="form-field">
          <label htmlFor="">Apartment/Society Name :</label>
          <input type="text" placeholder="Apartment/Society Name" />
        </div>
        <div className="form-field">
            <label htmlFor="">Building Name :</label>
            <input type="text" placeholder="Building Name" />
        </div>

        <h3>Address Details</h3>
        <div className="form-field">
            <label htmlFor="">Street/Road :</label>
            <input type="text" placeholder="Street/Road" />
        </div>
        <div className="form-field">
            <label htmlFor="">Landmark</label>
            <input type="text" placeholder="Landmark" />
        </div>
        <div className="form-field">
            <label htmlFor="">Area/Colony</label>
            <input type="text" placeholder="Area/Colony" />
        </div>
        <div className="form-field">
            <label htmlFor="">Locality</label>
            <input type="text" placeholder="Locality" />
        </div>

        <div className="button-field">
            <button>Save Details</button>
        </div>
      </form>
    </div>
  );
};

export default ProifleForm;

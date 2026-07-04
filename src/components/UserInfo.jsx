import { useState } from "react";

const STORAGE_KEY = "userInfo";

const getStoredInfo = () => {
  if (typeof window === "undefined") return null;

  const data = window.localStorage.getItem(STORAGE_KEY);

  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export default function UserInfo() {
  const [form, setForm] = useState(() => {
    const storedInfo = getStoredInfo();

    return storedInfo ?? {
      name: "",
      phone: "",
      address: "",
    };
  });

  const [saved, setSaved] = useState(() => Boolean(getStoredInfo()));

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Create / Update
  const handleSave = (e) => {
    e.preventDefault();

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));

    setSaved(true);
    alert("Information saved successfully.");
  };

  // Delete
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your information?"
    );

    if (!confirmDelete) return;

    window.localStorage.removeItem(STORAGE_KEY);

    setForm({
      name: "",
      phone: "",
      address: "",
    });

    setSaved(false);

    alert("Information deleted.");
  };

  return (
    <div className="user-info">
      <h2>Delivery Information</h2>

      <form onSubmit={handleSave}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Complete Delivery Address"
          rows={4}
          value={form.address}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {saved ? "Update Information" : "Save Information"}
        </button>

        {saved && (
          <button
            type="button"
            onClick={handleDelete}
            style={{ marginLeft: "10px" }}
          >
            Delete Information
          </button>
        )}
      </form>
    </div>
  );
}
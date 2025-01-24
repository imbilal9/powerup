import React, { useState } from "react";

const UserInfoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    age: "",
    village: "",
    district: "",
    pin: "",
    state: "",
    landmark: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number, village, district, pin } = formData;

    // Validate required fields
    if (
      name.trim() &&
      number.trim() &&
      village.trim() &&
      district.trim() &&
      pin.trim()
    ) {
      const message = `नाम: ${name}%0Aफोन नंबर: ${number}%0Aगांव का नाम: ${village}%0Aज़िला: ${district}%0Aपिन कोड: ${pin}`;
      const whatsappURL = `https://wa.me/8194034927?text=${message}`;
      window.open(whatsappURL, "_blank");
    } else {
      alert("कृपया सभी फ़ील्ड भरें।");
    }
  };

  return (
    <div className="h-full flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">User Info Form</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            नाम
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="नाम"
            className="w-full border rounded p-2"
          />
        </div>

        {/* Number */}
        <div className="mb-4">
          <label htmlFor="number" className="block font-medium mb-1">
            फोन नंबर
          </label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            required
            pattern="[0-9]{10}"
            placeholder="फोन नंबर"
            className="w-full border rounded p-2"
          />
        </div>

        {/* Village */}
        <div className="mb-4">
          <label htmlFor="village" className="block font-medium mb-1">
            गांव का नाम
          </label>
          <input
            type="text"
            id="village"
            name="village"
            value={formData.village}
            onChange={handleInputChange}
            required
            placeholder="गांव का नाम"
            className="w-full border rounded p-2"
          />
        </div>

        {/* District */}
        <div className="mb-4">
          <label htmlFor="district" className="block font-medium mb-1">
            ज़िला
          </label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            required
            placeholder="ज़िला"
            className="w-full border rounded p-2"
          />
        </div>

        {/* Pin */}
        <div className="mb-4">
          <label htmlFor="pin" className="block font-medium mb-1">
            पिन कोड
          </label>
          <input
            type="text"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleInputChange}
            required
            pattern="[0-9]{6}"
            placeholder="पिन कोड"
            className="w-full border rounded p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfoForm;

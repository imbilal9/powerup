import React, { useState } from "react";

const InquiryForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pinCode, setPinCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (
      name.trim() &&
      phone.trim() &&
      address.trim() &&
      city.trim() &&
      district.trim() &&
      pinCode.trim()
    ) {
      const message = `नाम: ${name}%0Aफोन नंबर: ${phone}%0Aपता: ${address}, ${city}, ${district} - ${pinCode}`;
      const whatsappURL = `https://wa.me/6395142354?text=${message}`;
      window.open(whatsappURL, "_blank");
    } else {
      alert("कृपया सभी फ़ील्ड भरें।");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        textAlign: "center",
        maxWidth: "400px",
        margin: "auto",
        borderRadius: "10px",
      }}
    >
      <h2>यह आवेदन (Inquiry) करे।</h2>
      <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
        Old Price Rs 4999
      </p>
      <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
        New Price Rs 2499
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="नाम"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
        <input
          type="text"
          placeholder="फोन नंबर"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
        {/* <input
          type="text"
          placeholder="पता (Address Street)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
        <input
          type="text"
          placeholder="शहर (City)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
        <input
          type="text"
          placeholder="ज़िला (District)"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
        <input
          type="text"
          placeholder="पिन कोड (Pin Code)"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        /> */}
        <button
          type="submit"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;

import React, { useState } from "react";

function Contact() {
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    // Set gender to the selected checkbox value
    setGender(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <select
        value={gender}
        onChange={handleChange}
        style={{ padding: "5px", width: "200px" }}
      >
        <option value="">-- Select Gender --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <br />

      <input
        type="text"
        placeholder="Selected gender will appear here"
        value={gender}
        readOnly
        style={{
          borderBlockStyle: "solid",
          marginTop: "10px",
          padding: "5px",
          width: "250px",
        }}
      />
    </div>
  );
}

export default Contact;

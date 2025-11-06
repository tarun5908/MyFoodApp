import React, { useState } from "react";

function Contact() {
  const [game, setGame] = useState("");

  const handleChange = (e) => {
    // Set game to the selected dropdown value
    setGame(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <select
        value={game}
        onChange={handleChange}
        style={{ padding: "5px", width: "200px" }}
      >
        <option value="">-- Select Game --</option>
        <option value="Cricket">Cricket</option>
        <option value="Football">Football</option>
        <option value="Golf">Golf</option>
        <option value="Badminton">Badminton</option>
      </select>
      <br />

      <input
        type="text"
        placeholder="Selected game will appear here"
        value={game}
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

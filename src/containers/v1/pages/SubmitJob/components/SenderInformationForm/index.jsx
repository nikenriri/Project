import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import DateTimePicker from "react-datetime-picker";

const SenderInformationForm = () => {
  const currencies = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    // ... other options
  ];

  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    // Your logic for handling the click
    setClickCount(clickCount + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {/* Sender Name and Contact */}
        <TextField
          id="outlined-basic"
          label="Sender name"
          variant="outlined"
          style={{ flexBasis: "48%" }}
          InputLabelProps={{ style: { fontSize: 14, fontFamily: "inherit" } }}
        />
        <TextField
          id="outlined-basic"
          label="Contact"
          variant="outlined"
          style={{ flexBasis: "48%" }}
          InputLabelProps={{ style: { fontSize: 14, fontFamily: "inherit" } }}
        />
      </div>

      {/* Sender Address */}
      <TextField
        id="outlined-basic"
        label="Sender Address"
        variant="outlined"
        style={{
          width: "100%",
          marginTop: 20,
          marginBottom: 20,
          borderColor: "red",
        }}
        InputLabelProps={{ style: { fontSize: 14, fontFamily: "inherit" } }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {/* Sender Name, Contact, and State */}
        <TextField
          id="outlined-basic"
          label="Sender name"
          variant="outlined"
          style={{ flexBasis: "31%" }}
          InputLabelProps={{ style: { fontSize: 14, fontFamily: "inherit" } }}
        />
        <TextField
          id="outlined-basic"
          label="Contact"
          variant="outlined"
          style={{ flexBasis: "31%" }}
          InputLabelProps={{ style: { fontSize: 14, fontFamily: "inherit" } }}
        />
        <TextField
          id="outlined-select-currency"
          select
          placeholder="State"
          style={{ flexBasis: "31%", fontFamily: "inherit" }}
          InputLabelProps={{ style: { fontSize: 14, fontFamily: "inherit" } }}
          MenuProps={{ style: { fontFamily: "inherit" } }}
        >
          {currencies.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              style={{ fontFamily: "inherit" }}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default SenderInformationForm;

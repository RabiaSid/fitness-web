import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    borderBottomColor: "#E0E3E7",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    color: "#616161",
    fontSize: "15px",
    fontWeight: 400,
    fontFamily: ["Barlow", "sans-serif"].join(","),
    "&:focus": {
      borderRadius: 0,
      border: "2px solid #fff",
      borderBottomColor: "#E0E3E7",
      boxShadow: "none",
    },
  },
}));

export default function InputSelect() {
  const [age, setAge] = React.useState("");
  const handleChange = (event: { target: { value: any } }) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  return (
    <div>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={10}
        onChange={handleChange}
        input={<BootstrapInput />}
        fullWidth={true}
        sx={{ maxHeight: "7vh" }}
      >
        <MenuItem value="">
          <em>Select an option</em> {/* Placeholder */}
        </MenuItem>
        <MenuItem value={10}>Boxing</MenuItem>
        <MenuItem value={20}>saiful islam</MenuItem>
        <MenuItem value={30}>Arafath Miya</MenuItem>
        <MenuItem value={40}>Shakil Miya</MenuItem>
        <MenuItem value={50}>Tamim Sharker</MenuItem>
      </Select>
    </div>
  );
}

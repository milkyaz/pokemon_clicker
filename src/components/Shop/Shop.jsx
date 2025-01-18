import { Box, Typography } from "@mui/material";

import { useState } from "react";

import { styled } from "@mui/material/styles";
import Select from "react-select";
import BerriesShop from "../BerriesShop/BerriesShop";
import ItemsShop from "../ItemsShop/ItemsShop";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#ff00ff" : "#ffd1dc",
    color: state.isSelected ? "#ffff00" : "#800080",
    padding: 20,
    border: state.isSelected ? "2px solid #32CD32" : "1px solid #0000ff",
    "&:hover": {
      backgroundColor: "#7fffd4",
      color: "#0000ff",
    },
  }),
  control: (provided) => ({
    ...provided,
    minHeight: 50,
    backgroundColor: "#ffc0cb",
    borderRadius: 25,
    border: "2px solid #ff00ff",
    fontSize: 20,
    "&:hover": {
      borderColor: "#7fffd4",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#ff00ff",
    fontSize: 20,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#ff00ff",
    fontSize: 20,
  }),
};
const styles = {
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  cardBox: {
    boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)",
    borderRadius: "16px",
    p: "12px",
  },
  cardMedia: {
    width: "59px",
    height: "59px",
    padding: "3px",
  },
  bottomText: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  typography: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#EFEFEF",
  paddingRight: "5px",
  paddingBottom: "5px",
  marginRight: "18px",
  width: "59px",
  height: "59px",
  borderRadius: "4px",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
export default function Shop({ onBuyBerry }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "option1", label: "Berries" },
    { value: "option2", label: "Items" },
    { value: "option3", label: "All" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Box
      className="shop"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "35vh",
        boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)",
        ml: "20px",
        borderRadius: "16px",
        p: "16px 16px 9px 16px",
      }}
    >
      {" "}
      <div className="container">
        <div>
          <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
          />
          <Typography variant="h4" sx={{ fontSize: "24px" }}>
            Магазин
          </Typography>

          {selectedOption?.label === "Berries" ? (
            <Box sx={{ overflow: "auto", maxHeight: "400px" }}>
              <BerriesShop onBuyBerry={onBuyBerry} />
            </Box>
          ) : selectedOption?.label === "Items" ? (
            <Box sx={{ overflow: "auto", maxHeight: "400px" }}>
              {" "}
              <ItemsShop />
            </Box>
          ) : (
            <Box sx={{ overflow: "auto", maxHeight: "400px" }}>
              <ItemsShop />
              <BerriesShop onBuyBerry={onBuyBerry} />
            </Box>
          )}
        </div>
      </div>
    </Box>
  );
}

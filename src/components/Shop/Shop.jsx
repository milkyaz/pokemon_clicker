import {
  Box,
  Typography,
  CardMedia,
  Button,
  Card,
  Snackbar,
  Alert,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { fetchItems } from "../../store/slices/itemsSlice";
import { styled } from "@mui/material/styles";
import Select from "react-select";
import BerriesShop from "../BerriesShop/BerriesShop";

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
export default function Shop({ onBuyBerry }) {
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

  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    if (!items || items.length === 0) {
      dispatch(fetchItems());
    }
  }, [dispatch, items]);

  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "option1", label: "Berries" },
    { value: "option2", label: "Items" },
    { value: "option3", label: "All" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  if (!items || items.length === 0) {
    return <Typography>Loading...</Typography>;
  }

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
              <BerriesShop />
            </Box>
          ) : selectedOption?.label === "Items" ? (
            <Box sx={{ overflow: "auto", maxHeight: "400px" }}>
              {items.map((item, index) => {
                return (
                  <Card
                    sx={{
                      marginBottom: "8px",
                    }}
                    key={index}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        marginBottom: "12px",
                        mt: "12px",
                      }}
                    >
                      <Item>
                        <CardMedia
                          sx={styles.cardMedia}
                          component="img"
                          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`}
                          id={item.id}
                          alt={item.name}
                        />
                      </Item>
                      <Box>
                        <Box></Box>
                        <Typography variant="p" sx={{ fontSize: "14px" }}>
                          {item.name}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "12px",
                      }}
                    >
                      <Button
                        // onClick={() => handleBuyBerry(item)}
                        sx={{
                          width: "270px",
                          background: "rgb(54, 95, 172)",
                          color: "white",
                          "&:hover": {
                            background: "rgb(39, 73, 138)",
                          },
                        }}
                      >
                        Купить
                      </Button>
                    </Box>
                  </Card>
                );
              })}
            </Box>
          ) : (
            <Box sx={{ overflow: "auto", maxHeight: "400px" }}>
              <BerriesShop />
              {items.map((item, index) => {
                return (
                  <Card
                    sx={{
                      marginBottom: "8px",
                    }}
                    key={index}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        marginBottom: "12px",
                        mt: "12px",
                      }}
                    >
                      <Item>
                        <CardMedia
                          sx={styles.cardMedia}
                          component="img"
                          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`}
                          id={item.id}
                          alt={item.name}
                        />
                      </Item>
                      <Box>
                        <Box></Box>
                        <Typography variant="p" sx={{ fontSize: "14px" }}>
                          {item.name}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "12px",
                      }}
                    >
                      <Button
                        // onClick={() => handleBuyBerry(item)}
                        sx={{
                          width: "270px",
                          background: "rgb(54, 95, 172)",
                          color: "white",
                          "&:hover": {
                            background: "rgb(39, 73, 138)",
                          },
                        }}
                      >
                        Купить
                      </Button>
                    </Box>
                  </Card>
                );
              })}
            </Box>
          )}
        </div>
      </div>
    </Box>
  );
}

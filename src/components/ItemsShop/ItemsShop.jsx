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

export default function ItemsShop() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    if (!items || items.length === 0) {
      dispatch(fetchItems());
    }
  }, [dispatch, items]);

  if (!items || items.length === 0) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <>
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
    </>
  );
}

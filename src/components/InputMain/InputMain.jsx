import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  CardMedia,
  TextField,
} from "@mui/material";
import { useState } from "react";

const IMAGES = {
  image1: new URL("./img/headerLogo.png", import.meta.url).href,
  image2: new URL("./img/hd-logo1.png", import.meta.url).href,
};

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: formData.name === "" ? "Name is required" : "",
      email: formData.email === "" ? "Email is required" : "",
    };
    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form or perform further actions here
      console.log("Form data:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        color="secondary"
        sx={{ my: 1 }}
        fullWidth
        value={formData.name}
        onChange={handleInputChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        color="secondary"
        sx={{ my: 1 }}
        value={formData.email}
        onChange={handleInputChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <Button
        type="submit"
        color="secondary"
        sx={{ my: 1 }}
        variant="contained"
        fullWidth
      >
        Register
      </Button>
    </form>
  );
}

function InputMain() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "400px",
          height: "388px",
        }}
      >
        <Box
          className="header__input"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CardMedia
            sx={{
              width: "328px",
              height: "54px",
            }}
            component="img"
            image={IMAGES.image1}
            alt="Paella  dish"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            width: "352px",
          }}
          className="text__header-input"
        >
          <Typography sx={{ fontSize: "14px", fontWeight: 400 }} variant="p">
            Sign up
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 400 }} variant="p">
            Sign in
          </Typography>
        </Box>
        <Box className="form__input">
          <Form />
        </Box>
      </Box>
    </Container>
  );
}

export default InputMain;

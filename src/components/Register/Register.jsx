import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  CardMedia,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  const IMAGES = {
    image1: new URL("./img/headerLogo.png", import.meta.url).href,
    image2: new URL("./img/hd-logo1.png", import.meta.url).href,
  };

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
          sx={{ display: "flex", justifyContent: "center", mb: "20px" }}
        >
          <CardMedia
            sx={{
              width: "328px",
              height: "54px",
            }}
            component="img"
            image={IMAGES.image1}
            alt="Logo"
          />
        </Box>
        <Paper elevation={3} sx={{ p: "24px" }}>
          <Box
            sx={{ textAlign: "center", pr: "27px", mb: "16px" }}
            className="text__header-input"
          >
            <Link to="/register">
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, mr: "32px" }}
                variant="p"
              >
                Зарегистрироваться
              </Typography>
            </Link>
            <Link to="/input-main">
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400 }}
                variant="p"
              >
                Войти в систему
              </Typography>
            </Link>
          </Box>
          <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="username"
              name="username"
              size="small"
              margin="normal"
              label="Логин"
              fullWidth
              {...register("username")}
              error={errors.username ? true : false}
              helperText={errors?.username?.message}
            />
            <TextField
              required
              id="password"
              name="password"
              label="Пароль"
              type="password"
              fullWidth
              size="small"
              margin="normal"
              {...register("password")}
              error={errors.password ? true : false}
              helperText={errors?.password?.message}
            />

            <TextField
              required
              id="confirmPassword"
              name="confirmPassword"
              label="Подтвердите пароль"
              type="password"
              fullWidth
              size="small"
              margin="normal"
              {...register("confirmPassword")}
              error={errors.confirmPassword ? true : false}
              helperText={errors?.confirmPassword?.message}
            />
            <Button
              fullWidth={true}
              disableElevation={true}
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              sx={{
                mt: "16px",
              }}
            >
              Зарегистрироваться
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

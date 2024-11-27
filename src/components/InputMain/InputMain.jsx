import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  CardMedia,
  TextField,
} from "@mui/material";
import { useForm, Controller, useFormState } from "react-hook-form";
import { loginValidation, passwordValidation } from "./validation";
import { Link } from "react-router";

export const InputMain = () => {
  const { handleSubmit, control } = useForm();
  const { errors } = useFormState({
    control,
  });

  const IMAGES = {
    image1: new URL("./img/headerLogo.png", import.meta.url).href,
    image2: new URL("./img/hd-logo1.png", import.meta.url).href,
  };

  const onSubmit = (data) => console.log(data);

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
            alt="Paella  dish"
          />
        </Box>
        <Paper elevation={3} sx={{ p: "24px" }}>
          <Box
            sx={{ textAlign: "center", pr: "27px", mb: "10px" }}
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

            <Typography sx={{ fontSize: "14px", fontWeight: 400 }} variant="p">
              Войти в систему
            </Typography>
          </Box>
          <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="login"
              rules={loginValidation}
              render={({ field }) => (
                <TextField
                  label="Логин"
                  onChange={(e) => field.onChange(e)}
                  defaultValue={field.value}
                  fullWidth={true}
                  size="small"
                  margin="normal"
                  className="auth-form__input"
                  error={!!errors.login?.message}
                  helperText={errors?.login?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={passwordValidation}
              render={({ field }) => (
                <TextField
                  label="Пароль"
                  onChange={(e) => field.onChange(e)}
                  defaultValue={field.value}
                  fullWidth={true}
                  size="small"
                  margin="normal"
                  type="password"
                  className="auth-form__input"
                  error={!!errors?.password?.message}
                  helperText={errors?.password?.message}
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth={true}
              disableElevation={true}
              style={{
                marginTop: 16,
              }}
            >
              Войти
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

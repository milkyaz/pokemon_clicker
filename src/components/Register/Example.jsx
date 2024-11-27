import { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paper, Box, TextField, Typography, Button } from "@mui/material";
import { validationSchema } from "./validation";
export const Example = () => {
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

  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Box>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="dense"
              {...register("password")}
              error={errors.password ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.password?.message}
            </Typography>
          </Box>
          <Box>
            <TextField
              required
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              margin="dense"
              {...register("confirmPassword")}
              error={errors.confirmPassword ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.confirmPassword?.message}
            </Typography>
          </Box>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};

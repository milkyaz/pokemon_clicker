import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Требуется полное имя"),
  username: Yup.string()
    .required("Требуется имя пользователя")
    .min(6, "Имя пользователя должно содержать не менее 6 символов")
    .max(20, "Имя пользователя не должно превышать 20 символов"),
  email: Yup.string()
    .required("Требуется адрес электронной почты")
    .email("Адрес электронной почты недействителен"),
  password: Yup.string()
    .required("Требуется пароль")
    .min(6, "Пароль должен содержать не менее 6 символов")
    .max(40, "Пароль не должен превышать 40 символов"),
  confirmPassword: Yup.string()
    .required("Требуется подтвердить пароль")
    .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),
  acceptTerms: Yup.bool().oneOf([true], "Требуется принять условия"),
});

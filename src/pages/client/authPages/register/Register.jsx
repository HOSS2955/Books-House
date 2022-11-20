import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../../../../components/client/MaterialForm/FormInput";

import { number, object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingButton as _LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { useRegisterUserMutation } from "../../../../services/authApi";
import { left } from "@popperjs/core";

const LoadingButton = styled(_LoadingButton)`
  padding: 0.6rem 0;
  background-color: #212529;
  color: #fff;
  font-weight: 500;
  border-radius: 50px;

  &:hover {
    background-color: #000000;
    transform: translateY(-1px);
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #2363eb;
  &:hover {
    text-decoration: underline;
  }
`;

const registerSchema = object({
  name: string().min(1, "Full name is required").max(30),
  phone: string()
    .min(1, "Phone number is required")
    .min(8, "Please Enter a valid phone number!"),
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .regex(
      new RegExp("(?=.*[0-9])"),
      "Password must have at least one numeric character!"
    )
    .regex(
      new RegExp("(?=.*[!@#$%^&*])"),
      "Password must have at least one special character!"
    )
    .regex(
      new RegExp("(?=.*[A-Z])"),
      "Password must have at least one uppercase character!"
    )
    .regex(
      new RegExp("(?=.*[a-z])"),
      "Password must have at least one lowercase character!"
    )
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

const RegisterPage = () => {
  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  // ? Calling the Register Mutation
  const [registerUser, { isLoading, isSuccess, error, isError }] =
    useRegisterUserMutation();

  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSuccess) {
      toast.success("User registered successfully");
      navigate("/auth/verification");
    }

    if (isError) {
      console.log(error);
      // if (Array.isArray(error.data.e)) {
      //   error.data.error.forEach((el) =>
      //     toast.error(el.message, {
      //       position: "top-right",
      //     })
      //   );
      // } else {
      //   toast.error(error.data.e, {
      //     position: "top-right",
      //   });
      // }
      toast.error(error.data.message, {
        position: "top-right",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler = (values) => {
    // ? Executing the RegisterUser Mutation
    registerUser(values);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: 8,
          borderRadius: "10px",
          px: "20px",
          mt: "3%",
        }}
      >
        <Typography
          textAlign="center"
          component="h1"
          sx={{
            color: "#ffc107",
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 600,
            mb: 2,
            letterSpacing: 1,
          }}
        >
          Welcome to Bookshouse🙌!
        </Typography>
        <Typography component="h2" sx={{ color: "#000", mb: 2 }}>
          Sign Up To Get Started!
        </Typography>

        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
            autoComplete="off"
            maxWidth="27rem"
            width="100%"
            sx={{
              p: { xs: "1rem", sm: "2rem" },
              borderRadius: 2,
            }}
          >
            <FormInput
              name="name"
              label="Full Name"
              sx={{
                border: 1,
                borderColor: "#000",
                borderRadius: "10px",
                boxShadow: 3,
              }}
            />
            <FormInput
              name="email"
              label="Email Address"
              type="email"
              sx={{
                border: 1,
                borderColor: "#000",
                borderRadius: "10px",
                boxShadow: 3,
              }}
            />
            <FormInput name="phone" label="Phone Number" type="number" />
            <FormInput
              name="password"
              label="Password"
              type="password"
              sx={{
                border: 1,
                borderColor: "#000",
                borderRadius: "10px",
                boxShadow: 3,
              }}
            />
            <FormInput
              name="passwordConfirm"
              label="Confirm Password"
              type="password"
              sx={{
                border: 1,
                borderColor: "#000",
                borderRadius: "10px",
                boxShadow: 3,
              }}
            />
            <Typography sx={{ fontSize: "0.9rem", mb: "1rem" }}>
              Already have an account?{" "}
              <LinkItem to="/auth/login">Login Here</LinkItem>
            </Typography>

            <LoadingButton
              variant="contained"
              sx={{ mt: 1 }}
              fullWidth
              disableElevation
              type="submit"
              loading={isLoading}
            >
              Sign Up
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};

export default RegisterPage;

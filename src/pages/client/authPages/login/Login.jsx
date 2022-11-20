import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../../components/client/MaterialForm/FormInput";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadingButton as _LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { useLoginUserMutation } from "../../../../services/authApi";

const LoadingButton = styled(_LoadingButton)`
  padding: 0.6rem 0;
  background-color: #f9d13e;
  color: #2363eb;
  font-weight: 500;

  &:hover {
    background-color: #ebc22c;
    transform: translateY(-2px);
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #2363eb;
  &:hover {
    text-decoration: underline;
  }
`;

const loginSchema = object({
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
});

const LoginAdmin = () => {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
  });

  // ? API Login Mutation
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from.pathname || "/profile";

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSuccess) {
      toast.success("You successfully logged in");
      navigate(from);
    }
    if (isError) {
      console.log(error.data);

      //if (Array.isArray(error.data)) {
      //         error.data.forEach((el) =>
      //           toast.error(el.message, {
      //             position: "top-right",
      //           })
      //         );
      //       } else {
      //         toast.error(error, {
      //           position: "top-right",
      //         });
      //       }
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
    // ? Executing the loginUser Mutation
    loginUser(values);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#2363eb",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          textAlign="center"
          component="h1"
          sx={{
            color: "#f9d13e",
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 2,
            letterSpacing: 1,
          }}
        >
          Welcome Back!
        </Typography>
        <Typography
          variant="body1"
          component="h2"
          sx={{ color: "#e5e7eb", mb: 2 }}
        >
          Login to have access!
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
              backgroundColor: "#e5e7eb",
              p: { xs: "1rem", sm: "2rem" },
              borderRadius: 2,
            }}
          >
            <FormInput name="email" label="Email Address" type="email" />
            <FormInput name="password" label="Password" type="password" />

            <Typography sx={{ fontSize: "0.9rem", mb: "1rem" }}>
              Need an account?
              <LinkItem to="/auth/register">Sign Up Here</LinkItem>
            </Typography>

            <LoadingButton
              variant="contained"
              sx={{ mt: 1 }}
              fullWidth
              disableElevation
              type="submit"
              loading={isLoading}
            >
              Login
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};

export default LoginAdmin;

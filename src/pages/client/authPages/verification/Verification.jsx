import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../../components/client/MaterialForm/FormInput";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingButton as _LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { useVerifyEmailMutation } from "../../../../services/authApi";

const LoadingButton = styled(_LoadingButton)`
  padding: 0.6rem 0;
  background-color: #212529;
  color: #fff;
  font-weight: 500;
  border-radius: 50px;

  &:hover {
    background-color: #000000;
  }
`;

const verificationCodeSchema = object({
  verificationCode: string()
    .min(1, "Verification code is required")
    .min(9, "Make sure you get that from your email!"),
});

const EmailVerificationPage = () => {
  const { verificationCode } = useParams();

  const methods = useForm({
    resolver: zodResolver(verificationCodeSchema),
  });

  // ? API Login Mutation
  const [verifyEmail, { isLoading, isSuccess, data, isError, error }] =
    useVerifyEmailMutation();

  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (verificationCode) {
      reset({ verificationCode });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSuccess) {
      console.log("data", data);
      toast.success(data?.message);
      navigate("/auth/login");
    }
    if (isError) {
      // if (Array.isArray(error.data)) {
      //   error.data.error.forEach((el) =>
      //     toast.error(el.message, {
      //       position: "top-right",
      //     })
      //   );
      // } else {
      //   toast.error(error.data.message, {
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

  const onSubmitHandler = ({ verificationCode }) => {
    // ? Executing the verifyEmail Mutation
    verifyEmail({ verificationCode });
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
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
          padding: "20px",
        }}
      >
        <Typography
          textAlign="center"
          component="h1"
          sx={{
            color: "#ffc107",
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 2,
            letterSpacing: 0.75,
          }}
        >
          Verify Email Address
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
              name="verificationCode"
              label="Verification Code"
              sx={{
                border: 1,
                borderColor: "primary.main",
                borderRadius: "10px",
                boxShadow: 4,
              }}
            />

            <LoadingButton
              variant="contained"
              sx={{ mt: 1 }}
              fullWidth
              disableElevation
              type="submit"
              loading={isLoading}
            >
              Verify Email
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};

export default EmailVerificationPage;

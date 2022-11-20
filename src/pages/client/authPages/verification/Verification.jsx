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
  background-color: #f9d13e;
  color: #2363eb;
  font-weight: 500;

  &:hover {
    background-color: #ebc22c;
    transform: translateY(-2px);
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
              backgroundColor: "#e5e7eb",
              p: { xs: "1rem", sm: "2rem" },
              borderRadius: 2,
            }}
          >
            <FormInput name="verificationCode" label="Verification Code" />

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

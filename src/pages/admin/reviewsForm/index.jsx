import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/admin/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook, updateBook } from "../../../store/client/reducers/bookSlice";
import { useEffect } from "react";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";

const initialValues = {
   title: "",
   price: "",
   author: "",
   desc: "",
   category: "",
   // imageSrc: "",
};

const userSchema = yup.object().shape({
   title: yup.string(),
   reviewer: yup.string(),
   publisher: yup.string(),
   desc: yup.string(),
   category: yup.string(),
   // imageSrc: yup.string(),
});

export default function ReviewsForm() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [formValue, setFormValue] = useState({});
   const { id } = useParams();
   const { dataEditBook } = useSelector((state) => state.books);

   useEffect(() => {
      if (id) {
         setFormValue(dataEditBook);
      }
   }, []);

   const isNonMobile = useMediaQuery("(min-width:600px)");
   // SUBMIT
   const handleFormSubmit = (book) => {
      if (id) {
         // dispatch(updateBook({ id, formValue }));
      } else {
         setFormValue({
            ...book,
            imageSrc: url,
         });
         // dispatch(addBook(formValue));
      }
      navigate("/admin/reviews");
   };

   const operationHandler = (e) => {
      setFormValue({
         ...formValue,
         [e.target.name]: e.target.value,
      });

      console.log(formValue);
   };

   //upload logic
   const [image, setImage] = useState("");
   const [url, setUrl] = useState("");
   const uploadImage = async () => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "booksImages");
      data.append("cloud_name", "dzm6mwpui");
      fetch("https://api.cloudinary.com/v1_1/dzm6mwpui/image/upload", {
         method: "post",
         body: data,
      })
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data.url);
            setUrl(data.url);
            setFormValue({
               ...formValue,
               imageSrc: data.url,
            });
         })
         .catch((err) => console.log(err));
   };
   return (
      <Box m="20px 20px 0">
         <Header title="REVIEWS FORM" subTitle="" />
         <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
         >
            {({
               values,
               errors,
               touched,
               handleBlur,
               handleChange,
               handleSubmit,
            }) => (
               <form onSubmit={handleSubmit} onChange={operationHandler}>
                  <Box
                     display="grid"
                     gap="30px"
                     gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                     sx={{
                        "& > div": {
                           gridColumn: isNonMobile ? undefined : "span 4",
                        },
                     }}
                  >
                     {/* TITLE */}
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Title"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.title}
                        placeholder={id ? dataEditBook.title : ""}
                        name="title"
                        error={!!touched.title && !!errors.title}
                        helperText={touched.title && errors.title}
                        sx={{ gridColumn: "span 4" }}
                     />
                     {/* PRICE */}
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Reviewer"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.reviewer}
                        placeholder={id ? dataEditBook.reviewer : ""}
                        name="reviewer"
                        error={!!touched.reviewer && !!errors.reviewer}
                        helperText={touched.reviewer && errors.reviewer}
                        sx={{ gridColumn: "span 4" }}
                     />
                     {/* AUTHOR */}
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Author"
                        onBlur={handleBlur}
                        placeholder={id ? dataEditBook.author : ""}
                        onChange={handleChange}
                        value={values.author}
                        name="author"
                        error={!!touched.author && !!errors.author}
                        helperText={touched.author && errors.author}
                        sx={{ gridColumn: "span 4" }}
                     />
                     {/* CATEGORY */}
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Category"
                        placeholder={id ? dataEditBook.category : ""}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.category}
                        name="category"
                        error={!!touched.category && !!errors.category}
                        helperText={touched.category && errors.category}
                        sx={{ gridColumn: "span 4" }}
                     />
                     {/* DECRIPTOIN */}
                     <TextField
                        fullWidth
                        multiline
                        rows={5}
                        maxRows={10}
                        variant="filled"
                        type="text"
                        label="Description"
                        placeholder={id ? dataEditBook.desc : ""}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.desc}
                        name="desc"
                        error={!!touched.desc && !!errors.desc}
                        helperText={touched.desc && errors.desc}
                        sx={{ gridColumn: "span 4" }}
                     />

                     {/* IMGAE */}
                     <Box
                        sx={{
                           m: 2,
                           display: "flex",
                        }}
                     >
                        <Typography sx={{ color: colors.grey[200], mr: 2 }}>
                           Image
                        </Typography>
                        <div>
                           <input
                              type="file"
                              onChange={(e) => {
                                 setImage(e.target.files[0]);
                              }}
                           ></input>
                        </div>

                        <Box>
                           <Button
                              disabled={image ? false : true}
                              variant="contained"
                              component="label"
                              onClick={uploadImage}
                              sx={{
                                 backgroundColor: colors.greenAccent[600],
                                 ml: 0,
                                 display: "block",
                              }}
                           >
                              Upload
                           </Button>
                        </Box>
                     </Box>

                     {/* <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Image Source"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.imageSrc}
                        name="imageSrc"
                        error={!!touched.imageSrc && !!errors.imageSrc}
                        helperText={touched.imageSrc && errors.imageSrc}
                        sx={{ gridColumn: "span 4" }}
                     /> */}
                  </Box>
                  <Box display="flex" justifyContent="end" mt="20px">
                     <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                     >
                        {id ? "Edit " : "Add Review"}
                     </Button>
                  </Box>
               </form>
            )}
         </Formik>
         <div className="d-flex">
            {url && <p className="fs-5 text-success">Uploaded Successfully</p>}
         </div>
      </Box>
   );
}

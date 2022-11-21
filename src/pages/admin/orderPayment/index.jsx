import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataInvoices } from "../../../data/mockData";
import Header from "../../../components/admin/Header";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getstripePackages } from "../../../store/client/reducers/stripePackagesSlice";
import { useEffect } from "react";

export default function OrderPayment() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const dispatch = useDispatch();
   const { stripePackagesData } = useSelector((state) => state.stripePackages);
   // useEffect(() => {
   //    dispatch(getstripePackages());
   //    console.log(stripePackagesData);
   // }, []);

   const columns = [
      { field: "pacakage.id", headerName: "ID", flex: 0.5 },
      {
         field: "pacakage.price",
         headerName: "Price",
         flex: 1,
         cellClassName: "name-column--cell",
      },
      {
         field: "pacakage.authorData",
         headerName: "Author Data",
         flex: 1,
      },
      {
         field: "pacakage.lastName",
         headerName: "Last Name",
         flex: 1,
      },
      {
         field: "pacakage.authorEmail",
         headerName: "Email",
         flex: 1,
      },
   ];

   return (
      <Box m="20px">
         <Header title="ORDER PAYMENT" subTitle="" />
         <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
               "& .MuiDataGrid-root": {
                  border: "none",
               },
               "& .MuiDataGrid-cell": {
                  borderBottom: "none",
               },
               "& .name-column--cell": {
                  color: colors.greenAccent[300],
               },
               "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
               },
               "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
               },
               "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
               },
               "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
               },
            }}
         >
            {/* <DataGrid rows={stripePackagesData} columns={columns} /> */}
         </Box>
      </Box>
   );
}

/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

export default function data() {
  return {
    columns: [
      { Header: "ID", accessor: "id", width: "30px", align: "left" },
      { Header: "Local", accessor: "name", align: "left" },
      { Header: "Capacidade", accessor: "capacity", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: []
    // rows: [
    //   {
    //     id: (
    //       <Box>
    //         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //           1
    //         </MDTypography>
    //       </Box>
    //     ),
    //     name: (
    //       <Box>
    //         <MDInput type="text" label="Local" value="working" class="name1" disabled/>
    //       </Box>
    //     ),
    //     capacity: (
    //       <Box>
    //         <MDInput type="number" label="Capacidade" value="10" class="capacity1" disabled/>
    //       </Box>
    //     ),
    //     action: (
    //       <Box>
    //         <IconButton 
    //           aria-label="delete"
    //           onClick={() => {
    //             alert('delete');
    //           }}
    //         >
    //           <Icon style={{color: '#d96464'}}>delete</Icon>
    //         </IconButton>

    //         <IconButton 
    //           aria-label="edit"
    //           onClick={() => {
    //             console.log(this);
    //             // this.setState({ disabled: false });
    //           }}
    //         >
    //           <Icon style={{color: '#9c27b0'}}>edit</Icon>
    //         </IconButton>
    //       </Box>
    //     ),
    //   },
    //   {
    //     id: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         1
    //       </MDTypography>
    //     ),
    //     name: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         working
    //       </MDTypography>
    //     ),
    //     capacity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         10
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" color="text">
    //         <Icon>more_vert</Icon>
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     id: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         1
    //       </MDTypography>
    //     ),
    //     name: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         working
    //       </MDTypography>
    //     ),
    //     capacity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         10
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" color="text">
    //         <Icon>more_vert</Icon>
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     id: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         1
    //       </MDTypography>
    //     ),
    //     name: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         working
    //       </MDTypography>
    //     ),
    //     capacity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         10
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" color="text">
    //         <Icon>more_vert</Icon>
    //       </MDTypography>
    //     ),
    //   },
    // ],
  };
}

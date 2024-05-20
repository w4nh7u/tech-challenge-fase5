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
import React, { Component, useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import { red } from '@mui/material/colors';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import ApiPlaces from "api/places";

let rows = []
async function getData() {
  const places = await ApiPlaces.get()

  rows = places.data
}
getData()

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false)
  const [refreshData, setRefreshData] = useState(false)

  React.useEffect(()=>{
    row
  },[refreshData])

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.capacity}</TableCell>
        <TableCell align="right">
        <IconButton 
            variant="gradient" 
            color="success"
            onClick={() => {
              setOpen(!open)
            }}
          >
            <Icon round>edit</Icon>
          </IconButton>
          <IconButton 
            variant="gradient" 
            sx={{ color: red[600] }}
            onClick={() => {
              ApiPlaces
                .delete(row.id)
                .then(response => {
                  if (response.hasOwnProperty('data')) {
                    alert('Local foi apagado!')
                    window.location.reload()
                  } 
                  else {
                    alert('Ops! Tivemos algum problema, tente novamente!')
                  }
                });
            }}
          >
            <Icon round>delete</Icon>
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Alterar Dados
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow 
                    key={row.id}
                  >
                    <TableCell component="th" scope="row">
                      <TextField 
                        label="Nome" 
                        variant="standard" 
                        defaultValue={row.name}
                        required
                        onChange={(e) => {
                          row.name = e.target.value;
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField 
                        label="Capacidade" 
                        variant="standard"
                        type="number"
                        defaultValue={row.capacity}
                        required
                        onChange={(e) => {
                          row.capacity = parseInt(e.target.value);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <MDButton 
                        variant="gradient" 
                        color="success"
                        onClick={() => {
                          row.name = row.name;
                          row.capacity = row.capacity;
                          ApiPlaces.update(row.id, {name: row.name, capacity: row.capacity})
                            .then(response => {
                              if (response.hasOwnProperty('data')) {
                                alert('Local atualizado com sucesso!')
                                setRefreshData(!refreshData)
                              } 
                              else {
                                alert('Ops! Tivemos algum problema, tente novamente!')
                              }
                            });
                          setRefreshData(!refreshData)
                        }}
                      >
                        <Icon sx={{ fontWeight: "bold" }}>send</Icon>
                        &nbsp;&nbsp;salvar
                      </MDButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

let insert = {
  name: '',
  capacity: 0
}

function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Locais
                </MDTypography>
              </MDBox>

              <Box mt={2}>
                <Accordion>
                  <AccordionSummary id="panel-header" aria-controls="panel-content" style={{backgroundColor: '#000'}}>
                    <Box>
                      <MDButton 
                        color="black"
                      >
                        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                        &nbsp;novo local
                      </MDButton>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <MDInput 
                        type="text" 
                        label="Nome" 
                        variant="standard" 
                        pr={2}
                        onChange={(e) => {
                          insert.name = e.target.value;
                        }}
                      />
                      <MDInput 
                        type="number" 
                        label="Capacidade" 
                        variant="standard"
                        onChange={(e) => {
                          insert.capacity = parseInt(e.target.value);
                        }}
                      />
                      <Box
                        mt={1}
                        ml={1}
                      >
                        <MDButton 
                          variant="gradient" 
                          color="success"
                          onClick={() => {
                            ApiPlaces.insert(insert)
                              .then(response => {
                                if (response.hasOwnProperty('data')) {
                                  alert('Novo local cadastrado com sucesso!')
                                  getData()
                                } 
                                else {
                                  alert('Ops! Tivemos algum problema, tente novamente!')
                                }
                              });
                            
                              window.location.reload()
                          }}
                        >
                          <Icon sx={{ fontWeight: "bold" }}>send</Icon>
                          &nbsp;&nbsp;salvar
                        </MDButton>
                        </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>

              <Box 
                pt={3}
              >
                <TableContainer component={Paper}>
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Nome</TableCell>
                        <TableCell align="right">Capacidade</TableCell>
                        <TableCell align="right">Ações</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <Row key={row.id} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;

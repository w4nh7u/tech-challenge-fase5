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
import './reservation.css';
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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
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

import ApiReservations from "api/reservations";
import ApiPlaces from "api/places";

let places = []
async function getPlaces() {
  places = await ApiPlaces.get()
  places = places.data
}
getPlaces()

let rows = []
async function getData() {
  const reservations = await ApiReservations.get()

  rows = reservations.data
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
        <TableCell align="right">{row.place}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.start}</TableCell>
        <TableCell align="right">{row.end}</TableCell>
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
              ApiReservations
                .delete(row.id)
                .then(response => {
                  if (response.hasOwnProperty('data')) {
                    alert('Reserva foi desfeita!')
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
                    <TableCell>
                      <MDInput
                        size="large"
                        select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //value={gender}
                        label="Locais"
                        InputProps={{
                          classes: { root: "select-input-styles" },
                        }}
                        fullWidth
                      >
                        {places.map((place) => (
                          <MenuItem value={place.id}>{place.name}</MenuItem>
                        ))}
                      </MDInput>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <TextField 
                        label="Dia" 
                        variant="standard" 
                        defaultValue={row.date}
                        type="date"
                        required
                        onChange={(e) => {
                          row.name = e.target.value;
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField 
                        label="Início" 
                        variant="standard"
                        type="time"
                        defaultValue={row.start}
                        required
                        onChange={(e) => {
                          row.start = e.target.value;
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField 
                        label="Início" 
                        variant="standard"
                        type="time"
                        defaultValue={row.end}
                        required
                        onChange={(e) => {
                          row.end = e.target.value;
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <MDButton 
                        variant="gradient" 
                        color="success"
                        onClick={() => {
                          let hora1 = row.start.split(":");
                          let hora2 = row.end.split(":");

                          let d = new Date(row.date);
                          const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hora1[0], hora1[1]);
                          const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hora2[0], hora2[1]);

                          const reservas = rows.filter(r => {
                            let r1 = r.start.split(":");
                            let r2 = r.end.split(":");
                            let d = new Date(r.date);
                            const rStart = new Date(d.getFullYear(), d.getMonth(), d.getDate(), r1[0], r1[1]);
                            const rEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), r2[0], r2[1]);

                            if (
                              r.place == row.place &&
                              rStart.getTime() <= end.getTime() && 
                              rEnd.getTime() >= start.getTime()
                            ) {
                              alert('Já existe reserva para este horário!')
                              return
                            }
                            return rows
                          })

                          if (start > end) {
                            alert('O início deve ser menor que o fim');
                            return
                          }

                          const diff = (end.getTime() - start.getTime()) / 1000 / 60 / 60;
                          if (diff < 1) {
                            alert('O mínimo de tempo de reserva deve ser de 1 hora');
                            return
                          }

                          if (diff > 8) {
                            alert('O máximo de tempo de reserva deve ser de 8 horas');
                            return
                          }

                          ApiReservations.update(row.id, {place: row.place, date: row.date, start: row.start, end: row.end})
                            .then(response => {
                              if (response.hasOwnProperty('data')) {
                                alert('Reserva atualizada com sucesso!')
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
  place: '',
  date: '',
  start: '',
  end: '',
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
                  Reservas
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
                        &nbsp;nova reserva
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
                        label="Locais"
                        variant="standard"
                        onChange={(e) => {
                          insert.place = e.target.value;
                        }}
                      />

                      <MDInput 
                        type="date" 
                        label="Data" 
                        variant="standard" 
                        pr={2}
                        onChange={(e) => {
                          insert.date = e.target.value;
                        }}
                      />
                      
                      <MDInput 
                        type="time" 
                        label="Início" 
                        variant="standard"
                        onChange={(e) => {
                          insert.start = e.target.value;
                        }}
                      />

                      <MDInput 
                        type="time" 
                        label="Fim" 
                        variant="standard"
                        onChange={(e) => {
                          insert.end = e.target.value;
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
                            let hora1 = insert.start.split(":");
                            let hora2 = insert.end.split(":");

                            let d = new Date(insert.date);
                            const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hora1[0], hora1[1]);
                            const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hora2[0], hora2[1]);

                            const reservas = rows.filter(r => {
                              let r1 = r.start.split(":");
                              let r2 = r.end.split(":");
                              let d = new Date(r.date);
                              const rStart = new Date(d.getFullYear(), d.getMonth(), d.getDate(), r1[0], r1[1]);
                              const rEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), r2[0], r2[1]);

                              if (
                                r.place == insert.place &&
                                rStart.getTime() <= end.getTime() && 
                                rEnd.getTime() >= start.getTime()
                              ) {
                                alert('Já existe reserva para este horário!')
                                return
                              }
                              return rows
                            })

                            if (start > end) {
                              alert('O início deve ser menor que o fim');
                              return
                            }

                            const diff = (end.getTime() - start.getTime()) / 1000 / 60 / 60;
                            if (diff < 1) {
                              alert('O mínimo de tempo de reserva deve ser de 1 hora');
                              return
                            }

                            if (diff > 8) {
                              alert('O máximo de tempo de reserva deve ser de 8 horas');
                              return
                            }

                            ApiReservations.insert(insert)
                              .then(response => {
                                if (response.hasOwnProperty('data')) {
                                  alert('Nova reserva cadastrada com sucesso!')
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
                        <TableCell align="right">Local</TableCell>
                        <TableCell align="right">Dia</TableCell>
                        <TableCell align="right">Início</TableCell>
                        <TableCell align="right">Fim</TableCell>
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

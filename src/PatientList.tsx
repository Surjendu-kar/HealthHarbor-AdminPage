import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeProvider,
  createTheme,
  Button,
  TextField,
} from "@mui/material";
import { useTable, useUpdate, useNavigation, useDelete } from "@refinedev/core";

const PatientList = () => {
  const { tableQueryResult } = useTable({ resource: "patientInfo" });
  const { data } = tableQueryResult;
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const { mutate: updatePatient } = useUpdate();
  const { mutate: deletePatient } = useDelete();

  const { push } = useNavigation();

  const theme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            maxWidth: 250,
            wordBreak: "break-word",
            color: "black",
            backgroundColor: "white",
            border: "1px solid #ccc", // Add border here
          },
        },
      },
    },
  });

  const handleEditClick = (patient) => {
    setEditRowId(patient.id);
    setEditFormData({
      name: patient.name,
      email: patient.email,
      created_at: patient.created_at,
      gender: patient.gender,
      role: patient.role,
      allergies: patient.allergies,
      height: patient.height,
      weight: patient.weight,
      address: patient.address,
      city: patient.city,
      emergencyContact: patient.emergencyContact,
      bloodGroup: patient.bloodGroup,
      dateOfBirth: patient.dateOfBirth,
      phoneNo: patient.phoneNo,
      insuranceInfo: patient.insuranceInfo,
      about: patient.about,
      img: patient.img,
      appointment: patient.appointment,
    });
  };

  const handleSave = (id) => {
    updatePatient({ resource: "patientInfo", id: id, values: editFormData });
    setEditRowId(null);
  };

  const handleDelete = (id) => {
    deletePatient({ resource: "patientInfo", id: id });
  };

  const handleChange = (e, field) => {
    setEditFormData({ ...editFormData, [field]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          overflowX: "auto",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Table sx={{ minWidth: 4000 }}>
          <TableHead>
            <TableRow style={{  }}>
              <TableCell style={{ width: 50, }}>Id</TableCell>
              <TableCell style={{ width: 100 }}>Name</TableCell>
              <TableCell style={{ width: 300 }}>Email</TableCell>
              <TableCell style={{ width: 300 }}>Created At</TableCell>
              <TableCell style={{ width: 100 }}>Gender</TableCell>
              <TableCell style={{ width: 100 }}>Role</TableCell>
              <TableCell>Allergies</TableCell>
              <TableCell style={{ width: 100 }}>Height</TableCell>
              <TableCell style={{ width: 100 }}>Weight</TableCell>
              <TableCell style={{ width: 250 }}>Address</TableCell>
              <TableCell style={{ width: 150 }}>City</TableCell>
              <TableCell style={{ width: 150 }}>Emergency Contact</TableCell>
              <TableCell style={{ width: 150 }}>Blood Group</TableCell>
              <TableCell style={{ width: 150 }}>Date Of Birth</TableCell>
              <TableCell style={{ width: 150 }}>Phone No</TableCell>
              <TableCell>Insurance Info</TableCell>
              <TableCell>About</TableCell>
              <TableCell>Img</TableCell>
              <TableCell>Appointment</TableCell>
              <TableCell style={{ width: 400 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.id}</TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.name}
                      onChange={(e) => handleChange(e, "name")}
                      size="small"
                    />
                  ) : (
                    patient.name
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.email}
                      onChange={(e) => handleChange(e, "email")}
                      size="small"
                    />
                  ) : (
                    patient.email
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.created_at}
                      onChange={(e) => handleChange(e, "createdAt")}
                      size="small"
                    />
                  ) : (
                    patient.created_at
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.gender}
                      onChange={(e) => handleChange(e, "gender")}
                      size="small"
                    />
                  ) : (
                    patient.gender
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.role}
                      onChange={(e) => handleChange(e, "role")}
                      size="small"
                    />
                  ) : (
                    patient.role
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.allergies}
                      onChange={(e) => handleChange(e, "allergies")}
                      size="small"
                    />
                  ) : (
                    patient.allergies
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.height}
                      onChange={(e) => handleChange(e, "height")}
                      size="small"
                    />
                  ) : (
                    patient.height
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.weight}
                      onChange={(e) => handleChange(e, "weight")}
                      size="small"
                    />
                  ) : (
                    patient.weight
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.address}
                      onChange={(e) => handleChange(e, "address")}
                      size="small"
                    />
                  ) : (
                    patient.address
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.city}
                      onChange={(e) => handleChange(e, "city")}
                      size="small"
                    />
                  ) : (
                    patient.city
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.emergencyContact}
                      onChange={(e) => handleChange(e, "emergencyContact")}
                      size="small"
                    />
                  ) : (
                    patient.emergencyContact
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.bloodGroup}
                      onChange={(e) => handleChange(e, "bloodGroup")}
                      size="small"
                    />
                  ) : (
                    patient.bloodGroup
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.dateOfBirth}
                      onChange={(e) => handleChange(e, "dateOfBirth")}
                      size="small"
                    />
                  ) : (
                    patient.dateOfBirth
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.phoneNo}
                      onChange={(e) => handleChange(e, "phoneNo")}
                      size="small"
                    />
                  ) : (
                    patient.phoneNo
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.insuranceInfo}
                      onChange={(e) => handleChange(e, "insuranceInfo")}
                      size="small"
                    />
                  ) : (
                    patient.insuranceInfo
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.about}
                      onChange={(e) => handleChange(e, "about")}
                      size="small"
                    />
                  ) : (
                    patient.about
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.img}
                      onChange={(e) => handleChange(e, "img")}
                      size="small"
                    />
                  ) : (
                    patient.img
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <TextField
                      value={editFormData.appointment}
                      onChange={(e) => handleChange(e, "appointment")}
                      size="small"
                    />
                  ) : (
                    patient.appointment
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === patient.id ? (
                    <Button
                      color="primary"
                      onClick={() => handleSave(patient.id)}
                      disableElevation
                    >
                      Save
                    </Button>
                  ) : (
                    <>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => handleEditClick(patient)}
                        disableElevation
                      >
                        Edit
                      </Button>
                      <Button
                        color="secondary"
                        variant="outlined"
                        onClick={() => handleDelete(patient.id)}
                        style={{ marginLeft: "0.5rem" }}
                        disableElevation
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </ThemeProvider>
  );
};
export default PatientList;

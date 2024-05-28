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
import { BaseRecord } from "@refinedev/core/resources";

interface Qualification {
  startDate: string;
  endDate: string;
  degree: string;
  university: string;
}

interface Experience {
  startDate: string;
  endDate: string;
  position: string;
  hospital: string;
}

interface TimeSlot {
  day: string;
  startTime: string;
  endTime: string;
}

interface Doctor extends BaseRecord {
  name: string;
  email: string;
  created_at: string;
  gender: string;
  price: number;
  qualifications: Qualification[];
  experiences: Experience[];
  timeSlot: TimeSlot[];
  about: string;
  phoneno: string;
  address: string;
  city: string;
  img: string;
  role: string;
  approved: string;
}

const DoctorList = () => {
  const { tableQueryResult } = useTable({ resource: "doctorInfo" });
  const { data } = tableQueryResult;
  const [editRowId, setEditRowId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<Doctor>({} as Doctor);
  const { mutate: updateDoctor } = useUpdate<Doctor>();
  const { mutate: deleteDoctor } = useDelete<Doctor>();

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
            border: "1px solid #ccc", 
          },
        },
      },
    },
  });

  const handleEditClick = (doctor: Doctor) => {
    setEditRowId(doctor.id);
    setEditFormData({
      name: doctor.name,
      email: doctor.email,
      created_at: doctor.created_at,
      gender: doctor.gender,
      price: doctor.price,
      qualifications: doctor.qualifications,
      experiences: doctor.experiences,
      timeSlot: doctor.timeSlot,
      about: doctor.about,
      phoneno: doctor.phoneno,
      address: doctor.address,
      city: doctor.city,
      img: doctor.img,
      role: doctor.role,
      approved: doctor.approved,
    });
  };

  const handleSave = (id: string) => {
    updateDoctor({ resource: "doctorInfo", id: id, values: editFormData });
    setEditRowId(null);
  };

  const handleDelete = (id: string) => {
    deleteDoctor({ resource: "doctorInfo", id: id });
  };

  const handleApprove = (doctorId: string) => {
    const newValues = { ...editFormData, approved: "YES" };
    updateDoctor({ resource: "doctorInfo", id: doctorId, values: newValues });
  };

  const handleReject = (doctorId: string) => {
    const newValues = { ...editFormData, approved: "NO" };
    updateDoctor({ resource: "doctorInfo", id: doctorId, values: newValues });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
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
            <TableRow>
              <TableCell style={{ width: 100 }}>Id</TableCell>
              <TableCell style={{ width: 100 }}>Name</TableCell>
              <TableCell style={{ width: 300 }}>Email</TableCell>
              <TableCell style={{ width: 300 }}>Created At</TableCell>
              <TableCell style={{ width: 100 }}>Gender</TableCell>
              <TableCell style={{ width: 100 }}>Price</TableCell>
              <TableCell>Qualifications</TableCell>
              <TableCell>Experiences</TableCell>
              <TableCell>TimeSlot</TableCell>
              <TableCell>About</TableCell>
              <TableCell style={{ width: 150 }}>Phoneno</TableCell>
              <TableCell style={{ width: 250 }}>Address</TableCell>
              <TableCell style={{ width: 150 }}>City</TableCell>
              <TableCell>Img</TableCell>
              <TableCell style={{ width: 100 }}>Role</TableCell>
              <TableCell style={{ width: 100 }}>YES / NO</TableCell>
              <TableCell style={{ width: 400 }}>Approve by Admin</TableCell>
              <TableCell style={{ width: 400 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.id}</TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.name}
                      onChange={(e) => handleChange(e, "name")}
                      size="small"
                    />
                  ) : (
                    doctor.name
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.email}
                      onChange={(e) => handleChange(e, "email")}
                      size="small"
                    />
                  ) : (
                    doctor.email
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.created_at}
                      onChange={(e) => handleChange(e, "createdAt")}
                      size="small"
                    />
                  ) : (
                    doctor.created_at
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.gender}
                      onChange={(e) => handleChange(e, "gender")}
                      size="small"
                    />
                  ) : (
                    doctor.gender
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.price}
                      onChange={(e) => handleChange(e, "price")}
                      size="small"
                    />
                  ) : (
                    doctor.price
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.qualifications}
                      onChange={(e) => handleChange(e, "qualifications")}
                      size="small"
                    />
                  ) : (
                    doctor.qualifications
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.experiences}
                      onChange={(e) => handleChange(e, "experiences")}
                      size="small"
                    />
                  ) : (
                    doctor.experiences
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.timeSlot}
                      onChange={(e) => handleChange(e, "timeSlot")}
                      size="small"
                    />
                  ) : (
                    doctor.timeSlot
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.about}
                      onChange={(e) => handleChange(e, "about")}
                      size="small"
                    />
                  ) : (
                    doctor.about
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.phoneno}
                      onChange={(e) => handleChange(e, "phoneno")}
                      size="small"
                    />
                  ) : (
                    doctor.phoneno
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.address}
                      onChange={(e) => handleChange(e, "address")}
                      size="small"
                    />
                  ) : (
                    doctor.address
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.city}
                      onChange={(e) => handleChange(e, "city")}
                      size="small"
                    />
                  ) : (
                    doctor.city
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.img}
                      onChange={(e) => handleChange(e, "img")}
                      size="small"
                    />
                  ) : (
                    doctor.img
                  )}
                </TableCell>
                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.role}
                      onChange={(e) => handleChange(e, "role")}
                      size="small"
                    />
                  ) : (
                    doctor.role
                  )}
                </TableCell>

                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.approved}
                      onChange={(e) => handleChange(e, "approved")}
                      size="small"
                    />
                  ) : (
                    doctor.approved
                  )}
                </TableCell>

                <TableCell>
                  {editRowId === doctor.id ? (
                    <TextField
                      value={editFormData.approved}
                      onChange={(e) => handleChange(e, "approved")}
                      size="small"
                    />
                  ) : (
                    <>
                      <Button
                        color="success"
                        variant="outlined"
                        onClick={() => handleApprove(doctor.id)}
                        style={{ marginRight: 8 }}
                        disableElevation
                      >
                        Approve
                      </Button>
                      <Button
                        color="success"
                        variant="contained"
                        onClick={() => handleReject(doctor.id)}
                        disableElevation
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </TableCell>

                <TableCell>
                  {editRowId === doctor.id ? (
                    <Button
                      color="primary"
                      onClick={() => handleSave(doctor.id)}
                      disableElevation
                    >
                      Save
                    </Button>
                  ) : (
                    <>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => handleEditClick(doctor)}
                        disableElevation
                      >
                        Edit
                      </Button>
                      <Button
                        color="secondary"
                        variant="outlined"
                        onClick={() => handleDelete(doctor.id)}
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

export default DoctorList;

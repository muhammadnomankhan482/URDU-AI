
import React from 'react';
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    CssBaseline,
    Toolbar
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DashboardNav from '../../components/schooladmin/DashboardNav';

const createData = (id, name, age, grade) => {
    return { id, name, age, grade };
}

const rows = [
    createData(1, 'John Doe', 15, '10th'),
    createData(2, 'Jane Smith', 16, '11th'),
    createData(3, 'Peter Jones', 14, '9th'),
];

const StudentManagement = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <DashboardNav />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Typography variant="h4" component="h1" gutterBottom>
                    Student Management
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/schooladmin/students/add"
                >
                    Add Student
                </Button>
                <TableContainer component={Paper} sx={{ mt: 4 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Age</TableCell>
                                <TableCell align="right">Grade</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.age}</TableCell>
                                    <TableCell align="right">{row.grade}</TableCell>
                                    <TableCell align="right">
                                        <Button component={RouterLink} to={`/schooladmin/students/edit/${row.id}`}>Edit</Button>
                                        <Button color="secondary">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default StudentManagement;

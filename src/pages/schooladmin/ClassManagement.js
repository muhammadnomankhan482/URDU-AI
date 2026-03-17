
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

const createData = (id, className, teacher, studentCount) => {
    return { id, className, teacher, studentCount };
}

const rows = [
    createData(1, 'Math 101', 'Mr. Smith', 25),
    createData(2, 'Science 101', 'Mrs. Jones', 20),
    createData(3, 'History 101', 'Mr. Williams', 30),
];

const ClassManagement = () => {
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
                    Class Management
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/schooladmin/classes/add"
                >
                    Add Class
                </Button>
                <TableContainer component={Paper} sx={{ mt: 4 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Class Name</TableCell>
                                <TableCell align="right">Teacher</TableCell>
                                <TableCell align="right">Students</TableCell>
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
                                        {row.className}
                                    </TableCell>
                                    <TableCell align="right">{row.teacher}</TableCell>
                                    <TableCell align="right">{row.studentCount}</TableCell>
                                    <TableCell align="right">
                                        <Button component={RouterLink} to={`/schooladmin/classes/edit/${row.id}`}>Edit</Button>
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

export default ClassManagement;

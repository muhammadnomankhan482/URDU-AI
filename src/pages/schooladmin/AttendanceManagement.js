
import React from 'react';
import {
    Box,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TextField
} from '@mui/material';

const createData = (id, studentName, date, status) => {
    return { id, studentName, date, status };
}

const rows = [
    createData(1, 'John Doe', '2023-10-27', 'Present'),
    createData(2, 'Jane Smith', '2023-10-27', 'Absent'),
    createData(3, 'Peter Jones', '2023-10-27', 'Late'),
];

const AttendanceManagement = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Attendance Management
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                    <TextField type="date" label="Filter by Date" InputLabelProps={{ shrink: true }} />
                    <TextField label="Filter by Class" />
                    <TextField label="Filter by Student" />
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Student Name</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.studentName}
                                    </TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
};

export default AttendanceManagement;

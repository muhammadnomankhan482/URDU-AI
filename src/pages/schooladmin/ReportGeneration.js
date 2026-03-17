
import React from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';

const ReportGeneration = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Report Generation
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Report Type</InputLabel>
                        <Select label="Report Type">
                            <MenuItem value="report-card">Report Card</MenuItem>
                            <MenuItem value="class-roster">Class Roster</MenuItem>
                            <MenuItem value="attendance-summary">Attendance Summary</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField fullWidth label="Student Name (optional)" margin="normal" />
                    <TextField fullWidth label="Class Name (optional)" margin="normal" />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Generate Report
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ReportGeneration;

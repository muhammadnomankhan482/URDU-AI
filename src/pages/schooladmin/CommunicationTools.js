
import React from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel
} from '@mui/material';

const CommunicationTools = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Communication Tools
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Send Announcement
                    </Typography>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Recipient</InputLabel>
                        <Select label="Recipient">
                            <MenuItem value="all-students">All Students</MenuItem>
                            <MenuItem value="all-teachers">All Teachers</MenuItem>
                            <MenuItem value="math-101">Math 101</MenuItem>
                            <MenuItem value="science-101">Science 101</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Message"
                        margin="normal"
                        multiline
                        rows={4}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Send
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default CommunicationTools;

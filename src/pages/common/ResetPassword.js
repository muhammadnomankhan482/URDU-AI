
import React from 'react';
import {
    Container,
    Box,
    Avatar,
    Typography,
    TextField,
    Button
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const ResetPassword = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Reset Password
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="new-password"
                        label="New Password"
                        type="password"
                        id="new-password"
                        autoComplete="new-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirm-password"
                        label="Confirm Password"
                        type="password"
                        id="confirm-password"
                        autoComplete="new-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Reset Password
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ResetPassword;


import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Grid,
    Card,
    CardContent,
    Stack
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        School Management
                    </Typography>
                    <Button color="inherit" component={RouterLink} to="/login">Login</Button>
                    <Button color="inherit" component={RouterLink} to="/signup">Sign Up</Button>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero Unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            School Management System
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            An all-in-one platform to streamline your school's administration, communication, and learning processes.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained" component={RouterLink} to="/signup">Get Started</Button>
                            <Button variant="outlined">Learn More</Button>
                        </Stack>
                    </Container>
                </Box>
                {/* End Hero Unit */}

                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* Features Section */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Student Management
                                    </Typography>
                                    <Typography>
                                        Easily manage student records, track attendance, and monitor academic progress.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Teacher Management
                                    </Typography>
                                    <Typography>
                                        Assign classes, manage schedules, and facilitate communication with teachers.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Communication Tools
                                    </Typography>
                                    <Typography>
                                        Enable seamless communication between admins, teachers, students, and parents.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    {/* End Features Section */}
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    School Management
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Making school administration simpler.
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    <RouterLink to="/">
                        Your Website
                    </RouterLink>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
            {/* End footer */}
        </div>
    );
};

export default LandingPage;

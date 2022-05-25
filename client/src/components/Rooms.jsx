import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Code from '@mui/icons-material/Code';
import Links from './Links.jsx'
import { Link } from 'react-router-dom';

const theme = createTheme();
const Rooms = ({ rooms }) => {
    return (<>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative" style={{
                backgroundColor: "#2300a3",
                backgroundImage: `url("https://www.transparenttextures.com/patterns/blizzard.png")`,
            }}>
                <Toolbar>
                    <Code sx={{ mr: 2 }} />
                    <Link to='/' >
                        <Typography variant="h6" color="inherit" fontWeight="bold" fontFamily='Lobster, cursive' noWrap>
                            PeerCode
                        </Typography>
                    </Link>
                    <Typography sx={{ ml: 'auto' }} variant="h6" color="inherit" fontWeight="bold" fontFamily='Lobster, cursive' noWrap style={{ cursor: "pointer" }}

                    >
                        Peer Code Editor
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                    style={{ backgroundColor: '#e0ffff', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}
                >
                    <Typography
                        component="h1"
                        variant="h3"
                        align="center"
                        color="text.primary"
                        fontWeight="bold" fontFamily='Lobster, cursive'
                        gutterBottom
                    >
                        Your Rooms

                    </Typography>

                    <Links rooms={rooms} />
                </Box>

            </main>
            <Box sx={{ bgcolor: 'background.paper', p: 2, height: '4' }} component="footer" style={{
                backgroundColor: "darkblue",
                backgroundImage: `url("https://www.transparenttextures.com/patterns/blizzard.png")`,
                color: "white"
            }}>
                <Typography variant="h6" align="center" gutterBottom>
                    © {new Date().getFullYear()} - Site created by Noob Coders
                </Typography>
            </Box>
        </ThemeProvider>

    </>
    )
}

export default Rooms
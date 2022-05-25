import * as React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Code from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';


const theme = createTheme();

export default function Album({ setRooms }) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [username3, setUsername3] = useState("");
  const [numberRooms, setNumberRooms] = useState(0);

  const createRoom = async () => {
    try {
      const { data } = await axios.post('/api/createroom', { username }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      navigate(`/room/${data._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  const createRoom3 = async () => {
    try {
      const { data } = await axios.post('/api/createrooms', { username3, numberRooms }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      const arr = [];
      for (let i = 0; i < data.data.length; i++) {
        arr.push({
          number: i + 1,
          _id: data.data[i]._id,
        })
      }
      setRooms(arr)
      navigate(`/rooms`);


    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
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
          {/* Hero unit */}
          <Box
            sx={{
              pt: 8,
              pb: 6,
              height: '84vh'
            }}
            style={{ backgroundColor: '#e0ffff', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.primary"
                fontWeight="bold" fontFamily='Lobster, cursive'
                gutterBottom
              >
                PeerCode Editor
              </Typography>
              <Typography variant="h6" align="center" color="text.secondary" paragraph>
                * A cross -platform IDE website which will provide features for live code editing and compilation along with set of tools that streamlines their workflow!
                <br />
                * Students and Teachers can create Single as well as Multiple rooms at once. Peers can code in realtime in their respective rooms.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained" style={{ backgroundColor: "darkblack" }} onClick={handleClickOpen}>Create Room</Button>
                <Button variant="contained" style={{ backgroundColor: "darkblack" }} onClick={handleClickOpen3}>Create Multiple Rooms</Button>
                <Button variant="contained" style={{ backgroundColor: "darkblack" }} onClick={handleClickOpen2}>Join Room</Button>
              </Stack>
            </Container>
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
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle style={{ color: "black" }}>Create Room</DialogTitle>
        <DialogContent >
          <DialogContentText style={{ color: "darkblue" }}>
            To create your own room, please enter the room name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            InputLabelProps={{ style: { color: "blue", borderBottomColor: "#61004a" } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "red" }}>Cancel</Button>
          <Button onClick={createRoom} style={{ color: "blue" }}>Create</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open3} onClose={handleClose3} >
        <DialogTitle style={{ color: "black" }}>Create Multiple Rooms</DialogTitle>
        <DialogContent >
          <DialogContentText style={{ color: "darkblue" }}>
            Enter Room Name for your Class
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUsername3(e.target.value)}
            value={username3}
            InputLabelProps={{ style: { color: "black", borderBottomColor: "#61004a" } }}
          />
        </DialogContent>
        <DialogContent >
          <DialogContentText style={{ color: "black" }}>
            Enter Number of Rooms
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNumberRooms(e.target.value)}
            value={numberRooms}
            InputLabelProps={{ style: { color: "#61004a", borderBottomColor: "#61004a" } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3} style={{ color: "red" }}>Cancel</Button>
          <Button onClick={createRoom3} style={{ color: "blue" }}>Create</Button>
        </DialogActions>
      </Dialog>


      <Dialog open={open2} onClose={handleClose2}>
        <DialogTitle style={{ color: "black" }}>Join Room</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "black" }}>
            Enter Room ID to join a room
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room ID"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            InputLabelProps={{ style: { color: "black" } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} style={{ color: "red" }}>Cancel</Button>
          <Button onClick={() => navigate(`/room/${roomId}`)} style={{ color: "blue" }}>Join</Button>
        </DialogActions>
      </Dialog>

    </>
  );
}
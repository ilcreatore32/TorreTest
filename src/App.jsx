import { Routes, Route, Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

//Routes
import Home from "./pages/Home";
import People from "./pages/People";
import User from "./pages/User";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Torre<span sx={{ color: "#cddc39" }}>.co</span>
            </Typography>
            <Button color="inherit">Sign in</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/People">People</Link>
        <Link to="/Jobs">Jobs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/People" element={<People />} />
        <Route path="/User/:id" element={<User />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
    </div>
  );
}

export default App;

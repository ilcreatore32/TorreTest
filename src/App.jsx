import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

//Routes
import Home from "./pages/Home";
import People from "./pages/People";
import User from "./pages/User";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";

function App() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#27292d",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Torre<Box sx={{ color: "#cddc39" }}>.co</Box>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem component={Link} to="/TorreTest/">
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                  <MenuItem component={Link} to="/TorreTest/People">
                    <Typography textAlign="center">People</Typography>
                  </MenuItem>
                  <MenuItem component={Link} to="/TorreTest/Jobs">
                    <Typography textAlign="center">Jobs</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                Torre<Box sx={{ color: "#cddc39" }}>.co</Box>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  component={Link}
                  to="/TorreTest/"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  to="/TorreTest/People"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  People
                </Button>
                <Button
                  component={Link}
                  to="/TorreTest/Jobs"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Jobs
                </Button>
              </Box>
              <Button
                component={Link}
                to="/TorreTest/"
                sx={{ my: 2, color: "#cddc39", display: "block" }}
              >
                Sing in
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/TorreTest/" element={<Home />} />
        <Route path="/TorreTest/People" element={<People />} />
        <Route path="/TorreTest/User/:id" element={<User />} />
        <Route path="/TorreTest/Jobs" element={<Jobs />} />
        <Route path="/TorreTest/Jobs/:id" element={<Job />} />
      </Routes>
    </div>
  );
}

export default App;

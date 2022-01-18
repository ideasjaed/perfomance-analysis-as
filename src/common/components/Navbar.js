import { AppBar, Toolbar, Container } from "@mui/material";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="" />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

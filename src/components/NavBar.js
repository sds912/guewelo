import { Container, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar = () => {

   
  return <Navbar sticky="top" bg="white" className="mb-3">
            <Container>
                <Navbar.Brand href="/">
                    <img width="32px"  src="./../logo.jpg" alt="Guéwélo"  className="img-fluid"/>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text >
                    <Link to={"/singin"} >Se connecter</Link>
                </Navbar.Text> 
                </Navbar.Collapse>
            </Container>
        </Navbar>

}

export default NavBar;
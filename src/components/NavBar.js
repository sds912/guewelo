import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
   
  return <Navbar sticky="top" bg="white" className="mb-3">
            <Container>
                <Navbar.Brand href="/">Guéwélo</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text  href="/signin">
                    Se connecter
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

}

export default NavBar;
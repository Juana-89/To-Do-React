import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img style={{ width: '80px' }} src={logo} alt="logo todo"/></Navbar.Brand>
        <h3>ToDo List</h3>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            
            <NavDropdown title="Home" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Link</NavDropdown.Item>
              <NavDropdown.Item href="#action2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action4">Action</Nav.Link>
            <Nav.Link href="#action5">Link</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Header };
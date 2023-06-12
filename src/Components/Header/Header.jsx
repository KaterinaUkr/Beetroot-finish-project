import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();

	const navigateHandler = (event, to) => {
		event.preventDefault();
		navigate(to)
	}
	return (
	<Navbar bg="dark" variant="dark">
		<Container>
			{/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
			<Nav className="me-auto">
				<Nav.Link onClick={(event) => navigateHandler(event, '/')}>Головна</Nav.Link>
				<Nav.Link onClick={(event) => navigateHandler(event, '/attractions')}>Що подивитись</Nav.Link>
				<Nav.Link onClick={(event) => navigateHandler(event, '/videos')}>Відео</Nav.Link>
				{/* <Nav.Link href="#link">Де поїсти</Nav.Link>   */}
				<Nav.Link onClick={(event) => navigateHandler(event, '/interesting')}>Цікаві факти</Nav.Link>
			</Nav>
		</Container>
		</Navbar>
	)
}
	
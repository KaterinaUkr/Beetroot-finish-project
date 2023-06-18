import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Header.scss'
// import logo from '../../assets/images/logo.png'

export const Header = () => {
	const navigate = useNavigate();

	const navigateHandler = (event, to) => {
		event.preventDefault();
		navigate(to)
	}
	return (
	<Navbar className='header-menu'>
		<Container >
			{/* <Container>
					<Navbar.Brand href="/" alt="logo">loigo</Navbar.Brand>
			</Container> */}
				<Navbar.Brand href="#home"><img className='header-menu__logo'  src="/images/logo.png" alt="logo" /></Navbar.Brand>
			<Nav className="me-auto header-menu__nav">
				<Nav.Link className="header-menu__nav__item" onClick={(event) => navigateHandler(event, '/')}>Головна</Nav.Link>
				<Nav.Link className="header-menu__nav__item" onClick={(event) => navigateHandler(event, '/attractions')}>Що подивитись</Nav.Link>
				<Nav.Link className="header-menu__nav__item" onClick={(event) => navigateHandler(event, '/videos')}>Відео</Nav.Link>
				{/* <Nav.Link href="#link">Де поїсти</Nav.Link>   */}
				<Nav.Link className="header-menu__nav__item" onClick={(event) => navigateHandler(event, '/interesting')}>Перекладач</Nav.Link>
			</Nav>
		</Container>
	</Navbar>
	)
}
	
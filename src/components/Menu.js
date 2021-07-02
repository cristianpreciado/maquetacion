import { useState } from "react";
import logo from '../logo.svg'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { FaSearch} from 'react-icons/fa'
const Menu = ({itemMenu, itemActivo, principal=true }) => {
    const [active, setActive] = useState(itemActivo);
    return ( 
        <Navbar expand="lg">
            {(principal ? <Navbar.Brand href="#"><Image src={logo} width={60} /></Navbar.Brand>:"")}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                <Nav
                    activeKey={active}
                    variant="pills"
                    onSelect={(selectedKey) => setActive(selectedKey)}
                    className={principal?"justify-content-end":""}
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                >
                    {
                    itemMenu.map((item, i) => (
                        <Nav.Link key={i} eventKey={item.link} href={item.link}>{item.name}</Nav.Link>)
                    )
                    }
                </Nav>
                {(principal ? <Button variant="link"><FaSearch /></Button> :"")} 
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Menu;
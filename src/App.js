import './App.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import { FaThLarge, FaEquals, FaFacebookF, FaTwitter, FaDribbble, FaGooglePlusG, FaYoutube } from 'react-icons/fa'
import Menu from "./components/Menu"
import img1 from './img/1.jpeg'
import img2 from './img/2.jpeg'
import img3 from './img/3.jpeg'
import img4 from './img/4.jpeg'
import img5 from './img/5.jpeg'
import img6 from './img/6.jpeg'
import img7 from './img/7.jpeg'


const itemMenu = [
  { name: "All", link: "#all" },
  { name: "Branding", link: "#branding" },
  { name: "Web", link: "#web" },
  { name: "Photography", link: "#photography" },
  { name: "App", link: "#app" }
];
function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 9, offset: 1 }}>
          <Menu itemMenu={itemMenu} itemActivo={'#all'} />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Card bg="info" text="white" className="text-center p-5">
            <h1>EXPLORE BEYOND HORIZON</h1>
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Magna mundi referrentur quo, no rebum dinissim qui.<br/>
                Per quodsi accusata id, agam labores.
              </p>
              <footer>
                <Button variant="custom">VIEW OUR WORK</Button>
              </footer>
            </blockquote>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Row className="justify-content-md-center mt-3 mb-5">
            <Col xs lg="2">
              <Button variant="link"><FaThLarge /></Button>
              <Button variant="link"><FaEquals /></Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center mb-5">
            <Col xs lg="6">
              <Menu itemMenu={itemMenu} itemActivo={'#all'} principal={false} />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardColumns>
                <Card bg="info" text="white" className="text-center p-5">
                  <h5>CREATIVE LOGO</h5>
                  <hr className="hr-card"/>
                  Branding
                </Card>
                <Card>
                  <Card.Img variant="top" src={img1} />
                </Card>
                <Card>
                  <Card.Img variant="top" src={img4} />
                </Card>
                <Card>
                  <Card.Img variant="top" src={img2} />
                </Card>
                <Card>
                  <Card.Img variant="top" src={img5} />
                </Card>
                <Card>
                  <Card.Img variant="top" src={img3} />
                </Card>
                <Card>
                  <Card.Img variant="top" src={img6} />
                </Card>
                <Card>
                  <Card.Img variant="top" src={img7} />
                </Card>
              </CardColumns>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col xs lg="3">
              <Button variant="primary">Show Me More</Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col xs lg="4">
              <small className="text-muted">
                © 2021 - <span className="text-empresa">Sneak</span> All Rigth Reserved
              </small>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-3">
            <Col xs lg="2">
              <span className="text-muted"><FaFacebookF/></span>{" "}
              <span className="text-muted"><FaTwitter/></span>{" "}
              <span className="text-muted"><FaDribbble/></span>{" "}
              <span className="text-muted"><FaGooglePlusG/></span>{" "}
              <span className="text-muted"><FaYoutube/></span>{" "}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

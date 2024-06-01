import { useEffect, useState } from 'react'
import './App.css'
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import video1 from "../src/assets/videos/1.mp4"
import video2 from "../src/assets/videos/2.mp4"
import video3 from "../src/assets/videos/3.mp4"
import video4 from "../src/assets/videos/4.mp4"
import image1 from "../src/assets/images/1.png"
import image2 from "../src/assets/images/2.png"
import image3 from "../src/assets/images/3.png"
import image4 from "../src/assets/images/4.png"
import hass from "../src/assets/images/hass.svg"
import logo from "../src/assets/images/starlllylogo.png"
import bulb from "../src/assets/images/bulb.svg"
import network from "../src/assets/images/network.svg"
import { Card, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

function App() {

  const { ref: myRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: myRef3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: myRef4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: myRef1, inView: inView1 } = useInView({ triggerOnce: false });
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
      disable: "mobile"
    });
  }, []);

  setInterval(() => {
    AOS.refresh();
  }, 1000);
  setInterval(() => {
    AOS.refreshHard()
  }, 1000);
  return (
    <>
      <Navmenu />

      <Container id='Section1' fluid className='section1'>
        <Section1 inView1={inView1} myRef1={myRef1} />
      </Container>
      <Container fluid className='section2'>
        <Section2 inView2={inView2} myRef2={myRef2} />
      </Container>
      <Container id='Services' fluid className='section3'>
        <Section3 />
      </Container>
      <Container id='Workflow' fluid className='section4'>
        <Section4 inView3={inView3} myRef3={myRef3} />
      </Container>
      <Container id='Products' fluid className='section5'>
        <Section5 />
      </Container>
      <Container id='ContactUs' fluid className='section6'>
        <Section6 inView4={inView4} myRef4={myRef4} />
      </Container>
    </>
  )
}
const Section1 = ({ inView1, myRef1 = true }) => {

  return (
    <Row>
      <Col md="6" className="text-white d-flex p-5" style={{ backgroundColor: "#1AC784" }}>
        <div className='m-auto p-md-5'>
          <p className='section1heading'>
            Reliable technology partner
          </p>
          <p className='section1text my-5'>
            Your partner in business excellence
          </p>
          <a href='https://starllysolutions-my.sharepoint.com/:p:/g/personal/gkadkol_starlly_in/Efa5tFw7yShdtbRRqNCyIfYBeu2RmlFjHhlZvO-y_9U0Ug?e=N4NHGF' className='section1btn rounded-5 text-white text-decoration-underline'>LEARN MORE</a>
        </div>
      </Col>
      <Col md="6"
        className='p-0 m-0 h-100'
      // className={`p-0 m-0 h-100 ${inView1 ? 'animate__animated' : ''}`}
      >
        <Container ref={myRef1} style={{ backgroundColor: "#1AC784" }} data-aos="fade-up">
          <video
            autoPlay
            loop
            // controls
            width="100%"
            className='p-0'
            style={{ backgroundColor: "#1AC784", width: '100%' }}
          >
            <source src={video1} type="video/mp4" />
            <Image src={image1} width={"100%"} />
          </video>
        </Container>
      </Col>
    </Row>
  )
}
const Section2 = ({ myRef2, inView2 }) => {
  return (
    <Row>
      <Col md="12" className='p-5 text-center d-flex flex-column'>
        <p className="section2heading mx-auto mt-md-2">
          Starlly offers software services to SMB’s, Startups, Creators who use tools/utilities/apps/solutions to cater their customers on a day to day basis.
        </p>
        <p className='section2text mx-auto mt-md-2'>
          Specialised in dashboard, workflow, automation, integration, bot development and implementation
        </p>
      </Col>

      <Col md="12" className='p-5 m-0 h-100 d-flex'>
        <div ref={myRef2} className='m-auto' data-aos="fade-up" style={{ width: "500px" }}>
          <video
            autoPlay
            loop
            // controls
            width="100%"
            className='p-0'
            style={{ backgroundColor: "#F2F2F2", width: '100%' }}
          >
            <source src={video2} type="video/mp4" />
            <Image src={image2} width={"100%"} />
          </video>
        </div>
      </Col>
    </Row>
  )
}
const Section3 = () => (
  <Row>
    <Col md="12" className='p-5 section3'>
      <Container>
        <div className='p-md-4'>
          <p className='section3heading'>
            Our Services
          </p>
          <p className='section3text'>
            Market, customers, users are all of different nature, A good prototype gives better answers always. Code, No-Code we have done it and helped customers.
          </p>
        </div>
      </Container>
      <Container>
        <Row>
          <Col className='p-2' md="4">
            <div className='rounded-5 p-0 border-0' data-aos="fade-up" style={{ backgroundColor: "#263237" }}>
              <Card className='section3card rounded-5'>
                <Card.Body className='rounded-4'>
                  <Card.Img className='Cardimg' src={network} />
                  <Card.Header className='section3cardheader'>IDEATE-CREATE-EXECUTE</Card.Header>
                  <Card.Text className='section3cardtext' >
                    Listen to the needs of the customer and help them with right ingredient has been our focus. From ideation to deployment we stay with customer, get it done right.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='p-2' md="4">
            <div className='rounded-5 p-0 border-0' data-aos="fade-up" style={{ backgroundColor: "#263237" }}>
              <Card className='section3card rounded-5'>
                <Card.Body className='rounded-4'>
                  <Card.Img className='Cardimg' src={hass} />
                  <Card.Header className='section3cardheader'>PROTOTYPING</Card.Header>
                  <Card.Text className='section3cardtext' >
                    Market, customers, users are all of different nature, A good prototype gives better answers always. Code, No-Code we have done it and helped customers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='p-2' md="4">
            <div className='rounded-5 p-0 border-0' data-aos="fade-up" style={{ backgroundColor: "#263237" }}>
              <Card className='section3card rounded-5'>
                <Card.Body className='rounded-4'>
                  <Card.Img className='Cardimg' src={bulb} />
                  <Card.Header className='section3cardheader text-start'>SKILL SUPPORT</Card.Header>
                  <Card.Text className='section3cardtext' >
                    Resource augmentation has been our offering to different businesses in last few years, teams have benefited from our resources on demand

                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Col>
  </Row>
)
const Section4 = ({ inView3, myRef3 }) => (
  <Row className='section4'>
    <Col md="6" className="text-white d-flex p-5 section4">
      <Container className='section4boxt bg-white w-100 text-black'>
        <div>
          <p className='section4heading'>We are good at</p>
          <ul className="section4text">
            <li>
              Dashboards
            </li>
            <li>
              Workflows/Sequence implementation
            </li>
            <li>
              Automation
            </li>
            <li>
              Bot development
            </li>
            <li>
              Analytics and ML/AI
            </li>
            <li>
              Resource Augmentation
            </li>
            <li>
              Content guidance
            </li>
            <li>
              Build-Operate-Transfer model
            </li>
            <li>
              No-Code/Low Code implementation
            </li>
            <li>
              Plugins and Templates
            </li>
            <li>
              IOT-Connected-Smart Device
            </li>
          </ul>
        </div>
      </Container>
    </Col>
    <Col md="6" className='p-0 m-0 h-100'>
      <Container ref={myRef3} className='p-0' data-aos="fade-up">
        <video
          autoPlay
          loop
          // controls
          width="100%"
          className='p-0'
          style={{ backgroundColor: "#CDF3E5", width: '100%' }}
        >
          <source src={video3} type="video/mp4" />
          <Image src={image3} width={"100%"} />
        </video>
      </Container>
    </Col>
    <Row className='pb-5'>
      <Col md="10" className='section4'>
        <Container className='section4boxt bg-white w-100 text-black'>
          <div>
            <p className='section4heading'>Categories we serve</p>
            <Row>
              <Col md="4">
                <ul className="section4text">
                  <li>Machine/equipment/Robots</li>
                  <li>DTC & Ecommerce</li>
                </ul>
              </Col>
              <Col md="4">
                <ul className="section4text">
                  <li>Wealth Management</li>
                  <li>Freight/Port/Logistics</li>
                </ul>
              </Col>
              <Col md="4">
                <ul className="section4text">
                  <li>SaaS Hubs</li>
                  <li>Hold Co and SMB</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </Col>
      <Col md="2" className='d-flex mt-4'>
        <a href='https://starllysolutions-my.sharepoint.com/:p:/g/personal/gkadkol_starlly_in/EcO0NXP5dGpWDmPEYmodtG4BnvIW9gxIenTd041ZQt_YjQ?e=SDbApz' className='section4btn py-2 rounded-5 text-white'>CHECK</a>
      </Col>
    </Row>
  </Row>
)

const Section5 = () => (
  <div className='py-5'>
    <Row>
      <p className='section5heading text-center fw-bold fs-1'>
        SaaS Products
      </p>
      <Col md="6" className='p-3'>
        <div className="px-md-5 mt-5 mb-3 pt-5 pb-3" data-aos="fade-up">
          <p className='section5heading2'>Spectra</p>
          <p className='section5text'>Simple plug-n-play solution to monitor your machines remotely in real-time, send alerts to the right team members</p>
          <div className="d-flex mt-3">
            <a href='http://spectra.starllysolutions.com/' className='section5btn rounded-5 py-3 text-white px-4'>LEARN MORE</a>
          </div>
        </div>
      </Col>
      <Col md="6" className='p-3'>
        <div className="px-md-5 mt-5 pt-5" data-aos="fade-up">
          <p className='section5heading2'>Servy</p>
          <p className='section5text'>Servy helps you manage and streamline your service pipeline, helping you track business interactions efficiently</p>
          <div className="d-flex mt-3">
            <a href='http://servy.starlly.in/' className='section5btn rounded-5 py-3 text-white px-4'>LEARN MORE</a>
          </div>
        </div>
      </Col>
    </Row>
  </div>
)

const Section6 = ({ inView4, myRef4 }) => (
  <Row>
    <Col md="6">
      <Container className='p-0' data-aos="fade-up">
        <video
          autoPlay
          loop
          // controls
          width="100%"
          className='p-0'
          style={{ backgroundColor: "#CDF3E5", width: '100%' }}
        >
          <source src={video4} type="video/mp4" />
          <Image src={image4} width={"100%"} />
        </video>
      </Container>
    </Col>
    <Col md="6" className='d-flex'>
      <div className='m-md-auto d-md-flex d-none'>
        <div className='m-md-auto'>
          <p className='section6heading'>Contact Us</p>
          <p className='section6text1'>PHONE</p>
          <p className='section6text2'>+91 9886506163</p>
          <p className='section6text1'>EMAIL</p>
          <p className='section6text2'>gkadkol@starlly.in</p>
          <p className='section6text1'>SOCIAL</p>
          <div>
            <a href="https://www.facebook.com/people/Starlly-Solutions-Pvt-Ltd/100089368485327/?sk=about"><Facebook className='section6text2' /></a>
            <a href='https://x.com/sayhitospectra'><Twitter className='section6text2 mx-4' /></a>
            <a href='https://www.linkedin.com/company/starlly-solutions-pvt.-ltd./'><Linkedin className='section6text2 mx-2' /></a>

          </div>
        </div>
      </div>
      <div className='m-md-auto d-md-none d-flex w-100 justify-content-evenly'>
        <div className=''>
          <p className='section6heading'>Contact Us</p>
          <p className='section6text1'>PHONE</p>
          <p className='section6text2'>+91 9886506163</p>
          <p className='section6text1'>EMAIL</p>
          <p className='section6text2'>gkadkol@starlly.in</p>
        </div>
        <div className='pt-5'>
          <p className='section6text1'>SOCIAL</p>
          <a href="https://www.facebook.com/people/Starlly-Solutions-Pvt-Ltd/100089368485327/?sk=about"><Facebook className='section6text2' /></a>
          <a href='https://x.com/sayhitospectra'><Twitter className='section6text2 mx-4' /></a>
          <a href='https://www.linkedin.com/company/starlly-solutions-pvt.-ltd./'><Linkedin className='section6text2 mx-2' /></a>

        </div>
      </div>
          </Col>
  </Row>
)

const Navmenu = () => (
  // <Navbar className='Navbar'>
  //   <Container>
  //     <Navbar.Brand className='text-white' href="#Section1">
  //       <Image src={logo} width={100} />
  //     </Navbar.Brand>
  //     <Nav className="me-auto mb-md-3" style={{ color: "rgb(0, 191, 244)" }}>
  //       <Nav.Link className='text-white' href="#Services">Services</Nav.Link>
  //       <Nav.Link className='text-white' href="#Workflow">Workflow</Nav.Link>
  //       <Nav.Link className='text-white' href="#Products">Products</Nav.Link>
  //       <Nav.Link className='text-white' href="#ContactUs">Contact Us</Nav.Link>
  //     </Nav>
  //   </Container>
  // </Navbar>
  <Navbar className='Navbar' expand="md">
    <Container fluid>
      <Navbar.Brand className='text-white' href="#Section1">
        <Image src={logo} width={100} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto mb-md-2 text-center" style={{ color: "rgb(0, 191, 244)" }}>
          <Nav.Link className='text-white' href="#Services">Services</Nav.Link>
          <Nav.Link className='text-white' href="#Workflow">Workflow</Nav.Link>
          <Nav.Link className='text-white' href="#Products">Products</Nav.Link>
          <Nav.Link className='text-white' href="#ContactUs">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

)

export default App

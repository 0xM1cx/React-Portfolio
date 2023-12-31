import { Contact } from './components/contact'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Theme } from './components/theme'
import { Image } from 'react-bootstrap'
import { Blog } from './sections/blog'
import { WhoAmI } from './sections/whoami'
import { Projects } from './sections/projects'



function App() {
  let html: any = document.querySelector("html")
  html.setAttribute("data-bs-theme", "dark")

  let body: any = document.querySelector("body")
  body.setAttribute("class", "text-light")

  return (
    <Container className='text-center'>
      <Row className="text-center m-3">
        <Col>
          <Contact />
        </Col>
        <Col>
        <Theme bg={html} bd={body}/>
        </Col>
      </Row>
      <br />
      <br />
      <Row className='text-center'>
        <Col>
          <Image src='/src/assets/profile.jpg' width={260} roundedCircle className='shadow-lg border border-4 border-light' />
        </Col>
      </Row>
      
      <Row className='text-center mt-4'>
        <Col><h1>Shawn Michael Sudaria</h1></Col>
      </Row>

  
      <Row className='text-center mt-3' >
        <Col>
          <h4>IT Student | Game Programmer | IT Security Noob</h4>
          <hr className='border-info text-info border-3 ml-3 mr-3 px-2'/>
        </Col>
      </Row>

      <Row>
        <Col className='p-0 m-0 col-4'>
          <WhoAmI />
        </Col>
        <Col className='p-0 m-0 col-4'>
          <Blog />
        </Col>
        <Col className='p-0 m-0 col-4'>
          <Projects />
        </Col>
      </Row>
    </Container>
  )
}

export default App

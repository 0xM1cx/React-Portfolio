import { Contact } from './components/contact'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Theme } from './components/theme'
import { Image } from 'react-bootstrap'

function Nav(){
  
  return(
    <>
      <h1>Who Am I</h1>
      <h1>Blog</h1>
      <h1>Projects</h1>
    </>
  )
}


function App() {
  let html: any = document.querySelector("html")
  html.setAttribute("data-bs-theme", "dark")

  let body: any = document.querySelector("body")
  body.setAttribute("class", "text-light")

  return (
    <Container>
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

      <Container>
        <Row className='text-center mt-3' >
          <Col><h4>IT Student | Game Programmer | IT Security Noob</h4></Col>
          <br />

        </Row>
        <Row>
          <Col>
            <hr className='text-info border-2' width={500}/>
          </Col>
        </Row>
      </Container>

      {/* <Row className='text-center justify-content-center'>
      </Row> */}
    </Container>
  )
}

export default App

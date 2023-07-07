import { Contact } from './components/contact'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Theme } from './components/theme'

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
  
  return (
    <Container>
      <Row className="text-center m-3">
        <Col>
          <Contact />
        </Col>
        <Col>
        <Theme bg={html}/>
        </Col>
      </Row>
      <br />
      <br />
      <Row className='text-center'>
        <Col><h1>Shawn Michael Sudaria</h1></Col>
      </Row>
    </Container>
  )
}

export default App

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
  
  const imageSize = {height: "auto", width: "10"}

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
        <Col>
          <Image src='/src/assets/profile.jpg' width={260} roundedCircle />
        </Col>
      </Row>
      
      <Row className='text-center mt-4'>
        <Col><h1>Shawn Michael Sudaria</h1></Col>
      </Row>
      
    </Container>
  )
}

export default App

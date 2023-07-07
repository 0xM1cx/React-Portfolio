
import { Greet } from './components/welcome'

function Nav(){
  
  return(
    <>
      <h1>Who Am I</h1>
      <h1>Blog</h1>
      <h1>Projects</h1>
    </>
  )
}

function Projects(){

}

function Blog(){

}

function WhoAmI(){

}


function App() {

  return (
  <>
    <Nav />

    <Greet name="Shawn" age={18} />
  </>
  )
}

export default App

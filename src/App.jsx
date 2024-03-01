
import styles from './App.module.css'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Skills } from './components/skills/Skills'
import { Projects } from './components/projects/Projects'
import { Studys } from './components/studys/Studys'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { About } from './components/about/About'
import { Services } from './components/services/Services'




function App() {
  

  return (
    <div className={styles.App}>
      <Header/>

      <main id='main'>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
      </main>

      <Footer/>

     {/*  
      
      <Skills/>
      
      <Studys/>
      
       */}
    </div>
  )
}

export default App


import styles from './App.module.css'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { Skills } from './components/skills/Skills'
import { Projects } from './components/projects/Projects'
import { Studys } from './components/studys/Studys'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { About } from './components/about/About'


function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
     {/*  <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Studys/>
      <Contact/>
      <Footer/> */}
    </div>
  )
}

export default App

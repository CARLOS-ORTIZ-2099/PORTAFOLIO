
import styles from './App.module.css'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { About } from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Education } from './components/education/Education'




function App() {
  

  return (
    <div className={styles.App}>
      <Header/>

      <main id='main'>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
      </main>

      <Footer/>

 
    </div>
  )
}

export default App

import styles from './contact.module.css'

export const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
        <h2 className={styles.heading}>contact <span>me!</span></h2>

        <form action="#">

          <div className={styles.inputBox}>
              <input type="text" placeholder='full name' />
              <input type="email" placeholder='email address' />
          </div>

          <div className={styles.inputBox}>
              <input type="number" placeholder='mobile number' />
              <input type="email" placeholder='email subject' />
          </div>

          <textarea name="" id="" cols="30" rows="10" placeholder='your message'>

          </textarea>

          <input type="submit"  value='send message' className={styles.btn}/>

        </form>

    </section>
  )
}

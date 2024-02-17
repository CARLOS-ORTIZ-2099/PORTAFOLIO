import styles from './hero.module.css'
console.log(styles);

export const Hero = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Hero</h1>
    </div>
  )
}

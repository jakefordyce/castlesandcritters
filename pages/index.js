import styles from '../styles/Home.module.css'
import { abilities } from '../data/abilities'

export default function Home({abilities}) {


  return (
    <div className={styles.container}>
      
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      abilities: abilities
    }
  }
}

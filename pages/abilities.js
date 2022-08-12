import styles from '../styles/Home.module.css'
import { abilities } from '../data/abilities'

export default function Abilities({abilities}) {

  const abilityDivs = abilities.map((ability, index) => 
    <div key={index} className="ability">
      <p className='name'>{ability.name}</p>
      <p>{ability.text}</p>
    </div>
  );

  return (
    <div className={styles.container}>

      {abilityDivs}
      
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

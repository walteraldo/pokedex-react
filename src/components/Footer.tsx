import { Link } from "react-router-dom"
import PokemonsPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemsPic from '../assets/pokeball.png';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <Link 
        to='pokemons' 
        className={styles.footerLink}
      >
        <img 
          className={styles.footerIcon} 
          src={PokemonsPic} 
          alt="Pokeball"  
        />
        Pokemons
      </Link>

      <Link 
        to='items' 
        className={styles.footerLink}
        onClick={event => event.preventDefault()}
      >
        <img 
          className={styles.footerIcon} 
          src={ItemsPic} 
          alt="Pokeball"  
        />
        Items
      </Link>

      <Link 
        to='map' 
        className={styles.footerLink}
        onClick={event => event.preventDefault()}
      >
        <img 
          className={styles.footerIcon} 
          src={LocationPic} 
          alt="Pokeball"  
        />
        Map
      </Link>

    </footer>
  )
}

export default Footer
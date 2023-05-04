import styles from './Footer.module.css'
import Circle from '../../../images/Circle.png'
import Circle414 from '../../../images/Circle414.svg'

const Footer = (props) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.Circle}>
        <img className={styles.circleImage} src={Circle} align="middle" alt="GraficElements" /></div>
      <div className={styles.text}>Хочешь<br></br> в команду?
        <div className={styles.text_2}>Свяжись с нами и мы обсудим
          все детали <br></br>присоеденения к команде </div></div>
    </div>
  )
  
  }
  
  export default Footer
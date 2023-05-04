
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className="header">
            <div className={styles.title}>Наша команда</div>
            <div className={styles.title__2}>Лучшие шахматисты и шахматистки любители России, гройсмейстеры,
                с ними играть — одно удовольствие!</div>
        </div>

    )

}

export default Header
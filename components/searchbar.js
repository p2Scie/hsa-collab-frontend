import styles from '/styles/Searchbar.module.css';

const Searchbar = () => {
    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" placeholder="Rechercher une section ou un practicien"/>
        </div>
    )
}

export default Searchbar;
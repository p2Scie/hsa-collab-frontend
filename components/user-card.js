import styles from '/styles/UserCard.module.css';

const UserCard = ({ fullname, position, dect}) => {
    return (
        <article className={styles.container}>
            <div className={styles.left}>
                <div className={styles.profil}></div>
                <div className={styles.name}>
                    <p className={styles.fullname}>{ fullname }</p>
                    <p className={styles.position}>{ position }</p>
                </div>
            </div>

            <div className={styles.dect}>
               <p className={styles.number}>82736</p>
            </div>
        </article>
    )
}

export default UserCard;
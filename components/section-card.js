import styles from '/styles/SectionCard.module.css';

const SectionCard = ({ label, nbTotal }) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>{ label }</h2>
            <p className={styles.p}>{ nbTotal } personnes en service</p>
        </div>
    )
}

export default SectionCard;
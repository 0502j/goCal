import styles from '../Data/Title.module.css'

const Title = (props) => {
    return(
        <div className={styles.titlediv}>
            <h1>Olá, <h1 className={styles.calctitle}>{props.name}</h1></h1>
        </div>
    );
}

export default Title;
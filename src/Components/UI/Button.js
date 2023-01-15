import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';

const Button = (props) => {

  const navigate = useNavigate();



    return (
       <div className={styles.buttondiv}>
         <button type={props.type} className={styles.btn}>{props.text}</button>
       </div>

    );
}

export default Button;
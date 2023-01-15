import styles from './FormField.module.css'
import Button from '../UI/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormField = (props) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const changeHandler = (event) => {
        setUsername(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const userinfo = {
            name: username
        }
        props.onEnterName(userinfo);
        navigate('/calculate');
    };

    return(
        <div className={styles.inputdiv}>
            <form onSubmit={submitHandler}>
            <input onChange={changeHandler} className={styles.input} type={props.type} placeholder={props.placeholder} value={username}></input>
            <Button type="submit" text="Avançar"></Button>
            </form>
        </div>
        
    );
}

export default FormField;
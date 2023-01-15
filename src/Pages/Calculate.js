import { Fragment } from 'react';
import Form from '../Components/Form/Form';
import styles from './Calculate.module.css';
import { useState } from 'react';

const Calculate = () => {
      
    const [userInput, setUserInput] = useState({
        enteredGender:'',
        enteredAge:'',
        enteredHeight:'',
        enteredWeight:''
    });

    const userInputHandler = (data) => {
        setUserInput(data);
        console.log("On App.js");
        console.log(data);
      }
      
      
    return(
        <Fragment>
            <div className={styles.calculatemain}>
                <h2>Vamos calcular seu gasto energético basal!</h2>
                <Form onAddUserInfo={userInputHandler}></Form>
            </div>
        </Fragment>
    );
}

export default Calculate;
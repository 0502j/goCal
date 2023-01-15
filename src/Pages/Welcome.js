import styles from './Welcome.module.css';
import FormField from '../Components/FormField/FormField';
import Button from '../Components/UI/Button';
import { useState, useRef } from 'react';

const Welcome = (props) => {

    const enterNameHandler = (enteredData) => {
        const userinfo = {
            ...enteredData,
            id: Math.random().toString()
        };

        console.log("On Welcomejs");
        console.log(userinfo);
    }

    return(
        <div className="container">
            <div className={styles.welcomepage}>
                <h1 className={styles.title}>Para começar, como podemos te chamar?</h1>
                <FormField onEnterName={enterNameHandler} type="text" placeholder="Digite o seu nome"></FormField>
            </div>
        </div>
    );

}

export default Welcome;
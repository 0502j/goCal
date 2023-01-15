import styles from './Form.module.css'
import Button from '../UI/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({onAddUserInfo}) => {

    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        enteredGender:'',
        enteredAge:'',
        enteredHeight:'',
        enteredWeight:''
    });

    const submitHandler = (event) => {

        event.preventDefault();

        const invalidAge = userInput.enteredAge <= 0 || userInput.enteredAge >= 150 || userInput.enteredAge == null;
        const invalidWeight = userInput.enteredWeight < 0 || userInput.enteredWeight < 1000 ||  userInput.enteredWeight == null;
        const invalidHeight =  userInput.enteredHeight < 10 || userInput.enteredHeight > 300 || userInput.enteredHeight == null;
        
        if(invalidAge || invalidWeight || invalidHeight){
            alert("Invalid data. Please try again.");
        }else{
            navigate('/result');
        }

        onAddUserInfo(userInput);

    };

    const ageChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAge: event.target.value
        })
    };

    const heightChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredHeight: event.target.value
        })
    };

    const weightChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredWeight: event.target.value
        })
    };


    const genderChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredGender: event.target.value
        })
    };


    return(
        <form className={styles.formgroup} onSubmit={submitHandler}>
            <select name="sexo" id="sexo" onChange={genderChangeHandler}>
            <option value="Seu sexo" disabled>Seu sexo</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outro">Outro</option>
            </select>
            <input type="number" onChange={ageChangeHandler} placeholder="Sua idade"></input>
            <input type="number" onChange={weightChangeHandler} placeholder="Seu peso (kg)"></input>
            <input type="number" onChange={heightChangeHandler} placeholder="Sua altura (cm)"></input>
            <Button type="submit" text="Calcular"></Button>
        </form>
    );
};

export default Form;
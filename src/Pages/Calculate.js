import { Fragment } from 'react';
import Form from '../Components/Form/Form';
import styles from './Calculate.module.css';

const Calculate = (props) => {

    return(
        <Fragment>
            <div className={styles.calculatemain}>
                <h1>Olá,</h1>
                <h2>Vamos calcular seu gasto energético basal!</h2>
                <Form></Form>
            </div>
        </Fragment>
    );
}

export default Calculate;
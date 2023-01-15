import { Fragment } from 'react';
import Form from '../Components/Form/Form';
import styles from './Calculate.module.css';
import { useState } from 'react';

const Calculate = () => {
    return(
        <Fragment>
            <div className={styles.calculatemain}>
                <h2>Vamos calcular seu gasto energético basal!</h2>
            </div>
        </Fragment>
    );
}

export default Calculate;
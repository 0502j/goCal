import { useState } from "react";
import styles from './Result.module.css';

const Result = (props) => {

    console.log("On Resultjs");
  
    const info = props.userdata;

    console.log(info);

    const result = Object.keys(info).map((key) => info[key]);

    console.log(result);
    
    return(
        <div className={styles.resdiv}>
           <h1>Aqui está o seu <h2 className={styles.restitle}>resultado</h2></h1>
           
        </div>
    );

}

export default Result;
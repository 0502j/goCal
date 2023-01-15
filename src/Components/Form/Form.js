import styles from './Form.module.css'
import Button from '../UI/Button';

const Form = () => {
    return(
        <form className={styles.formgroup}>
            <select name="sexo" id="sexo">
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outro">Outro</option>
            </select>
            <input type="number" placeholder="Sua idade"></input>
            <input type="number" placeholder="Seu peso"></input>
            <input type="number" placeholder="Sua altura"></input>
            <Button type="submit" text="Calcular"></Button>
        </form>
    );
};

export default Form;
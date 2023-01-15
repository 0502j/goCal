import styles from './Home.module.css';
import logo from '../img/gocal-logo.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/welcome");
        }, 2500)
    },[])

    return(
        <div className={styles.homecontainer}>
            <div className={styles.logo}>
            <img src={logo}></img>
            </div>
        </div>
    );
}

export default Home;
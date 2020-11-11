import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.Background}>
                <h1>Welcome you to Casio Shop!</h1>
                <Link to='/products'>
                    <Button size='large' color='secondary' variant='contained'>Shopping Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import classes from './App.module.scss';

export const App = () => {

    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1); 

    return (
        <div>
            <h1 className={classes['title']}>Hello world!</h1>
            <h2>{count}</h2>
            <button className={classes['button--blue']} onClick={increment}>Прибавить</button>
        </div>
    )
};
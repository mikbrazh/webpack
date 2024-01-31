import React, { useState } from 'react';
import './App.scss';

export const App = () => {

    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1); 

    return (
        <div>
            <h1>Hello world!</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Прибавить</button>
        </div>
    )
};
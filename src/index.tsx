// function tsSum(a: number, b: number): number {
//     return a + b;
// }

// console.log(`tsSum >> ${tsSum(5, 11)}`);
// console.log(123 * 5);
// console.log('11111111111111111');

// import React from "react"; // начина с 17 версии react можно не импортировать. Но при этом не обходимо указать "jsx": "react-jsx" в tsconfig
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

const root = document.getElementById('root');

if (!root) {
    throw new Error ('root is not found');
}

const container = createRoot(root);

container.render(<App />);
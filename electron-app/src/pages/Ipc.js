import { useState } from "react";
import './Ipc.css';


export const Ipc = ()=>{
    const [result, setResult] = useState(null);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const num1 = +event.target.num1.value;
        const num2 = +event.target.num2.value;

       
        if (num1 !== '' && num2 !== '') {
          const res = await window.ipcRenderer.invoke('add-numbers', num1, num2);
          setResult(res);
        }
    };

    return (
        <div className="ipc-container">
            <div className="add-numbers-container">
                <h2>Add Two Numbers IPC:</h2>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label>Number 1:</label>
                        <input name="num1" type="number" defaultValue="0"></input>
                    </div>
                    <div>
                        <label>Number 2:</label>
                        <input name="num2" type="number" defaultValue="0"></input>
                    </div>
                    <button className='submit-btn'type="submit">Add Numbers</button>
                </form>
            </div>
           <div className="result-container"> 
                { result !== null && <p>Result: {result}</p>}
           </div>
        </div>
    );
}


// <div className="os-operation-container">

// </div>
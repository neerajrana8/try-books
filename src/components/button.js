import React, {useState} from "react";


const  MyButton = ({count, setCount})=>{
    return( <div>

        <button onClick={ () => setCount(count + 1)}>
            Increment
        </button>
        <button onClick={() =>setCount(count - 1)}>Decrement </button>
    </div>);
}

export default MyButton;
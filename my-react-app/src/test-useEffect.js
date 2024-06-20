import React, {useState, useEffect} from "react";

export default function TestUseEffect(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `(${count}) lần click`
    })

    return(
        <>
        <code>Đếm click</code><br/>
        <h1>Bạn đã click {count} lần</h1>
        <button onClick={() => setCount(count+1)}>
            Click me!
        </button>
        </>
    )
}
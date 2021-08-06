import {useState, useEffect, useCallback, useMemo, useLayoutEffect, useReducer} from "react"

export const AppHooks = () => {
    const [counter, setCounter] = useState(1)
    const [messages, setMessages] = useState([
        //{value: 'Hello', author: "Vasya"},
    ])
    const [value, setValue] = useState("")

    const handleSendMessage = () => {
        setMessages(state => [...state, {value, author: "Vasya"}])
        setValue("")
    }

    useEffect(() =>{
        if (messages[messages.length-1] &&messages[messages.length-1].author !== "System"){
            setTimeout(()=>{
                setMessages(state => [...state, {value:"Message received", author: "System"}])
            },1500)
        }
    }, [messages])

    return (
        <div>
            <h1>AppHooks</h1>
            <h1>counter: {counter}</h1>
            <button onClick={()=>setCounter(()=> counter +1)}>setCounter</button>
            {/*<button onClick={()=>setCounter((state)=> state +1)}>setCounter</button>*/}

            <ul>
                {messages.map((message, id) => (
                    <li key={id}> {message.value} = {message.author}</li>
                ))}
            </ul>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSendMessage}>send</button>
        </div>
    )
}
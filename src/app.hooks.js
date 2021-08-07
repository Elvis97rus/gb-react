import {useState, useEffect, useCallback, useMemo, useLayoutEffect, useReducer, memo} from "react"

export const AppHooks = () => {
    const [messages, setMessages] = useState([])

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
            <h1>AppHooks - Messages_HW</h1>

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
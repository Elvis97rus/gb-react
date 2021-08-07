import {useState, useEffect, useCallback, useMemo, useLayoutEffect, useReducer, memo} from "react"

const useMyHook = () => {
    const [messages, setMessages] = useState([
        //{value: 'Hello', author: "Vasya"},
    ])
    const [value, setValue] = useState("")

    return {messages, setMessages, value, setValue}
}

export const AppHooks = () => {
    const [counter, setCounter] = useState(1)

    const {messages, setMessages,value, setValue} = useMyHook()

    const handleSendMessage = () => {
        setMessages(state => [...state, {value, author: "Vasya"}])
        setValue("")
    }

    const foo = useCallback(() => {}, [])
    const sum = useMemo(() => {
        console.log("memo")
        return 1+1
    }, [])

    useEffect(() =>{
        if (messages[messages.length-1] &&messages[messages.length-1].author !== "System"){
            setTimeout(()=>{
                setMessages(state => [...state, {value:"Message received", author: "System"}])
            },1500)
        }
    }, [messages])

    useLayoutEffect(()=>{

    },[])

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

            <Test foo={foo} />
        </div>
    )
}

const Test = memo(() => {
    console.log("render")
    return <h1>Test__</h1>
})
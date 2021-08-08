import {useState, useEffect, useRef} from "react"
import {Button, TextareaAutosize, Grid, makeStyles, InputBase, ListItem, List} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1,
            background: theme.light.color,
        },
        system: {
            float:"left",
            background: "#b3abab",
        },
        user: {
            background: "#708fe8",
            float:"right",
        },
        sendMsgBtn: {
            width: "100%"
        }
    }
})

export const ChatList = () => {
    const [chats, setChats] = useState([{value: "Current chat - 1", id: 'first-chat-unique-phrase'}])
    return (
        <>
        <div>ChatList</div>
            <List component="nav" aria-label="contacts">
                {chats.map((chat, id) => (
                    <ListItem button>
                        <p key={id}><strong>{chat.value}</strong>: ({chat.id})</p>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export const AppHooks = () => {
    const ref = useRef(null)

    const classes = useStyles()
    const [messages, setMessages] = useState([])

    const [value, setValue] = useState("")

    const handleSendMessage = () => {
        setMessages(state => [...state, {value, author: "User"}])
        setValue("")
    }

    const handleEnterMessage = ({ code }) => {
        if (code === "Enter") {
            handleSendMessage()
        }
    }

    useEffect(() => {
        ref.current.focus()
        if (messages[messages.length - 1] && messages[messages.length - 1].author !== "System") {
            setTimeout(() => {
                setMessages(state => [...state, {value: "Message received", author: "System"}])
            }, 1500)

        }
    }, [messages])


    return (
        <div>
            <h1>AppHooks - Messages_HW</h1>

            <div className={classes.root}>
                <Grid container={true} spacing={3}>
                    <Grid item={true} xs={6}>
                        <ChatList />
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Grid container={true}
                              direction="column"
                              justifyContent="flex-end"
                              alignItems="stretch">
                            {messages.map((message, id) => (
                                <Grid item={true} xs={12}>
                                    {(message.author==="System")?
                                        <span key={id} className={classes.system}>{message.value} = {message.author}</span>:
                                        <span key={id} className={classes.user}>{message.value} = {message.author}</span>}

                                </Grid>
                            ))}
                        </Grid>

                        <InputBase inputRef={ref} fullWidth={true} onKeyPress={handleEnterMessage} value={value} onChange={(e) => setValue(e.target.value)}/>
                        <Button className={classes.sendMsgBtn} variant="contained" color="primary" onClick={handleSendMessage}>send</Button>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}
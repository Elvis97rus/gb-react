import {useState, useEffect, useRef} from "react"
import PropTypes, {objectOf} from "prop-types"
import {Button, TextareaAutosize, Grid, makeStyles, InputBase, ListItem, List} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1,
            background: theme.light.color,
        },
        system: {
            float: "left",
            background: "#b3abab",
        },
        user: {
            background: "#708fe8",
            float: "right",
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
                    <ListItem key={id} button>
                        <p><strong>{chat.value}</strong>: ({chat.id})</p>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export const ChatBody = () => {
    const ref = useRef(null)

    const classes = useStyles()
    const [messages, setMessages] = useState([])

    const [value, setValue] = useState("")

    const handleSendMessage = () => {
        setMessages(state => [...state, {value, author: "User"}])
        setValue("")
    }

    const handleEnterMessage = ({code}) => {
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
            <h1>Chat - Messages_HW</h1>

            <div className={classes.root}>
                <Grid container={true} spacing={3}>
                    <Grid item={true} xs={6}>
                        <ChatList/>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Grid container={true}
                              direction="column"
                              justifyContent="flex-end"
                              alignItems="stretch">
                            {messages.map((message, id) => (
                                <Grid item={true} xs={12} key={id}>
                                    {(message.author === "System") ?
                                        <span
                                              className={classes.system}>{message.value} = {message.author}</span> :
                                        <span
                                              className={classes.user}>{message.value} = {message.author}</span>}

                                </Grid>
                            ))}
                        </Grid>
                        <InputBase inputRef={ref} fullWidth={true} onKeyPress={handleEnterMessage} value={value}
                                   onChange={(e) => setValue(e.target.value)}/>
                        <Button className={classes.sendMsgBtn} variant="contained" color="primary"
                                onClick={handleSendMessage}>send</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

ChatBody.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};
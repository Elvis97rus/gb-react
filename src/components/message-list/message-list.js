import { Input, InputAdornment, makeStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import { useEffect, useRef, useCallback } from "react"
import { Message } from "./message"
import styles from "./message-list.module.css"

const useStyles = makeStyles(() => {
  return {
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: " 15px",
    },
  }
})

export const MessageList = ({
  messages,
  value,
  sendMessage,
  handleChangeValue,
}) => {
  const s = useStyles()

  const ref = useRef()

  const handleSendMessage = () => {
    if (value) {
      sendMessage({ author: "User", message: value })
    }
  }

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      handleSendMessage()
    }
  }

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight)
    }
  }, [messages])

  useEffect(() => {
    handleScrollBottom()
  }, [handleScrollBottom])

  return (
    <>
      <div ref={ref}>
        {messages.map((message, id) => (
          <Message key={id} {...message} />
        ))}
      </div>

      <Input
        className={s.input}
        value={value}
        onChange={handleChangeValue}
        onKeyPress={handlePressInput}
        fullWidth={true}
        placeholder="Введите сообщение..."
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <Send onClick={handleSendMessage} className={styles.icon} />
            )}
          </InputAdornment>
        }
      />
    </>
  )
}

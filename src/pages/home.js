import {Link} from "react-router-dom"

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <hr/>
            <ul>
                <li><Link key={1} to={`/chat`}>Chats</Link></li>
                <li><Link key={2} to={`/profile`}>Profile</Link></li>
            </ul>
        </>
    )
}

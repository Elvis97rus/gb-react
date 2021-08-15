import {Link} from "react-router-dom"

export function Profile() {
    return (
        <>
            <h1>Profile</h1>
            <hr/>
            <ul>
                <li><Link key={1} to={`/`}>Home</Link></li>
                <li><Link key={2} to={`/chat`}>Chats</Link></li>
            </ul>
        </>
    )
}
import React from "react"

interface Props {
    users: Array<{
        nick: string,
        level: number,
        avatar: string,
        description?: string
    }>
}


const List: React.FC<Props> = ({ users }) => {
    return (
        <ul>
            {
                users.map(user => {
                    return (
                        <li key={user.nick}>
                            <img src={user.avatar} />
                            <h3>{user.nick}</h3>
                            <h3>{user.description?.substring(0, 100)}</h3>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List;
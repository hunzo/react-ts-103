import React, { useState } from "react"
import "./App.css"

type Users = {
    username: string
    age: number | null
    admin: boolean
}

const defaultUser: Users = {
    username: "",
    age: null,
    admin: false,
}

const App: React.FC = () => {
    const [user, setUser] = useState(defaultUser)

    const handleChange = <P extends keyof Users>(props: P, value: Users[P]) => {
        setUser({ ...user, [props]: value })
    }

    return (
        <div className="App">
            <input
                value={user.username}
                onChange={(e) => {
                    handleChange("username", e.target.value)
                }}
            />

            <input
                value={user.age || ""}
                onChange={(e) => {
                    handleChange("age", parseInt(e.target.value))
                }}
            />

            <input
                type="checkbox"
                checked={user.admin}
                onChange={() => {
                    handleChange("admin", !user.admin)
                }}
            />

            {JSON.stringify(user)}

            <input
                placeholder="username"
                onChange={(e) => {
                    setUser({ ...user, username: e.target.value })
                }}
            />
        </div>
    )
}

export default App

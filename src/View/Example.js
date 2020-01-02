import React, { useState } from "react"

function Examples() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Você cliaou { count } vezes </h1>

            <button onClick={() => setCount(count - 1)}>Decementar</button>

            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}

export default Examples;
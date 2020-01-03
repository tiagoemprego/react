import React from "react"
// import { Link } from "react-router-dom";

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/todo">Todo</a>
                    </li>
                </ul>
            </div>
        )
    }
}
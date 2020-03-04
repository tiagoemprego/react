import React from "react"
import { Link } from "react-router-dom";

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/todo">Todo</Link>
                    </li>
                    <li>
                        <Link to="/conversor">Conversor</Link>
                    </li>
                    <li>
                        <Link to="/accordion">Accordion</Link>
                    </li>
                    <li>
                        <Link to="/espelho">Espelho</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

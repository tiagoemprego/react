import React from "react"
import { Link } from "react-router-dom";

export class Header extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/home">
                        <button type="button">
                            Click Me!
                        </button>
                    </Link>
                </li>
            </ul>
        )
    }
}
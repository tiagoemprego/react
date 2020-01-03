import React from "react"
import { Api } from "../Components/GetApi"

export class Home extends React.Component {
    render() {
        return (
            <form action="post">
                <Api subreddit="top"/>
            </form>
        )
    }
}
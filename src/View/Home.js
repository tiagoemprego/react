import React from "react"
import { Input } from '../Components/Input'
import { Btn } from "../Components/button"
import { Api } from "../Components/GetApi"

export class Home extends React.Component {
    render() {
        return (
            <form action="post">
                <Input
                    type="text"
                    place="Nome"
                />

                <Btn
                    type="submit"
                    className="btn"
                    value="Enviar"
                />

                <Api subreddit="top"/>
            </form>
        )
    }
}
import React from "react"
import {Input} from '../Components/Input'
import {Button} from "../Components/button"
import {Api} from "../Components/GetApi"

export class Home extends React.Component {
    render() {
        return (
            <form action="post">
                <Input
                    type="text"
                    place="Nome"
                />

                <Button
                    type="submit"
                    className="btn"
                    value="Enviar"
                />

                <Api />
            </form>

        )
    }
}
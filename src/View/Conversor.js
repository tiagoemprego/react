import React from "react"
import {ConversorMoedas} from '../Components/ConversorMoedas'

export class Conversor extends React.Component {

    render(){
        return (
            <div>
                <div className="wrapper-converter">
                    <ConversorMoedas moedaA="USD" moedaB="BRL"/>
                </div>
            </div>
        )
    }
}

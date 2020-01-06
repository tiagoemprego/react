import React from "react"
import {ConversorMoedas} from '../Components/ConversorMoedas'

export class Conversor extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            valueA: 'USD',
            valueB: 'BRL'
        }
    }

    valueMoedaA = val => {
        this.setState({valueA: val.target.value})
    };

    valueMoedaB = val => {
        this.setState({valueB: val.target.value})
    };

    render(){
        return (
            <>
                <select name="usd" id="valueA" onChange={this.valueMoedaA}>
                    <option value="">Selecione uma moeda</option>
                    <option value="USD">USD</option>
                    <option value="BRL">BRL</option>
                    <option value="CAD">CAD</option>
                    <option value="EUR">EUR</option>
                    <option value="FKP">FKP</option>
                </select>
                <select name="usd" id="valueB" onChange={this.valueMoedaB}>
                    <option value="">Selecione uma moeda</option>
                    <option value="BRL">BRL</option>
                    <option value="USD">USD</option>
                    <option value="CAD">CAD</option>
                    <option value="EUR">EUR</option>
                    <option value="FKP">FKP</option>
                </select>
                <div className="wrapper-converter">
                    <ConversorMoedas moedaA={this.state.valueA} moedaB={this.state.valueB}/>
                </div>
            </>
        )
    }
}

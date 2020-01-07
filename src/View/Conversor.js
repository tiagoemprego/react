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

    valueMoedaA = val => this.setState({valueA: val});
    valueMoedaB = val => this.setState({valueB: val});

    render(){
        return (
            <>
                <div className="wrapper-converter">
                    <ConversorMoedas
                        moedaA={this.state.valueA}
                        moedaB={this.state.valueB}
                        handleSelectA={(a) => this.valueMoedaA(a)}
                        handleSelectB={(a) => this.valueMoedaB(a)}/>
                </div>
            </>
        )
    }
}

import React from "react"
import CurrencyFormat from "react-currency-format"
import helpers from "../helpers";
import styled from "styled-components"

const Selects = styled.div`
    display: flex;
`;

export class ConversorMoedas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0
        };

        this.converter = this.converter.bind(this)
    }

    handleConvert = event => {
        this.setState({
            moedaA_valor: event.target.value
        });
    };

    converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=5cac70ccca831011490b`;

        fetch(url)
            .then( res => res.json())
            .then( json => {
                let cotacao = json[de_para];
                let valor = this.state.moedaA_valor.split(',').join('');
                let moedaB_valor = ( parseFloat(valor) * cotacao).toFixed(2);
                if (isNaN(moedaB_valor)) return;
                this.setState({moedaB_valor})
            })
    }

    btnA = el => this.props.handleSelectA(el.target.value);
    btnB = el => this.props.handleSelectB(el.target.value);

    render(){
        return (
            <div className="conversor">
                <Selects>
                    <select name="usd" id="valueA" onChange={this.btnA}>
                        <option value="">Selecione uma moeda</option>
                        <option value="USD">USD</option>
                        <option value="BRL">BRL</option>
                        <option value="CAD">CAD</option>
                        <option value="EUR">EUR</option>
                        <option value="FKP">FKP</option>
                    </select>
                    <select name="usd" id="valueB" onChange={this.btnB}>
                        <option value="">Selecione uma moeda</option>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="CAD">CAD</option>
                        <option value="EUR">EUR</option>
                        <option value="FKP">FKP</option>
                    </select>
                </Selects>
                <h1>{this.props.moedaA} para {this.props.moedaB}</h1>
                <CurrencyFormat type="text" onChange={this.handleConvert}/>
                <button onClick={this.converter}>Converter</button>
                <h2>{helpers.numberToReal(`${this.props.moedaB} `, parseFloat(this.state.moedaB_valor))}</h2>
            </div>
        )
    }
}

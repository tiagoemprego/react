import React from "react"

export class ConversorMoedas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0
        }

        this.converter = this.converter.bind(this)
    }

    handleConvert = event => {
        this.setState({
            moedaA_valor: event.target.value
        });

        console.log(this.state.moedaA_valor)
    }

    converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=5cac70ccca831011490b`;

        fetch(url)
            .then( res=> res.json())
            .then(json => {
                let cotacao = json[de_para]
                let moedaB_valor = ( parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
                this.setState({moedaB_valor})
            })


        console.log(this.state)
    }

    render(){
        return (
            <div className="conversor">
                <h1>{this.props.moedaA} para {this.props.moedaB}</h1>
                <input type="text" onChange={this.handleConvert}/>
                <input type="button" value="converter" onClick={this.converter}/>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}

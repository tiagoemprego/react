import React from "react"
import { connect } from "react-redux"
import client from "../Services/api";

class ContentFull extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            articles: []
        }
    }

    element() {
        const { xablau } = this.props;
        console.log('>>>>>',xablau)
    };

    componentDidMount() {
        client.getEntries()
            .then((response) => {
                let content = response.items;
                this.setState({articles: content});
                // console.log(this.state.articles)
            })
            .catch(err => console.log(err));

        this.element()
    }

    render(){
        return (
            <>
                <div className="row">
                    {this.state.articles.map(
                        (el, key) =>
                            <div className="col-3" key={key} >
                                <h2>{el.fields.title} {key}</h2>
                                <img src={el.fields.imageField.fields.file.url} alt=""/>
                                <p>{el.fields.content}</p>
                            </div>
                    )}
                </div>
                <p>aqui - {this.props.xablau[1]?.title}</p>
            </>
        )
    }
}

const mapStateToProps = state => ({ xablau: state.modelContent});


export default connect(mapStateToProps)(ContentFull);

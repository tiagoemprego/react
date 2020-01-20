import React from "react"
import styled from "styled-components"
import {Container ,Row, Col} from 'react-bootstrap'
import { connect } from "formik"
import useScrollPosition from "../Components/Scroll/Scroll"

const contentful = require("contentful");

const Loop = styled.div`
    
    ul{
        display: flex;
        justify-content: center;
        width: 100%;
        li{
          max-width: 200px;
          padding: 0px 15px;
        }
    }
    
    img{
        max-width: 100%;
    }
    
    .img-radio{
        img{
            max-width: 300px;
            width: 100%;
        
        }
    }
    
    .wrapper-social{
        a{
            width: 45px;
            height: 45px;
            left: 370px;
            top: 575px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
            display: inline-block;
            border-radius: 50%;
            padding: 10px;
        }
    }
    
    .header-content{
        background-image: url("https://i0.wp.com/www.megajuridico.com/wp-content/uploads/2018/04/direitos-em-show-e-eventos.jpg?fit=1280%2C720&ssl=1");
        min-height: 512px;
        background-position: 100% -272px;
        background-repeat: no-repeat;
        position: relative;
        margin-bottom: 70px;
        
        .wrapper-text{
            h2{
                font-weight: normal;
                font-size: 60px;
                line-height: 72px;
                color: #FFFFFF;
            }
            
            p{
                font-style: normal;
                font-weight: normal;
                font-size: 28px;
                line-height: 34px;
                color: #FFFFFF;
                
                span{
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 22px;
                    text-transform: uppercase;
                    color: #000000;
                }

            }
        }
        
        .row{
            position: absolute;
            width: 100%;
            bottom: 0;
        }
    }
`;

class ContentFull extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        const client = contentful.createClient({
            space: "jargsxeq3u04",
            accessToken: "2dYzy4WEFfRWF5N3RbFNdo9i0eZOBV0F2okfH3XedE4"
        });

        client.getEntries()
            .then((response) => {
                let content = response.items;
                this.setState({articles: content});
        console.log(this.state.articles)
            })
            .catch(err => console.log(err));

        window.addEventListener('scroll', this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateDimensions.bind(this));
    }

    updateDimensions() {

    }

    render(){
        return (
            <div>
                <Loop>
                    <Container onScroll={this.updateDimensions()}>
                        <div id="header" className="header-content">
                            <Row>
                                <Col className="img-radio" xs={3}>
                                    <img src="http://images.ctfassets.net/jargsxeq3u04/70oPvlkJjDIbuUYxF5VE9C/4db67e52ddc03eb3e06f41b5c53ae774/1024px-Circle-icons-tools.svg.png" alt=""/>
                                </Col>
                                <Col className="align-self-end pb-3" xs={6}>
                                    <div className="wrapper-text">
                                        <h2>Backstreet Boys</h2>
                                        <p>World Tour 2020</p>
                                    </div>

                                    <div className="wrapper-social">
                                        <a className="mr-3" href="#"><img src="https://image.flaticon.com/icons/png/128/20/20673.png" alt=""/></a>
                                        <a className="mr-3" href="#"><img src="https://image.flaticon.com/icons/png/128/20/20673.png" alt=""/></a>
                                        <a className="mr-3" href="#"><img src="https://image.flaticon.com/icons/png/128/20/20673.png" alt=""/></a>
                                        <a href="#"><img src="https://image.flaticon.com/icons/png/128/20/20673.png" alt=""/></a>
                                    </div>
                                    <div className="wrapper-text">
                                        <p><span>Compartilhar</span></p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div id="example">example</div>
                    </Container>
                    <div className="App">

                    <ul>
                        {this.state.articles.map(
                            (el, key) =>
                                <li key={key} >
                                    <h2>{el.fields.title} {key}</h2>
                                    <img src={el.fields.imageField.fields.file.url} alt=""/>
                                    <p>{el.fields.content}</p>
                                </li>

                        )}
                    </ul>

                     {JSON.stringify(module)}

                    </div>
                </Loop>
            </div>
        )
    }
}

export default connect(state => ({ contentElement: this.state.contentFull}))(ContentFull)

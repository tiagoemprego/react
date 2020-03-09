import React, { useState, useEffect } from "react";
import apiJson from "../Services/apiJson";

function DataLoader() {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch(apiJson.url)
            .then(response => response.json())
            .then(data => setData(data));
    },[]);

    function openModal(id) {
        data.map((item) => {
            if (id === item._id){
                console.log(item)
            }
        })
    }

    return (
        <div className="container">
            <div className="row no-gutters">
                {data.map(el => (
                    <div key={el._id} className="card card-content m-2">
                            <img src={el.picture} alt={el.company}/>
                        <div className="card-body d-flex flex-wrap align-content-between">
                            <div>
                                <h5 className="card-title">{el.name}</h5>
                                <p className="pb-3">{el.greeting}</p>
                            </div>
                            {el.isActive
                                ?(<button onClick={() => openModal(el._id)} className="btn btn-success px-3">+ informações</button>)
                                :(<button disabled className="btn btn-danger px-3">Sem informações</button>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DataLoader
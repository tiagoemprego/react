import React, { useState } from "react";
import {Form} from "react-bootstrap"
import {Field} from "formik"
// import {Div} from "./style"

export default function InputTag(props){
    const [active, inactive] = useState(false);

    function showChange(e) {
        if (e.target.value === '') inactive(!active)
    }

    return (
        <div className="form-group">
            {props.type === 'radio' || props.type === 'checkbox'
                ? (<Form.Label htmlFor={props.id} className="radiobutton">{props.placeradio}</Form.Label>)
                : (<Form.Label htmlFor={props.id} className={active ? 'active' : ''}>{props.place}</Form.Label>)
            }
            <Field
                className={props.errorvalue}
                onFocus={showChange}
                onBlur={showChange}
                type={props.type}
                name={props.name}
                id={props.id}
                autoComplete="off"/>
        </div>
    );
}


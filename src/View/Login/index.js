import React from "react"
import {Div} from "./style"
import * as yup from "yup"
import PropTypes from "prop-types"
import {ErrorMessage, Formik, Form as FormikForm, Field} from "formik"

const validations = yup.object().shape({
    email: yup.string()
        .email('Digite uma email Válido')
        .required('Nenhuma email fornecido'),
    password: yup.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .required('Nenhuma senha fornecida!')
        .matches(/[a-zA-Z]/, 'A senha pode conter apenas letras latinas.'),
});

const Form = () => (
    <Div>
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={values => {
                console.log(values);
            }}
            validationSchema={
                validations
            }>
            <FormikForm>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <Field
                        className="form-control"
                        name="email"
                        type="email"/>
                    <ErrorMessage component="span" name="email"/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Senha</label>
                    <Field
                        className="form-control"
                        name="password"
                        type="password"/>
                    <ErrorMessage component="span" name="password"/>
                </div>
                <button type="submit">Login</button>
            </FormikForm>
        </Formik>
    </Div>
)

Form.prototype = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}

export default Form

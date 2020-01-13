import React from "react"
import {Div} from "./style"
import * as yup from "yup"
import PropTypes from "prop-types"
import {Formik, Form as FormikForm} from "formik"

import InputTag from "../../Components/Input"

const validations = yup.object().shape({
    email: yup.string()
        .email('Digite uma email Válido')
        .required('Nenhuma email fornecido'),
    password: yup.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .required('Nenhuma senha fornecida!')
        .matches(/[a-zA-Z]/, 'A senha pode conter apenas letras latinas.'),
    terms: yup.boolean()
        .required('Requerido!'),
    radiobutton: yup.boolean()
        .required('Requerido!')
});

const Form = () => (
    <Div>
        <Formik
            onSubmit={values => {
                console.log(values);
            }}
            initialValues={{
                email: '',
                password: '',
                terms: false,
                radiobutton: false,
            }}
            validationSchema={
                validations
            }>
            {({ errors, isSubmitting, touched }) => (
                <FormikForm>
                    <InputTag
                        errorvalue={errors.email && touched.email ? 'error' : ''}
                        type="email"
                        place="Email"
                        name="email"
                        id="email"/>

                    <InputTag
                        errorvalue={errors.password && touched.password ? 'error' : ''}
                        type="password"
                        place="Senha"
                        name="password"
                        id="password"/>
                    <InputTag
                        errorValue={errors.terms && touched.terms ? 'error' : ''}
                        type="checkbox"
                        value=""
                        placeradio="texto de exemplo de Checkbox buttom!"
                        name="terms"
                        id="checkbox"/>
                    <InputTag
                        errorValue={errors.radiobutton && touched.radiobutton ? 'error' : ''}
                        type="radio"
                        value=""
                        placeradio="texto de exemplo de radio buttom!"
                        name="radiobutton"
                        id="radio"/>

                    <button disabled={isSubmitting} type="submit">Login</button>
                </FormikForm>
            )}
        </Formik>
    </Div>
)

Form.prototype = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}

export default Form

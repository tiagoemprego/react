import { createStore } from "redux"

const INITIAL_STATE = {
    activeLesson: null,
    activeModule: null,
    modules: [
        {
            id: 1, title: "Iniciando com React",
            lessons: [
                {id: 1, title: "Primeira aula"},
                {id: 2, title: "Segunda aula"}
            ]
        },
        {
            id: 2, title: "Iniciando com Redux",
            lessons: [
                {id: 1, title: "Primeira aula"},
                {id: 2, title: "Segunda aula"}
            ]
        }
    ],
    modelContent: [
        {
            id: 1, title: "ContentFull example 1",
            lessons: [
                {id: 1, title: "exemplo de chamada 1"},
                {id: 2, title: "chamando o exemplo 2"}
            ]
        },
        {
            id: 2, title: "ContentFull example 2",
            lessons: [
                {id: 1, title: "exemplo de chamada 1"},
                {id: 2, title: "chamando o exemplo 2"}
            ]
        },
        {
            id: 2, title: "ContentFull example 2",
            lessons: [
                {id: 1, title: "exemplo de chamada 1"},
                {id: 2, title: "chamando o exemplo 2"}
            ]
        },
    ]
}

function reducer(state = INITIAL_STATE, action) {
    // console.log(action)
    // console.log(state)
    return state
}

const Store = createStore(reducer);

export default  Store

import React from "react";

const Equipe = (props) => {

    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social social={props.social}/>
            <Formacao faculdade={props.faculdade} curso={props.curso}/>
        </div>
    );

}

const Sobre = (props) => {

    return(
        <div>
            <h2>Nome: {props.nome}</h2>
            <h2>Cargo: {props.cargo}</h2>
            <h2>Idade: {props.idade}</h2>
        </div>
    );
}

const Social = (props) => {

    return(
        <div>
            <h2>Social:{props.social}</h2>
        </div>
    );
}

const Formacao = (props) => {

    return (
        <div>
            <h2>Faculdade:{props.faculdade}</h2>
            <h2>Curso:{props.curso}</h2>
        </div>
    );
}

function App(){

     return(
        <div>
            <h1>Currículo Profissional</h1>
            <Equipe nome=" Diego Lima" idade=" 28" cargo=" Programador" curso=" Sistema de Informação" social=" Instagran" faculdade=" Sete de Setembro"/>
        </div>
     );
}

export default App;
import React, { Component } from "react";

// Aplicando o Class Component ::: 
class Equipe extends Component{

    render(){
        return(
            <div>
                <Informacao nome={this.props.nome} idade={this.props.idade} cargo={this.props.cargo}/>
            </div>
        );
    }

}

class Informacao extends Component{

    render(){
        return(
            <div>
                <h2> Profissional: {this.props.nome} </h2>
                <h2> Idade: {this.props.idade} </h2>
                <h2> Cargo: {this.props.cargo} </h2>
            </div>
        );
    }

}

function App(){

     return(
        <div>
            <h1>Dados Pessoais</h1>
            <Equipe nome=" Diego" cargo="Programador" idade="28"/>
        </div>
     );
}

export default App;
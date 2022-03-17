import React, { Component } from "react";


class App extends Component{

    constructor(props){

        super(props);
        this.state = {
            nome: 'CONTADOR DE HIGS',
            contador: 0
        };

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        
        let state = this.state;
        state.contador += 1;
        this.setState(state);
    }

    diminuir(){

        let state = this.state;
        state.contador -= 1;
        this.setState(state);
    }

    render(){
        return(
            <div>
                <h2>
                   {this.state.nome}
                </h2> 
                <h2>
                   <button onClick={this.diminuir}>-</button>
                        {this.state.contador}
                   <button onClick={this.aumentar}>+</button>
                </h2>
            </div>
        );
    }

}


export default App;
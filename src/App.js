import React, { Component } from "react";
import Membro from './components/Membro/membro';


class App extends Component{

    render(){
        return(
            <div>
                <h2>
                   <Membro nome="Vistante" idade="28"/>
                </h2> 
            </div>
        );
    }

}


export default App;
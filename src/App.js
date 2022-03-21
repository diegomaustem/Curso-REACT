import React, { Component } from "react";
import Feed from './components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed:
            [
                {id: 1, username: 'Diego', curtidas: 10, comentarios: 2}, 
                {id: 2, username: 'Marcio', curtidas: 120, comentarios: 15},
                {id: 3, username: 'Jabatão', curtidas: 851, comentarios: 68},
                {id: 4, username: 'Clayton', curtidas: 22, comentarios: 18},
                {id: 5, username: 'Ricardo', curtidas: 1, comentarios: 1}
            ]
        }

    }

    render(){
        return(
            <div>
                {this.state.feed.map((item)=>{
                    return(
                       <Feed 
                            key={item.id} 
                            username={item.username} 
                            curtidas={item.curtidas} 
                            comentarios={item.comentarios}
                       />
                    );
                })

                }
            </div>
        );
    }

}


export default App;
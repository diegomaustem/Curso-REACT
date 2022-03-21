import React, { Component } from "react";
import Feed from './components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event){
        const {nome, email, senha} = this.state;

        if(nome !== '' && email !== '' && senha!== ''){

            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
        } else {
            this.setState({error: 'Ops! Esta faltando algo!'})
        }

        event.preventDefault();
        
    }

    render(){
        return(

            /*<div>
               <h2>Login</h2>
               Email:
               <input type="email" name="email" value={this.state.email} onChange={this.trocarEmail}/><br/>
               Senha: 
               <input type="password" name="password" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/>
                <br/>
               Sexo: 
               <select name="sexo" value={this.state.sexo} onChange={this.trocarSexo}>
                   <option value="masculino">Masculino</option>
                   <option value="feminino">Feminino</option>
               </select>

               <div>
                   <h3>Email: {this.state.email}</h3>
                   <h3>Senha: {this.state.senha}</h3>
                   <h3>Sexo: {this.state.sexo}</h3>
                </div>
            </div>*/

            <div>
                <h1>Novo Usuário</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome} 
                        onChange={ (e) => this.setState({nome: e.target.value})}/> <br/>
                    
                    <label>E-mail:</label>
                    <input type="email" value={this.state.email} 
                        onChange={ (e) => this.setState({email: e.target.value})}/> <br/>

                    <label>Senha:</label>
                    <input type="password" value={this.state.senha} 
                        onChange={ (e) => this.setState({senha: e.target.value})}/> <br/>

                        <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }

}


export default App;
import React, {Component} from 'react';
import '../styles/Login.css';
import axios from 'axios';
import Cookies from 'universal-cookie';


const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component
{
    state=
    {
        form:
        {
            username: '',
            password: ''
        }
    }

    handleChange= async event =>
    {
        this.setState({
            form:
            {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        });
    }

    iniciarSesion = async () =>
    {
        await axios.get(baseUrl, 
            {
                params: {username: this.state.form.username, password: this.state.form.password} 
            }).then(res => 
            {
                return res.data;
            }).then(res => 
                {
                    if(res.length > 0)
                    {
                        let respuesta = res[0];
                        cookies.set("id", respuesta.id, {path:"/"});
                        cookies.set("apellido", respuesta.Apellido, {path:"/"});
                        cookies.set("Nombre", respuesta.Nombre, {path:"/"});
                        cookies.set("Username", respuesta.Username, {path:"/"});
                        alert(`Bienvenido ${this.state.form.username}, ha iniciado sesión`);
                        window.location.href="./main";
                    }else
                    {
                        alert("el usuario o la contraseña no son correctos");
                    }
                }).catch(err => 
                    { 
                        console.log(err) 
                    });
    }



    render() 
    {
        return(
            <div className="containerOne">
                <div className="containerTwo">
                    <div className="form-group">
                        
                        <label>Usuario:</label>
                        <br/>
                        <input type="text" name="username" onChange={this.handleChange} className="form-control" placeholder="Enter your username"/>
                        
                        <br/>

                        <label>Contraseña:</label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="***********"/>
                        <br/>
                        <button type="submit" onClick={ ()=> this.iniciarSesion() } className="btn btn-primary">Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;

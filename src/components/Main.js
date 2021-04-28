import React, {Component} from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Main extends Component
{

    cerrarSesion = ()=>
    {
        cookies.remove("id", {path:"/"});
        cookies.remove("apellido", {path:"/"});
        cookies.remove("Nombre", {path:"/"});
        cookies.remove("Username", {path:"/"});
        window.location.href="./";
    }



    render() 
    {
        console.log(`id:  ${cookies.get("id")}`);
        console.log(`apellido:  ${cookies.get("apellido")}`);
        console.log(`nombre:  ${cookies.get("Nombre")}`);
        console.log(`usuario:  ${cookies.get("Username")}`);

        return (
            <div>
                Menu Principal
                <br/>
                <button onClick={() => this.cerrarSesion()} className="btn btn-warning">Cerrar Sesión</button>
            </div> 
        )
    }
}


export default Main;
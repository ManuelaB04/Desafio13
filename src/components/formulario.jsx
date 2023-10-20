import './formulario.css';
import {useState} from 'react';

export default function Formulario (){
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState(0);
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (nombre === '' || edad === ''){
            setError(true)
            return
        }

        setError(false)

    }

    const bienvenido = (e) => {
        if (!nombre.trim() || isNaN(edad)){
            alert('Ingresar nombre y edad')
        } else if (edad < 18){
            alert(`Hola ${nombre} ,eres muy joven para usar esta aplicación`)
        } else {
            alert(`Bienvenido ${nombre}, gracias por usar nuestra aplicación`)
        }
    }

    return(
        <section>
            <h1><strong>LOGIN</strong></h1>
            <form id="Formulario" className="formulario" onSubmit={handleSubmit}>
             <div class="form-div">
            <label class="form-label" for="name"><strong>Nombre</strong></label>
                <input 
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={ e=>setNombre(e.target.value)}
                />
                </div>
                <div>
                <label class="form-label" for="name"><strong>Edad</strong></label>
                <input 
                    type="number"
                    placeholder="Edad"
                    value={edad}
                    onChange={ e=>setEdad(e.target.value)}
                />
                </div>
                <button type='submit' onClick={bienvenido}>ENVIAR</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}


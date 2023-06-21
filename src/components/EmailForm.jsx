
import { useState } from "react";
import { useForm } from "react-hook-form";


const initialState = {
    enviado: false,
    mensaje: '', 
    enviando: false
}


export const EmailForm = () => {

    const [ alerta, setAlerta ] = useState( initialState );


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        
        setAlerta({
            ...alerta,
            enviando: true
        });

        //Enviando la info a la API
        fetch("https://formsubmit.co/ajax/de1d8c0f7d83925a497fa37bdc81bb45", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            setAlerta({
                enviado: true,
                mensaje: 'Su mensaje se ha enviado con exito. Pronto lo contactaremos',
                enviando: false
            });

            setTimeout(() => {
                setAlerta( initialState )
            }, 5000)
        })
        .catch(error => console.log(error));

        reset();
    }

    return (
        <>
            
        

            <form 
                onSubmit={ handleSubmit(onSubmit) }
                className="php-email-form p-3 p-md-4"
                noValidate
            >
                        <div className="row">

                            {
                                (alerta.enviado) 
                                && (
                                    <div className="col-xl-12">
                                        <div className="alert alert-success" role="alert">
                                            A simple success alert—check it out!
                                        </div>
                                    </div>
                                )
                            }
                            

                            <div className="col-xl-6 form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    id="name" 
                                    placeholder="Nombre y Apellido" 
                                    {...register("name", {
                                        required: true,
                                        maxLength: 50
                                    })} 
                                    disabled={ (alerta.enviando ? true : false) }
                                    required
                                />

                                {/* Mensaje de error */}
                                { errors.name?.type === 'required' && <p style={{ color: "red" }}>El campo Full name es Requerido</p> }
                                { errors.name?.type === 'maxLength' && <p style={{ color: "red" }}>El campo Full name no debe exceder los 50 caracteres</p> }
                            </div>
                            
                            <div className="col-xl-6 form-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="Correo Electronico" 
                                    {...register("email", {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
                                    })}
                                    disabled={ (alerta.enviando ? true : false) }
                                    required
                                />

                                {/* Mensaje de error */}
                                { errors.email?.type === 'required' && <p style={{ color: "red" }}>El campo Email es Requerido</p> }
                                { errors.email?.type === 'pattern' && <p style={{ color: "red" }}>El formato del Email es incorrecto</p> }
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6 form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="subject" 
                                    placeholder="Tema" 
                                    {...register("tema", {
                                        required: true,
                                        maxLength: 50
                                    })} 
                                    disabled={ (alerta.enviando ? true : false) }
                                    required
                                />

                                {/* Mensaje de error */}
                                { errors.tema?.type === 'required' && <p style={{ color: "red" }}>El campo Tema es Requerido</p> }
                                { errors.tema?.type === 'maxLength' && <p style={{ color: "red" }}>El campo Tema no debe exceder los 50 caracteres</p> }
                            </div>

                            <div className="col-xl-6 form-group">
                                <input 
                                    type="tel" 
                                    className="form-control" 
                                    id="phone" 
                                    placeholder="Numero Telefonico" 
                                    {...register("phone", {
                                        required: true,
                                        maxLength: 11
                                    })}
                                    disabled={ (alerta.enviando ? true : false) }
                                    required
                                />

                                {/* Mensaje de error */}
                                { errors.phone?.type === 'required' && <p style={{ color: "red" }}>El campo Numero Telefonico es Requerido</p> }
                                { errors.phone?.type === 'maxLength' && <p style={{ color: "red" }}>El campo Numero Telefonico no debe exceder los 11 caracteres</p> }
                            </div>
                        </div>
                        
                        
                
                        <div className="form-group">
                            <textarea 
                                className="form-control" 
                                rows="5" 
                                placeholder="Mensaje" 
                                {...register("message", {
                                    required: true
                                })}
                                disabled={ (alerta.enviando ? true : false) }
                                required
                            />

                            {/* Mensaje de error */}
                            { errors.message?.type === 'required' && <p style={{ color: "red" }}>El campo Message es Requerido</p> }
                        </div>
                
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                
                        <div className="text-center">
                            <button 
                                disabled={ (alerta.enviando ? true : false) }
                                type="submit"
                            >
                                Enviar Mensaje
                            </button>
                        </div>

                        
            </form>
        </>
    )
}

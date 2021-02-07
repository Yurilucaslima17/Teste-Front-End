import api from '../services/api';
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "../styles/newsletter.scss";

export default function Newsletter(){

    const { register, handleSubmit, watch, errors } = useForm();
    const [response, setResponse] = useState(0);

  
    const onSubmit = data => {
      api.post("/api/v1/newsletter", data).then(response => {
        setResponse(response.status);
      });
    };

    const resetForm = () =>{
        setResponse(0);
    }

    return(
        <>
        {response === 0 &&
        <div className="newsletter">
            <p className="title"><b>Participe de nossas news com promoções e novidades!</b></p>
            <form onSubmit={handleSubmit(onSubmit)} id="newsletter" className="newsletter-form">
                <label>
                <input type="text" name="name" id="name" placeholder="Digite seu nome" ref={register({
                    required: true
                })} className={`${errors.name ? 'error' : ''}`}/>
                {errors.name && <span>Preencha com seu nome completo</span>}
                </label>
                <label>
                <input type="email" name="email" id="email" placeholder="Digite seu email" ref={register({
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
                    }
                    })} className={`${errors.email ? 'error' : ''}`}/>
                {errors.email && <span>Preencha com um e-mail válido</span>}
                </label>
                <button type="submit" className="btn-form">Eu quero!</button>
            </form>
        </div>
        }
        {response === 200 &&
            <div className="newsletter success">
                <p><b>Seu e-mail foi cadastrado com sucesso!</b></p>
                <p>A partir de agora você receberá as novidades e ofertas exclusivas.</p>
                <button className="btn-form" onClick={resetForm}>Cadastrar novo e-mail</button>
            </div>
        }
        </>
    )
}
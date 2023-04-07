import React from 'react'
import {NavLink} from "react-router-dom"
import {Logo} from "./../tastal-items.js"
import './login.css'
//import {styles} from "./styles" -> add "style={styles.login}" into a div


function LoginHeader(){
  return (
    <div class="access-franja-central">
        <div class="logo">
            <NavLink to={'/login'} className="logo-dark"><Logo type="dark" /></NavLink>
            <NavLink to={'/login'} className="logo-light"><Logo type="light" /></NavLink>
        </div>
    </div>
  )
}
function LoginCard(){
    return(
        <div class="box box-login box-shadow">
            <div class="login-title">Inicia sesión en tu cuenta</div>
                    <div class="login-input">
                        <label for="email">Correo electrónico</label>
                        <input type="text" id="email" name="email" required="" />
                        <label for="password">
                            <div class="label-pass">Contraseña</div>
                            <div class="label-forgot">
                                <a href="forgot.php">¿Olvidaste la contraseña?</a>
                            </div>
                        </label>
                        <input type="password" id="password" name="password" required="" />
                        <div class="rememberMe">
                            <input type="checkbox" class="custom-control-input" name="rememberMe" id="rememberMe" />
                            Recuerdame
                        </div>
                    </div>
                    <div class="submit-zone">
                        <NavLink to={'/favourites'}>
                            <button class="btn-acces" type="submit">Continuar</button>
                        </NavLink>
                    </div>
        </div>
    )
}
function LoginFooter(){
    return(
        <div>
            <div class="access-footer">
                <a href="//www.tastal.ml">© Tastal</a>
                <a href="//www.tastal.ml/legal.php">Privacidad y condiciones</a>
            </div>
            <div class="unsplash">Photo provided by <a href="https://unsplash.com/" target="_blank" rel="noreferrer">unsplash</a></div>
        </div>
    )
}

export {LoginHeader,LoginCard,LoginFooter};
import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from './firebase'
import { UserStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {

    const [state,dispatch] = UserStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result)
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://eventila.spyne.ai/logos/spyne-logo/bg-less-title.png"/>
                <h1>Sign in to Slack</h1>
                {/* <p>sahil.rupani.com</p> */}
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login

import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import {
    signInAuthWithEmailAndPassword,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const logGoogleUser = async () => {
        await signInWithGooglePopup()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await signInAuthWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                alert('incorrect email or password')
            }
            if (error.code === 'auth/user-not-found') {
                alert('This user are not exist')
            }
            console.error(error)
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    minLength={6}
                    required
                />
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        type='button'
                        onClick={logGoogleUser}
                    >
                        Google sign in
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm

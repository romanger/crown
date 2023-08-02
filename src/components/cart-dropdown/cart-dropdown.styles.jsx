import styled from 'styled-components'
import {
    BaseButton,
    GoogleSigninButton,
    InvertedButton,
} from '../button/button.styles'

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 250px;
    height: 340px;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    right: 40px;
    border: 1px solid black;
    z-index: 5;
    top: 90px;

    ${BaseButton}, ${GoogleSigninButton}, ${InvertedButton} {
        margin-top: auto;
    }
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

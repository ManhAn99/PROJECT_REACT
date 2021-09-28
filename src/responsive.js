import {css} from 'styled-components'
export const mobile = (props) => {
    return css`
     @media only screen and (max-width : 600px){
         ${props}
     }
    `
}
export const widerMobile = (props) => {
    return css`
     @media only screen and (min-width : 600px){
         ${props}
     }
    `
}
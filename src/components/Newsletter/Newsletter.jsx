import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import {mobile} from '../../responsive'
const Container = styled.div`
 width : 100%;
 height : 80vh;
 display : flex;
 justify-content : center;
 align-items : center;
 background-color : #82b2ee;
 margin-top : 20px;
 ${mobile({height : '65vh'})}

`
const Wrapper = styled.div`
 width : 45%;
 background-color : white;
 padding : 60px 80px;
 border-radius : 10px;
 ${mobile({width : '90%',boxSizing : 'border-box',padding : '40px 40px'})}
`
const Title = styled.h1`
 text-align : center;
 font-size : 55px;
 ${mobile({fontSize : '40px'})}
`
const Desc = styled.p`
 margin : 20px 0;
 ${mobile({fontSize : '16px'})}
`
const InputContainer = styled.div`

 display : flex;
 align-items : center;
 padding-left : 10px;
 border : 1px solid lightgray;
 margin-top : 10px;
 height : 40px;
 ${mobile({width : '100%'})}
`
const Input = styled.input`
 flex :8;
 border : none;
 &:focus{
     outline : none
 }
`
const Button = styled.button`
 flex : 1;
 border : none;
 height : 100%;
 cursor : pointer;
 background-color : #186fdb;
 color : white
`
const Newsletter = () => {
    return (
        <Container>
          <Wrapper>
            <Title>NEWSLETTER</Title>
            <Desc>Now, it's time to come up with a great slogan to tie all the pieces together. And not just a slogan, but a catchy and timeless slogan that people across the world will remember you for.</Desc>
            <InputContainer>
              <Input placeholder = 'Search' />
              <Button><SendIcon /></Button>
            </InputContainer>
          </Wrapper>
        </Container>
    )
}

export default Newsletter
import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from '../../responsive'
const Container = styled.div`
 padding : 20px;
 margin-top : 10px;
 display : flex;
 ${mobile({flexDirection : 'column'})}
`
const Left = styled.div`
 flex : 1
`
const TitleLeft = styled.h3`
 color : #237de8;
 font-size : 30px
`
const Desc = styled.p`
 margin : 15px 0px
`
const SocialContainer = styled.div`
 display : flex
`
const SocialItem= styled.div`
 margin : 0 5px;
 background-color : #${props => props.color};
 height : 40px;
 width : 40px;
 color : white;
 display : flex;
 align-items : center;
 justify-content : center;
 border-radius : 50%;
 cursor : pointer;
 transition : 1.3s;
 &:hover{
     transform : scale(1.5)
 }
`
const Center = styled.div`
 flex : 1;
 padding-left : 20px;
 ${mobile({padding : '0px', margin : '20px 0'})}
`
const TitleCenter = styled.h4`
 font-size : 20px;
 color : #7a7c7e
`
const ListContainer = styled.ul`
 padding : 0px;
 list-style : none;
 display : flex;
 flex-wrap : wrap;
 justify-content : space-between;
 margin-top : 5px
`
const ListItem = styled.li`
 flex : 1 1 50%;
 margin : 5px 0px;
 &:hover{
     color : blue
 }
`
const Right = styled.div`
 flex : 1
`
const TitleRight = styled.h4`
 font-size : 20px;
 color : #237de8
`
const ContactContainer = styled.div`
 margin : 10px 0px
`
const ContactItem = styled.div`
 display : flex;
 align-items : center;
 margin : 15px 0
`
const IconContainer = styled.div`
 margin-right : 10px;
 color : #237de8
`
const Footer = () => {
    return (
        <Container>
            <Left>
              <TitleLeft>TA:KEIK</TitleLeft>
              <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dolorem debitis saepe dolores dolorum ut ipsum molestiae, culpa eligendi omnis voluptatibus illo iste id facilis quo, delectus ullam odio assumenda.</Desc>
              <SocialContainer>
                  <SocialItem color = '3889ed'>
                    <FacebookIcon />
                  </SocialItem>
                  <SocialItem color = 'e63d5f'>
                   <InstagramIcon />
                  </SocialItem>
                  <SocialItem color = '116fdf'>
                 <TwitterIcon />
                  </SocialItem>
                  <SocialItem color = 'eb3026' >
                  <YouTubeIcon />
                  </SocialItem>
              </SocialContainer>
            </Left>

            <Center>
                <TitleCenter>Useful links</TitleCenter>
                <ListContainer>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </ListContainer>
            </Center>
            <Right>
                <TitleRight>Contact</TitleRight>
                <ContactContainer>
                    <ContactItem>
                      <IconContainer> <LocalPhoneIcon /></IconContainer> 1234567890
                    </ContactItem>
                    <ContactItem>
                       <IconContainer><LocationOnIcon /> </IconContainer>24 Trung Hoa District , Hanoi City
                    </ContactItem>
                    <ContactItem>
                      <IconContainer> <EmailIcon /> </IconContainer>TA:KEIK@gmail.com
                    </ContactItem>
                </ContactContainer>
               
            </Right>
        </Container>
    )
}

export default Footer

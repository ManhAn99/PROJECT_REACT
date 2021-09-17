import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { mobile } from '../responsive';
const Container = styled.div`
 display : flex;
 ${mobile({flexDirection : 'column'})}
`
const Left = styled.div`
 flex : 1;
 display : flex;
 flex-direction : column;
 padding : 20px
`
const Logo = styled.h1``
const Desc = styled.p`
 margin : 20px 0
`
const SocialContainer = styled.h1`
  display : flex
`
const SocialIcon = styled.div`
 width : 40px;
 height : 40px;
 border-radius : 50%;
 color : white;
 background-color : #${props => props.color};
 display : flex;
 align-items : center;
 justify-content : center;
 margin-right : 20px;
 cursor : pointer
 
`
const Center = styled.div`
 flex : 1;
 padding : 20px;
 ${mobile({display : 'none'})}
`
const Title = styled.h3`
 margin-bottom : 30px
`
const List = styled.ul`
 margin : 0;
 padding :0;
 list-style :none;
 display : flex;
 flex-wrap : wrap
`
const ListItem = styled.li`
 width : 50%;
 margin-bottom : 10px
`
const Right = styled.div`
 flex : 1;
 padding : 20px;
 ${mobile({backgroundColor : '#fff8f8'})}
`
const ContactItem = styled.div`
 margin-bottom : 20px;
 display : flex;
 align-items : center
`
const Payment = styled.img`
  width : 50%
`

const Footer = () => {
    return (
        <Container>
            <Left>
              <Logo>Commerce</Logo>
              <Desc>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
              </Desc>
              <SocialContainer>
                  <SocialIcon color = '3B5999'>
                     <FacebookIcon />
                  </SocialIcon>
                  <SocialIcon color = 'E4405F'>
                     <InstagramIcon />
                  </SocialIcon>
                  <SocialIcon color = '55ACEE'>
                     <TwitterIcon />
                  </SocialIcon>
                  <SocialIcon color = 'E60023'>
                     <PinterestIcon />
                  </SocialIcon>
                
              </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
              <Title>Contact</Title>
              <ContactItem>
                <RoomIcon style = {{marginRight : '10px'}} />  622 Dixie Path,South Tobinchester 98336
              </ContactItem>
              <ContactItem>
               <PhoneIcon style = {{marginRight : '10px'}} />  +12345676
              </ContactItem>
              <ContactItem>
                <MailOutlineIcon style = {{marginRight : '10px'}} />  contact@gmail.com
              </ContactItem>
              <Payment src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW27wrZof2FieWP10RJo2-nPEuEv_tHL8WaQ&usqp=CAU' />
            </Right>
        </Container>
    )
}

export default Footer

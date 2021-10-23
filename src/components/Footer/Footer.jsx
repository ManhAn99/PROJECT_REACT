import React from 'react'
import styled from 'styled-components'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AppleIcon from '@mui/icons-material/Apple';
import footer2 from '../../assets/footer2.jpg'
//responsive
import {mobile} from '../../responsive'

const Footer = () => {
    return (
        <Container>
            <TopContainer>
                
                <ItemContainer className = 'customer-service'>
                   <Title>CUSTOMER SERVICE</Title>
                   <ul>
                       <li>Help Centre</li>
                       <li>How To Buy</li>
                       <li>How To Sell</li>
                       <li>ShopeePay</li>
                       <li>Shopee Coins</li>
                       <li>Shopee Guarantee</li>
                       <li>Shopee Free Shipping Program</li>
                       <li>Return & Refund</li>
                       <li> Contact Us</li>
                   </ul>
                </ItemContainer>
                <ItemContainer className = 'about-shopee'>
                   <Title>ABOUT SHOPEE</Title>
                   <ul>
                       <li>About Us</li>
                       <li>Shopee Careers</li>
                       <li>Shopee Policies</li>
                       <li>Privacy Policy</li>
                       <li>Seller Centre</li>
                       <li>Shocking Sale</li>
                       <li>Media Contact</li>
                       <li>Shopee Ambassador Programme</li>
                   </ul>
                </ItemContainer>
                <ItemContainer className = 'payment'>
                   <SubItemContainer>
                    <Title>PAYMENT</Title>
                    <Image src = {footer2} alt = 'footer2' />
                   </SubItemContainer>
                </ItemContainer>
                <ItemContainer>
                   <Title>FOLLOW US</Title>
                   <ul>
                       <li> <FacebookRoundedIcon /> <span>Facebook</span></li>
                       <li> <InstagramIcon /> <span>Instagram</span></li>
                       <li><LocalMallIcon /> <span>Shopee Mamak </span></li>
                       <li><LinkedInIcon /> <span>LinkedIn</span></li>
                   </ul>
                </ItemContainer>
                <ItemContainer>
                   <Title>SHOPEE APP DOWNLOAD</Title>
                   <ul>
                       <li><AppleIcon /> <span>App Store</span></li>
                       <li>
                           <img src="https://img.icons8.com/color/48/000000/google-play.png" alt = 'a'/> <span>Google Play</span>
                           </li>
                       <li><img src="https://img.icons8.com/color/48/000000/bitlife-app.png" alt = 'a'/><span>App Gallery</span></li>
                
                   </ul>
                </ItemContainer>
            </TopContainer>
            <BottomContainer>
                <BottomLeft>
                    <h3>© Shopee 2.0 . Manh An Nguyen</h3>
                </BottomLeft>
                <BottomRight>
                      <ul>
                          <li>Country & Region:Singapore</li>
                          <li>Indonesia</li>
                          <li>Taiwan</li>
                          <li>Thailand</li>
                          <li>Malaysia</li>
                          <li>Vietnam</li>
                          <li>Philippines</li>
                          <li>Brazil</li>
                          <li>México</li>
                          <li>Colombia</li>
                          <li>Chile</li>
                      </ul>
                </BottomRight>
            </BottomContainer>
        </Container>
    )
}

export default Footer
const Container = styled.div`
 padding : 40px 80px 0;
 background-color: #f5f5f5;
 ${mobile({padding : "40px 10px  0 10px"})}
`
const TopContainer = styled.div`
 display: flex;
 margin-bottom: 30px;
 flex-wrap: wrap;
 .payment,.customer-service,.about-shopee {
  ${mobile({display : "none"})}

 }
`

const ItemContainer = styled.div`
 flex : 1;
  > ul {
     >  li {
        list-style: none;
        font-size: 13px;
        color : gray;
        font-weight: 500;
        cursor: pointer;
        margin-bottom: 7px;
        display: flex;
        align-items: center;
        > span {
            padding-left: 8px;
        }
        > img {
            width: 20px;
            object-fit: cover;
        }
        transition: 0.8s;
        &:hover {
            color : #ff5722
        }
     }
 }

 ${mobile({display : "flex",flexDirection : 'column',alignItems : 'center'})}

`
const Title = styled.h3`
 font-weight: 700;
 font-size: 15px;
 color :gray;
 margin-bottom: 15px;
`
const SubItemContainer = styled.div``
const Image = styled.img`
 width: 80%;
 object-fit: cover;

`
const BottomContainer = styled.div`
 padding : 30px 0;
 border-top: 1px solid #c9c9c9;
 color : #bebebe;
 font-size: 14px;
 display: flex;
 align-items: center;

`
const BottomLeft = styled.div`
 flex :1
`
const BottomRight = styled.div`
 flex : 1.8;
 > ul {
      display: flex;
      > li {
          list-style: none;
          font-weight: 700;
          font-size: 15px !important;
          padding : 0 5px;
          border-right: 1px solid  #bebebe;
      }
 }
 ${mobile({display : "none"})}
 
`
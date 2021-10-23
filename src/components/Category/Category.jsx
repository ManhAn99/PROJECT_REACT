import React from 'react'
import styled from 'styled-components'
import { CategoryData } from '../../data'
import {useHistory} from 'react-router-dom'
//responsive
import { mobile } from '../../responsive'

const Category = () => {
    const history = useHistory()
    const handleClick = value => {
      history.push(`/category?type=${value}`)
    }
    return (
        <Container>
         <TopContainer>
            <h4>CATEGORIES</h4>
         </TopContainer>
         <BottomContainer>
           {
               CategoryData.map((doc,index) => (
                
                   <ItemContainer key = {index} onClick = {() => handleClick(doc.value)}>     
                       <img src={doc.image} alt= {doc.name} />
                       <span>{doc.name}</span>
                  </ItemContainer>  
               ))
           }
         </BottomContainer>
        </Container>
    )
}

export default Category
const Container = styled.div`
 background-color: white;
`
const TopContainer = styled.div`
 padding : 20px ;
 > h4 {
     color : gray
 }
`
    
const BottomContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
`
const ItemContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items : center;
height : 150px;
border-top: 1px solid #e0dddd;
border-right: 1px solid #e7e4e4;
cursor: pointer;
transition: 0.5s;
padding-top:  15px;
&:hover {
    opacity: 0.7;
}
width: calc(100% / 10);
 > img {
     width: 83px;
     object-fit: cover;
 }
 > span {
     font-size: 14px;
     text-align: center;
     flex : 1;
     
 }
 ${mobile({width : "calc(100% / 4)"})}
`

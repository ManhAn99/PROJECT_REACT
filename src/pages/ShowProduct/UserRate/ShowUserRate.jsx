import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
const ShowUserRate = ({rate}) => {
    const {rating,currentUser,timeStamp,input} = rate
    if(!currentUser) {
        return null
    }
    const {displayName,photoURL} = currentUser
    return (
        <Container>
            {photoURL ? (
                <Avatar sx = {{width : 50, height : 50}} alt= {'name'} src= {photoURL} className = 'avatar' />
             ) : (
                <Avatar sx = {{width : 50, height : 50}} >{displayName[0]}</Avatar>
            )}
            <Description>
                <TopContainer>
                   <div> 
                    <h3>{displayName}</h3>
                    <RateContainer>
                     {[1,2,3,4,5].map(r => (
                        <span
                         key = {r}
                         className = {`${rating >= r ? 'yellow' : 'gray'} `}                      
                        ><StarIcon className = 'star'/></span>
                    ))}
                     </RateContainer>
                    </div>
                     <TimeStamp>{timeStamp.toDate().toUTCString()}</TimeStamp>
                </TopContainer>
                <BottomContainer>
                    <h4>{input}</h4>
                </BottomContainer>
            </Description>
        </Container>
    )
}

export default ShowUserRate
const Container = styled.div`
 padding : 25px;
 display : flex
`
const Description = styled.div`
 padding-left : 15px
`
const TopContainer = styled.div`
 display : flex;
 >div {
    > h3 {
     font-size : 17px
 }

}
`
const TimeStamp = styled.h4`
 color : gray;
 padding-left: 10px;
 
`
const RateContainer = styled.div`
   .yellow {
      color : #ee4d2d
  }
  .gray {
      color : gray
  }
  .star {
      font-size: 15px;
  }

`
const BottomContainer = styled.div`
  > h4 {
      color : gray
  }
`
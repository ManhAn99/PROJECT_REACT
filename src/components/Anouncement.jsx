import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height : 30px;
  background-color : teal;
  color : white;
  display : flex;
  align-items : center;
  justify-content : center
`

const Anouncement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $500
        </Container>
    )
}

export default Anouncement

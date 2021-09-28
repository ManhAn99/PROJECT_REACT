import React,{useEffect,useState} from 'react'
import styled from 'styled-components'

const title = [
    'Super Deal! Free Shipping on Orders Over 500',
    'List Of Catchy Commerce Slogans And Tagline For Your Inspiration.',
    'Tell Them About The Commerce, Mummy.',
    'Probably The Best Commerce In The World.',

]

const Container = styled.div`
 background-color : ${props => props.color};
 height : 30px;
 display : flex;
 align-items : center;
 justify-content : center;
 font-weight : 500;
`

const Announcement = ({color}) => {
    const [index,setIndex] = useState(0)
    useEffect(() => {
        const timeOut = setTimeout(() => (
           setIndex(index >= title.length -1 ? 0 : index + 1)
        ),1000)

        return () => timeOut
    }, [index])
    return (
        <Container color = {color}>
            {title[index]}
        </Container>
    )
}

export default Announcement

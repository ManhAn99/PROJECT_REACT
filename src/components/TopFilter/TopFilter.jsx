import React, {useState} from 'react'
import {useLocation} from "react-router-dom";
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { filterProductStart } from '../../redux/product/product.action';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
const  useQuery = () => {
    return new URLSearchParams(useLocation().search);
}


const TopFilter = ({searchName}) => {
    const [select,setSelect] = useState('newest')
    const location = useLocation()
    const dispatch = useDispatch()
    let query = useQuery();
    const type = query.get('type')
    const handleChange = (e) => {
        setSelect(e.currentTarget.value)
        dispatch(filterProductStart(e.currentTarget.value))
    }
    return (
        <Container>
            {location.pathname === '/category' && <h3><span>Category</span> : {type}</h3> }
            {location.pathname === '/searchProduct' && (
                <h3><ReportGmailerrorredIcon /> <h4>Search result for</h4> <span>{searchName}</span></h3>
            )}
            {location.pathname === '/similarProduct' && <h3>Similar Product</h3>}
                <select onChange = {handleChange} value = {select}>
                    <option value="newest">newest</option>
                    <option value="lowest">lowest</option>
                    <option value="highest">highest</option>
                </select>
        </Container>
    )
}

export default TopFilter

const Container = styled.div`
  display : flex;
 align-items: center;
 margin: 15px 0;
 > h3 {
   font-size : 20px;
   display : flex;
   align-items: center;

   justify-content: space-between;
   > h4 {
       padding : 0 6px;
   }
   > span {
       color : #ff5521
   }
 }
 > select {
     margin-left: 40px;
     padding : 7px;
     width : 100px;
     border : none;
     cursor : pointer;
     font-size : 15px;
     font-weight: 700;
     color : gray;
     &:focus {
         outline : none
     }
     > option {
        font-size : 15px;
       font-weight: 700;
       color : gray;
     }
 }
`

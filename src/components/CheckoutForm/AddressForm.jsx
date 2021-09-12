import React ,{useState,useEffect} from 'react'
import {InputLabel , Select ,MenuItem, Button, Grid ,Typography} from '@material-ui/core'
import {useForm,FormProvider} from 'react-hook-form'
import CustomField from './CustomField'
import {commerce} from '../../lib/commerce'
import {Link} from 'react-router-dom'
const AddressForm = ({checkoutToken,next}) => {
    const methods = useForm()

    const [shippingCountries,setShippingCountries] = useState([])
    const [shippingCountry,setShippingCountry] = useState('')
    const [shippingDivisions,setShippingDivisions] = useState([])
    const [shippingDivision,setShippingDivision] = useState('')
    const [shippingOptions,setShippingOptions] = useState([])
    const [shippingOption,setShippingOption] = useState('')

    //get all countries
    const countries =  Object.entries(shippingCountries).map(([code,name]) => (
        {id : code, label : name}
    ))

    //get all subdivisions
    const subdivisions = Object.entries(shippingDivisions).map(([code,name]) => (
        {id : code,label : name}
    ))

    //get options
    const options = shippingOptions.map(sO => (
        {id : sO.id, label : `${sO.description} - ${sO.price.formatted_with_symbol}`}
    ))


    //get countries
    const fetchCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
       
        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }

    //get subdivsions
    const fetchSubdivisions = async (countryCode) => {
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode)
        setShippingDivision(Object.keys(subdivisions)[0])
        setShippingDivisions(subdivisions)
    }

    //get options
    const fetchOptions = async (checkoutTokenId,country,region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country,region})
        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    //useEffect
    useEffect(() => {
        fetchCountries(checkoutToken.id)
    } ,[checkoutToken])

    //useEffect
    useEffect(() => {
       if(shippingCountry) fetchSubdivisions(shippingCountry)
    }, [shippingCountry])

    //useEffect
    useEffect(() => {
       if(shippingDivision) fetchOptions(checkoutToken.id,shippingCountry,shippingDivision)   
    } ,[checkoutToken,shippingCountry,shippingDivision])
  
    return (
        <>
         <Typography variant = 'h6' gutterBottom>Shipping Address</Typography>
         <FormProvider {...methods}>
             <form onSubmit =  {methods.handleSubmit(data => next({...data,shippingCountry,shippingDivision,shippingOption}))}>
                 <Grid container spacing = {3}>
                     <CustomField name = 'firstName' label = 'First Name' />
                     <CustomField name = 'lastName' label = 'Last Name' />
                     <CustomField name = 'phone' label = 'Phone' />
                     <CustomField name = 'address' label = 'Address' />
                     <CustomField name = 'email' label = 'Email' />
                     <CustomField name = 'city' label = 'City' />

                     <Grid item xs = {12} sm ={6}>
                     <InputLabel>Shipping Country</InputLabel>
                     <Select 
                      value = {shippingCountry}
                      onChange = {(e) =>setShippingCountry(e.target.value)}
                      fullWidth
                      >
                          {countries.map( ({id,label}) => (
                             <MenuItem key = {id} value = {id}>
                               {label}
                             </MenuItem>
                          ))}
                      </Select>
                     </Grid>

                     <Grid item xs = {12} sm ={6}>
                     <InputLabel>Shipping Subdivisions</InputLabel>
                     <Select 
                      value = {shippingDivision}
                      onChange = {(e) =>setShippingDivision(e.target.value)}
                      fullWidth
                      >
                          {subdivisions.map(({id,label}) => (
                             <MenuItem key = {id} value = {id}>
                               {label}
                             </MenuItem>
                          ))}
                      </Select>
                     </Grid>

                     <Grid item xs = {12} sm ={6}>
                     <InputLabel>Shipping Options</InputLabel>
                     <Select 
                      value = {shippingOption}
                      onChange = {(e) => setShippingOption(e.target.value)}
                      fullWidth
                      >
                          {options.map(({id,label}) => (
                             <MenuItem key = {id} value = {id}>
                               {label}
                             </MenuItem>
                          ))}
                      </Select>
                     </Grid>
                 </Grid>

                 <div style = {{display : 'flex', marginTop : '10px' ,justifyContent : "space-between"}}>
                   <Button component = {Link} to = '/cart' variant = 'outlined'>Back to cart</Button>
                   <Button type = 'submit' variant ='contained' color = 'primary'>Next</Button>
                 </div>
             </form>
         </FormProvider>
       </>
    )
}

export default AddressForm

import React,{useState} from 'react'
import ResultCard from './ResultCard'
const Add = () => {
    const [query,setQuery] = useState('')
    const [results,setResults] = useState([])
    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b559129e0f3c64fba4679cc01f5fb7b8&language=en-US&page=1&include_adult=false&query=${query}`)
        .then(res => res.json())
        .then(data => {
            if(data.errors) {
                setResults([])
            }
            else{
                setResults(data.results)
            }
            console.log(results);
        })
    }
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" 
                        placeholder = 'Search for a movie' 
                        value = {query}
                        onChange = {onChange}
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map(movie => (
                              <li key ={movie.id}  >
                                   <ResultCard movie ={movie} />
                              </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Add

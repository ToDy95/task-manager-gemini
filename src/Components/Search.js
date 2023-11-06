import React,{useEffect, useState} from 'react'

const Search = ({data, searchData}) => {

  const [filteredData, setFilteredData] = useState([])

  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    setFilteredData(data.filter(find => find.message.toLowerCase().includes(inputValue.toLowerCase())))
    searchData(filteredData)
  },[inputValue])

  

  return (

    <input type="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
  )
}

export default Search
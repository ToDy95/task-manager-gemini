import React,{useEffect, useState} from 'react'

const Search = ({data, searchData}) => {

  const [filteredData, setFilteredData] = useState([])

  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    setFilteredData(data.filter(find => find.message.toLowerCase().includes(inputValue.toLowerCase())))
    searchData(filteredData)
  },[inputValue])



  return (

  <div style={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end', padding:'20px 40px'}}>  <input type="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{width:400, height:50, borderRadius:8}} placeholder='Search something...'/></div>
  )
}

export default Search

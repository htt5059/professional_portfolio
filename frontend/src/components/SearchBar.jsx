import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: "",
      callBack: props.callBack
    }

  }

  submit = (event) => {
    event.preventDefault();
    document.getElementById("default-search").value = "";
    this.state.callBack(this.state.value);
  }

  render(){
    return(
      <form className="max-w-md mx-auto md:m-0" onSubmit={this.submit}>   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input onChange={(e) => this.setState({value: e.target.value})} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Project Names, Skills..." required />
              <button className="text-white absolute end-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "#4169E1"}}>Search</button>
          </div>
      </form>
    )
  }
}

SearchBar.propTypes = {
  callBack: PropTypes.func.isRequired
}

export default SearchBar;
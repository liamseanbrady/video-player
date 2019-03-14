import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {
  async onSubmit(term) {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${term}&key=${process.env.REACT_APP_YT_API_KEY}`).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })

    console.log(data)
  }

  render() {
    return (
      <SearchBar onSubmit={this.onSubmit} />
    )
  }
}

export default App

import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import { search } from '../apis/youtube'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onTermSubmit = (term) => {
    search(term).then(async (response) => {
      const videoData = await response.json()
      const videos = videoData.items

      this.setState({ videos })
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App

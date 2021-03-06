import React, { Component } from 'react';
import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "l0HlNbeDtLwwkBUiI"
    }
  }

  render () {
    const gifs = [
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
      { id: "l0HlNbeDtLwwkBUiI" },
    ]

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    )
  }
}

export default App;

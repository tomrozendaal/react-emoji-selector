import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactEmojiSelector from '../../src'
import '../../src/react-emoji-selector.css'
import './index.css'

class Demo extends Component {

  constructor() {
    super()
    this.state = {
      selectedEmoji: {emoji: '💯', key: '100'}
    }
  }

  selectEmoji(e) {
    this.setState({selectedEmoji: e})
  }

  render() {
    return <div>
      <h1>react-emoji-selector Demo</h1>
      <div id='container'>
        <h2>{this.state.selectedEmoji.emoji}</h2>
        <ReactEmojiSelector
          visibleAmount={91}
          searchPlaceholder='Search emoji'
          showMoreButtonText='More'
          onSelect={(e) => this.selectEmoji(e)}/>
      </div>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactEmojiSelector from '../../src'
import '../../src/index.css'

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
      <h2>{this.state.selectedEmoji.emoji}</h2>
      <ReactEmojiSelector
        visibleAmount={112}
        searchPlaceholder='Search emoji' 
        onSelect={(e) => this.selectEmoji(e)}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

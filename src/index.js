import React, {Component} from 'react'
import NodeEmoji from 'node-emoji'
import { flatMap } from 'lodash'

const DEFAULT_VISIBLE_AMOUNT = 90

export default class ReactEmojiSelector extends React.Component {

  constructor() {
    super()
    this.state = {
      showMore: false,
      query: ''
    }
  }

  render() {
    const { showMore, query } = this.state
    let emojiList = flatMap(NodeEmoji.search(query), (e) => e.emoji)

    return (
      <div className='react-emoji-selector'>
        <input className='search-emoji' type='text' placeholder='Search emoji' onChange={(e) => this.setState({query: e.target.value.toLowerCase()})} />
        { emojiList.map((emoji, index) => {
          if (showMore === false && index >= DEFAULT_VISIBLE_AMOUNT) return false
          return (
            <div key={index} className='badge-selector' onClick={() => this.props.changeBadge(emoji, BADGE_TYPE_EMOJI)}>
              {emoji}
            </div>
          )
        })}
        { (!showMore && emojiList.length > DEFAULT_VISIBLE_AMOUNT) && <div className='show-more'><button onClick={ () => this.setState({showMore: !showMore}) }>Show more</button></div> }
      </div>
    )
  }
}

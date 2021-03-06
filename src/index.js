import React, {Component} from 'react'
import NodeEmoji from 'node-emoji'
import { flatMap } from 'lodash'

const DEFAULT_VISIBLE_AMOUNT = 78
const DEFAULT_SEARCH_PLACEHOLDER = 'Search'
const DEFAULT_SHOW_MORE_BUTTON_TEXT = 'Show more'

export default class ReactEmojiSelector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visibleAmount: props.visibleAmount || DEFAULT_VISIBLE_AMOUNT,
      searchPlaceholder: props.searchPlaceholder || DEFAULT_SEARCH_PLACEHOLDER,
      showMoreButtonText: props.showMoreButtonText || DEFAULT_SHOW_MORE_BUTTON_TEXT,
      showMore: false,
      query: ''
    }
  }

  onChangeQuery(e) {
    let query = e.target.value.toLowerCase()
    query = query.replace(/\s+/g, '_')
    this.setState({query})
  }

  select(e) {
    const emoji = NodeEmoji.find(e)
    this.props.onSelect(emoji)
  }

  render() {
    const { showMore, query, visibleAmount, searchPlaceholder, showMoreButtonText } = this.state
    let emojiList = flatMap(NodeEmoji.search(query), (e) => e.emoji)

    return (
      <div className='react-emoji-selector'>
        <input className='react-emoji-selector-search' type='text' placeholder={searchPlaceholder} onChange={(e) => this.onChangeQuery(e)} />
        { emojiList.map((emoji, index) => {
          if (showMore === false && index >= visibleAmount) return false
          return (
            <div key={index} className='react-emoji-selector-emoji' onClick={() => this.select(emoji)}>
              {emoji}
            </div>
          )
        })}
        { (!showMore && emojiList.length > visibleAmount) && <div className='react-emoji-selector-show-more'><button onClick={ () => this.setState({showMore: !showMore}) }>{showMoreButtonText}</button></div> }
      </div>
    )
  }
}

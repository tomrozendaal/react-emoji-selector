# react-emoji-selector

A React tool to select Emojis.

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Demo
<a href="http://jsbin.com/konocisajo/edit?html,js,output">Live demo</a><br/><br/>
<img width="40%" alt="emoji selector with search"
  src="https://cl.ly/3B0O2E3w2u1X/react-emoji-selector.gif"/>

## Quick Start

### Installation
Install react-emoji-selector using npm
```bash
npm install --save react-emoji-selector
```

### Usage
Import the component and stylesheet:
```javascript static
import ReactEmojiSelector from 'react-emoji-selector'
import 'react-emoji-selector/lib/react-emoji-selector.css'
```

Use the component:
```javascript static
class MyComponent extends React.Component {

  selectEmoji(emoji) {
    this.setState({emoji}) // {emoji: "🚀", key: "rocket"}
  }

  render() {
    return (
      <ReactEmojiSelector
                visibleAmount={10}
                searchPlaceholder='Search emoji'
                onSelect={(emoji) => this.selectEmoji(emoji)}/>
    )
  }
}
```

### Props
Component props:

| Prop  | Default  | Type  | Description  |
|---|---|---|---|
| visibleAmount  | 78  | int  | Amount of emojis shown before Show-more button is pressed   |
| searchPlaceholder  | Search  | string  | Placeholder text for search input   |
| showMoreButtonText  | Show more  | string  | 'Show more' button text   |
| onSelect  | -  | func  | Callback function called after selecting an emoji   |

[build-badge]: https://img.shields.io/travis/tomrozendaal/react-emoji-selector/master.png?style=flat-square
[build]: https://travis-ci.org/tomrozendaal/react-emoji-selector

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/tomrozendaal/react-emoji-selector/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/tomrozendaal/react-emoji-selector

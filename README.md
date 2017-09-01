# react-emoji-selector

A React tool to select Emojis.

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

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
    this.setState({emoji})
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

[build-badge]: https://img.shields.io/travis/tomrozendaal/react-emoji-selector/master.png?style=flat-square
[build]: https://travis-ci.org/tomrozendaal/react-emoji-selector

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/tomrozendaal/react-emoji-selector/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/tomrozendaal/react-emoji-selector

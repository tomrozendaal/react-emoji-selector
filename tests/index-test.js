import React from 'react'

import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'

import ReactEmojiSelector from 'src/'

describe('ReactEmojiSelector', () => {

  it('to have 10 emojis when specified', () => {
      const wrapper = shallow(<ReactEmojiSelector visibleAmount={10} />);
      expect(wrapper.find('.react-emoji-selector-emoji')).to.have.length(10)
  })

  it('to have 90 emojis when no amount specified', () => {
      const wrapper = shallow(<ReactEmojiSelector />);
      expect(wrapper.find('.react-emoji-selector-emoji')).to.have.length(90)
  })

  it('returns the selected emoji', () => {
      const buttonClick = sinon.spy();
      const wrapper = shallow(
        <ReactEmojiSelector onSelect={buttonClick} visibleAmount={1}/>
      );
      wrapper.find('.react-emoji-selector-emoji').simulate('click');
      expect(buttonClick.calledOnce).to.equal(true);
  })

  it('renders all emojis when show more button is pressed', () => {
      const wrapper = shallow(<ReactEmojiSelector visibleAmount={10}/>)
      expect(wrapper.find('.react-emoji-selector-emoji')).to.have.length(10)
      wrapper.find('.react-emoji-selector-show-more button').simulate('click')
      expect(wrapper.find('.react-emoji-selector-emoji')).length.to.be.above(1300)
  })

  it('renders one emoji when rocket is searched for', () => {
      const wrapper = shallow(<ReactEmojiSelector visibleAmount={10}/>)
      expect(wrapper.find('.react-emoji-selector-emoji')).to.have.length(10)
      wrapper.find('.react-emoji-selector-search').simulate('change', {target: {value: 'rocket'}});
      expect(wrapper.find('.react-emoji-selector-emoji')).to.have.length(1)
  })
})

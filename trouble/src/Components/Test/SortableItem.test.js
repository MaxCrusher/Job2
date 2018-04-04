import React from 'react'
import Enzyme, { render } from 'enzyme'
import { describe, it, expect } from 'jest-enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SortableItem from '../SortableItem'

Enzyme.configure({ adapter: new Adapter() })

describe('<SortableItem/>', () => {
  const wrapper = render(<SortableItem key={1} index={1} value={1} size={4} />)
  it('renders box & check value', () => {
    expect(wrapper.hasClass('box'))
    expect(wrapper.text()).toEqual('2')
  })
})

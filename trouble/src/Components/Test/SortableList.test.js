import React from 'react'
import Enzyme, { render } from 'enzyme'
import { describe, it, expect } from 'jest-enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import SortableList from '../SortableList'

Enzyme.configure({ adapter: new Adapter() })
let mass = [0, 1, 2, 3]
let alert
describe('<SortableList/> ', () => {
  beforeEach(function() {
    alert = sinon.spy();
  });
    const wrapper = render(<SortableList  mas={mass}
                                          axis='xy'
                                          size = {4}
                                          />);
    it('renders div & block3', () => {
      expect(wrapper.hasClass('box'));
      expect(wrapper.hasClass('block3'));
    });
});

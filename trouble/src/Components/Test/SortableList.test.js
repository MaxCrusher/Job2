import React from 'react';
import ReactDOM from 'react-dom';
import SortableList from '../SortableList';
import 'jest-enzyme';
import sinon from 'sinon';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
let mass=[0,1,2,3];
let alert;
describe('<SortableList/> ', ()=>{
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

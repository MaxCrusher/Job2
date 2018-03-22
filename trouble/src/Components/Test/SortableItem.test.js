import React from 'react';
import ReactDOM from 'react-dom';
import SortableItem from '../SortableItem';
import 'jest-enzyme';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<SortableItem/>', ()=>{
  const wrapper = render(<SortableItem key={1} index={1} value={1} size = {4}/>);
  it('renders box & check value', () => {
    expect(wrapper.hasClass('box'));
    expect(wrapper.text()).toEqual("2");
  });
});
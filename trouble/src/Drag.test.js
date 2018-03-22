import React from 'react';
import ReactDOM from 'react-dom';
import Drag from './Drag'
import 'jest-enzyme';
import sinon from 'sinon';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<Drag/>', ()=>{
  const spy = jest.spyOn(Drag.prototype,'Change')
  const wrupper = shallow(<Drag/>);
  it('renders input', () => {
    expect(wrupper.find('input')).toHaveLength(1);
  });

  it('render div',()=>{
    expect(wrupper.name()).toEqual("div");
  });

  it('setState',()=>{
    wrupper.setState({mas:[1,2,3,4],id: 2});
    expect(wrupper.state('id')).toEqual(2);
  });

  it('function Change',()=>{
    wrupper.find('button').simulate('click');
    const spy = jest.spyOn(Drag.prototype,'Change');
    expect(spy).toHaveBeenCalled();
  });

  it('event handling are input and button => update state id',()=>{
    expect(wrupper.find('input').simulate('change',{target:{value:3}}));
    expect(wrupper.find('button').simulate('click'));
    expect(wrupper.state('id')).toEqual(3);
  });

  it('onSortEnd',()=>{
    expect(wrupper.instance().onSortEnd({oldIndex:2, newIndex:1}));
  });

  it('',()=>{
  })
});
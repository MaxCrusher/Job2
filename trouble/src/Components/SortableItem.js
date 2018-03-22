import React from 'react';
import {SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value, size}) =>
  <div className = 'box' style = {{width:(100/size-0.5)+"%", height:(100/size-0.5)+"%"}}>{value+1}</div>
);
export default SortableItem;
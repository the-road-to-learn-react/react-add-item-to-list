import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialList = [
  {
    id: 'a',
    name: 'Robin',
  },
  {
    id: 'b',
    name: 'Dennis',
  },
];

// ** with useState ** //

// const App = () => {
//   const [list, setList] = React.useState(initialList);
//   const [name, setName] = React.useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleAdd() {
//     const newList = list.concat({ name, id: uuidv4() });

//     setList(newList);

//     setName('');
//   }

//   return (
//     <div>
//       <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />

//       <List list={list} />
//     </div>
//   );
// };

// const AddItem = ({ name, onChange, onAdd }) => (
//   <div>
//     <input type="text" value={name} onChange={onChange} />
//     <button type="button" onClick={onAdd}>
//       Add
//     </button>
//   </div>
// );

// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// );

// ** with useReducer ** //

// const listReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return state.concat({ name: action.name, id: action.id });
//     default:
//       throw new Error();
//   }
// };

// const App = () => {
//   const [list, dispatchList] = React.useReducer(
//     listReducer,
//     initialList
//   );
//   const [name, setName] = React.useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleAdd() {
//     dispatchList({ type: 'ADD_ITEM', name, id: uuidv4() });

//     setName('');
//   }

//   return (
//     <div>
//       <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />

//       <List list={list} />
//     </div>
//   );
// };

// const AddItem = ({ name, onChange, onAdd }) => (
//   <div>
//     <input type="text" value={name} onChange={onChange} />
//     <button type="button" onClick={onAdd}>
//       Add
//     </button>
//   </div>
// );

// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// );

// ** with useState and complex object ** //

// const App = () => {
//   const [listData, setListData] = React.useState({
//     list: initialList,
//     isShowList: true,
//   });
//   const [name, setName] = React.useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleAdd() {
//     const newList = listData.list.concat({
//       name,
//       id: uuidv4(),
//     });

//     setListData({ ...listData, list: newList });

//     setName('');
//   }

//   return (
//     <div>
//       <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />

//       {listData.isShowList && <List list={listData.list} />}
//     </div>
//   );
// };

// const AddItem = ({ name, onChange, onAdd }) => (
//   <div>
//     <input type="text" value={name} onChange={onChange} />
//     <button type="button" onClick={onAdd}>
//       Add
//     </button>
//   </div>
// );

// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// );

// ** with useReducer and complex object ** //

const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: state.list.concat({ name: action.name, id: action.id }),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });
  const [name, setName] = React.useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4() });

    setName('');
  }

  return (
    <div>
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
      />

      <List list={listData.list} />
    </div>
  );
};

const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type="text" value={name} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

export default App;

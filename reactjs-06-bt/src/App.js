import logo from './logo.svg';
import './App.css';
import Table from './Table';
import arrUsers from './data.json';
import Exercise from './Exercise';
import data from './data';
import { useState } from 'react';


function App() { 
//   var options =[ 'value1' ,
// 'value2',
// 'value3' ];
// var data = options.filter((val) => val.includes('value4'));

// console.log(data); 


// var items = [{id: 1, text: 'test words'}, {id: 2, text: 'another test'}];
// var data = items.filter(item => item.text === 'test words')
// console.log(data);


// var array = ["a", "b", "c"];
// array.includes("")
// console.log(array)
  const [listData,setData] = useState(data)
  console.log(listData)
  return (
    <div className="App">
      {/* <Table listData={arrUsers} />
      {
      } */}
      <Exercise listData={listData}/>{

      }

    </div>
  );

}

export default App;

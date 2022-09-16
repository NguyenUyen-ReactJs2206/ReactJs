import logo from './logo.svg';
import './App.css';
import Table from './Table';
import arrUsers from './data.json';
import { useState } from "react";
import

function App() {
  //search by name
  const [listUser, setListUser] = useState(arrUsers);
  const onSearch = (value) => {
    console.log(value)
  const result = [...arrUsers].filter(
    item => item.first_name.toLowerCase() == value
  )
  console.log(result)
  setListUser(preState => preState = result);
  }


  //sort by Name and Salary
//  const [sort,setSort]=useState(arrUsers);
//  const sortBy = (type) =>{
//   const sort = [...arrUsers].sort((a, b) => b[sortProperty] - a[sortProperty]);
//   setData(sort);
//  }



  // const movies = [
  //   {
  //     id: 2,
  //     name: 'Tere Nam',
  //     country: 3,
  //     collection: 101,
  //     releasedOn: 2004,
  //   },
  //   {
  //     id: 3,
  //     name: 'Bahubali',
  //     country: 4,
  //     collection: 500,
  //     releasedOn: 1987,
  //   },
  // ];
 
  //   const [data, setData] = useState([]);
  //   const [sortType, setSortType] = useState('albums');
  //   useEffect(() => {
  //     const sortArray = type => {
  //       const types = {
  //         country: 'country',
  //         collection: 'collection',
  //         releasedOn: 'releasedOn',
  //       };
  //       const sortProperty = types[type];
  //       const sorted = [...movies].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //       setData(sorted);
  //     };
  //     sortArray(sortType);
  //   }, [sortType]); 

  //   return (
  //     <div className="App">
  //       <select onChange={(e) => setSortType(e.target.value)}> 
  //         <option value="country">Country</option>
  //         <option value="collection">Collection</option>
  //         <option value="releasedOn">Release Date</option>
  //       </select>
  //       {data.map(movie => (
  //         <div key={movie.id} style={{ margin: '30px' }}>
  //           <div>{`Movie: ${movie.name}`}</div>
  //           <div>{`Country: ${movie.country}`}</div>
  //           <div>{`Collection: ${movie.collection}`}</div>
  //           <div>{`Year of Release: ${movie.releasedOn}`}</div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  



  return (
    
    <div className="App">
      <Table listData={listUser} onSearch={onSearch} />
      {
      }
    </div>
  );

}























































export default App;

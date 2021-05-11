import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Table from './components/Table';
import Pagination from './components/Pagination';
function App() {
  const [will,setWill]=useState([
    {
      id:1,
      name:'MadBoy',
      position:'Backend'
    },
    {
      id:2,
      name:'JumpMan',
      position:'CyberSecurity'
    },
    {
      id:3,
      name:'Hustler',
      position:'Fronted'
    },
    {
      id:4,
      name:'Eager',
      position:'FullStack'
    }
  ]);
  const [rowsPerPage]=useState(2);
  const [currentPage,setCurrentPage]=useState(0);
  let start=rowsPerPage*currentPage;
  let end=start+rowsPerPage;
  const paginatedItems=will.slice(start,end);

  function onDelete(id) {
  const newArray=will.filter((w)=>{
    return w.id!==id;
  })
  setWill(newArray);
  }
  function onSave(name,position){
    let id=Math.ceil(Math.random()*100)+1;
    setWill([...will,{id,name,position}]);
  }
  const paginate=(page)=>{setCurrentPage(page)}
  return (
    <div className="App">
    <Header  />
    <InputForm saveWill={onSave}/>
    <Table will={paginatedItems} delTask={onDelete}/>
    <Pagination totalWill={will.length} rowsPerPage={rowsPerPage} paginate={paginate}/>
    </div>
  );
}

export default App;

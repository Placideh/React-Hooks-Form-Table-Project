import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import InputForm from './components/InputForm';
import Table from './components/Table';
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
    }
  ]);
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
  return (
    <div className="App">
    <Header  />
    <InputForm saveWill={onSave}/>
    <Tasks will={will} delTask={onDelete}/>
    <Table will={will}/>
    </div>
  );
}

export default App;

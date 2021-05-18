import {useState} from 'react';

import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Update from './components/Update';
import Posts from './components/Posts';
import Routing from './components/Routing';
import SideMenu from './components/SideMenu';
import HeaderBar from './components/HeaderBar';
import { makeStyles,CssBaseline,createMuiTheme,ThemeProvider} from '@material-ui/core';
import Employees from './pages/Employees/Employees';

const theme=createMuiTheme({
  palette:{
    primary:{

    main:'#333996',
    light:'#3c44b126'
            },
  secondary:{
    main:'#f83245',
    light:'#f8324526'
  },
  background:{
    default:"#f4f5fd"
  }
  },
  shape:{
    borderRadius:'12px'
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props :{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

export default function App() {
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
  const [update,setUpdate]=useState('');
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
  //something it is not well ordered
  //about the assignment so I will be having to look on it back
  function updateWill(w){
    const newArray=will.filter((wil)=>{
      return wil.id!==w.id;
    })
    newArray.push(w);
    const newSorted=newArray.sort((a,b)=>(a.id-b.id));
    setWill(newSorted);
  }
  const paginate=(page)=>setCurrentPage(page);

  function onUpdate(w){
    setUpdate(<Update ids={w.id} names={w.name} positions={w.position} updateWill={updateWill}/>);
  }

  const classes=useStyles();
  return (
    <ThemeProvider theme={theme}>
    <SideMenu/>
      <div className={classes.appMain}>
        <HeaderBar/>
        <Routing/>
        <Header  />
        <InputForm saveWill={onSave}/>
        <Table will={paginatedItems} delTask={onDelete} onUpdate={onUpdate} getData={onUpdate}/>
        <Pagination totalWill={will.length} rowsPerPage={rowsPerPage} paginate={paginate}/>
        <>{update}</>
        <Posts/>
        <Employees />
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}
const useStyles=makeStyles({
  appMain:{
    paddingLeft:'250px',
    width:'100%'
  }
})

import {useState} from 'react';
export default function Update({updateWill,ids,names,positions}){
  const [id ,setId]=useState('');
  const [name,setName]=useState('');
  const [position,setPosition]=useState('');


  return (
    <form onSubmit={(e)=>{e.preventDefault();updateWill({id,name,position})}}>
    <label>ID</label>
    <input type="text"  placeholder={ids} onChange={e=>setId(e.target.value)}/>
    <br/>
      <label>Name</label>
      <input type="text" placeholder={names} onChange={e=>setName(e.target.value)}/>
      <br/>
      <label>Position</label>
      <input type="text" placeholder={positions} onChange={e=>setPosition(e.target.value)}/>
      <br/>
      <input type="submit" value="Save"/>
    </form>
  );
}

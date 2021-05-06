import {useState} from 'react';
export default function InputForm({saveWill}){
  const [name,setName]=useState('');
  const [position,setPosition]=useState('');
  return (
    <form onSubmit={(e)=>{e.preventDefault();saveWill(name,position)}}>
      <label>Name</label>
      <input type="text" onChange={e=>setName(e.target.value)}placeholder="name"/>
      <br/>
      <label>Position</label>
      <input type="text" onChange={e=>setPosition(e.target.value)} placeholder="position..."/>
      <br/>
      <input type="submit" value="submit"/>
    </form>
  );
}

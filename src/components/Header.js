import {useState} from 'react';
function Header(){
  const[hello,setHello]=useState('');
  return (
    <div>
    <h3>Home</h3>

    <p><strong>All In One App</strong></p>
    <div>{hello}</div>
    <button  onClick ={()=>setHello(helloz)}>Click them Boy</button>
    </div>
  )
}
export default Header;
function helloz(){
  return (
    <p>Hello World Placideh Here Again and
    He is working on the Frontend side so that
    He can atleast reach on His Dreams that
    keeps Him not sleeping Until He get there</p>
  );
}

export default function Tablerow({will,delTask}){
  return (
    <tr>
      <td>{will.id}</td>
      <td>{will.name}</td>
      <td>{will.position}</td>
      <button  style={{background:'blue',color:'white',marginRight:'10px'}}>Update</button>
      <button onClick={()=>delTask(will.id)} style={{background:'red',color:'white'}}>Delete</button>
    </tr>
  );
}

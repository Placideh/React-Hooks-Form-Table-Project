export default function Task({will,delTask}){

  return (
    <p>{will.name} <button onClick={()=>delTask(will.id)}>X</button></p>
  );
}

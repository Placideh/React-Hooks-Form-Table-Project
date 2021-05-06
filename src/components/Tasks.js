import Task from './Task'
function Tasks({will,delTask}){
  return (
    <>{will.map((w)=>(
       <Task key={w.id} will={w} delTask={delTask}/>
    ))} </>
  );
}
export default Tasks;

import TableTitle from './TableTitle';
import Tablerow from './Tablerow';
export default function Table({will,delTask}){
  return (
    <table>
      <thead>
      <TableTitle/>
      </thead>
      <tbody>
      {
        will.map(w=>{
          return <Tablerow key={w.id} will={w} delTask={delTask}/>
        })
      }
      </tbody>
    </table>
  )
}

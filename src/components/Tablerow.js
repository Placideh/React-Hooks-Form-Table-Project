export default function Tablerow({will}){
  return (
    <tr>
      <td>{will.id}</td>
      <td>{will.name}</td>
      <td>{will.position}</td>
    </tr>
  );
}

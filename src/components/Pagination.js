export default function Pagination({totalWill,rowsPerPage,paginate}){
  let newWill=[];
  const pages=Math.ceil(totalWill/rowsPerPage);
  for(let i=0;i<pages;i++){
    newWill.push(i);
  }
  return (
      <ul style={{listStyle:'none'}}>
        {newWill.map((w)=>(
          <li onClick={()=>paginate(w)} style={{background:'white',display:'inline',marginRight:'5px',padding:'5px 10px',border:'1px solid #000'}} key={w} ><a style={{textDecoration:'none' ,color:'blue'}} href="!#">{w+1}</a></li>
        ))}
      </ul>
  );
}

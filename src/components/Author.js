export default function Author ({ author, color }) { 
  return (
    <h2 
      className='author'
      style={{color: color}}
    >
      -{author}
    </h2>
  );
}

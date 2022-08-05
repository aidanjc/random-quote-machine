export default function Quote ({ quote, color }) { 
  return (
    <h1 className='quote' style={{color: color}}>
      <i className='fa-solid fa-quote-left'>
      </i> {quote}
    </h1>
  );
}


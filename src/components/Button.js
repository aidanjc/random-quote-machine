export default function Button ({ text, color, onClick}) {
  return (
    <button 
      className='btn'
      onClick={onClick}
      style={{ 
        backgroundColor: color, 
        borderColor: color  
      }}
    >
      { text }
    </button>
  );
}

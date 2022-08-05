export default function Tweet({ color }) {
  return (
    <div 
      className='tweet-box'
      style={{ backgroundColor: color }}
    >
      <a 
        id='tweet-quote'
        href='https://twitter.com/intent/tweet'
      >
        <i className='fa-brands fa-twitter'></i>
      </a>
    </div>
  );
}

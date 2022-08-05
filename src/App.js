import { useState } from 'react'
import Quote from './components/Quote'
import Author from './components/Author'
import Button from './components/Button'
import Tweet from './components/Tweet'
import Footer from './components/Footer'

const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    color: '#CA2E55',
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    color: '#002500',
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    color: '#0A2342',
  },
  {
    quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain",
    color: '#83781B', 
  },
  {
    quote: "Blessed are the hearts that can bend; they shall never be broken",
    author: "Albert Camus",
    color: '#FD151B'
  },
  {
    quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    author: "Joseph Campbell",
    color: '#17A398'
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston S. Churchill",
    color: '#F28123'
  },
  {
    quote: "Some people never go crazy. What truly horrible lives they must lead.",
    author: "Charles Bukowski",
    color: '#AF2BBF'
  },
  {
    quote: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
    color: '#6E0D25'
  },
  {
    quote: "Those who don't believe in magic will never find it.",
    author: "Roald Dahl",
    color: '#1E2019'
  },
]

export default function App () {
  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);
  const [color, setColor] = useState(quotes[0].color);
  
  const newQuote = () => {
    // Rand Quotes
    let index = Math.floor(Math.random() * quotes.length);

    setQuote(quotes[index].quote);
    setAuthor(quotes[index].author);
    setColor(quotes[index].color);
  }

  return (
    <div 
      className='wrapper' 
      style={{backgroundColor: color}}
    >
      <div className='quote' id='quote-box'>
        <Quote
          id='text' 
          quote={quote}
          color={color}
        />
        <Author 
          id='author' 
          author={author} 
          color={color}
        />
        <div className='btn'>
          <Tweet color={color}/>
          <Button 
            text='New Quote' 
            id='new-quote' 
            onClick={newQuote}
            color={color}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

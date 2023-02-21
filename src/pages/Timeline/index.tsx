import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../../components/Header.tsx";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import './styles.css'

  
let newTweet = ''

export function Timeline(){
    const [tweets, setTweets] = useState([
      'Primeiro tweet',
      'teste',
      'deu certo'
    ])
    const [newTweet, setNewTweet] = useState('')
    function createNewTweet(event : FormEvent){
        event.preventDefault()
        setTweets([newTweet,...tweets])
        setNewTweet('')
    }

    function handleHotKeySubmit(event: KeyboardEvent){
      if(event.key === 'Enter' && (event.ctrlKey || event.metaKey )){
        setTweets([newTweet,...tweets])
        setNewTweet('')
      }
    }

    return(
        <main className='timeline'>
          <Header title='Home'/>
          <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/valeriast.png" alt="user" />
              <textarea 
                id="tweet" 
                placeholder="What's happening?"
                onChange={(text)=>{setNewTweet(text.target.value)}}
                value={newTweet}
                onKeyDown={handleHotKeySubmit}
              />
            </label>

            <button type="submit">Tweet</button>

          </form>
          <Separator/>
          {
            tweets.map((item)=> <Tweet key={item} content={item}/>)
          }
        </main>
    )
}
import { Header } from "../../components/Header.tsx";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import './styles.css'

const tweets = [
    'Primeiro tweet',
    'teste',
    'deu certo'
  ]
  

export function Timeline(){
    return(
        <main className='timeline'>
          <Header title='Home'/>
          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/valeriast.png" alt="user" />
              <textarea id="tweet" placeholder="What's happening?"></textarea>
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
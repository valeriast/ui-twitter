import { Header } from "../../components/Header.tsx";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import './styles.css'

const answers = [
    'Concordo',
    'Faz sentido',
    'Parabens'
]
    

export function Status(){
    return(
        <main className='status'>
          <Header title='Tweet'/>
          <Tweet content='novo tweet teste'/>
          <Separator/>
          <form className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/valeriast.png" alt="user" />
              <textarea id="tweet" placeholder="Tweet your answer"></textarea>
            </label>

            <button type="submit">Answer</button>

          </form>
          
          {
            answers.map((item)=> <Tweet key={item} content={item}/>)
          }
        </main>
    )
}
import { PaperPlaneRight, Target } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../../components/Header.tsx";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import './styles.css'

    

export function Status(){
  const [answers, setAnswers] = useState([
    'Concordo',
    'Faz sentido',
    'Parabens'
])
  const [newAnswer, setNewAnswer] = useState('')
  function createNewAnswer(event : FormEvent){
      event.preventDefault()
      setAnswers([newAnswer,...answers])
      setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey )){
      setAnswers([newAnswer,...answers])
      setNewAnswer('')
    }
  }

    return(
        <main className='status'>
          <Header title='Tweet'/>
          <Tweet content='novo tweet teste'/>
          <Separator/>
          <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/valeriast.png" alt="user" />
              <textarea 
                id="tweet" 
                placeholder="Tweet your answer"
                onChange={(text) => {setNewAnswer(text.target.value)}}  
                onKeyDown={handleHotKeySubmit}
                value={newAnswer}
              />
            </label>

            <button type="submit">
             <PaperPlaneRight/>
             <span>Answer</span>
            </button>

          </form>
          
          {
            answers.map((item)=> <Tweet key={item} content={item}/>)
          }
        </main>
    )
}
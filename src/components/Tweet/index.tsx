import './styles.css'

import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'

interface TweetProps{
    content: string
}

export function Tweet(props:  TweetProps){
    return(
        <a href='#' className="tweet">
            <img src="https://github.com/valeriast.png" alt="user" />

            <div className='tweet-content'>
                <div className="tweet-content-header">
                    <strong>Valeria Teixeira</strong>
                    <span>@vst</span>
                </div>

                <p>
                    {props.content}
                </p>

                <div className="tweet-content-footer">
                    <button type='button'>
                        <ChatCircle/>
                        20
                    </button>
                    
                    <button type='button'>
                        <ArrowsClockwise/>
                        20
                    </button>

                    <button type='button'>
                        <Heart/>
                        20
                    </button>
                </div>
            </div>
        </a>
    )
}
import './styles.css'

import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'

export function Tweet(){
    return(
        <a href='#' className="tweet">
            <img src="https://github.com/valeriast.png" alt="user" />

            <div className='tweet-content'>
                <div className="tweet-content-header">
                    <strong>Valeria Teixeira</strong>
                    <span>@vst</span>
                </div>

                <p>
                    Primeiro tweet texto aleatório
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
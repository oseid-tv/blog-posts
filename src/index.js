import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

const App = () => {
    return (
        <div className='ui comments'>
            <div className='comment'>
                <a href='/' className='avatar'>
                    <img src="" alt='profile picture' />
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        Sarah
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className='text'>
                        It's amazing
                    </div>
                </div>
            </div>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
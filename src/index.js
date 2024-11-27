import React from 'react'
import { createRoot } from 'react-dom/client'
import profile1 from './images/pic-1.jpg'
import profile2 from './images/pic-2.jpg'
import profile3 from './images/pic-3.jpg'
import SingleComment from './SingleComment'

const App = () => {
    return (
        <div className='ui comments'>
            <SingleComment name='Alex' date='Today at 5:00 PM' text='It is amazing' picture={profile1} />
            <SingleComment name='Jack' date='Today at 6:00 PM' text='Great job' picture={profile2} />
            <SingleComment name='Sarah' date='Today at 7:00 PM' text='Thanks...' picture={profile3} />
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
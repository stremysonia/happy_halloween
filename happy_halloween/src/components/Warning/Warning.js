import React from 'react'
import Typed from 'react-typed'
import './Warning.css'

const Warning = () => {
        return (
            <div className="typing-effect-container">
                <Typed
                    strings={["To this day I don't know what started the killings. The person to blame is sitting right across from you. It's the only person. Not parents, not society, not pornography. I mean, those are just excuses. Jeffrey Dahmer"]}
                    showCursor= {true}
                    typeSpeed= {80}
                    startDelay={50}
                    className="typing-effect"
                    // loop
                    // className="typing-effect"
                />
            </div>
    )
}

export default Warning

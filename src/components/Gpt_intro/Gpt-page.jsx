import React from 'react'
import "./gpt-page.css"
import search from "../../assets/search.png"
import chat from "../../assets/chat.png"
import set from "../../assets/set.png"
import user from "../../assets/user.png"
import gptLogo from "../../assets/gpt-logo.png"
import brain from "../../assets/brain.png"

import axios from 'axios';
import { useState } from 'react';

const Gptpage = () => {
    const [statement, setStatement] = useState('');

    const handleChange = (event) => {
        setStatement(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:5173/', { statement });
            console.log('Statement submitted successfully');
            // Optionally, reset the statement state
            setStatement('');
        } catch (error) {
            console.error('Error submitting statement:', error);
        }
    };



    return (
        <div className='bod'>
            <div className="main-box1">
                <div className="sidebar">
                    <div className="heading">
                        <a href="/"><h4>Chat GPT</h4></a>
                    </div>
                    <div className="instruction">
                        <button>New Chat</button>
                        <a href=""><img src={search} alt="" srcset="" /></a>
                    </div>
                    <div className="line"></div>
                    <div className="topics">
                        <div className="set">
                            <img src={chat} alt="" srcset="" />
                            <button>Create a HTML game</button>
                        </div>
                        <div className="set">
                            <img src={chat} alt="" srcset="" />
                            <button>What is Pos system? </button>
                        </div>
                        <div className="set">
                            <img src={chat} alt="" srcset="" />
                            <button>3 day trip Plan..</button>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="controller">
                        <button className='setting'> <img src={set} alt="" srcset="" /> Settings</button>
                        <button className='user'> <img src={user} alt="" srcset="" /> Andrew </button>
                    </div>
                </div>
                <div className="right-box">
                    <div className="prompt">
                        <img src={user} alt="" srcset="" />
                        <p>What are the steps to create game in HTML</p>
                    </div>
                    <div className="ans">
                        <div className="gpt-logo">
                            <img src={gptLogo} alt="" srcset="" />
                            <p>Creating an HTML game can be a fun and rewarding project. Here's a basic outline of the steps you can follow to create one:</p>
                        </div>
                        <div className="gpt-logo">
                            <p>1. <b>Plan Your Game:</b> Before you start coding, have a clear idea of what kind of game you want to create. Consider the gameplay mechanics, the design, and the overall theme.</p>
                        </div>
                        <div className="gpt-logo">
                            <p>2. <b>Set Up Your Development Environment:</b> Install a text editor like Visual Studio Code, Sublime Text, or Atom, Create a folder for your project and organize your files within it.</p>
                        </div>
                        <div className="gpt-logo">
                            <p>3. <b>HTML Structure:</b>Create an HTML file (index.html) as the main entry point for your game. Create an HTML file (index.html) as the main entry point for your game.Setup the basic structure of your HTML fileSet up the basic structure of your HTML file , Link your CSS and JavaScript files to the HTML file </p>
                        </div>
                        <div className="gpt-logo">
                            <p>4. <b>Design Your Game Interface:</b> Use HTML and CSS to design the layout of your game, including buttons, scoreboards, and any other elements. Consider using CSS frameworks like Bootstrap or Flexbox for layout and styling.</p>
                        </div>
                        <div className="gpt-logo">
                            <p>5. <b>Gameplay Mechanics:</b>Implement the core gameplay mechanics of your game using JavaScript. This could include moving characters, collision detection, scoring, etc.</p>
                        </div>
                        <div className="line2"></div>
                    </div>
                    <div className="prompt">
                        <img src={user} alt="" srcset="" />
                        <p>How much time it would take?</p>
                    </div>
                    <div className="ans">
                        <div className="blur"><div className="gpt-logo">
                            <img src={gptLogo} alt="" srcset="" />
                            <p>..</p>
                        </div>
                            <div className="take-prompt">
                                <img src={brain} alt="" srcset="" />
                                <input type="text" value={statement} placeholder='Whats on your mind' onChange={handleChange} ></input>
                                <button onClick={handleSubmit} className='submit'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gptpage
import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null)
  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  }, [])

  const handleEmoji = e =>{
    // console.log(e)
    setText(prev => prev+e.emoji)
    setOpen(false)
  }
  
  // console.log(text)
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png"/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png"/>
          <img src="./video.png"/>
          <img src="./info.png"/>
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png"/>
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi illo quisquam ad eius earum tenetur? Impedit harum tenetur pariatur autem ea amet praesentium, odit reprehenderit labore. Maiores, aliquid molestiae.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi illo quisquam ad eius earum tenetur? Impedit harum tenetur pariatur autem ea amet praesentium, odit reprehenderit labore. Maiores, aliquid molestiae.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png"/>
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi illo quisquam ad eius earum tenetur? Impedit harum tenetur pariatur autem ea amet praesentium, odit reprehenderit labore. Maiores, aliquid molestiae.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://i.ibb.co/6bXqFcM/slide-01-removebg-preview.png" alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi illo quisquam ad eius earum tenetur? Impedit harum tenetur pariatur autem ea amet praesentium, odit reprehenderit labore. Maiores, aliquid molestiae.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div ref={endRef}></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png"/>
          <img src="./camera.png"/>
          <img src="./mic.png"/>  
        </div>
        <input type="text" value={text} placeholder="Type a message" onChange={e => setText(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" onClick={()=>setOpen(prev => !prev)}/>
          <div className="picker">
            <EmojiPicker open ={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat

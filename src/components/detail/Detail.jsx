import { auth } from "../../lib/firebase"
import "./detail.css"

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png"/>
        <h2>
          Jane Does
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title"> 
            <span>Chat Settings</span>
            <img src="./arrowUp.png"/>
          </div>
        </div>
        <div className="option">
          <div className="title"> 
            <span>Privacy & Help</span>
            <img src="./arrowUp.png"/>
          </div>
        </div>
        <div className="option">
          <div className="title"> 
            <span>Shared photos</span>
            <img src="./arrowDown.png"/>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.ibb.co/6bXqFcM/slide-01-removebg-preview.png"/>
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className="icon"></img>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title"> 
            <span>Shared files</span>
            <img src="./arrowUp.png"/>
          </div>
        </div>
        <button className="block-user">Block user</button>
        <button className="logout" onClick={() =>auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail

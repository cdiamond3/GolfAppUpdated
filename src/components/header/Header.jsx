import "./header.css"
import { useState } from "react"
import Popup from "../popup/Popup"

export default function Header() {

    const [openPopup, setOpenPopup] = useState(false)


    const handlePopup = () => {
        setOpenPopup(!openPopup)
    }


    return (
        <div className="headerContainer">
            <div className="topLeft">
                <div className="topIcons">
                    <i className="topIcon fab fa-apple"></i>
                    <i className="topIcon fab fa-google-play"></i>
                    <i className="topIcon fab fa-instagram"></i>
                    <i className="topIcon fab fa-facebook"></i>
                    <div className="headerTitle">
                        <i> Pocket Caddie </i>
                    </div>
                </div>
                <button
                    className="teacherButton">
                    Find A Teacher
                </button>
            </div>

            <div className="center">
                <input type="text" className="searchBar" placeholder="Search Swings" />
            </div>

            <div className="topRight">
                <ul className="rightButtons">
                    <i className="uploadButton fas fa-upload"></i>
                </ul>

                <button
                    onClick={handlePopup}
                    className="loginButton">
                    Login
                </button>

                {openPopup && <Popup
                    content={<>
                        <form class="form-container">
                            <h1>Login</h1>
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <button type="submit" class="btn">Login</button>
                            <button type="button" class="btn cancel" onClick={handlePopup}>Close</button>
                        </form>
                    </>}
                    handleClose={handlePopup}
                />}
                <img
                    className="topImg"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt=""
                />
            </div>
        </div>
    )
}

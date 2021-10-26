import "./header.css"
import { useState } from "react"
import Popup from "../popup/Popup"

export default function Header() {
    
    const [newUserName, setNewUserName] = useState("")
    const [newUserPassword, setNewUserPassword] = useState("")
    const [openPopup, setOpenPopup] = useState(false)
    const [user, setUser] = useState({})

    const handleLogin = event => {
        event.preventDefault();
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: newUserName,
                    password: newUserPassword
                }
            })
        })
            .then(response => response.json())
            .then(result => {
                if (result.error) {
                    alert(result.error);
                } else {
                    localStorage.setItem('token', result.token)
                    alert("You have logged in!")
                    setUser(result)
                }
            });
        setNewUserName('');
        setNewUserPassword('');
    }

    const saveUser = (e) => {
        e.preventDefault()
        const newUser = {
            "username": newUserName,
            "password": newUserPassword,
        }
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify((newUser))
        })
            .then(console.log(newUser))
            .then(
                alert("You have created a new user!")
            )
    }

    const handlePopup = () => {
        setOpenPopup(!openPopup)
    }

    const handleChangePassword = (e) => {
        setNewUserPassword(e.target.value)
    }
    const handleChangeUser = (e) => {
        setNewUserName(e.target.value)
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
                <button
                    className="teacherButton">
                    New Score Card
                </button>
                <button
                    className="teacherButton">
                    My Score Cards
                </button>
                <button
                    className="teacherButton">
                    My Handicap
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
                        <h1 className="title">Login</h1>
                        <form className="form-container">
                            <label ><b>Email</b></label>
                            <input type="input" placeholder="Enter Email" onChange={handleChangeUser} />
                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" onChange={handleChangePassword} />
                            <button type="submit" className="btn" onClick={handleLogin}>Login</button>
                            <br></br>
                            <button type="submit" className="btn" onClick={(e) => saveUser(e)}>Create</button>
                            <button type="button" className="btn cancel" onClick={handlePopup}>Close</button>
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

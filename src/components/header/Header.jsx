import "./header.css"

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="topLeft">
                <div className="topIcons">
                    <i className="topIcon fab fa-apple"></i>
                    <i className="topIcon fab fa-google-play"></i>
                    <i className="topIcon fab fa-instagram"></i>
                    <i className="topIcon fab fa-facebook"></i>
                </div>
                <ul className="leftButtons">
                    <li className="buttons">Top Coaches</li>
                    <li className="searchButton"> Search For Help </li>
                </ul>
            </div>
            <div className="center">
                <div className="headerTitle">
                    <h1> My Pocket Caddie </h1>
                </div>
            </div>
            <div className="topRight">
                <ul className="rightButtons">
                    <i className="uploadButton fas fa-upload"> Upload Swing</i>
                    <li className="loginButton"> Login </li>
                </ul>
                <img
                    className="topImg"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt=""
                />
            </div>
        </div>
    )
}

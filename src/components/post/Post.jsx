import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                src="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png"
                alt=""
                className="postImg"
            />
            <div className="postInfo">
                <span className="postTitle">
                    <h3>Fix My Slice </h3>
                </span>
                <hr />
                <span className="postDate"> 1 Hour Ago </span>
            </div>
            <p className="postDescription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <br></br>
            <div className="commentsArea">
                <p2> Comments </p2>
                <hr />
                <p2> User: Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p2>
                <br />
                <input type="text" />
            </div>
        </div>
    )
}

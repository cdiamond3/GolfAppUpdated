import "./post.css"

export default function Post() {


    return (
        <div className="post">
            <div className="postInfo">
                <span className="postTitle">
                    <h3> Username </h3>
                    <h5> Fix My Slice </h5>
                </span>
                <span className="postDate"> 1 Hour Ago </span>
            </div>
            <img
                src="https://www.leadersedge.com/wp-content/uploads/2020/09/1020_TechNoSavvy_Briefly_AI-Gets-into-the-swing.jpg"
                alt=""
                className="postImg"
            />
            <p className="postDescription">
                My Ball Won't Stop Going Right!!
            </p>
            <div className="commentsArea">
                <p> Comments </p>
                <hr />
                <input type="text" />
                <i className="fas fa-comment"></i>
                <br />
                <br />
                <p2> User: You Are Coming Over The Top. </p2>
            </div>
        </div>
    )
}


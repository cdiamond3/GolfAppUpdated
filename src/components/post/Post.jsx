import RatingBar from "../ratingBar/RatingBar"
import { useState } from "react"
import "./post.css"

export default function Post() {
    const [comment,setComment] = useState("")
    const [commentArea, setCommentArea] = useState([])

    const handleComment = (e) => {
        e.preventDefault()
        setComment(e.target.value)
        console.log(comment)
    }


    return (
        <div className="post">
            <div className="postInfo">
                <span className="postUser">
                    <h2> Username </h2>
                </span>
                    <span className="postTitle"> Fix My Slice </span>
                <span className="postDate"> Posted: 1 Hour Ago </span>
            </div>
            <img
                src="https://www.leadersedge.com/wp-content/uploads/2020/09/1020_TechNoSavvy_Briefly_AI-Gets-into-the-swing.jpg"
                alt=""
                className="postImg"
            />
            <p className="postDescription">
                My Ball Won't Stop Going Right!!
            </p>
            <div className="comments">
                <h2 className="commentArea"> Comments </h2>
                <hr />
                <input type="text" className="commentBar" onChange={handleComment}/>
                <i className="fas fa-comment"></i>
                <p className="commentContent"> 
                <p className="commentUser">User:</p> 
                You Are Coming Over The Top. 
                <RatingBar className="ratingBar" />
                </p>
            </div>
        </div>
    )
}

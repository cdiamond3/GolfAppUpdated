import Posts from "../postsArea/PostArea"
import "./mainFeed.css"

export default function MainFeed({user}) {
    return (
        <div className="mainFeed">
            <Posts user={user}/>
            <Posts />
            <Posts />
            <Posts />
        </div>
    )
}

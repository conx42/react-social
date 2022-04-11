import Post from "../posts/Posts";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        
        {Posts.map((p) => (
          <Post key={p.id} post={p} />//map err vitor erom type err syntax holey ekta unique key ditey hoy.
        ))}
      </div>
    </div>
  );
} 
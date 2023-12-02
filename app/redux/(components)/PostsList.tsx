"use client";

import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "../features/posts/postsSlice";
import { sellectAllUsers } from "../features/users/usersSlice";
import TimeAgo from "./TimeAgo";

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(sellectAllUsers);

  const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

  const authorStatus = (userId: string) => {
    const author = users.find((user) => user.id === userId);
    return author ? author.name : "unknown author";
  };

  return (
    <section className="flex flex-col gap-4" >
      <h2>posts</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {orderedPosts.map((post) => (
          <article
            className="flex flex-col px-8 py-4 gap-1 border-2 border-gray-400 rounded-lg"
            key={post.id}
          >
            <h2>
              <span>postid :</span>
              <span className="text-blue-700"> {post.id}</span>
            </h2>
            <h3>
              <span>post title :</span>
              <span className="text-blue-700"> {post.title}</span>
            </h3>
            <p>
              <span>post content :</span>
              <span className="text-blue-700">
                {post.content.substring(0, 100)}
              </span>
            </p>
            <div className="flex items-center justify-between gap-4">
              <div>
                <span>by</span>
                <span className="text-blue-700">
                  {authorStatus(post.userId)}
                </span>
              </div>
              <div>{<TimeAgo timestamp={post.date} />}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

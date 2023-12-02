"use client";

import { useDispatch } from "react-redux";
import { reactionAdded, InitialStateProps } from "../features/posts/postsSlice";
import { FaHeart } from "react-icons/fa";

const availableReactions = [
  { name: "like", emoji: "👍" },
  { name: "dislike", emoji: "👎" },
  { name: "heart", emoji: "❤️" },
];

interface ReactionButtonsProps {
  post: InitialStateProps;
}

export default function ReactionButtons({ post }: ReactionButtonsProps) {
  const dispatch = useDispatch();

  const reactionButtons = availableReactions.map((reaction, index) => {
    return (
      <button
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: reaction.name }))
        }
        type="button"
        key={index}
      >
        <span>{reaction.emoji}</span>
        <span>{(post.reactions as any)[reaction.name]}</span>
      </button>
    );
  });

  return (
    <div className="flex items-center justify-between">{reactionButtons}</div>
  );
}

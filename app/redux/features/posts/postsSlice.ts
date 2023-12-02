import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { sub } from "date-fns";

export type InitialStateProps = {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string;
  reactions: {
    like: number;
    dislike: number;
    heart: number;
  };
};

const initialState: InitialStateProps[] = [
  {
    id: "sadasdasdasdasd",
    title: "some title 1",
    content: "some content 1",
    userId: "sadkasdasjda",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      like: 3,
      dislike: 0,
      heart: 4,
    },
  },
  {
    id: "asdasdasdasdasdas",
    title: "some title 2",
    content: "some content 2",
    userId: "sadsadsadasjda",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    reactions: {
      like: 1,
      dislike: 1,
      heart: 6,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<InitialStateProps>) => {
        console.log("payload", action.payload);

        state.push(action.payload);
      },
      prepare: (title: string, content: string, userId: string) => {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title: title,
            content: content,
            userId: userId,
            reactions: {
              like: 0,
              dislike: 0,
              heart: 0,
            },
          },
        };
      },
    },
    reactionAdded(
      state,
      action: { payload: { postId: string; reaction: string } }
    ) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        (existingPost.reactions as any)[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;

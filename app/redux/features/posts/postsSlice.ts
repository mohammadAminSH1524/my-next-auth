import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { sub } from "date-fns";

interface InitialStateProps {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string;
  
}

const initialState: InitialStateProps[] = [
  {
    id: "sadasdasdasdasd",
    title: "some title 1",
    content: "some content 1",
    userId: "sadkasdasjda",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "asdasdasdasdasdas",
    title: "some title 2",
    content: "some content 2",
    userId: "sadsadsadasjda",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
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
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;

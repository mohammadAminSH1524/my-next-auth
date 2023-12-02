import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface InitialStateProps {
  id: string;
  title: string;
  content: string;
  userId : string
}

const initialState: InitialStateProps[] = [
  { id: "sadasdasdasdasd", title: "some title 1", content: "some content 1" , userId : "sadkasdasjda"},
  { id: "asdasdasdasdasdas", title: "some title 2", content: "some content 2", userId : "sadsadsadasjda" },
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

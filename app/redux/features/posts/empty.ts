import { createSlice, nanoid ,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState = [
  { id: "asdasdasdasd", title: "some title 1", content: "some content 1" },
  { id: "asdasdasdasdasdasd", title: "some title 2", content: "some content 2" },
];

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<PostPayload>) {
        state.push(action.payload);
      },




      prepare(title : string, content  )  {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
          },
        };
      },






    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;

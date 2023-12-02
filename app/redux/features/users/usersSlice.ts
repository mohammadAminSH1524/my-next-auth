import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface InitialStateProps {
  id: string;
  name: string;
}

const initialState: InitialStateProps[] = [
  { id: "0", name: "Dude Lebowski" },
  { id: "1", name: "Neil Young" },
  { id: "2", name: "Dave Gray" },
];

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
});

export const sellectAllUsers = (state: RootState) => state.users;

export const {} = userSlice.actions;

export default userSlice.reducer;

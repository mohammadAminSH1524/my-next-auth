"use client";
import { useSelector, useDispatch } from "react-redux";
import PostsList from "../redux/(components)/PostsList";
import Readmore from "../components/Readmore";
import AddPostForm from "@/app/redux/(components)/AddpostForm";
import Image from "next/image";

export default function Test() {
  return (
    <div className="flex flex-col justify-between gap-10">
      <AddPostForm />
      <PostsList />
    </div>
  );
}

import Image from "next/image";
import { toast } from "react-toastify";
import Readmore from "./components/Readmore";

interface UserType {
  name: string;
  email: string;
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: UserType[] = await getData();

  // console.log("data :", data);
  return (
    <div className="flex flex-col gap-4 pt-8">
      {data.map((user, index) => (
        <div className="flex  gap-8" key={index}>
          <div>
            <span>username : </span>
            <span>{user.name}</span>
          </div>
          <div>
            <span>email : </span>
            <span>{user.email}</span>
          </div>
        </div>
      ))}

      {/* read more read less */}

      <div className="w-1/2 min-h-[300px] mx-auto border border-red-400">
        {/* read more component */}
        {/* <Readmore />
        <Readmore />
        <Readmore /> */}
      </div>

      


    </div>
  );
}

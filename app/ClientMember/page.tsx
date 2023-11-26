"use client";
interface UserType {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  role?: string | null | undefined;
}
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ClientMember() {
  const session = useSession();
  
  const user : UserType | undefined = session.data?.user;

  if (session.status === "loading") {
    return <h1>loading</h1>;
  } else {
    if (session.status === "unauthenticated") {
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    } else {
      return (
        <div>
          <h1>ClientMember</h1>
          <div className="flex gap-x-4">
            <p>user name : </p>
            <p>{user?.name}</p>
          </div>
          <div className="flex gap-x-4">
            <p>user email :</p>
            <p>{user?.email}</p>
          </div>
          <div className="flex gap-x-4">
            <p>user role :</p>
            <p>{user?.role}</p>
          </div>
        </div>
      );
    }
  }
}

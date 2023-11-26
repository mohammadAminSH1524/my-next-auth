import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Member() {
  const session = await getServerSession(options);
  console.log("session : ", session);

  if (!session) {
    redirect("api/auth/signin?callbackUrl=/Member");
  }
  return (
    <div>
      <h1>Member server session</h1>
      <div className="flex gap-x-4">
        <p>user name : </p>
        <p>{session?.user?.name}</p>
      </div>
      <div className="flex gap-x-4">
        <p>user email :</p>
        <p>{session?.user?.email}</p>
      </div>
      <div className="flex gap-x-4">
        <p>user role :</p>
        <p>{session?.user?.role}</p>
      </div>
    </div>
  );
}

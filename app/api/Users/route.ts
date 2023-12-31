import User from "@/app/models/User";
import connect from "@/app/utils/db";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

interface UserDataType {
  name: string;
  email: string;
  password: string;
}

export async function GET() {
  try {
    await connect();

    const users = await User.find();
// console.log("users : ",users);
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connect();
    const body = await req.json();
    const userData = body.values;
    // console.log("userData", userData);

    //Confirm data exists
    //  ?this code does not required because of formik form validation
    // if (!userData?.email || !userData.password) {
    //   return NextResponse.json(
    //     { message: "All fields are required." },
    //     { status: 400 }
    //   );
    // }

    // check for duplicate emails
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;

    await User.create(userData);

    return NextResponse.json({ message: "User Created." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

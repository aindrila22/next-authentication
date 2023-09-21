import { connect } from "@/lib/config/dbConfig";
import User from "@/lib/models/auth";
import bycryptjs from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const { fullname, email, password } = await request.json();

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const salt = await bycryptjs.getSalt("10");
    const hashedPassword = await bycryptjs.hash(password, salt);

    const savedUser = await new User({
      fullname,
      email,
      password: hashedPassword,
    }).save();

    return NextResponse.json(
      { message: "User Created Successfully", success: true, savedUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

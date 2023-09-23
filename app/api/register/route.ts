import { connect } from "@/lib/config/dbConfig";
import User from "@/lib/models/auth";
import bcryptjs from "bcryptjs";
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

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    //send verification email

    //await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

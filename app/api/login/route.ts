import { connect } from "@/lib/config/dbConfig";
import User from "@/lib/models/auth";
import bcryptjs from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exists. Please register!" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    const tokenData = {
      id: user._id,
      email: user.email,
      name: user.fullname,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful",
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });


    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

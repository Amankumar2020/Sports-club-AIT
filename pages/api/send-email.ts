import { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { name, email, message }: FormData = req.body;
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "",
      pass: "",
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "harsh.v7684@gmail.com",
      subject: "New message from contact form",
      text: message,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
}

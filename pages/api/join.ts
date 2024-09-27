// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import join from "@/model/join";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongoose.connect(
    "mongodb+srv://Nilesh:9319601021@mongoyt.ubxb7fr.mongodb.net/devapex"
  );

  if (req.method == "POST") {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const state = req.body.state;
    const clg = req.body.clg;
    const desc = req.body.desc;

    let p = new join({
      name: name,
      email: email,
      phone: phone,
      state: state,
      clg: clg,
      desc: desc,
    });
    await p.save();

    res.status(200).json({ success: true });
  }

  if (req.method == "GET") {
    const posts = await join.find();
    res.status(200).json({ success: true, data: posts });
  }
}

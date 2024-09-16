// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import event from "@/model/event";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    
        await mongoose.connect('mongodb+srv://Nilesh:9319601021@mongoyt.ubxb7fr.mongodb.net/devapex')
    console.log(req.body)

    if(req.method == 'POST'){
        const name = req.body.name
        const date = req.body.date
        const venue = req.body.venue
        const imgurl = req.body.imgurl
        const link = req.body.link

        let p = new event({
                    name : name,
                    date : date,
                    venue : venue,
                    imgurl : imgurl,
                    link : link
                })
        await p.save();

        res.status(200).json({ success: true });
    }

    if(req.method == 'GET'){
        const posts = await event.find();
        res.status(200).json({ success: true , data: posts});
    }
  
}

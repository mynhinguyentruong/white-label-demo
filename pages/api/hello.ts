// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch(
      "https://staging.crossmint.io/api/v1-alpha1/wallets?userId=2",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "X-PROJECT-ID": process.env.CROSSMINT_X_PROJECT_ID,
          "X-CLIENT-SECRET": process.env.CROSSMINT_X_CLIENT_SECRET,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  checkoutURL: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @ts-ignore
  const response = await fetch(
      `https://staging.crossmint.io/api/v1-alpha1/checkout/mint`,
      {
        "method": "POST",
        "body": JSON.stringify({
          "clientId": "d796882b-ce99-4f89-96d8-fab6b1a745fe",
          "userId": "2sadasd",
          "emailTo": "sosoasdaksd@sadsmd.com",
          "paymentMethod": "fiat",
          "price": "0.0001",
          "mintArgs": {
            "type": "candy-machine",
            "totalPrice": "0.0001",
            "environment": "staging",
            "_id": "1",
            "_count": 1,
          },
          "collection": {
            "title": "Spring Collection",
            "photo":
                "https://ipfs.moralis.io:2053/ipfs/QmPJz89LmJtBR1MTNzbsYPpQXG1T5wQ141ZB59fYjUV3Wo",
            "description":
                "La préservation de la pointe du Cap Ferret a besoin de support financi…",
          },

          "redirect": {
            "continue": "http://localhost:3000/transaction/succeeded",
            "cancel": "http://localhost:3000/transaction/failed",
          },
        }),
        "headers": {
          "Content-Type": "application/json",
          "X-PROJECT-ID": process.env.CROSSMINT_X_PROJECT_ID,
          "X-CLIENT-SECRET": process.env.CROSSMINT_X_CLIENT_SECRET,
        },
      }
  );
  const data = await response.json();
  console.log("checkout url", data.checkoutUrl);
  res.status(200).json({ checkoutURL: data.checkoutURL });
}

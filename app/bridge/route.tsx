import { Button } from "frames.js/next";
import { frames } from "../frames/frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw='flex items-center text-6xl justify-center w-full h-full bg-gray-200'>
        Bridge USDC to Base using CCIP
      </div>
    ),
    buttons: [
      <Button
        action='tx'
        target={`${process.env.HOST_URL}/tx/approve`}
        post_url={`${process.env.HOST_URL}/tx-success/approve`}
      >
        Approve USDC
      </Button>,
    ],
    textInput: "Enter amount in USDC",
  };
});

export const GET = handleRequest;
export const POST = handleRequest;

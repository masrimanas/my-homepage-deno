import { HandlerContext } from "$fresh/server.ts";

export const dummyAmazingDestination = [
  {
    imageUrl: "https://goolidays.vercel.app/destinations/indonesia.webp",
    title: "Indonesia",
  },
  {
    imageUrl: "https://goolidays.vercel.app/destinations/bangkok.webp",
    title: "Thailand",
  },
  {
    imageUrl: "https://goolidays.vercel.app/destinations/malaysia.webp",
    title: "Malaysia",
  },
  {
    imageUrl: "https://goolidays.vercel.app/destinations/singapore.webp",
    title: "Singapore",
  },
  {
    imageUrl: "https://goolidays.vercel.app/destinations/sydney.webp",
    title: "Australia",
  },
  {
    imageUrl: "https://goolidays.vercel.app/destinations/shanghai.webp",
    title: "China",
  },
  {
    imageUrl: "https://goolidays.vercel.app/destinations/korea.webp",
    title: "Korea",
  },
  {
    imageUrl: "https://goolidays.vercel.app/destinations/paris.webp",
    title: "France",
  },
];

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return Response.json(dummyAmazingDestination);
};

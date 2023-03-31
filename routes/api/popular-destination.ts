import { HandlerContext } from "$fresh/server.ts";

export const dummyDataFavorit = [
  {
    imageUrl:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/jz3yjvj00gzisczzhvpf.webp",
    title: "Lombok Gili Terawangan Excursion",
    rating: 4.5,
    category: "bestSeller",
    numberOfReview: 44,
    numberOfSold: 877,
    price: 5_499_000,
    basePrice: 6_000_000,
  },
  {
    imageUrl:
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/otjiniotdil2ofit3yqo/TiketLembangParkZoodiBandung-KlookIndonesia.jpg",
    title: "Lembang Park Zoo and Zoo Ticket",
    rating: 4.2,
    category: "bestSeller",
    numberOfReview: 44,
    numberOfSold: 877,
    price: 87500,
    basePrice: 100000,
  },
  {
    imageUrl:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/ekvjojjct58m06kjt3gh.webp",
    title: "Singapore Landmarks 4D3N",
    rating: 4.9,
    category: "bestSeller",
    numberOfReview: 44,
    numberOfSold: 877,
    price: 4_799_000,
    basePrice: 5_500_000,
  },
  {
    imageUrl:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/cyrojimywhfrrcwnan1j.webp",
    title: "Bali Zoo Adventure Ticket",
    rating: 4.4,
    category: "bestSeller",
    numberOfReview: 44,
    numberOfSold: 877,
    price: 105000,
    basePrice: 105000,
  },
];

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return Response.json(dummyDataFavorit);
};

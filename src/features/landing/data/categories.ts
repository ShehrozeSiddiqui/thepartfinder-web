import type { Category } from "../types";

/**
 * Images are remote placeholders. loremflickr `lock` pins one picture per URL, but it is still a
 * random Flickr match by keyword — swap for owned/licensed photos before launch.
 */
const stockImage = (keywords: string, lock: number) =>
  `https://loremflickr.com/800/600/${keywords}?lock=${lock}`;

export const categories: Category[] = [
  {
    name: "Engine",
    partCount: "432 Parts",
    image: "https://images.pexels.com/photos/24286596/pexels-photo-24286596.jpeg",
  },
  {
    name: "Transmission",
    partCount: "154 Parts",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
  },
  { name: "Suspension", partCount: "234 Parts", image: stockImage("car,suspension,parts", 1) },
  { name: "Braking System", partCount: "187 Parts", image: stockImage("car,brake,disc", 2) },
  { name: "Electrical", partCount: "201 Parts", image: stockImage("car,battery,electrical", 3) },
  { name: "Body Parts", partCount: "319 Parts", image: stockImage("car,body,parts", 4) },
  { name: "Steering", partCount: "89 Parts", image: stockImage("car,steering,parts", 5) },
  { name: "Cooling System", partCount: "96 Parts", image: stockImage("car,radiator,cooling", 6) },
  { name: "Exhaust System", partCount: "67 Parts", image: stockImage("car,exhaust,system", 7) },
  { name: "Fuel System", partCount: "128 Parts", image: stockImage("car,fuel,system", 8) },
];

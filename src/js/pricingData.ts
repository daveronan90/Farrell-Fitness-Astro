export interface service {
  desc: string;
  duration: string;
  price: string;
  order: number;
}

export interface ServiceGroup {
  category: string;
  services: service[];
  order: number;
}

export const defaultPriceList: ServiceGroup[] = [
  {
    category: "price list",
    order: 1,
    services: [
      { desc: "", duration: "", price: "", order: 1 },
      { desc: "", duration: "", price: "", order: 2 },
      { desc: "", duration: "", price: "", order: 3 },
      { desc: "", duration: "", price: "", order: 4 },
    ],
  },
  {
    category: "programming",
    order: 2,
    services: [
      { desc: "", duration: "", price: "", order: 1 },
      { desc: "", duration: "", price: "", order: 2 },
      { desc: "", duration: "", price: "", order: 3 },
      { desc: "", duration: "", price: "", order: 4 },
    ],
  },
  {
    category: "sports message",
    order: 3,
    services: [
      { desc: "", duration: "", price: "", order: 1 },
      { desc: "", duration: "", price: "", order: 2 },
      { desc: "", duration: "", price: "", order: 3 },
      { desc: "", duration: "", price: "", order: 4 },
    ],
  },
  {
    category: "styku body scans",
    order: 4,
    services: [
      { desc: "", duration: "", price: "", order: 1 },
      { desc: "", duration: "", price: "", order: 2 },
      { desc: "", duration: "", price: "", order: 3 },
      { desc: "", duration: "", price: "", order: 4 },
    ],
  },
];

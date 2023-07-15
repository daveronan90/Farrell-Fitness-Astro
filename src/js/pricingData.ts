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
    category: "classes",
    order: 1,
    services: [
      { desc: "8 classes", duration: "1 month", price: "TBD", order: 1 },
      { desc: "12 classes", duration: "1 month", price: "TBD", order: 2 },
      { desc: "classes & gym", duration: "1 month", price: "TBD", order: 3 },
      { desc: "class", duration: "1 day", price: "TBD", order: 4 },
    ],
  },
  {
    category: "open gym",
    order: 2,
    services: [
      { desc: "gym", duration: "1 month", price: "TBD", order: 5 },
      { desc: "gym", duration: "3 months", price: "TBD", order: 6 },
      { desc: "gym", duration: "6 months", price: "TBD", order: 7 },
      { desc: "gym", duration: "1 year", price: "TBD", order: 8 },
      { desc: "gym", duration: "1 day", price: "TBD", order: 9 },
      { desc: "gym", duration: "1 week", price: "TBD", order: 10 },
      { desc: "gym (student)", duration: "1 month", price: "TBD", order: 11 },
      { desc: "gym (student)", duration: "3 months", price: "TBD", order: 12 },
      { desc: "gym (student)", duration: "6 months", price: "TBD", order: 13 },
      { desc: "gym (student)", duration: "1 year", price: "TBD", order: 14 },
    ],
  },
  {
    category: "personal training",
    order: 3,
    services: [
      {
        desc: "personal training",
        duration: "1 session",
        price: "TBD",
        order: 15,
      },
      {
        desc: "personal training 1 week",
        duration: "2 sessions",
        price: "TBD",
        order: 16,
      },
      {
        desc: "personal training 5 week block",
        duration: "10 sessions",
        price: "TBD",
        order: 17,
      },
      {
        desc: "semi personal training 2 people",
        duration: "1 session",
        price: "TBD",
        order: 18,
      },
    ],
  },
  {
    category: "gym & programming",
    order: 4,
    services: [
      { desc: "gym & program", duration: "1 month", price: "TBD", order: 19 },
      { desc: "gym & program", duration: "3 months", price: "TBD", order: 20 },
      {
        desc: "consulation",
        duration: "body scan mobility screen strength test",
        price: "TBD",
        order: 4,
      },
    ],
  },
  {
    category: "sports message",
    order: 5,
    services: [
      {
        desc: "sports massage (non member)",
        duration: "",
        price: "TBD",
        order: 21,
      },
      {
        desc: "sports massage (member)",
        duration: "",
        price: "TBD",
        order: 22,
      },
    ],
  },
  {
    category: "styku 3d body scan",
    order: 6,
    services: [
      { desc: "styku body scan", duration: "", price: "TBD", order: 23 },
      {
        desc: "styku body scan (student)",
        duration: "",
        price: "TBD",
        order: 24,
      },
    ],
  },
  {
    category: "pt & gym program",
    order: 7,
    services: [
      {
        desc: "personal training",
        duration: "5 sessions",
        price: "TBD",
        order: 25,
      },
      { desc: "gym", duration: "3 months", price: "TBD", order: 26 },
      { desc: "program", duration: "3 months", price: "TBD", order: 27 },
      { desc: "", duration: "Total", price: "TBD", order: 28 },
    ],
  },
];

export interface service {
  desc: string;
  duration: string;
  price: string;
}

export interface ServiceGroup {
  category: string;
  services: service[];
}

export const defaultPriceList: ServiceGroup[] = [
  {
    category: "classes",
    services: [
      { desc: "8 classes", duration: "1 month", price: "TBD" },
      { desc: "12 classes", duration: "1 month", price: "TBD" },
      { desc: "classes & gym", duration: "1 month", price: "TBD" },
      { desc: "class", duration: "1 day", price: "TBD" },
    ],
  },
  {
    category: "open gym",
    services: [
      { desc: "gym", duration: "1 month", price: "TBD" },
      { desc: "gym", duration: "3 months", price: "TBD" },
      { desc: "gym", duration: "6 months", price: "TBD" },
      { desc: "gym", duration: "1 year", price: "TBD" },
      { desc: "gym", duration: "1 day", price: "TBD" },
      { desc: "gym", duration: "1 week", price: "TBD" },
      { desc: "gym (student)", duration: "1 month", price: "TBD" },
      { desc: "gym (student)", duration: "3 months", price: "TBD" },
      { desc: "gym (student)", duration: "6 months", price: "TBD" },
      { desc: "gym (student)", duration: "1 year", price: "TBD" },
    ],
  },
  {
    category: "personal training",
    services: [
      { desc: "personal training", duration: "1 session", price: "TBD" },
      {
        desc: "personal training 1 week",
        duration: "2 sessions",
        price: "TBD",
      },
      {
        desc: "personal training 5 week block",
        duration: "10 sessions",
        price: "TBD",
      },
      {
        desc: "semi personal training 2 people",
        duration: "1 session",
        price: "TBD",
      },
    ],
  },
  {
    category: "gym & programming",
    services: [
      { desc: "gym & program", duration: "1 month", price: "TBD" },
      { desc: "gym & program", duration: "3 months", price: "TBD" },
      {
        desc: "consulation",
        duration: "body scan mobility screen strength test",
        price: "TBD",
      },
    ],
  },
  {
    category: "sports message",
    services: [
      { desc: "sports massage (non member)", duration: "", price: "TBD" },
      { desc: "sports massage (member)", duration: "", price: "TBD" },
    ],
  },
  {
    category: "styku 3d body scan",
    services: [
      { desc: "styku body scan", duration: "", price: "TBD" },
      { desc: "styku body scan (student)", duration: "", price: "TBD" },
    ],
  },
  {
    category: "pt & gym program",
    services: [
      { desc: "personal training", duration: "5 sessions", price: "TBD" },
      { desc: "gym", duration: "3 months", price: "TBD" },
      { desc: "program", duration: "3 months", price: "TBD" },
      { desc: "", duration: "Total", price: "TBD" },
    ],
  },
];

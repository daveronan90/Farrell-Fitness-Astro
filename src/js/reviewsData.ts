interface Review {
  author_name: string;
  author_url?: string;
  language?: string;
  original_language?: string;
  profile_photo_url?: string;
  relative_time_description?: string;
  translated?: boolean;
  time: number;
  rating: number;
  text: string;
}

export const defaultReviews: Review[] = [
  {
    author_name: "Donal McGee",
    author_url:
      "https://www.google.com/maps/contrib/113677558714472910550/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMQ2I_mj9kK8FvI_WJVnIFTXTb_Hh0p1xL9jJcvUdmZTX7Y=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "3 months ago",
    text: "I got a day pass to Farrell Fitness today and it was one of the best gym experiences I\u2019ve ever had. Eoghan was very friendly and made me feel welcome from the moment I arrived. The gym itself has a fantastic range of equipment, the space is large and airy and the members had a great gym etiquette. Highly recommended.",
    time: 1678664334,
    translated: false,
  },
  {
    author_name: "Michael Doyle",
    author_url:
      "https://www.google.com/maps/contrib/104057722969265897292/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AAcHTte8Aisw4DWV6YYJZ2hnRbC9yyZfnLgMVNlIgjrkcdi5=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a month ago",
    text: "As trainer of a local Gaa team we decided to use Farrell Fitness to assist us during pre-season.\nWe had large numbers so we needed somewhere that would be able to facilitate us and Farrell Fitness certainly ticked this box.\nEach night Robbie and the lads were extremely organised and had everything in the gym set up and ready to go. Despite our large numbers no individual was left feeling unsure of what they should be doing as all exercises were  clearly explained beforehand and if anyone was lifting using poor form/technique they were pulled aside and clearly shown how it should be done.\n\nThe music,trainers,players and well equipped gym combined to make it a very enjoyable experience for all involved.\n\nThanks for having us Robbie\ud83d\udc4d",
    time: 1683963335,
    translated: false,
  },
  {
    author_name: "joshua tubritt",
    author_url:
      "https://www.google.com/maps/contrib/113448822837837238624/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AAcHTtdF8M5JQ-NE3CPsCZ4cYxYywxbJ2VYDMS5Iu2_rzuop=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 5,
    relative_time_description: "a year ago",
    text: "Had the fortune to call in here randomly for a workout a few months ago. I was so impressed by the set up and service, afterwards I purchased the membership there and then. Since then my fitness goals have surpassed anything I expected.\nRobbie and the team have an absolute state of the art facility that\u2019s constantly growing, a great environment for people of all abilities and friendly service and advice. It\u2019s hands down easily the best gym I\u2019ve ever been part of, at home or abroad. Would recommend to any experienced gym user or someone thinking of starting out, to give Farrell Fitness a try. It\u2019s a real gem and a testament to Robbie\u2019s hard work and dedication!\n10/10 would recommend to a friend.",
    time: 1642363291,
    translated: false,
  },
  {
    author_name: "David Ronan",
    author_url:
      "https://www.google.com/maps/contrib/118112817265489049011/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMThoCSG92pknvIH1RScJSP_FBMdVQocIVF8O6zOrpxU_IA=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a year ago",
    text: "Top gym facility in the south east. Excellent professional and friendly staff, that go out of their way to ensure you get the best workout possible.\n\nEquipment is all band new and state of the art. Great atmosphere when working out which makes it really fun.\n\nThey've just added a new golf simulator which is the best that money can buy and if you're into golf like me give you all the information and more that you need to improve not to mention the hours of fun you can have trying different things out!\n\nThe open gym and classes are capped to ensure there's no overcrowding and you never have to wait on equipment, this is a huge bonus for me as I personally don't have a huge amount of time to get a workout in.\n\nIf your looking for a new gym or just trying to get started I would highly recommend Farrell Fitness!",
    time: 1635351956,
    translated: false,
  },
  {
    author_name: "Planet Earth",
    author_url:
      "https://www.google.com/maps/contrib/118374147660848988049/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMQvEARnzwHTUaakW1C3BNpG27hXXyAzd-aKzul7dMiKJ1I=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a year ago",
    text: "Everything is perfect  only the price  is to high by my opinion.",
    time: 1653996999,
    translated: false,
  },
];
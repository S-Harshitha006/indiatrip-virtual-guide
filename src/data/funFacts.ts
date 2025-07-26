export const funFacts = [
  "India has the world's largest postal network with over 1,55,000 post offices!",
  "Chess was invented in India and was originally called 'Chaturanga'.",
  "India is the birthplace of four major world religions: Hinduism, Buddhism, Jainism, and Sikhism.",
  "The Lotus Temple in Delhi has 27 free-standing marble petals and receives over 4 million visitors annually.",
  "India has the world's largest family - a man in Mizoram has 39 wives, 94 children, and 33 grandchildren!",
  "Kumbh Mela is the largest gathering of people in the world, visible from space satellites.",
  "India has over 22 official languages and more than 1,600 spoken languages.",
  "The Taj Mahal appears to change color depending on the time of day - pink at dawn, white during day, and golden at sunset.",
  "India produces 70% of the world's spices and has the largest spice market in Asia.",
  "The Indian flag has a 24-spoke wheel called the Ashoka Chakra, representing the 24 hours of the day.",
  "Varanasi is one of the oldest continuously inhabited cities in the world, over 3,000 years old.",
  "India has the world's largest democracy with over 900 million eligible voters.",
  "The Great Banyan Tree in Kolkata is over 250 years old and covers 3.5 acres of land.",
  "India is the only country to have a Bill of Rights for cows in its constitution.",
  "The Golden Temple in Amritsar serves free meals to over 100,000 people daily, regardless of religion or caste.",
  "India has the highest cricket ground in the world in Chail, Himachal Pradesh, at 2,444 meters above sea level.",
  "The Indian Railways employs over 1.3 million people, making it one of the world's largest employers.",
  "India has 38 UNESCO World Heritage Sites, including natural and cultural landmarks.",
  "The town of Shani Shingnapur in Maharashtra has no doors on any houses - crime rate is virtually zero!",
  "India's space program (ISRO) successfully reached Mars on its first attempt and at the lowest cost in the world."
];

export const getRandomFunFact = (): string => {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  return funFacts[randomIndex];
};
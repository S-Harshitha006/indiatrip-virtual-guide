export interface StateData {
  id: string;
  name: string;
  image: string;
  description: string;
  area: string;
  population: string;
  capital: string;
  famousPlaces: string[];
  localFoods: string[];
  festivals: string[];
  coordinates: { lat: number; lng: number };
}

export const statesData: StateData[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    image: "/src/assets/hawa-mahal.jpg",
    description: "The Land of Kings, known for its magnificent palaces, forts, and desert landscapes.",
    area: "342,239 km²",
    population: "68.5 million",
    capital: "Jaipur",
    famousPlaces: ["Jaipur (Pink City)", "Udaipur", "Jodhpur", "Jaisalmer", "Mount Abu"],
    localFoods: ["Dal Baati Churma", "Laal Maas", "Ghevar", "Pyaaz Kachori", "Mawa Kachori"],
    festivals: ["Desert Festival", "Pushkar Fair", "Teej", "Gangaur", "Marwar Festival"],
    coordinates: { lat: 26.9124, lng: 75.7873 }
  },
  {
    id: "kerala",
    name: "Kerala",
    image: "/src/assets/kerala-backwaters.jpg",
    description: "God's Own Country, famous for backwaters, spices, and Ayurveda.",
    area: "38,852 km²",
    population: "33.4 million",
    capital: "Thiruvananthapuram",
    famousPlaces: ["Alleppey", "Munnar", "Kochi", "Thekkady", "Kovalam"],
    localFoods: ["Appam with Stew", "Fish Curry", "Puttu", "Banana Chips", "Payasam"],
    festivals: ["Onam", "Thrissur Pooram", "Nehru Trophy Boat Race", "Theyyam", "Vishu"],
    coordinates: { lat: 10.8505, lng: 76.2711 }
  },
  {
    id: "goa",
    name: "Goa",
    image: "/src/assets/goa-beach.jpg",
    description: "India's smallest state known for beaches, Portuguese heritage, and vibrant nightlife.",
    area: "3,702 km²",
    population: "1.5 million",
    capital: "Panaji",
    famousPlaces: ["Baga Beach", "Calangute", "Old Goa", "Dudhsagar Falls", "Anjuna"],
    localFoods: ["Fish Curry Rice", "Vindaloo", "Bebinca", "Prawn Balchão", "Feni"],
    festivals: ["Carnival", "Shigmo", "Feast of St. Francis Xavier", "Sunburn Festival", "Christmas"],
    coordinates: { lat: 15.2993, lng: 74.1240 }
  },
  {
    id: "uttarpradesh",
    name: "Uttar Pradesh",
    image: "/src/assets/hero-india.jpg",
    description: "The Heartland of India, home to the iconic Taj Mahal and spiritual cities.",
    area: "240,928 km²",
    population: "199.8 million",
    capital: "Lucknow",
    famousPlaces: ["Agra (Taj Mahal)", "Varanasi", "Lucknow", "Mathura", "Ayodhya"],
    localFoods: ["Awadhi Biryani", "Tunday Kababi", "Chaat", "Kulfi", "Petha"],
    festivals: ["Kumbh Mela", "Holi", "Diwali", "Ram Navami", "Lucknow Mahotsav"],
    coordinates: { lat: 26.8467, lng: 80.9462 }
  },
  {
    id: "punjab",
    name: "Punjab",
    image: "/src/assets/golden-temple.jpg",
    description: "The Land of Five Rivers, known for the Golden Temple and rich agricultural heritage.",
    area: "50,362 km²",
    population: "27.7 million",
    capital: "Chandigarh",
    famousPlaces: ["Golden Temple (Amritsar)", "Wagah Border", "Anandpur Sahib", "Patiala", "Chandigarh"],
    localFoods: ["Makki di Roti & Sarson da Saag", "Chole Bhature", "Lassi", "Amritsari Kulcha", "Pinni"],
    festivals: ["Baisakhi", "Gurpurab", "Hola Mohalla", "Karva Chauth", "Lohri"],
    coordinates: { lat: 31.1471, lng: 75.3412 }
  },
  {
    id: "karnataka",
    name: "Karnataka",
    image: "/src/assets/mysore-palace.jpg",
    description: "The Silicon Valley of India, known for IT industry, palaces, and coffee plantations.",
    area: "191,791 km²",
    population: "61.1 million",
    capital: "Bangalore",
    famousPlaces: ["Bangalore", "Mysore", "Hampi", "Coorg", "Gokarna"],
    localFoods: ["Masala Dosa", "Bisi Bele Bath", "Mysore Pak", "Ragi Mudde", "Filter Coffee"],
    festivals: ["Mysore Dasara", "Karaga", "Hampi Festival", "Ugadi", "Kambala"],
    coordinates: { lat: 15.3173, lng: 75.7139 }
  },
  {
    id: "tamilnadu",
    name: "Tamil Nadu",
    image: "/src/assets/meenakshi-temple.jpg",
    description: "The Land of Temples, rich in Dravidian culture and architecture.",
    area: "130,058 km²",
    population: "72.1 million",
    capital: "Chennai",
    famousPlaces: ["Chennai", "Madurai", "Kanyakumari", "Ooty", "Pondicherry"],
    localFoods: ["Idli-Sambar", "Chettinad Chicken", "Pongal", "Rasam", "Filter Coffee"],
    festivals: ["Pongal", "Chennai Music Season", "Natyanjali", "Thaipusam", "Chithirai Festival"],
    coordinates: { lat: 11.1271, lng: 78.6569 }
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    image: "/src/assets/gateway-of-india.jpg",
    description: "The Gateway of India, commercial capital and entertainment hub of the nation.",
    area: "307,713 km²",
    population: "112.4 million",
    capital: "Mumbai",
    famousPlaces: ["Mumbai", "Pune", "Aurangabad", "Nashik", "Lonavala"],
    localFoods: ["Vada Pav", "Pav Bhaji", "Bhel Puri", "Puran Poli", "Modak"],
    festivals: ["Ganesh Chaturthi", "Gudi Padwa", "Navratri", "Ajanta-Ellora Festival", "Pune Festival"],
    coordinates: { lat: 19.7515, lng: 75.3806 }
  }
];
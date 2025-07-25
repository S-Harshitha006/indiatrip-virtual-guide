
export interface TouristPlace {
  id: string;
  name: string;
  location: string;
  description: string;
  history: string;
  culture: string;
  localFoods: string[];
  distance: string;
  travelOptions: string[];
  ticketPrice: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  streetViewUrl: string;
  vrPanoramaUrl: string;
}

export const touristPlaces: TouristPlace[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    description: "An ivory-white marble mausoleum and one of the Seven Wonders of the World",
    history: "Built between 1632-1653 by Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. This UNESCO World Heritage Site represents the finest example of Mughal architecture.",
    culture: "Symbol of eternal love and devotion. The Taj Mahal represents the synthesis of Islamic, Persian, Ottoman Turkish and Indian architectural styles.",
    localFoods: ["Agra Ka Petha", "Dalmoth", "Bedai with Aloo Sabzi", "Jalebi", "Paratha"],
    distance: "233 km from Delhi",
    travelOptions: ["Gatimaan Express Train (2 hours)", "Car via Yamuna Expressway (3-4 hours)", "Flight to Agra (1 hour)"],
    ticketPrice: "₹1100 for Indians, $15 for Foreigners",
    image: "/src/assets/hero-india.jpg",
    coordinates: { lat: 27.1751, lng: 78.0421 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSLEFGMVFpcE9fWjZCVGZMdGVzYkNjbzNnblFCQUFFQ0R3SjZOOUNBVWJNQVo6!2m2!1d27.1749395!2d78.0420954!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-city.jpg"
  },
  {
    id: "red-fort",
    name: "Red Fort (Lal Qila)",
    location: "Delhi",
    description: "A historic walled city and UNESCO World Heritage Site that served as the main residence of the Mughal Emperors",
    history: "Constructed in 1648 by the Mughal Emperor Shah Jahan as the fortified palace. It remained the seat of Mughal power for nearly 200 years.",
    culture: "Symbol of India's sovereignty. The Prime Minister hoists the national flag here every Independence Day. Represents the pinnacle of Mughal creativity.",
    localFoods: ["Chole Bhature", "Paranthe Wali Gali Parathas", "Delhi Chaat", "Butter Chicken", "Kulfi"],
    distance: "Located in Old Delhi",
    travelOptions: ["Delhi Metro (Red Line)", "Auto-rickshaw", "Bus", "Taxi"],
    ticketPrice: "₹35 for Indians, ₹500 for Foreigners",
    image: "/src/assets/red-fort.jpg",
    coordinates: { lat: 28.6562, lng: 77.2410 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d28.6561592!2d77.2408334!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-nature.jpg"
  },
  {
    id: "goa-beach",
    name: "Goa Beaches",
    location: "Goa",
    description: "Golden sand beaches with crystal clear waters, perfect for relaxation and water sports",
    history: "Former Portuguese colony (1510-1961), Goa retains colonial architecture and laid-back culture. Known for its beautiful coastline along the Arabian Sea.",
    culture: "Unique blend of Indian and Portuguese cultures. Famous for its vibrant nightlife, music festivals, and relaxed beach lifestyle.",
    localFoods: ["Fish Curry Rice", "Vindaloo", "Bebinca", "Feni", "Prawn Balchao", "Goan Sausage"],
    distance: "590 km from Mumbai",
    travelOptions: ["Flight (1.5 hours)", "Train from Mumbai (12 hours)", "Car/Bus (10-12 hours)"],
    ticketPrice: "Free (Public beaches)",
    image: "/src/assets/goa-beach.jpg",
    coordinates: { lat: 15.2993, lng: 74.1240 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d15.2832148!2d73.9712835!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-abstract.jpg"
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal (Palace of Winds)",
    location: "Jaipur, Rajasthan",
    description: "A stunning five-story palace made of red and pink sandstone with 953 small windows",
    history: "Built in 1799 by Maharaja Sawai Pratap Singh. Designed to allow royal ladies to observe street festivals while remaining unseen from outside.",
    culture: "Epitome of Rajputana architecture. Represents the rich heritage of Jaipur, the Pink City. Symbol of women's freedom within traditional constraints.",
    localFoods: ["Dal Baati Churma", "Laal Maas", "Ghewar", "Pyaaz Kachori", "Rajasthani Thali"],
    distance: "280 km from Delhi",
    travelOptions: ["Train (4-5 hours)", "Flight (1.5 hours)", "Car (5-6 hours)", "Bus (6-7 hours)"],
    ticketPrice: "₹50 for Indians, ₹200 for Foreigners",
    image: "/src/assets/hawa-mahal.jpg",
    coordinates: { lat: 26.9239, lng: 75.8267 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d26.9239085!2d75.8269109!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-abstract.jpg"
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    description: "A network of brackish lagoons and lakes lying parallel to the Arabian Sea coast",
    history: "These waterways have been used for trade and transportation for over 1000 years. The backwaters were formed by the action of waves and shore currents creating low barrier islands across the mouths of many rivers.",
    culture: "Experience traditional Kerala lifestyle with houseboat stays, Kathakali performances, and Ayurvedic treatments. Known as 'God's Own Country' for its natural beauty.",
    localFoods: ["Appam with Stew", "Karimeen Fish Curry", "Puttu and Kadala", "Coconut Barfi", "Banana Chips"],
    distance: "620 km from Bangalore",
    travelOptions: ["Flight to Kochi (1.5 hours)", "Train to Alleppey (14 hours)", "Car/Bus (12 hours)"],
    ticketPrice: "₹1500-3000 for Houseboat",
    image: "/src/assets/kerala-backwaters.jpg",
    coordinates: { lat: 9.4981, lng: 76.3388 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d9.4980667!2d76.3388176!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-nature.jpg"
  },
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    location: "Mumbai, Maharashtra",
    description: "An arch-monument built during the 20th century in Mumbai, in the Indian state of Maharashtra",
    history: "Built in 1924 to commemorate the visit of King George V and Queen Mary to Mumbai. The monument was the ceremonial entrance to India for Viceroys and the new Governors of Bombay.",
    culture: "Symbol of Mumbai's colonial past and modern aspirations. The area bustles with street vendors, photographers, and tourists. Nearby is the famous Taj Mahal Palace Hotel.",
    localFoods: ["Vada Pav", "Pav Bhaji", "Mumbai Street Chaat", "Bombay Duck Curry", "Solkadhi"],
    distance: "Located in South Mumbai",
    travelOptions: ["Mumbai Local Train", "Taxi/Cab", "Bus", "Metro"],
    ticketPrice: "Free Entry",
    image: "/src/assets/gateway-of-india.jpg",
    coordinates: { lat: 18.9220, lng: 72.8347 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d18.9216631!2d72.8346542!3f0!4f0!5f0.7820865974467",
    vrPanoramaUrl: "/src/assets/panorama-city.jpg"
  },
  {
    id: "mysore-palace",
    name: "Mysore Palace",
    location: "Mysore, Karnataka", 
    description: "A historical palace and royal residence built in Indo-Saracenic architecture",
    history: "Built in 1912 for the Wadiyar dynasty, the palace is renowned for its grandeur and architectural beauty. It was the seat of the Kingdom of Mysore for centuries.",
    culture: "Symbol of Karnataka's royal heritage. Famous for Dasara celebrations when the palace is illuminated with 97,000 light bulbs. A perfect blend of Hindu, Muslim, Rajput and Gothic styles.",
    localFoods: ["Mysore Pak", "Mysore Masala Dosa", "Ragi Mudde", "Obbattu", "Filter Coffee"],
    distance: "140 km from Bangalore",
    travelOptions: ["Car (3 hours)", "Train (3 hours)", "Bus (3.5 hours)", "Flight to Mysore (45 minutes)"],
    ticketPrice: "₹70 for Indians, ₹200 for Foreigners",
    image: "/src/assets/mysore-palace.jpg",
    coordinates: { lat: 12.3052, lng: 76.6551 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d12.3051543!2d76.6551234!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-abstract.jpg"
  },
  {
    id: "golden-temple",
    name: "Golden Temple (Harmandir Sahib)",
    location: "Amritsar, Punjab",
    description: "The holiest shrine of Sikhism, known for its stunning golden facade and spiritual atmosphere",
    history: "Founded in 1577 by Guru Ram Das, the fourth Sikh Guru. The temple was rebuilt in marble and copper in 1809, and the gold plating was added later. It symbolizes the openness of Sikhism to all people.",
    culture: "Sacred to Sikhs worldwide. Famous for its langar (free community kitchen) serving over 100,000 people daily. The temple represents equality, service, and spiritual devotion.",
    localFoods: ["Amritsari Kulcha", "Chole", "Lassi", "Makki di Roti with Sarson da Saag", "Pinni"],
    distance: "450 km from Delhi",
    travelOptions: ["Train (6 hours)", "Flight (1.5 hours)", "Car (7-8 hours)", "Bus (8-9 hours)"],
    ticketPrice: "Free Entry",
    image: "/src/assets/golden-temple.jpg",
    coordinates: { lat: 31.6200, lng: 74.8765 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d31.6199834!2d74.8764567!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-city.jpg"
  },
  {
    id: "hampi",
    name: "Hampi",
    location: "Bellary, Karnataka",
    description: "A UNESCO World Heritage Site with magnificent ruins of the Vijayanagara Empire",
    history: "Capital of the Vijayanagara Empire from 1336 to 1565. Once one of the richest and largest cities in the world during the 16th century. Destroyed by the Deccan sultanates in 1565.",
    culture: "Archaeological wonder with over 1600 monuments. Represents the zenith of South Indian architecture. Sacred landscape with temples, royal complexes, and ancient marketplaces.",
    localFoods: ["Jolada Rotti", "Bisi Bele Bath", "Ragi Sangati", "Coconut Chutney", "Banana Bonda"],
    distance: "340 km from Bangalore",
    travelOptions: ["Train to Hospet (8 hours)", "Car (6 hours)", "Bus (7 hours)", "Flight to Bellary (1 hour)"],
    ticketPrice: "₹40 for Indians, ₹600 for Foreigners",
    image: "/src/assets/hampi-ruins.jpg",
    coordinates: { lat: 15.3350, lng: 76.4600 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d15.3349876!2d76.4599123!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-nature.jpg"
  },
  {
    id: "varanasi-ghats", 
    name: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    description: "Sacred steps leading down to the River Ganges, one of the oldest continuously inhabited cities in the world",
    history: "One of the oldest cities in the world, dating back over 3000 years. Known as Kashi in ancient times, it has been a center of learning and spirituality for millennia.",
    culture: "Spiritual capital of India. Pilgrims come to bathe in the sacred Ganges, perform religious ceremonies, and seek moksha (liberation). Famous for its evening aarti ceremony.",
    localFoods: ["Kachori Sabzi", "Chaat", "Thandai", "Banarasi Paan", "Malaiyo"],
    distance: "320 km from Lucknow",
    travelOptions: ["Train (5-6 hours from Delhi)", "Flight (1.5 hours)", "Car (8 hours)", "Bus (10 hours)"],
    ticketPrice: "Free (Ghats), ₹25 for Kashi Vishwanath Temple",
    image: "/src/assets/varanasi-ghats.jpg",
    coordinates: { lat: 25.3176, lng: 82.9739 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d25.3175987!2d82.9738654!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-abstract.jpg"
  },
  {
    id: "ajanta-ellora",
    name: "Ajanta and Ellora Caves",
    location: "Aurangabad, Maharashtra",
    description: "Ancient Buddhist, Hindu and Jain rock-cut cave monuments dating from 2nd century BCE to 6th century CE",
    history: "Ajanta caves date from 2nd century BCE to 6th century CE, while Ellora caves were built between 6th to 10th century CE. These caves showcase the evolution of Indian art and architecture over centuries.",
    culture: "UNESCO World Heritage Sites representing religious harmony. The caves contain some of the finest examples of ancient Indian art, sculptures, and paintings depicting Buddhist Jataka tales.",
    localFoods: ["Naan Qalia", "Tahri", "Sheermal", "Baida Roti", "Mastani"],
    distance: "350 km from Mumbai",
    travelOptions: ["Flight to Aurangabad (1 hour)", "Train (7 hours)", "Car (6-7 hours)", "Bus (8 hours)"],
    ticketPrice: "₹40 for Indians, ₹600 for Foreigners",
    image: "/src/assets/ajanta-ellora.jpg",
    coordinates: { lat: 20.5527, lng: 75.7026 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d20.5526789!2d75.7025432!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-city.jpg"
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    location: "Madurai, Tamil Nadu",
    description: "A historic Hindu temple dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar",
    history: "Originally built in the 6th century CE, the temple has been mentioned in texts dating back to the 1st century CE. The current structure was built during the 16th-17th centuries.",
    culture: "One of the most important temples in Tamil Nadu. Famous for its stunning Dravidian architecture with colorful gopurams (temple towers) covered in thousands of sculptures.",
    localFoods: ["Jigarthanda", "Madurai Mutton Curry", "Paruthi Paal", "Kari Dosai", "Panangkarkandu"],
    distance: "460 km from Chennai",
    travelOptions: ["Flight (1.5 hours)", "Train (8 hours)", "Car (7-8 hours)", "Bus (9 hours)"],
    ticketPrice: "Free Entry, Special Darshan ₹50",
    image: "/src/assets/meenakshi-temple.jpg",
    coordinates: { lat: 9.9195, lng: 78.1193 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d9.9194567!2d78.1192876!3f0!4f0!5f0.7820865974627469",
    vrPanoramaUrl: "/src/assets/panorama-nature.jpg"
  }
];

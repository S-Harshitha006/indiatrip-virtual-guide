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
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSLEFGMVFpcE9fWjZCVGZMdGVzYkNjbzNnblFCQUFFQ0R3SjZOOUNBVWJNQVo6!2m2!1d27.1749395!2d78.0420954!3f0!4f0!5f0.7820865974627469"
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
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d28.6561592!2d77.2408334!3f0!4f0!5f0.7820865974627469"
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
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d15.2832148!2d73.9712835!3f0!4f0!5f0.7820865974627469"
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
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d26.9239085!2d75.8269109!3f0!4f0!5f0.7820865974627469"
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
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d9.4980667!2d76.3388176!3f0!4f0!5f0.7820865974627469"
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
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d18.9216631!2d72.8346542!3f0!4f0!5f0.7820865974627469"
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    description: "Historic Hindu temple dedicated to Goddess Meenakshi, famous for its colorful gopurams and intricate sculptures",
    history: "Built between 12th-17th centuries by Pandyan Dynasty. Rebuilt by Tirumalai Nayak in 1623 CE. One of the most important temples in Tamil Nadu with 2500 years of history.",
    culture: "Center of Tamil culture and spirituality. Famous for its annual Meenakshi Thirukalyanam festival. The temple represents Dravidian architecture at its finest.",
    localFoods: ["Madurai Jigarthanda", "Paruthi Paal", "Kari Dosai", "Mutton Chukka", "Paneer Roast"],
    distance: "460 km from Chennai",
    travelOptions: ["Flight to Madurai (1 hour)", "Train (8-10 hours)", "Car/Bus (7-8 hours)"],
    ticketPrice: "Free Entry",
    image: "/src/assets/meenakshi-temple.jpg",
    coordinates: { lat: 9.9195, lng: 78.1193 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d9.9194845!2d78.1193563!3f0!4f0!5f0.7820865974627469"
  },
  {
    id: "mysore-palace",
    name: "Mysore Palace",
    location: "Mysore, Karnataka",
    description: "Indo-Saracenic palace and royal residence of the Wadiyar dynasty and the Kingdom of Mysore",
    history: "The current palace was constructed between 1912-1940. It replaced the old palace that was destroyed by fire. Mysore was the capital of the Kingdom of Mysore for nearly six centuries.",
    culture: "Symbol of Karnataka's royal heritage. Famous for Dussehra celebrations with grand processions and illuminations. Represents the synthesis of Hindu, Muslim, Rajput and Gothic architectural styles.",
    localFoods: ["Mysore Pak", "Mysore Masala Dosa", "Rava Idli", "Obbattu", "Kesari Bath"],
    distance: "150 km from Bangalore",
    travelOptions: ["Train (3 hours)", "Car/Bus (3-4 hours)", "Flight to Mysore (45 minutes)"],
    ticketPrice: "₹70 for Indians, ₹200 for Foreigners",
    image: "/src/assets/mysore-palace.jpg",
    coordinates: { lat: 12.3051, lng: 76.6551 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d12.3051543!2d76.6551441!3f0!4f0!5f0.7820865974627469"
  },
  {
    id: "golden-temple",
    name: "Golden Temple (Harmandir Sahib)",
    location: "Amritsar, Punjab",
    description: "The holiest gurdwara and most important pilgrimage site of Sikhism, covered in gold",
    history: "Founded in 1577 by the fourth Sikh Guru, Ram Das. The temple was repeatedly destroyed and rebuilt. The present-day temple was rebuilt in 1764 and covered with gold in early 19th century.",
    culture: "Spiritual center of Sikhism. Famous for its community kitchen (langar) serving free meals to all. Symbol of equality, brotherhood and service to humanity.",
    localFoods: ["Amritsari Kulcha", "Chole Bhature", "Lassi", "Rajma Chawal", "Aloo Paratha"],
    distance: "460 km from Delhi",
    travelOptions: ["Train (6-7 hours)", "Flight (1.5 hours)", "Car/Bus (7-8 hours)"],
    ticketPrice: "Free Entry",
    image: "/src/assets/golden-temple.jpg",
    coordinates: { lat: 31.6200, lng: 74.8765 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d31.6199834!2d74.8764815!3f0!4f0!5f0.7820865974627469"
  },
  {
    id: "varanasi-ghats",
    name: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    description: "Series of steps leading down to the River Ganges, considered the spiritual capital of India",
    history: "Varanasi is one of the oldest continuously inhabited cities in the world, dating back to 11th century BC. The ghats were built during the 18th century by various rulers and nobles.",
    culture: "Holiest city in Hinduism. Witness daily rituals, Ganga Aarti, and spiritual ceremonies. Believed that dying here provides moksha (liberation from cycle of rebirth).",
    localFoods: ["Kachori Sabzi", "Chaat", "Banarasi Paan", "Malaiyo", "Tamatar Chaat"],
    distance: "320 km from Lucknow",
    travelOptions: ["Train (4-5 hours)", "Flight (1 hour)", "Car/Bus (6-7 hours)"],
    ticketPrice: "Free Entry",
    image: "/src/assets/varanasi-ghats.jpg",
    coordinates: { lat: 25.2820, lng: 82.9739 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d25.2820151!2d82.9738918!3f0!4f0!5f0.7820865974627469"
  },
  {
    id: "lotus-temple",
    name: "Lotus Temple",
    location: "New Delhi",
    description: "Bahá'í House of Worship notable for its flowerlike shape, made of white marble petals",
    history: "Completed in 1986, designed by Iranian architect Fariborz Sahba. It was the last of seven major Bahá'í temples built around the world.",
    culture: "Symbol of unity in diversity. Open to all regardless of religion. The temple promotes meditation and prayer in a peaceful environment.",
    localFoods: ["Delhi Chaat", "Paranthe Wali Gali Parathas", "Rajma Chawal", "Chole Bhature", "Kulfi"],
    distance: "Located in South Delhi",
    travelOptions: ["Delhi Metro (Violet Line)", "Auto-rickshaw", "Bus", "Taxi"],
    ticketPrice: "Free Entry",
    image: "/src/assets/lotus-temple.jpg",
    coordinates: { lat: 28.5535, lng: 77.2588 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d28.5535244!2d77.2587822!3f0!4f0!5f0.7820865974627469"
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    location: "New Delhi",
    description: "A 73-meter tall minaret made of red sandstone and marble, and a UNESCO World Heritage Site",
    history: "Construction began in 1192 by Qutb-ud-din Aibak and was completed by his successor Iltutmish. It commemorates the victory of Muhammad Ghori over the Rajput king Prithviraj Chauhan.",
    culture: "Represents the beginning of Muslim rule in India. Example of Indo-Islamic Afghan architecture. The complex includes several ancient monuments and ruins.",
    localFoods: ["Delhi Chaat", "Paranthe Wali Gali Parathas", "Butter Chicken", "Kebabs", "Kulfi"],
    distance: "Located in South Delhi",
    travelOptions: ["Delhi Metro (Yellow Line)", "Auto-rickshaw", "Bus", "Taxi"],
    ticketPrice: "₹35 for Indians, ₹500 for Foreigners",
    image: "/src/assets/qutub-minar.jpg",
    coordinates: { lat: 28.5244, lng: 77.1855 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d28.5244005!2d77.1854972!3f0!4f0!5f0.7820865974627469"
  },
  {
    id: "khajuraho-temples",
    name: "Khajuraho Temples",
    location: "Khajuraho, Madhya Pradesh",
    description: "Group of Hindu and Jain temples famous for their nagara-style architectural symbolism and erotic sculptures",
    history: "Built between 950-1050 CE by the Chandela dynasty. Originally 85 temples, only 25 survive today. Rediscovered by British engineer T.S. Burt in 1838.",
    culture: "UNESCO World Heritage Site representing medieval Indian art and architecture. The sculptures depict various aspects of life including spiritual teachings through tantra.",
    localFoods: ["Poha", "Bafla", "Kheer", "Dal Bati", "Malpua"],
    distance: "620 km from Delhi",
    travelOptions: ["Flight to Khajuraho (1.5 hours)", "Train (12 hours)", "Car/Bus (10-12 hours)"],
    ticketPrice: "₹40 for Indians, ₹600 for Foreigners",
    image: "/src/assets/khajuraho-temples.jpg",
    coordinates: { lat: 24.8318, lng: 79.9199 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d24.8318054!2d79.9199218!3f0!4f0!5f0.7820865974627469"
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram (Mamallapuram)",
    location: "Tamil Nadu",
    description: "7th-8th century rock-cut monuments and shore temple, UNESCO World Heritage Site",
    history: "Built during the reign of Narasimhavarman I (630-668 CE) of the Pallava dynasty. It was a major seaport of the South Indian Pallava kingdom.",
    culture: "Cradle of Dravidian architecture. Famous for monolithic rock temples, cave sanctuaries, and stone sculptures. Annual dance festival showcases classical Indian dance forms.",
    localFoods: ["Fish Curry", "Coconut Rice", "Appam", "Sambar", "Rasam"],
    distance: "58 km from Chennai",
    travelOptions: ["Car/Bus (1.5 hours)", "Train to Chengalpattu + Bus (2 hours)"],
    ticketPrice: "₹40 for Indians, ₹600 for Foreigners",
    image: "/src/assets/mahabalipuram.jpg",
    coordinates: { lat: 12.6269, lng: 80.1928 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d12.6269243!2d80.1928060!3f0!4f0!5f0.7820865974627469"
  },
  {
    id: "rock-garden",
    name: "Rock Garden",
    location: "Chandigarh",
    description: "Unique sculpture garden created entirely from industrial and home waste materials",
    history: "Created by Nek Chand starting in 1957. Built secretly over 18 years using recycled materials. Opened to public in 1976 and now covers 40 acres.",
    culture: "Testament to creativity and environmental consciousness. Features thousands of sculptures made from broken ceramics, bottles, and industrial waste. Symbol of art from waste.",
    localFoods: ["Chole Bhature", "Rajma Chawal", "Amritsari Kulcha", "Lassi", "Butter Chicken"],
    distance: "260 km from Delhi",
    travelOptions: ["Train (4 hours)", "Car/Bus (5 hours)", "Flight (1 hour)"],
    ticketPrice: "₹30 for Indians, ₹100 for Foreigners",
    image: "/src/assets/rock-garden.jpg",
    coordinates: { lat: 30.7518, lng: 76.8131 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d30.7518025!2d76.8131195!3f0!4f0!5f0.7820865974627469"
  },
  {
    id: "padmanabhapuram-palace",
    name: "Padmanabhapuram Palace",
    location: "Thuckalay, Tamil Nadu (near Kerala border)",
    description: "Largest wooden palace complex in Asia, showcasing traditional Kerala architecture",
    history: "Built in 1601 CE by Iravi Varma Kulasekhara Perumal. Served as the capital of the former princely state of Travancore. Renowned for its intricate woodwork and traditional architecture.",
    culture: "Exemplifies traditional Kerala architectural style with sloping roofs, wooden carvings, and courtyards. Represents the royal heritage of Travancore kingdom.",
    localFoods: ["Appam with Stew", "Kerala Fish Curry", "Puttu", "Banana Chips", "Coconut Water"],
    distance: "20 km from Nagercoil, 65 km from Trivandrum",
    travelOptions: ["Train to Nagercoil + Bus (30 minutes)", "Car from Trivandrum (1.5 hours)"],
    ticketPrice: "₹35 for Indians, ₹150 for Foreigners",
    image: "/src/assets/padmanabhapuram-palace.jpg",
    coordinates: { lat: 8.2441, lng: 77.3269 },
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSK0FGMVFpcE1VaFRqOXBlTVZBSnVjSGZNRFdRQ0xnZkxwRzNfX1JfVlQ!2m2!1d8.2441139!2d77.3269472!3f0!4f0!5f0.7820865974627469"
  }
];
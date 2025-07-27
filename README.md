# 🇮🇳 Explore India - Virtual Tourism Platform

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://explore-india-demo.vercel.app)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-purple)](https://vitejs.dev/)

A comprehensive virtual tourism platform showcasing the incredible beauty and cultural heritage of India through immersive 360° VR experiences, interactive maps, and detailed destination guides.

## ✨ Features

### 🎯 Core Features
- **360° Virtual Tours** - Immersive VR experiences compatible with Oculus/Meta Quest headsets
- **Interactive State Explorer** - Detailed information about all Indian states
- **Smart Booking System** - Complete ticket booking with confirmation
- **Responsive Design** - Perfect experience across all devices
- **Dark/Light Mode** - Theme switching with system preference detection

### 🚀 Advanced Features
- **WebXR Support** - Full VR headset compatibility
- **Voice Guide** - Audio descriptions for tourist places
- **Recently Viewed** - Track and revisit favorite destinations
- **Real-time Search** - Filter places and states instantly
- **Fun Facts** - Random Indian trivia on each visit
- **Smooth Animations** - Framer Motion powered interactions

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for blazing fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation

### VR/3D
- **Three.js** for 3D rendering
- **WebXR API** for VR headset support
- **React Three Fiber** for React integration

### UI Components
- **shadcn/ui** component library
- **Lucide React** for icons
- **Embla Carousel** for image carousels

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/explore-india.git
   cd explore-india
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Navigation component
│   ├── Footer.tsx       # Footer component
│   ├── WebXRViewer.tsx  # VR/360° viewer
│   └── ...
├── pages/               # Route components
│   ├── Index.tsx        # Homepage
│   ├── Explore.tsx      # State exploration
│   ├── PlaceDetail.tsx  # Place details with VR
│   ├── Booking.tsx      # Booking system
│   └── About.tsx        # About page
├── data/                # Static data
│   ├── touristPlaces.ts # Tourist places data
│   ├── statesData.ts    # Indian states data
│   └── funFacts.ts      # Fun facts data
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── assets/              # Images and static files
```

## 🎮 VR Experience

### Supported Devices
- **Meta Quest 2/3**
- **Oculus Rift/Rift S**
- **HTC Vive**
- **Windows Mixed Reality**
- **Mobile VR** (Cardboard, Gear VR)

### VR Features
- **360° Panoramic Views** of famous Indian landmarks
- **Gaze-based Navigation** for hands-free exploration
- **Immersive Audio** with ambient sounds
- **WebXR Compatible** - Works directly in browser

## 📱 Mobile Responsive

Fully optimized for:
- **📱 Mobile** (320px - 768px)
- **📱 Tablet** (768px - 1024px)
- **💻 Desktop** (1024px+)

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#FF6B35) - Represents India's vibrant culture
- **Secondary**: Pink (#E91E63) - Symbolizes festivals and celebrations
- **Accent**: Green (#4CAF50) - Represents nature and heritage

### Typography
- **Font**: Inter - Modern, clean, and highly readable
- **Headings**: Bold weights for impact
- **Body**: Regular weight for readability

## 🗺 Destinations Covered

### Featured States (28 total)
- **Rajasthan** - Land of Kings
- **Kerala** - God's Own Country  
- **Goa** - Beach Paradise
- **Himachal Pradesh** - Mountain Beauty
- **Tamil Nadu** - Cultural Heritage
- **And 23 more...**

### Popular Places (150+ locations)
- Taj Mahal, Agra
- Red Fort, Delhi
- Hawa Mahal, Jaipur
- Gateway of India, Mumbai
- Golden Temple, Amritsar
- And many more...

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Manual Deployment
1. Build: `npm run build`
2. Upload `dist` folder to your hosting provider

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 👥 Team

- **Arjun Kumar** - Full Stack Developer
- **Priya Sharma** - UX Designer  
- **Rahul Patel** - Frontend Developer

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Indian Tourism Ministry** for destination information
- **Unsplash** for beautiful photography
- **Google Street View** for 360° imagery
- **Open Source Community** for amazing tools

## 📞 Contact

- **Email**: team@exploreindia.com
- **GitHub**: [@exploreindia](https://github.com/exploreindia)
- **Website**: [exploreindia.vercel.app](https://exploreindia.vercel.app)

---

<div align="center">

**Made with ❤️ for India's Tourism**

[![Star this repo](https://img.shields.io/github/stars/yourusername/explore-india?style=social)](https://github.com/yourusername/explore-india)

</div>

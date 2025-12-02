# SoundSpot Prototype

A complete web application for SoundSpot - an interactive music platform connecting artists and superfans through live concerts, exclusive content, and community features.

## Features

### 🎵 Live Interactive Concerts
- Real-time streaming with up to 500 concurrent viewers
- Interactive reactions (hearts, fire, celebrate) with dynamic background effects
- Live polling for setlist decisions
- Real-time chat with fan badges and moderation
- Milestone achievements and visual feedback
- Pay-per-event ticketing ($5-$15)

### 👥 Artist-Fan Community
- Private messaging between artists and fans
- Backstage feed with voice notes, demos, and exclusive content
- Fan-to-fan chat by artist communities
- Artist profiles with behind-the-scenes content
- Direct messaging for high-tier supporters

### 📊 Artist Dashboard
- Event scheduling and management
- Analytics and performance metrics
- Content upload and management
- Revenue tracking
- Fan engagement insights

### 🎫 Ticketing & Payments
- Event ticketing system
- Payment processing flow
- Subscription tiers (Free, Student $4.99, Superfan $10.99)
- Ticket purchase and management

### 👤 User Profiles
- Fan badges and achievements
- Event history
- Subscription management
- Activity tracking

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd soundspot-prototype
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
soundspot-prototype/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── events/
│   │   ├── page.tsx          # Events listing
│   │   ├── [id]/page.tsx     # Event detail & ticketing
│   │   └── live/page.tsx     # Live event experience
│   ├── dashboard/
│   │   └── page.tsx          # Artist dashboard
│   ├── community/
│   │   └── page.tsx          # Community & messaging
│   ├── artists/
│   │   └── page.tsx          # Artists listing
│   └── profile/
│       └── page.tsx          # User profile
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   └── Footer.tsx            # Footer component
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Key Pages

- **/** - Landing page with features and CTA
- **/events** - Browse all upcoming live events
- **/events/live** - Live interactive concert experience
- **/events/[id]** - Event details and ticket purchase
- **/dashboard** - Artist dashboard for event management
- **/community** - Artist-fan messaging and backstage feed
- **/artists** - Discover and follow artists
- **/profile** - User profile with badges and activity

## Features Implementation

### Live Event Page (`/events/live`)
- Real-time reactions with floating animations
- Dynamic background color changes based on reactions
- Live polling with real-time vote updates
- Chat interface with fan badges
- Viewer count updates
- Milestone achievement notifications

### Artist Dashboard (`/dashboard`)
- Overview with key metrics
- Event management
- Analytics and insights
- Content upload interface
- Quick actions for common tasks

### Community Page (`/community`)
- Artist list with online status
- Real-time messaging interface
- Backstage feed with different content types
- Fan badges in chat
- Private messaging feel

## Design Philosophy

The app follows a modern, mobile-first design with:
- Gradient color schemes (primary blue to accent purple)
- Smooth animations and transitions
- Responsive layouts for all screen sizes
- Clean, intuitive user interfaces
- Emphasis on real-time interactions

## Future Enhancements

- WebSocket integration for real-time features
- User authentication system
- Payment processing integration (Stripe)
- Video streaming integration
- Mobile app versions (iOS/Android)
- Advanced analytics dashboard
- Notification system
- Social sharing features

## License

This is a prototype project for educational purposes.

## Contact

For questions or feedback, please refer to the project documentation.


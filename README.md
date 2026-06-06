# Euro Digital

AI-powered digital services platform built with React, TypeScript, and Vite. The site showcases AI business solutions including automation, promotion, chatbots, CRM, and a website builder product.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Routing:** React Router 7
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Video:** Bunny Stream (CDN-hosted MP4 with iframe fallback)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Sections.tsx
│   ├── BunnyStreamPlayer.tsx
│   ├── ServiceHeroVideo.tsx
│   ├── ServiceHeroBunny.tsx
│   ├── ServiceHeroNativeVideo.tsx
│   ├── FAQ.tsx
│   ├── ScrollToTop.tsx
│   ├── SideWidget.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Modal.tsx
├── pages/            # Route-level page components
│   ├── Home.tsx
│   ├── Contact.tsx
│   ├── Services.tsx
│   ├── AIBusinessAutomation.tsx
│   ├── AIBusinessPromotion.tsx
│   ├── AIAgentTalkTime.tsx
│   ├── AIAutomatedChatbot.tsx
│   ├── AIAddonServices.tsx
│   ├── IndustrySpecificAI.tsx
│   ├── FunnelBuilder.tsx
│   ├── EDCRM.tsx
│   ├── AIBuilder.tsx
│   ├── ProductPage.tsx
│   ├── LoginRedirect.tsx
│   ├── PrivacyPolicy.tsx
│   └── TermsAndConditions.tsx
├── layouts/          # Layout wrappers for route groups
│   ├── ServicesLayout.tsx
│   └── ProductsLayout.tsx
├── data/             # Static data (FAQ content, etc.)
├── utils/            # Utility functions (Bunny Stream helpers)
├── App.tsx           # Root component with route definitions
├── main.tsx          # Entry point
└── index.css         # Global styles and CSS variables
```

## Routes

| Path | Page |
|------|------|
| `/` | Homepage |
| `/contact` | Contact |
| `/login` | Login redirect |
| `/services` | Services overview |
| `/services/ai-business-automation` | AI Business Automation |
| `/services/ai-business-promotion` | AI Business Promotion |
| `/services/ai-agent-talk-time` | AI Agent Talk Time |
| `/services/ai-automated-chatbot` | AI Automated Chatbot |
| `/services/ai-addon-services` | AI Add-on Services |
| `/services/industry-specific` | Industry Specific AI |
| `/products/website-builder` | AI Website Builder |
| `/products/edcrm` | ED-CRM |
| `/products/emotionai` | Emotion AI |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |

## Environment Variables

Optional Bunny Stream CDN overrides (defaults are built-in):

```env
VITE_BUNNY_STREAM_CDN_HOST=vz-70709547-6b5.b-cdn.net
VITE_BUNNY_STREAM_CDN_HOST_667434=vz-a8afae03-850.b-cdn.net
```

## Key Features

- **Video Player:** Custom video player with Bunny Stream integration, play/pause overlays, buffering states, and single-video-at-a-time playback coordination
- **Service Pages:** Each service has a dedicated page with hero video, feature list, pricing tiers, and FAQ section
- **Product Pages:** Flexible product page template supporting multiple pricing layouts (grid, stacked, spotlight, GHL comparison table)
- **Website Builder Showcase:** Interactive preview modal displaying full AI-generated website examples
- **Responsive Design:** Mobile-first layouts with Tailwind CSS
- **Smooth Animations:** Page transitions and scroll-triggered animations via Framer Motion

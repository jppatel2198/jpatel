# Jenish Patel - BMW-Themed Portfolio

A professional portfolio website with sophisticated BMW-inspired design elements, featuring dual themes: **Dark Mode with Isle of Man Green** and **Light Mode with Yas Marina Blue**. Includes buttery-smooth transitions and premium automotive aesthetics throughout.

## 🎨 Dual Theme System

### Dark Mode - Isle of Man Green 🌲
- Deep black background (#000000)
- Isle of Man Green accents (#1e4d3b)
- Perfect for late-night coding sessions
- Classic BMW motorsport heritage

### Light Mode - Yas Marina Blue 💙
- Clean light background (#f5f5f7)
- BMW Yas Marina Blue accents (#2D5F8D)
- Modern, professional appearance  
- Eye-friendly for daytime use
- Inspired by BMW M's iconic Abu Dhabi circuit color

**Theme toggles instantly and saves your preference!**

## 🏎️ BMW-Themed Features

### Visual Design Elements

**1. M-Sport Tri-Color Stripe**
- Iconic BMW M-Sport racing stripe (blue/purple/red) appears on:
  - Navigation tabs (active/hover states)
  - Section headers (animates on scroll)
  - Glass tile hover effects
- Represents performance and precision

**2. Carbon Fiber Texture**
- Subtle woven carbon fiber pattern overlay on the entire site
- Adds depth and premium motorsport feel
- Opacity adjusts based on light/dark mode
- Non-intrusive, professional appearance

**3. Dynamic Accent Colors**
- **Dark Mode**: Isle of Man Green (#1e4d3b)
- **Light Mode**: Yas Marina Blue (#2D5F8D)
- Used consistently in tech tags, hover effects, and highlights
- All colors transition smoothly when switching modes

**4. Dashboard-Style Gauges**
- Circular performance metrics on the home page
- Displays GPA, Technologies, Projects, and Graduation year
- Animated SVG circles with dynamic accent glow
- **Counter animations that count up from 0 on scroll**
- Colors adapt to current theme (green or blue)
- Mimics BMW's instrument cluster aesthetic

**5. Hexagonal Pattern Background**
- Subtle hex pattern inspired by BMW kidney grille
- Visible on stats dashboard section
- Adds texture without overwhelming content

**6. BMW Startup Animation**
- Page loads with BMW-style ignition sequence (index page only)
- Features:
  - "JP" initials with fade-in animation
  - M-Sport tri-color stripe expansion
  - "READY" indicator (like BMW's display)
- Appears only on first page load

**7. Dual Control Toggle** 🎛️
- **Light/Dark Mode Toggle** - Switch between themes (☀/🌙)
- **Sport Mode Toggle** - Activate enhanced animations (🔴)
- Fixed position in bottom right corner
- Theme preference saved to localStorage
- Smooth transitions between modes

## ✨ Smooth Transitions & Animations

### Scroll-Triggered Animations
- **Glass tiles** fade in as you scroll down the page
- Staggered timing creates a waterfall effect
- **Section headers** slide in with M-Sport stripe expansion
- **Timeline items** alternate entrance directions (left/right)
- Uses Intersection Observer API for optimal performance

### Interactive Element Transitions

**Glass Tiles**
- Smooth lift and scale on hover (translateY + scale)
- Enhanced glow effect with theme-appropriate shadow
- Background lightens on interaction
- Cubic-bezier easing for natural motion

**Buttons**
- Circular ripple effect expands from center on hover
- Smooth color transition from glass to accent color
- Lift animation with shadow
- All transitions use cubic-bezier timing

**Tech Tags**
- Scale up on hover with glow effect
- Circular ripple background animation
- Border color transition to accent
- Background colors adapt to theme

**Navigation Links**
- Slight lift animation on hover
- M-Sport stripe reveals from left to right
- Color transition to theme accent
- Consistent with BMW's precision design

**Contact Items**
- Slide right on hover
- Left accent bar (theme color) expands vertically
- Background lightens
- Label color transitions

### Entrance Animations

**Hero Section**
- H1 fades up first (0.5s delay)
- H2 follows (0.7s delay)
- Paragraph last (0.9s delay)
- Sequential reveal creates professional entrance

**Dashboard Gauges**
- Numbers count up from 0 to target value
- Smooth animation over ~1 second
- Triggers when dashboard enters viewport
- SVG circles draw progressively with theme colors

**Section Headers**
- Fade in with upward slide
- M-Sport stripe draws from left (0.8s)
- Creates visual hierarchy
- Coordinates with content below

**Page Load**
- Entire page fades in smoothly (0.6s)
- Prevents harsh appearance changes
- Consistent across all pages

## 🎨 Color Palettes

### Dark Mode Colors
```css
Background: #000000
Primary Text: #ffffff
Secondary Text: #b0b0b0
Accent: #1e4d3b (Isle of Man Green)
Accent Light: #2a6b50
M-Sport Blue: #1c69d4
M-Sport Purple: #8b2f8b
M-Sport Red: #e31e24
```

### Light Mode Colors
```css
Background: #f5f5f7
Primary Text: #1a1a1a
Secondary Text: #4a4a4a
Accent: #2D5F8D (Yas Marina Blue)
Accent Light: #4A8BC2
M-Sport Blue: #1c69d4
M-Sport Purple: #8b2f8b
M-Sport Red: #e31e24
```

## 📁 File Structure

```
portfolio/
├── index.html          # Home page with hero & gauges
├── projects.html       # Project showcase
├── education.html      # Academic background
├── experience.html     # Work experience & skills
├── contact.html        # Contact information
└── style.css          # All styling & animations (20KB)
```

## 🚀 Getting Started

1. Update contact information in `contact.html`
2. Add your project links in `projects.html`
3. Customize the startup initials (currently "JP")
4. Add your actual email, phone, and social media links
5. Upload to your preferred hosting platform (GitHub Pages, Netlify, Vercel, etc.)

## 🎯 Design Philosophy

This portfolio balances:
- **Professional** - Clean, readable, business-appropriate
- **Distinctive** - BMW motorsport heritage and premium feel
- **Versatile** - Two beautiful themes for any environment
- **Functional** - Easy navigation and clear information hierarchy
- **Engaging** - Interactive elements and smooth animations
- **Performant** - Optimized transitions using modern web APIs

The BMW theme isn't overwhelming - it's sophisticated accents that convey attention to detail, precision, and performance - qualities that reflect well on a technical professional.

## 🔧 Animation Features

### Performance Optimizations
- **Intersection Observer** for scroll animations (better than scroll events)
- **CSS transitions** instead of JS animations where possible
- **Cubic-bezier easing** for natural motion
- **Transform-based** animations (GPU accelerated)
- **Will-change** hints for frequently animated properties

### Timing Functions
- `cubic-bezier(0.4, 0, 0.2, 1)` - Material Design standard easing
- Consistent 0.4-0.8s durations across similar elements
- Staggered delays (0.1s increments) for grid items
- Longer durations (0.8s) for entrance animations

### Accessibility
- Respects `prefers-reduced-motion` preferences
- No motion-triggered epilepsy concerns
- Smooth, predictable animations
- All interactive elements have clear visual feedback

## 💡 Control Modes

**Light/Dark Mode Toggle**
- Click ☀ to switch to light mode (Yas Marina Blue)
- Click 🌙 to switch back to dark mode (Isle of Man Green)
- Preference saved automatically to localStorage
- Persists across page navigation
- Instant theme switching with smooth transitions

**Sport Mode Toggle**
- Click "SPORT MODE" to activate enhanced animations
- Pulsing glow effects on all glass tiles
- More dynamic visual feedback
- Increased animation intensity
- Can be toggled on/off independently of theme
- State doesn't persist across page loads

## 🎨 Customization Tips

- **Gauge values**: Update in index.html dashboard section
- **Colors**: Modify CSS variables at the top of style.css
- **Initials**: Change "JP" in startup animation (index.html)
- **Timing**: Adjust animation durations in CSS
- **Easing**: Modify cubic-bezier values for different feels
- **Carbon fiber**: Change opacity in body::after for subtlety
- **Theme colors**: Update Yas Marina Blue or Isle of Man Green hex values

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- All modern mobile browsers
- Graceful degradation for older browsers
- localStorage support for theme persistence

## 🎭 Feature Showcase

**On scroll, you'll see:**
1. Section headers fade in with stripe drawing
2. Glass tiles cascade in with staggered timing
3. Timeline items alternate directions
4. Dashboard gauges count up
5. Everything coordinates beautifully

**On hover, experience:**
1. Tiles lift and glow (green or blue!)
2. Buttons ripple from center
3. Tags scale and pulse
4. Links rise slightly
5. Contact items slide right

**On theme switch:**
1. Smooth color transitions (0.5s)
2. All accent colors update instantly
3. Background fades to new color
4. Glass effects adjust opacity
5. Maintains visual hierarchy

**On page load:**
1. Smooth fade-in (0.6s)
2. Hero content sequential reveal
3. BMW startup animation (index only)
4. Saved theme loads automatically
5. Instant perceived performance

## 🌈 Why Two Themes?

**Dark Mode (Isle of Man Green)**
- Reduces eye strain in low light
- Classic, sophisticated look
- Battery-friendly on OLED screens
- Perfect for late-night browsing
- Traditional BMW racing heritage

**Light Mode (Yas Marina Blue)**
- Better readability in bright environments
- Modern, vibrant appearance
- Professional for daytime presentations
- Iconic BMW M color from Abu Dhabi GP
- That distinctive metallic blue pop

---

**Built with**: HTML5, CSS3, JavaScript (Vanilla)  
**Inspired by**: BMW Design Language, Apple UI, Modern Glassmorphism  
**Color Reference**: BMW Isle of Man Green, BMW Yas Marina Blue  
**Animation**: Intersection Observer API, CSS Transitions & Animations  
**Performance**: GPU-accelerated transforms, optimized repaints  
**Storage**: localStorage for theme persistence

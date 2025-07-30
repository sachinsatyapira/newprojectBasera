# MoneyTree Realty Website

A modern, responsive real estate website for MoneyTree Realty - your trusted partner in real estate investment and property management.

## 🌟 Features

### Core Functionality
- **Modern Design**: Clean, professional layout with a green theme representing growth and prosperity
- **Responsive**: Fully responsive design that works on all devices (desktop, tablet, mobile)
- **Interactive Tools**: Built-in calculators for mortgages, home valuations, ROI, and refinancing
- **Contact Forms**: Professional contact forms with validation
- **Property Search**: Property search functionality with filters
- **Smooth Navigation**: Smooth scrolling and modern navigation with dropdown menus

### Services Offered
- **Buying Services**: Market analysis, property search, negotiation support, closing assistance
- **Selling Services**: Home valuation, professional photography, marketing strategy, open houses
- **Investment Planning**: Market research, ROI analysis, portfolio planning, risk assessment
- **Property Management**: Tenant screening, rent collection, maintenance coordination, financial reporting

### Interactive Calculators
1. **Mortgage Calculator**: Calculate monthly payments based on home price, down payment, interest rate, and loan term
2. **Home Value Estimator**: Get property value estimates based on square footage, bedrooms, and bathrooms
3. **Investment ROI Calculator**: Analyze potential returns on real estate investments
4. **Refinance Calculator**: Compare current vs. new mortgage payments to see potential savings

### Technical Features
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **CSS Custom Properties**: Consistent theming and easy customization
- **Intersection Observer API**: Smooth scroll animations and effects
- **Form Validation**: Client-side form validation with error handling
- **Modal System**: Professional modal dialogs for calculators
- **Mobile Navigation**: Animated hamburger menu for mobile devices
- **Notification System**: User feedback system for form submissions and interactions

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Node.js (optional, for development server)

### Installation
1. Clone or download the project files
2. Open the project directory
3. Install dependencies (optional):
   ```bash
   npm install
   ```

### Running the Website
Choose one of these methods:

#### Method 1: Direct File Access
- Open `index.html` directly in your web browser

#### Method 2: Development Server (Recommended)
```bash
npm run dev
# or
npm start
```
Then open http://localhost:3000 in your browser

#### Method 3: Python Server
```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

## 📁 Project Structure

```
moneytree-realty-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── package.json        # NPM configuration
├── README.md           # This file
└── assets/             # Images and media files
    ├── logo.png        # Company logo
    ├── property1.jpg   # Property listing images
    ├── property2.jpg
    ├── property3.jpg
    ├── team.jpg        # Team photo
    ├── client1.jpg     # Client testimonial photos
    ├── client2.jpg
    └── client3.jpg
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2c5530` - Professional, trustworthy
- **Secondary Green**: `#52b788` - Growth, prosperity
- **Accent Green**: `#95d5b2` - Fresh, modern
- **Text Dark**: `#1a1a1a` - High contrast readability
- **Text Light**: `#666` - Subtle information
- **Background**: `#f8f9fa` - Clean, minimal

### Typography
- **Font Family**: Inter (with system font fallbacks)
- **Headings**: 600-700 weight for impact
- **Body Text**: 400 weight for readability
- **Responsive Sizing**: Using clamp() for fluid typography

### Components
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Cards**: Service cards, listing cards, testimonial cards
- **Forms**: Styled inputs with focus states
- **Navigation**: Fixed header with dropdown menus
- **Modal**: Professional dialog system

## 🛠️ Customization

### Changing Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #2c5530;
    --secondary-color: #52b788;
    --accent-color: #95d5b2;
    /* Add your colors here */
}
```

### Adding Property Listings
Modify the listings section in `index.html` or implement a dynamic system with JavaScript.

### Contact Information
Update contact details in:
- Header phone number
- Contact section
- Footer information

### Calculator Customization
Modify calculator logic in `script.js` to match your local market conditions.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Laptop**: 1024px - 1199px
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📈 Performance Features

- **Optimized CSS**: Efficient selectors and minimal reflows
- **Lazy Loading**: Images load as needed
- **Smooth Animations**: GPU-accelerated transitions
- **Minimal JavaScript**: Vanilla JS with no heavy frameworks
- **Compressed Assets**: Optimized images and code

## 🎯 SEO Features

- **Semantic HTML**: Proper heading hierarchy and structure
- **Meta Tags**: Title, description, and viewport tags
- **Alt Text**: Descriptive alt text for all images
- **Schema Markup**: Ready for structured data implementation
- **Fast Loading**: Optimized for Core Web Vitals

## 📞 Support & Customization

This website template can be customized for any real estate business. Key areas to update:

1. **Branding**: Logo, colors, and company name
2. **Content**: Services, testimonials, and about information
3. **Contact Info**: Phone numbers, email, and address
4. **Property Listings**: Add real property data
5. **Calculators**: Adjust for local market conditions

## 🚀 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable static hosting

### Traditional Hosting
Upload all files to your web server's public directory.

## 📄 License

This project is available for commercial and personal use. Please replace placeholder content with your own information.

## 🤝 Contributing

To improve this template:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**MoneyTree Realty** - Growing wealth through real estate since 2008.

For questions or support, contact: info@moneytreerealty.com
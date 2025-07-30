// MoneyTree Realty Website JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    setupMobileNavigation();
    setupSmoothScrolling();
    setupContactForm();
    setupSearchForm();
    setupCalculators();
    setupScrollEffects();
    setupNavbarScroll();
}

// Mobile Navigation
function setupMobileNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileMenu.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });
        
        // Close mobile menu when clicking on nav links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = mobileMenu.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            });
        });
    }
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form Handling
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Validate form
            if (validateContactForm(data)) {
                // Simulate form submission
                showFormSuccess();
                contactForm.reset();
            }
        });
    }
}

// Form Validation
function validateContactForm(data) {
    const required = ['firstName', 'lastName', 'email', 'interest'];
    const errors = [];
    
    required.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            errors.push(`${field} is required`);
        }
    });
    
    // Email validation
    if (data.email && !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (errors.length > 0) {
        showFormErrors(errors);
        return false;
    }
    
    return true;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form success message
function showFormSuccess() {
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
}

// Show form errors
function showFormErrors(errors) {
    const errorMessage = errors.join(', ');
    showNotification(errorMessage, 'error');
}

// Search Form Handling
function setupSearchForm() {
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const location = this.querySelector('.search-input').value;
            const propertyType = this.querySelector('.search-select').value;
            
            if (location.trim()) {
                showNotification('Search functionality would be implemented here. Searching for properties in: ' + location, 'info');
            } else {
                showNotification('Please enter a location to search.', 'error');
            }
        });
    }
}

// Calculator Functions
function setupCalculators() {
    window.openCalculator = function(type) {
        const modal = document.getElementById('calculatorModal');
        const content = document.getElementById('calculatorContent');
        
        if (modal && content) {
            content.innerHTML = getCalculatorHTML(type);
            modal.style.display = 'block';
            
            // Setup calculator functionality
            setupCalculatorLogic(type);
        }
    };
    
    // Close modal functionality
    const modal = document.getElementById('calculatorModal');
    if (modal) {
        const closeBtn = modal.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Get Calculator HTML based on type
function getCalculatorHTML(type) {
    switch (type) {
        case 'mortgage':
            return getMortgageCalculatorHTML();
        case 'valuation':
            return getValuationCalculatorHTML();
        case 'roi':
            return getROICalculatorHTML();
        case 'refinance':
            return getRefinanceCalculatorHTML();
        default:
            return '<p>Calculator not found.</p>';
    }
}

// Mortgage Calculator HTML
function getMortgageCalculatorHTML() {
    return `
        <div class="calculator">
            <h3>Mortgage Calculator</h3>
            <form class="calculator-form" id="mortgageForm">
                <div class="form-group">
                    <label>Home Price ($)</label>
                    <input type="number" id="homePrice" placeholder="500000" required>
                </div>
                <div class="form-group">
                    <label>Down Payment ($)</label>
                    <input type="number" id="downPayment" placeholder="100000" required>
                </div>
                <div class="form-group">
                    <label>Interest Rate (%)</label>
                    <input type="number" id="interestRate" step="0.01" placeholder="3.5" required>
                </div>
                <div class="form-group">
                    <label>Loan Term (years)</label>
                    <select id="loanTerm">
                        <option value="15">15 years</option>
                        <option value="30" selected>30 years</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Calculate Payment</button>
            </form>
            <div id="mortgageResult" class="calculator-result" style="display: none;">
                <h4>Monthly Payment</h4>
                <div class="result-value" id="monthlyPayment">$0</div>
                <p>Principal & Interest: <span id="principalInterest">$0</span></p>
                <p>Total Interest: <span id="totalInterest">$0</span></p>
            </div>
        </div>
    `;
}

// Home Valuation Calculator HTML
function getValuationCalculatorHTML() {
    return `
        <div class="calculator">
            <h3>Home Value Estimator</h3>
            <form class="calculator-form" id="valuationForm">
                <div class="form-group">
                    <label>Property Address</label>
                    <input type="text" id="propertyAddress" placeholder="123 Main St, City, State" required>
                </div>
                <div class="form-group">
                    <label>Square Footage</label>
                    <input type="number" id="squareFootage" placeholder="2000" required>
                </div>
                <div class="form-group">
                    <label>Bedrooms</label>
                    <select id="bedrooms">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3" selected>3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Bathrooms</label>
                    <select id="bathrooms">
                        <option value="1">1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Get Estimate</button>
            </form>
            <div id="valuationResult" class="calculator-result" style="display: none;">
                <h4>Estimated Home Value</h4>
                <div class="result-value" id="estimatedValue">$0</div>
                <p>Based on local market data and property characteristics</p>
            </div>
        </div>
    `;
}

// ROI Calculator HTML
function getROICalculatorHTML() {
    return `
        <div class="calculator">
            <h3>Investment ROI Calculator</h3>
            <form class="calculator-form" id="roiForm">
                <div class="form-group">
                    <label>Purchase Price ($)</label>
                    <input type="number" id="purchasePrice" placeholder="300000" required>
                </div>
                <div class="form-group">
                    <label>Monthly Rental Income ($)</label>
                    <input type="number" id="monthlyRent" placeholder="2500" required>
                </div>
                <div class="form-group">
                    <label>Monthly Expenses ($)</label>
                    <input type="number" id="monthlyExpenses" placeholder="800" required>
                </div>
                <div class="form-group">
                    <label>Down Payment ($)</label>
                    <input type="number" id="roiDownPayment" placeholder="60000" required>
                </div>
                <button type="submit" class="btn btn-primary">Calculate ROI</button>
            </form>
            <div id="roiResult" class="calculator-result" style="display: none;">
                <h4>Annual ROI</h4>
                <div class="result-value" id="roiPercentage">0%</div>
                <p>Annual Cash Flow: <span id="annualCashFlow">$0</span></p>
                <p>Monthly Cash Flow: <span id="monthlyCashFlow">$0</span></p>
            </div>
        </div>
    `;
}

// Refinance Calculator HTML
function getRefinanceCalculatorHTML() {
    return `
        <div class="calculator">
            <h3>Refinance Calculator</h3>
            <form class="calculator-form" id="refinanceForm">
                <div class="form-group">
                    <label>Current Loan Balance ($)</label>
                    <input type="number" id="currentBalance" placeholder="400000" required>
                </div>
                <div class="form-group">
                    <label>Current Interest Rate (%)</label>
                    <input type="number" id="currentRate" step="0.01" placeholder="4.5" required>
                </div>
                <div class="form-group">
                    <label>New Interest Rate (%)</label>
                    <input type="number" id="newRate" step="0.01" placeholder="3.2" required>
                </div>
                <div class="form-group">
                    <label>Remaining Term (years)</label>
                    <input type="number" id="remainingTerm" placeholder="25" required>
                </div>
                <button type="submit" class="btn btn-primary">Calculate Savings</button>
            </form>
            <div id="refinanceResult" class="calculator-result" style="display: none;">
                <h4>Monthly Savings</h4>
                <div class="result-value" id="monthlySavings">$0</div>
                <p>Current Payment: <span id="currentPayment">$0</span></p>
                <p>New Payment: <span id="newPayment">$0</span></p>
            </div>
        </div>
    `;
}

// Setup Calculator Logic
function setupCalculatorLogic(type) {
    switch (type) {
        case 'mortgage':
            setupMortgageCalculator();
            break;
        case 'valuation':
            setupValuationCalculator();
            break;
        case 'roi':
            setupROICalculator();
            break;
        case 'refinance':
            setupRefinanceCalculator();
            break;
    }
}

// Mortgage Calculator Logic
function setupMortgageCalculator() {
    const form = document.getElementById('mortgageForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const homePrice = parseFloat(document.getElementById('homePrice').value);
        const downPayment = parseFloat(document.getElementById('downPayment').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
        const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;
        
        const loanAmount = homePrice - downPayment;
        const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
        const totalInterest = (monthlyPayment * loanTerm) - loanAmount;
        
        document.getElementById('monthlyPayment').textContent = formatCurrency(monthlyPayment);
        document.getElementById('principalInterest').textContent = formatCurrency(monthlyPayment);
        document.getElementById('totalInterest').textContent = formatCurrency(totalInterest);
        document.getElementById('mortgageResult').style.display = 'block';
    });
}

// Home Valuation Calculator Logic
function setupValuationCalculator() {
    const form = document.getElementById('valuationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const squareFootage = parseFloat(document.getElementById('squareFootage').value);
        const bedrooms = parseInt(document.getElementById('bedrooms').value);
        const bathrooms = parseInt(document.getElementById('bathrooms').value);
        
        // Simplified estimation formula (in real app, this would use market data)
        const basePrice = 150; // per square foot
        const bedroomBonus = bedrooms * 5000;
        const bathroomBonus = bathrooms * 3000;
        
        const estimatedValue = (squareFootage * basePrice) + bedroomBonus + bathroomBonus;
        
        document.getElementById('estimatedValue').textContent = formatCurrency(estimatedValue);
        document.getElementById('valuationResult').style.display = 'block';
    });
}

// ROI Calculator Logic
function setupROICalculator() {
    const form = document.getElementById('roiForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const monthlyRent = parseFloat(document.getElementById('monthlyRent').value);
        const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
        const downPayment = parseFloat(document.getElementById('roiDownPayment').value);
        
        const monthlyCashFlow = monthlyRent - monthlyExpenses;
        const annualCashFlow = monthlyCashFlow * 12;
        const roi = (annualCashFlow / downPayment) * 100;
        
        document.getElementById('roiPercentage').textContent = roi.toFixed(2) + '%';
        document.getElementById('annualCashFlow').textContent = formatCurrency(annualCashFlow);
        document.getElementById('monthlyCashFlow').textContent = formatCurrency(monthlyCashFlow);
        document.getElementById('roiResult').style.display = 'block';
    });
}

// Refinance Calculator Logic
function setupRefinanceCalculator() {
    const form = document.getElementById('refinanceForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const currentBalance = parseFloat(document.getElementById('currentBalance').value);
        const currentRate = parseFloat(document.getElementById('currentRate').value) / 100 / 12;
        const newRate = parseFloat(document.getElementById('newRate').value) / 100 / 12;
        const remainingTerm = parseInt(document.getElementById('remainingTerm').value) * 12;
        
        const currentPayment = calculateMonthlyPayment(currentBalance, currentRate, remainingTerm);
        const newPayment = calculateMonthlyPayment(currentBalance, newRate, remainingTerm);
        const monthlySavings = currentPayment - newPayment;
        
        document.getElementById('currentPayment').textContent = formatCurrency(currentPayment);
        document.getElementById('newPayment').textContent = formatCurrency(newPayment);
        document.getElementById('monthlySavings').textContent = formatCurrency(monthlySavings);
        document.getElementById('refinanceResult').style.display = 'block';
    });
}

// Calculate Monthly Payment
function calculateMonthlyPayment(principal, rate, term) {
    if (rate === 0) return principal / term;
    return principal * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
}

// Format Currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Scroll Effects
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.service-card, .listing-card, .tool-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
}

// Show Notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#52b788' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        removeNotification(notification);
    });
}

// Remove Notification
function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize search functionality (for demo purposes)
function initializeSearch() {
    // This would connect to a real property search API
    console.log('Search functionality initialized');
}

// Add loading states
function showLoading(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Export functions for global access
window.MoneyTreeRealty = {
    openCalculator,
    showNotification,
    formatCurrency
};
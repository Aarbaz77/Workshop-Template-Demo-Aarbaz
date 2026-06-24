/**
 * Web Application - Main Script
 * This file contains the core functionality for the web application
 */

// ===========================
// DOM Elements
// ===========================
const ctaButton = document.getElementById('cta-button');
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('.nav-links a');

// ===========================
// Event Listeners
// ===========================

// CTA Button Click Handler
if (ctaButton) {
  ctaButton.addEventListener('click', handleCtaClick);
}

// Contact Form Submit Handler
if (contactForm) {
  contactForm.addEventListener('submit', handleFormSubmit);
}

// Smooth scrolling for navigation links
navLinks.forEach(link => {
  link.addEventListener('click', handleNavigation);
});

// ===========================
// Function Definitions
// ===========================

/**
 * Handle CTA button click
 */
function handleCtaClick() {
  console.log('CTA Button clicked');
  alert('Welcome! Let\'s get started.');
  // Add your custom functionality here
}

/**
 * Handle contact form submission
 * @param {Event} event - Form submit event
 */
function handleFormSubmit(event) {
  event.preventDefault();

  // Get form values
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  // Log form data (replace with actual API call)
  console.log('Form submitted:', data);

  // Show success message
  showNotification('Message sent successfully!', 'success');

  // Reset form
  contactForm.reset();

  // In a real application, you would send this data to a server
  // Example: sendToServer('/api/contact', data);
}

/**
 * Handle navigation link clicks
 * @param {Event} event - Click event
 */
function handleNavigation(event) {
  const href = event.target.getAttribute('href');
  if (href && href.startsWith('#')) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/**
 * Show notification message to user
 * @param {string} message - Message to display
 * @param {string} type - Notification type ('success', 'error', 'info')
 */
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Color mapping for notification types
  const colorMap = {
    success: '#28a745',
    error: '#dc3545',
    info: '#0066cc',
  };

  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        background-color: ${colorMap[type] || colorMap.info};
        color: white;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        animation: slideIn 0.3s ease;
    `;

  // Add animation styles
  if (!document.querySelector('style[data-notification]')) {
    const style = document.createElement('style');
    style.setAttribute('data-notification', 'true');
    style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ===========================
// Initialization
// ===========================

/**
 * Initialize the application
 */
function init() {
  console.log('Web Application initialized');
  // Add any initialization code here
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

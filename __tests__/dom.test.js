/**
 * Tests for DOM Structure
 */

describe('DOM Structure', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <header>
        <nav class="navbar">
          <div class="container">
            <h1 class="logo">MyApp</h1>
            <ul class="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section id="home" class="hero">
          <div class="container">
            <h2>Welcome</h2>
            <p>Test paragraph</p>
            <button id="cta-button" class="btn btn-primary">Get Started</button>
          </div>
        </section>
        <section id="about" class="features">
          <h2>Features</h2>
          <div class="feature-grid">
            <div class="feature-card"><h3>Feature 1</h3></div>
            <div class="feature-card"><h3>Feature 2</h3></div>
            <div class="feature-card"><h3>Feature 3</h3></div>
          </div>
        </section>
        <section id="contact" class="contact">
          <h2>Contact</h2>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 MyApp</p>
      </footer>
    `;
  });

  describe('Header', () => {
    test('should have a header element', () => {
      expect(document.querySelector('header')).toBeInTheDocument();
    });

    test('should have a navigation bar', () => {
      expect(document.querySelector('.navbar')).toBeInTheDocument();
    });

    test('should have a logo', () => {
      const logo = document.querySelector('.logo');
      expect(logo).toBeInTheDocument();
      expect(logo.textContent).toBe('MyApp');
    });

    test('should have navigation links', () => {
      const navLinks = document.querySelectorAll('.nav-links a');
      expect(navLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Main Content', () => {
    test('should have a main element', () => {
      expect(document.querySelector('main')).toBeInTheDocument();
    });

    test('should have hero section', () => {
      const hero = document.querySelector('.hero');
      expect(hero).toBeInTheDocument();
      expect(hero.id).toBe('home');
    });

    test('should have features section', () => {
      const features = document.querySelector('.features');
      expect(features).toBeInTheDocument();
      expect(features.id).toBe('about');
    });

    test('should have contact section', () => {
      const contact = document.querySelector('.contact');
      expect(contact).toBeInTheDocument();
      expect(contact.id).toBe('contact');
    });
  });

  describe('Feature Cards', () => {
    test('should have feature cards', () => {
      const cards = document.querySelectorAll('.feature-card');
      expect(cards.length).toBe(3);
    });

    test('should have feature titles', () => {
      const cards = document.querySelectorAll('.feature-card h3');
      expect(cards.length).toBe(3);
    });
  });

  describe('Footer', () => {
    test('should have a footer element', () => {
      expect(document.querySelector('footer')).toBeInTheDocument();
    });

    test('should have copyright text', () => {
      const footer = document.querySelector('footer p');
      expect(footer.textContent).toContain('MyApp');
    });
  });

  describe('Buttons', () => {
    test('should have CTA button', () => {
      const ctaButton = document.querySelector('#cta-button');
      expect(ctaButton).toBeInTheDocument();
    });

    test('CTA button should have correct classes', () => {
      const ctaButton = document.querySelector('#cta-button');
      expect(ctaButton.classList.contains('btn')).toBe(true);
      expect(ctaButton.classList.contains('btn-primary')).toBe(true);
    });
  });
});

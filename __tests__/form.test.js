/**
 * Tests for Form Handling
 */

describe('Contact Form', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="contact-form">
        <input type="text" id="name" name="name">
        <input type="email" id="email" name="email">
        <textarea id="message" name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    `;
  });

  test('should have a contact form in the DOM', () => {
    const form = document.querySelector('#contact-form');
    expect(form).toBeInTheDocument();
  });

  test('should have all required form fields', () => {
    expect(document.querySelector('#name')).toBeInTheDocument();
    expect(document.querySelector('#email')).toBeInTheDocument();
    expect(document.querySelector('#message')).toBeInTheDocument();
  });

  test('should retrieve form data correctly', () => {
    const form = document.querySelector('#contact-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    nameInput.value = 'John Doe';
    emailInput.value = 'john@example.com';
    messageInput.value = 'Test message';

    const formData = new FormData(form);
    expect(formData.get('name')).toBe('John Doe');
    expect(formData.get('email')).toBe('john@example.com');
    expect(formData.get('message')).toBe('Test message');
  });

  test('should have a submit button', () => {
    const submitButton = document.querySelector('button[type="submit"]');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton.textContent).toBe('Send');
  });

  test('form fields should be empty by default', () => {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');
  });
});

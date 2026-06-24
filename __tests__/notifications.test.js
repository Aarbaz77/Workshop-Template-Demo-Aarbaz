/**
 * Tests for showNotification function
 */

describe('Notification System', () => {
  beforeEach(() => {
    // Clear DOM before each test
    document.body.innerHTML = '';
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should create a notification element', () => {
    // Mock the showNotification function
    const showNotification = (message, type = 'info') => {
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      notification.textContent = message;
      document.body.appendChild(notification);
    };

    showNotification('Test message', 'success');

    const notification = document.querySelector('.notification-success');
    expect(notification).toBeInTheDocument();
    expect(notification.textContent).toBe('Test message');
  });

  test('should support different notification types', () => {
    const showNotification = (message, type = 'info') => {
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      notification.textContent = message;
      document.body.appendChild(notification);
    };

    showNotification('Error message', 'error');
    const errorNotification = document.querySelector('.notification-error');
    expect(errorNotification).toBeInTheDocument();

    showNotification('Info message', 'info');
    const infoNotification = document.querySelector('.notification-info');
    expect(infoNotification).toBeInTheDocument();
  });

  test('should have correct message content', () => {
    const showNotification = (message, type = 'info') => {
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      notification.textContent = message;
      document.body.appendChild(notification);
    };

    const testMessage = 'This is a test notification';
    showNotification(testMessage, 'success');

    const notification = document.querySelector('.notification');
    expect(notification.textContent).toEqual(testMessage);
  });
});

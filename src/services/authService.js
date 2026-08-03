import { mockCurrentUser } from '../data/mockUser';

// Helper to simulate API response delay
const delay = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));

export const authService = {
  login: async (email, password, role = 'student') => {
    await delay();
    if (!email || !password) {
      throw new Error('Please provide valid credentials');
    }
    const token = 'mock_jwt_token_' + Math.random().toString(36).substring(2);
    const refreshToken = 'mock_refresh_token_' + Math.random().toString(36).substring(2);
    
    const user = {
      ...mockCurrentUser,
      email,
      role: role || 'student',
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
    };

    localStorage.setItem('edunova_access_token', token);
    localStorage.setItem('edunova_refresh_token', refreshToken);
    localStorage.setItem('edunova_user', JSON.stringify(user));

    return { user, token };
  },

  signup: async (name, email, password, role = 'student') => {
    await delay();
    if (!name || !email || !password) {
      throw new Error('All fields are required');
    }

    const user = {
      ...mockCurrentUser,
      name,
      email,
      role: role || 'student',
    };

    const token = 'mock_jwt_token_' + Math.random().toString(36).substring(2);
    localStorage.setItem('edunova_access_token', token);
    localStorage.setItem('edunova_user', JSON.stringify(user));

    return { user, token };
  },

  verifyOTP: async (otp) => {
    await delay();
    if (otp !== '123456' && otp.length !== 6) {
      throw new Error('Invalid 6-digit OTP code');
    }
    return { success: true, message: 'Email verified successfully' };
  },

  forgotPassword: async (email) => {
    await delay();
    if (!email.includes('@')) {
      throw new Error('Invalid email address');
    }
    return { success: true, message: 'Reset link sent to your email' };
  },

  resetPassword: async (token, newPassword) => {
    await delay();
    if (newPassword.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    return { success: true, message: 'Password updated successfully' };
  },

  logout: async () => {
    await delay(300);
    localStorage.removeItem('edunova_access_token');
    localStorage.removeItem('edunova_refresh_token');
    localStorage.removeItem('edunova_user');
  },

  getStoredUser: () => {
    const userJson = localStorage.getItem('edunova_user');
    return userJson ? JSON.parse(userJson) : null;
  }
};

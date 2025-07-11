// DO NOT HARDCODE SECRETS. Use environment variables for all sensitive information.
// Firebase configuration using environment variables only
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Validate that ALL required environment variables are set
const requiredEnvVars = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_STORAGE_BUCKET',
  'FIREBASE_MESSAGING_SENDER_ID',
  'FIREBASE_APP_ID'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingVars.join(', ')}. Please set them in your environment.`);
}

// Log configuration status (without exposing sensitive data)
console.log('Firebase configuration loaded successfully:', {
  apiKey: process.env.FIREBASE_API_KEY ? `${process.env.FIREBASE_API_KEY.substring(0, 6)}...` : 'NOT SET',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'NOT SET',
  projectId: process.env.FIREBASE_PROJECT_ID || 'NOT SET',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'NOT SET',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ? 'SET' : 'NOT SET',
  appId: process.env.FIREBASE_APP_ID ? `${process.env.FIREBASE_APP_ID.substring(0, 10)}...` : 'NOT SET',
}); 
import mongoose from 'mongoose';

export async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI || '';
  
  if (!MONGODB_URI) {
    console.warn('MONGODB_URI not set. Skipping DB connection.');
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI, {
      // @ts-ignore mongoose types
      serverSelectionTimeoutMS: 10000,
      dbName: process.env.MONGODB_DB || 'nyaysathi'
    });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

export default mongoose;

import mongoose, { Schema, Document, Model } from 'mongoose';

// Definicija interfejsa za korisnika
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

// Kreiranje šeme korisnika
const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Kreiranje modela korisnika
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

// Izvoz modela
export default User;
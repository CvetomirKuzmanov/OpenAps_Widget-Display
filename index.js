import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
console.log ('db connected')

const entrySchema = new mongoose.Schema({
    sgv: Number,
});

const Entry = mongoose.model('Entry', entrySchema);
async function fetchEntries() {
    const entries = await Entry.find().sort( {dateString: -1} ).limit(1);

    entries.forEach(entry => {
        const entryValue = (entry.sgv/18).toFixed(1)
        console.log (entryValue)
    });
}   

fetchEntries()
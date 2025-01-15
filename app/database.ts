import { MongoClient } from "mongodb";


export async function mongoConnection() {
    try {
        
        const client = new MongoClient(`${process.env.MONGO_CONN}`);
        
        await client.connect()
        .then(()=>console.log('Connected to MongoDB!'))
        .catch(err=>console.error('can\'t connect to the mongodb ', err));
        
        return client.db('burrito').collection('feedback');

    } catch (err) {
        throw new Error(`Can't connect to MongoDB server: ${err}`);
    }
}
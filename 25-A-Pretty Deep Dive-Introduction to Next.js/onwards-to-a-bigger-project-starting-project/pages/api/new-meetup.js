import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://abhijeet:GfJVVLfDWZ9Lpu0A@cluster0.dxe49ry.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'            
        );
        const db = client.db();

        const meetupsCollection = db.collection('meetups'); // collection means table in nosql. Document are entries in collection.

        const result = await meetupsCollection.insertOne(data); // document is just a object in the end.

        console.log(result); 

        client.close();

        res.status(201).json({message: 'Meetup Inserted!'});
    }
}

export default handler;
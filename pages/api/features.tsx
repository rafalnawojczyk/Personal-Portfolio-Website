import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') return;

    const apiKey = req.headers['api-key'];

    if (apiKey !== process.env.NEXT_PRIVATE_API_KEY) {
        res.status(401).json({
            ok: false,
            message: 'Unauthorized',
        });
        return;
    }

    const client = await MongoClient.connect(process.env.NEXT_PRIVATE_MONGO_URL!);
    const db = client.db('cube-rivals-data');

    const features = db.collection('features');

    const response = await features.find({}).toArray();

    //close connection
    client.close();

    // set status on response
    res.status(200).json({
        ok: true,
        data: JSON.stringify(response),
    });
};

export default handler;

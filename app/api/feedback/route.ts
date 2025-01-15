import { mongoConnection } from "@/app/database";



export interface Feedback {
    name : string;
    email : string;
    feedback : string;
}

export async function POST(req : Request){

    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }
    try {
        const res : Feedback = await req.json();
        if(!res.name || !res.email || !res.feedback){
            return new Response('fill all the required inputs please !', {status : 400});
        }
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(res.email)){
            return new Response('please enter a valid email !', {status : 400});
        }
        if(res.feedback.length < 10  || res.feedback.length > 100){
            return new Response('feedback must be between 10 and 100 characters', {status : 400});
        }
        const myCollection = await mongoConnection();
        try {
            await myCollection.insertOne(res);
            return new Response('One feedback inserted successfully', { status: 200 });
        }
        catch (err){
            return new Response(`Failed to insert feedback: ${err}`, { status: 500 });
        }
    } catch (error) {
        return new Response(`Failed to connect to the mongodb server : ${error}`, { status: 500 });
    }

}
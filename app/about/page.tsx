
import About from '../components/About';
import { Metadata } from 'next';

export const metadata : Metadata = {
    title : 'about',
    description : 'this section where we talk about ourself in details'
}

const Page = () => {
    return (
        <div>
            <About />
        </div>
    );
}

export default Page;

import { Metadata } from 'next';
import Home from './components/Home'

export const metadata : Metadata = {
  title : 'home',
  description : 'this page where we introduce our restaurant to you'
}

export default function page() {
  return (
    <>
      <Home />
    </>
  );
}

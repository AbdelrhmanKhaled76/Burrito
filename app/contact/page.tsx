import { Metadata } from "next";
import Contact from "../_components/Contact";

export const metadata: Metadata = {
  title: "contact",
  description: "this section is for the client feedback and comments",
};

const Page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default Page;

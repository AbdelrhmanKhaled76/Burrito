import Menu from "../_components/Menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "menu",
  description: "this section is the menu section",
};

const Page = () => {
  return (
    <div>
      <Menu />
    </div>
  );
};

export default Page;

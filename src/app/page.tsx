import { Hero } from "@/components/Hero";
import { Channels } from "@/components/Channels";
import { Process } from "@/components/Process";
import { Categories } from "@/components/Categories";
import { Commitments } from "@/components/Commitments";
import { CompanyDetails } from "@/components/CompanyDetails";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Channels />
      <Process />
      <Categories />
      <Commitments />
      <CompanyDetails />
      <Contact />
    </>
  );
}

import { DarkOverlay } from "@/components/dark-overlay";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/sections/contact/contact-form";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <main>
      <LandingSection />
      <ContactForm />
      <Footer />
    </main>
  );
}

const LandingSection = () => {
  return (
    <section className="w-full flex flex-col h-[50vh] sm:h-[70vh] relative">
      <Navbar />
      <Image
        fill
        alt="Contact Us"
        className="object-cover absolute -z-10"
        src="/images/contact-2.jpg"
      />
      <DarkOverlay />

      <header className="flex-1 flex w-full h-full flex-col justify-center text-center px-3">
        <h1 className="text-[72px] sm:text-[120px] font-oswald tracking-tight">
          Contact Us
        </h1>
        <p className="leading-[130%] sm:-mt-2 tracking-tight text-lg sm:text-xl">
          Have a project, idea, or question? Reach out we&apos;d love to hear
          from you
        </p>
      </header>
    </section>
  );
};

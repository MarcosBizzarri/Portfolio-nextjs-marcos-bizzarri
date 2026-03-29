import { contacts } from "../../data/contacts";
import ContactCard from "../../components/ui/ContactCard";

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-4xl px-4 py-16 text-center">
      <h2 className="mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        Contato
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {contacts.map((contact) => (
          <ContactCard key={contact.name} contact={contact} />
        ))}
      </div>
    </section>
  );
}
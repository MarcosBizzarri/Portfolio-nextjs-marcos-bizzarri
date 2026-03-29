import Image from "next/image";
import type { Contact } from "../../data/contacts";

type ContactCardProps = {
  contact: Contact;
};

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="text-center">
      <a
        href={contact.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-28 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
      >
        <Image
          src={contact.icon}
          alt={contact.name}
          width={50}
          height={50}
          className="transition duration-300 group-hover:scale-110"
        />
      </a>
      <p className="mt-3 text-sm font-medium text-white">{contact.name}</p>
    </div>
  );
}
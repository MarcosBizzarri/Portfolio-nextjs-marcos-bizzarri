export type Contact = {
  name: string;
  icon: string;
  url: string;
};

export const contacts: Contact[] = [
  {
    name: "E-mail",
    icon: "/contatos/mail.svg",
    url: "mailto:marcos-bizzarri@hotmail.com",
  },
  {
    name: "Telefone",
    icon: "/contatos/phone.svg",
    url: "https://api.whatsapp.com/send/?phone=5519994449107&text&type=phone_number&app_absent=0",
  },
  {
    name: "Linkedin",
    icon: "/contatos/linkedin.svg",
    url: "https://linkedin.com/in/marcos-bizzarri",
  },
  {
    name: "Github",
    icon: "/contatos/github.svg",
    url: "https://github.com/MarcosBizzarri",
  },
];
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const conTact = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    description: "siraphop.px@gmail.com",
    link: "mailto:siraphop.px@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    description: "093-181-9593",
    link: "tel:0931819593",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    description: "Bangkok, Thailand",
    link: null,
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Social Media",
    description: "facebook.com/Siraphop-x",
    link: "https://facebook.com/Siraphop-x",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "System Requirements" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
];

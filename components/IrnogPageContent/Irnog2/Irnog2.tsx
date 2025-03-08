import { IrnogEvent } from "../types";

export const Irnog2: IrnogEvent = {
  title: "دومین",
  location: {
    country: "ایران",
    city: "تهران",
    detail: "خیابان شریعتی، سالن کنفرانس پیام سوم ",
    locationLink: "google.com",
  },
  irnogAgenda: [
    {
      presenter: "مهدی",
      presentationTitle: "ریاضی",
      presentationLink: "youtube.com",
    },
    {
      presenter: "مهدی",
      presentationTitle: "ریاضی",
      presentationLink: "youtube.com",
    },
    {
      presenter: "مهدی",
      presentationTitle: "ریاضی",
      presentationLink: "youtube.com",
    },
  ],
  sponsers: {
    hostSponsors: {
      logo: "عکس",
      link: "google.com",
    },
  },
  Participants: [
    { name: "مهدی", company: "هوپاد" },
    { name: "مهدی", company: "هوپاد" },
    { name: "مهدی", company: "هوپاد" },
    { name: "مهدی", company: "هوپاد" },
  ],
};

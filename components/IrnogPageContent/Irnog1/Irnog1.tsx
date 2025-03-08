import { IrnogEvent } from "../types";

export const Irnog1: IrnogEvent = {
  title: "اولین",
  time: `پنجشنبه - 14 تیر ماه 1403`,
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

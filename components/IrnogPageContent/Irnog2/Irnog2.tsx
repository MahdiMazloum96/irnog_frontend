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
      logo: "https://www.irnog.net/wp-content/uploads/2017/10/38.jpg",
      link: "google.com",
      name: "google",
    },
    platinumSponsors: [
      {
        logo: "https://www.irnog.net/wp-content/uploads/2017/10/38.jpg",
        link: "google.com",
        name: "google",
      },
    ],
  },
  Participants: [
    { firstname: "مهدی", lastname: "مظلوم", company: "هوپاد" },
    { firstname: "مهدی", lastname: "مظلوم", company: "هوپاد" },
    { firstname: "مهدی", lastname: "مظلوم", company: "هوپاد" },
    { firstname: "مهدی", lastname: "مظلوم", company: "هوپاد" },
  ],
};

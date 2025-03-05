interface Location {
  country: string;
  city: string;
  detail: string;
}

interface IrnogEvent {
  title: string;
  location: Location;
  irnogAgenda: string;
  sponsers: string;
  Participants: string;
}

export const Irnog2: IrnogEvent = {
  title: "اولین",
  location: {
    country: "ایران",
    city: "تهران",
    detail: "خیابان شریعتی، سالن کنفرانس پیام سوم ",
  },
  irnogAgenda: "FIRST",
  sponsers: "hamrahaval",
  Participants: "mahdi",
};

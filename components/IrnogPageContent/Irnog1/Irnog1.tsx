interface Location {
  country: string;
  city: string;
  detail: string;
  locationLink?: "";
}
interface table {
  presenter: string;
  presentationTitle: string;
  presentationLink: string;
}
interface IrnogEvent {
  title: string;
  location: Location;
  irnogAgenda: string;
  sponsers: string;
  Participants: string;
  irnogAgenda: table;
}

export const Irnog1: IrnogEvent = {
  title: "اولین",
  location: {
    country: "ایران",
    city: "تهران",
    detail: "خیابان شریعتی، سالن کنفرانس پیام سوم ",
    locationLink: "",
  },
  irnogAgenda: "FIRST",
  sponsers: "hamrahaval",
  Participants: "mahdi",
};

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurDestinations = "ourdestinations",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface DestinationType {
  name: string;
  description?: string;
  image: string;
}

export interface IComment {
  id: number
  comment: string
  created: string
  user: {
    username: string
  }
}
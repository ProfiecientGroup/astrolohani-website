export interface ContactData {
  [key: string]: {
    name: string;
    email: string;
    title: string;
    message: string;
  };
}
export interface ContactFields {
  [key: string]: {
    value: string;
    error: string;
  };
}

export interface Data {
  content: string[];
  id: string;
}
export interface servicesData {
  serviceImg: string;
  serviceHeading: string;
  serviceDes: string;
  keyFeatures: keyFeatures[];
  wrapUp:string
}
export interface keyFeatures {
  subHeading: string;
  sebDescription: string;
}

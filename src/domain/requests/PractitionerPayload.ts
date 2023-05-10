interface PractitionerPayload {
  id?: number;
  fullName: string;
  email: string;
  contact: string;
  address: string;
  city: string;
  gender: string;
  zipcode: string;
  dob: string;
  workingDays: number;
  status: string;
  endTime: string;
  startTime: string;
  isICUSpecialist: boolean;
  userImg: File | null;
}

export default PractitionerPayload;

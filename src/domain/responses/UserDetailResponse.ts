interface UserDetailResponse {
  id: number;
  dob: string;
  fullName: string;
  email: string;
  userImg?: string;
  contact: string;
  endTime: string;
  startTime: string;
  address: string;
  gender: string;
  city: string;
  zipcode: string;
  status: string;
}

export default UserDetailResponse;

interface UserResponse {
  data: {
    id: number;
    dob: string;
    fullName: string;
    email: string;
    userImg?: string;
    contact: string;
    endTime: string;
    startTime: string;
    gender: string;
  };
}

export default UserResponse;

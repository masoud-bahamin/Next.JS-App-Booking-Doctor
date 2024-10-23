interface User {
  username: string;
  password: string;
  email: string;
}

interface LoginUser {
  password: string;
  email: string;
}

interface UpdateType {
  name: string;
  phone: string;
  age: number;
  bio: string;
  location: string;
}

interface UpdateUser {
  username: string,
  email: string,
  password: string,
  img: { filename: string }[],
  role: string,
  location: string,
  age: number,
  bio: string,
  name: string,
  phone: string,
  _id: string,
  appointments? : AppointmentType []
}

interface AppointmentType {
  doctorId: string;
  userId: string;
  date: Date
}


interface contextType {
  userInfo: UpdateUser | null;
  loading: boolean;
  register: (user: User & { role: "USER" | "DOCTOR" }) => void;
  updateUser: (user: UpdateType) => void;
  login: (user: LoginUser) => void;
  logout: () => void;
  getUserInfo: () => void;
  bookAppointment: (data: AppointmentType) => void;
  error: string;
}

interface Appointment {
  day: string,
  date: string,
  times: {
    id: number,
    active: boolean,
    title: string
  }[],
  id: number,

}

interface CommentType {
  comments: [
    {
      message: string;
      username: string;
      rateNumber: number;
    }
  ];
};
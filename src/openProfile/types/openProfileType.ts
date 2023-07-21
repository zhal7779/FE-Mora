export interface RegisterStatusData {
  name: string;
  userDetail: {
    profile_public: boolean;
  };
}
export interface RegisterProps {
  handleProfileRegisterStatus: (status: RegisterStatusData) => void;
}
export interface RegisterStatusProps {
  registerStatus: RegisterStatusData | undefined;
}

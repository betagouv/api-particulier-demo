export type Profile = {
  username: string;
  password: string;
};

export type FullProfile = Profile & {
  telepoints: number;
  monCompteFormation: number;
};

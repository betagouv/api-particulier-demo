export type Earnings = number;

type Child = {
  name: string;
  surname: string;
  sex: "male" | "female";
  birthDate: Date;
};

export type FamilyComposition = {
  quotient: number;
  children: Child[];
};

export type IdentityCompletedProfile = {
  name: string;
  surname: string;
  dateOfBirth: Date;
};

export type EarningsCompletedProfile = {
  earnings: Earnings;
  earningsFromFc?: boolean;
  earningsConfirmed: boolean;
  earningsProofUploaded?: boolean;
};

export type FamilyCompositionCompletedProfile = {
  familyComposition: FamilyComposition;
  familyCompositionConfirmed: boolean;
  familyCompositionProofUploaded?: boolean;
};

export type Profile = IdentityCompletedProfile &
  EarningsCompletedProfile &
  FamilyCompositionCompletedProfile;

export type IncompleteProfile = Partial<Profile>;

export const isIdentityCompleted = (
  profile: IncompleteProfile
): profile is IdentityCompletedProfile => {
  return (
    profile.name !== undefined &&
    profile.surname !== undefined &&
    profile.dateOfBirth !== undefined
  );
};

export const areEarningsCompleted = (
  profile: IncompleteProfile
): profile is EarningsCompletedProfile => {
  return (
    (profile.earnings !== undefined && profile.earningsConfirmed === true) ||
    profile.earningsProofUploaded === true
  );
};

export const isFamilyCompositionCompleted = (
  profile: IncompleteProfile
): profile is FamilyCompositionCompletedProfile => {
  return (
    profile.familyComposition !== undefined ||
    profile.familyCompositionProofUploaded === true
  );
};

export const isProfileCompleted = (
  profile: IncompleteProfile
): profile is Profile => {
  return (
    isIdentityCompleted(profile) &&
    areEarningsCompleted(profile) &&
    isFamilyCompositionCompleted(profile)
  );
};

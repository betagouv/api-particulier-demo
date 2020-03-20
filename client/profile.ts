export type Earnings = number;

export type FamilyComposition = "couple" | "single";

export type IdentityCompletedProfile = {
  name: string;
  surname: string;
  dateOfBirth: Date;
};

export type EarningsCompletedProfile = {
  earnings: Earnings;
};

export type FamilyCompositionCompletedProfile = {
  familyComposition: FamilyComposition;
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
  return profile.earnings !== undefined;
};

export const isFamilyCompositionCompleted = (
  profile: IncompleteProfile
): profile is FamilyCompositionCompletedProfile => {
  return profile.familyComposition !== undefined;
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

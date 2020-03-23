export type Earnings = number;

export type FamilyComposition = "couple" | "single";

export type IdentityCompletedProfile = {
  name: string;
  surname: string;
  dateOfBirth: Date;
};

export type EarningsCompletedProfile = {
  earnings: Earnings;
  earningsProofUploaded?: boolean;
};

export type FamilyCompositionCompletedProfile = {
  familyComposition: FamilyComposition;
  familyCompoisitionProofUploaded?: boolean;
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
    profile.earnings !== undefined || profile.earningsProofUploaded === true
  );
};

export const isFamilyCompositionCompleted = (
  profile: IncompleteProfile
): profile is FamilyCompositionCompletedProfile => {
  return (
    profile.familyComposition !== undefined ||
    profile.familyCompoisitionProofUploaded === true
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

import CrecheSignupLayout from "../../../components/CrecheSignupLayout";
import fcLogo from "../../../assets/images/france-connect.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { isIdentityCompleted } from "../../../profile";

const EarningsStep = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);

  return (
    <CrecheSignupLayout step="referenceEarnings">
      <h2>Revenus</h2>
    </CrecheSignupLayout>
  );
};

export default EarningsStep;

import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import { useMonCompteFormation } from "../hooks/moncompteformation";

const MonCompteFormation = () => {
  const { loading, error } = useMonCompteFormation();

  const monCompteFormation = useSelector(
    (state: RootState) => state.user.monCompteFormation
  );

  return (
    <>
      {loading && <p>Récupération de votre solde de formation...</p>}
      {error && (
        <p>Erreur lors de la récupération de votre solde de formation</p>
      )}
      {monCompteFormation && <p>Votre solde formation {monCompteFormation}</p>}
    </>
  );
};

export default MonCompteFormation;

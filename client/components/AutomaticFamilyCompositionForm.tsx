import { useState } from "react";
import { useAutomaticFamilyComposition } from "../hooks/family-composition";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";

const AutomaticFamilyCompositionForm = () => {
  const {
    loading,
    error,
    fetchFamilyComposition,
    confirmError,
    confirmFamilyComposition,
    confirming
  } = useAutomaticFamilyComposition();
  const [cafNumber, setCafNumber] = useState<string>("0000001");
  const [zipCode, setZipCode] = useState<string>("75001");
  const familyComposition = useSelector(
    (state: RootState) => state.user.familyComposition
  );

  return (
    <>
      <h3 className="text-center">Récupérer automatiquement</h3>
      {!familyComposition ? (
        <>
          <p>
            <i className="text-sm">
              Vous êtes allocataire de la CAF ? Saisissez vos identifiants
              ci-dessous pour enclencher la récupération automatique de votre
              composition famililale.
            </i>
          </p>
          <div className="form__group">
            <label htmlFor="cafNumber">Numéro d'allocataire CAF</label>
            <input
              name="cafNumber"
              value={cafNumber}
              onChange={event => setCafNumber(event.target.value)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="zipCode">Code postal</label>
            <input
              name="zipCode"
              value={zipCode}
              onChange={event => setZipCode(event.target.value)}
            />
          </div>
          {error && (
            <p className="text-red-600">
              Informations incorrectes, veuillez vérifier votre saisie
            </p>
          )}
          <div className="flex justify-center mt-2">
            <button
              onClick={() => fetchFamilyComposition(cafNumber, zipCode)}
              className="button large"
              disabled={loading}
            >
              {loading ? "Récupération en cours..." : "Récupérer"}
            </button>
          </div>
        </>
      ) : (
        <>
          <p>
            <div>
              Votre quotient famililal : <b>{familyComposition.quotient}</b>
            </div>
            <div>Vos enfants :</div>
            <ul>
              {familyComposition.children.map(child => (
                <li key={child.name}>
                  <b>{child.name}</b>, né{child.sex === "female" ? "e" : ""} le{" "}
                  {new Intl.DateTimeFormat("fr-FR").format(
                    new Date(child.birthDate)
                  )}
                </li>
              ))}
            </ul>
          </p>
          <p>
            <i className="text-sm">
              Si ces données sont incorrectes, veuillez renseigner manuellement
              les documents ci-contre.
            </i>
          </p>
          <div className="flex justify-center mt-2">
            <button
              onClick={() => confirmFamilyComposition()}
              className="button large"
              disabled={confirming}
            >
              {confirming ? "Confirmation en cours..." : "Confirmer"}
            </button>
          </div>
          {confirmError && (
            <p className="text-red-600">
              Echec de confirmation, veuillez réessayer plus tard.
            </p>
          )}
        </>
      )}
    </>
  );
};

export default AutomaticFamilyCompositionForm;

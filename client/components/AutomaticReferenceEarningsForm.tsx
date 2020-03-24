import { useAutomaticReferenceEarnings } from "../hooks/reference-earnings";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";

const AutomaticReferenceEarningsForm = () => {
  const {
    loading,
    confirmError,
    confirmReferenceEarnings,
    confirming,
    error,
    fetchReferenceEarnings
  } = useAutomaticReferenceEarnings();
  const [taxNumber, setTaxNumber] = useState("1902599999001");
  const [noticeNumber, setNoticeNumber] = useState("1902599999001");
  const { earningsConfirmed, earnings } = useSelector(
    (state: RootState) => state.user
  );

  const moneyFormatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR"
  });

  return (
    <>
      <h3 className="text-center">Récupérer automatiquement</h3>
      {!earnings ? (
        <>
          <p>
            <i className="text-sm">
              En optant pour la récupération automatique de vos données, vous
              accélérez le temps de traitement de votre demande.
            </i>
          </p>
          <div className="form__group">
            <label htmlFor="taxNumber">Numéro fiscal</label>
            <input
              name="taxNumber"
              value={taxNumber}
              onChange={event => setTaxNumber(event.target.value)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="noticeNumber">Référence d'avis d'imposition</label>
            <input
              name="noticeNumber"
              value={noticeNumber}
              onChange={event => setNoticeNumber(event.target.value)}
            />
          </div>
          {error && (
            <p className="text-red-600">
              Informations incorrectes, veuillez vérifier votre saisie
            </p>
          )}
          <div className="flex justify-center mt-2">
            <button
              onClick={() => fetchReferenceEarnings(taxNumber, noticeNumber)}
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
            Votre revenu fiscal de référence :{" "}
            <b>{moneyFormatter.format(earnings)}</b>
          </p>
          <p>
            <i className="text-sm">
              Si cette valeur est incorrecte, veuillez renseigner manuellement
              votre dernier avis d'imposition.
            </i>
          </p>
          <div className="flex justify-center mt-2">
            <button
              onClick={() => confirmReferenceEarnings()}
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

export default AutomaticReferenceEarningsForm;

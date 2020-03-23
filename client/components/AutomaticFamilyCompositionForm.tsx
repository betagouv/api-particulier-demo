import { useAutomaticReferenceEarnings } from "../hooks/reference-earnings";
import { useState } from "react";
import { useAutomaticFamilyComposition } from "../hooks/family-composition";

const AutomaticFamilyCompositionForm = () => {
  const {
    loading,
    error,
    fetchFamilyComposition
  } = useAutomaticFamilyComposition();
  const [cafNumber, setCafNumber] = useState<string>("0000001");
  const [zipCode, setZipCode] = useState<string>("75001");

  return (
    <>
      <h3 className="text-center">Récupérer automatiquement</h3>
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
  );
};

export default AutomaticFamilyCompositionForm;

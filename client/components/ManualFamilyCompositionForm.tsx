import { useState } from "react";
import { useManualFamilyComposition } from "../hooks/family-composition";

const ManualFamilyCompositionForm = () => {
  const [quotientProof, setQuotientProof] = useState<string>();
  const [familyCompositionProof, setFamilyCompositionProof] = useState<
    string
  >();
  const {
    loading,
    error,
    uploadFamilyCompositionProof
  } = useManualFamilyComposition();

  return (
    <>
      <h3 className="text-center">Renseigner manuellement</h3>
      <p>
        <i className="text-sm">
          Veuillez noter qu'en soumettant vos justificatifs papiers, cela
          implique un traitement humain des documents, et augmente donc le temps
          de traitement de votre demande de deux semaines minimum.
        </i>
      </p>
      <div className="form__group">
        <label htmlFor="quotientProof">Attestation de quotient familial</label>
        <input
          name="quotientProof"
          type="file"
          value={quotientProof}
          onChange={event => setQuotientProof(event.target.value)}
        />
      </div>
      <div className="form__group">
        <label htmlFor="familyCompositionProof">Livret de famille</label>
        <input
          name="familyCompositionProof"
          type="file"
          value={familyCompositionProof}
          onChange={event => setFamilyCompositionProof(event.target.value)}
        />
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <div className="flex justify-center mt-2">
        <button
          className="button large"
          disabled={loading}
          onClick={() =>
            uploadFamilyCompositionProof(quotientProof, familyCompositionProof)
          }
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </div>
    </>
  );
};

export default ManualFamilyCompositionForm;

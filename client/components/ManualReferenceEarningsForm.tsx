import { useState } from "react";
import { useManualReferenceEarnings } from "../hooks/reference-earnings";

const ManualReferenceEarningsForm = () => {
  const [notice, setNotice] = useState<string>();
  const {
    loading,
    error,
    uploadReferenceEarningsNotice
  } = useManualReferenceEarnings();

  return (
    <>
      <h3 className="text-center">Renseigner manuellement</h3>
      <p>
        <i className="text-sm">
          Veuillez noter qu'en soumettant votre avis d'imposition, cela implique
          un traitement humain du document, et augmente donc le temps de
          traitement de votre demande de deux semaines minimum.
        </i>
      </p>
      <div className="form__group">
        <label htmlFor="notice">Dernier avis d'imposition</label>
        <input
          name="notice"
          type="file"
          value={notice}
          onChange={event => setNotice(event.target.value)}
        />
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <div className="flex justify-center mt-2">
        <button
          className="button large"
          disabled={loading}
          onClick={() => uploadReferenceEarningsNotice(notice)}
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </div>
    </>
  );
};

export default ManualReferenceEarningsForm;

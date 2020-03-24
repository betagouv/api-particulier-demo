import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/root-reducer";
import { isFamilyCompositionCompleted, FamilyComposition } from "../profile";
import userActions from "../store/user";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export const useAutomaticFamilyComposition = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchFamilyComposition = async (cafNumber: string, zipCode: string) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.request<FamilyComposition>({
        url: "/api/family-composition",
        params: {
          cafNumber,
          zipCode
        }
      });
      const composition = response.data;

      if (composition && !isFamilyCompositionCompleted(user)) {
        dispatch(userActions.setFamilyComposition(composition));
        router.push("/");
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return {
    fetchFamilyComposition,
    loading,
    error
  };
};

export const useManualFamilyComposition = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const uploadFamilyCompositionProof = async (
    quotientProof: string | undefined,
    familyCompositionProof: string | undefined
  ) => {
    if (!quotientProof || !familyCompositionProof) {
      return setError("Veuillez renseigner l'ensemble des documents demandés.");
    }
    setLoading(true);
    setError(undefined);
    try {
      await axios.request<number>({
        method: "POST",
        url: "/api/family-composition"
      });

      if (!isFamilyCompositionCompleted(user)) {
        dispatch(userActions.setFamilyCompositionProofUploaded());
        router.push("/");
      }
    } catch (error) {
      setError(
        "Echec de récupération des documents, veuillez réessayer plus tard."
      );
    }
    setLoading(false);
  };

  return {
    uploadFamilyCompositionProof,
    loading,
    error
  };
};

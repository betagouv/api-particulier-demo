import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/root-reducer";
import { areEarningsCompleted } from "../profile";
import userActions from "../store/user";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export const useAutomaticReferenceEarnings = () => {
  const [loading, setLoading] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchReferenceEarnings = async (
    taxNumber: string,
    noticeNumber: string
  ) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.request<number>({
        url: "/api/reference-earnings",
        params: {
          taxNumber,
          noticeNumber
        }
      });
      const earnings = response.data;

      if (earnings && !areEarningsCompleted(user)) {
        dispatch(userActions.setReferenceEarnings(earnings));
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const confirmReferenceEarnings = async () => {
    setConfirming(true);
    setConfirmError(false);
    try {
      await axios.request<number>({
        url: "/api/reference-earnings/confirm",
        method: "POST"
      });

      dispatch(userActions.confirmReferenceEarnings());
      router.push(
        "/processes/creche-signup/family",
        "/demarches/inscription-en-creche/famille"
      );
    } catch (error) {
      setConfirmError(true);
    }
    setConfirming(false);
  };

  return {
    fetchReferenceEarnings,
    confirmReferenceEarnings,
    confirming,
    confirmError,
    loading,
    error
  };
};

export const useManualReferenceEarnings = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const uploadReferenceEarningsNotice = async (notice: string | undefined) => {
    if (!notice) {
      return setError("Veuillez sélectionner votre dernier avis d'imposition.");
    }
    setLoading(true);
    setError(undefined);
    try {
      await axios.request<number>({
        method: "POST",
        url: "/api/tax-notice"
      });

      if (!areEarningsCompleted(user)) {
        dispatch(userActions.setEarningsProofUploaded());
        router.push(
          "/processes/creche-signup/family",
          "/demarches/inscription-en-creche/famille"
        );
      }
    } catch (error) {
      setError(
        "Echec de récupération de votre avis d'imposition, veuillez réessayer plus tard."
      );
    }
    setLoading(false);
  };

  return {
    uploadReferenceEarningsNotice,
    loading,
    error
  };
};

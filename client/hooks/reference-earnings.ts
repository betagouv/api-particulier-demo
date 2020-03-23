import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/root-reducer";
import { areEarningsCompleted } from "../profile";
import userActions from "../store/user";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export const useReferenceEarnings = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
        router.push(
          "/processes/creche-signup/family",
          "/demarches/inscription-en-creche/famille"
        );
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return {
    fetchReferenceEarnings,
    loading,
    error
  };
};

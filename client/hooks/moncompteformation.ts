import { useDispatch } from "react-redux";
import userActions from "../store/user";
import { useState, useEffect } from "react";
import axios from "axios";

export const useMonCompteFormation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const fetchMonCompteFormation = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.request<number>({
        url: "/api/mon-compte-formation",
      });
      const monCompteFormation = response.data;

      if (monCompteFormation) {
        dispatch(userActions.setMonCompteFormation(monCompteFormation));
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchMonCompteFormation();
  }, []);

  return {
    loading,
    error,
  };
};

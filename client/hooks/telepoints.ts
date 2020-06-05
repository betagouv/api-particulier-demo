import { useDispatch } from "react-redux";
import userActions from "../store/user";
import { useState, useEffect } from "react";
import axios from "axios";

export const useTelepoints = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const fetchTelepoints = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.request<number>({
        url: "/api/telepoints",
      });
      const points = response.data;

      if (points) {
        dispatch(userActions.setTelepoints(points));
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchTelepoints();
  }, []);

  return {
    loading,
    error,
  };
};

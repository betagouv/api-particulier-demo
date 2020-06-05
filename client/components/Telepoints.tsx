import { useState } from "react";
import { useTelepoints } from "../hooks/telepoints";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";

const Telepoints = () => {
  const { loading, error } = useTelepoints();

  const telepoints = useSelector((state: RootState) => state.user.telepoints);

  return (
    <>
      {loading && <p>Récupération de vos télépoints...</p>}
      {telepoints && <p>Vos télépoints {telepoints}</p>}
    </>
  );
};

export default Telepoints;

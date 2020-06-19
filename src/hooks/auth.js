import { useState, useEffect } from "react";
import userService from "../services/userServices";

function useGetUser() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    console.log("data:", data);
  }, [data]);
  const next = () => setStep(step >= 5 ? 5 : step + 1);
  const previous = () => setStep(step <= 1 ? 1 : step - 1);

  const find = () => {
    setLoading(true);
    userService
      .getUser()
      .then((user) => {
        setData(user);
        setLoading(false);
      })
      .catch((error) => {
        setData(error);
        setLoading(false);
      });
  };

  const save = (value) => {
    setLoading(true);
    userService
      .createUser(value)
      .then((user) => {
        console.log("postresutl:", user);
        setData(user);
        setLoading(false);
      })
      .catch((err) => {
        console.log("postresutl:", err);
        setData(err);
        setLoading(false);
      });
  };
  const login = async (options) => {
    setLoading(true);
    const user = await userService.login(options);
    setData(user);
    setLoading(false);
  };
  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  return {
    data,
    loading,
    step,
    previous,
    next,
    find,
    save,
    login,
    showLogin,
    openLogin,
    closeLogin,
  };
}

export default useGetUser;

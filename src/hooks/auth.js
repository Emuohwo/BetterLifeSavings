import {useState} from 'react';
import userService from '../services/userServices'

function useGetUser() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const next = () => setStep(step >= 5 ? 5 : step + 1);
  const previous = () => setStep(step <= 1 ? 1 : step - 1);

  const find = async () => {
    setLoading(true);
    const user = await userService.getUser();
    setData(user);
    setLoading(false);
  }
  
  const save = async (value) => {
    setLoading(true);
    const user = await userService.createUser(value);
    setData(user);
    setLoading(false);
  }
  const login = async (options) => {
    setLoading(true);
    const user = await userService.login(options);
    setData(user);
    setLoading(false);
  }

return {data, loading, step, previous, next, find, save, login};
}

export default useGetUser;
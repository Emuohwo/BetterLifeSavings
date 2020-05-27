import {useState} from 'react';
import axios from 'axios'
function useGetUser() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function init() {
    setData({});
    setLoading(true);
    setLoading(false)
  }

  async function find(url, timeout) {
    init();
    setLoading(true);
    try {
      const result = await axios.get(url, {timeout: timeout}).data;
      setData(result);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  }
  async function save(url, timeout) {
    init();
    setLoading(true);
    try {
      const result = await axios.post(url, {timeout: timeout}).data;
      setData(result);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  }

return {data, loading, error, find, save};
}

export default useGetUser;
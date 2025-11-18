import { useEffect, useState } from 'react'
import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL
const useFetchData = (url,loadData) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`${BASE_URL}/${url}`)
        setData(res.data.data)
      } catch (err) {
        setErr(false)
      }
      setLoading(false)
    }
    fetchData()
  }, [url,loadData])

  return { data, loading, err }
}

export default useFetchData

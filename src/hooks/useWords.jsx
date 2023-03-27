import { useState, useEffect } from "react"
import axios from "axios"

const useWords = (search) => {
  const [words, setWords] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setWords([])
    if (search) {
      setLoading(true)
      setError(false)
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then(({ data }) => {
          setWords(data)
          setLoading(false)
        })
        .catch((err) => {
          setError(true)
          setLoading(false)
        })
    }
  }, [search])

  return [words, loading, error]
}

export default useWords
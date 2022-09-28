import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export function useIsMounted() {
  const router = useRouter()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!router.isFallback) {
      // data is loaded
      return setLoaded(true)
    }
    return setLoaded(false)
  }, [router.isFallback])

  return loaded
}

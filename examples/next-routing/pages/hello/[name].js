import { useRouter } from "next/router"

export default () => {
  const router = useRouter()
  const { name } = router.query

  return <h1>Hello {name}</h1>
}

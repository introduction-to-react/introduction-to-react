import Head from "next/head"
import Link from "next/link"

export default () => (
  <>
    <Head>
      <title>Next Routing Example</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ul>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/hello/Alice">Hello</Link>
      </li>
      <li></li>
    </ul>
  </>
)

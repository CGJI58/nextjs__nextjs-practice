import { useRouter } from "next/router";

export default function all() {
  const router = useRouter();
  console.log(router);
  return router.asPath;
}

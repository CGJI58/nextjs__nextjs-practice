import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function all({ params }) {
  const router = useRouter();
  const [title, id] = params;
  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: { params },
  };
}

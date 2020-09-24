import { useRouter } from "next/router";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>first comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>second comment</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Post;

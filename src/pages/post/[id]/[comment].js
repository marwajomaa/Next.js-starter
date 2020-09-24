import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  const { id, comment } = router.query;
  return (
    <div>
      <p>post : {id}</p>
      <p>comment : {comment}</p>
    </div>
  );
};

export default Comment;

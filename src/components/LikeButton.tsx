import { useLikes } from '../context/LikesContext';

export function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button onClick={addLike} className="like-btn">
      ❤️ Likes: {likes}
    </button>
  );
}
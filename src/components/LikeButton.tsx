import { useLikes } from '../context/LikesContext';
import { Button } from './ui/Button';

export function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button
      variant="secondary"
      onClick={addLike}
      aria-label={`Like (${likes} likes)`}
    >
      ❤️ Likes: {likes}
    </Button>
  );
}
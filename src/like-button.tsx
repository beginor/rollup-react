import { useState } from 'react';

export function LikeButton() {

    const [liked, setLiked] = useState(false);

    if (liked) {
        return 'You liked this.'
    }

    return (
      <button className='btn m-2' onClick={() => setLiked(true)}>
        Like
      </button>
    );
}

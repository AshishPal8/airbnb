import React from 'react'
import { SafeUser } from '../types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
    listingId: string;
    currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({listingId, currentUser}) => {
    const hasFavorite = false;
    const toggleFavorite = () => {}

  return (
    <div onClick={toggleFavorite} className='relative hover:opacity-80 transition cursor-pointer'>
        <AiOutlineHeart size={28} className='absolute fill-white -top-[2px] -right-[2px]' />
        <AiFillHeart size={24} className={hasFavorite ? "fill-rose-500" : "fill-neutral-500/70"} />
    </div>
  )
}

export default HeartButton;
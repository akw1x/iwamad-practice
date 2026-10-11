import { createContext, useContext, useState, type ReactNode } from 'react';

type LikesContextValue = {
  likes: number;
  addLike: () => void;
};

const LikesContext = createContext<LikesContextValue | undefined>(undefined);

export function LikesProvider(props: { children: ReactNode }) {
  const [likes, setLikes] = useState(0);

  function addLike() {
    setLikes(likes + 1);
  }

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {props.children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error('useLikes must be used within a LikesProvider');
  }
  return context;
}
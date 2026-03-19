import { create } from "zustand";

export const useWishlistStore = create((set) => ({
  savedGames: [],
  addToWishlist: (game) =>
    set((state) => ({
      savedGames: state.savedGames.find((g) => g.id === game.id)
        ? state.savedGames
        : [...state.savedGames, game],
    })),

  removeFromWishlist: (gameId) =>
    set((state) => ({
      savedGames: state.savedGames.filter((g) => g.id !== gameId),
    })),
}));

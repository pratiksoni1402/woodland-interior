import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    increment: () => set((state) => ({count: state.count + 1})),
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
}))

export default useCartStore;
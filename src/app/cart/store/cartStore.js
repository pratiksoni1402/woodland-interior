import { create } from "zustand";

const useCartStore = create((set) => ({
    products: [],
    add: (id) => set((state) => ({ products: [...state.products].concat([id]) })),
    remove: (id) => set((state) => {
        let products = [...state.products]
        let productIndex = products.findIndex(v => v == id)

        if (productIndex != -1) {
            products.splice(productIndex, 1)
        }

        return { products: products }
    }),
}))
export default useCartStore;
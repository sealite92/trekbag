import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItem } from "../lib/constants";

export const itemStore = create(
  persist((set) => ({
    items: initialItem,

    addItem: (newItemText) => {
      const newItem = {
        id: new Date().getTime(),
        name: newItemText,
        packed: false,
      };

      set((state) => ({ items: [...state.items, newItem] }));
    },

    deleteItem: (id) => {
      set((state) => {
        const newItems = state.items.filter((item) => item.id != id);
        return { items: newItems };
      });
    },

    toggleItem: (id) => {
      set((state) => {
        const newItems = state.items.map((item) => {
          if (item.id === id) {
            return { ...item, packed: !item.packed };
          }
        });
        return { items: newItems };
      });
    },

    removeAllItems: () => {
      set(() => ({ items: [] }));
    },

    resetToInitial: () => {
      set(() => ({ items: initialItem }));
    },

    markAllComplete: () => {
      set((state) => {
        const newItems = state.items.map((item) => {
          return { ...item, packed: true };
        });
        return { items: newItems };
      });
    },

    markAllInComplete: () => {
      set((state) => {
        const newItems = state.items.map((item) => {
          return { ...item, packed: false };
        });
        return { items: newItems };
      });
    },
  }))
);

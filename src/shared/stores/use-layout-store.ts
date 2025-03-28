'use client';
import { create } from 'zustand';

interface LayoutState {
  page: React.ReactNode | null;
  setPage: (value: React.ReactNode | null) => void;
}

const useLayoutStore = create<LayoutState>()((set) => ({
  page: null,
  setPage: (value) => {
    set({
      page: value,
    });
  },
}));

export default useLayoutStore;

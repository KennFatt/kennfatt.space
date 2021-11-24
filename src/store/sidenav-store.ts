import create from "zustand";

interface ISideNavToggleStore {
  isSideNavToggled: boolean;
  toggleSideNav: () => void;
}

/**
 * Store to handle `<MobileSideNav>` cmoponent.
 * Controller: `<TopNav>`, `<MobileSideNav>`
 */
export const useSideNavStore = create<ISideNavToggleStore>((set) => ({
  isSideNavToggled: false,
  toggleSideNav: () =>
    set((state) => ({ isSideNavToggled: !state.isSideNavToggled })),
}));

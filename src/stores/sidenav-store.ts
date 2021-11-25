import create from "zustand";

type ISideNavStore = {
  isSideNavToggled: boolean;
};

/**
 * Store to handle `<MobileSideNav>` cmoponent.
 * Controller: `<TopNav>`, `<MobileSideNav>`
 */
export const useSideNavStore = create<ISideNavStore>(() => ({
  isSideNavToggled: false,
}));

export const toggleSideNav = () =>
  useSideNavStore.setState((state) => ({
    isSideNavToggled: !state.isSideNavToggled,
  }));

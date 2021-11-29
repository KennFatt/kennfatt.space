import create from "zustand";

export type IHeaderHeightStore = {
  offsetHeight?: number;
};

/**
 * Store to retrieve top-level header `offsetHeight` across components.
 *
 * The value should be only produced by 1 component, that is `<PageBaseLayout>`,
 *  then it can be used by multiple consumers.
 */
export const useHeaderHeightStore = create<IHeaderHeightStore>(() => ({
  offsetHeight: 0,
}));

export const setHeaderHeight = (offsetHeight?: number) =>
  useHeaderHeightStore.setState(() => ({ offsetHeight }));

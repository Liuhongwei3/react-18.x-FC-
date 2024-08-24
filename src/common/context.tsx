import { createContext, ReactNode, useContext } from 'react';

// 创建一个 Context
const StoreContext = createContext(null);

// 创建一个通用的 Context 提供者组件
export function StoreProvider({ store, children }: { store: any; children: ReactNode; }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

// 创建一个 Hook 来方便地使用 Context
export function useStore<T>() {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store as T;
};

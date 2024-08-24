import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => this.count++;

  decrement = () => this.count--;
}

// 这样可将 store 类型依次传递下去
export const StoresContext = createContext(new CounterStore());

import { StoreProvider } from '../../common/context';
import CounterStore from './store';
import SubChild1 from './SubChild1';

export default function Test1() {
  return (
    <StoreProvider store={CounterStore}>
        <div>Test1</div>
        <SubChild1 />
    </StoreProvider>
  )
};

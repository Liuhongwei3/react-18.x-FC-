import { StoreProvider } from '../../common/context';
import CounterStore from './store';
import SubChild1 from './SubChild1';

export default function Test2() {
  return (
    <StoreProvider store={CounterStore}>
        <div>Test2</div>
        <SubChild1 />
    </StoreProvider>
  )
};

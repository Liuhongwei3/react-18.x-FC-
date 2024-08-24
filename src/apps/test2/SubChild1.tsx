import { observer } from 'mobx-react-lite';
import { useStore } from '../../common/context';
import { CounterStore } from './store'
import { Button, Space } from 'antd';

const SubChild1 = observer(() => {
    const store = useStore<CounterStore>();
    console.log(2222);

    return (
        <center>
            <div>SubChild1</div>
            <div>{store.count}</div>
            <Space>
                <Button onClick={store.increment}>+</Button>
                <Button onClick={store.decrement}>-</Button>
            </Space>
        </center>
    )
});

export default SubChild1;

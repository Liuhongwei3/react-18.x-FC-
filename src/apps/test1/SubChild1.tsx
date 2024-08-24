import { Button, Space } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../common/context';
import { CounterStore } from './store'

const SubChild1 = observer(() => {
    const store = useStore<CounterStore>();
    console.log(1111);

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

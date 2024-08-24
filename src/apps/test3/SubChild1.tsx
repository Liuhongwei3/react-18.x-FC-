import { Button, Space } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from './hooks/useStore';


const SubChild1 = observer(() => {
    const store = useStores();
    console.log(3333);

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

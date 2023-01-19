import { GoodsItem } from './GoodsItem';
import axios from 'axios';
import {useState, useEffect} from 'react';

function GoodsList(props) {
  let {addToBasket = Function.prototype } = props;
  const [loading, setLoading] = useState(false);
  const [goods, changeGoods] = useState([])

  const loadingData = async () => {
    let data = []

    let responce = await axios.get('https://fakestoreapi.com/products')

    data = responce.data

    setLoading(true)

    changeGoods(data)
  }

  if (!loading)
    loadingData()

  console.log(goods)

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  } 

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export { GoodsList };

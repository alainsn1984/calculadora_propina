import { OrderItem } from "../types";
import { formatCurrency } from '../helpers/index';
import { OrderActions } from "../reducers/order-reducer";


type OrderContentProps = {
    order: OrderItem[],
    dispatch: React.Dispatch<OrderActions>
}

export default function OrderContent({order, dispatch}: OrderContentProps) {
  return (
    <div>
        <h2 className="font-black text-4xl"> Consumo </h2>
        <div className="space-y-3 mt-5">
            {
                
                order.map(item => (
                    <div 
                        className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b" 
                        key={item.id}>
                            <div>
                                <p>
                                    { item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                            <button 
                                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                onClick={()=> dispatch({type: 'remove-item', payload: {id: item.id}})}
                            >
                                x
                            </button>
                    </div>
                ))
                
            }
        </div>
    </div>
  )
}

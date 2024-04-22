
import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderContent from './components/OrderContent';
import OrderTotal from "./components/OrderTotal";
import TipPrecentageForm from "./components/TipPrecentageForm";

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="mt-6 space-y-3">
            {
              menuItems.map( item => (
                <MenuItem 
                  key={item.id} 
                  item={item}
                  addItem={addItem}
                />
              ))
            }
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {
            order.length > 0 ? 
            (
              <>
                <OrderContent 
                  order={order}
                  removeItem={removeItem}
                />
                <TipPrecentageForm 
                  setTip={setTip}
                  tip={tip}
                />

                <OrderTotal 
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : 
            (
              <p className="text-center">Orden Vacia</p> 
            )
          }
        </div>
      </main>
    </>
  )
}

export default App


import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import OrderContent from './components/OrderContent';
import OrderTotal from "./components/OrderTotal";
import TipPrecentageForm from "./components/TipPrecentageForm";
import { useReducer } from "react";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)
  
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
                  dispatch={dispatch}
                />
              ))
            }
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {
            state.order.length > 0 ? 
            (
              <>
                <OrderContent 
                  order={state.order}
                  dispatch={dispatch}
                />
                <TipPrecentageForm 
                  dispatch={dispatch}
                  tip={state.tip}
                />

                <OrderTotal 
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
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

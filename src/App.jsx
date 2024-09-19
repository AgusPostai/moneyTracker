import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <GlobalProvider>
      <TransactionForm />
      <Balance />
      <Header />
    </GlobalProvider>
  )
}

export default App;
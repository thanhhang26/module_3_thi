import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./component/ProductList";
import AddComponent from "./component/AddComponent";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path={"/add_product"} element={<AddComponent />}></Route>
				<Route path={"/back"} element={<ProductList />}></Route>
			</Routes>
		</>
	);
}

export default App;

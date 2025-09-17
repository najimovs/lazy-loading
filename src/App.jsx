import { Routes, Route } from "react-router"
import Home from "./Components/Home"
import About from "./Components/About"
import Contacts from "./Components/Contacts"

export default function () {

	return (
		<Routes>
			<Route path="/" element={ <Home /> } />
			<Route path="/about" element={ <About /> } />
			<Route path="/contacts" element={ <Contacts /> } />
		</Routes>
	)
}

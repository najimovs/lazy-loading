import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"
import Loading from "./Components/Loading"

const Home = lazy( () => import( "./Components/Home" ) )
const About = lazy( () => import( "./Components/About" ) )
const Contacts = lazy( () => import( "./Components/Contacts" ) )

export default function () {

	return (
		<Suspense fallback={ <Loading /> }>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/about" element={ <About /> } />
				<Route path="/contacts" element={ <Contacts /> } />
			</Routes>
		</Suspense>
	)
}

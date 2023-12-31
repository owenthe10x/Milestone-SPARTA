import map from '../../public/images/map.webp'
import Header from '../components/Header'
import dynamic from 'next/dynamic';
const MapWithNoSSR = dynamic(() => import("./clientpage"), {
    ssr: false
  });
const MapPage = () => {
	return (
		<>
			<Header
				header="POLLUTION MAP"
				desc="See the air condition on your neighborhood and start changing now!"
				image={map}
			/>
			<section className="pb-5 text-green8 font-paragraph font-bold text-center overflow-auto">
				<h2 className=" my-10 mx-5 text-green7 font-bold font-subheader text-5xl sm:text-6xl md:text-7xl lg:text-8xl md:mb-10">
					Click anywhere on the map to see the AQI of your location
				</h2>

				<MapWithNoSSR />
	</section>
		</>
	)
}

export default MapPage

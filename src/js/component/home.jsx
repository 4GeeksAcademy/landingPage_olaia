import React from "react";
import Card from "./card"
import Navbar from "./navbar"
import Jumbotron from "./jumbotron"
import Footer from "./footer"


//create your first component
const Home = () => {
	return (
		<div>
		 <Navbar/>
		 <div className="container">
			<Jumbotron/>
			
			<div className="container d-flex row">
			<Card title="Sally" text="El Dr. Finkelstein la creó para ser su ayudante, pero ella siempre se escapa de su laboratorio para salir a la Ciudad. Ella está enamorada de Jack, aunque éste no se da cuenta hasta el final de la película." imageSrc={"https://static.wikia.nocookie.net/disney/images/2/2e/Sally.png/revision/latest?cb=20111106121958&path-prefix=es"} />
            <Card title="Jack Skellington" text="Jack es un vivaz y carismático caballero, le gusta cantar entradas espectaculares y algunas veces expresa una situación o sentimientos. Siempre está buscando hacer nuevos amigos, pero generalmente asume (a veces incorrectamente) que los otros quieren ser sus amigos también." imageSrc={"https://static.wikia.nocookie.net/disney/images/2/24/JackSkelleton.png/revision/latest?cb=20140825075759&path-prefix=es"} />
            <Card title="Oogie Boogie" text="Oogie Boogie es un saco gigante, que contiene millones de insectos en su interior y, tal y como explica en su canción, le encanta apostar (haciendo trampa), especialmente cuando las vidas de otros están en juego." imageSrc={"https://lh3.googleusercontent.com/proxy/muf8XOMDV2d63SYUhv03piY1WFk2X53DAA83sLV2nUEla56TLaqFyr6fjOJR7YTdqDDjzEDxG9GSBisYa6fVuey_ezQBfdN-9ajmnyXzCuCN_tpLGCeDpzeptWuTaZ-eIdmuwXlZWlcWZuAh96250Z_HfBQSOM663IrT62pY2WtpMFV-xGEJCXFulK8Z7USQIFLOYhbG-1HgSyr5mraouMpBMqJWXnrFDsX13t5E4aOPTuw7veQYTLQKbcNkQ4gtHD-hTZQ11w9wW5Zy"} />
			<Card title="El Alcalde" text="El Alcalde es uno de los personajes más siniestros de Halloween debido precisamente a su extraña personalidad doble: cuando todo va bien, muestra su lado más feliz y alegre, que siempre está sonriente y emocionado, que es muy elocuente y da grandes discursos y además es amigo de todo el mundo." imageSrc={"https://static.wikia.nocookie.net/disney/images/e/e3/AlcaldeCiudadHalloween.png/revision/latest?cb=20111106123114&path-prefix=es"} />

				</div>
            

			
        
		 </div>
		 <Footer/>
		</div>
	);
};

export default Home;

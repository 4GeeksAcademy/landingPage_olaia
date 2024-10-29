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
			
			<div className="container d-flex">
			<Card imageSrc={"https://static.wikia.nocookie.net/disney/images/2/2e/Sally.png/revision/latest?cb=20111106121958&path-prefix=es"} />
            <Card imageSrc={"https://static.wikia.nocookie.net/disney/images/2/24/JackSkelleton.png/revision/latest?cb=20140825075759&path-prefix=es"} />
            <Card imageSrc={"https://lh3.googleusercontent.com/proxy/muf8XOMDV2d63SYUhv03piY1WFk2X53DAA83sLV2nUEla56TLaqFyr6fjOJR7YTdqDDjzEDxG9GSBisYa6fVuey_ezQBfdN-9ajmnyXzCuCN_tpLGCeDpzeptWuTaZ-eIdmuwXlZWlcWZuAh96250Z_HfBQSOM663IrT62pY2WtpMFV-xGEJCXFulK8Z7USQIFLOYhbG-1HgSyr5mraouMpBMqJWXnrFDsX13t5E4aOPTuw7veQYTLQKbcNkQ4gtHD-hTZQ11w9wW5Zy"} />
			<Card imageSrc={"https://static.wikia.nocookie.net/disney/images/e/e3/AlcaldeCiudadHalloween.png/revision/latest?cb=20111106123114&path-prefix=es"} />

				</div>
            

			
        
		 </div>
		 <Footer/>
		</div>
	);
};

export default Home;

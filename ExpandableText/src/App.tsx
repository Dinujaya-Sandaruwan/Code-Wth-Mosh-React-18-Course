import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpandableText from "./components/ExpandableText";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<ExpandableText maxCharsProp={200}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, ducimus
				quidem? Omnis qui magnam quam repellendus optio magni reprehenderit
				itaque, esse quasi expedita rem vero officia beatae veritatis sint
				architecto totam numquam ducimus ullam obcaecati mollitia laudantium id
				iusto a. Quia quibusdam pariatur tempore at similique id ipsa, commodi
				magnam harum esse repellat repellendus distinctio sit reiciendis officia
				asperiores eaque et, tempora soluta ex mollitia voluptas tenetur. Quidem
				molestiae aliquid esse libero, iste sit, et fuga blanditiis, eius
				consequuntur inventore! Odit iusto labore excepturi porro, repellat
				nostrum, quod in iure nesciunt recusandae molestias earum, cum vitae
				assumenda saepe reiciendis! Iure odio accusamus, doloremque, facilis
				maxime officiis unde consequuntur nihil enim eaque voluptatum alias
				quidem cum, tempora distinctio. Quas quos aperiam facilis doloribus
				provident labore vitae esse in id fugit doloremque debitis, officia,
				culpa cumque, corrupti beatae iure mollitia porro adipisci. Amet quam
				laudantium nemo consectetur tempore! Molestias alias, ipsa optio veniam
				suscipit ratione sapiente nam? Fugit iusto rerum nostrum labore quis
				dignissimos eveniet architecto soluta officiis asperiores repudiandae
				natus eius delectus molestiae doloremque sint, doloribus deleniti
				placeat officia quas? Commodi modi voluptatem ratione tempore ducimus
				voluptatum blanditiis eius voluptas minima mollitia esse voluptatibus
				nesciunt saepe dicta quaerat quam similique quas, fugit ipsam cupiditate
				porro rerum dolor numquam natus. Deserunt accusantium ea impedit
				assumenda magnam aut placeat ratione magni, modi, adipisci aliquid fugit
				repellendus animi neque illum. Distinctio nobis quod in. Tenetur rem
				mollitia veritatis, necessitatibus earum nam. Officiis natus, sapiente
				consequuntur quia debitis, excepturi minima temporibus optio cupiditate
				voluptates qui.
			</ExpandableText>
		</div>
	);
}

export default App;

import Highway from "@dogstudio/highway";
import {
	TimelineLite
} from "gsap";

class Fade extends Highway.Transition {

	in ({
		from,
		to,
		done
	}) {
		// responsible for page coming in
		const tl = new TimelineLite();
		tl.fromTo(to, 0.5, {
			left: "-100%",
			top: "50%"
		}, {
			left: "0%"
		})
			.fromTo(to, 0.5, {
				height: "2vh"
			}, {
				height: "90vh",
				top: "10%",
				onComplete: function () {
					done();
				}
			});
	}

	out({
		from,
		done
	}) {
		// responsible for page that's leaving
		done();
	}

}

export default Fade;
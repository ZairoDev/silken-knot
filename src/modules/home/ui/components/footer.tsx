import { LocateIcon } from "lucide-react";

export const Footer = () => {
	return (
		<footer className=" flex border-t justify-between font-medium p-6 border-t-black flex-wrap">
			<div className=" flex items-center gap-2 flex-wrap max-w-[300px]">
				<p>Silken Knot, Inc.</p>
				<p>
					Unleash the radiance of your inner beauty with our premium
					jewelry brand - a perfect blend of sophistication and style.
				</p>
			</div>
			<div className="flex flex-col justify-center items-start">
				<h2 className="text-xl font-bold mb-3">Account</h2>

				<button>Dashboard</button>
				<button>Orders</button>
				<button>WishList</button>
				<button>Addresses</button>
			</div>
			<div className="flex flex-col justify-center items-start">
				<h2 className="text-xl font-bold mb-3">Catelog</h2>

				<button>Dashboard</button>
				<button>Orders</button>
				<button>WishList</button>
				<button>Addresses</button>
			</div>
			<div className="flex flex-col justify-center items-start">
				<h2 className="text-xl font-bold mb-3">Help</h2>

				<button>Feature</button>
				<button>FAQ</button>
				<button>About Us</button>
				<button>Contact Us</button>
			</div>
			<div className=" flex items-center gap-2 flex-wrap max-w-[300px]">
				<h2 className="text-xl font-bold mb-3">Contact Us</h2>
				<p><LocateIcon/>117/N/70 3rd Floor, Kakadeo, Kanpur, India</p>
				<p>
					Email: hr@zairointernational.com
					<br />
					Phone: (+91) 95198 03665
				</p>
			</div>
		</footer>
	);
};

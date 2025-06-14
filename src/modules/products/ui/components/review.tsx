'use client'
import axios from "axios";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export const Review = () => {

    const submitReview = async (e: React.FormEvent<HTMLFormElement>) => {
        try{
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data  = Object.fromEntries(formData);
            const values = {...data, rating};
            // console.log(data);
            const response = await axios.post(`/api/products/reviews`, values);
            e.currentTarget.reset();
            // console.log(response.data);
        }catch(err){
            console.log(err);
        }
    }
	const [rating, setRating] = useState(0);

	return (
		<div className="w-full max-w-2xl mx-auto p-6 ">
			<div className="flex flex-col gap-4">
				<div>
					<h2 className="text-3xl font-semibold">Leave a Review</h2>
					<p className="text-sm text-gray-500 mt-1">
						Your email address will not be published. Required fields are marked *
					</p>
				</div>

				<form onSubmit={(e) => submitReview(e)} className="space-y-6">
					{/* Rating Section */}
					<div className="flex flex-col gap-2">
						<label className="font-medium text-gray-700">Your Rating*</label>
						<div className="flex gap-1">
							{[1, 2, 3, 4, 5].map((star) => (
								<button
									type="button"
									key={star}
									onClick={() => setRating(star)}
									className="text-yellow-500 hover:scale-110 transition-transform duration-200"
								>
									<Star
										fill={star <= rating ? "#facc15" : "none"}
										stroke="#facc15"
									/>
								</button>
							))}
						</div>
					</div>

					{/* Comment */}
					<div>
						<label htmlFor="comment" className="block font-medium text-gray-700 mb-1">
							Comment*
						</label>
						<textarea
							id="comment"
							name="comment"
							required
							rows={5}
							className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-yellow-400"
						/>
					</div>

					{/* Name */}
					<div>
						<label htmlFor="name" className="block font-medium text-gray-700 mb-1">
							Name*
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
						/>
					</div>

					{/* Email */}
					<div>
						<label htmlFor="email" className="block font-medium text-gray-700 mb-1">
							Email*
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-yellow-400"
						/>
					</div>

					{/* Submit Button */}
					<div>
						<button
							type="submit"
							className="px-6 py-2 bg-yellow-500 text-white font-semibold  hover:bg-yellow-600 transition-colors"
						>
							Submit Review
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

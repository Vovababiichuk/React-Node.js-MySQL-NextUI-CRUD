
// import { Input } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@nextui-org/react";
import axios from "axios";


export const Add = () => {
	//берем значення з введених даинних
	const [book, setBook] = useState({
		title: "",
		desc: "",
		cover: "",
		price: null,
	})

	const navigate = useNavigate()

	const handleChange = (e) => {
		setBook(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	console.log(book)

	const handleClick = async (e) => {
		e.preventDefault()
		try {
			await axios.post('http://localhost:8800/books', book)
			navigate("/")
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<h1>Add new Book</h1>
			<div className="flex w-full flex-wrap md:flex-nowrap gap-4 pt-10 max-w-md">
				<Input type="text" label="Title" onChange={handleChange} name="title" />
			</div>
			<div className="flex w-full flex-wrap md:flex-nowrap gap-4 pt-10 max-w-md">
				<Input type="text" label="Cover" onChange={handleChange} name="cover" />
			</div>
			<div className="flex flex-col gap-4 max-w-fit">
				<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 max-w-screen-lg">
					<Input
						onChange={handleChange}
						type="number"
						label="Price"
						name="price"
						placeholder="0.00"
						labelPlacement="outside"
						startContent={
							<div className="pointer-events-none flex items-center">
								<span className="text-default-400 text-small">$</span>
							</div>
						}
					/>
				</div>
			</div>
			<div>
				<Textarea
					onChange={handleChange}
					label="Description"
					labelPlacement="outside"
					placeholder="Enter your description"
					className="max-w-xs"
					name="desc"
				/>
			</div>

			<Link to="/update">
				<Button onClick={handleClick} endContent={<BsPlusCircle />} radius='sm' className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
					ADD NEW BOOK
				</Button>
			</Link>
		</>
	)
}

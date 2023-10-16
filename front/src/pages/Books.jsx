import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { BsPlusCircle } from "react-icons/bs";

export const Books = () => {
	const [books, setBooks] = useState([])

	// [] - in useEffect() означає що він запуститься лише один раз
	useEffect(() => {
		const fetchAllBooks = async () => {
			try {
				const res = await axios.get('http://localhost:8800/books')
				setBooks(res.data)
			} catch (err) {
				console.log(err)
			}
		}

		fetchAllBooks()
	}, [])

	// =========================

	// const list = [
	// 	{
	// 		title: "Orange",
	// 		img: "/images/fruit-1.jpeg",
	// 		price: "$5.50",
	// 	},
	// 	{
	// 		title: "Tangerine",
	// 		img: "/images/fruit-2.jpeg",
	// 		price: "$3.00",
	// 	},
	// 	{
	// 		title: "Raspberry",
	// 		img: "/images/fruit-3.jpeg",
	// 		price: "$10.00",
	// 	},
	// 	{
	// 		title: "Lemon",
	// 		img: "/images/fruit-4.jpeg",
	// 		price: "$5.30",
	// 	},
	// 	{
	// 		title: "Avocado",
	// 		img: "/images/fruit-5.jpeg",
	// 		price: "$15.70",
	// 	},
	// 	{
	// 		title: "Lemon 2",
	// 		img: "/images/fruit-6.jpeg",
	// 		price: "$8.00",
	// 	},
	// 	{
	// 		title: "Banana",
	// 		img: "/images/fruit-7.jpeg",
	// 		price: "$7.50",
	// 	},
	// 	{
	// 		title: "Watermelon",
	// 		img: "/images/fruit-8.jpeg",
	// 		price: "$12.20",
	// 	},
	// ];

	// ============================

	return (
		<>
			{/* <div>
				<h1 className='text-red-600 text-3xl'>Book Shop</h1>
				<div className='books'>
					{books.map((book) => (
						<div className='book' key={book.id}>
							{book.cover && <img src={book.cover} alt='' />}
							<h2>{book.title}</h2>
							<p>{book.desc}</p>
							<span>{book.price}</span>
						</div>
					))}
				</div>
			</div> */}

			{/* // ================== */}

			<div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
				{books.map((book) => (
					<Card shadow="sm" key={book.id} isPressable onPress={() => console.log("item pressed")}>
						<CardBody className="overflow-visible p-0">
							{/* <Image
								shadow="sm"
								radius="lg"
								width="100%"
								alt={book.title}
								className="w-full object-cover h-[140px]"
								src={'https://picsum.photos/200/300?random=1'}
							/> */}
							<Image
								isZoomed
								width={500}
								alt="NextUI hero Image"
								src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
							/>
						</CardBody>
						<CardFooter className="text-small justify-between">
							<b>{book.title}</b>
							<p className="text-default-500">{book.price}$</p>
						</CardFooter>
					</Card>
				))}
			</div>

			<Link to="/add">
				<Button endContent={<BsPlusCircle />} radius='sm' className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
					ADD NEW BOOK
				</Button>
			</Link>
		</>
	)
}

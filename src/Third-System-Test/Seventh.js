import { useState } from "react"

function Seventh() {
	const [input1, setInput1] = useState("")
	const [input2, setInput2] = useState("")
	const [output, setOutput] = useState([])

	const handleClick = () => {
		// Split the input values into pairs
		const pairs1 = input1.match(/[A-Za-z]+|\d+/g)
		const pairs2 = input2.match(/[A-Za-z]+|\d+/g)

		// Check that there are the same number of pairs in both input boxes
		if (pairs1.length !== pairs2.length) {
			alert("The number of pairs in the two input boxes must be the same.")
			return
		}

		// Create an array to hold the output pairs and values
		const outputArr = []

		// Iterate over the pairs and get the first character from the first pair and the second character from the second pair
		// Then get the values between those two characters
		for (let i = 0; i < pairs1.length; i++) {
			const firstChar = pairs1[i].charAt(0)
			const secondChar = pairs2[i].charAt(0)
			let outputStr = firstChar + secondChar

			for (
				let j = firstChar.charCodeAt(0) + 1;
				j < secondChar.charCodeAt(0);
				j++
			) {
				outputStr += String.fromCharCode(j)
			}

			outputArr.push(outputStr)
		}

		// Set the output state
		setOutput(outputArr)
	}

	return (
		<div>
			<input
				type="text"
				value={input1}
				onChange={(e) => setInput1(e.target.value)}
			/>
			<input
				onBlur={handleClick}
				type="text"
				value={input2}
				onChange={(e) => setInput2(e.target.value)}
			/>

			<ul>
				{output.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default Seventh

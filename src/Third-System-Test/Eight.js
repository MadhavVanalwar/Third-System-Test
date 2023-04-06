import React, { useState } from "react"

function Eight() {
	const [firstNumber, setFirstNumber] = useState("")
	const [secondNumber, setSecondNumber] = useState("")
	const [oddNumbers, setOddNumbers] = useState([])
	const [evenNumbers, setEvenNumbers] = useState([])

	const compareNumbers = () => {
		const firstNumberArray = firstNumber.split("").map(Number)
		const secondNumberArray = secondNumber.split("").map(Number)
		const oddNumbersArray = []
		const evenNumbersArray = []

		for (let i = 0; i < firstNumberArray.length; i++) {
			const currentFirstNumber = firstNumberArray[i]
			const currentSecondNumber = secondNumberArray[i]

			if (currentFirstNumber > currentSecondNumber) {
				for (let j = currentSecondNumber + 1; j < currentFirstNumber; j++) {
					if (j % 2 !== 0) {
						oddNumbersArray.push(j)
					} else if (j % 2 === 0) {
						evenNumbersArray.push(j)
					}
				}
			}
		}

		setOddNumbers(oddNumbersArray)
		setEvenNumbers(evenNumbersArray)
	}

	const handleFirstNumberChange = (event) => {
		setFirstNumber(event.target.value)
	}

	const handleSecondNumberChange = (event) => {
		setSecondNumber(event.target.value)
	}

	return (
		<div>
			<label></label>
			<label>
				First number:
				<input
					type="number"
					value={secondNumber}
					onChange={handleSecondNumberChange}
					onBlur={compareNumbers}
				/>
			</label>
			<br />
			Second number:
			<input
				type="number"
				value={firstNumber}
				onChange={handleFirstNumberChange}
				onBlur={compareNumbers}
			/>
			<p>Odd numbers in between: {oddNumbers.join(", ")}</p>
			<p>Even numbers in between: {evenNumbers.join(", ")}</p>
		</div>
	)
}

export default Eight

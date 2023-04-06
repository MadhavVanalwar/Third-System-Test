import React, { useState } from "react"

function formatNumbers(numbers) {
	let output = ""
	for (let i = 0; i < numbers.length; i++) {
		output += numbers[i] + "="
		for (let j = numbers[i]; j >= numbers[i] - 10 && j >= 0; j -= 2) {
			output += j + ","
		}
		output = output.slice(0, -1)
		output += "; "
	}
	return output
}

function Ten() {
	const [output, setOutput] = useState("")
	const handleInputBlur = (event) => {
		const input = event.target.value.trim()
		const inputValues = input.split(",")
		if (inputValues.length !== 5) {
			alert("Please enter exactly 5 comma-separated numbers.")
			return
		}
		const numbers = inputValues.map((value) => Number(value.trim()))
		const invalidNumbers = numbers.filter(
			(number) => !/^([1-9][0-9])$/.test(number)
		)
		if (invalidNumbers.length > 0) {
			alert("Please enter only two-digit numbers.")
		}
		setOutput(formatNumbers(numbers))
	}
	return (
		<div>
			<input onBlur={handleInputBlur} maxLength={14} />
			<h1>Output: {output}</h1>
		</div>
	)
}

export default Ten

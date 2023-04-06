import React, { useState } from "react"

function Second() {
	const [inputValue, setInputValue] = useState("")
	const [characters, setCharacters] = useState("")
	const [numbers, setNumbers] = useState("")
	const [specialChars, setSpecialChars] = useState("")

	const handleBlur = () => {
		// separate characters, numbers, and special characters
		const charsArray = inputValue.split("")
		const characters = charsArray
			.filter((char) => char.match(/[a-zA-Z]/))
			.sort()
			.join("")
		const numbers = charsArray
			.filter((char) => char.match(/[0-9]/))
			.sort()
			.join("")

		const specialChars = charsArray
			.filter((char) => !char.match(/[a-zA-Z0-9]/))
			.sort()
			.join("")

		// update state
		setCharacters(characters)
		setNumbers(numbers)
		if (
			specialChars.includes("-") ||
			specialChars.includes("+") ||
			specialChars.includes("=") ||
			specialChars.includes("/")
		) {
			alert("invalid Credential")
		} else {
			setSpecialChars(specialChars)
		}
	}

	return (
		<div className="App">
			<h1>Second Question</h1>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onBlur={handleBlur}
			/>
			<div>
				<p>Characters: {characters}</p>
				<p>Numbers: {numbers}</p>
				<p>Special Characters: {specialChars}</p>
			</div>
		</div>
	)
}

export default Second

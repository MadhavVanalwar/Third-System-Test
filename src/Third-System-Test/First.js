import React, { useState } from "react"

function First() {
	const [input, setInput] = useState("")
	const [digits, setDigits] = useState("")
	const [lowercase, setLowercase] = useState("")
	const [uppercase, setUppercase] = useState("")
	const [special, setSpecial] = useState("")

	const handleInput = (event) => {
		const inputValue = event.target.value
		setInput(inputValue)

		const forbiddenCharsRegex =
			/[\(\)\+\=\_\-\>\<\.\'\"\:\`\~\!\^\;\?\,\/\\\|\{\}\[\]]/g
		const value = event.target.value.replace(forbiddenCharsRegex, "")
		setInput(value)
	}

	const blurhandle = (event) => {
		const inputValue = event.target.value
		setInput(inputValue)
		let digitCount = 0
		let lowercaseCount = 0
		let uppercaseCount = 0
		let specialCount = 0

		let digitsString = ""
		let lowercaseString = ""
		let uppercaseString = ""
		let specialString = ""

		for (let i = 0; i < inputValue.length; i++) {
			const char = inputValue[i]
			if (/[0-9]/.test(char)) {
				digitCount++
				digitsString += char
			} else if (/[a-z]/.test(char)) {
				lowercaseCount++
				lowercaseString += char
			} else if (/[A-Z]/.test(char)) {
				uppercaseCount++
				uppercaseString += char
			} // } else if (
			// 	specialString.includes("-") ||
			// 	specialString.includes("+") ||
			// 	specialString.includes("=") ||
			// 	specialString.includes("/")
			// ) {
			// 	alert("invalid Credential")
			// } else {
			// 	specialCount++
			// 	specialString += char
			// }
			else if (
				specialString.includes("-") ||
				specialString.includes("+") ||
				specialString.includes("=") ||
				specialString.includes("/")
			) {
				alert("please input special char.")
			} else {
				specialCount++
				specialString += char
			}
		}

		setDigits(digitsString)
		setLowercase(lowercaseString)
		setUppercase(uppercaseString)
		setSpecial(specialString)
	}

	return (
		<>
			<div className="App">
				<h1>First Question</h1>
				<input
					type="text"
					value={input}
					onBlur={blurhandle}
					onChange={handleInput}
				/>
				<p>Digit count: {digits.length}</p>
				<p>Lowercase count: {lowercase.length}</p>
				<p>Uppercase count: {uppercase.length}</p>
				<p>Special count: {special.length}</p>
				<p>Digits: {digits}</p>
				<p>Lowercase: {lowercase}</p>
				<p>Uppercase: {uppercase}</p>
				<p>Special: {special}</p>
			</div>
		</>
	)
}

export default First

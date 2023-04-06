import { useState } from "react"

function Fourth() {
	const [input1, setInput1] = useState("")
	const [uniqueAlphabets, setUniqueAlphabets] = useState([])
	const [uniqueNumbers, setUniqueNumbers] = useState([])
	const [uniqueSpecialChars, setUniqueSpecialChars] = useState([])
	const [alpha, setAlpha] = useState("")
	const [num, setNum] = useState("")
	const [char, setChar] = useState("")

	function inputChange1(event) {
		const forbiddenCharsRegex =
			/[\(\)\+\=\_\-\>\<\.\'\"\:\`\~\!\^\;\?\,\/\\\|\{\}\[\]]/g
		const value = event.target.value.replace(forbiddenCharsRegex, "")
		setInput1(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const allCharacters = input1
		const alphabets = []
		const numbers = []
		const specialChars = []
		let countAlpha = 0
		let countNum = 0
		let countSpecialChar = 0

		for (let i = 0; i < allCharacters.length; i++) {
			const char = allCharacters[i]
			if (/[a-zA-Z]/.test(char)) {
				if (!alphabets.includes(char.toLowerCase())) {
					alphabets.push(char)
					countAlpha++
				}
			} else if (/[0-9]/.test(char)) {
				if (!numbers.includes(char)) {
					numbers.push(char)
					countNum++
				}
			} else {
				if (!specialChars.includes(char)) {
					specialChars.push(char)
					countSpecialChar++
				}
			}
		}

		setUniqueAlphabets(alphabets)
		setUniqueNumbers(
			numbers.sort((a, b) => {
				return a - b
			})
		)
		setUniqueSpecialChars(specialChars)
		setAlpha(countAlpha)
		setNum(countNum)
		setChar(countSpecialChar)
	}

	return (
		<>
			<div className="App">
				<h1>Fourth Question</h1>
				<h2>
					Enter any character and print count and that characters with assending
					Order
				</h2>
				<form onBlur={handleSubmit}>
					<input type="text" value={input1} onChange={inputChange1} />
					<br />
				</form>
				<br />
				<div>
					Unique alphabets count is <b>{alpha}</b> and{" "}
					<b>{uniqueAlphabets.sort().join(", ")}</b>
				</div>
				<br />
				<div>
					Unique numbers count is <b>{num}</b> and <b>{uniqueNumbers.join(", ")}</b>
				</div>
				<br />
				<div>
					Unique special characters count is <b>{char}</b> and{" "}
					<b>{uniqueSpecialChars.join(", ")}</b>
				</div>
			</div>
		</>
	)
}

export default Fourth

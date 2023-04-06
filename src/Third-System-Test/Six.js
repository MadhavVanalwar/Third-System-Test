import { useState } from "react"

export default function Six() {
	const [input1, setInput1] = useState("")
	const [input2, setInput2] = useState("")

	const [uniqueAlphabets, setUniqueAlphabets] = useState([])
	const [uniqueNumbers, setUniqueNumbers] = useState([])
	const [uniqueSpecialChars, setUniqueSpecialChars] = useState([])

	function inputChange1(event) {
		const forbiddenCharsRegex =
			/[\(\)\+\=\_\-\>\<\.\'\"\:\`\~\!\^\;\?\,\/\\\|\{\}\[\]]/g
		const value = event.target.value.replace(forbiddenCharsRegex, "")
		setInput1(value)
	}

	function inputChange2(event) {
		const forbiddenCharsRegex =
			/[\(\)\+\=\_\-\>\<\.\'\"\:\`\~\!\^\;\?\,\/\\\|\{\}\[\]]/g
		const value = event.target.value.replace(forbiddenCharsRegex, "")
		setInput2(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		let arr = []
		for (let i = 0; i < input1.length; i++) {
			for (let j = 0; j < input2.length; j++) {
				if (input1[i] === input2[j]) {
					arr.push(input1[i])
				}
			}
		}
		console.log(arr)
		const allCharacters = input1 + input2
		const alphabets = []
		const numbers = []
		const specialChars = []

		for (let i = 0; i < arr.length; i++) {
			const char = arr[i]
			if (/[a-zA-Z]/.test(char)) {
				if (!alphabets.includes(char.toLowerCase())) {
					alphabets.push(char)
				}
			} else if (/[0-9]/.test(char)) {
				if (!numbers.includes(char)) {
					numbers.push(char)
				}
			} else {
				if (!specialChars.includes(char)) {
					specialChars.push(char)
				}
			}
		}
		let myUnique = alphabets.map((item) => item.toLowerCase()).sort()
		let myUnique1 = [...new Set(myUnique)]
		setUniqueAlphabets(myUnique1)
		setUniqueNumbers(
			numbers.sort((a, b) => {
				return a - b
			})
		)
		setUniqueSpecialChars(specialChars)
	}

	return (
		<>
			<h1>Task6</h1>
			<form onBlur={handleSubmit}>
				<input type="text" value={input1} onChange={inputChange1} />
				<br />
				<input type="text" value={input2} onChange={inputChange2} />
			</form>
			<br />
			<h3>Unique alphabets: {uniqueAlphabets.join(", ")}</h3>
			<h3>Unique numbers: {uniqueNumbers.join(", ")}</h3>
			<h3>Unique special characters: {uniqueSpecialChars.join(", ")}</h3>
		</>
	)
}

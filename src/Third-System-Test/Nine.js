import React, { useState } from "react"

function Nine() {
	const [value, setValue] = useState("")
	const [count, setcount] = useState("")

	const handleChange = (e) => {
		const inputValue = e.target.value
		if (/^([0-9]{2},){0,4}[0-9]{0,2}$/.test(inputValue)) {
			setValue(inputValue)
		}
	}

	const handleBlur = () => {
		if (/^([0-9]{2},){4}[0-9]{2}$/.test(value)) {
			alert("Valid input:", value)
			setcount(value)
		} else {
			// alert("Invalid input:", value);
			// setcount(value)
		}
	}

	return (
		<div>
			<label>
				Input:
				<input
					type="text"
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</label>
			<h3> Valid No: {count}</h3>
		</div>
	)
}

export default Nine

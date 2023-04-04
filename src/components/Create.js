import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Create = () => {
	const [name, setName] = useState("")
	const [age, setAge] = useState("")
	const [email, setEmail] = useState("")

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		//to post data from backend
		await axios
			.post("https://642be68e208dfe2547226199.mockapi.io/crud", {
				e_name: name,
				e_age: age,
				e_email: email,
			})
			.then(() => {
				navigate("/")
			})
	}

	return (
		<>
			<div className="row">
				<div className="col-md-4">
					<div className="mb-2 mt-2">
						<Link to="/">
							<button className="btn btn-primary">Read Data</button>
						</Link>
					</div>
					<div className="bg-primary p-4 text-center">
						<h1>Create Data</h1>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>Enter Name:</label>
							<input
								type="text"
								placeholder="Name"
								className="form-control"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Enter Age:</label>
							<input
								type="number"
								placeholder="Age"
								className="form-control"
								onChange={(e) => setAge(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Enter Email:</label>
							<input
								type="email"
								placeholder="Email"
								className="form-control"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<br />
						<br />
						<div className="d-grid">
							<input type="submit" value="Submit" className="btn btn-primary" />
						</div>
					</form>
					{/* {name}
					{age}
					{email} */}
				</div>
			</div>
		</>
	)
}

export default Create

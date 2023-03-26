import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Form = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label className="form-label" htmlFor="name">
					Name
				</label>
				<input
					{...register("name")}
					// value={person.name}
					id="name"
					type="text"
					className="form-control"
				/>
			</div>
			<div className="mb-3">
				<label className="form-label" htmlFor="age">
					Age
				</label>
				<input
					{...register("age")}
					// value={person.age}
					id="age"
					type="number"
					className="form-control"
				/>
			</div>
			<button className="btn btn-primary">Submit</button>
		</form>
	);
};

export default Form;

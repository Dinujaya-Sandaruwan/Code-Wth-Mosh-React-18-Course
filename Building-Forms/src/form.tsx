import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

interface FormData {
	name: string;
	age: number;
}

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	// console.log(errors);

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
					{...register("name", { required: true, minLength: 3 })}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name?.type === "required" && (
					<p className="text-danger">The name feild is requaird</p>
				)}
				{errors.age?.type === "minLength" && (
					<p className="text-danger">Name must be 3 carectors</p>
				)}
			</div>
			<div className="mb-3">
				<label className="form-label" htmlFor="age">
					Age
				</label>
				<input
					{...register("age")}
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

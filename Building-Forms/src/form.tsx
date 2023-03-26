import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	name: z.string().min(3, { message: "Name must be 03 carectors" }),
	age: z
		.number({ invalid_type_error: "Age Feild Requaird" })
		.min(18, { message: "Age must be grater than 18" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });
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
					{...register("name")}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name && <p className="text-danger">{errors.name.message}</p>}
			</div>
			<div className="mb-3">
				<label className="form-label" htmlFor="age">
					Age
				</label>
				<input
					{...register("age", { valueAsNumber: true })}
					id="age"
					type="number"
					className="form-control"
				/>
				{errors.age && <p className="text-danger">{errors.age.message}</p>}
			</div>
			<button disabled={!isValid} className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export default Form;

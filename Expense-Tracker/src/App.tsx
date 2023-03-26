import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import React, { MouseEvent } from "react";

const schema = z.object({
	description: z
		.string()
		.min(3, { message: "Description should be at least 3 characters" }),
	amount: z.number().nonnegative({ message: "Amount required" }),
	category: z.string().min(3, { message: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

function App() {
	const [dataList, setDataList] = useState<Array<FormData>>([]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: FormData) => {
		setDataList((prevDataList) => [...prevDataList, { ...data }]);
	};

	const handleDelete = (index: number) => {
		setDataList((prevDataList) =>
			prevDataList.filter((_, itemIndex) => itemIndex !== index)
		);
	};

	return (
		<div className="App container">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input
						{...register("description")}
						type="text"
						className="form-control"
						id="description"
					/>
					{errors.description && (
						<div className="form-text text-danger-rd">
							{errors.description.message}
						</div>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="amount" className="form-label">
						Amount
					</label>
					<input
						{...register("amount", { valueAsNumber: true })}
						type="number"
						className="form-control"
						id="amount"
					/>
					{errors.amount && (
						<div className="form-text text-danger-rd">
							{errors.amount.message}
						</div>
					)}
				</div>
				<div className="mb-3">
					<label id="category" htmlFor="category-select" className="form-label">
						Category
					</label>
					<select
						{...register("category")}
						id="category-select"
						className="form-select"
						aria-label="Default select example"
					>
						<option value="">Select a category</option>
						<option value="Groceries">Groceries</option>
						<option value="Utilities">Utilities</option>
						<option value="Entertainment">Entertainment</option>
					</select>
					{errors.category && (
						<div className="form-text text-danger-rd">
							{errors.category.message}
						</div>
					)}
				</div>

				<button type="submit" className="btn btn-primary submit">
					Submit
				</button>
			</form>

			<table className="table table-dark table-striped">
				<thead>
					<tr>
						<th scope="col">Description</th>
						<th scope="col">Amount</th>
						<th scope="col">Category</th>
						<th scope="col">#</th>
					</tr>
				</thead>
				<tbody>
					{dataList.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.description}</td>
								<td>${item.amount}.00</td>
								<td>{item.category}</td>
								<td>
									<button
										type="button"
										className="btn btn-outline-danger"
										onClick={() => handleDelete(index)}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default App;

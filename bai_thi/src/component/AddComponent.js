import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { addNewProduct } from "../services/productService";
import * as Yup from "yup";

function AddComponent() {
	const [product, setProduct] = useState({ title: "", price: "", description: "" });

	const navigate = useNavigate();
	const handleSubmit = async (value) => {
		console.log(value);
		const product = {
			...value,
		};
		await addNewProduct(product);
		navigate("/");
	};
	const handleValidate = Yup.object({
		title: Yup.string().required("Tên sản phẩm không được để trống "),

		price: Yup.string().required("Số điện thoại không được để trống"),
		description: Yup.string()
			.required("Mô tả không để trống ")
			.matches(/^[A-ZÀ-Ỹ[a-zà-ỹ]*(\s[A-ZÀ-Ỹ[a-zà-ỹ]*)+$/, "Mô tả không đúng định dạng"), //^[A-ZÀ-Ỹ]: Tên bắt đầu bằng một chữ cái viết hoa, bao gồm cả các ký tự có dấu như À, Á, Â, Ă, Đ, Ê, Ô, Ơ, Ư,...
	});
	return (
		<div className="container d-flex justify-content-center align-items-center mt-5">
			<div className="card p-4 shadow" style={{ width: "400px" }}>
				<h3 className="text-center mb-4">Thêm sản phẩm</h3>
				<Formik initialValues={product} onSubmit={handleSubmit} validationSchema={handleValidate}>
					<Form>
						<div className="mb-3">
							<label className="form-label">Tên sản phẩm:</label>
							<Field type="text" name="title" className="form-control" placeholder="Tên sản phẩm" />
							<ErrorMessage name="title" style={{ color: "red" }} component="div" />
						</div>
						<div className="mb-3">
							<label className="form-label">Giá:</label>
							<Field type="text" name="price" className="form-control" placeholder="Nhập giá" />
							<ErrorMessage name="price" style={{ color: "red" }} component="div" />
						</div>
						<div className="mb-3">
							<div>
								<label className="form-label">Mô tả:</label>
								<Field as="textarea" name="description" className="form-control" placeholder="Nhập mô tả" />
								<ErrorMessage name="description" style={{ color: "red" }} component="div" />
							</div>
						</div>
						<div className=" d-flex justify-content-start">
							<button type="submit" className="btn btn-secondary me-3 ">
								Thêm
							</button>
							<Link type="button" className="btn btn-secondary me-3 " to="/back">
								Trở lại
							</Link>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	);
}
export default AddComponent;

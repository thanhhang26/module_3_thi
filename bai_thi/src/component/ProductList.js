import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { getAllProduct } from "../services/productService";
import { Link } from "react-router-dom";
import DeleteComponent from "./DeleteComponent";

function ProductList() {
	const [productList, setProductList] = useState([]);
	const [show, setShow] = useState(false);
	const [deleteProduct, setDeleteProduct] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const list = await getAllProduct();
			setProductList(list);
		};
		fetchData();
	}, [show]);

	const showModalDelete = (product) => {
		setDeleteProduct(product);
		setShow(true);
	};

	const closeModal = () => {
		setShow(false);
	};
	return (
		<div classname="container">
			<div className="card" style={{ width: "100%" }}>
				<div className="card-header ">Danh sách sản phẩm</div>
			</div>

			<form className="d-flex align-items-center justify-content-between my-3 container">
				<Link className="btn btn-sm btn-secondary d-flex justify-content-center" id="add-link" to="/add_product">
					Thêm mới
				</Link>
			</form>
			<div className="container">
				<table className="table table-light">
					<thead>
						<tr>
							<th className="text-center">ID</th>
							<th className="text-center">Tên sản phẩm</th>
							<th className="text-center">Giá</th>
							<th className="text-center">Mô tả</th>

							<th className="text-center" style={{ width: 200 }}></th>
						</tr>
					</thead>
					<tbody>
						{productList.map((p, i) => (
							<ProductItem key={p.id} product={p} i={i} showModalDelete={showModalDelete} />
						))}
					</tbody>
				</table>
				<DeleteComponent product={deleteProduct} show={show} closeModal={closeModal} />
			</div>
		</div>
	);
}

export default ProductList;

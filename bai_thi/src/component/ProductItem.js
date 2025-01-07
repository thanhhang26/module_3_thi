import React from "react";
import { Link } from "react-router-dom";
function ProductItem(props) {
	const { title, price, description } = props.product;
	return (
		<tr>
			<td className="text-center">{+props.i + 1}</td>
			<td className="text-center">{title}</td>
			<td className="text-center">{price}</td>
			<td className="text-center">{description}</td>

			<td className="text-center">
				<button onClick={() => props.showModalDelete(props.product)} className="btn btn-secondary me-3">
					Xoá
				</button>

				<button className="btn btn-secondary me-3">Sửa</button>
			</td>
		</tr>
	);
}
export default ProductItem;

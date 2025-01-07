import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteProductById } from "../services/productService";
function DeleteComponent(props) {
	const handleClose = async () => {
		await props.closeModal();
	};

	const handleDelete = async () => {
		try {
			// Đảm bảo rằng student.id tồn tại trước khi gọi delete
			if (props.product?.id) {
				await deleteProductById(props.product.id);
				handleClose();
			} else {
			}
		} catch (error) {
			return [];
		}
	};
	return (
		<>
			<Modal show={props.show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Xoá sản phẩm</Modal.Title>
				</Modal.Header>
				<Modal.Body>Bạn có muốn xoá sản phẩm không?</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Đóng
					</Button>
					<Button variant="primary" onClick={handleDelete}>
						Xoá
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default DeleteComponent;

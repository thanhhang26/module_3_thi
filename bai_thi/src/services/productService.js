import axios from "axios";
import { BASE_URL } from "./api";

export async function getAllProduct() {
	try {
		const response = await axios.get(`${BASE_URL}/products`);
		return response.data;
	} catch (e) {
		return [];
	}
}
export async function addNewProduct(product) {
	try {
		const response = await axios.post(`${BASE_URL}/products`, product);
		return response.data;
	} catch (e) {
		return [];
	}
}

export async function deleteProductById(id) {
	try {
		const response = await axios.delete(`${BASE_URL}/products/${id}`);
		return response.data;
	} catch (e) {
		return [];
	}
}

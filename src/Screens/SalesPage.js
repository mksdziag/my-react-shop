import React, { Component } from 'react';

import CategoryHeader from '../components/CategoryHeader';
import ProductCard from '../components/ProductCard';
import ProductPreview from '../components/ProductPreview';
import ModalBlank from '../components/UI/Modals/ModalBlank';
import http from '../utils/http';

class SalesPage extends Component {
	state = {
		currentProduct: null,
		isModalActive: false,
		products: [],
	};

	async componentDidMount() {
		try {
			const {data: products} = await http.get('products/sale');
			this.setState({products})			
		} catch (error) {
			console.log(error)
		}
	}
	

	showProductPreview = _id => {
		const currentProduct = this.state.products.find(product => product._id === _id);
		this.setState({ currentProduct, isModalActive: true });
	};

	closeProductPreview = () => {
		this.setState({ isModalActive: false });
	};

	render() {
		const { isModalActive, currentProduct, products } = this.state;

		const productCards = products.map(product => (
			<div key={product._id} className="column is-4-tablet is-3-widescreen">
				<ProductCard
					product={product}
					onQuickViewOpenHandler={() => this.showProductPreview(product._id)}
				/>
			</div>
		));

		return (
			<section className="section">
				<div className="container">
					<CategoryHeader title={'Sale!'} />
					<div className="columns is-multiline">{productCards}</div>
					<ModalBlank isModalActive={isModalActive} onCloseClick={this.closeProductPreview}>
						<ProductPreview product={{ ...currentProduct }} />
					</ModalBlank>
				</div>
			</section>
		);
	}
}

export default SalesPage;

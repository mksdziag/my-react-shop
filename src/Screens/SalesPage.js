import React, { Component } from 'react';

import products from '../database/products';

import CategoryHeader from '../components/CategoryHeader';
import ProductCard from '../components/ProductCard';
import ProductPreview from '../components/ProductPreview';
import ModalBlank from '../components/UI/Modals/ModalBlank';

class CategoryPage extends Component {
	state = {
		currentProduct: null,
		isModalActive: false,
		discountedProducts: products.filter(product => product.discount > 0),
	};

	showProductPreview = _id => {
		const currentProduct = this.state.discountedProducts.find(product => product._id === _id);
		this.setState({ currentProduct, isModalActive: true });
	};

	closeProductPreview = () => {
		this.setState({ isModalActive: false });
	};

	render() {
		const { isModalActive, currentProduct, discountedProducts } = this.state;

		const productCards = discountedProducts.map(product => (
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

export default CategoryPage;

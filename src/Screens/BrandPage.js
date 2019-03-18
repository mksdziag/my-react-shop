import React, { Component } from 'react';

import http from '../utils/http';

import ProductCard from '../components/ProductCard';
import ProductPreview from '../components/ProductPreview';
import ModalBlank from '../components/UI/Modals/ModalBlank';
import SubPageHeader from '../components/SubPageHeader';

class BrandPage extends Component {
	state = {
		brand: '',
		productsOfBrand: [],
		currentProduct: '',
		isPreviewActive: false,
	};

	// setting state when component mounts first time
	async componentDidMount() {
		const { brand } = this.props.match.params;
		const { data: productsOfBrand } = await http.get(`products/brand/${brand}`);

		this.setState({ brand, productsOfBrand });
	}

	// if route changes fetching and filtering products
	async componentDidUpdate(prevProps) {
		const currentBrand = this.props.match.params.brand;
		const previousBrand = prevProps.match.params.brand;

		if (currentBrand !== previousBrand) {
			const { data: productsOfBrand } = await http.get(`products/brand/${currentBrand}`);
			this.setState({ brand: currentBrand, productsOfBrand });
		}
	}

	showProductPreview = _id => {
		const currentProduct = this.state.productsOfBrand.find(product => product._id === _id);
		this.setState({ currentProduct, isPreviewActive: true });
	};

	closeProductPreview = () => {
		this.setState({ isPreviewActive: false });
	};

	render() {
		const { brand, isPreviewActive, currentProduct, productsOfBrand } = this.state;

		const productCards = productsOfBrand.map(product => (
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
					<SubPageHeader
						title={brand}
						subtitle={`In clothes of ${brand} every woman feels special`}
					/>
					<div className="columns is-multiline">{productCards}</div>
					<ModalBlank isModalActive={isPreviewActive} onCloseClick={this.closeProductPreview}>
						<ProductPreview product={{ ...currentProduct }} />
					</ModalBlank>
				</div>
			</section>
		);
	}
}

export default BrandPage;

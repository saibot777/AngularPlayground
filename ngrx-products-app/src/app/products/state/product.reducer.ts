import {Product} from '../product';
import * as fromRoot from '../../state/app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

const getProductsFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductsFeatureState,
  state => state.showProductCode
);

export function reducer(state = initialState, action): ProductState {
  switch (action.type) {

    case 'TOGGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: action.payload
      };

    default:
      return state;
  }
}

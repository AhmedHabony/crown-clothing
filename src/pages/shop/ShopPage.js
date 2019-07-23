import React, {Component} from 'react';

import {SHOP_DATA} from './shopData'
import CollectionPreview from '../../components/collectionPreview/CollectionPreview'

class ShopPage extends Component {

    state = {
        collections: SHOP_DATA
    }

    render() {

        const {collections} = this.state;

        return (
            <div className={'shop_page'}>
                {
                    collections.map(({id, ...otherProps}) => (

                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
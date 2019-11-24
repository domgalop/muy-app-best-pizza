import Footer from '../containers/Footer';
import React, { Component } from 'react';
import StoresContainer from '../containers/Stores-container';
import storeInfo from '../utils/storesInfo/stores-info';
import '../css/Select-pizza-page.scss';

class SelectPagePizza extends Component  {

    state = {
        storeInfo: storeInfo,
        filteredStores: []
    }

    componentDidMount (){
        this.setState({
            filteredStores: storeInfo
        });
    };

    render() {
        return (
            <section className='select__page'>
                <div className='select__page__exit'>
                    <button {...this.getButtonProps()}>
                        <i class="fas fa-lock"></i>Salir
                    </button>
                </div>
                <input type="text" {...this.getInputProps()}/>
                <div className='select__page__info'>
                    <h2>Tiendas</h2>
                    <p>Escoge Tu pizzería favorita</p>
                </div>
                <StoresContainer {...this.getStoresContainerProps()}/>
                <Footer />
            </section>
        );
    };

    getInputProps = () => {
        return {
            className: 'search__store',
            onChange: e => this.filterStores(e),
            placeholder: 'Pizzerías'
        }
    }

    getButtonProps = () => {
        return {
            className:'select__page__exit__button',
            onClick: this.redirectToLogin
        };
    };

    getStoresContainerProps = () => {
        return {
            className: 'select__page__stores__container',
            storeInfo: this.state.filteredStores
        }
    }

    redirectToLogin = () => {
        this.props.history.push('/login/')
    };

    filterStores = e => {
        let selectStore = this.state.storeInfo;

        if (e.target.value === '') {
            selectStore = this.state.storeInfo
        } else {
            selectStore = this.state.storeInfo.filter( element => {
                if (element.storeName.toLowerCase().includes(e.target.value.toLowerCase())) {
                    return element;
                }
            });
        }

        this.setState({
            filteredStores: selectStore
        });
    }
};

export default SelectPagePizza;
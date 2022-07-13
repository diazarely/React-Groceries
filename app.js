const groceryList = [{
    item: 'Party Time Cola',
    brand: 'UGotIt',
    units: "pack",
    quantity: 12,
    isPurchased: false
  },
  {
    item: 'steak',
    brand: 'Local Market',
    units: 'lb',
    quantity: 1,
    isPurchased: true
  },
  {
    item: 'Pineapple Seltzer',
    brand: 'MouseHouse',
    units: "liters",
    quantity: 2,
    isPurchased: true
  }]

class App extends React.Component {
    // state
    state = {
        products : groceryList,
        item: "",
        brand: "",
        units: '',
        quantity: 0,
        isPurchased: false,
        
    }


    handleChange = (event) => {
        if (event.target.id === "isPurchased") {
            this.setState({
                [event.target.id]: event.target.checked
            })

        } else {

            this.setState({
                [event.target.id]: event.target.value
            })

        }

    }
    // method
    handleSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: this.state.isPurchased
        }
        console.log(newItem)

        // sort by name
        this.setState({
            products: [newItem, ...this.state.products]
        })
    }


    // render
    render() {

        return (
            <div>
                <header>
                    <h1>Grocery List</h1>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="item">Item</label>
                    <input type='text' id="item" value={this.state.item} onChange={this.handleChange} />
                    <label htmlFor="brand">Brand</label>
                    <input type='text' id="brand" value={this.state.brand} onChange={this.handleChange} />
                    <label htmlFor="units">Units</label>
                    <input type='text' id="units" value={this.state.units} onChange={this.handleChange} />
                    <label htmlFor="quantity">Quantity</label>
                    <input type='number' id="quantity" value={this.state.quantity} onChange={this.handleChange} />
                    <label>Is Purchased:</label>
                    <input type="checkbox" id="isPurchased" onChange={this.handleChange} />
                    <input type='submit' ></input>
                </form>

                <div>
                    <h2> new item</h2>
                    <h3>Item: {this.state.item}</h3>
                    <h4>Brand: {this.state.brand}</h4>
                    <h5>Units: {this.state.units}</h5>
                    <h6>Quantity: {this.state.quantity}</h6>
                </div>

                <h1>PRODUCTS</h1>
                {<ul>
                    {this.state.products.sort((firstProduct, secondProduct) => firstProduct.item.localeCompare(secondProduct.item)).map(product => <li>{product.item} &emsp; {product.brand} &emsp; {product.units} &emsp; {product.quantity}</li>)}
                </ul>}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector(".container"))

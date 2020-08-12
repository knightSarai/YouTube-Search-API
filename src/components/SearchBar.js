import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {searchTerm: ""}
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }

    onFormSubmit(evt) {
        evt.preventDefault();
        this.props.onSearchSubmit(this.state.searchTerm)
    }

    render() {
        return (
            <div className="SearchBar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="searchTerm">Search </label>
                        <input name="searchTerm" type="text" value={this.state.searchTerm} onChange={this.onInputChange}/>
                    </div>         
                </form>
            </div>
        )
    }
}

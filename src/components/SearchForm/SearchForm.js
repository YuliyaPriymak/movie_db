import React, {Component, createRef, Fragment} from "react";
import {apiKey} from "../../constants";

export class SearchForm extends Component {

    valueRef = createRef();

    onSubmit = (e, pageNumber) => {
        e.preventDefault();
        const {onSearchChange, setPageNum} = this.props;
        console.log('ss', this.valueRef.current.value);
        setPageNum(pageNumber);
        onSearchChange(`https://api.themoviedb.org/3/search/movie?page=${pageNumber}&query=${this.valueRef.current.value}&api_key=${apiKey}`)
    };

    render() {
        return (
            <Fragment>
                <form className='' onSubmit={this.onSubmit}>
                    <div className='input-group mx-sm-3 mb-2'>
                        <input
                            className='form-control'
                            ref={this.valueRef}
                            type="text"
                            placeholder={'enter movie title'}
                            defaultValue=""
                        />
                        <button className='btn btn-outline-secondary' type='submit'>search</button>
                    </div>
                </form>
            </Fragment>
        )
    }
}

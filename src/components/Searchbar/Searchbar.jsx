import PropTypes from 'prop-types';
import { MdOutlineImageSearch } from 'react-icons/md';
import { Formik } from 'formik';
import { Header, SearchForm, Button, Span, Input } from './Searchbar.styled';
import { Component } from 'react';


class Searchbar extends Component {
 
  handleSubmit = ({q}, { resetForm }) => {
    this.props.onSubmit(q);
    resetForm();
  };
  render() {
    return (
      <Header>
        <Formik initialValues={{ q: '' }} onSubmit={this.handleSubmit}>
          <SearchForm >
            <Button type="submit">
              <MdOutlineImageSearch size={30} />
              <Span>Search</Span>
            </Button>

            <Input
              name='q'
              type="text"
              placeholder="Search images and photos"
            />
          </SearchForm>
        </Formik>
      </Header>
        
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}


export default Searchbar

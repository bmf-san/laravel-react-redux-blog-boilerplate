import React, {Component, PropTypes} from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';
import ReactTags from 'react-tag-autocomplete';
import {createPost, fetchTags, suggestionTags, deleteCompleteTags, addCompleteTags} from '../actions/index';
import {Link} from 'react-router';

const validate = props => {
  const errors = {}

  if (!props.title) {
    errors.title = "Required"
  }
  if (!props.content) {
    errors.content = "Required"
  }

  return errors;
}

const renderTitleField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error
  }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>{touched && ((error && <span>{error}</span>))}
    </div>
  </div>
)

const renderContentField = ({
  input,
  label,
  meta: {
    touched,
    error
  }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} cols="30" rows="10"></textarea>
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
)

class NewPost extends Component {
  componentWillMount() {
    this.props.fetchTags();
  }

  onSubmit(props) {
    const {createPost, reset} = this.props;

    // formating the data
    const data = {
      "title": props.title,
      "tag": this.props.tags.complete_tags,
      "category": "Here is category",
      "content": props.content,
      "publication_status": "Here is status"
    };

    return createPost(props).then((res) => {
      // if (res.error) {
      //   const validation_msg = res.payload.response.data.messages
      //
      //   throw new SubmissionError({
      //     title: [validation_msg.title]
      //   });
      // } else {
      //   reset();
      // }
    })
  }

  handleDelete(index) {
    const {deleteCompleteTags} = this.props;

    deleteCompleteTags(index);
  }

  handleAddition(props) {
    const {addCompleteTags} = this.props;

    addCompleteTags(props);
  }

  render() {
    const {handleSubmit} = this.props

    const suggestions = this.props.tags.all.map((tag) => {
      return {id: tag.id, name: tag.name}
    });

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" type="text" component={renderTitleField} placeholder="Title"/>
          <ReactTags tags={this.props.tags.complete_tags} suggestions={suggestions} handleDelete={this.handleDelete.bind(this)} handleAddition={this.handleAddition.bind(this)} allowNew={true}/>
          <Field name="content" component={renderContentField} placeholder="Content"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const form = reduxForm({form: 'NewPostForm', validate})(NewPost)

function mapStateToProps(state) {
  return {tags: state.tags}
}

export default connect(mapStateToProps, {createPost, fetchTags, deleteCompleteTags, addCompleteTags})(form);
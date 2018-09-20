import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      location: "",
      photoFile: null,
      photoUrl: null
    };
  }

  handleInput(field) {
    return (e) => {
      return this.setState({[field]: e.currentTarget.value});
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[location]', this.state.location);

    if (this.state.photoFile) {
      formData.append('photo[file]', this.state.photoFile);
    }
    $.ajax({
      url: '/api/photos',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response),
      (response) => {
        console.log(response.responseJSON);
      }
    ).then(this.props.history.push('/feed'));
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

    return (
      <form className="upload-form" onSubmit={this.handleSubmit.bind(this)}>
        <label className="upload_title">Upload Form</label>


        <TextField type="text"
          id="post-title"
          label="Title"
          value={this.state.title}
          onChange={this.handleInput("title")}
          placeholder="Title"/>

          <TextField type="text"
            id="post-desc"
            value={this.state.description}
            onChange={this.handleInput("description")}
            placeholder="Description"
            label="Description"/>

            <TextField type="text"
              id="post-loc"
              value={this.state.location}
              onChange={this.handleInput("location")}
              placeholder="Location"
              label="Location"/>

        <input type="file"
          onChange={this.handleFile.bind(this)}
          className="choose_file"/>
        <h3>Image preview </h3>
        <input type="submit" value="Upload Photo" className="choose_file"/>
        <div className="preview">{preview}</div>
      </form>
    );
  }
}

export default withStyles(styles)(Form);

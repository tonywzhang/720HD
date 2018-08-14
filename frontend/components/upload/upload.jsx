import React from 'react';
import { Link } from 'react-router-dom';

export default class Form extends React.Component {
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
        console.log(response.responseJSON)
      }
    );
  }

  render() {
    console.log(this.state);
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <form className="upload-form" onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="post-title">Title</label>
        <br/>
        <input type="text"
          id="post-title"
          value={this.state.title}
          onChange={this.handleInput("title")}/>
        <br/>
        <br/>
          <label htmlFor="post-desc">Description</label>
          <br/>
          <input type="text"
            id="post-desc"
            value={this.state.description}
            onChange={this.handleInput("description")}/>
          <br/>
          <br/>
            <label htmlFor="post-loc">Location</label>
            <br/>
            <input type="text"
              id="post-loc"
              value={this.state.location}
              onChange={this.handleInput("location")}/>
            <br/>
            <br/>
        <input type="file"
          onChange={this.handleFile.bind(this)}/>
        <h3>Image preview </h3>
        <div className="preview">{preview}</div>
        <Link to={'/feed'}>Upload Photo</Link>
      </form>
    );
  }
}

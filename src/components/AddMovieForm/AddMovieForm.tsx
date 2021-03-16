import * as React from "react";

class AddMovieForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModalWindow = this.closeModalWindow.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    console.log("AddMovie: submit", this.state.value);
    event.preventDefault();
  }

  closeModalWindow() {
    console.log("AddMovie: close", this.props);
    this.props.closeAddMovieForm();
  }

  render() {
    return (
      <div className="AddMovieForm__form-container">
        <form onSubmit={this.handleSubmit}>
          <label>TITLE</label>
          <input type="text" placeholder="Title here"></input>
          <label>RELEASE DATE</label>
          <input type="date" placeholder="Select Date"></input>
          <label>MOVIE URL</label>
          <input type="text" placeholder="Movie URL here"></input>
          <label>GENRE</label>
          <input type="select" placeholder="Select Genre"></input>
          <label>OVERVIEW</label>
          <input type="text" placeholder="Overview here"></input>
          <label>RUNTIME</label>
          <input type="text" placeholder="Runtime here"></input>

          <div className="ModalWindow__control-block-container">
            <button
              onClick={this.closeModalWindow}
              className="ModalWindow__button-light"
            >
              RESET
            </button>
            <input
              type="submit"
              value="SUBMIT"
              className="ModalWindow__button-filled"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddMovieForm;

import React from "react";
import { Component } from "react";
import Color from "./Color";
import Title from "./Title";
import Date from "./Date";
import Time from "./Time";
import Location from "./Location";
import Logo from "./Logo";
import File from "./File";
import Image from "./Image";

export default class Customizer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      file: "",
    };

    console.log(props.state);
  }
  // I am moving this is editor
  // handleChange = (e) => {
  //   const name = "file";
  //   // console.log(e.target.files);
  //   const selectedFile = URL.createObjectURL(e.target.files[0]);
  //   this.setState(() => ({
  //     [name]: selectedFile,
  //   }));
  //   // console.log(selectedFile);
  // };
  render() {
    return (
      <div className="Customizer">
        <Color onColorChange={this.props.onColorChange} name="color" value={this.props.value}></Color>
        <Title onInputChange={this.props.onInputChange} name="title" value={this.props.value}></Title>
        <Date onInputChange={this.props.onInputChange} name="date" value={this.props.value}></Date>
        <Time onInputChange={this.props.onInputChange} name="time" value={this.props.value}></Time>
        <Location onInputChange={this.props.onInputChange} name="location" value={this.props.value}></Location>
        <Image onImageChange={this.props.onImageChange} onImageUpload={this.props.onImageUpload} name="image" value={this.props.value}></Image>
        <Logo onLogoChange={this.props.onLogoChange} name="logo" value={this.props.value}></Logo>
        <File handleChange={this.props.onImageUpload} state={this.props.state}></File>
      </div>
    );
  }
}

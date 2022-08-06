import { Component } from "react";
import GlobalStyled from "./Wrapper/GlobalStyled.styled";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";



export class App extends Component {

  render() {
    return (
      <GlobalStyled>
        <Searchbar />
        <ImageGallery />
      <Button />
      </GlobalStyled>
    );
  }
}

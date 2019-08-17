import React from "react";
import { NavBar } from "./navbar";
import { Toolbar } from "./toolbar";
import { Articles } from "./articles";
import { ArticlesData } from "./data/";
import "./App.css";

class App extends React.Component {
  state = { inputText: "", sortBy: "popularity" };

  filteredArticles = ArticlesData.filter(article =>
    article.title.toLowerCase().includes(this.state.inputText.toLowerCase())
  );

  handleInputChange = inputText => {
    this.setState({ inputText });
  };

  handleSelectChange = sortBy => {
    this.setState({ sortBy });
  };

  sortBy = articles => {
    if (this.state.sortBy === "popularity") {
      return articles.sort((a, b) => a.comments < b.comments);
    } else if (this.state.sortBy === "rating")
      return articles.sort((a, b) => a.points < b.points);
  };

  render() {
    return (
      <div className="App">
        <NavBar handleInputChange={this.handleInputChange} />
        <Toolbar handleSelectChange={this.handleSelectChange} />
        <Articles
          searchFilter={this.state.inputText}
          articles={this.sortBy(this.filteredArticles)}
        />
      </div>
    );
  }
}

export default App;

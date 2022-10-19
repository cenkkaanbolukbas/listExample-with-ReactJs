import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  /* constructor(props) {
    //dışardan parametre ile category list geldi

    super(props); // burada componente taşımış oluyoruz.
    
    
  } */ // CONSTRUCTOR KURMADANDA YAPABILIYORUZ YENI ÖZELLİKTE.
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {/* yeni versiyonlarda constructor kurmamıza gerek yok istersek direk böylede getirebiliyoruz */}
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

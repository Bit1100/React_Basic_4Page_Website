import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Blogs from "./components/blogs";
import About from "./components/about";
import Contact from "./components/contact";
import homeImg from "./assets/img/logo2.jpg";
import blogImg from "./assets/img/blog.jpg";
import aboutImg from "./assets/img/about2.jpg";
import contactImg from "./assets/img/logo.jpg";
import Facebook from "./assets/logoimg/fb.png";
import Youtube from "./assets/logoimg/yt.png";
import Instagram from "./assets/logoimg/insta.png";
import Github from "./assets/logoimg/github.png";
import { HomeProvider } from "./components/context";
import { BlogProvider } from "./components/context";

export const images = [Facebook, Youtube, Instagram, Github];

var idLeft = 2;
var idRight = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        { id: 1, value: "All" },
        { id: 2, value: "Conceptual-Oriented" },
        { id: 3, value: "Progressive-Oriented" },
        { id: 4, value: "Project-Oriented" },
        { id: 5, value: "Solution-Oriented" },
      ],
      items: [
        { id: 1, value: "Item-1", category: "Conceptual-Oriented" },
        { id: 2, value: "Item-2", category: "Solution-Oriented" },
        { id: 3, value: "Item-3", category: "Progressive-Oriented" },
        { id: 4, value: "Item-4", category: "Project-Oriented" },
        { id: 5, value: "Item-5", category: "Conceptual-Oriented" },
        { id: 6, value: "Item-6", category: "Progressive-Oriented" },
        { id: 7, value: "Item-7", category: "Conceptual-Oriented" },
        { id: 8, value: "Item-8", category: "Project-Oriented" },
        { id: 9, value: "Item-9", category: "Solution-Oriented" },
      ],
      fitems: [
        { id: 1, value: "Item-1", category: "Conceptual-Oriented" },
        { id: 2, value: "Item-2", category: "Solution-Oriented" },
        { id: 3, value: "Item-3", category: "Progressive-Oriented" },
        { id: 4, value: "Item-4", category: "Project-Oriented" },
        { id: 5, value: "Item-5", category: "Conceptual-Oriented" },
        { id: 6, value: "Item-6", category: "Progressive-Oriented" },
        { id: 7, value: "Item-7", category: "Conceptual-Oriented" },
        { id: 8, value: "Item-8", category: "Project-Oriented" },
        { id: 9, value: "Item-9", category: "Solution-Oriented" },
      ],
      services: [
        {
          id: 1,
          image: homeImg,
          heading: "Learn Via Videos",
          para:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas quod quis ducimus quisquam quae, blanditiis recusandae eum aliquam tempora?",
        },
        {
          id: 2,
          image: blogImg,
          heading: "Learn Via Blogs",
          para:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas quod quis ducimus quisquam quae, blanditiis recusandae eum aliquam tempora?",
        },
        {
          id: 3,
          image: contactImg,
          heading: "Learn Via Quizzes",
          para:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas quod quis ducimus quisquam quae, blanditiis recusandae eum aliquam tempora?",
        },
      ],
      singleService: {
        id: 1,
        image: homeImg,
        heading: "Learn Via Videos",
        para:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas quod quis ducimus quisquam quae, blanditiis recusandae eum aliquam tempora?",
      },
    };
  }

  handleLeftClick = () => {
    if (idLeft > -1) {
      this.setState({ singleService: this.state.services[idLeft] });
      idLeft--;
    } else idLeft = this.state.services.length - 1;
  };
  handleRightClick = () => {
    if (idRight < this.state.services.length) {
      this.setState({ singleService: this.state.services[idRight] });
      idRight++;
    } else idRight = 0;
  };
  handleShowAll = (category) => {
    const items = this.state.items.filter((item) => item.category !== category);
    this.setState({ fitems: items });
  };
  handleShowConcept = (category) => {
    const items = this.state.items.filter((item) => item.category === category);
    this.setState({ fitems: items });
  };
  handleShowProgress = (category) => {
    const items = this.state.items.filter((item) => item.category === category);
    this.setState({ fitems: items });
  };
  handleShowProject = (category) => {
    const items = this.state.items.filter((item) => item.category === category);
    this.setState({ fitems: items });
  };
  handleShowSolution = (category) => {
    const items = this.state.items.filter((item) => item.category === category);
    this.setState({ fitems: items });
  };
  render() {
    const valueHome = {
      singleService: this.state.singleService,
      services: this.state.services,
      onLeftClick: this.handleLeftClick,
      onRightClick: this.handleRightClick,
    };
    const valueBlog = {
      categories: this.state.categories,
      fitems: this.state.fitems,
      items: this.state.items,
      onShowAll: this.handleShowAll,
      onShowConcept: this.handleShowConcept,
      onShowProgress: this.handleShowProgress,
      onShowProject: this.handleShowProject,
      onShowSolution: this.handleShowSolution,
    };
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomeProvider value={valueHome}>
                <Home image={homeImg} />
              </HomeProvider>
            </Route>
            <Route path="/blogs">
              <BlogProvider value={valueBlog}>
                <Blogs image={blogImg} />
              </BlogProvider>
            </Route>
            <Route path="/about">
              <About image={aboutImg} />
            </Route>
            <Route path="/contact">
              <Contact image={contactImg} />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;

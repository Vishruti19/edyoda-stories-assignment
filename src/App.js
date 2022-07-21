import React from "react";
import "./App.css";
import "./styles.css";
import Card from "./components/Card";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";

class App extends React.PureComponent {
  dataObject = {
    filters: [
      "All",
      "Artificial Intelligence",
      "Cloud Computing",
      "DevOps",
      "Progamming Languages",
      "Mobile Application Development",
      "Technology and Tools",
      "Get a Job in a Tech Company",
      "Others",
    ],
    cardDetails: [
      {
        id: 1,
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
        title:
          "Fresh Graduate or IT professional Looking for a job ? - 7 reasons to learn Python NOW!",
        author: "Arman Ahmed",
        date: "05 Jul 2019",
        description: `If you are a fresh graduate - or new to IT - looking for the next job, you need to read this.
        The last couple of years zekeLabs gave me a unique opportunity to assess technology demand in the industry and also to evaluate available talent pool for the demand.`,
      },
      {
        id: 2,
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
        title: "Introducing you all to EdYoda - www.edyoda.com",
        author: "Arman Ahmed",
        date: "05 Jul 2019",
        description: `Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.
        Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.`,
      },
      {
        id: 3,
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg",
        title:
          "From identity crisis to the Success Story - The DevOps revolution!",
        author: "Kalyan Mahalingam",
        date: "05 Jul 2019",
        description: `So What is DevOps all about -
        DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in Software Development Lifecycle (SDLC) process in most of the organizations.`,
      },
      {
        id: 4,
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
        title: "Typical day of Data Scientist - An insider story!",
        author: "Saurav Ghosh",
        date: "05 Jul 2019",
        description: `I've been a Data Scientist for three years now and I can only say that Chris Lynch was right -
        Big Data and Data Science are the foundation of all the trends that are emerging in the world today.`,
      },
      {
        id: 5,
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
        title: "Amazon Web Services (AWS) Cloud Day - Bangalore",
        author: "Kalyan Mahalingam",
        date: "05 Jul 2019",
        description: `It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels keeping the plates so heavy. :D)`,
      },
      {
        id: 6,
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg",
        title: "edYoda Meetup #01 : A Date with Cloud",
        author: "Ashish Pandey",
        date: "05 Jul 2019",
        description:
          "As a trainer on Cloud and DevOps technologies when I enumerate the features of the cloud to someone from non-cloud background there seems to be a conflict of interest and bias.",
      },
    ],
  };

  componentDidMount() {
    document.querySelector("#filter0").classList.add("active");
    const elements = document.querySelectorAll(".filter-category");
    elements.forEach((element) => {
      element.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active");
      });
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="top-container">
          <h1>Latest Posts</h1>
          <div className="filter">
            <i className="fa-solid fa-filter"></i>Filter by Category
          </div>
          {this.dataObject.filters.map((filter) => (
            <Filter
              filter={filter}
              keyid={this.dataObject.filters.indexOf(filter)}
            />
          ))}
          <div className="container">
            {this.dataObject.cardDetails.map((cardDetail) => (
              <Card details={cardDetail} />
            ))}
          </div>
        </div>
        <footer>
          <p>
            Assignment Submitted by: <br />
            Vishruti Parekh
          </p>
        </footer>
      </div>
    );
  }
}

export default App;

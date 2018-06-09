import React, { Component } from 'react';
import apiClient from '../lib/apiClient';

class PostHobby extends Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      description: '',
      getStarted: '',
      picture: '',
      money: false,
      fit: false,
      creative: false,
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}

  handleSubmit = (event) => {
    const hobby = this.state;

// TODO: handle edge cases when all fields are not filled or vaild.
    const formattedHobby = {
      name: hobby.name,
      description: hobby.description,
      links: {
        getStarted: hobby.getStarted
      },
      pictures: {
      		thumbnail: hobby.picture,
      		big: hobby.picture
      	},
      tags: [
        {name:"money",
    		votes: hobby.money ? 1 : 0,
    		average: hobby.money ? 100 : 0
    		},
    		{name:"fit",
        votes: hobby.fit ? 1 : 0,
    		average: hobby.fit ? 100 : 0
    		},
    		{name:"creative",
        votes: hobby.creative ? 1 : 0,
    		average: hobby.creative ? 100 : 0
		    },
      ]
    }

    apiClient.postHobby(formattedHobby);

    event.preventDefault();
  }

  render() {
    return (
      <div className="PostHobby">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Description:
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Link to get started:
            <input
              name="getStarted"
              type="text"
              value={this.state.getStarted}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Link to picture:
            <input
              name="picture"
              type="text"
              value={this.state.picture}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Money:
            <input
              name="money"
              type="checkbox"
              checked={this.state.money}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Fit:
            <input
              name="fit"
              type="checkbox"
              checked={this.state.fit}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Creative:
            <input
              name="creative"
              type="checkbox"
              checked={this.state.creative}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

//
// {
// 	"name":	"Tea",
// 	"description": "Bodyweight exercises are strength training exercises that do not require free weights or machines as the individual's own weight provides resistance against gravity.",
// 	"links": {
// 		"getStarted":"https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine"
// 	},
// 	"tags": [
// 		{"name":"money",
// 		"votes": 0,
// 		"average": 0
// 		},
// 		{"name":"fit",
// 			"votes": 1,
// 			"average": 100
// 		},
// 		{"name":"creative",
// 			"votes": 1,
// 			"average": 20
// 		},
// 		{"name":"indoor",
// 			"votes": 1,
// 			"average": 50
// 		},
// 		{"name":"solo",
// 			"votes": 1,
// 			"average": 50
// 		},
// 		{"name":"cheap",
// 			"votes": 1,
// 			"average": 100
// 		},
// 		{"name":"relaxing",
// 			"votes": 1,
// 			"average": 40
// 		},
// 		{"name":"common",
// 			"votes": 1,
// 			"average": 60
// 		}
// 	],
// 	"pictures": {
// 		"thumbnail": "https://images.ecosia.org/pCE0HtU4DKEKaz19fF17FGU-XXo=/0x390/smart/https%3A%2F%2Fpioneerwoman.files.wordpress.com%2F2016%2F05%2Fhow-to-make-sweet-tea-01.jpg",
// 		"big": "https://images.ecosia.org/pCE0HtU4DKEKaz19fF17FGU-XXo=/0x390/smart/https%3A%2F%2Fpioneerwoman.files.wordpress.com%2F2016%2F05%2Fhow-to-make-sweet-tea-01.jpg"
// 	}
// }

export default PostHobby;

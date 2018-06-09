import React, { Component } from 'react';
import apiClient from '../lib/apiClient';
import './PostHobby.css';

class PostHobby extends Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      description: '',
      getStarted: '',
      picture: '',
      bars: {
        money: 0,
        fit: 0,
        creative: 0,
      },
      totalValue: 100
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleBarsChange = (event) => {
    // Thanks Jack!!!
    const target = event.target
    this.setState({
      bars: {
        ...this.state.bars,
        [target.name]: Number(target.value)
      }
    }, () => {
      const bars = Object.keys(this.state.bars)
      const sum = bars.reduce((acc, el) => this.state.bars[el] + acc, 0)
      const remainder = sum - this.state.totalValue
      const division = remainder / (bars.length - 1)
      let flag = bars.every(el => el !== 0)

      const updateBars = bars
        .filter(el => el !== target.name)
        .reduce((acc, el) => {
          if (this.state.bars[el] === 0) acc[el] = 0
          else if (flag) acc[el] = this.state.bars[el] - division
          else acc[el] = this.state.bars[el] - remainder
          return acc
        }, {})
      this.setState({
        bars: {
          ...this.state.bars,
          ...updateBars
        }
      })
    })
    console.log(event.target);
    console.log(event.target.type);
    console.log(event.target.value);
  }

  formatBarValues = (barValue) => {
    //taking care of edge cases
    if (barValue < 0) return 0;
    return barValue
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
    		votes: 1,
    		average: this.formatBarValues(hobby.bars.money)
    		},
    		{name:"fit",
        votes: 1,
    		average: this.formatBarValues(hobby.bars.fit)
    		},
    		{name:"creative",
        votes: 1,
    		average: this.formatBarValues(hobby.bars.creative)
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
          </label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange} />
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
          </label>
          <input
            name="money"
            type="range"
            min="0"
            max="100"
            value={this.state.bars.money}
            onChange={this.handleBarsChange} />
          <br />
          <label>
            Fit:
            <input
              name="fit"
              type="range"
              min="0"
              max="100"
              value={this.state.bars.fit}
              onChange={this.handleBarsChange} />
          </label>
          <br />
          <label>
            Creative:
            <input
              name="creative"
              type="range"
              min="0"
              max="100"
              value={this.state.bars.creative}
              onChange={this.handleBarsChange} />
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

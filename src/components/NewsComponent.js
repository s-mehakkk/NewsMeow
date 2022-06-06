import React, { Component } from 'react'
import NewsItem from './NewsItem'

let articles=[
    {
        "source": {
            "id": "medical-news-today",
            "name": "Medical News Today"
        },
        "author": "Katharine Lang",
        "title": "Are humans 'wired' to hate, and if so, why?",
        "description": "Are humans 'set up' to hate, and if so why? In this feature, we investigate the neuroscience and psychology of hate, and potential ways to prevent it.",
        "url": "http://www.medicalnewstoday.com/articles/are-humans-wired-to-hate-and-if-so-why",
        "urlToImage": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/05/thumbs-down-shadow-hate-thumb.jpg",
        "publishedAt": "2022-05-30T16:20:00Z",
        "content": "Hate is a powerful negative emotion, but a word that is easy to say. For example, many of us profess to hate public figures, such as politicians. One has only to browse social media to find declarati… [+8039 chars]"
    },
    {
        "source": {
            "id": "hacker-news",
            "name": "Hacker News"
        },
        "author": null,
        "title": "bigscience/T0pp · Hugging Face",
        "description": "We’re on a journey to advance and democratize artificial intelligence through open source and open science.",
        "url": "https://huggingface.co/bigscience/T0pp",
        "urlToImage": "https://huggingface.co/front/thumbnails/v2-2.png",
        "publishedAt": "2021-10-18T16:37:20.4140551Z",
        "content": "Model Description\r\nT0* is a series of encoder-decoder models trained on a large set of different tasks specified in natural language prompts. We convert numerous English supervised datasets into prom… [+11344 chars]"
    },
    {
        "source": {
            "id": "hacker-news",
            "name": "Hacker News"
        },
        "author": null,
        "title": "Opening up a physics simulator for robotics",
        "description": "As part of DeepMind's mission of advancing science, we have acquired the MuJoCo physics simulator and are making it freely available for everyone, to support research everywhere.",
        "url": "https://deepmind.com/blog/announcements/mujoco",
        "urlToImage": "https://lh3.googleusercontent.com/jVZ3VN7wwx2dSowqLmhqm0qAzAmcb-1t7ks3HiNnoHknihF5sl9VDEwuCNTSxfx8jFIi7mBQkvHUdnSKXSPgYLNpvCuE4YajJeMnrYA",
        "publishedAt": "2021-10-18T16:07:20.4749314Z",
        "content": "Advancing research everywhere with the acquisition of MuJoCo\r\nWhen you walk, your feet make contact with the ground. When you write, your fingers make contact with the pen. Physical contacts are what… [+1849 chars]"
    },
    {
        "source": {
            "id": "national-geographic",
            "name": "National Geographic"
        },
        "author": "Nadia Drake",
        "title": "How these feuding map-makers shaped our fascination with Mars",
        "description": "One was an artist who loved space. His rival was a bold professional astronomer. Their race to map the red planet sparked decades of science and speculation.",
        "url": "https://www.nationalgeographic.com/science/2021/02/how-feuding-map-makers-shaped-our-fascination-with-mars.html",
        "urlToImage": "https://pmdvod.nationalgeographic.com/NG_Video/788/579/smpost_1612381336455.jpg",
        "publishedAt": "2021-02-17T14:37:21.3706142Z",
        "content": null
    },
    {
        "source": {
            "id": "national-geographic",
            "name": "National Geographic"
        },
        "author": null,
        "title": "Episode 3: Why War Zones Need Science Too",
        "description": "Undaunted by Yemen’s civil war, National Geographic explorer Ella Al-Shamahi searches on the island of Socotra for traces of the earliest known humans to leave Africa.",
        "url": "https://www.nationalgeographic.com/podcasts/overheard/season-5/episode-3-why-war-zones-need-science.html",
        "urlToImage": "https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/podcasts/Overheard/season5/episode3/nationalgeographic_2708459.jpg",
        "publishedAt": "2021-02-17T14:37:20.2759318Z",
        "content": null
    }
]

export default class NewsComponent extends Component {
    constructor(){
        super();
        this.state={
          articles : this.articles
        }
    }
    render() {
        return (
            <div className="container my-4">
                <h2>Top Headlines</h2>
                <div className=" row">
                    <div className="col-md-4">
                        <NewsItem title="News1" discription="desc" imageUrl="..." />
                    </div>
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                </div>
            </div>
        )
    }
}

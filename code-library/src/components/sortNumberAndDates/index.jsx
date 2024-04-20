import { useState } from "react";

const button = "bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white font-bold py-2 px-4 rounded";
const articles = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    title: "Scaling to 100k users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    title: "the Emu war",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];

export default function SortNumbersAndDates() {
  const [articlesList, setArticlesList] = useState(articles);

  // const sortByUpvotes = () => {
  //   let newArticle = [];
  //   Object.assign(newArticle, articlesList);
  //   newArticle.sort((a, b) => {
  //     if (a.upvotes > b.upvotes) return -1;
  //     if (a.upvotes < b.upvotes) return 1;
  //     return 0;
  //   });
  //   setArticlesList(newArticle);
  // };

  // const sortByDates = () => {
  //   let newArticle = [];
  //   Object.assign(newArticle, articlesList);
  //   newArticle.sort((a, b) => {
  //     const aDate = new Date(a.date);
  //     const bDate = new Date(b.date);
  //     if (aDate > bDate) return -1;
  //     if (aDate < bDate) return 1;
  //     return 0;
  //   });
  //   setArticlesList(newArticle);
  // };

  const sortByUpvotes = () => {
    const unsorted = [...articlesList]
    const sorted = unsorted.sort((a, b) => {
      if (a.upvotes > b.upvotes) return -1;
      if (a.upvotes < b.upvotes) return 1;
      return 0;
    })
    setArticlesList(sorted)
  }

  const sortByDates = () => {
    const unsorted = [...articlesList]
    const sorted = unsorted.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate > bDate) return -1;
      if (aDate < bDate) return 1;
      return 0;
    })
    setArticlesList(sorted)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Sorting Articles</h1>
      <div className="flex flex-row justify-between items-center gap-5">
        <label> Sort by: </label>
        <button className={button} onClick={() => sortByUpvotes()}>Most Upvoted</button>
        <button className={button} onClick={() => sortByDates()}>Most Recent</button>
      </div>
      <div className="my-4">
        {articlesList.map((article, index) => (
          <div key={index} className="flex flex-row gap-10 m-2">
            <div className="grow">{article.title} </div>
            <div>{article.upvotes} </div>
            <div>{article.date} </div>
          </div>
        ))}
      </div>
    </div>
  );
}

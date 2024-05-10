"use client";

import { useEffect, useState } from "react";

export default function AddQuoteForm({
  AddQuote,
  categoriesResult,
  seasonsResult,
  episodesResult
}) {
  const [userSeasonChoice, setUserSeasonChoice] = useState(1);
  const [episodesS1, setEpisodesS1] = useState([]);
  const [episodesS2, setEpisodesS2] = useState([]);
  const [episodesS3, setEpisodesS3] = useState([]);

  useEffect(() => {
    const seasonOneEpisodes = episodesResult.filter(
      (episode) => episode.season_id === 1
    );
    const seasonTwoEpisodes = episodesResult.filter(
      (episode) => episode.season_id === 2
    );
    const seasonThreeEpisodes = episodesResult.filter(
      (episode) => episode.season_id === 3
    );

    setEpisodesS1(seasonOneEpisodes);
    setEpisodesS2(seasonTwoEpisodes);
    setEpisodesS3(seasonThreeEpisodes);
  }, [episodesResult]);

  function handleSeasonChoice(event) {
    console.log("I have handled the choice");
    console.log(event.target.value);

    setUserSeasonChoice(parseInt(event.target.value));
    // setEpisodes((prevEpisodes) => )
  }
  // --- --- --- ---
  // Get some data
  // --- --- --- ---

  return (
    <div>
      <form action={AddQuote} className="flex flex-col gap-2 w-3/6">
        {/* --- --- --- --- */}
        <label htmlFor="title">Enter the quote </label>
        <input
          type="text"
          name="quote"
          id="quote"
          placeholder="Ted Lasso quote here"
        />
        {/* --- --- --- --- */}
        <label htmlFor="content">Who said it? </label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="The 'author' or 'speaker'"
        />
        {/* --- --- --- --- */}
        <label htmlFor="username">Choose a Category for this quote: </label>
        <select
          type="select"
          name="category"
          id="category"
          required
          defaultValue=""
          className="bg-slate-500 capitalize"
        >
          <option disabled value="">
            Please pick
          </option>
          {categoriesResult.map((cat) => {
            return (
              <option key={cat.id} value={parseInt(cat.id)} name={cat.category}>
                {cat.category}
              </option>
            );
          })}
        </select>
        {/* --- --- --- --- */}
        <label htmlFor="username">Choose the season this quote is from: </label>
        <select
          type="select"
          name="season"
          id="season"
          required
          defaultValue=""
          className="bg-slate-500 capitalize"
          onChange={handleSeasonChoice}
        >
          <option disabled value="">
            Please pick
          </option>
          {seasonsResult.map((season) => {
            return (
              <option
                key={season.id}
                value={parseInt(season.id)}
                name={season.number}
                className="capitalize"
              >
                {season.number}
              </option>
            );
          })}
        </select>

        {/* {userSeasonChoice === 1 ? (
          <>
            {" "}
            <label htmlFor="username">
              Choose the episode this quote is from:{" "}
            </label>
            <select
              type="select"
              name="episode"
              id="episode"
              required
              defaultValue=""
              className="bg-slate-500 capitalize"
            >
              <option disabled value="">
                Season One Episodes
              </option>
              {episodesS1.map((episode) => {
                return (
                  <option
                    key={episode.id}
                    value={parseInt(episode.id)}
                    name={episode.number}
                    className="capitalize"
                  >
                    {episode.number}
                    {" - "} {episode.title}
                  </option>
                );
              })}
            </select>
          </>
        ) : userSeasonChoice === 2 ? (
          <>
            {" "}
            <label htmlFor="username">
              Choose the episode this quote is from:{" "}
            </label>
            <select
              type="select"
              name="episode"
              id="episode"
              required
              defaultValue=""
              className="bg-slate-500 capitalize"
            >
              <option disabled value="">
                Season Two Episodes
              </option>
              {episodesS2.map((episode) => {
                return (
                  <option
                    key={episode.id}
                    value={parseInt(episode.id)}
                    name={episode.number}
                    className="capitalize"
                  >
                    {episode.number}
                    {" - "} {episode.title}
                  </option>
                );
              })}
            </select>
          </>
        ) : userSeasonChoice === 3 ? (
          <>
            {" "}
            <label htmlFor="username">
              Choose the episode this quote is from:{" "}
            </label>
            <select
              type="select"
              name="episode"
              id="episode"
              required
              defaultValue=""
              className="bg-slate-500 capitalize"
            >
              <option disabled value="">
                Season Three Episodes
              </option>
              {episodesS3.map((episode) => {
                return (
                  <option
                    key={episode.id}
                    value={parseInt(episode.id)}
                    name={episode.number}
                    className="capitalize"
                  >
                    {episode.number}
                    {" - "} {episode.title}
                  </option>
                );
              })}
            </select>
          </>
        ) : (
          <></>
        )} */}

        <label htmlFor="username">
          Choose the episode this quote is from:{" "}
        </label>
        <select
          type="select"
          name="episode"
          id="episode"
          required
          defaultValue=""
          className="bg-slate-500 capitalize"
        >
          <option disabled value="">
            {userSeasonChoice === 1
              ? "Season One Episodes"
              : userSeasonChoice === 2
              ? "Season Two Episodes"
              : "Season Three Episodes"}
          </option>
          {userSeasonChoice === 1 &&
            episodesS1.map((episode) => (
              <option
                key={episode.id}
                value={parseInt(episode.id)}
                name={episode.number}
                className="capitalize"
              >
                {episode.number} - {episode.title}
              </option>
            ))}
          {userSeasonChoice === 2 &&
            episodesS2.map((episode) => (
              <option
                key={episode.id}
                value={parseInt(episode.id)}
                name={episode.number}
                className="capitalize"
              >
                {episode.number} - {episode.title}
              </option>
            ))}
          {userSeasonChoice === 3 &&
            episodesS3.map((episode) => (
              <option
                key={episode.id}
                value={parseInt(episode.id)}
                name={episode.number}
                className="capitalize"
              >
                {episode.number} - {episode.title}
              </option>
            ))}
        </select>
        {/* --- --- --- --- */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

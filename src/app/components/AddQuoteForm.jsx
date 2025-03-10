"use client";

import { useEffect, useState } from "react";
import { SubmitButton } from "./SubmitButton";

export default function AddQuoteForm({
  AddQuote,
  categoriesResult,
  seasonsResult,
  episodesResult,
}) {
  // --- --- --- --- --- --- --- ---
  // Variables we will use in this component. The users choice of season, and 3 arrays containing episodes by season:
  // --- --- --- --- --- --- --- ---
  const [userSeasonChoice, setUserSeasonChoice] = useState(1);
  const [episodesS1, setEpisodesS1] = useState([]);
  const [episodesS2, setEpisodesS2] = useState([]);
  const [episodesS3, setEpisodesS3] = useState([]);
  const [form, setForm] = useState([]);

  // --- --- --- ------ --- --- ---
  // On page load, we filter ALL episode results by their Season ID, assign them to a variable (which is an array), then assign that array to the respective 'episodesS*' state:
  // --- --- --- ------ --- --- ---
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

  // When the user selects a Season from the dropdown, this runs:
  function handleSeasonChoice(event) {
    console.log("I have handled the choice");
    console.log(event.target.value);

    setUserSeasonChoice(parseInt(event.target.value));
    handleLivePreviewDropdowns(event);
  }

  function handleLivePreviewText(event) {
    console.log(event.target);
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  function handleLivePreviewDropdowns(event) {
    console.log(event.target);
    console.log("value is ", event.target.selectedIndex);
    const selectedValue = event.target.selectedIndex;
    console.log(event.target[selectedValue].text);
    const selectedText = event.target[selectedValue].text;
    setForm({ ...form, [event.target.name]: selectedText });
  }

  // --- --- --- --- --- --- --- ---
  // The returned HTML
  // --- --- --- --- --- --- --- ---

  return (
    <div className="flex flex-col sm:flex-row items-center w-full gap-2 p-4 bg-blue-300">
      <form
        action={AddQuote}
        className="flex flex-col items-center w-5/6 gap-1 text-black"
      >
        {/* --- --- --- --- */}
        <label htmlFor="quote">Enter the quote</label>
        <textarea
          type="text"
          name="quote"
          id="quote"
          placeholder="'Ronald Reagan?! The actor!!?"
          onChange={handleLivePreviewText}
          required
          className="w-5/6"
        />
        {/* --- --- --- --- */}
        <label htmlFor="author">Who said it?</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Coach Beard"
          onChange={handleLivePreviewText}
          required
          className="w-5/6"
        />
        {/* --- --- --- --- */}
        <label htmlFor="category">Choose a Category for this quote:</label>
        <select
          type="select"
          name="category"
          id="category"
          required
          defaultValue=""
          className="bg-slate-500 w-5/6"
          onChange={handleLivePreviewDropdowns}
        >
          <option disabled value="">
            Choose the best suited...
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
          className="bg-slate-500 w-5/6"
          onChange={handleSeasonChoice}
        >
          <option disabled value="">
            Season...
          </option>
          {seasonsResult.map((season) => {
            return (
              <option
                key={season.id}
                value={parseInt(season.id)}
                name={season.number}
                className=""
              >
                {season.number}
              </option>
            );
          })}
        </select>

        <label htmlFor="episode">Choose the episode this quote is from: </label>
        <select
          type="select"
          name="episode"
          id="episode"
          required
          defaultValue=""
          className="bg-slate-500 w-5/6"
          onChange={handleLivePreviewDropdowns}
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
                className=""
              >
                S{userSeasonChoice} E{episode.number} - {episode.title}
              </option>
            ))}
          {userSeasonChoice === 2 &&
            episodesS2.map((episode) => (
              <option
                key={episode.id}
                value={parseInt(episode.id)}
                name={episode.number}
                className=""
              >
                S{userSeasonChoice} E{episode.number} - {episode.title}
              </option>
            ))}
          {userSeasonChoice === 3 &&
            episodesS3.map((episode) => (
              <option
                key={episode.id}
                value={parseInt(episode.id)}
                name={episode.number}
                className=""
              >
                S{userSeasonChoice} E{episode.number} - {episode.title}
              </option>
            ))}
        </select>
        {/* --- --- --- --- */}
        <label htmlFor="added_by">What&apos;s your name?</label>
        <input
          type="text"
          name="added_by"
          id="added_by"
          placeholder="Your name..."
          onChange={handleLivePreviewText}
          required
          className="w-5/6"
        />
        {/* --- --- --- --- */}

        <SubmitButton />
      </form>
      {/* --- --- --- --- */}

      <div className="live-preview w-5/6">
        <h2>Quote:</h2>
        <p>{form.quote}</p>
        <h2>Said by:</h2>
        <p>{form.author}</p>
        <h2>Category:</h2>

        <p>{form.category}</p>
        <h2>Season:</h2>

        <p className="capitalize">{form.season}</p>
        <h2>Episode:</h2>

        <p>{form.episode}</p>
        <h2>You:</h2>

        <p>{form.added_by}</p>
      </div>
    </div>
  );
}

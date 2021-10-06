import React, { useState } from "react";
import styled from "styled-components";
import { IListing, Listings } from "./components/Listings";
import { episodes, ITVEpisode, search } from "./clients/tvmaze";

const MyDiv = styled.div`
  font-family: Verdana;
  & > div {
    padding-bottom: 5px;
  }
`;

const SelectedDiv = styled.div`
  cursor: pointer;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 2px 7px 2px 7px;
`;

export const App = () => {
  const [text, setText] = useState<
    string | number | readonly string[] | undefined
  >("");

  const [listings, setListings] = useState<Array<IListing>>([]);

  const [selected, setSelected] = useState<Array<IListing>>([]);

  const [show, setShow] = useState<boolean>(false);

  const [randomized, setRandomized] = useState<
    (ITVEpisode & { show: string }) | undefined
  >();

  const addSelected = (listing: IListing): void => {
    if (!selected.includes(listing)) {
      setSelected([...selected, listing]);
    }
  };

  const entered = (
    name: string | number | readonly string[] | undefined
  ): void => {
    if (typeof name === "string") {
      setRandomized(undefined);
      search(name)
        .then((itvmaze) =>
          itvmaze.map((i) => {
            return {
              id: i.show.id,
              name: i.show.name,
              startDate: i.show.premiered,
              endDate: i.show.ended,
              image: i.show.image.medium,
            } as IListing;
          })
        )
        .then((l) => {
          setShow(true);
          setListings(l);
        });
    } else {
      console.log("SOME ERROR", typeof name);
    }
  };

  function remove(listing: IListing) {
    const index = selected.indexOf(listing);
    const before = selected.slice(0, index);
    const after = selected.slice(index + 1, selected.length);
    setSelected([...before, ...after]);
  }

  function selectRandom() {
    setShow(false);
    const randomShow = selected[Math.floor(Math.random() * selected.length)];
    episodes(randomShow.id).then((episodes) => {
      const itvEpisode = episodes[Math.floor(Math.random() * episodes.length)];
      setRandomized({ ...itvEpisode, show: randomShow.name });
    });
  }

  return (
    <MyDiv>
      <div>Episode Randomizer</div>
      {selected.length === 0 ? (
        <div style={{ paddingTop: "8px" }}>Nothing selected</div>
      ) : (
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => selectRandom()}>Randomize</button>
          {selected.map((s) => (
            <SelectedDiv onClick={() => remove(s)}>{s.name}</SelectedDiv>
          ))}
        </div>
      )}
      <div>
        <label>
          Enter Episode Name:{" "}
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type={"text"}
          />
        </label>
        <button onClick={() => entered(text)}>Search</button>
      </div>
      {show && <Listings listings={listings} addSelected={addSelected} />}
      {randomized && (
        <div>
          <div>{randomized.show}</div>
          <div>
            Season {randomized.season}, Episode: {randomized.number}
          </div>
          <div>{randomized.name} </div>
        </div>
      )}
    </MyDiv>
  );
};

import React, { useState } from "react";
import styled from "styled-components";
import { IListing, Listings } from "./components/Listings";
import { search } from "./clients/tvmaze";
import { Randomizer } from "./components/Randomizer";

const MyDiv = styled.div`
  font-family: Verdana;
  & > div {
    padding-bottom: 5px;
  }
`;

export const App = () => {
  const [text, setText] = useState<
    string | number | readonly string[] | undefined
  >("");

  const [listings, setListings] = useState<Array<IListing>>([]);

  const [show, setShow] = useState<boolean>(false);

  const entered = (
    name: string | number | readonly string[] | undefined
  ): void => {
    if (typeof name === "string") {
      // setRandomized(undefined);
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

  return (
    <MyDiv>
      <div>Episode Randomizer</div>
      <Randomizer setShow={setShow} />
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
      {show && <Listings listings={listings} />}
    </MyDiv>
  );
};

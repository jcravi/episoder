import { useState } from "react";
import styled from "styled-components";

import { IListing, Listings } from "./components/Listings.tsx";
import { search } from "./clients/tvmaze.ts";
import { Randomizer } from "./components/Randomizer.tsx";

const MyDiv = styled.div`
  font-family: Verdana;
  & > div {
    padding-bottom: 5px;
  }
`;

export const App = () => {
  const [text, setText] = useState<string>("");

  const [listings, setListings] = useState<Array<IListing>>([]);

  const [show, setShow] = useState<boolean>(false);

  const entered = (
    name: string,
  ): void => {
    if (name) {
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
          Enter TV Show Name:{" "}
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />
        </label>
        <button type="button" onClick={() => entered(text)}>Search</button>
      </div>
      {show && <Listings listings={listings} />}
    </MyDiv>
  );
};

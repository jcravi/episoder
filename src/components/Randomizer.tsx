import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { IListing } from "./Listings";
import { episodes, ITVEpisode } from "../clients/tvmaze";
import { removeAction } from "../slices/selected";

const SelectedDiv = styled.div`
  cursor: pointer;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 2px 7px 2px 7px;
`;

const RandomizerComponent = ({
  selected,
  setShow,
  remove,
}: {
  selected: Array<IListing>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  remove: (listing: IListing) => void;
}) => {
  function selectRandom() {
    setShow(false);
    const randomShow = selected[Math.floor(Math.random() * selected.length)];
    episodes(randomShow.id).then((episodes) => {
      const itvEpisode = episodes[Math.floor(Math.random() * episodes.length)];
      setRandomized({ ...itvEpisode, show: randomShow.name });
    });
  }

  const [randomized, setRandomized] = useState<
    (ITVEpisode & { show: string }) | undefined
  >();

  return (
    <>
      <div>
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
      </div>
      <div>
        {randomized && (
          <div>
            <div>{randomized.show}</div>
            <div>
              Season {randomized.season}, Episode: {randomized.number}
            </div>
            <div>{randomized.name} </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = ({ selected }: { selected: Array<IListing> }) => ({
  selected,
});

const mapDispatchToProps = {
  remove: removeAction,
};

export const Randomizer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomizerComponent);

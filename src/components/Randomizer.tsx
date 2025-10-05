import React, { useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../hooks.ts";
import { episodes, ITVEpisode } from "../clients/tvmaze.ts";
import { removeAction } from "../slices/selected.ts";
import { RootState } from "../store.ts";

const SelectedDiv = styled.div`
  cursor: pointer;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 2px 7px 2px 7px;
`;

export const Randomizer = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const selected = useAppSelector((state: RootState) => state.selected);
  const dispatch = useAppDispatch();
  const selectRandom = () => {
    setShow(false);
    const randomShow = selected[Math.floor(Math.random() * selected.length)];
    episodes(randomShow.id).then((episodes: Array<ITVEpisode>) => {
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
        {selected.length === 0
          ? <div style={{ paddingTop: "8px" }}>No TV shows selected yet!</div>
          : (
            <div style={{ display: "flex", gap: "10px" }}>
              <button type="button" onClick={() => selectRandom()}>
                Randomize
              </button>
              {selected.map((s) => (
                <SelectedDiv
                  key={s.id}
                  onClick={() => dispatch(removeAction(s))}
                >
                  {s.name}
                </SelectedDiv>
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
            <div>{randomized.name}</div>
          </div>
        )}
      </div>
    </>
  );
};


import React, {useState} from 'react';
import styled from 'styled-components';
import {IListing, Listings} from "./components/Listings";
import {search} from "./clients/tvmaze";

const MyDiv = styled.div`
  font-family: Verdana;
  & > div {
    padding-bottom: 5px;
  }
`;

export const App = () => {

    const [text, setText] = useState<string | number | readonly string[] | undefined>('');

    const [listings, setListings] = useState<Array<IListing>>([]);

    const [selected, setSelected] = useState<string>('');

    const entered = (name: string | number | readonly string[] | undefined): void => {
        if (typeof name === 'string') {
            search(name)
                .then(itvmaze => itvmaze.map(i => {
                    return {
                        name: i.show.name,
                        startDate: i.show.premiered,
                        endDate: i.show.ended,
                        image: i.show.image.medium
                    } as IListing;
                }))
                .then(l => setListings(l));
        } else {
            console.log('SOME ERROR', typeof name);
        }
    }

    return (
        <MyDiv>
            <div>Episode Randomizer</div>
            <label>Enter Episode Name: <input value={text} onChange={(e) => setText(e.target.value)}
                                              type={'text'}/></label>
            <button onClick={() => entered(text)}>Search</button>
            <div>{selected}</div>
            <Listings listings={listings} setSelected={setSelected}/>
        </MyDiv>
    );
}

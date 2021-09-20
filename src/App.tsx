import React, {useState} from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  font-family: Verdana;
  & > div {
    padding-bottom: 5px;
  }
`;

export const App = () => {

    const [text, setText] = useState<string | number | readonly string[] | undefined>('');

    const [output, setOutput] = useState<string>('');

    const search = (name: string | number | readonly string[] | undefined): void => {
        if (typeof name === 'string') {
            fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
                .then(resp => resp.text())
                .then(t => setOutput(t));
        } else {
            console.log('SOME ERROR', typeof name);
        }
    }

    return (
        <MyDiv>
            <div>Episode Randomizer</div>
            <label>Enter Episode Name: <input value={text} onChange={(e) => setText(e.target.value)}
                                              type={'text'}/></label>
            <div>{output}</div>
            <button onClick={() => search(text)}>Search</button>
        </MyDiv>
    );
}

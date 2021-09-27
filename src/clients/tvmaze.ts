export interface ITVMaze {
    show: {
        name: string;
        premiered: string;
        ended: string;
        image: {
            medium: string;
        }
    };
}


export const search = (query: string): Promise<Array<ITVMaze>> =>
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(resp => resp.json())
        .then(json => json as Array<ITVMaze>)
import {Dispatch, SetStateAction, useState} from "react";

export interface IListing {
    name: string;
    startDate: string;
    endDate: string;
    image: string;
}

export const Listings = ({listings, setSelected}: { listings: Array<IListing>, setSelected: Dispatch<SetStateAction<string>> }) => {
    return <div>
        {listings.map(listing => {
            return <Listing listing={listing} onClick={() => setSelected(listing.name)}/>;
        })}
    </div>;
};

const Listing = ({listing, onClick}: { listing: IListing, onClick: () => void }) => {
    const [hover, setHover] = useState<boolean>(false);
    return <div style={{
        display: 'flex',
        width: '300px',
        justifyContent: 'space-between',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderBottom: '1px solid black'
    }} onClick={onClick}>
        <div>
            <div>{listing.name}</div>
            <div style={{fontSize: '13px'}}>{listing.startDate} - {listing.endDate}</div>
        </div>
        <div style={{display: 'flex'}}>
            <img alt={`for ${listing.name}`} height={40} src={listing.image} onMouseOver={() => setHover(true)}
                 onMouseOut={() => setHover(false)}/>
            {hover && <HoverImage url={listing.image}/>}
        </div>
    </div>;
}

const HoverImage = ({url}: { url: string }) => {
    return <div style={{position: "relative", top: '10px'}}>
        <img style={{position: 'absolute'}} alt={'larger'} src={url}/>
    </div>;
}
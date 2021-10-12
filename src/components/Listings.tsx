import { useState } from "react";
import { connect } from "react-redux";
import { addAction } from "../slices/selected";

export interface IListing {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  image: string;
}

const ListingsComponent = ({
  listings,
  add,
}: {
  listings: Array<IListing>;
  add: (name: IListing) => void;
}) => {
  return (
    <div>
      {listings.map((listing) => {
        return (
          <Listing listing={listing} onClick={() => add(listing)} />
        );
      })}
    </div>
  );
};

const Listing = ({
  listing,
  onClick,
}: {
  listing: IListing;
  onClick: () => void;
}) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      style={{
        display: "flex",
        width: "300px",
        justifyContent: "space-between",
        paddingTop: "5px",
        paddingBottom: "5px",
        borderBottom: "1px solid black",
      }}
      onClick={onClick}
    >
      <div style={{ cursor: "pointer" }}>
        <div>{listing.name}</div>
        <div style={{ fontSize: "13px" }}>
          {listing.startDate} - {listing.endDate}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <img
          alt={`for ${listing.name}`}
          height={40}
          src={listing.image}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        />
        {hover && <HoverImage url={listing.image} />}
      </div>
    </div>
  );
};

const HoverImage = ({ url }: { url: string }) => {
  return (
    <div style={{ position: "relative", top: "10px" }}>
      <img style={{ position: "absolute" }} alt={"larger"} src={url} />
    </div>
  );
};

const mapDispatchToProps = {
  add: addAction,
};

export const Listings = connect(null, mapDispatchToProps)(ListingsComponent);

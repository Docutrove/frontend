// import { useState } from "react";
import { Icon } from "../Icon";
import BaseButton from "../button";
import "./index.scss";

interface OfferProps {
  variant: "purple" | "green" | "blue" | "plain";
  iconVariant?: "gradient" | "black";
  iconName?: "document" | "pie" | "user";
  title: string;
  description: string;
  path?: string;
  lists?: string[];
  amount?: number;
  amountSuffix?: string;
  buttonVariant?: "primary" | "secondary";
  buttonText?: string;
}

export function Offer({
  variant,
  iconVariant,
  iconName,
  title,
  description,
  path,
  lists,
  amount,
  amountSuffix,
  buttonVariant,
  buttonText,
}: OfferProps) {
  // const [showMore, setShowMore] = useState(false);

  return (
    <div className={`offer--${variant}`}>
      <div className="offer-text">
        {iconName ? (
          <div className="offer__icon">
            <Icon name={iconName} className="icon" />
          </div>
        ) : null}
        <h4 className="offer__title">{title}</h4>
        <p className="offer__description text--sm">
          { description }
          {/* {showMore ? description : `${description.substring(0, 100)}...`}
          <span
            onClick={() => {
              setShowMore((prev) => !prev);
            }}
          >
            {showMore ? "Show less" : "Show more"}
          </span> */}
        </p>

        <div className="lists">
          {lists?.map((list, index) => (
            <div key={index} className="lists__list">
              <div className={`tick-icon--${iconVariant}`}>
                <Icon name="tick" />
              </div>
              <p className="text--xs">{list}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        {typeof amount === "number" ? (
          <div className="offer__amount">
            <h4>
              {amount?.toLocaleString("en-NG", {
                currency: "NGN",
                style: "currency",
              })}
            </h4>
            <p className="text--xs amount-suffix">{amountSuffix}</p>
          </div>
        ) : null}
        {buttonVariant? (
        <BaseButton
          href={path}
          variant={buttonVariant}
          className="offer-button"
        >
          {buttonText}
        </BaseButton>
        ) : null}
      </div>
    </div>
  );
}

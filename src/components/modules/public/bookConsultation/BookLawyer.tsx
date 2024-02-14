import BaseButton from "../../ui/button";

export default function BookLawyer() {
  return (
    <div className="book-lawyer about-you">
      <h2 className="gradient-title">Let’s find a person that suits</h2>

      <div className="book-details">
        <p className="text--2xs book-details__detail">Chosen Practice Area </p>
        <p className="text--2xs book-details__detail">Chosen Position </p>
        <p className="text--2xs book-details__detail">Chosen Date</p>
      </div>

      <div className="lawyers">
        <div className="lawyer-details">
          <div className="lawyer-details__info">
            <div className="lawyer-image">
              <img src="/images/lawyer1.png" alt="" />
            </div>
            <div>
              <h6>Name</h6>
              <p className="text--sm position">Position Title lorem ipsum</p>
              <p className="text--2xs about">
                Lorem ipsum dolor sit amet consectetur. Praesent nulla facilisis
                dictum amet. Est est morbi ac eget porttitor amet lacus eget
                pellentesque. Sed egestas aliquet dolor interdum luctus. In
                purus lobortis natoque sed orci.
              </p>
            </div>
          </div>
          <div className="lawyer-details__mobile">
            <div className="lawyer-details__mobile__info">
              <div className="lawyer-image">
                <img src="/images/lawyer1.png" alt="" />
              </div>
              <div>
                <h6>Name</h6>
                <p className="text--sm position">Position Title lorem ipsum</p>
              </div>
            </div>
            <p className="text--2xs about">
              Lorem ipsum dolor sit amet consectetur. Praesent nulla facilisis
              dictum amet. Est est morbi ac eget porttitor amet lacus eget
              pellentesque. Sed egestas aliquet dolor interdum luctus. In purus
              lobortis natoque sed orci.
            </p>
          </div>

          <div className="lawyer-details__date">
            <h6>Day 00 Month </h6>
            <div className="available-time-wrapper">
              <div className="available-time">
                {[...Array(8)].map(() => (
                  <div className="time">
                    <p className="text--2xs">00:00</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lawyer-details__value">
            <div>
              <p className="text--2xs">
                The cost of a meeting with this person:
              </p>
              <h6 className="text--xs">₦0,000.00</h6>
            </div>
            <BaseButton
              className="lawyer-details__value__button"
              variant="primary"
            >
              Book a meeting
            </BaseButton>
          </div>
        </div>

        <div className="lawyer-details">
          <div className="lawyer-details__info">
            <div className="lawyer-image">
              <img src="/images/lawyer2.png" alt="" />
            </div>
            <div>
              <h6>Name</h6>
              <p className="text--sm position">Position Title lorem ipsum</p>
              <p className="text--2xs about">
                Lorem ipsum dolor sit amet consectetur. Praesent nulla facilisis
                dictum amet. Est est morbi ac eget porttitor amet lacus eget
                pellentesque. Sed egestas aliquet dolor interdum luctus. In
                purus lobortis natoque sed orci.
              </p>
            </div>
          </div>

          <div className="lawyer-details__mobile">
            <div className="lawyer-details__mobile__info">
              <div className="lawyer-image">
                <img src="/images/lawyer2.png" alt="" />
              </div>
              <div>
                <h6>Name</h6>
                <p className="text--sm position">Position Title lorem ipsum</p>
              </div>
            </div>
            <p className="text--2xs about">
              Lorem ipsum dolor sit amet consectetur. Praesent nulla facilisis
              dictum amet. Est est morbi ac eget porttitor amet lacus eget
              pellentesque. Sed egestas aliquet dolor interdum luctus. In purus
              lobortis natoque sed orci.
            </p>
          </div>
          <div className="lawyer-details__date">
            <h6>Day 00 Month </h6>
            <div className="available-time-wrapper">
              <div className="available-time">
                {[...Array(8)].map(() => (
                  <div className="time">
                    <p className="text--2xs">00:00</p>
                  </div>
                ))}
              </div>

              <div className="available-time">
                {[...Array(8)].map(() => (
                  <div className="time">
                    <p className="text--2xs">00:00</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lawyer-details__value">
            <div>
              <p className="text--2xs">
                The cost of a meeting with this person:
              </p>
              <h6 className="text--xs">₦0,000.00</h6>
            </div>
            <BaseButton
              className="lawyer-details__value__button"
              variant="primary"
            >
              Book a meeting
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}

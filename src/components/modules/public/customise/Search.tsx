import BaseButton from "../../ui/button";
import Select from "../../ui/select";

export default function CustomiseSearch() {
  return (
    <div className="customise__search app-container">
      <div className=" app-container__section">
        <div className="customise__search__header">
          <h2>Search for a document</h2>
          <BaseButton variant="primary">Search document</BaseButton>
        </div>
        <div className="customise__search__selects">
          <div className="search-select">
            <Select label="What type of legal document would you like to create?" />
          </div>
          <div className="search-select">
            <Select label="Select the specific template you need" />
          </div>
        </div>
      </div>
    </div>
  );
}

import "./GamingLibrary.css";
import {
  SectionHeader,
  SectionWrapper,
  GamingLibraryCard,
} from "../../components/index";
import GamingLibraryData from "../../Data/GamingLibraryData";
const GamingLibrary = () => {
  const cards = GamingLibraryData.map((card) => {
    return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category = {card.category} date_added={card.date_added} hours_palyed={card.hours_palyed} download={card.downloaded} />;
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <div className="gaming-library-cards">{cards}</div>
      </SectionWrapper>
    </>
  );
};
export default GamingLibrary;

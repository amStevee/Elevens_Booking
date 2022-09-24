import Featured from "../components/Featured";
import FeaturedProperties from "../components/FeaturedProperties";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";
import StyledHome from "../styles/Home.styled";
import { StyledHomeContainer } from "../styles/homepage/HomeContainer.styled";
export default function Home() {
  return (
    <StyledHome>
      <Navbar />
      <Header />
      <StyledHomeContainer>
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />

        <MailList />
        <Footer />
      </StyledHomeContainer>
    </StyledHome>
  );
}

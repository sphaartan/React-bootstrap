/* for import, use { photos } from file
specifi like, we want import const photos from inside file
we can also import more one const from 1 file */
import { photos } from "./photo";
import Gallery from "react-photo-gallery";
import SidebarAccordian from "../components/SideBar/SidebarAccordion";
import styled from "styled-components";
import { dataDiaporama } from "./SidebarData";

const SideBarWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  margin-left: 20px;

  @media screen and (max-width: 991px) {
    display: none;
    margin-left: 0;
    position: absolute;
    height: fit-content;
    background: blue;
    top: 80px;
  }
  @media screen and (max-width: 767px) {
    display: none;
    margin-left: 0;
    position: absolute;
    height: fit-content;
    background: blue;
  }
`;
function Diaporama() {
  return (
    <>
      <h1>Diaporama</h1>
      <SideBarWrapper>
        <SidebarAccordian sidedataPost={dataDiaporama} />
      </SideBarWrapper>
      <Gallery photos={photos} />
    </>
  );
}

export default Diaporama;

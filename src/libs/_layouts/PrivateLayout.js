import PrimaryPrivateNavbar from "../_layouts/PrimaryPrivateNavbar";
import Sidebar from "../_layouts/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 0;
  width: auto;
  display: flex;
  flex-direction: row;
`;

const RowContainer = styled(Row)`
  margin-top:105px;
  margin-left: 185px;
  /* margin-left: 230px; */
  .card-body .form-control{
    background-color: #E5E5E5;
 }
`;

const ContentContainer = styled(Container)`
  overflow: auto;
  max-width: 100%;
  flex: 1;
`;

const SidebarContainer = styled.div`
  position: relative;
  height: 100%;
  width: auto;
  overflow: auto;
  display: block;
  /* border: 5px solid green; */
  z-index: 50000;
`;

const PrivateLayout = (props) => {

  const user = {
    firstName: JSON.parse(localStorage.getItem('currentUser'))?.data.firstName,
    lastName: "",
  };

  return (
    <>
      <PageContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          <Row>
            <Col>
              <PrimaryPrivateNavbar
                name={`${user?.firstName} ${user?.lastName}`}
              />
            </Col>
          </Row>
          <RowContainer>
            <Col>
              <>{props.children}</>
            </Col>
          </RowContainer>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default PrivateLayout;

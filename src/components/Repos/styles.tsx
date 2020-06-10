import styled from "styled-components";

export const Section = styled.section`
  display: block;
  width: 90%;
  margin: 50px auto;
`;

export const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  background: #23232d;
  border-radius: 4px;
`;

export const ContentTitle = styled.h1`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

export const ContentDescription = styled.div`
  padding: 20px;
`;

export const ContentLink = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 420px) {
    display: block;
    text-align: center;
  }
`;

export const Link = styled.a`
  font-weight: 700;
  padding: 5px;
  color: #f0f0f0;
  border-radius: 4px;
  background: #36a9e1;
  display: block;
  margin: 5px 0;

  &:hover {
    background: #1e739c;
  }
`;

export const License = styled.span`
  background: #999;
  padding: 5px;
  border-radius: 4px;
  background: #ef5466;
  cursor: default;
  display: block;
  margin: 5px 0;

  &:hover {
    background: #ca2a36;
  }
`;

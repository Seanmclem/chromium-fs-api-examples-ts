import React from "react";
import styled from "styled-components";

interface props { }

const Container = styled.div`
  /* border: 1px solid black; */
  height: calc(100% - 30px); // TODO: ^v needs vars
  border-radius: 0 0 10px 10px;
  padding: 50px;
`;

export const EmptyAreaBody: React.FC<props> = () => {
  return <Container>
    <p>
      Select a file lorem ipsum
    </p>
  </Container>;
};

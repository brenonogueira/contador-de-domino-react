/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";

export const Players = () => {
  const [players, setPlayers] = useState(0);
  let navigate = useNavigate();

  const sendToPlayers = () => {
    navigate("/placar", {
      state: {
        jogadores: players,
      },
    });
  };

  useEffect(() => {
    if (players !== 0) {
      sendToPlayers();
    }
  }, [players]);

  return (
    <Container
      fluid
      style={{
        display: "block",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Row style={{ paddingTop: "50%" }}>
        <Col sm="12" style={{ textAlign: "center", marginBottom: 20 }}>
          <h1>CONTADOR DE DOMINÓ DOS PARÇAS</h1>
        </Col>
      </Row>
      <Row style={{ paddingTop: "20%" }}>
        <Col sm="12" style={{ textAlign: "center", marginBottom: 20 }}>
          <h3>Escolha a quantidade de players</h3>
        </Col>
      </Row>
      <Row style={{ paddingTop: "10%" }}>
        <Col sm="12" style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              setPlayers(3);
            }}
            style={{ marginRight: 5 }}
            size="lg"
            color="primary"
          >
            3
          </Button>
          <Button
            onClick={() => {
              setPlayers(4);
            }}
            color="danger"
            size="lg"
          >
            4
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

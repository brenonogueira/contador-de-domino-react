import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import NoSleep from "nosleep.js";

export const Placar = () => {
  const location = useLocation();

  const [dupla1, setDupla1] = useState({
    nome: "Dupla 1",
    pontuacao: 0,
  });

  const [dupla2, setDupla2] = useState({
    nome: "Dupla 2",
    pontuacao: 0,
  });

  const [jogador1, setJogador1] = useState({
    nome: "Jogador 1",
    pontuacao: 0,
  });

  const [jogador2, setJogador2] = useState({
    nome: "Jogador 2",
    pontuacao: 0,
  });

  const [jogador3, setJogador3] = useState({
    nome: "Jogador 3",
    pontuacao: 0,
  });

  useEffect(() => {
    let isEnableNoSleep = false;
    const noSleep = new NoSleep();
    document.addEventListener(
      `click`,
      function enableNoSleep() {
        document.removeEventListener(`click`, enableNoSleep, false);
        noSleep.enable();
        isEnableNoSleep = true;
        // alert(`Boa`);
      },
      false
    );
    return () => {
      if (isEnableNoSleep) {
        noSleep.disable();
      }
    };
  }, []);

  return location.state.jogadores === 3 ? (
    <Container
      style={{
        height: "100%",
        display: "block",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        // backgroundColor: "red",
      }}
    >
      <h1 style={{ textAlign: "center", paddingTop: "20px", color: "green" }}>
        {jogador1.nome}
      </h1>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "20%",
        }}
      >
        <Col xs="6" sm="6" style={{ display: "flex" }}>
          <Button
            onClick={() =>
              setJogador1({
                nome: "Jogador 1",
                pontuacao: jogador1.pontuacao - 10,
              })
            }
            color="danger"
          >
            -10
          </Button>
          <Button
            onClick={() =>
              setJogador1({
                nome: "Jogador 1",
                pontuacao: jogador1.pontuacao + 5,
              })
            }
          >
            5
          </Button>
          <Button
            onClick={() =>
              setJogador1({
                nome: "Jogador 1",
                pontuacao: jogador1.pontuacao + 10,
              })
            }
          >
            10
          </Button>
          <Button
            onClick={() =>
              setJogador1({
                nome: "Jogador 1",
                pontuacao: jogador1.pontuacao + 50,
              })
            }
            color="success"
          >
            50
          </Button>
          {/* <Button>50</Button> */}
        </Col>
        <Col xs="3" sm="4">
          <h1>{jogador1.pontuacao} </h1>
        </Col>
      </Row>

      <Row>
        <Col sm="12" md="12" lg="12">
          <hr />
        </Col>
      </Row>
      <h1 style={{ textAlign: "center", color: "blue" }}>{jogador2.nome}</h1>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "20%",
        }}
      >
        <Col xs="6" sm="6" style={{ display: "flex" }}>
          <Button
            onClick={() =>
              setJogador2({
                nome: "Jogador 2",
                pontuacao: jogador2.pontuacao - 10,
              })
            }
            color="danger"
          >
            -10
          </Button>
          <Button
            onClick={() =>
              setJogador2({
                nome: "Jogador 2",
                pontuacao: jogador2.pontuacao + 5,
              })
            }
          >
            5
          </Button>
          <Button
            onClick={() =>
              setJogador2({
                nome: "Jogador 2",
                pontuacao: jogador2.pontuacao + 10,
              })
            }
          >
            10
          </Button>
          <Button
            onClick={() =>
              setJogador2({
                nome: "Jogador 2",
                pontuacao: jogador2.pontuacao + 50,
              })
            }
            color="success"
          >
            50
          </Button>
          {/* <Button>50</Button> */}
        </Col>
        <Col xs="3" sm="4">
          <h1>{jogador2.pontuacao} </h1>
        </Col>
      </Row>

      <Row>
        <Col sm="12" md="12" lg="12">
          <hr />
        </Col>
      </Row>
      <h1 style={{ textAlign: "center", color: "red" }}>{jogador3.nome}</h1>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "20%",
        }}
      >
        <Col xs="6" sm="6" style={{ display: "flex" }}>
          <Button
            onClick={() =>
              setJogador3({
                nome: "Jogador 3",
                pontuacao: jogador3.pontuacao - 10,
              })
            }
            color="danger"
          >
            -10
          </Button>
          <Button
            onClick={() =>
              setJogador3({
                nome: "Jogador 3",
                pontuacao: jogador3.pontuacao + 5,
              })
            }
          >
            5
          </Button>
          <Button
            onClick={() =>
              setJogador3({
                nome: "Jogador 3",
                pontuacao: jogador3.pontuacao + 10,
              })
            }
          >
            10
          </Button>
          <Button
            onClick={() =>
              setJogador3({
                nome: "Jogador 3",
                pontuacao: jogador3.pontuacao + 50,
              })
            }
            color="success"
          >
            50
          </Button>
          {/* <Button>50</Button> */}
        </Col>
        <Col xs="3" sm="4">
          <h1>{jogador3.pontuacao} </h1>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container
      style={{
        height: "100%",
        display: "block",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "space-around",
      }}
    >
      <Row>
        <Col
          sm="12"
          md="12"
          lg="12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20%",
          }}
        >
          <div
            style={{
              width: "100%",
              // backgroundColor: "red",
              display: "flex",
              justifyContent: "space-evenly",
              position: "absolute",
              top: 0,
            }}
          >
            <Button
              onClick={() =>
                setDupla1({
                  nome: "Dupla 1",
                  pontuacao: dupla1.pontuacao - 10,
                })
              }
              color="danger"
            >
              -10
            </Button>
            <Button
              onClick={() =>
                setDupla1({
                  nome: "Dupla 1",
                  pontuacao: dupla1.pontuacao + 5,
                })
              }
              className="bg-dark"
              size={"lg"}
            >
              5
            </Button>
            <Button
              onClick={() =>
                setDupla1({
                  nome: "Dupla 1",
                  pontuacao: dupla1.pontuacao + 10,
                })
              }
              className="bg-dark"
            >
              10
            </Button>
            <Button
              onClick={() =>
                setDupla1({
                  nome: "Dupla 1",
                  pontuacao: dupla1.pontuacao + 50,
                })
              }
              color="success"
            >
              50
            </Button>
          </div>
        </Col>

        <Col sm="12" md="12" lg="12">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // backgroundColor: "red",
              paddingBottom: "15%",
              paddingTop: "18%",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h6 style={{ color: "red" }}>{dupla1.nome}</h6>
              <h1 style={{ fontSize: "100px" }}>{dupla1.pontuacao} </h1>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="12" md="12" lg="12">
          <hr />
        </Col>
      </Row>

      <Row>
        <Col sm="12" md="12" lg="12">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20%",
              // bottom: 0,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h6 style={{ color: "blue" }}>{dupla2.nome}</h6>
              <h1 style={{ fontSize: "100px" }}>{dupla2.pontuacao} </h1>
            </div>
          </div>
        </Col>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: "20%",
            position: "absolute",
            bottom: 2,
          }}
        >
          <Button
            onClick={() =>
              setDupla2({ nome: "Dupla 2", pontuacao: dupla2.pontuacao - 10 })
            }
            color="danger"
          >
            -10
          </Button>
          <Button
            onClick={() =>
              setDupla2({ nome: "Dupla 2", pontuacao: dupla2.pontuacao + 5 })
            }
            size={"lg"}
            className="bg-dark"
          >
            5
          </Button>
          <Button
            onClick={() =>
              setDupla2({ nome: "Dupla 2", pontuacao: dupla2.pontuacao + 10 })
            }
            className="bg-dark"
          >
            10
          </Button>
          <Button
            onClick={() =>
              setDupla2({ nome: "Dupla 2", pontuacao: dupla2.pontuacao + 50 })
            }
            color="success"
          >
            50
          </Button>
        </div>
      </Row>
    </Container>
  );
};

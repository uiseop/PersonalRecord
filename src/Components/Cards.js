import axios from "axios";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import Ellipsis from "../styles/Ellipsis";
import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const client = axios.create({ baseURL: BASE_URL });

const Cards = () => {
  const {
    data: { data },
  } = useQuery("cards", () => client.get("/users"), {
    suspense: true,
  });

  const [cardLists, setCardLists] = useState([]);

  useEffect(() => {
    setCardLists(data);
  }, []);

  const onClickHandler = (card, index) => {
    const cards = [...cardLists];
    cards[index].isFlipped = !cards[index].isFlipped;
    setCardLists(cards);
  };

  return (
    <CardsWrapper>
      {cardLists?.map((card, index) => {
        return (
          <Card
            key={card.id}
            flipped={card.isFlipped ? "true" : ""}
            onClick={() => onClickHandler(card, index)}
          >
            <CardPlane front="true">
              <span>{card.username}</span>
            </CardPlane>
            <CardPlane back="true">
              <span>{card.email}</span>
            </CardPlane>
          </Card>
        );
      })}
    </CardsWrapper>
  );
};

const CardsWrapper = styled.div`
  width: 80%;
  margin: 10px auto;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  margin: 20px 10px;
  width: 200px;
  height: 260px;
  border-radius: 25px;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  transform: ${(props) =>
    props.flipped ? "translateX(-100%) rotateY(-180deg)" : "none"};

  &:hover {
    cursor: pointer;
  }
`;

const CardPlane = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => (props.front ? "white" : "black")};
  backface-visibility: hidden;
  background: ${(props) => (props.front ? "#0d0d0d" : "#f2f2f2")};
  transform: ${(props) => (props.back ? "rotateY(180deg)" : "none")};

  & span {
    ${Ellipsis()};
  }
`;

export default Cards;

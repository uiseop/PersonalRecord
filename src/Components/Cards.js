import axios from "axios";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import Ellipsis from "../styles/Ellipsis";
import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const client = axios.create({ baseURL: BASE_URL });

const Cards = () => {
  const [cardLists, setCardLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    client.get(`/todos?_page=${page}`).then(({ data }) => {
      setIsLoading(false);
      setCardLists(data);
      setPage((cur) => cur + 1);
    });
  }, []);

  const onClickHandler = (index) => {
    const cards = [...cardLists];
    cards[index].isFlipped = !cards[index].isFlipped;
    setCardLists(cards);
  };

  return (
    <CardsWrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        cardLists?.map((card, index) => {
          return (
            <Card
              key={card.id}
              flipped={card.isFlipped ? "true" : ""}
              onClick={() => onClickHandler(index)}
            >
              <CardPlane front="true">
                <span>{card.title}</span>
              </CardPlane>
              <CardPlane back="true">
                <span>{String(card.completed)}</span>
              </CardPlane>
            </Card>
          );
        })
      )}
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

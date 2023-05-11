import axios from "axios";
import { styled } from "styled-components";
import Ellipsis from "../styles/Ellipsis";
import { useCallback, useEffect, useState } from "react";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const client = axios.create({ baseURL: BASE_URL });

const Cards = () => {
  const URL = `/todos?_page=`;
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchCards = useCallback(
    (page) => {
      if (isError) return;
      setIsLoading(true);
      client
        .get(`${BASE_URL}${URL}${page}`)
        .then(({ data }) => {
          if (page === 3) throw new Error("여기서 에러 발생!");
          setCards((prev) => [...prev, ...data]);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(err.message);
          setIsLoading(false);
        });
    },
    [isError]
  );

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (page) {
      fetchCards(page);
    }
  }, [page]);

  const setObservationTarget = useIntersectionObserver(loadMore);

  return (
    <CardsWrapper>
      {cards?.map((card, index) => {
        return (
          <Card
            key={index}
            flipped={card.isFlipped ? "true" : ""}
            ref={index === cards.length - 1 ? setObservationTarget : null}
          >
            <CardPlane front="true">
              <span>{card.id}</span>
            </CardPlane>
            <CardPlane back="true">
              <span>{String(card.completed)}</span>
            </CardPlane>
          </Card>
        );
      })}
      <div ref={cards.length === 0 ? setObservationTarget : null}></div>
      {isLoading ? <div>Loading...</div> : ""}
      {isError ? <div>Something went wrong..!!!</div> : ""}
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

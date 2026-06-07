import styled from "styled-components";
import { Link } from "react-router-dom";

const SongLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

const LoaderImg = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: contain;
`;

export { SongLink, LoaderImg };

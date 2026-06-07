
import styled from 'styled-components';

const AsideLeftStyles = styled.section`
    overflow-y: auto;
    grid-area:  1 / 1 / 6 / 2;
    border-radius: 2rem;
    color: #fff;
    border: 1px solid grey;
    flex-direction: column;
    scrollbar-width: none;     
    -ms-overflow-style: none;

    @media screen and (max-width: 768px) {
        width: 15rem;
    }

    @media screen and (max-width: 39rem) {
        display: none;
    }
   
`;

const Top = styled.div`
        background-color: ${props=> props.theme.colors.bgColor};
        height: 4.5rem;
        width: 100%;
        border-radius: 2rem 2rem 0 0;
        position:sticky;
        top: 0px;
        z-index: 2;
        border-bottom: 1px solid grey;`;


const Sects = styled.div`
padding: .5rem;
        `;

const SectsP = styled.p`
                color: ${props => props.theme.colors.colorTextAside};
                margin-top: 2rem;
                font-size: 1.5rem;
                margin-left: 1rem;`;

const Button = styled.button`
            height: 4.5rem;
            width: 14.7%;
            border-radius:0rem 0rem 2rem 2rem;
            padding-left: 1rem;
            position: absolute;
            z-index: 2;
            bottom: 1px;
            cursor: pointer;
            background: rgba(94, 88, 88, 0.25);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5.1px);
            -webkit-backdrop-filter: blur(5.1px);
            border: 1px solid rgba(94, 88, 88, 0.3);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;`;

const ButtonImg = styled.img`
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            `;

export {AsideLeftStyles, Top, Sects, SectsP, Button, ButtonImg};


import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const SubsCard = () => {
  return (
    <StyledCard>
      <div className="profile_img">
        <img
          src={
            "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-1.jpg"
          }
          alt=""
        />
      </div>
      <div className="name">
        <p>Channel Name</p>
        <p>1.23k subscribers</p>
      </div>
      <div className="subs__btn">
        <p>Subscribe</p>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faBell} />
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin: 0;
  padding: 0.4rem;
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  width: 500px;
  background-color: #fff;
  box-shadow: 4px 4px 4px #f3f3f3;
  align-items: center;
  justify-content: space-evenly;
  .profile_img {
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  p {
    margin: 0;
  }
  .name {
    display: flex;
    flex-direction: column;
  }
  .subs__btn {
    background-color: red;
    padding: 0.5rem 2rem;
    color: #fff;
    letter-spacing: 1px;
    &:hover {
      background-color: #f5f5f5;
      color: grey;
      cursor: pointer;
    }
  }
  .icon {
    padding: 0.9rem;
    border-radius: 50%;
    &:hover {
      background-color: #f3f3f3;
      cursor: pointer;
    }
  }
`;

export default SubsCard;

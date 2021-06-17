import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBellSlash } from "@fortawesome/free-solid-svg-icons";
import { pageAnimation } from "../animation/animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SubsCard = () => {
  const [subsIcon, setSubsIcon] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  return (
    <>
      <StyledCard
        variants={pageAnimation}
        animate="show"
        exit="exit"
        initial="hidden"
        isSubscribed={subscribed}
      >
        <div></div>
        <div className="profile_img">
          <motion.img
            src={
              "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-1.jpg"
            }
            alt=""
            initial={{ rotate: 45, scale: 0.5 }}
            animate={{
              rotate: 0,
              scale: 1,
              transition: {
                duration: 0.8,
              },
            }}
            exit={{ scale: 0.5, rotate: 45 }}
          />
        </div>
        <div className="name">
          <p>Channel Name</p>
          <p>1.23k subscribers</p>
        </div>
        <div
          className="subs__btn"
          onClick={() => {
            setSubscribed(!subscribed);
          }}
        >
          <p>{subscribed !== true ? "Subscribe" : "Subscribed"}</p>
        </div>
        <div
          className="icon"
          onClick={() => {
            setSubsIcon(!subsIcon);
          }}
        >
          <FontAwesomeIcon icon={subsIcon ? faBell : faBellSlash} />
        </div>
        <Link to="/2">
          <div className="test"></div>
        </Link>
      </StyledCard>
    </>
  );
};

const StyledCard = styled(motion.div)`
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
    background-color: ${(props) => (props.isSubscribed ? "#f3f3f3" : "red")};
    padding: 0.5rem 2rem;
    color: ${(props) => (props.isSubscribed ? "#000" : "#fff")};
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
  .test {
    height: 10px;
    width: 10px;
  }
`;

export default SubsCard;

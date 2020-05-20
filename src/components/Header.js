import React, { useState } from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
// icon
import { GiHamburgerMenu } from "react-icons/gi";
// constants
import links from "../constants/links";

const getImage = graphql`
  {
    logo: file(relativePath: { eq: "just-pygo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Header = () => {
  const { logo } = useStaticQuery(getImage);

  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <NavbarWrapper>
      <div></div>
      <div className='logo'>
        <Link to='/'>
          <Img fluid={logo.childImageSharp.fluid}></Img>
        </Link>
      </div>

      <div className='menu'>
        <div className={isOpen ? `toggle fix` : `toggle`} onClick={toggleNav}>
          <GiHamburgerMenu />
        </div>
        <div className={isOpen ? `mobile-nav show` : `mobile-nav`} id='sidebar'>
          <ul className='nav-links'>
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='nav-links'>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  display: grid;
  grid-template-columns: 50px 1fr 3fr 50px;
  padding: 1rem 0;

  .logo {
    align-self: center;
    min-width: 150px;
    max-width: 200px;
  }

  a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
  }
  li:hover {
    a {
      color: red;
    }
  }

  @media (min-width: 765px) {
    .toggle {
      display: none;
    }
    .mobile-nav {
      display: none;
    }
    .menu {
      margin-left: auto;
      ul {
        display: flex;
        align-items: center;
        list-style-type: none;
        li {
          padding: 1rem;
        }
      }
    }
  }

  @media (max-width: 765px) {
    .menu {
      .toggle {
        display: flex;
        justify-content: right;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 50;
        position: absolute;
        top: 25px;
        right: 25px;
      }
      .mobile-nav {
        height: 100%;
        width: 0px;
        right: 0;
        top: 0;
        position: fixed;
        background: white;
        transition: width ease-in 0.3s;
      }
      .nav-links {
        display: none;
      }
      .fix {
        position: fixed;
      }
      .show {
        width: 175px;
        display: flex;
        .nav-links {
          display: flex;
          flex-direction: column;
          list-style-type: none;
          margin-top: 75px;
          margin-left: 15px;
        }
        li {
          position: relative;
          padding: 0.5rem 0;
          width: 175px;
        }
        li:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 5%;
          border-bottom: solid 1px grey;
          transition: width ease-in 0.2s;
        }
        li:hover:after {
          width: 75%;
          transition: width ease-in 0.2s;
          border-color: red;
        }
      }
    }
  }
`;

export default Header;

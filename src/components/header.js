import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

import { nonExecutableDefinitionMessage } from "graphql/validation/rules/ExecutableDefinitions";


const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            marginRight: `1em`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <nav style={{alignSelf: `flex-end`}}>
      <ul
        style={{
          marginBottom: 0,
          marginTop: `1em`,
          marginLeft: 0,
          listStyle: `none`,
          display: `flex`,
        }}
      >
        <StyledLi><Link to="/">About</Link></StyledLi>
        <StyledLi><Link to="/notes">Notes</Link></StyledLi>
        <StyledLi><Link to="/talks">Talks</Link></StyledLi>
        <StyledLi><Link to="/events">Events</Link></StyledLi>
      </ul>
    </nav>
  </div>
</header>

)

const StyledLi = styled.li`
   margin-right: 1em;
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

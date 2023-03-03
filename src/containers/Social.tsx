import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import SvgIcon from "../components/SvgIcon"
import Dropdown from "../components/Dropdown"

/**
 * Types
 */
interface Props {}
interface LinkProps {
  href?: string
  target?: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gray};

  span {
    margin: 0 ${rem(5)};
  }

  a {
    color: inherit;

    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media all and (max-width: 915px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`

const SocialLink = styled.a<LinkProps>`
  margin: 0 ${rem(5)};
`

const Social: React.FC<Props> = () => {
  return (
    <Wrapper>
      <SocialLink href="https://github.com/orenyomtov/ordinals-eyes" target="_blank">
        <SvgIcon iconKey="github" />
      </SocialLink>
    </Wrapper>
  )
}

export default Social

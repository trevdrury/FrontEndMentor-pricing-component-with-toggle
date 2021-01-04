import styled, { css } from 'styled-components'

const spanSharedStyles = css`
  line-height: 28px;
  text-align: right;
  color: #6e728e;
  opacity: 0.5;
`

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2.0rem;
`

export const Annually = styled.span`
  ${spanSharedStyles}
`

export const Monthly = styled.span`
  ${spanSharedStyles}
`

export const CheckBoxWrapper = styled.div`
  position: relative;
  margin: 0 2.4rem;
`

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 5.6rem;
  height: 3.2rem;
  border-radius: 1.6rem;
  background: linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
    margin: 0.4rem;
    background: #fff;
    transition: 0.2s;
  }
`

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 1.5rem;
  width: 5.6rem;
  height: 3.2rem;
  &:checked + ${CheckBoxLabel} {
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 2.4rem;
      height: 2.4rem;
      margin-left: 50%;
      transition: 0.2s;
    }
  }
`

/*
export const ToggleBack = styled.div`
  width: 5.6rem;
  height: 3.2rem;
  background: linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%);
  border-radius: 16px;
  margin: 0 2.4rem;
  cursor: pointer;
`

export const ToggleFront = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background: #fff;
  border-radius: 50%;
  margin: 0.4rem;
`
*/
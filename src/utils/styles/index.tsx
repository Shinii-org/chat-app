import styled from "styled-components";
import { PageProps } from "./styleTypes";
export const SIDEBAR_WIDTH = 400;
export const InputField = styled.input`
  width: 100%;
  outline: none;
  font-family: "Inter";
  border: none;
  color: #fff;
  font-size: 18px;
  box-sizing: border-box;
  background-color: inherit;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  outline: none;
  border: none;
  font-family: "Inter";
  font-size: 16px;
  border-radius: 10px;
  background-color: #2b09ff;
  padding: 25px 0;
  font-weight: 500;
  transition: 250ms background-color ease;
  &:hover {
    cursor: pointer;
    background-color: #381aff;
  }
  &:focus {
    background-color: #4f34ff;
    border: 2px solid #fff;
  }
  &:active {
    background-color: #3a1cff;
  }
`;

export const Page = styled.div<PageProps>`
  height: 100%;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};

  background-color: #1a1a1a;
  align-items: ${(props) => props.alignItems};
`;

export const ConservationSidebarStyle = styled.aside`
  background-color: #1a1a1a;
  height: 100%;
  width: ${SIDEBAR_WIDTH}px;
  position: absolute;
  top: 0;
  overflow-y: scroll;
  left: 0;
  border-right: 1px solid #5454543d;
  &&::-webkit-scrollbar {
    width: 10px;
    height: 5px;
    background-color: #000;
  }
  &&::-webkit-scrollbar-thumb {
    background-color: #2d2d2d;
  }
`;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 32px;
  box-sizing: border-box;
  border-bottom: 1px solid #ffffff2b;
  background-color: #131313;
`;

export const ConversationSidebarContainer = styled.div``;

export const ConversationSidebarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: ${SIDEBAR_WIDTH}px;
  align-items: center;
  background-color: #151515;
  height: 100px;
  border-bottom: 1px solid #5454543d;
  & h1 {
    font-weight: 500;
  }
`;

import {
  ConservationSidebarStyle,
  ConversationSidebarContainer,
  ConversationSidebarHeader,
  ConversationSidebarItem,
} from "../../utils/styles";
import { TbEdit } from "react-icons/tb";
import { FC } from "react";
import { ConversationType } from "../../utils/types";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

type ConversationProps = {
  conversations: ConversationType[];
};

export const ConversationSidebar = ({
  conversations,
}: ConversationProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <ConservationSidebarStyle>
      <ConversationSidebarHeader>
        <h1>Conversations</h1>
        <TbEdit size={36} />
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation) => (
          <ConversationSidebarItem
            onClick={() => navigate(`/conversations/${conversation.id}`)}
          >
            <div className={styles.conversationAvatar}></div>
            <div>
              <span className={styles.conversationName}>
                {conversation.name}
              </span>
              <span className={styles.conversationLastMessage}>
                {conversation.lastMessage}
              </span>
            </div>
          </ConversationSidebarItem>
        ))}
      </ConversationSidebarContainer>
    </ConservationSidebarStyle>
  );
};

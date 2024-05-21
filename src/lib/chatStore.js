// import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
// import { db } from "./firebase";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiveBlocked: false,
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;
    // CHEK IF CURRENT USER IS BLOCKED
    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiveBlocked: false,
      });
    }

    // CHECK IF RECEIVER IS BLOQKED
    else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiveBlocked: true,
      });
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiveBlocked: false,
      });
    }
  },
  changeBlock: () => {
    set((state) => ({ ...state, isReceiveBlocked: !state.isReceiveBlocked }));
  },
}));

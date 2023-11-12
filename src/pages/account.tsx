import React from 'react';
import AccountPage from '@/components/AccountPage/Account';
import ChatPage from '@/components/AgentChat/PhoneChat';

const Account = () => {
  return (
    <div className="flex flex-row w-full min-h-screen">
        <AccountPage />
        <div className="w-full lg:w-4/12 ml-auto" style={{ fontFamily: "Futura, Arial, sans-serif" }}>
            <ChatPage />
        </div>
    </div>
  );
};

export default Account;

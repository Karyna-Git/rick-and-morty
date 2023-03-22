import React from "react";
import { useAppSelector, useLogout, useMenuActions } from "../../store/hooks";
import { AvatarButton } from "./AvatarButton";
import { UserInfoMenu } from "./UserInfoMenu";

export const UserInfo: React.FC = () => {
  const logout = useLogout();
  const { anchorElement, openMenu, closeMenu } = useMenuActions();

  const { name, email, picture } = useAppSelector(
    (state) => state.user.profile
  );

  return (
    <>
      <AvatarButton name={name} picture={picture} handleOpenMenu={openMenu} />
      <UserInfoMenu
        name={name}
        email={email}
        picture={picture}
        anchorElement={anchorElement}
        closeMenu={closeMenu}
        onLogout={logout}
      />
    </>
  );
};

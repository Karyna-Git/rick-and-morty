import { googleLogout } from "@react-oauth/google";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { userActions } from "../../store/user.slice";
import { AvatarButton } from "./AvatarButton";
import { UserInfoMenu } from "./UserInfoMenu";

export const UserInfo: React.FC = () => {
  const dispatch = useAppDispatch();

  const { name, email, picture } = useAppSelector(
    (state) => state.user.profile
  );

  const [anchorElUser, setAnchorElUser] = React.useState<HTMLElement | null>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOut = () => {
    googleLogout();
    dispatch(userActions.setProfile(null));
    dispatch(userActions.setUser(null));
  };

  return (
    <>
      <AvatarButton
        name={name}
        picture={picture}
        handleOpenMenu={handleOpenUserMenu}
      />
      <UserInfoMenu
        name={name}
        email={email}
        picture={picture}
        anchorElement={anchorElUser}
        closeMenu={handleCloseUserMenu}
        logOut={logOut}
      />
    </>
  );
};
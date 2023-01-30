import React from 'react';

import { Button, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import useTheme from '@mui/material/styles/useTheme';
import { Link, LinkProps, useRouteMatch } from 'react-router-dom';

//citation: https://material-ui.com/components/app-bar/#hide-app-bar

const NavbarItemButton = styled(Button)<{activeTab: boolean} & LinkProps>(
  ({ theme, activeTab }) => ({
    marginLeft: 8,
    marginRight: 8,
    textTransform: 'initial',
    backgroundColor: activeTab
      ? theme.background.headerButtonColor
      : undefined,
    color: activeTab ? `${theme.palette.text.primary} !important` : undefined,
  })
);

type NavbarItemProps = {
  text: string;
  to: string;
};

function NavItem(props: NavbarItemProps): JSX.Element {
  const { text, to } = props;
  const isSm = useMediaQuery(useTheme().breakpoints.down('sm'));
  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <NavbarItemButton
      component={Link}
      to={to}
      activeTab={!!match}
      size={isSm ? 'small' : 'medium'}
      color="primary"
    >
      {text}
    </NavbarItemButton>
  );
}

export { NavItem };

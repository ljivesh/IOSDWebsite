import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Layout.module.css';
import {  NavLink } from 'react-router-dom';
import IOSDLogo from '../assets/iosd-mait-white.png';

const links = [
  { link: '/team', label: 'Team' },
  { link: '/events', label: 'Events' },
  { link: '/contact', label: 'Contact Us' },
];

export default function Layout() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={classes.link}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <img src={IOSDLogo} alt="IOSD Logo" style={{backgroundColor: '#322653', height: '100%', borderRadius: '10px'}} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
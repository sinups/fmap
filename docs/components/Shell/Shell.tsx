import React from 'react';
import cx from 'clsx';
import {
  AppShell,
  Container,
  Group,
  RemoveScroll,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { ColorSchemeControl, HeaderControls } from '@mantinex/mantine-header';
import logo from '../../assets/logo.png';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod + J', toggleColorScheme]]);

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={cx(RemoveScroll.classNames.zeroRight, classes.header)}>
        <Container size="lg" px="md" className={classes.inner}>
          <a
            href="https://layers.md"
            target="_blank"
            className={cx('mantine-focus-auto', classes.logo)}
            rel="noreferrer"
          >
            <img src={logo.src} alt="fmap" style={{ height: 30 }} />
            <Text fw={700}>Layers</Text>
          </a>

          <HeaderControls
            visibleFrom="sm"
            withDiscord={false}
            withGithub={false}
            discordLink="#"
            githubLink="#"
            withDirectionToggle={false}
            withSearch={false}
            withSupport={false}
          />

          <Group hiddenFrom="sm">
            <ColorSchemeControl />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}

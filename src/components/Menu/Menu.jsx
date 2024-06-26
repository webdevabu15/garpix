import { Menu, rem, Flex, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import "@mantine/core/styles.css"
import { Link } from 'react-router-dom';
import {navLinkGroup,navLinkGroup2 } from "../constants.ts"
function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Menu shadow="md" width={300} >
      <Menu.Target>
        <Burger opened={opened} onClick={toggle} ria-label="Toggle navigation" className="nav-toggler"></Burger>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Flex fz={'18px'} direction={'column'}>
            {navLinkGroup.map((link) => (
              <li className="nav-link-item">
                <Link to={"/singlePage"}>
                 {link}
                </Link>
              </li>
            ))}
          </Flex>
        <Flex direction={'column'}>
            {navLinkGroup2.map((link) => (
              <li className="nav-link-item">
                <Link to={"/singlePage"}>
                 {link}
                </Link>
              </li>
            ))}
          </Flex>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Demo

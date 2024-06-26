import { Menu, Flex, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "@mantine/core/styles.css";
import { Link } from "react-router-dom";
import { navLinkGroup, navLinkGroup2 } from "../constants.ts";
function Demo() {
  const [opened, { toggle, close }] = useDisclosure();
  console.log(opened);
  return (
    <Menu shadow="md" width={300} onClose={close}>
      <Menu.Target>
        <Burger
          opened={opened}
          onClick={toggle}
          ria-label="Toggle navigation"
          className="nav-toggler"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Flex fz={"18px"} direction={"column"} pl={20} pr={20}>
          {navLinkGroup.map((link) => (
            <li className="nav-link-item">
              <Link to={"/singlePage"}>{link}</Link>
            </li>
          ))}
        </Flex>
        <Flex direction={"column"} pl={20} pr={20}>
          {navLinkGroup2.map((link) => (
            <li className="nav-link-item">
              <Link to={"/singlePage"}>{link}</Link>
            </li>
          ))}
        </Flex>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Demo;

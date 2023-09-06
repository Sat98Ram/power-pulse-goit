import PropTypes from "prop-types";

import UserNavItem from "./UserNavItem";

const navMenu = [
  { link: "/diary", label: "Diary", id: 1 },
  { link: "/products", label: "Products", id: 2 },
  { link: "/exercises", label: "Exercises", id: 3 },
];

const UserNav = ({ className, classNameLink, classNameItem, setIsOpen }) => {
  return (
    <>
      <nav>
        <ul className={className}>
          {navMenu.map((item) => (
            <UserNavItem
              link={item.link}
              label={item.label}
              key={item.id}
              className={classNameLink}
              classNameItem={classNameItem}
              setIsOpen={setIsOpen}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
0;

export default UserNav;

UserNav.propTypes = {
  className: PropTypes.string,
  classNameLink: PropTypes.func,
  classNameItem: PropTypes.string,
  setIsOpen: PropTypes.func,
};

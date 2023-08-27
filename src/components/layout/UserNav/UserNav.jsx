import css from "./UserNav.module.css";
import UserNavItem from "./UserNavItem";

const navMenu = [
  { link: "/diary", label: "Diary", id: 1 },
  { link: "/products", label: "Products", id: 2 },
  { link: "/exercises", label: "Exercises", id: 3 },
];

const UserNav = () => {
  return (
    <>
      <nav className={css.userNav}>
        <ul className={css.userNavList}>
          {navMenu.map((item) => (
            <UserNavItem link={item.link} label={item.label} key={item.id} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default UserNav;

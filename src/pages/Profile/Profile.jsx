import Container from "../../components/Container/Container";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import { UserCard } from "../../components/UserCard/UserCard";
import { UserForm } from "../../components/UserForm/UserForm";
import css from "./Profile.module.css";

const Profile = () => {
  return (
    <Container className={css.profileContainer}>
      <TitlePage text="Profile settings" />
      <div className={css.desktopContainer}>
        <UserCard />
        <UserForm />
      </div>
    </Container>
  );
};

export default Profile;

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { AddPhotoIcon } from "./AddPhotoIcon/AddPhotoIcon";
import { selectUser } from "../../redux/auth/selectors";
import { DiaryDashboardItem } from "../diary/DiaryDashboardItem/DiaryDashboardItem";
import LogOutBtn from "../Layout/LogOutBtn/LogOutBtn";
import { ExclamationMark } from "./ExclamationMark/ExclamationMark";
import BasicModalWindow from "../BasicModalWindow/BasicModalWindow";
import ModalLogOut from "../Layout/ModalLogOut/ModalLogOut";
import { changeAvatarThunk, logoutThunk } from "../../redux/auth/operations";
import symbolDefs from "../../assets/images/symbol-defs.svg";

import css from "./UserCard.module.css";

export const UserCard = () => {
  const [isLogout, setIsLogout] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const { avatar, name, bodyData } = user;

  const showModalLogOut = () => {
    setIsLogout((prev) => !prev);
  };

  const handleLogOut = () => {
    dispatch(logoutThunk());

    showModalLogOut();
  };

  const onChange = (e) => {
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);

    dispatch(changeAvatarThunk(formData));
  };

  return (
    <div className={css.profileContainer}>
      <div className={css.profileSettings}>
        <div className={css.avatarContainer}>
          <div className={css.avatar}>
            {!avatar ? (
              <svg className={css.profileAvatar}>
                <use href={symbolDefs + "#user-icon"}></use>
              </svg>
            ) : (
              <img src={avatar} alt="avatar" className={css.avatarImage} />
            )}
          </div>
          <div className={css.addPhotoBtn}>
            <label htmlFor="file-input">
              <AddPhotoIcon />
              <input
                id="file-input"
                type="file"
                className={css.file}
                onChange={onChange}
              />
            </label>
          </div>
        </div>
        <h3 className={css.profileName}>{name}</h3>
        <p className={css.user}>User</p>
      </div>
      <div className={css.profileDiary}>
        <DiaryDashboardItem
          svg="fork-and-knife-icon"
          title="Daily calorie intake"
          content={bodyData.dailyRateCalories}
          className={css.diary_item_red}
        />
        <DiaryDashboardItem
          svg="dumbbell-icon"
          title="Daily norm of sports"
          content={`${bodyData.dailySportMin}`}
          className={css.diary_item_red}
        />
      </div>
      <div className={css.profileWarning}>
        <div className={css.warningMark}>
          <ExclamationMark />
        </div>
        <p className={css.warningText}>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>
      </div>
      <div className={css.logoutContainer}>
        <LogOutBtn onClick={showModalLogOut} className={css.logoutIcon} />
      </div>
      {isLogout && (
        <BasicModalWindow isOpenModalToggle={showModalLogOut}>
          <ModalLogOut logout={handleLogOut} />
        </BasicModalWindow>
      )}
    </div>
  );
};

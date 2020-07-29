import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfilesById } from "../../actions/profile";

import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.profile);
  const profileLoading = useSelector((state) => state.profile.loading);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfilesById(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <Fragment>
      {profileData === null || profileLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          {profileData.user.name}
          <Link className="btn btn-light" to="/profiles">
            Back to developers
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profileData.user._id && (
              <Link className="btn btn-dark" to="/edit-profile">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profileData} />
            <ProfileAbout profile={profileData} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;

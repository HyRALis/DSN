import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfilesById } from "../../actions/profile";

import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";

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
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profileData.experience.length > 0 ? (
                <Fragment>
                  {profileData.experience.map((exp) => (
                    <ProfileExperience key={exp._id} experience={exp} />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>
            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profileData.education.length > 0 ? (
                <Fragment>
                  {profileData.education.map((edu) => (
                    <ProfileEducation key={edu._id} education={edu} />
                  ))}
                </Fragment>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div>
            {profileData.githubusername && (
              <ProfileGithub githubUsername={profileData.githubusername} />
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
